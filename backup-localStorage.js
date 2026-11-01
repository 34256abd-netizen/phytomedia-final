/**
 * Backup copy of localStorage engine for Phi Ecosystem App
 * Created prior to Supabase data migration step.
 * Serves as full fallback mechanism if Supabase connection fails or is offline.
 */

export const STORAGE_KEY_USER = 'phi_user_account_ecosystem_v1';
export const STORAGE_KEY_MENTORS = 'phi_mentors_ecosystem_v1';
export const STORAGE_KEY_JOBS = 'phi_jobs_ecosystem_v1';
export const STORAGE_KEY_APPLICATIONS = 'phi_applications_ecosystem_v1';
export const STORAGE_KEY_STUDENTS = 'phi_students_ecosystem_v1';
export const STORAGE_KEY_BOOKINGS = 'phi_bookings_ecosystem_v1';
export const STORAGE_KEY_CHALLENGES = 'phi_challenges_ecosystem_v1';
export const STORAGE_KEY_SUBMISSIONS = 'phi_submissions_ecosystem_v1';
export const STORAGE_KEY_TIMA = 'phi_tima_card_v1';
export const STORAGE_KEY_POINTS = 'phi_tima_points_infinite_v1';
export const STORAGE_KEY_PRESTIGE = 'phi_tima_prestige_v1';
export const STORAGE_KEY_CUSTOM_THEME = 'phi_tima_custom_theme_v1';
export const STORAGE_KEY_REPORTS = 'tima_reports';
export const STORAGE_KEY_VERIFICATIONS = 'tima_verifications';
export const STORAGE_KEY_BLACKLIST_IPS = 'tima_blacklist_ips';

/**
 * Resizes and compresses an uploaded image file using an off-screen canvas.
 * Prevents QuotaExceededError in localStorage.
 */
export function compressImageFile(file, maxWidth = 800, maxHeight = 800, quality = 0.65) {
  return new Promise((resolve) => {
    if (!file) {
      resolve('');
      return;
    }

    if (!file.type || !file.type.startsWith('image/')) {
      if (file.size > 200 * 1024) {
        resolve(`[مستند مرفق: ${file.name || 'document'}]`);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result || '');
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, width);
        canvas.height = Math.max(1, height);
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } else {
          resolve(e.target?.result || '');
        }
      };
      img.onerror = () => resolve(e.target?.result || '');
      img.src = e.target?.result;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

/**
 * Prunes oversized data blobs from localStorage if storage is bloated
 */
export function pruneStorageForQuota() {
  try {
    // 1. Prune oversized verifications
    const rawVerifs = localStorage.getItem(STORAGE_KEY_VERIFICATIONS);
    if (rawVerifs && rawVerifs.length > 250000) {
      try {
        const parsed = JSON.parse(rawVerifs);
        const cleaned = parsed.map(v => ({
          ...v,
          idProof: (v.idProof && v.idProof.length > 500) ? '[إثبات هوية معتمد ومحمي]' : (v.idProof || ''),
          syndicateCard: (v.syndicateCard && v.syndicateCard.length > 500) ? '[كارنيه نقابة مرفق]' : (v.syndicateCard || ''),
          commercialRegister: (v.commercialRegister && v.commercialRegister.length > 500) ? '[سجل تجاري معتمد]' : (v.commercialRegister || '')
        }));
        localStorage.setItem(STORAGE_KEY_VERIFICATIONS, JSON.stringify(cleaned));
      } catch (e) {}
    }

    // 2. Prune oversized reports
    const rawReports = localStorage.getItem(STORAGE_KEY_REPORTS);
    if (rawReports && rawReports.length > 250000) {
      try {
        const parsed = JSON.parse(rawReports);
        const cleaned = parsed.map(r => ({
          ...r,
          screenshot: (r.screenshot && r.screenshot.length > 500) ? '[صورة إثبات محفوظة]' : (r.screenshot || '')
        }));
        localStorage.setItem(STORAGE_KEY_REPORTS, JSON.stringify(cleaned));
      } catch (e) {}
    }

    // 3. Prune oversized lab submissions
    const rawSubs = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (rawSubs && rawSubs.length > 250000) {
      try {
        const parsed = JSON.parse(rawSubs);
        const cleaned = parsed.map(s => ({
          ...s,
          fileData: (s.fileData && s.fileData.length > 500) ? '[ملف تدريب سابق]' : (s.fileData || '')
        }));
        localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(cleaned));
      } catch (e) {}
    }
  } catch (err) {
    console.warn('Backup storage quota pruning notice:', err);
  }
}

/**
 * Safely writes to localStorage with automatic QuotaExceededError recovery
 */
