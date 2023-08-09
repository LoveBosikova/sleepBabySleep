const quotes = [{
        "quote": "Общий принцип таков: засыпать ребенок должен в том месте и условиях, в которых проведет всю ночь",
    },
    {
        "quote": "Привычка сбегать ночью от спящего ребенка не укрепляет его доверие к вам, а чтобы хорошо спать, нужно доверять миру",
    },
    {
        "quote": "Если ваша кроха по-прежнему пробуждается один или два раза за ночь или не отказалась от ночных кормлений к пяти-шести месяцам, следует хорошенько обдумать ее ночные привычки",
    },
    {
        "quote": "Большинство новорожденных через две недели жизни выходят на типичный режим со множеством периодов сна разной продолжительности на протяжении как дня, так и ночи",
    },
    {
        "quote": "Чтобы требовать от ребенка соблюдения правил ночью, родитель должен дарить ему достаточно заботы и внимания днем. Это обязательное условие",
    },
    {
        "quote": "Истоки проблемы, как правило, в нежелательных ассоциациях со сном.",
    },
    {
        "quote": "Запомните главное: трудно спать, когда находишься в фазе бодрствования, и бодрствовать в фазе сна",
    },
    {
        "quote": "Приступая к решению проблемы со сном, начните с составления четкого распорядка дня и неукоснительно соблюдайте его еще несколько недель после того, как ребенок начнет спать нормально",
    },
    {
        "quote": "Некоторые дети, которых слишком надолго укладывают в постель для ночного сна, спят лишь в начале и в конце ночи, а промежуточный период поверхностного сна превращается у них в полное бодрствование",
    },
    {
        "quote": "В двухлетнем возрасте ребенок по-прежнему спит около 9-10 часов ночью и от одного до двух часов после обеда, то есть в общей сложности 11,5 часа. Тихий час, скорее всего, сохранится, по меньшей мере до трех лет",
    },
    {
        "quote": "Дети не растут неуверенными в себе только лишь из-за того, что спят одни или в детской с братьями и сестрами, также как сам по себе сон с родителями нисколько не мешает им привыкать к независимости и формировать собственную индивидуальность",
    },
    {
        "quote": "В три-четыре месяца ребенку полагается три дневных сна: долгие в середине первой и второй половины дня и короткий вечером. В возрасте около полугода вечерний сон обычно выпадает",
    },
    {
        "quote": "Дети учатся очень быстро. Ребенок, привыкший засыпать строго определенным образом, станет засыпать совершенно по-другому после нескольких ночей практики",
    },
    {
        "quote": "После краткого пробуждения на несколько минут наступает состояние, напоминающее дремоту или быстрый сон",
    },
    {
        "quote": "Не позволяйте вашему общению перед сном затягиваться — ребенок должен знать, когда вам придет пора расстаться до утра",
    },
    {
        "quote": "Выясните, почему ребенок плохо спит, измените то, что нужно изменить, и все наладится значительно быстрее. Обычно на это уходит нескольких дней, максимум две недели",
    },
    {
        "quote": "Стадия сна, на которой происходит пробуждение, является природной особенностью каждого ребенка, и изменить ее невозможно",
    },
    {
        "quote": "Помочь выработать здоровый режим — тоже важная составляющая вашей заботы, а для этого нужно уметь иногда терпеть плач или находить другие способы утешить, кроме кормления.",
    },
    {
        "quote": "Отход ко сну, как правило, является моментом разлучения с родителями, что представляет трудность для многих детей, особенно маленьких. Когда малыша просто-напросто отсылают в постель одного, ему это кажется несправедливостью, а то и пугает",
    },
    {
        "quote": "Дети, переходящие к бодрствованию непосредственно из четвертой стадии сна, выглядят недовольными или каждое утро плачут. Приступ раздражительности обычно длится минут десять, и беспокоиться тут не о чем",
    },
    {
        "quote": "С приближением утра дети еще раз входят в самую глубокую, четвертую стадию медленного сна, а затем окончательно просыпаются. Так что последние один или два часа, как правило, спокойны, какой бы хлопотной ни выдалась ночь",
    },
    {
        "quote": "Дети проводят первые три-четыре часа ночного отдыха преимущественно в очень глубоком сне, когда разбудить их непросто",
    },
    {
        "quote": "Если ваша кроха вечно просыпается при попытке переложить ее в колыбель после укачивания, просто дождитесь, прежде чем укладывать, наступления четвертой стадии сна",
    },
    {
        "quote": "Ребенок станет спать лучше, лишь научившись засыпать без вашего вмешательства, а для этого нужна практика. Плач не помогает ребенку выработать нужные ассоциации со сном",
    },
    {
        "quote": "Большинство детей хорошо спят, только если не происходит ничего неожиданного, ничего не меняется во время их сна и им не приходится при каждом пробуждении ломать голову, где они очутились и куда подевались родители",
    },
    {
        "quote": "Приступая к решению проблемы со сном, начните с составления четкого распорядка дня и неукоснительно соблюдайте его еще несколько недель после того, как ребенок начнет спать нормально. ",
    },
    {
        "quote": "Даже если ребенок спит в вашей постели, наличие переходного объекта позволит вам самим решать, во сколько ложиться, а также оставлять малыша с няней",
    },
    {
        "quote": "Те, кто долго (до 11 часов) спит ночью, скорее всего, просто не могут заснуть еще и днем. Если эта схема выработается у ребенка слишком рано, он не сможет полноценно бодрствовать весь день",
    },
    {
        "quote": "То, что ночь начинается с медленного сна, можно объяснить накопившейся за день потребностью в глубоком отдыхе",
    },
    {
        "quote": "Больше тревог перед отходом ко сну — больше частичных пробуждений.",
    },
    {
        "quote": "Проявления спутанности сознания чаще всего наблюдаются в конце первого или второго цикла сна через один — четыре часа после засыпания. Они всегда происходят на фоне частичного пробуждения от медленного сна",
    },
    {
        "quote": "Наименьшая суточная температура тела достигается ночью ближе к времени утреннего пробуждения, чем у жаворонков, у которых даже имеется особый ген, отвечающий за эту особенность.",
    },
    {
        "quote": "Новорожденный спит примерно 16 часов в день, но не более нескольких часов подряд. Около семи периодов сна и бодрствования более-менее равномерно распределены на всем протяжении суток. Каждый такой период, длящийся от 20 минут до пяти-шести часов, начинается быстрым сном. Затем фазы быстрого и медленного сна сменяют друг друга несколько раз, в зависимости от общей продолжительности сна",
    },
    {
        "quote": "Быстрый сон наблюдается у плода с шестого — седьмого месяца беременности, через месяц или чуть больше появляется и фаза медленного сна",
    },

];

export default quotes;