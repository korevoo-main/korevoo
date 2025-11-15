export type Locale = 'ko' | 'uz' | 'en' | 'kk' | 'ru';

export const translations = {
  ko: {
    nav_about: "소개",
    nav_journey: "유학 과정",
    nav_services: "도움받기",
    nav_faq: "FAQ",
    cta: "한국 유학 여정 시작하기",
    cta_link: "https://forms.gle/ko-temp-link",
    hero_title: "한국 유학, 혼자 준비하기 막막하셨나요?",
    hero_sub: "Korevoo는 우즈베키스탄·카자흐스탄 학생들의 한국 유학 여정을 함께 시작하는 파트너입니다.",
    hero_bullets: [
      "어떤 대학교가 나에게 맞는지 모를 때",
      "비자·서류 절차가 복잡할 때",
      "한국 도착 후 무엇을 해야 할지 모를 때"
    ],
    problem_title: "어디서부터 시작해야 할지 모를 때, 가장 힘들어요",
    problem_desc: "한국 유학은 정보가 부족할수록 불안합니다. 학교 선택, 학비, 비자 서류, 입국 절차 등 많은 단계가 있어 중간에 포기하는 학생들도 많습니다.",
    journey_title: "한국 유학, 이렇게 진행됩니다",
    journey_sub: "어떤 단계에 있든 Korevoo와 함께 다음 단계로 나아갈 수 있습니다.",
    steps: [
      { title: "관심 단계", desc: "한국에서 공부해보고 싶지만 아직 계획은 없는 단계입니다." },
      { title: "정보 수집 단계", desc: "학교, 학비, 비자, 생활비 등을 찾아보는 단계입니다." },
      { title: "학교 선택 단계", desc: "성적·예산·관심 전공을 기준으로 지원 가능한 대학교 후보를 좁혀갑니다." },
      { title: "서류 준비 단계", desc: "지원서·성적증명서·추천서·잔고증명 등 필요 서류를 준비합니다." },
      { title: "비자 신청 단계", desc: "비자를 신청하고 승인 절차를 기다립니다." },
      { title: "한국 도착 후 정착 단계", desc: "유심, 은행, 교통, 거주지, 등록증 등 생활 준비를 합니다." }
    ],
    service_title: "폼을 작성하면 Korevoo가 도와드립니다",
    services: [
      { title: "한국 유학 방향 제안", desc: "학력·예산·전공을 기반으로 현실적인 한국 유학 경로를 추천합니다." },
      { title: "1년 예산 안내", desc: "학비·기숙사·생활비 범위를 안내합니다." },
      { title: "비자 체크리스트", desc: "D-2/D-4 비자 준비 단계와 서류 리스트를 제공합니다." },
      { title: "한국 도착 후 필수 절차", desc: "유심·은행·교통·거주·등록증 등 도착 후 정보를 안내합니다." }
    ],
    trust_title: "왜 Korevoo일까요?",
    trust_reasons: [
      { title: "한국 현지 기반 팀", desc: "한국에 거주하는 팀이 직접 정보를 정리합니다." },
      { title: "초기 단계라서 더 밀착 지원", desc: "한 명 한 명의 상황을 깊게 보고 도와드립니다." },
      { title: "중립적 가이드", desc: "특정 학교에 종속되지 않고 학생에게 맞는 선택을 안내합니다." }
    ],
    how_title: "어떻게 진행되나요?",
    how_steps: [
      { title: "Google Form 작성", desc: "여러분의 기본 정보와 목표를 적어주세요." },
      { title: "Korevoo 검토", desc: "제출한 정보를 기반으로 방향을 정리합니다." },
      { title: "WhatsApp 상담", desc: "맞춤 안내를 메신저로 전달합니다." }
    ],
    faq_title: "자주 묻는 질문",
    faqs: [
      { q: "서비스 비용이 있나요?", a: "현재 초기 단계로 무료로 제공됩니다." },
      { q: "어떤 학생들이 사용하나요?", a: "우즈베키스탄과 카자흐스탄에서 한국 유학을 준비하는 학생들이 주로 사용합니다." },
      { q: "비자 신청도 도와주나요?", a: "직접 대행하지는 않지만, 필요한 서류와 절차를 안내해드립니다." }
    ],
    cta_footer_title: "한국 유학이 막연한 꿈이 아니라 현실적인 계획이 되도록 Korevoo가 함께합니다.",
    footer_company: "회사 소개",
    footer_about: "소개",
    footer_contact: "문의하기",
    footer_privacy: "개인정보처리방침"
  },
  en: {
    nav_about: "About",
    nav_journey: "Study Journey",
    nav_services: "Get Help",
    nav_faq: "FAQ",
    cta: "Start Your Korean Study Journey",
    cta_link: "https://forms.gle/en-temp-link",
    hero_title: "Feeling Lost About Studying in Korea?",
    hero_sub: "Korevoo is your partner in starting the journey to study in Korea for students from Uzbekistan and Kazakhstan.",
    hero_bullets: [
      "When you don't know which university suits you",
      "When visa and document procedures are complex",
      "When you don't know what to do after arriving in Korea"
    ],
    problem_title: "It's Hardest When You Don't Know Where to Start",
    problem_desc: "Studying in Korea becomes more uncertain with less information. Many students give up due to the complex steps of choosing schools, tuition, visa documents, and entry procedures.",
    journey_title: "How Studying in Korea Works",
    journey_sub: "No matter which stage you're at, Korevoo can help you move to the next step.",
    steps: [
      { title: "Interest Stage", desc: "You want to study in Korea but don't have a plan yet." },
      { title: "Information Gathering", desc: "Looking up schools, tuition, visas, and living costs." },
      { title: "School Selection", desc: "Narrowing down university options based on grades, budget, and interests." },
      { title: "Document Preparation", desc: "Preparing application forms, transcripts, recommendation letters, and bank statements." },
      { title: "Visa Application", desc: "Applying for a visa and waiting for approval." },
      { title: "Settlement After Arrival", desc: "Getting a SIM card, bank account, transportation, residence, and registration card." }
    ],
    service_title: "Fill Out the Form and Korevoo Will Help You",
    services: [
      { title: "Korean Study Direction", desc: "We recommend realistic paths based on your education, budget, and major." },
      { title: "Annual Budget Guide", desc: "We provide information on tuition, dormitory, and living costs." },
      { title: "Visa Checklist", desc: "We provide D-2/D-4 visa preparation steps and document lists." },
      { title: "Essential Procedures After Arrival", desc: "We guide you on SIM cards, banking, transportation, residence, and registration." }
    ],
    trust_title: "Why Korevoo?",
    trust_reasons: [
      { title: "Korea-Based Team", desc: "Our team living in Korea directly organizes the information." },
      { title: "Close Support at Early Stage", desc: "We deeply understand and help each student's situation." },
      { title: "Neutral Guide", desc: "We guide you to the right choice for you, not tied to specific schools." }
    ],
    how_title: "How Does It Work?",
    how_steps: [
      { title: "Fill Google Form", desc: "Tell us your basic information and goals." },
      { title: "Korevoo Review", desc: "We organize directions based on your submission." },
      { title: "WhatsApp Consultation", desc: "We deliver personalized guidance via messenger." }
    ],
    faq_title: "Frequently Asked Questions",
    faqs: [
      { q: "Is there a service fee?", a: "Currently free as we're in the early stage." },
      { q: "Who uses this service?", a: "Students from Uzbekistan and Kazakhstan preparing to study in Korea." },
      { q: "Do you help with visa applications?", a: "We don't directly process them, but we guide you on required documents and procedures." }
    ],
    cta_footer_title: "Korevoo is here to make studying in Korea a realistic plan, not just a vague dream.",
    footer_company: "Company",
    footer_about: "About",
    footer_contact: "Contact",
    footer_privacy: "Privacy Policy"
  },
  uz: {
    nav_about: "Biz haqimizda",
    nav_journey: "O'qish yo'li",
    nav_services: "Yordam olish",
    nav_faq: "Savollar",
    cta: "Koreyada o'qishni boshlash",
    cta_link: "https://bit.ly/uz-korevoo-google-form",
    hero_title: "Koreyada o'qishga tayyorlanish qiyin ko'rinmoqdami?",
    hero_sub: "Korevoo - O'zbekiston va Qozog'iston talabalarining Koreyada o'qish yo'lida hamkori.",
    hero_bullets: [
      "Qaysi universitet menga mos kelishini bilmasangiz",
      "Viza va hujjatlar murakkab bo'lganda",
      "Koreyaga yetib borgandan keyin nima qilish kerakligini bilmasangiz"
    ],
    problem_title: "Qayerdan boshlashni bilmaslik eng qiyin",
    problem_desc: "Koreyada o'qish uchun ma'lumot yetarli bo'lmasa, noaniqlik oshadi. Universitet tanlash, to'lov, viza hujjatlari, kirish jarayonlari - ko'p bosqichlar bor va ba'zi talabalar o'rtada to'xtatib yuboradilar.",
    journey_title: "Koreyada o'qish qanday kechadi",
    journey_sub: "Qaysi bosqichda bo'lsangiz ham, Korevoo bilan keyingi bosqichga o'tishingiz mumkin.",
    steps: [
      { title: "Qiziqish bosqichi", desc: "Koreyada o'qishni xohlaysiz, lekin hali reja yo'q." },
      { title: "Ma'lumot yig'ish", desc: "Universitetlar, to'lovlar, vizalar va yashash xarajatlari haqida ma'lumot izlash." },
      { title: "Universitet tanlash", desc: "Baholar, byudjet va qiziqishlaringizga qarab variantlarni toraytirish." },
      { title: "Hujjat tayyorlash", desc: "Ariza, diplom, tavsiyalar va bank hisobi ma'lumotnomalarini tayyorlash." },
      { title: "Viza uchun ariza", desc: "Viza uchun ariza topshirish va tasdiqlanishini kutish." },
      { title: "Koreyaga kelgandan keyin", desc: "SIM karta, bank, transport, turar joy va ro'yxatdan o'tish." }
    ],
    service_title: "Formani to'ldiring, Korevoo sizga yordam beradi",
    services: [
      { title: "O'qish yo'nalishini taklif qilish", desc: "Ta'lim, byudjet va mutaxassislikka qarab real yo'l tavsiya qilamiz." },
      { title: "Yillik byudjet", desc: "To'lov, yotoqxona va yashash xarajatlari haqida ma'lumot beramiz." },
      { title: "Viza cheklisti", desc: "D-2/D-4 viza tayyorlash bosqichlari va hujjatlar ro'yxati." },
      { title: "Kelgandan keyingi zarur jarayonlar", desc: "SIM karta, bank, transport, turar joy va ro'yxatdan o'tish bo'yicha ma'lumot." }
    ],
    trust_title: "Nega Korevoo?",
    trust_reasons: [
      { title: "Koreyadagi jamoa", desc: "Koreyada yashovchi jamoamiz to'g'ridan-to'g'ri ma'lumot tayyorlaydi." },
      { title: "Boshlang'ich bosqichda yaqin yordam", desc: "Har bir talabaning vaziyatini chuqur tushunib yordam beramiz." },
      { title: "Neytral yo'riqnoma", desc: "Ma'lum bir universitetga bog'lanmagan holda sizga mos tanlovni ko'rsatamiz." }
    ],
    how_title: "Qanday amalga oshiriladi?",
    how_steps: [
      { title: "Google Form to'ldirish", desc: "Asosiy ma'lumotlaringiz va maqsadlaringizni yozing." },
      { title: "Korevoo ko'rib chiqadi", desc: "Topshirgan ma'lumotlaringiz asosida yo'nalish belgilaymiz." },
      { title: "WhatsApp maslahat", desc: "Maxsus yo'riqnomalarni messenger orqali yuboramiz." }
    ],
    faq_title: "Tez-tez so'raladigan savollar",
    faqs: [
      { q: "Xizmat pullikmi?", a: "Hozir boshlang'ich bosqichda bo'lgani uchun bepul." },
      { q: "Kimlar foydalanadi?", a: "O'zbekiston va Qozog'istondan Koreyada o'qishga tayyorlanayotgan talabalar." },
      { q: "Viza rasmiylashtirish bilan yordam berasizmi?", a: "To'g'ridan-to'g'ri rasmiylashtirmaymiz, lekin kerakli hujjatlar va jarayonlar bo'yicha yo'riqnoma beramiz." }
    ],
    cta_footer_title: "Koreyada o'qish noaniq orzu emas, balki real reja bo'lishi uchun Korevoo yoningizda.",
    footer_company: "Kompaniya",
    footer_about: "Biz haqimizda",
    footer_contact: "Bog'lanish",
    footer_privacy: "Maxfiylik siyosati"
  },
  kk: {
    nav_about: "Біз туралы",
    nav_journey: "Оқу жолы",
    nav_services: "Көмек алу",
    nav_faq: "Сұрақтар",
    cta: "Кореяда оқуды бастау",
    cta_link: "https://bit.ly/kk-korevoo-google-form",
    hero_title: "Кореяда оқуға дайындалу қиын көрінеді ме?",
    hero_sub: "Korevoo - Өзбекстан мен Қазақстан студенттерінің Кореяда оқу жолындағы серіктесі.",
    hero_bullets: [
      "Қай университет маған сәйкес келетінін білмесеңіз",
      "Виза және құжаттар күрделі болғанда",
      "Кореяға жеткеннен кейін не істеу керектігін білмесеңіз"
    ],
    problem_title: "Қайдан бастау керектігін білмеу ең қиын",
    problem_desc: "Кореяда оқу үшін ақпарат жеткіліксіз болса, белгісіздік артады. Университет таңдау, төлем, виза құжаттары, кіру процедуралары - көп кезеңдер бар және кейбір студенттер ортада тоқтатып жібереді.",
    journey_title: "Кореяда оқу қалай өтеді",
    journey_sub: "Қай кезеңде болсаңыз да, Korevoo арқылы келесі кезеңге өте аласыз.",
    steps: [
      { title: "Қызығушылық кезеңі", desc: "Кореяда оқығыңыз келеді, бірақ әлі жоспар жоқ." },
      { title: "Ақпарат жинау", desc: "Университеттер, төлемдер, визалар және тұрмыс шығындары туралы ақпарат іздеу." },
      { title: "Университет таңдау", desc: "Бағалар, бюджет және қызығушылықтарыңызға қарай нұсқаларды тарылту." },
      { title: "Құжат дайындау", desc: "Өтініш, диплом, ұсыныстар және банк шоты туралы анықтамаларды дайындау." },
      { title: "Виза үшін өтініш", desc: "Виза үшін өтініш беру және растауды күту." },
      { title: "Кореяға келгеннен кейін", desc: "SIM карта, банк, көлік, тұрғын үй және тіркеуден өту." }
    ],
    service_title: "Форманы толтырыңыз, Korevoo сізге көмектеседі",
    services: [
      { title: "Оқу бағытын ұсыну", desc: "Білім, бюджет және мамандыққа қарай нақты жол ұсынамыз." },
      { title: "Жылдық бюджет", desc: "Төлем, жатақхана және тұрмыс шығындары туралы ақпарат береміз." },
      { title: "Виза тізімі", desc: "D-2/D-4 виза дайындау кезеңдері және құжаттар тізімі." },
      { title: "Келгеннен кейінгі қажетті процедуралар", desc: "SIM карта, банк, көлік, тұрғын үй және тіркеу бойынша ақпарат." }
    ],
    trust_title: "Неліктен Korevoo?",
    trust_reasons: [
      { title: "Кореядағы команда", desc: "Кореяда тұратын командамыз тікелей ақпарат дайындайды." },
      { title: "Бастапқы кезеңде жақын көмек", desc: "Әр студенттің жағдайын терең түсініп көмектесеміз." },
      { title: "Бейтарап нұсқаулық", desc: "Белгілі бір университетке байланыссыз сізге сәйкес таңдауды көрсетеміз." }
    ],
    how_title: "Қалай жүзеге асырылады?",
    how_steps: [
      { title: "Google Form толтыру", desc: "Негізгі ақпаратыңыз бен мақсаттарыңызды жазыңыз." },
      { title: "Korevoo қарап шығады", desc: "Тапсырған ақпаратыңызға негізделген бағыт белгілейміз." },
      { title: "WhatsApp кеңес", desc: "Арнайы нұсқаулықтарды мессенджер арқылы жібереміз." }
    ],
    faq_title: "Жиі қойылатын сұрақтар",
    faqs: [
      { q: "Қызмет ақылы ма?", a: "Қазір бастапқы кезеңде болғандықтан тегін." },
      { q: "Кімдер пайдаланады?", a: "Өзбекстан мен Қазақстаннан Кореяда оқуға дайындалатын студенттер." },
      { q: "Виза ресімдеуге көмектесесіз бе?", a: "Тікелей ресімдемейміз, бірақ қажетті құжаттар мен процедуралар бойынша нұсқаулық береміз." }
    ],
    cta_footer_title: "Кореяда оқу анық емес арман емес, нақты жоспар болуы үшін Korevoo қасыңызда.",
    footer_company: "Компания",
    footer_about: "Біз туралы",
    footer_contact: "Байланыс",
    footer_privacy: "Құпиялылық саясаты"
  },
  ru: {
    nav_about: "О нас",
    nav_journey: "Процесс обучения",
    nav_services: "Получить помощь",
    nav_faq: "FAQ",
    cta: "Начать путь к обучению в Корее",
    cta_link: "https://bit.ly/uz-korevoo-google-form",
    hero_title: "Чувствуете себя потерянным в подготовке к учёбе в Корее?",
    hero_sub: "Korevoo — ваш партнёр на пути к обучению в Корее для студентов из Узбекистана и Казахстана.",
    hero_bullets: [
      "Когда не знаете, какой университет вам подходит",
      "Когда визовые процедуры и документы сложны",
      "Когда не знаете, что делать после прибытия в Корею"
    ],
    problem_title: "Труднее всего, когда не знаешь, с чего начать",
    problem_desc: "Учёба в Корее становится более неопределённой при нехватке информации. Многие студенты сдаются из-за сложных этапов выбора университета, оплаты, визовых документов и процедур въезда.",
    journey_title: "Как проходит обучение в Корее",
    journey_sub: "На каком бы этапе вы ни находились, Korevoo поможет вам перейти к следующему.",
    steps: [
      { title: "Этап интереса", desc: "Вы хотите учиться в Корее, но пока не имеете плана." },
      { title: "Сбор информации", desc: "Поиск информации об университетах, оплате, визах и расходах на проживание." },
      { title: "Выбор университета", desc: "Сужение вариантов на основе оценок, бюджета и интересов." },
      { title: "Подготовка документов", desc: "Подготовка заявления, транскриптов, рекомендательных писем и банковских выписок." },
      { title: "Подача на визу", desc: "Подача заявки на визу и ожидание одобрения." },
      { title: "После прибытия", desc: "Получение SIM-карты, банковского счёта, транспорта, жилья и регистрационной карты." }
    ],
    service_title: "Заполните форму, и Korevoo вам поможет",
    services: [
      { title: "Направление обучения в Корее", desc: "Рекомендуем реалистичные пути на основе вашего образования, бюджета и специальности." },
      { title: "Годовой бюджет", desc: "Предоставляем информацию о плате за обучение, общежитии и расходах на проживание." },
      { title: "Чек-лист для визы", desc: "Предоставляем этапы подготовки визы D-2/D-4 и списки документов." },
      { title: "Необходимые процедуры после прибытия", desc: "Руководство по SIM-картам, банкам, транспорту, жилью и регистрации." }
    ],
    trust_title: "Почему Korevoo?",
    trust_reasons: [
      { title: "Команда из Кореи", desc: "Наша команда, живущая в Корее, непосредственно организует информацию." },
      { title: "Близкая поддержка на ранней стадии", desc: "Мы глубоко понимаем ситуацию каждого студента и помогаем." },
      { title: "Нейтральное руководство", desc: "Мы помогаем вам сделать правильный выбор, не привязываясь к конкретным университетам." }
    ],
    how_title: "Как это работает?",
    how_steps: [
      { title: "Заполните Google Form", desc: "Расскажите нам о вашей основной информации и целях." },
      { title: "Проверка Korevoo", desc: "Мы определим направления на основе вашей информации." },
      { title: "Консультация в WhatsApp", desc: "Отправляем персонализированные рекомендации через мессенджер." }
    ],
    faq_title: "Часто задаваемые вопросы",
    faqs: [
      { q: "Есть ли плата за услугу?", a: "В настоящее время бесплатно, так как мы находимся на ранней стадии." },
      { q: "Кто пользуется этой услугой?", a: "Студенты из Узбекистана и Казахстана, готовящиеся к учёбе в Корее." },
      { q: "Помогаете ли вы с визовыми заявлениями?", a: "Мы не обрабатываем их напрямую, но предоставляем руководство по необходимым документам и процедурам." }
    ],
    cta_footer_title: "Korevoo здесь, чтобы сделать учёбу в Корее реалистичным планом, а не просто мечтой.",
    footer_company: "Компания",
    footer_about: "О нас",
    footer_contact: "Контакты",
    footer_privacy: "Политика конфиденциальности"
  }
};