export function safeSetItem(key, value) {
  if (value.length > 50000 && (key === STORAGE_KEY_VERIFICATIONS || key === STORAGE_KEY_REPORTS || key === STORAGE_KEY_SUBMISSIONS)) {
    pruneStorageForQuota();
  }

  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    if (e && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.code === 22)) {
      console.warn(`[QuotaExceededError] on "${key}". Attempting full quota cleanup...`);
      pruneStorageForQuota();
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (retryErr) {
        if (key === STORAGE_KEY_VERIFICATIONS || key === STORAGE_KEY_REPORTS || key === STORAGE_KEY_SUBMISSIONS) {
          try {
            localStorage.setItem(key, JSON.stringify([]));
            return true;
          } catch (e2) {}
        }
        console.error(`Could not save "${key}" even after full pruning.`);
        return false;
      }
    }
    console.error(`Error saving "${key}":`, e);
    return false;
  }
}

/**
 * Loads full application state from localStorage into state object
 */
export function loadFromLocalStorage(state, INITIAL_DATA, checkAndApplyAutoBlock, loadCVAndPortfolio, syncCVWithTimaCard) {
  pruneStorageForQuota();

  // Current User
  const storedUser = localStorage.getItem(STORAGE_KEY_USER);
  if (storedUser) {
    try { state.currentUser = JSON.parse(storedUser); } catch (e) { state.currentUser = null; }
  }

  // Mentors
  const storedMentors = localStorage.getItem(STORAGE_KEY_MENTORS);
  if (storedMentors) {
    try { state.mentors = JSON.parse(storedMentors); } catch (e) { state.mentors = [...INITIAL_DATA.mentors]; }
  } else {
    state.mentors = [...INITIAL_DATA.mentors];
  }

  // Students
  const storedStudents = localStorage.getItem(STORAGE_KEY_STUDENTS);
  if (storedStudents) {
    try {
      const parsed = JSON.parse(storedStudents);
      state.students = parsed.map(s => {
        const init = INITIAL_DATA.students.find(x => x.id === s.id);
        return {
          ...init,
          ...s,
          card_id: s.card_id || s.id,
          OVR: Number(s.OVR || s.overall || (init ? init.OVR : 90)),
          skill: s.skill || (init ? init.skill : [s.position || 'إعلام']),
          transcript: s.transcript || (init ? init.transcript : `${s.university || ''} - ${s.department || ''}`),
          location: s.location || (init ? init.location : 'القاهرة')
        };
      });
      INITIAL_DATA.students.forEach(is => {
        if (!state.students.some(s => s.id === is.id)) {
          state.students.push(is);
        }
      });
    } catch (e) {
      state.students = [...INITIAL_DATA.students];
    }
  } else {
    state.students = [...INITIAL_DATA.students];
  }

  // Jobs
  const storedJobs = localStorage.getItem(STORAGE_KEY_JOBS);
  if (storedJobs) {
    try { state.jobs = JSON.parse(storedJobs); } catch (e) { state.jobs = [...INITIAL_DATA.jobs]; }
  } else {
    state.jobs = [...INITIAL_DATA.jobs];
  }

  // Applications
  const storedApps = localStorage.getItem(STORAGE_KEY_APPLICATIONS);
  if (storedApps) {
    try { state.applications = JSON.parse(storedApps); } catch (e) { state.applications = [...INITIAL_DATA.applications]; }
  } else {
    state.applications = [...INITIAL_DATA.applications];
  }

  // Challenges
  const storedCh = localStorage.getItem(STORAGE_KEY_CHALLENGES);
  if (storedCh) {
    try { state.challenges = JSON.parse(storedCh); } catch (e) { state.challenges = [...INITIAL_DATA.labChallenges]; }
  } else {
    state.challenges = [...INITIAL_DATA.labChallenges];
  }

  // Lab Submissions
  const storedSubs = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
  if (storedSubs) {
    try { state.submissions = JSON.parse(storedSubs); } catch (e) { state.submissions = [...(INITIAL_DATA.submissions || [])]; }
  } else {
    state.submissions = [...(INITIAL_DATA.submissions || [])];
  }

  // Bookings
  const storedBookings = localStorage.getItem(STORAGE_KEY_BOOKINGS);
  if (storedBookings) {
    try { state.bookings = JSON.parse(storedBookings); } catch (e) { state.bookings = []; }
  } else {
    state.bookings = [
      {
        id: 'book-1',
        mentorId: 'mentor-1',
        mentorName: 'أحمد',
        studentName: 'مريم حسام شريف',
        day: 'الثلاثاء القادم',
        time: '7:00 مساءً',
        question: 'مراجعة المونتاج الصوتي والـ L-Cuts في فيلم التخرج القصير',
        amount: 200,
        status: 'مؤكدة'
      },
      {
        id: 'book-2',
        mentorId: 'mentor-2',
        mentorName: 'سارة',
        studentName: 'عمر شريف الشناوي',
        day: 'الأربعاء القادم',
        time: '5:00 مساءً',
        question: 'تدقيق المصادر في تحقيق استقصائي حول سوق الخردة',
        amount: 180,
        status: 'مؤكدة'
      }
    ];
  }

  // Tima Reports
  const storedReports = localStorage.getItem(STORAGE_KEY_REPORTS);
  if (storedReports) {
    try { state.reports = JSON.parse(storedReports); } catch (e) { state.reports = [...(INITIAL_DATA.initialReports || [])]; }
  } else {
    state.reports = [...(INITIAL_DATA.initialReports || [])];
  }

  // Tima Verifications
  const storedVerifications = localStorage.getItem(STORAGE_KEY_VERIFICATIONS);
  if (storedVerifications) {
    try { state.verifications = JSON.parse(storedVerifications); } catch (e) { state.verifications = [...(INITIAL_DATA.initialVerifications || [])]; }
  } else {
    state.verifications = [...(INITIAL_DATA.initialVerifications || [])];
  }

  // Blacklist IPs
  const storedBlacklist = localStorage.getItem(STORAGE_KEY_BLACKLIST_IPS);
  if (storedBlacklist) {
    try { state.blacklistIps = JSON.parse(storedBlacklist); } catch (e) { state.blacklistIps = [...(INITIAL_DATA.initialBlacklistIps || [])]; }
  } else {
    state.blacklistIps = [...(INITIAL_DATA.initialBlacklistIps || [])];
  }

  if (typeof checkAndApplyAutoBlock === 'function') {
    state.mentors.forEach(m => {
      checkAndApplyAutoBlock(m.id);
    });
    if (state.currentUser) {
      checkAndApplyAutoBlock(state.currentUser.id || state.currentUser.name);
    }
  }

  // Tima Card
  const storedTima = localStorage.getItem(STORAGE_KEY_TIMA);
  if (storedTima) {
    try { state.timaCard = JSON.parse(storedTima); } catch (e) {}
  }

  // Infinite Tima Points & Prestige
  const storedPoints = localStorage.getItem(STORAGE_KEY_POINTS);
  if (storedPoints !== null) {
    state.totalPoints = Math.max(0, parseInt(storedPoints) || 0);
  } else {
    state.totalPoints = 4200;
  }

  const storedPrestige = localStorage.getItem(STORAGE_KEY_PRESTIGE);
  if (storedPrestige !== null) {
    state.prestigeCount = Math.max(0, parseInt(storedPrestige) || 0);
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY_CUSTOM_THEME);
  if (storedTheme) {
    state.customTheme = storedTheme;
  }

  if (typeof loadCVAndPortfolio === 'function') loadCVAndPortfolio();
  if (typeof syncCVWithTimaCard === 'function') syncCVWithTimaCard();

  console.log('✅ Loaded data from backup localStorage successfully.');
}

