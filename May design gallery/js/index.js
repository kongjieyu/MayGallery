(function () {
    if (!Object.keys) {
        Object.keys = (function () {
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({
                    toString: null
                }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function (obj) {
                if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

                var result = [];

                for (var prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) result.push(prop);
                }

                if (hasDontEnumBug) {
                    for (var i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                    }
                }
                return result;
            }
        })()
    };
})();

(function () {
    var zh = {
        i18n_dfok: '为孩子做设计',
        i18n_poster01: '每个孩子都值得拥有世界上最好的设计，因为他们的追求决定了祖国的未来',
        i18n_poster02: 'i++ 致力于为我们可爱的孩子设计最惊喜的产品，包括儿童产品，教育软件，儿童游戏...',
        i18n_poster03: '设计作品廊',
        i18n_poster04: '设计作品展示廊：软件和游戏设计，产品设计和其他类型设计的展示',
        i18n_poster05: 'i++   视角',
        i18n_poster06: '研究新时代儿童的生活习惯和心理变化，分享设计心得和想法。',
        i18n_poster07: 'i++  设计  &  May',
        i18n_poster081: '设计是一个非常广阔而有趣的话题，它与市场，用户，审美紧密相连。',
        i18n_poster082: '作为一名设计师是幸福的，生活中用同理心去感受他人的需求，用设计提升生活的质量;',
        i18n_poster083: '作为一名程序员是幸运的，因为科技可以拓宽设计的可能性，降低产品落地的成本，提升设计的效率。',
        i18n_explore: '探索',
        i18n_cardbravo: '你喜欢喝热巧克力吗？你喜欢开一家奶茶店吗? BRAVO是一款充满惊喜的数学类游戏，想试试吗？快来开一家属于你自己的奶茶店吧!',
        i18n_titleUI: 'U & I 新型儿童趣味书包',
        i18n_cardUI: '有没有感觉普通的帆布书包总是缺乏一些新意，U&I给你提供更多的创新选择，你可以在U&I设计属于自己独一无二的书包。',
        i18n_titleArt: '美术史电子课本',
        i18n_cardArt: '想学美术史又不知从何学起？快来打开这本神奇的美术史电子课本吧！只要轻轻的旋转地球，不同时期的艺术家和他们的作品都会呈现在你面前。',
        i18n_titleTeacher: '超级老师',
        i18n_cardTeacher: '小时候的你有当过小老师吗，当时的你一定很享受帮同学批改作业打勾的感觉吧，偶尔还可以显摆显摆教小伙伴做题。小朋友们，在这里你将成为一个超人老师，快来吧，这里有一群可爱的学生！',
        i18n_titleDino: '恐龙历险记',
        i18n_cardDino: '数百万年前，这里有一群特别的生物统治着整个地球，他们有的在地上跑，有的在天上飞，还有的在水里游，他们就是——恐龙。让我们一起到它们的世界走走吧!',
        i18n_titleNum: '跳数',
        i18n_cardNum: '跳数是一款简单而有趣的数学游戏，它可以帮助学生提升他们的算数技巧。在游戏中，小朋友通过找到与自己匹配的算式，不断向更高处跳，在一次次的突破自己的记录。',
        i18n_titleMA: '个性化音乐和艺术 APP',
        i18n_cardMA: '其实你可以不用笔来创作一幅艺术作品，其实每首音乐都有一幅属于自己的色彩。在这里你可以通过简单的敲击创作出美妙绝伦的音乐，M&A App还能为您自动生成一幅美术作品。',
        i18n_titleBabySoap: '婴儿沐浴露包装设计',
        i18n_cardBabySoap: '这款包装设计是为新西兰婴儿沐浴品牌——皇家宝贝（ROYAL BABY）而设计的，通过简约和带有新西兰象征性的设计， 给用户传递纯净，自然，可靠的品牌形象。',
        i18n_titleScooter: 'LUNA电动车设计',
        i18n_cardScooter: '每位女性都值得拥有更优雅的出行方式。拥有轻巧身板和完美曲线的LUNA为穿裙子行的您提供更优雅和方便的出行选择，你将成为道路上一道靓丽的风景线。',
        i18n_titleTshirt: '代码T-shirt',
        i18n_cardTshirt: '代码T-shirt是程序员表达自己想法的有趣方式，你可以通过这件T-shirt来调侃自己，向爱人表白，反抗生活…',
        i18n_titleBag: '包包设计',
        i18n_cardBag: '我相信每个女孩都有过一个时尚设计的梦，渴望设计时装，设计包包首饰，特别是会画画的女孩。这是我的一些包包设计作品。',
        i18n_footer01: '最近的设计思考',
        i18n_footer02: '研究新时代儿童的生活习惯和心理变化，',
        i18n_footer03: '分析新的社会环境对他们成长的影响！',
        i18n_cardFuture01: '欢迎来到我的设计作品空间，很高兴认识您！',
        i18n_cardFuture02: '如果你有一些有趣的设计想法和思考，欢迎给我发Email，我们可以一起学习和讨论。',
        i18n_cardFuture03: '我将会持续推出更多设计作品哦！',
        i18n_detailbtn: '查看更多',
        i18n_nav01: 'i ++ 首页',
        i18n_nav02: '设计作品廊',
        i18n_nav03: '设计视角',
        i18n_nav04: '关于',

        // BRAVO modal
        modalBravoTitle: 'Bravo',
        modalBravoEx01: '伴随着欢快的音乐，',
        modalBravoEx02: '和跳动的朋友们一起开启你们的BRAVO旅程吧！',
        modalBravoEx03: '开始咯！',
        modalBravoEx04: '前方就是你的BRAVO奶茶店了，快去开店吧！',
        modalBravoEx05: '我们先去采购原材料吧!',
        modalBravoEx06: '市场上有两家商店，记得分别对比他们的价格，寻找最实惠的价格进行购买。',
        modalBravoEx07: '点击一下商店，你就可以看到商品的价格了。',
        modalBravoEx08: '现在可以用采购好的原材料制作饮料啦，',
        modalBravoEx09: '草莓味的，芒果味还是巧克力味的都由你来设计，',
        modalBravoEx10: '再给饮料配一根吸管吧，',
        modalBravoEx11: '别忘了给它定价哦！',
        modalBravoEx12: '看，客人来了！',
        modalBravoEx13: '他们要买什么呢？',
        modalBravoEx14: '认真计算好订单的价格哦， 你会成为一个成功的商人的！',
        modalBravoType: '儿童数学游戏',
        modalBravoExplan: '数学学科是一门强应用性和工具性的学科，要求学生具备运用数学知识姐姐实际问题的逻辑思维和能力，这就是数学中所谓的“模型思维”和“建模能力”； <br><br>BRAVO是一款教育类游戏，为小学1-3年级的孩子模拟一个逼真的饮品店经营场景，每位同学可以在游戏中体验饮品店经营的全流程。从原材料采购-饮品设计-产品定价-产品销售整个流程中，学习和运用小学1-3年级的数学知识，提升自己运用数学知识解决实际问题的能力。',

        // U&I modal
        modalUITitle: 'U & I 新型儿童趣味书包',
        modalUIType: '产品设计',
        modalUIExplan01: '根据大量的市场调研报告显示，目前市场上的儿童书包大多款式单一，家长只能在既定的款式中寻找勉强合适自己小孩的书包,不能满足个性化的需求。',
        modalUIExplan02: 'U&I儿童趣味书包以6岁-14岁的儿童为主要目标客户群， 由多彩EVA外壳，帆布内包，多彩包盖以及背带组成。这四部分可拆卸，任意搭配，组装成符合自己个性的书包。除了这些特点，U&I书包还充分考虑了人机工程，包括整个书包大小，尺寸，背带，背部缓冲，排湿等方面都符合儿童的身体特征。',

        // Ebook modal
        modalEbookTitle: '美术史电子课本',
        modalEbookType: '电子课本设计',
        modalEbookExplan01: '美术史电子课本为老师和学生提供交互式的美术史学习课堂，和美术史学习资源。所有的资源颗粒都按照课程结构，时间结构，模块分类等方式进行结构化的组织。大家可以通过旋转3D地球和调整时间轴，快速简单的找到想要学习的内容。',
        modalEbookExplan02: '有了这本美术史电子书，你可以在观看美术史的相关影片，欣赏艺术大作，阅读美术史的文章，体验美术交互小游戏，还有在线课堂和课后小测，让学生更有趣的学习美术史，让老师更轻松的备课美术史。',
        modalEbookEx01: '滑动右侧的时间轴，旋转3D地球，',
        modalEbookEx02: '看见地球上有记号吗？每个记号都代表不同的艺术运动，艺术家，或著名的艺术作品,',
        modalEbookEx03: '快来探索艺术的世界吧！',
        modalEbookEx04: '你可以通过多种方式筛选美术史信息，如：通过艺术运动筛选，通过艺术家筛选，通过时间轴筛选，通过目录筛选等',
        modalEbookEx05: '所有的课程颗粒都通过不同的结构进行了很好的组织',
        modalEbookEx06: '可以帮助学生更容易的掌握艺术史课程',



        // super teacher modal
        modalTeachTitle: '超级老师',
        modalTeachType: '模拟老师类游戏',
        modalTeachExplan01: '教永远是学习的最好方式，许多小朋友们都渴望成为老师的小助手，但是机会总是那么的少。在超级老师的游戏中，你可以摇身一变成为一位老师，你希望成为数学老师，国语老师，英文老师，物理老师还是美术老师呢？。',
        modalTeachExplan02: '作为一名优秀的老师，你的一天将会很忙，你需要完成很多的任务，如备课，上课，改作业，说不定还要处理学生闯祸的问题。在出色完成任务后，你的等级将会不断的提升，从小白老师逐渐成长为大牛老师。对了，在教学生之前要认真备好课哦，否则在课堂上会出洋相的哦！',

        // super Dino modal 
        modalDinoTitle: '恐龙历险记',
        modalDinoType: '恐龙类游戏',
        modalDinoExplan: '数百万年前，这里有一群特别的生物统治着整个地球，他们有的在地上跑，有的在天上飞，还有的在水里游，他们就是——恐龙。今天你将要出发去探索他们的世界。你将穿越三个时期，三迭纪，侏罗纪和白垩纪时期。那个地方到底有什么好玩的呢？ 你可以养育恐龙宝宝，和各种各样的恐龙交朋友组建团队，在恐龙的时代，单打独斗是件很危险的事情，当然你还可以和你的恐龙朋友一起去逛街购物，开party野餐。迫不及待了吧？快开始你的旅程吧！',
        modalDinoEx01: '你马上要启程到神奇的恐龙世界了，',
        modalDinoEx02: '你将会先到达三迭纪时期，穿越侏罗纪时期，最后到达白垩纪时期，',
        modalDinoEx03: '虽然恐龙朋友们看起来又高又壮，但是别害怕，享受你的旅程吧！',
        modalDinoEx04: 'Giraffatitan 有足足13米高，有6头大象那么重；',
        modalDinoEx05: '一般生活在水域环境中，用长长的脖子吃树上的叶子。',
        modalDinoEx06: 'Stegosaurus 是生活在侏罗纪晚期的素食恐龙，',
        modalDinoEx07: '它笨重的身体就注定它跑得不快，那它如何逃避敌人呢？你看它们背上有锋利的刀锋呢！',
        modalDinoEx08: 'Spinosaurus 是鱼食类恐龙',
        modalDinoEx09: '它经常蹲在池塘边，用鼻子嗅池面，等待它的食物。',
        modalDinoEx10: 'Lguanodon也是一位素食恐龙',
        modalDinoEx11: '一般生活在草丛中，',
        modalDinoEx12: '如果想和他们交朋友，可以去草丛中寻找他们哦！',
        modalDinoEx13: '看，小 Apatosaurs正在破壳而出呢，',
        modalDinoEx14: '它们长得很快，每天可以长14公斤。',

        // soap modal 
        modalSoapTitle: '婴儿沐浴露包装设计',
        modalSoapExplan01: '随着经济的发展和人们对健康的越来越重视度的提升，婴儿产品的安全性和自然无害性越来越受到家长的关注 。新西兰作为一个纯净国家的象征，有很多大自然馈赠的产品： 婴儿奶粉，蜂蜜，天然化妆品。',
        modalSoapExplan02: 'ROYAL BABY的品牌设计定于传递自然和纯净，以奶油色为主色调的设计，向客户传递产品无化学添加，100%来自于纯净的大自然的品牌形象。使用金色提升品牌的识别度——ROYAL BABY， 同时通过蓝色点睛产品的主要卖点，让用户快速了解产品的属性。',
        modalSoapType: '婴儿沐浴露包装设计',
        modalSoapEx1: '牛奶主题',
        modalSoapEx2: '100% 自然，源于纯净牛奶',
        modalSoapEx3: '银蕨主题（新西兰象征）',
        modalSoapEx4: '银蕨是新西兰的吉祥物，新西兰的象征.',

        // number modal
        modalNumTitle: '跳数',
        modalNumType: '儿童数学游戏',
        modalNumExplan: '计算能力是学生学习数学的必备基本能力，是学习数学的基础；学生计算的准确率和速度将直接影响学生的学习质量；培养和提高学生的计算能力是小学数学的主要任务之一，但是单纯的计算往往枯燥乏味，容易让学生产生厌倦情绪；<br><br> 跳数是一款有趣又简单的算数小游戏，在游戏中，小朋友通过找到与自己匹配的算式，不断向更高处跳，在一次次的突破自己的记录和世界纪录的过程中提升自己的算数能力；',
        modalNumEx01: '跳数提供多种不同难度的游戏选择，',
        modalNumEx02: '不用担心游戏太难没法玩，或者游戏过于简单太无聊。',
        modalNumEx03: '你看到那个跳动的小人儿了吗？他每跳一步后，身上的数字都会更新，',
        modalNumEx04: '你需要在移动的木板中，选择与它匹配的木板，',
        modalNumEx05: '如果跳到了错误的位置上，木板将会断裂，游戏结束。',
        modalNumEx06: '我们会为你每次的成功欢呼鼓掌，',
        modalNumEx07: '加油吧！',

        // Music&Art modal  
        modalMATitle: '个性化音乐和艺术 APP',
        modalMAType: '创作类APP',
        modalMAExplan01: '你知道怎么可以不用笔就可以画出一幅画家水平的画吗？告诉你一个秘密，在这个你可以通过音乐创作一幅艺术大作。',
        modalMAExplan02: '欢迎来到Music & Art，跟着我一起创作一幅独一无二的画作吧！<br>1.选择您要创作的音乐类型，比如：爵士乐，古典音乐，交响乐… 不同的音乐类型将决定你的画作风格；<br>2.轻拍屏幕下方的网格系统，每格代表不同的音符，多拍几下，就是一首美妙的乐曲啦；<br>3.你可以试着播放一下你编辑的这首曲子；<br>4.Music&Art将会自动为你生成一幅艺术作品；<br>5.你还可以在Music&Art上将你创作的作品打印在笔记本，帆布包手机壳上，这将会是一次难忘的创作！',

        //Luna modal
        modalScTitle: 'Luna电动车设计',
        modalScType: '交通工具设计',
        modalScExplan01: '这款电动车是我在大学时代设计的，当时是为中国一个著名电动车企业做的一款女性电动车，绿色出行，优雅，轻巧，经济型是我们当时设计这款电动车考虑的重点；',
        modalScExplan02: '城市里，许多刚从大学毕业的年轻女孩她们都有一颗爱美的心，希望自己无论是通勤还是上班，时时刻刻都是美美的，但是市面上的许多电动车都不符合当今新时代女性对审美的追求，他们需要一辆优雅的电动车来满足他们短距离通勤的需求，Luna正好符合新时代女性对优雅出行的期望。',

        //codeT modal
        modalCodeTitle: '代码T-shirt',
        modalCodeType: 'T-shirt 设计',
        modalCodeExplan01: '在21世纪，这里有一群人他们知道一种特殊的语言，不是德语，火星文，是计算机语言——他们就是程序员。或许他们不太擅长表达自己的情感，但是他们的内心其实很细腻，或许他们没空陪你吃饭聊天，但是他们其实很关心他们爱的人 ；',
        modalCodeExplan02: '代码T-shirt，让大家多一种有趣的方式去表达自己，你不仅可以通过这件T-shirt进行发泄情绪，还可以用它来求婚呢！',
    
        //HandB modal
        modalHandBTitle: '包包设计',
        modalHandBType: '时尚设计',
        modalHandBExpla01: '我相信每个女孩都有过一个时尚设计的梦，渴望设计时装，设计包包首饰，特别是会画画的女孩。这是我的一些包包设计作品。',
    }

    var en = {
        i18n_dfok: 'Design for our Kids',
        i18n_poster01: 'Every kid deserves best in the world',
        i18n_poster02: 'i++ aims to design amazing products for our adorable children --- Kids products, educational softwares, and games for kids',
        i18n_poster03: 'Design Gallery',
        i18n_poster04: 'Projects of different fields. Software and Game Design, Product Design and Other',
        i18n_poster05: 'i++   Perspective',
        i18n_poster06: 'Studying psychology and habit of kids and teens, Sharing idea of  designing for Children',
        i18n_poster07: 'i++ Design & May',
        i18n_poster081: 'Design is a very broad and interesting topic. It closely relates to market, users and aesthetics.',
        i18n_poster082: 'It is amazing to be a designer,  being thoughtful of others and improve their life via design.',
        i18n_poster083: 'It is amazing to be a programmer,  technology can expand the possibilities of design, and train me to think logically.',
        i18n_explore: 'Explore',
        i18n_cardbravo: 'Do you like hot chocolate? Do you want to run a drinking shop? Bravo is an amazing Math game for you. Come and open your shop!',
        i18n_titleUI: 'U & I Innovative Bag Design',
        i18n_cardUI: 'Bored of normal canvas schoolbag? U & I offer you another choice, you are able to design a unique school bag with U & I.',
        i18n_titleArt: 'E-book of Art History',
        i18n_cardArt: 'Do you think it’s hard to learn Art History? Open the E- book of art history, spinning Around the earth, you are able to explore the mysterious art history easily.',
        i18n_titleTeacher: 'Super Teacher',
        i18n_cardTeacher: 'Lots of kids dream to be a teacher and enjoy marking correct or error on the exercise book. Let’s start your teacher career here!',
        i18n_titleDino: 'Dinosaurs Adventure',
        i18n_cardDino: 'Hundreds of millions of years ago, a group of extraordinary creatures dominated the planets: dinosaurs. Let’s travel around their world together !',
        i18n_titleNum: 'Number Jump',
        i18n_cardNum: 'Number jump is a simple and interesting game that helps kids to improve their numeracy skills. you are able to reach higher places by finding matching formula on moving board. ',
        i18n_titleMA: 'Personalize Music & Art App',
        i18n_cardMA: 'Do you know how to create an art without pen, but with music. We offer you an tool to create your own amazing artwork by editing a song.',
        i18n_titleBabySoap: 'Baby Soap package Design',
        i18n_cardBabySoap: 'Packaging Design for New Zealand baby soap brand — ROYAL BABY. Conveying pure, natural, reliable product image to our customer.',
        i18n_titleScooter: 'Luna Scooter Design',
        i18n_cardScooter: 'Lady deserves to have an elegant life style. Luna offers you an new commuting way in the city, you look perfect on it.',
        i18n_titleTshirt: 'Coding T-shirt Design',
        i18n_cardTshirt: 'Coding T-shirt, enable programmer to express themselves in a funny way, you can propose or protest through the coding T-shirt.',
        i18n_titleBag: 'HandBag Design',
        i18n_cardBag: 'I think every woman dream to design dress and handbag for themselves, especially the woman can draw. There are some collection of my Handbag Design.',
        i18n_footer01: 'What we are doing now!',
        i18n_footer02: 'Researching habits, interests and Psychology of children in new era.',
        i18n_footer03: 'Analysing the social influence on their growth.',
        i18n_cardFuture01: 'Thank you for browsing i++ Design Gallery,',
        i18n_cardFuture02: 'Please send me Email and share your idea with me.',
        i18n_cardFuture03: 'There will be more Design coming up soon... ',
        i18n_detailbtn: 'More Detail',
        i18n_nav01: 'i ++ Version',
        i18n_nav02: 'Design Gallery',
        i18n_nav03: 'Perspective',
        i18n_nav04: 'About',




        // BRAVO modal
        modalBravoTitle: 'Bravo',
        modalBravoEx01: 'Welcome to the Bravo Shop,',
        modalBravoEx02: 'You are going to run a drinking shop with your selling strategy and designing skill.',
        modalBravoEx03: 'Come on, Let\'s go',
        modalBravoEx04: 'This is your Bravo Shop, Do you like it?',
        modalBravoEx05: 'Let\’s go to purchase some ingredients first!',
        modalBravoEx06: 'Don\'t forget to compare the prices of different shops while you are ordering the ingredients',
        modalBravoEx07: 'Click the Shops, and view the prices',
        modalBravoEx08: 'Designing the drink using all the ingredients you have,',
        modalBravoEx09: 'You can design amazing drinks by yourself,',
        modalBravoEx10: 'Don\'t forget put a pipe in it.',
        modalBravoEx11: 'Please set a price for your drink before selling it',
        modalBravoEx12: 'Look, customers are coming,',
        modalBravoEx13: 'Please calculate the total prices of order correctly. ',
        modalBravoEx14: 'You will be a successful businessman, fighting!',
        modalBravoType: 'Mathematical Game for kids',
        modalBravoExplan: 'BRAVO is an education game that simulates a real drinks shop operation scene for elementary school students from first year to third year. Players experience the whole process of shop\'s operation including purchasing ingredients, designing and making the drinks by themself, setting the prices... ability of During the game, Kids are able to apply mathematical knowledge to address pratical problems. The attractive illustration and animation makes the mathematic never bored.',

        // U&I modal
        modalUITitle: 'U & I Innovative Bag Design',
        modalUIType: 'Product Design for kids',
        modalUIExplan01: 'U & I schoolbag is new pattern of ergonomic-design schoolbag, which is mainly composed of colorful EVA bag, canvas inner bag, colorful package cover and straps. The four parts are detachable, random matches, assembled into a bag of his personality. Except these characteristics, U&I bag also give full consideration to the ergonomic design, including the bag size, straps, back cushion, air permeability, etc. All the details conform to the physical characteristics of children.',
        modalUIExplan02: 'According to numerous of market research reports, there are few pattern of children\'s schoolbags that can be chosen by parents on the market, which can’t meet with the requirement of individualized design. As children who are ready to enter the school, have no choice but accepting the schoolbag selected by their parents. U & I schoolbag meet the need of individualizaion product.',

        // Ebook modal
        modalEbookTitle: 'E-book of Art History',
        modalEbookType: 'E-book of Art History for teens',
        modalEbookExplan01: 'The E-book provides interactive art history lessons and resources for teachers and students. All of the resources are well-structured, students can explore the history of art by spinning around the 3D earth, searching through the timeline, searching through the catalogue...',
        modalEbookExplan02: ' With E-book, students can learn art history by watching the video, appreciating the art work, reading the articles, joining the online class and taking the test. It will be much easier for teachers to prepared the courses with this.',
        modalEbookEx01: 'Scrolling the timeline on right,',
        modalEbookEx02: 'Spinning the 3D Earth and selecting the signs on the Earth,',
        modalEbookEx03: 'You can explore famous artist and art movement at the age.',
        modalEbookEx04: 'You can filter the information you want by Art movement, Artist, timeline, color and catalogue.',
        modalEbookEx05: 'All of the courses are well-structured.',
        modalEbookEx06: 'It\'s easier for students to aquire the complex knowledge about art history.',

        // super teacher modal
        modalTeachTitle: 'Super Teacher',
        modalTeachType: 'Teacher simulation Game for kids',
        modalTeachExplan01: 'Teaching is always the best way to learn. Teacher helper is an attractive position for students. In Super Teacher, you are able to experience being a teacher. You can choose your role as an Math Teacher, Chinese Teacher, English Teacher, physic Teacher… As a excellent teacher your job would be super busy, not only prepare the lectures and mark their homework, You might also have problematic students waiting you to resolve.',
        modalTeachExplan02: 'Enjoy you teacher career in super teacher. what’s more, make sure you understand the knowledge first , because teacher are not suppose to mark students’ homework wrong. Have fun.',

        // super Dino modal 
        modalDinoTitle: 'Dinosaurs Adventure',
        modalDinoType: 'Dinosaur game for kids',
        modalDinoExplan: 'Hundreds of millions of years ago, a group of extraordinary creatures dominated the planets: dinosaurs. You’re about to head off on an amazing journey back into the world of dinosaur. You can come across dinosaurs from Triassic, Jurassic and Cretaceous era. In the game of Dinosaur Adventure, you can raise a dinosaur baby, make friends with other dinosaur, go shopping with them, run around with them and dress them up. Let’s start your journey!',
        modalDinoEx01: 'You\'re about to head off on an marvellous journey in Dinosaur world...',
        modalDinoEx02: 'You\'ll start in the Triassic Period, jump into the Jurassic Period and end in the Cretaceous Period.',
        modalDinoEx03: 'Even though they look terrifying, don\'t be afraid, have fun with them!.',
        modalDinoEx04: 'Giraffatitan stood 13 metres tall and weighed as much as six elephant.',
        modalDinoEx05: 'They lived in the water and fetched the leaves using their long neck.',
        modalDinoEx06: 'Stegosaurus is a plant-eater lived in Late Jurassic.',
        modalDinoEx07: 'Stegosaurus is not good at running, it relies on its spikes to keep itself safe.',
        modalDinoEx08: 'Spinosaurus is a fish-eating predator.',
        modalDinoEx09: 'To hunt, Spinosaurus lowered its snout beneath the surface of water and waiting for the fish.',
        modalDinoEx10: 'Lguanodon is a plant-eater.',
        modalDinoEx11: 'Living in herds, grazing on ferns.',
        modalDinoEx12: 'Look, baby Lguanodon is enjoying the leaves.',
        modalDinoEx13: 'Look, a tiny Apatosaurs hatchling emerges, blinking, into the light.',
        modalDinoEx14: 'They grow up very quick, 14 kilograms per day at times of its fastest growth.',

        // soap modal 
        modalSoapTitle: 'Baby Soap package Design',
        modalSoapExplan01: 'With the development of economy and awareness of health, parents are more and more care about the product used on their baby. New Zealand, a pure country, is famous for lots of kids products: Baby formular, Manuka honey, Natural cosmetic and lot’s of natural product. This is a packaging design for New Zealand baby soap, which is Mainly made of milk and Manuka honey.',
        modalSoapExplan02: 'The packaging design apply cream-colored as main color the convey the pure and natural product image to customer. Using gold color to highlight the brand — ROYAL BABY and contrasting color -- blue to emphasis the main feature of this product. Customer are able to acquire all the information they need at first sight. The flag and to the pattern of silvery fern on the background can well represent New Zealand.',
        modalSoapType: 'Baby soap packaging design',
        modalSoapEx1: 'Milk theme',
        modalSoapEx2: '100% natural, made of pure milk.',
        modalSoapEx3: 'Silver Ferns theme',
        modalSoapEx4: 'Silver Ferns is the symbol of New Zealand.',

        // number modal
        modalNumTitle: 'Number Jump',
        modalNumType: 'Mathematical Game for kids',
        modalNumExplan: 'Number Jump is a simple and interesting game that helps kids to improve their numeracy skills. In the game, you are able to reach higher places by finding matching formula on moving board. How height can you jump? Let’s break your records and break the world records.',
        modalNumEx01: 'Choose the level and Start the game',
        modalNumEx02: 'Having fun with the jumping man',
        modalNumEx03: 'The number on the back will be updated after every jump',
        modalNumEx04: 'Choose the correct position of moving board carefully',
        modalNumEx05: 'If you jump to the wrong position, the board will crack, game over',
        modalNumEx06: 'We are proud of every breakthrough of you',
        modalNumEx07: 'Finghting',


        // Music&Art modal   
        modalMATitle: 'Personalize Music & Art App',
        modalMAType: 'Created Art with Music',
        modalMAExplan01: 'Do you know how to create an art without pen, but with music. Come to Music &amp Art, We offer you an tool to create your own amazing artwork by editing a song.',
        modalMAExplan02: 'Welcome to Personalize Music &amp Art, there are several easy step to help you create an amazing artwork with your own music; <br>1. Choose the genre of music you want to create, like Jazz, Classical music, Symphony… <br>2. Easily edit the music by tapping the grid on the screen. <br>3. You can play the music and modify it anytime. <br>4. We will automatically generate a personalized artwork for you. <br>5. Surprising, we can help you print the artwork on notebook, canvas bag phone cover… it would be a impressive experience for you.',

        //Luna modal
        modalScTitle: 'Luna Scooter Design',
        modalScType: 'Vehicle design',
        modalScExplan01: 'I designed Luna when I was in university, it was a project for Chinese biggest scooter company. When we design this scooter we took several element into consideration: Green commuting, Elegance, Lightweight, Affordable.',
        modalScExplan02: 'There are more and more young ladies who just graduate from the university and start working in the city. They dress elegantly every day, and need an elegant scooter for close distance commuting . We aimed to design a new-version scooter to meet their expectation.',

        //codeT modal
        modalCodeTitle: 'Coding T-shirt Design',
        modalCodeType: 'T-shirt Design',
        modalCodeExplan01: 'In 21 century, there is a group of people who knows special languages —-they are programmers. They are not good at expressing themselves, but they are full of idea and so thoughtful for others. They keep their life simple, but also pursue personalization and fashion. ',
        modalCodeExplan02: 'Coding T-shirt, enable programmer to express themselves in a funny way, you can propose or protest through the coding T-shirt',
    
        //HandB modal
        modalHandBTitle: 'HandBag Design',
        modalHandBType: 'bag Design',
        modalHandBExpla01: 'I think every woman dream to design dress and handbag for themselves, especially the woman can draw. There are some collection of my Handbag Design. '
    }

    function i18n(lang) {
        var props = Object.keys(lang)
        for (var i = 0; i < props.length; i++) {
            var prop = props[i]
            $('#' + prop).html(lang[prop])
        }
    }

    function handleENClick(e) {
        $(this).addClass('btn-primary').siblings('button').removeClass('btn-primary')
        i18n(en)
        localStorage.setItem('lang', 'en')
    }

    function handleZHClick(e) {
        $(this).addClass('btn-primary').siblings('button').removeClass('btn-primary')
        i18n(zh)
        localStorage.setItem('lang', 'zh')
    }
    $('#English').on('click', handleENClick)
    $('#Chinese').on('click', handleZHClick)

    var langType = localStorage.getItem('lang')
    if (langType) {
        if (langType === 'en') {
            $('#Chinese').removeClass('btn-primary').siblings('button').addClass('btn-primary')
            i18n(en)
        } else {
            $('#English').removeClass('btn-primary').siblings('button').addClass('btn-primary')
            i18n(zh)
        }
        return
    }

    var currentLang = navigator.language; //判断除IE外其他浏览器使用语言
    if (!currentLang) { //判断IE浏览器使用语言
        currentLang = navigator.browserLanguage;
    }
    var lowerLang = currentLang.toLowerCase()
    if (lowerLang.indexOf('zh') > -1) {
        i18n(zh)
        $('#English').removeClass('btn-primary').siblings('button').addClass('btn-primary')
    } else {
        i18n(en)
    }


}())