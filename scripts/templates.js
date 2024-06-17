const SOURCE_TEMPLATES = {
  "custom" : {
    "name" : "Свій текст",
    "isEssential" : true,
    "text" : ""
  },

  "useful": {
    "name": "Корисні фрази",
    "isEssential": true,
    "text": "Українська мова — Ukrayin tili\nТак — Ebet\nНі — Yoq\nПривіт! — Selâm! / Meraba!\nЯк справи? — İşler nasıl?\nЛаскаво просимо! — Hoş keldiñiz!\nДо побачення! — Sağlıqnen qalıñız! (кажуть тому, хто залишається), Sağlıqnen barıñız! (кажуть тому, хто йде)\nБудь ласка — Lütfen, Rica etem \nДякую — Sağ oluñız\nДаруйте — Bağışlañız\nПробачте — Afu etiñiz\nЯк вас звати? — Adıñız ne?\nСкільки? — Qaç?, Ne qadar?\nЯ (вас) не розумію. — Men (sizni) añlamayım.\nВи розмовляєте українською мовою? — Siz ukraince laf etesiñizmi?\nЯ не знаю. — Men bilmeyim"
  },

  "lviv": {
    "name": "Львів",
    "isEssential": true,
    "text": "İlbav ya da Lviv (ukraince Львів) - Ukrainanıñ ğarbında büyük bir şeerdir, İlbav vilâyetiniñ merkezi."
  },

  "crh" : {
    "name" : "Заповіт",
    "isEssential" : true,
    "text": "Vasiyet\n\nÖlsem, meni kömüñiz\nUkraynamnıñ bağrına,\nMezarımnı qazıñız\nQulan çöl toprağına.\nBileyim men qurğannıñ\nKöksünde yatqanımnı,\nDiñleyim Dneprniñ\nQuturıp aqqanını.\nNe vaqıt o duşman qanın\nUkrayna üzerinden\nYuvıp keter… tek o zaman\nTurarım men qabrimden —\nDua etip tek o zaman\nÇıqarım arş-alâğa,\nOña qadar mende yoqtır\nİşanç Alla-Taalâğa.\nMeni cıyıp, qalqıñız ve\nÜzüñiz buğavlarnı,\nZalım duşman qanı ile\nYuvuñız diyarlarnı,\nUlu, ür bir ailege\nBirleşilgen künlerde.\nUnutmayıp — eyi söznen\nHatırlañız meni de."
  },

  "cities": {
    "name": "Міста",
    "isEssential": true,
    "text": "Qırım (Крим), Aqyar (Севастополь), Aqmescit (Сімферополь), Kezlev (Євпаторія), Kefe (Феодосія), Keriç (Керч), Qarasuvbazar (Білогірськ), Qurman (1944-2023 — Красногвардійське), Yañı Qapu (до 2023 — Красноперекопськ), İlbav (Львів), Qız Yar (до 1815; Мелітополь), İslâm Kermen (до XVIII ст.; Каховка)"
  },
  
 
  // "mix" : {
  //   "name" : "Всячина",
  //   "isEssential" : true,
  //   "text" : "Україна, Київ, Нью-Йорк, Шевченко, Юрій, гривня, шахтар, валянок, тривіальний, м'ясо, з’їзд, кальян, синяя, йогурт, всього, бульйон, бойовий, нижній, мить, индик, говорити, узгодження, щороку, щирий, чіпляєшся, полювання, цілуватись, киця, здається, подружжя"
  // },

  // "names" : {
  //   "name" : "Імена",
  //   "isEssential" : true,
  //   "text" : "Анастасія, Андрій, Аскольд, Богдан, Володимир, Дмитро, Жанна, Наталія, Олег, Олексій, Пєтька, Соломія, Уляна, Христина, Юлія, Юрій\n\nБєляєва, Вишневецька, Гаєвич, Ґалаґан, Згуровський, Касьяненко, Микитась, Онищенко, Рибчинська, Стеценко, Чапаєв, Шпольський, Ярошенко"
  // },

  // "geo" : {
  //   "name" : "Географія",
  //   "isEssential" : true,
  //   "text" : "Алушта, Біла Церква, Вінниця, Гадяч, Ґорґани, Донецьк, Есмань, Знам'янка, Йосипівка, Київ, Стрий, Ужгород, Харків, Варшава, Нью-Йорк\n\nЗакарпаття, Сумщина, Україна, Русь, Азія, Гренландія, Китай, Німеччина, Північна Корея, Польща, Таджикістан, Угорщина, Швеція, Чехія"
  // },

  // "pangrams" : {
  //   "name" : "Панграми",
  //   "isEssential" : true,
  //   "text" : "В Бахчисараї фельд'єґер зумів одягнути ящірці жовтий капюшон! Хвацький юшковар Філіп щодня на ґанку готує сім'ї вечерю з жаб. Грішний джиґіт, що хотів у Францію, позбувався цієї думки, з'їдаючи трюфель. Протягом цієї п'ятирічки в ґрунт було висаджено гарбуз, шпинат та цілющий фенхель."
  // },

  // "anthem" : {
  //   "name" : "Гімн",
  //   "isEssential" : false,
  //   "text" : "Ще не вмерла України ні слава, ні воля.\nЩе нам, браття молодії, усміхнеться доля.\nЗгинуть наші воріженьки, як роса на сонці,\nЗапануєм і ми, браття, у своїй сторонці.\n\nДушу й тіло ми положим за нашу свободу\nІ покажем, що ми, браття, козацького роду!"
  // },

  // "act" : {
  //   "name" : "Акт проголошення незалежності",
  //   "isEssential" : false,
  //   "text" : "АКТ\nПРОГОЛОШЕННЯ\nНЕЗАЛЕЖНОСТІ УКРАЇНИ\n\nВиходячи із смертельної небезпеки, яка нависла була над Україною в зв'язку з державним переворотом в СРСР 19 серпня 1991 року,\n- продовжуючи тисячолітню традицію державотворення в Україні,\n- виходячи з права на самовизначення, передбаченого Статутом ООН та іншими міжнародно-правовими документами,\n- здійснюючи Декларацію про державний суверенітет України, Верховна Рада Української Радянської Соціалістичної Республіки урочисто\nпроголошує\nнезалежність України та створення самостійної української держави — УКРАЇНИ.\nТериторія України є неподільною і недоторканною.\nВіднині на території України мають чинність виключно Конституція і закони України.\nЦей акт набирає чинності з моменту його схвалення.\n\nВЕРХОВНА РАДА УКРАЇНИ\n24 серпня 1991 року"
  // },

  // "text" : {
  //   "name" : "Довгий уривок",
  //   "isEssential" : false,
  //   "text" : "Іван Нечуй-Левицький\n\nМикола Джеря\n\nШирокою долиною між двома рядками розложистих гір тихо тече по Васильківщині невеличка річка Раставиця. Серед долини зеленіють розкішні густі та високі верби, там ніби потонуло в вербах село Вербівка. Між вербами дуже виразно й ясно блищить проти сонця висока біла церква з трьома банями, а коло неї невеличка дзвіниця неначе заплуталась в зеленому гіллі старих груш. Подекуди з-поміж верб та садків виринають білі хати та чорніють покрівлі високих клунь.\n\nПо обидва береги Раставиці через усю Вербівку стеляться сукупні городи та левади, не одгороджені тинами. Один город одділяється од другого тільки рядком верб або межами. Понад самим берегом в’ється в траві стежка через усе село. Підеш тією стежкою, глянеш кругом себе, і скрізь бачиш зелене-зелене море верб, садків, конопель, соняшників, кукурудзи та густої осоки.\n\nОт стеляться розложисті, як скатерть, зелені левади. Густа, як руно, трава й дрібненька, тонісінька осока доходить до самої води. Подекуди по жовто-зеленій скатерті розкидані темно-зелені кущі верболозу, то кругленькі, наче м’ячики, то гостроверхі, неначе топольки. Між м’якими зеленими, ніби оксамитовими, берегами в’ється гадюкою Раставиця, неначе передражнює здорові річки, як часом маленькі діти передражнюють старших. А там далі вона повилась між високими вербами та лозами, що обступили її стіною з обох боків. Он верби одступились од берега і розсипались купами на зеленій траві. Скрізь по обидва боки Раставиці на покаті стеляться чудові городи, жовтіють тисячі соняшників, що ніби поспинались та заглядають поверх бадилля кукурудзи на річку; там далі набігли над річку високі коноплі і залили берег своїм гострим важким духом. В одному місці розрослись чималі вишняки, а далі од берега, коло самих хат, ростуть дикі груші та яблуні, розкидавши своє широке гілля понад соняшниками; а ондечки серед одного города вгніздилась прездорова, стара, широка та гілляста дика груша, розклала своє гілля трохи не при землі на буряки та картоплю. Соняшники заплутались своїми жовтими головами в гіллі."
  // }
}