/**
 * Saves full application state to localStorage
 */
export function saveToLocalStorage(state) {
  if (state.currentUser) safeSetItem(STORAGE_KEY_USER, JSON.stringify(state.currentUser));
  safeSetItem(STORAGE_KEY_MENTORS, JSON.stringify(state.mentors));
  safeSetItem(STORAGE_KEY_STUDENTS, JSON.stringify(state.students));
  safeSetItem(STORAGE_KEY_JOBS, JSON.stringify(state.jobs));
  safeSetItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(state.applications));
  safeSetItem(STORAGE_KEY_CHALLENGES, JSON.stringify(state.challenges));
  safeSetItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(state.submissions));
  safeSetItem(STORAGE_KEY_BOOKINGS, JSON.stringify(state.bookings));
  safeSetItem(STORAGE_KEY_TIMA, JSON.stringify(state.timaCard));
  safeSetItem(STORAGE_KEY_POINTS, (state.totalPoints || 0).toString());
  safeSetItem(STORAGE_KEY_PRESTIGE, (state.prestigeCount || 0).toString());
  safeSetItem(STORAGE_KEY_CUSTOM_THEME, state.customTheme || 'cosmic');
  safeSetItem(STORAGE_KEY_REPORTS, JSON.stringify(state.reports || []));
  safeSetItem(STORAGE_KEY_VERIFICATIONS, JSON.stringify(state.verifications || []));
  safeSetItem(STORAGE_KEY_BLACKLIST_IPS, JSON.stringify(state.blacklistIps || []));
}
