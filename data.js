// φ To Media - Ecosystem Data & Seeds
export const INITIAL_DATA = {
  // 4 Specialized Mentors as requested:
  // 1- أحمد - تخصص: مونتاج بريمير ودافنشي - خبرة: مونتير في الجزيرة - تقييم 4.9 - سعر 200ج/سيشن - badge "مونتاج"
  // 2- سارة - تخصص: كتابة صحفية وتحقيق استقصائي - خبرة: صحفية في المصري اليوم - تقييم 4.8 - badge "صحافة"
  // 3- يوسف - تخصص: تصوير و إضاءة - خبرة: مصور وثائقي - تقييم 5.0 - badge "تصوير"
  // 4- مريم - تخصص: تقديم و Voice Over - خبرة: مذيعة راديو - تقييم 4.7 - badge "تقديم"
  mentors: [
    {
      id: 'mentor-1',
      name: 'أحمد',
      fullName: 'أحمد كمال الدين',
      specialty: 'مونتاج بريمير ودافنشي',
      experience: 'مونتير في الجزيرة (8 سنوات خبرة)',
      yearsExp: 8,
      workplace: 'شبكة الجزيرة الإعلامية',
      rating: '4.9',
      price: 200,
      badge: 'مونتاج',
      status: 'متاح الآن', // متاح = green
      isVerified: true,
      verificationStatus: 'verified',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: 'متخصص في المونتاج السينمائي والتصحيح اللوني على Premiere Pro و DaVinci Resolve، مع خبرة عملية في تحرير التقارير الإخبارية والوثائقية.',
      sessionsCount: 68,
      meetLink: 'https://meet.google.com/phi-edit-ahmed',
      earnings: 13600,
      instapay_link: 'ahmed.edit@instapay',
      instapay_qr_image: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=ahmed.edit@instapay',
      wallet_phone: '01019283746',
      wallet_provider: 'فودافون كاش',
      bank_name: 'البنك التجاري الدولي CIB',
      bank_iban: 'EG380010004500000012345678901',
      payout_method: 'instapay',
      accepted_methods: ['instapay', 'wallet', 'card', 'fawry']
    },
    {
      id: 'mentor-2',
      name: 'سارة',
      fullName: 'سارة عبد الرحمن',
      specialty: 'كتابة صحفية وتحقيق استقصائي',
      experience: 'صحفية في المصري اليوم (7 سنوات خبرة)',
      yearsExp: 7,
      workplace: 'جريدة المصري اليوم',
      rating: '4.8',
      price: 180,
      badge: 'صحافة',
      status: 'متاح الآن',
      isVerified: true,
      verificationStatus: 'verified',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'صحفية استقصائية حائزة على جوائز محلية في التحقيقات البيئية والمجتمعية، خبيرة في تدقيق المعلومات وسرد القصة الصحفية.',
      sessionsCount: 52,
      meetLink: 'https://meet.google.com/phi-press-sara',
      earnings: 9360,
      instapay_link: 'sara.press@instapay',
      instapay_qr_image: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=sara.press@instapay',
      wallet_phone: '01122334455',
      wallet_provider: 'اتصالات كاش',
      bank_name: 'بنك مصر',
      bank_iban: 'EG450002000100000098765432109',
      payout_method: 'instapay',
      accepted_methods: ['instapay', 'wallet', 'card', 'fawry']
    },
    {
      id: 'mentor-3',
      name: 'يوسف',
      fullName: 'يوسف النجار',
      specialty: 'تصوير و إضاءة',
      experience: 'مصور وثائقي (9 سنوات خبرة)',
      yearsExp: 9,
      workplace: 'استوديوهات إنتاج وثائقي مستقلة',
      rating: '5.0',
      price: 250,
      badge: 'تصوير',
      status: 'متاح الآن',
      isVerified: true,
      verificationStatus: 'verified',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      bio: 'مدير تصوير محترف متخصص في هندسة الإضاءة الدرامية واستخدام كاميرات السينما في توثيق الحكايات الميدانية الشائقة.',
      sessionsCount: 44,
      meetLink: 'https://meet.google.com/phi-photo-youssef',
      earnings: 11000,
      instapay_link: 'youssef.dop@instapay',
      instapay_qr_image: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=youssef.dop@instapay',
      wallet_phone: '01233445566',
      wallet_provider: 'أورنج كاش',
      bank_name: 'البنك الأهلي المصري',
      bank_iban: 'EG120003001500000054321678902',
      payout_method: 'wallet',
      accepted_methods: ['instapay', 'wallet', 'card', 'fawry']
    },
    {
      id: 'mentor-4',
      name: 'مريم',
      fullName: 'مريم الشريف',
      specialty: 'تقديم و Voice Over',
      experience: 'مذيعة راديو (6 سنوات خبرة)',
      yearsExp: 6,
      workplace: 'محطة راديو مصر وإذاعات مستقلة',
      rating: '4.7',
      price: 150,
      badge: 'تقديم',
      status: 'متاح الآن',
      isVerified: true,
      verificationStatus: 'verified',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      bio: 'صوت إذاعي وإعلامي معروف، متخصصة في مخارج الحروف، التلوين الصوتي، وإدارة الحوارات الإذاعية والتلفزيونية والبودكاست.',
      sessionsCount: 61,
      meetLink: 'https://meet.google.com/phi-voice-mariam',
      earnings: 9150,
      instapay_link: 'mariam.voice@instapay',
      instapay_qr_image: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=mariam.voice@instapay',
      wallet_phone: '01555667788',
      wallet_provider: 'وي باي WE Pay',
      bank_name: 'بنك QNB الأهلي',
      bank_iban: 'EG780004002200000032165498703',
      payout_method: 'instapay',
      accepted_methods: ['instapay', 'wallet', 'card', 'fawry']
    }
  ],

  // Student Talent Pool for Companies to search and recruit (Compatible with Phi Scout)
  students: [
    {
      id: 'stud-1',
      card_id: 'stud-1',
      name: 'مريم حسام شريف',
      email: 'mariam.hussam@cu.edu.eg',
      university: 'جامعة القاهرة',
      department: 'إذاعة وتلفزيون',
      gradYear: '2025',
      position: 'مراسلة ومقدمة برامج',
      overall: 94,
      OVR: 94,
      skill: ['تقديم برامج', 'مراسلة ميدانية', 'إلقاء إخباري', 'إدارة حوار تلفزيوني', 'صناعة محتوى'],
      transcript: 'امتياز مع مرتبة الشرف، مشروع تخرج 98%، تدريب قناة إكسترا نيوز 6 أشهر، معدل 3.92 GPA',
      location: 'الدقي، الجيزة',
      timaStats: {
        filming: 88,    // تصوير
        montage: 82,    // مونتاج
        writing: 95,    // كتابة
        presenting: 98, // تقديم
        pr: 92,         // علاقات
        digital: 91     // ديجيتال
      },
      portfolioTitle: 'سلسلة تحقيقات مصورة: نبض النيل',
      portfolioLink: 'https://youtube.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      bio: 'طالبة متفوقة في الإلقاء الإخباري وإدارة الحوار، قدمت تغطيات مباشرة لمعارض دولية وأفلام تخرج وثائقية.'
    },
    {
      id: 'stud-2',
      card_id: 'stud-2',
      name: 'عمر شريف الشناوي',
      email: 'omar.shennawy@auc.edu',
      university: 'الجامعة الأمريكية بالقاهرة AUC',
      department: 'صحافة ورقمي',
      gradYear: '2026',
      position: 'مونتير ومصمم موشن',
      overall: 93,
      OVR: 93,
      skill: ['مونتاج فيديو', 'موشن جرافيك', 'أفتر إفكتس', 'بريمير برو', 'تصحيح ألوان دافنشي'],
      transcript: 'جيد جداً مرتفع، معتمد من Adobe، فائز بجائزة الموشن جرافيك في ملتقى القاهرة الرقمي 2025',
      location: 'التجمع الخامس، القاهرة الجديدة',
      timaStats: {
        filming: 86,
        montage: 97,
        writing: 85,
        presenting: 75,
        pr: 80,
        digital: 96
      },
      portfolioTitle: 'هوية بصرية وموشن لمهرجان الإسكندرية',
      portfolioLink: 'https://behance.net',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'مونتير ومصمم موشن محترف، متمكن من حزم Premiere و After Effects و Cinema 4D وسرد الإيقاع البصري.'
    },
    {
      id: 'stud-3',
      card_id: 'stud-3',
      name: 'كريم عبد الله السويفي',
      email: 'karim.sweify@alexu.edu.eg',
      university: 'جامعة الإسكندرية',
      department: 'إذاعة وتلفزيون',
      gradYear: '2025',
      position: 'مدير تصوير ومصور وثائقي',
      overall: 91,
      OVR: 91,
      skill: ['تصوير سينمائي', 'إضاءة درامية', 'كاميرات سينمائية FX6/RED', 'توثيق ميداني', 'مونتاج'],
      transcript: 'امتياز، مدير تصوير 3 أفلام روائية قصيرة، دبلومة إضاءة سينمائية متقدمة',
      location: 'سموحة، الإسكندرية',
      timaStats: {
        filming: 96,
        montage: 84,
        writing: 78,
        presenting: 70,
        pr: 82,
        digital: 88
      },
      portfolioTitle: 'مشروع فوتوغرافي: وجوه الصعيد وتراث النيل',
      portfolioLink: 'https://unsplash.com',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'مصور سينمائي شغوف بالإضاءة الطبيعية والعدسات الثابتة، عمل في تصوير 4 أفلام قصيرة ومشاريع توثيقية.'
    },
    {
      id: 'stud-4',
      card_id: 'stud-4',
      name: 'سلمى محمد النجار',
      email: 'salma.naggar@asu.edu.eg',
      university: 'جامعة عين شمس',
      department: 'صحافة ونشر',
      gradYear: '2024',
      position: 'محررة وصحفية استقصائية',
      overall: 90,
      OVR: 90,
      skill: ['صحافة استقصائية', 'صحافة بيانات', 'تحرير صحفي', 'كتابة سكريبت بودكاست', 'تدقيق معلومات'],
      transcript: 'امتياز مع مرتبة الشرف، ناشرة تحقيقات في مدى مصر وصوت الأمة، دورة أريج 2024',
      location: 'مصر الجديدة، القاهرة',
      timaStats: {
        filming: 75,
        montage: 78,
        writing: 96,
        presenting: 84,
        pr: 89,
        digital: 92
      },
      portfolioTitle: 'تحقيق استقصائي: أسرار صناعة الفخار بقنا',
      portfolioLink: 'https://youtube.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'متخصصة في صحافة التحقيقات والبيانات، قامت بنشر تحقيقات معمقة في منصات صحفية مستقلة.'
    },
    {
      id: 'stud-5',
      card_id: 'stud-5',
      name: 'زياد خالد المنشاوي',
      email: 'ziad.menshawy@helwan.edu.eg',
      university: 'جامعة حلوان',
      department: 'علاقات عامة وإعلان',
      gradYear: '2026',
      position: 'أخصائي علاقات عامة وديجيتال',
      overall: 89,
      OVR: 89,
      skill: ['حملات اتصالية', 'سوشيال ميديا ماركتنج', 'إدارة أزمات إعلامية', 'كتابة بيانات صحفية', 'تنظيم مؤتمرات'],
      transcript: 'جيد جداً مرتفع، قائد الفريق الإعلامي لاتحاد الطلاب، تدريب وكالة إعلانية دولية 2025',
      location: 'المعادي، القاهرة',
      timaStats: {
        filming: 74,
        montage: 80,
        writing: 89,
        presenting: 86,
        pr: 96,
        digital: 93
      },
      portfolioTitle: 'حملة إعلامية خضراء: جامعات بلا مخلفات',
      portfolioLink: 'https://behance.net',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'مبتكر حملات اتصالية واستراتيجيات سوشيال ميديا، منظم فعاليات ومؤتمرات جامعية كبرى.'
    },
    {
      id: 'stud-6',
      card_id: 'stud-6',
      name: 'أحمد عادل الباز',
      email: 'ahmed.elbaz@o6u.edu.eg',
      university: 'جامعة 6 أكتوبر',
      department: 'إذاعة وتلفزيون',
      gradYear: '2025',
      position: 'مهندس صوت وبودكاستر',
      overall: 88,
      OVR: 88,
      skill: ['هندسة صوت', 'إنتاج بودكاست', 'بروتولز Pro Tools', 'ميكساج وماسترنج', 'فويس أوفر إعلاني'],
      transcript: 'جيد جداً، منتج بودكاست "صوت الكواليس" حقق 200 ألف استماع على سبوتيفاي',
      location: 'مدينة 6 أكتوبر، الجيزة',
      timaStats: {
        filming: 76,
        montage: 89,
        writing: 84,
        presenting: 90,
        pr: 80,
        digital: 92
      },
      portfolioTitle: 'سلسلة بودكاست وتصميم شريط صوت لأفلام وثائقية',
      portfolioLink: 'https://spotify.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'متخصص في الميكساج وهندسة الصوت للدراما والبودكاست الإخباري، متمكن من معالجة الضوضاء وميكساج 5.1.'
    },
    {
      id: 'stud-7',
      card_id: 'stud-7',
      name: 'نور الدين مصطفى رضوان',
      email: 'nour.radwan@mans.edu.eg',
      university: 'جامعة المنصورة',
      department: 'صحافة وإعلام رياضي',
      gradYear: '2026',
      position: 'محلل رياضي ومعلق',
      overall: 87,
      OVR: 87,
      skill: ['إعلام رياضي', 'تعليق وتحليل', 'إعداد برامج استوديو', 'سوشيال ميديا سبورتس', 'مقابلات لاعبين'],
      transcript: 'امتياز في مشروعات النقد الرياضي، مراسل معتمد لموقع في الجول لمباريات الدلتا',
      location: 'المنصورة، الدقهلية',
      timaStats: {
        filming: 80,
        montage: 83,
        writing: 91,
        presenting: 94,
        pr: 85,
        digital: 89
      },
      portfolioTitle: 'برنامج تحليلي رقمي: تاكتيكس الدوري المصري',
      portfolioLink: 'https://youtube.com',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      bio: 'شغوف بالتحليل التكتيكي وصناعة المحتوى الرياضي السريع لمنصات تيك توك ويوتيوب بجماهيرية عالية.'
    },
    {
      id: 'stud-8',
      card_id: 'stud-8',
      name: 'رانيا أشرف فودة',
      email: 'rania.fouda@bue.edu.eg',
      university: 'الجامعة البريطانية في مصر BUE',
      department: 'ديجيتال ميديا وفيلم',
      gradYear: '2025',
      position: 'مخرجة أفلام قصيرة وموثقة',
      overall: 92,
      OVR: 92,
      skill: ['إخراج وثائقي', 'كتابة سيناريو سينمائي', 'إدارة فريق تصوير', 'ستوري بورد', 'مونتاج روائي'],
      transcript: 'المرتبة الأولى، مشروع فيلم قصير عُرض في زاوية ومهرجان الإسماعيلية للوثائقيات',
      location: 'الشروق، القاهرة',
      timaStats: {
        filming: 91,
        montage: 93,
        writing: 95,
        presenting: 82,
        pr: 86,
        digital: 90
      },
      portfolioTitle: 'فيلم وثائقي قصير: أصوات وسط البلد الخفية',
      portfolioLink: 'https://vimeo.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'مخرجة سينمائية شابة صاحبة رؤية فنية حادة في الأفلام المستقلة وإدارة الممثلين وسرد الواقع المصري.'
    }
  ],

  // Company Opportunities (Internships / Freelance / Full-time)
  jobs: [
    {
      id: 'job-1',
      title: 'متدرب مونتاج فيديو وموشن جرافيك (بريمير ودافنشي)',
      company: 'شبكة أوان للإنتاج الإعلامي',
      type: 'تدريب', // تدريب / فريلانس / دوام
      companyType: 'شركة انتاج',
      minSkill: 'montage',
      minScore: 80,
      description: 'نبحث عن طالب أو خريج شغوف بالقص البصري ولديه مهارة مونتاج تزيد عن 80 في بطاقة Tima للمشاركة في تحرير برامج رمضان.',
      location: 'الدقي، الجيزة',
      stipend: 'مكافأة شهرية + شهادة تدريب',
      applicantsCount: 6,
      date: 'منذ يومين'
    },
    {
      id: 'job-2',
      title: 'مراسل ميداني وصانع محتوى ريلز وسوشيال ميديا',
      company: 'منصة كايرو 24 الإخبارية',
      type: 'فريلانس',
      companyType: 'صحيفة',
      minSkill: 'presenting',
      minScore: 80,
      description: 'تغطيات ميدانية سريعة للأحداث الفنية والمجتمعية، يتطلب طلاقة في التقديم فوق 80 في بطاقة Tima ومعرفة بالهواتف السينمائية.',
      location: 'وسط البلد، القاهرة',
      stipend: 'بالقطعة / 1500ج لكل تقرير',
      applicantsCount: 9,
      date: 'منذ 3 أيام'
    },
    {
      id: 'job-3',
      title: 'مساعد مدير تصوير لوثائقيات قصيرة',
      company: 'سينما النيل للإنتاج الفني',
      type: 'دوام',
      companyType: 'شركة انتاج',
      minSkill: 'filming',
      minScore: 85,
      description: 'فرصة عمل بدوام كامل لخريجي إعلام؛ العمل مع كبار المخرجين، يتطلب مهارة تصوير وإضاءة فوق 85.',
      location: 'مدينة الإنتاج الإعلامي، 6 أكتوبر',
      stipend: 'راتب مجزي يبدأ من 7,000ج',
      applicantsCount: 4,
      date: 'منذ أسبوع'
    }
  ],

  // Job Applications
  applications: [
    {
      id: 'app-1',
      jobId: 'job-1',
      jobTitle: 'متدرب مونتاج فيديو وموشن جرافيك (بريمير ودافنشي)',
      studentId: 'stud-2',
      studentName: 'عمر شريف الشناوي',
      university: 'الجامعة الأمريكية بالقاهرة AUC',
      department: 'صحافة ورقمي',
      timaOverall: 93,
      skillHighlight: 'مونتاج: 97',
      status: 'قيد المراجعة',
      appliedAt: 'أمس'
    },
    {
      id: 'app-2',
      jobId: 'job-2',
      jobTitle: 'مراسل ميداني وصانع محتوى ريلز وسوشيال ميديا',
      studentId: 'stud-1',
      studentName: 'مريم حسام الشريف',
      university: 'جامعة القاهرة',
      department: 'إذاعة وتلفزيون',
      timaOverall: 94,
      skillHighlight: 'تقديم: 98',
      status: 'تم القبول المبدئي',
      appliedAt: 'منذ يومين'
    }
  ],

  // Lab Challenges
  labChallenges: [
    {
      id: 'ch-1',
      title: 'تحدي الموشن جرافيك: التراث المعماري القاهري',
      icon: 'film',
      points: 250,
      category: 'مونتاج',
      description: 'صمم فيديو موشن جرافيك 15 ثانية يعبر عن عمارة مصر الجديدة أو وسط البلد مع إيقاع صوتي متزامن.',
      submissionsCount: 18,
      status: 'نشط'
    },
    {
      id: 'ch-2',
      title: 'تحدي البودكاست السردي: دقيقة مع بطل شعبي',
      icon: 'mic',
      points: 300,
      category: 'تقديم',
      description: 'سجل حلقة بودكاست مكثفة مدتها 60 ثانية باستخدام مؤثرات صوتية محيطية تروي حكاية شخصية ملهمة.',
      submissionsCount: 24,
      status: 'نشط'
    },
    {
      id: 'ch-3',
      title: 'تحدي التصوير الصحفي بالهاتف: نبض الشارع',
      icon: 'camera',
      points: 200,
      category: 'تصوير',
      description: 'التقط 3 صور صحفية متتالية بزوايا سينمائية تروي قصة إنسانية كاملة في الشارع المصري بالإضاءة الطبيعية.',
      submissionsCount: 31,
      status: 'نشط'
    },
    {
      id: 'ch-4',
      title: 'تحدي كتابة التحقيق: زوايا خفية في الحرف المندثرة',
      icon: 'file-text',
      points: 220,
      category: 'صحافة',
      description: 'صغ تحقيقاً استقصائياً مدعماً بالبيانات والمصادر الميدانية حول حرفة يدوية تواجه خطر الانقراض.',
      submissionsCount: 15,
      status: 'نشط'
    },
    {
      id: 'ch-5',
      title: 'تحدي المقال والتقرير الاستقصائي: مستقبل صحافة الذكاء الاصطناعي',
      icon: 'file-text',
      points: 280,
      category: 'صحافة',
      description: 'اكتب مقالاً تحليلياً أو تقريراً استقصائياً متكاملاً (عنوان جذاب، مقدمة قوية، توثيق مصادر موثوقة، وسلامة لغوية تامة).',
      submissionsCount: 21,
      status: 'نشط'
    }
  ],

  // Lab Submissions for AI Feedback
  submissions: [
    {
      id: 'sub-1',
      studentName: 'مريم حسام الشريف',
      title: 'ريلز: حكاية عم حسن صانع النحاس',
      link: 'https://youtube.com',
      date: 'اليوم',
      aiFeedback: 'عمل رائع ومتقن! الهوك البصري في أول ثانيتين شد الانتباه مباشرة. الإضاءة السينمائية دافئة ومناسبة لجو ورش النحاس في خان الخليلي. الدرجة المستحقة: 96/100.',
      score: 96
    }
  ],

  // Leaderboard Infinite - ترتيب عالمي لطلاب وصناع الإعلام في مصر
  leaderboard: [
    { rank: 1, name: 'أحمد طارق المهدي', dept: 'إخراج وسينما', university: 'جامعة القاهرة', points: 135000, works: 48, isUser: false },
    { rank: 2, name: 'رنا وائل الشافعي', dept: 'صحافة استقصائية', university: 'الجامعة الأمريكية AUC', points: 81500, works: 36, isUser: false },
    { rank: 3, name: 'مريم حسام الشريف (أنت)', dept: 'إذاعة وتلفزيون', university: 'جامعة القاهرة', points: 4200, works: 8, isUser: true },
    { rank: 4, name: 'عمر شريف الشناوي', dept: 'مونتاج وموشن', university: 'الجامعة الأمريكية AUC', points: 26800, works: 19, isUser: false },
    { rank: 5, name: 'كريم عبد الله السويفي', dept: 'تصوير وسينما', university: 'جامعة الإسكندرية', points: 21200, works: 17, isUser: false },
    { rank: 6, name: 'سلمى محمد النجار', dept: 'صحافة ونشر', university: 'جامعة عين شمس', points: 15400, works: 14, isUser: false },
    { rank: 7, name: 'زياد خالد المنشاوي', dept: 'علاقات عامة', university: 'جامعة حلوان', points: 8900, works: 11, isUser: false },
    { rank: 8, name: 'نورهان طارق السيد', dept: 'ديجيتال ميديا', university: 'جامعة 6 أكتوبر', points: 5600, works: 9, isUser: false },
    { rank: 9, name: 'مصطفى علاء الدين', dept: 'إذاعة وراديو', university: 'جامعة بنها', points: 3400, works: 6, isUser: false },
    { rank: 10, name: 'فاطمة حسني', dept: 'إعلام بيئي', university: 'جامعة المنصورة', points: 2100, works: 5, isUser: false }
  ],

  // Platform Metrics for Admin
  metrics: {
    studentsCount: 1240,
    mentorsCount: 48,
    companiesCount: 86,
    challengesCount: 14,
    bookingsCount: 312,
    totalRevenue: 62400
  },

  // Companies List
  companies: [
    {
      id: 'comp-1',
      name: 'شبكة أوان للإنتاج الإعلامي',
      companyType: 'شركة انتاج',
      email: 'hr@awan-media.com',
      website: 'https://awan-media.com',
      commercialRegister: 'سجل تجاري رقم 84920 - الجيزة',
      verificationStatus: 'verified',
      isVerified: true,
      status: 'active'
    },
    {
      id: 'comp-2',
      name: 'منصة كايرو 24 الإخبارية',
      companyType: 'صحيفة',
      email: 'careers@cairo24.com',
      website: 'https://cairo24.com',
      commercialRegister: 'ترخيص صحفي رقم 11204 - نقابة الصحفيين',
      verificationStatus: 'verified',
      isVerified: true,
      status: 'active'
    }
  ],

  // Seed Reports for Admin Protection Panel
  initialReports: [
    {
      id: 'rep-seed-1',
      reportedId: 'mentor-fake-99',
      reportedName: 'محمود عبد السلام (حساب منتحل)',
      reportedType: 'mentor',
      reason: 'كورس مدفوع',
      description: 'طلب تحويل 2000 جنيه على فودافون كاش لشهادة معتمدة مدفوعة وحساب غير موثق.',
      screenshot: '',
      date: '2026-10-12 18:20',
      status: 'pending'
    },
    {
      id: 'rep-seed-2',
      reportedId: 'mentor-fake-99',
      reportedName: 'محمود عبد السلام (حساب منتحل)',
      reportedType: 'mentor',
      reason: 'يطلب فلوس',
      description: 'تواصل على الخاص وطالب بتحويل مسبق قبل إرسال مادة المونتاج التدريبية.',
      screenshot: '',
      date: '2026-10-12 19:45',
      status: 'pending'
    }
  ],

  // Seed Verifications for Admin Approval
  initialVerifications: [
    {
      id: 'verif-1',
      userId: 'mentor-req-1',
      name: 'كريم الدالي',
      role: 'mentor',
      specialty: 'إخراج وثائقي وتصوير درون',
      email: 'karim.eldaly@documentary-eg.net',
      workplace: 'مخرج وثائقي مستقل',
      portfolioLink: 'https://vimeo.com/karimeldaly',
      idProof: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80',
      syndicateCard: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
      date: '2026-10-13 10:15',
      status: 'pending'
    },
    {
      id: 'verif-2',
      userId: 'comp-req-1',
      name: 'استوديوهات سينما زاوية',
      role: 'company',
      companyType: 'شركة انتاج',
      email: 'careers@zawya-cinema.com',
      website: 'https://zawya-cinema.com',
      commercialRegister: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80',
      needs: 'مونتير وثائقي + مدير إضاءة',
      date: '2026-10-13 11:30',
      status: 'pending'
    }
  ],

  // Seed Blacklist IPs
  initialBlacklistIps: [
    {
      id: 'ip-1',
      ip: '197.38.12.94',
      reason: 'محاولة احتيال مالي وطلب تحويلات فودافون كاش خارج المنظومة',
      date: '2026-10-10',
      bannedBy: 'Admin (phi2026)'
    },
    {
      id: 'ip-2',
      ip: '156.204.88.19',
      reason: 'إنشاء حسابات وهمية متكررة بريد عشوائي وانتحال صفة قنوات',
      date: '2026-10-11',
      bannedBy: 'Admin (phi2026)'
    }
  ]
};
