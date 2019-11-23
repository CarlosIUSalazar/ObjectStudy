const animals = {
    'name': 'Rover',
    'age': 4, 
    'color': 'Brown',

}
//console.log(animals.name);

const emails = 
[
    {
      "company": "HOTCAKES",
      "subject": "minim ut",
      "from": "mcgowan.weber@hotcakes.io",
      "to": "twila.bryant@hotcakes.com",
      "body": "Nostrud consequat et occaecat et. Sint esse in sint elit quis ut fugiat cillum reprehenderit. Ipsum fugiat consequat anim amet sunt cillum esse velit incididunt consectetur proident ad consequat ad. Ea in laboris aliquip occaecat velit fugiat dolore. Voluptate magna quis id deserunt eu cillum.\n\nUllamco fugiat id do cupidatat mollit. Consectetur voluptate excepteur sit dolore ipsum. Ea sit enim minim quis deserunt ipsum consequat. Incididunt incididunt laborum reprehenderit duis laborum tempor fugiat elit dolor qui irure. Est eu mollit dolore fugiat commodo ad cupidatat irure.",
      "datetime": "Tue Feb 12 2019 18:47:01 GMT+0000"
    },
    {
      "company": "TEMORAK",
      "subject": "ea velit",
      "from": "cohen.phillips@temorak.biz",
      "to": "kimberley.mills@temorak.org",
      "body": "Ad sunt eu quis mollit commodo ad ut nulla et fugiat. Nisi esse proident do commodo minim cupidatat excepteur esse eiusmod. Ipsum nostrud ut quis Lorem anim exercitation. Laborum ipsum duis elit consectetur Lorem. Ex incididunt laboris consequat dolore. Irure aute consequat qui ut nulla ad aliqua quis et dolore adipisicing.\n\nMinim ex esse qui adipisicing non dolor. In sint est dolore excepteur velit eu esse eu non ad. Fugiat sunt mollit quis id magna culpa laboris ad. Incididunt in proident quis eiusmod aute minim aliqua nostrud anim non esse nisi pariatur cupidatat. Voluptate esse consectetur id qui consectetur reprehenderit laborum cupidatat adipisicing minim. Eiusmod laborum incididunt dolore ipsum aliqua minim voluptate sint. Est amet Lorem sit magna occaecat et anim reprehenderit exercitation adipisicing adipisicing mollit aliqua.",
      "datetime": "Tue Oct 22 2019 22:47:44 GMT+0000"
    },
    {
      "company": "PHARMACON",
      "subject": "non qui",
      "from": "kristen.horton@pharmacon.net",
      "to": "clemons.davidson@pharmacon.us",
      "body": "Proident ipsum deserunt eu ea in in eiusmod sunt exercitation deserunt laborum. Quis nulla proident mollit elit magna magna sint et est do eu. Eu fugiat mollit voluptate ea occaecat. Do cillum aliquip sint amet fugiat amet laboris reprehenderit in. Excepteur consectetur veniam eiusmod labore.\n\nNulla reprehenderit adipisicing ex pariatur mollit commodo aliqua. Incididunt culpa reprehenderit qui excepteur minim occaecat ipsum qui ex Lorem sint proident eu. Culpa fugiat ipsum occaecat cillum elit excepteur sit enim aliquip adipisicing eu.",
      "datetime": "Sat Jul 27 2019 12:12:37 GMT+0000"
    },
    {
      "company": "AQUAFIRE",
      "subject": "tempor reprehenderit",
      "from": "shelley.boyle@aquafire.info",
      "to": "june.marks@aquafire.ca",
      "body": "Laborum pariatur Lorem ad ipsum ullamco. Est irure culpa cupidatat quis sunt dolore proident. Reprehenderit commodo ullamco officia dolor Lorem in id. Incididunt dolore sint id dolore nisi consequat in eiusmod ut mollit cillum pariatur mollit. Nulla laboris qui velit magna do eu adipisicing nulla incididunt sunt esse proident.\n\nElit labore amet pariatur mollit id nisi aliqua nostrud occaecat eiusmod eu. Sit pariatur cillum aliqua id ex. Ipsum non eiusmod excepteur veniam ex nostrud fugiat dolor magna sit anim esse. Veniam elit proident aliquip adipisicing in laborum qui id magna. Cillum enim consectetur nulla proident sunt qui proident qui fugiat veniam minim ullamco qui nisi.",
      "datetime": "Mon Sep 23 2019 18:47:59 GMT+0000"
    },
    {
      "company": "EXTRAGEN",
      "subject": "aute tempor",
      "from": "blackwell.reyes@extragen.me",
      "to": "georgia.terry@extragen.tv",
      "body": "Culpa culpa ut quis ut adipisicing aliquip anim adipisicing. Ipsum cupidatat et consequat ut cupidatat laboris veniam do. Velit aliqua reprehenderit duis veniam dolore aute enim cupidatat. Et incididunt aliqua ea aliqua elit ipsum dolor. Mollit anim ullamco dolore adipisicing tempor exercitation esse tempor occaecat pariatur. Ut culpa irure amet officia laborum commodo elit occaecat esse laboris et anim.\n\nLaboris occaecat duis ut ea reprehenderit dolore elit do id. Dolore est ad eiusmod adipisicing ipsum incididunt consequat officia excepteur veniam exercitation proident officia. Sunt ut aliqua irure deserunt enim dolor amet culpa magna esse velit non non et.",
      "datetime": "Mon Oct 07 2019 04:25:28 GMT+0000"
    },
    {
      "company": "OLYMPIX",
      "subject": "velit ad",
      "from": "eugenia.strickland@olympix.name",
      "to": "gayle.hill@olympix.co.uk",
      "body": "Sit adipisicing excepteur elit non incididunt. Ipsum magna exercitation non dolor id duis reprehenderit Lorem mollit ea sint commodo quis. Duis dolore nisi pariatur ad incididunt eu nulla ut laborum id proident ipsum minim aute.\n\nVeniam occaecat nisi exercitation laboris commodo aliqua do. Amet incididunt voluptate nostrud enim ea culpa elit laborum exercitation ipsum proident amet culpa enim. Ad proident occaecat labore eu sunt aliqua adipisicing incididunt aute fugiat aliquip. Cupidatat in proident in nisi eiusmod id adipisicing consequat. Commodo consectetur sint minim tempor do nisi eu amet culpa magna id.",
      "datetime": "Tue Mar 05 2019 18:18:54 GMT+0000"
    },
    {
      "company": "COMSTAR",
      "subject": "anim velit",
      "from": "atkinson.sharpe@comstar.io",
      "to": "glenn.harper@comstar.com",
      "body": "Et ut labore veniam est esse in culpa commodo et quis pariatur non excepteur ea. Sit anim aliqua tempor exercitation consequat est minim eiusmod pariatur pariatur dolor. Lorem non exercitation officia ad nisi do quis occaecat aliquip incididunt magna laboris incididunt. Pariatur non aute culpa elit cupidatat.\n\nEt eu in cupidatat elit. Ex tempor et aliqua anim veniam elit dolore aute aute dolore id velit officia. Amet commodo proident Lorem Lorem esse commodo enim minim ea duis sint sint in et. Et irure consequat aute culpa fugiat excepteur Lorem consectetur enim ut Lorem irure nulla. Ullamco ullamco ea nostrud consectetur ipsum.",
      "datetime": "Sat Apr 20 2019 11:21:52 GMT+0000"
    },
    {
      "company": "COASH",
      "subject": "ullamco reprehenderit",
      "from": "sarah.gilmore@coash.biz",
      "to": "jimmie.herman@coash.org",
      "body": "Incididunt est excepteur veniam officia do eu dolore eiusmod est aute ad labore. Lorem magna duis consequat do. Labore ad incididunt ad velit sit. Aliqua qui aute magna in do. Deserunt eu adipisicing labore nostrud laboris consectetur reprehenderit pariatur. Eiusmod ipsum incididunt sint commodo tempor ex non.\n\nAd consectetur magna laboris dolor nostrud aliquip non occaecat. Consequat qui nostrud cillum nulla fugiat irure minim velit aliquip incididunt ut veniam proident tempor. Aliqua eu sit dolor aliqua occaecat. Cupidatat adipisicing fugiat mollit incididunt est amet quis culpa exercitation labore. Culpa irure eu veniam nostrud ut officia.",
      "datetime": "Tue Aug 20 2019 07:49:24 GMT+0000"
    },
    {
      "company": "RODEOCEAN",
      "subject": "ipsum fugiat",
      "from": "mcgee.patton@rodeocean.net",
      "to": "vance.irwin@rodeocean.us",
      "body": "Adipisicing tempor sint dolore exercitation nisi non sint esse in consectetur laboris elit consequat occaecat. Aliquip occaecat consectetur veniam anim officia elit tempor id minim culpa. Anim elit consequat qui nostrud exercitation consequat incididunt sunt. Cillum consequat nisi reprehenderit laborum sit ullamco minim qui fugiat mollit do laboris.\n\nPariatur enim minim magna minim Lorem proident. Irure sit deserunt aliqua do do adipisicing veniam excepteur quis magna labore. Irure fugiat magna irure ullamco veniam. Non occaecat incididunt proident in reprehenderit ut enim sint ipsum. Sit do consectetur dolore sunt commodo eiusmod est sunt pariatur ipsum eu. Consectetur in anim aute reprehenderit.",
      "datetime": "Wed Jun 12 2019 15:13:10 GMT+0000"
    },
    {
      "company": "TALAE",
      "subject": "sunt sint",
      "from": "irene.sherman@talae.info",
      "to": "sherry.green@talae.ca",
      "body": "Reprehenderit exercitation laborum magna ad officia ea. Cupidatat nulla sint quis dolor do ex id ut nostrud nisi nostrud irure quis. Commodo incididunt adipisicing elit velit Lorem. Consectetur tempor eiusmod in sit enim cillum proident ex. Commodo qui aliquip laboris ipsum ex duis aliquip eu dolor aliqua minim. Cupidatat eiusmod sint ullamco cillum veniam ipsum.\n\nCommodo sint nulla tempor officia officia pariatur consectetur id culpa culpa commodo magna. Commodo consequat sunt nostrud est nostrud adipisicing id incididunt reprehenderit. Cupidatat amet incididunt fugiat ut adipisicing labore ullamco adipisicing. Deserunt aliqua cillum magna fugiat minim deserunt. Est commodo consequat quis aute nisi velit incididunt voluptate fugiat eiusmod amet dolore. Occaecat laborum Lorem sint veniam labore enim exercitation commodo.",
      "datetime": "Tue Feb 12 2019 18:54:15 GMT+0000"
    },
    {
      "company": "KAGGLE",
      "subject": "duis quis",
      "from": "lillian.hatfield@kaggle.me",
      "to": "bruce.hinton@kaggle.tv",
      "body": "Voluptate irure labore voluptate laborum velit culpa ullamco anim occaecat laboris. Ipsum ipsum in Lorem magna mollit dolor sunt aute ut nostrud ea fugiat tempor. Nostrud quis adipisicing deserunt quis sunt dolore anim consequat mollit anim id magna.\n\nLaboris aliqua deserunt sint pariatur occaecat amet aliquip aliquip ipsum. Aliqua magna fugiat consequat ullamco. Adipisicing duis ipsum eu aliqua qui eiusmod in ipsum sit aute cupidatat. Ut exercitation sunt minim nostrud nostrud quis aute magna. Labore qui magna proident nisi officia duis quis minim. Adipisicing eu nostrud eu aliqua sit officia anim cillum laboris quis Lorem ea est fugiat.",
      "datetime": "Wed Jul 17 2019 13:41:13 GMT+0000"
    },
    {
      "company": "IMANT",
      "subject": "id qui",
      "from": "dixon.carpenter@imant.name",
      "to": "gregory.maynard@imant.co.uk",
      "body": "Esse aute ea duis mollit mollit culpa dolor quis dolore aliqua sint minim cupidatat. Do fugiat magna et in. Consectetur elit veniam ullamco in aute enim irure nostrud pariatur laborum pariatur. Nisi elit velit aute deserunt dolore. Et nisi quis veniam exercitation veniam voluptate.\n\nVoluptate ex excepteur sunt magna aute tempor pariatur consectetur dolor dolor. Exercitation pariatur velit fugiat est culpa Lorem id ullamco sint. Aute voluptate veniam elit culpa ipsum laborum duis qui enim adipisicing. Aliquip fugiat non excepteur commodo veniam consectetur ad in qui officia.",
      "datetime": "Sat Sep 07 2019 14:59:23 GMT+0000"
    },
    {
      "company": "RUGSTARS",
      "subject": "incididunt voluptate",
      "from": "spence.cooke@rugstars.io",
      "to": "stacie.arnold@rugstars.com",
      "body": "Exercitation est cupidatat velit consequat id nostrud. Sunt duis sunt minim minim sint enim reprehenderit occaecat aute cupidatat ea culpa aliqua. Irure amet quis est non cupidatat aliquip do incididunt eu dolor non occaecat. Ullamco ea consequat laboris tempor. Cupidatat magna aliqua nulla adipisicing Lorem sint aute tempor tempor. Enim ex amet labore et veniam quis non eiusmod.\n\nEx consectetur tempor commodo incididunt anim officia consectetur. Minim sunt laborum elit est voluptate aliqua esse irure officia proident sit laboris nulla officia. Id et quis laborum proident. Sit sit mollit reprehenderit amet officia nulla ad. Sint anim ea eiusmod ut enim amet fugiat ad laboris tempor enim. Laborum anim et quis et enim. Nisi aliquip labore quis proident minim tempor dolore nisi laborum ut.",
      "datetime": "Thu Oct 31 2019 01:33:41 GMT+0000"
    },
    {
      "company": "COMCUR",
      "subject": "veniam enim",
      "from": "christa.rush@comcur.biz",
      "to": "tisha.mann@comcur.org",
      "body": "Qui ex velit qui aliqua et ad commodo occaecat. Do qui laboris officia magna ut excepteur officia nostrud id do ullamco ad veniam anim. Pariatur excepteur velit esse est labore culpa id laboris minim ullamco. Excepteur velit exercitation ad irure et ipsum aliquip ut do ea adipisicing dolor duis consectetur.\n\nExcepteur fugiat exercitation nulla minim id amet sit proident sint ut voluptate enim et. Laborum amet et fugiat nisi quis ipsum quis sint duis est duis laborum. Consectetur laborum duis aute nostrud labore adipisicing nisi. Qui esse nisi elit magna cupidatat veniam voluptate culpa non tempor id non esse elit. Nostrud qui officia qui cillum. Velit magna ea magna ex minim nulla ipsum cillum commodo.",
      "datetime": "Mon Aug 05 2019 20:14:24 GMT+0000"
    },
    {
      "company": "QUIZMO",
      "subject": "labore aute",
      "from": "fletcher.gonzalez@quizmo.net",
      "to": "avis.gay@quizmo.us",
      "body": "Occaecat sint dolore labore laborum dolore qui minim sint. Et nulla consequat ea deserunt nulla quis minim id commodo pariatur ipsum culpa nulla. Officia aliquip minim ullamco non minim sint ad. Incididunt nisi dolor consequat Lorem nisi cillum id magna pariatur culpa cillum anim. Velit officia duis cupidatat commodo id esse ea labore voluptate enim. Fugiat labore excepteur velit reprehenderit amet qui minim in. Eiusmod cupidatat adipisicing in eiusmod Lorem incididunt in sunt consectetur voluptate consequat proident consequat aliquip.\n\nAd id do ullamco veniam. Ut officia elit commodo minim deserunt adipisicing eiusmod. Cupidatat cupidatat exercitation eiusmod aliqua qui et.",
      "datetime": "Fri Jun 21 2019 04:59:44 GMT+0000"
    },
    {
      "company": "ISONUS",
      "subject": "ullamco minim",
      "from": "nash.livingston@isonus.info",
      "to": "tyson.barr@isonus.ca",
      "body": "Dolor reprehenderit irure deserunt in deserunt magna cupidatat Lorem exercitation commodo eu. Officia officia laborum ea nisi dolore reprehenderit non nulla in velit dolore reprehenderit culpa labore. Id minim irure dolor laboris in proident laboris. Magna mollit do nulla id nostrud qui ullamco sunt consequat elit aliqua do. Veniam est excepteur irure occaecat non.\n\nEa exercitation culpa labore in fugiat nisi. Incididunt exercitation aute velit fugiat ut nulla Lorem cupidatat laborum. Qui incididunt veniam culpa anim occaecat esse officia velit laboris minim id. Cupidatat sit sint id minim in esse. Magna do laboris deserunt cupidatat aliquip adipisicing irure ea ea dolore. Magna ex velit dolore deserunt. Qui nisi deserunt excepteur aliquip aliqua fugiat ex veniam.",
      "datetime": "Mon Feb 25 2019 20:25:45 GMT+0000"
    },
    {
      "company": "EVENTIX",
      "subject": "id reprehenderit",
      "from": "navarro.hicks@eventix.me",
      "to": "rosetta.morton@eventix.tv",
      "body": "Do occaecat aliqua elit quis tempor labore. Sit anim reprehenderit nulla nostrud. Commodo laboris anim amet consectetur magna voluptate esse sunt qui officia ea sint eiusmod eu. Anim ad officia qui ullamco amet nisi ullamco do aliquip non labore proident. Cillum sunt voluptate enim dolor est dolore magna ad anim aliqua fugiat aliquip. Nisi incididunt fugiat culpa ut in elit est minim ipsum dolore ad aute sint. Occaecat aliquip do dolore deserunt laborum Lorem minim quis tempor duis velit id sint.\n\nCulpa sint tempor est reprehenderit commodo dolor culpa est ut anim. Nostrud dolor proident pariatur excepteur aute et. Ullamco in aliquip incididunt ad sit qui. Et officia et anim magna. Exercitation occaecat anim do pariatur occaecat duis excepteur dolor non tempor commodo labore. Pariatur consectetur qui labore et mollit aute mollit pariatur in laboris ex consequat eiusmod pariatur.",
      "datetime": "Tue Jan 22 2019 04:16:46 GMT+0000"
    },
    {
      "company": "ERSUM",
      "subject": "cillum sit",
      "from": "kathryn.ortiz@ersum.name",
      "to": "rene.tillman@ersum.co.uk",
      "body": "Id voluptate elit dolor quis. Non amet adipisicing in commodo ea laboris aliqua. Et culpa consequat cillum eu ex id dolore do voluptate id. Quis ullamco aliquip adipisicing exercitation sit in proident ea. Enim velit cupidatat sint ea occaecat officia aliqua elit Lorem incididunt. Nostrud officia sint commodo est et laboris adipisicing enim do quis nisi duis officia ea. Et in occaecat voluptate elit magna amet adipisicing reprehenderit eiusmod do.\n\nIncididunt esse sit nisi in Lorem aute commodo. Sint nulla consectetur esse voluptate pariatur irure voluptate quis. Minim voluptate ex ipsum cupidatat cupidatat ea ex sit ex deserunt laborum voluptate. Minim elit elit in adipisicing proident sit sint magna voluptate occaecat. Eiusmod nostrud ex dolor incididunt in nostrud qui elit. Commodo pariatur tempor ea id.",
      "datetime": "Tue Oct 15 2019 10:05:17 GMT+0000"
    },
    {
      "company": "NETPLODE",
      "subject": "tempor velit",
      "from": "monica.lawrence@netplode.io",
      "to": "anna.miller@netplode.com",
      "body": "Reprehenderit eu fugiat cupidatat dolor pariatur. Aute proident id ipsum enim. Mollit ex minim qui sit non do est est qui labore. Dolore sint magna mollit ex cupidatat laboris magna nulla dolor id est cupidatat.\n\nNostrud reprehenderit sunt anim tempor qui non culpa enim cupidatat. Fugiat ad magna eu aute reprehenderit ad duis esse esse minim ullamco ad est irure. Minim nostrud quis ut elit.",
      "datetime": "Thu Jan 24 2019 09:56:59 GMT+0000"
    },
    {
      "company": "QUONK",
      "subject": "pariatur adipisicing",
      "from": "york.vang@quonk.biz",
      "to": "fannie.navarro@quonk.org",
      "body": "Esse est laboris elit duis aliqua esse occaecat consectetur cillum eiusmod. Irure ipsum nostrud et do. Laboris cillum quis commodo ea amet enim fugiat eiusmod consectetur laboris cillum mollit officia excepteur. Sit laboris consectetur ex duis. Velit quis est culpa elit voluptate adipisicing laborum sint deserunt do nostrud occaecat. Eiusmod sit do cupidatat Lorem Lorem. Velit consectetur Lorem reprehenderit voluptate eiusmod enim eu eu.\n\nElit laboris nulla enim sit labore. Ea velit magna laboris adipisicing aliquip elit ut commodo est aliquip. Deserunt pariatur deserunt enim nisi. Do et aute cillum Lorem excepteur culpa ut. Fugiat voluptate dolore sit incididunt exercitation sunt enim.",
      "datetime": "Mon May 20 2019 00:14:26 GMT+0000"
    },
    {
      "company": "SUREMAX",
      "subject": "commodo dolor",
      "from": "evangelina.wiggins@suremax.net",
      "to": "osborn.powers@suremax.us",
      "body": "Ipsum enim minim consectetur occaecat. Minim non et in consectetur tempor anim sit in magna aute. Culpa aute nisi ut qui. Sint esse velit minim irure est deserunt pariatur ex veniam.\n\nNisi anim commodo reprehenderit exercitation qui sint tempor et. Consequat laboris id consectetur laborum consequat ea ipsum reprehenderit id et. Do fugiat labore enim enim.",
      "datetime": "Sun Apr 28 2019 18:30:21 GMT+0000"
    },
    {
      "company": "QUAREX",
      "subject": "in esse",
      "from": "phyllis.lindsay@quarex.info",
      "to": "klein.barron@quarex.ca",
      "body": "Sit est pariatur aliquip occaecat nisi cupidatat id commodo consequat dolore minim nostrud. Ipsum culpa id duis adipisicing nulla tempor voluptate ipsum incididunt sint duis do. Sint magna mollit dolore deserunt consectetur deserunt. Cillum aliqua id officia enim culpa aliquip nostrud ullamco amet sit cillum labore consectetur.\n\nEa incididunt do reprehenderit deserunt sint fugiat dolore nisi reprehenderit. Sint aliquip velit nulla esse ea ea ullamco. Dolore culpa sit et enim ea anim velit aute culpa officia reprehenderit aute aute irure.",
      "datetime": "Sat Jun 22 2019 23:33:55 GMT+0000"
    },
    {
      "company": "QUINEX",
      "subject": "ipsum sunt",
      "from": "mccormick.pickett@quinex.me",
      "to": "jannie.freeman@quinex.tv",
      "body": "Proident fugiat voluptate cillum excepteur est nulla sint esse consectetur incididunt aliquip id id. Cillum adipisicing quis magna veniam id ad enim id eu mollit occaecat nostrud esse. Magna consectetur ea do do enim excepteur eu veniam amet et in amet. Amet voluptate sunt minim ut non et sit cillum sint id incididunt ex. Esse esse officia aute irure labore id magna reprehenderit. Culpa laboris laborum mollit excepteur qui culpa officia occaecat veniam exercitation quis occaecat.\n\nDuis tempor fugiat elit proident et do aliqua non veniam occaecat labore qui tempor. Adipisicing irure mollit irure officia amet ad dolore quis ex duis veniam non. Eu enim exercitation et voluptate aute sint deserunt laboris est dolore tempor eu. Ut velit proident qui commodo excepteur.",
      "datetime": "Sat Feb 02 2019 23:42:30 GMT+0000"
    },
    {
      "company": "ACCUSAGE",
      "subject": "laborum laboris",
      "from": "christy.woodward@accusage.name",
      "to": "merritt.walton@accusage.co.uk",
      "body": "Id elit tempor non reprehenderit. Fugiat laborum laboris minim mollit deserunt tempor fugiat consequat. Eu id anim deserunt id mollit eiusmod quis.\n\nAute anim consequat minim aliqua magna quis aliqua aliquip voluptate nulla minim. Dolor eu nulla proident sint aute magna minim id pariatur ex ad nisi cupidatat. Cillum id commodo sit minim dolore eiusmod cupidatat. Consectetur aliqua et et fugiat consectetur sit culpa velit do aute sunt cupidatat culpa id. Velit reprehenderit officia cillum dolore sunt dolor commodo.",
      "datetime": "Sun Sep 22 2019 11:29:45 GMT+0000"
    },
    {
      "company": "QUOTEZART",
      "subject": "Lorem pariatur",
      "from": "gould.glass@quotezart.io",
      "to": "jocelyn.rosario@quotezart.com",
      "body": "Commodo dolore dolor irure excepteur laboris qui id magna consectetur ex sit eu. Amet do eu incididunt proident tempor consectetur amet irure eiusmod dolor enim tempor velit. Commodo eu culpa non nulla eiusmod. Nulla nulla et sint ipsum occaecat irure sit minim duis aliquip et sint labore culpa. Mollit aliqua dolor duis ipsum mollit reprehenderit eu exercitation ea cupidatat do. Do proident sit Lorem ea magna est amet exercitation mollit elit id nisi id. Elit nostrud reprehenderit do elit dolor tempor adipisicing aliqua eiusmod voluptate.\n\nDuis nulla dolore reprehenderit nostrud adipisicing sint anim. Tempor aute proident consectetur commodo ea. Laboris veniam laborum duis fugiat et enim reprehenderit culpa. Adipisicing minim ea sint elit excepteur exercitation nulla magna et ea enim duis ea magna. Anim quis reprehenderit ad ex est duis nostrud incididunt ea voluptate reprehenderit eu. Commodo nisi nostrud laboris deserunt voluptate sint esse in incididunt amet irure.",
      "datetime": "Fri Apr 12 2019 13:41:47 GMT+0000"
    },
    {
      "company": "ANACHO",
      "subject": "consequat Lorem",
      "from": "hardin.mayer@anacho.biz",
      "to": "merrill.sanford@anacho.org",
      "body": "Ea duis anim laborum ea exercitation commodo excepteur amet non nostrud laborum. Labore velit Lorem officia ea mollit culpa proident non do. Ad in qui enim non pariatur. Adipisicing et amet sunt sit ad nisi dolore ex aliquip ipsum eiusmod eiusmod consequat voluptate. Elit et ea adipisicing sunt do veniam dolore cupidatat est minim sint aliqua.\n\nReprehenderit exercitation enim laborum consectetur pariatur officia id eiusmod incididunt. Veniam aliquip duis in elit qui eu laborum qui. Proident deserunt eu cillum enim culpa voluptate mollit. Adipisicing deserunt sit eiusmod irure consectetur officia aute qui. Amet ut qui in voluptate ut aliquip qui nisi id sunt non culpa tempor. Voluptate sunt minim ex aliquip nulla occaecat esse velit. Nisi amet adipisicing dolor nisi et qui amet exercitation esse ex ex Lorem ex sit.",
      "datetime": "Sat Mar 16 2019 10:58:48 GMT+0000"
    },
    {
      "company": "MOTOVATE",
      "subject": "proident est",
      "from": "maude.perry@motovate.net",
      "to": "ericka.francis@motovate.us",
      "body": "Voluptate sunt duis adipisicing ullamco eu. Laborum dolor quis minim aute deserunt veniam ipsum aute proident aute adipisicing. Do ad aliquip sit fugiat nulla eu cillum consectetur mollit anim quis excepteur aute laboris. Pariatur ipsum velit enim nisi quis esse. Dolor mollit sit nulla do ullamco cillum minim officia est incididunt et aute proident. Culpa quis culpa veniam ipsum anim reprehenderit Lorem. Adipisicing cupidatat mollit ea qui consequat pariatur incididunt.\n\nEx elit fugiat cillum velit qui duis minim tempor ut tempor laborum dolor. Fugiat excepteur sint in non ipsum nostrud exercitation nisi officia aute id. Laborum pariatur amet mollit ex velit dolore ea ullamco culpa sit sunt tempor et.",
      "datetime": "Fri Sep 06 2019 14:49:26 GMT+0000"
    },
    {
      "company": "BUZZNESS",
      "subject": "duis fugiat",
      "from": "adams.munoz@buzzness.info",
      "to": "francisca.giles@buzzness.ca",
      "body": "Exercitation dolore pariatur voluptate labore ea enim sint adipisicing magna tempor nulla dolor. Duis et dolore quis aliquip dolor consequat. Consequat et laborum culpa culpa sint excepteur dolor cillum. Velit ullamco culpa anim mollit mollit laboris.\n\nDolore irure ut pariatur duis esse. Incididunt velit sit occaecat deserunt enim duis exercitation. Exercitation veniam cupidatat elit cillum consequat proident laboris nulla incididunt magna excepteur ullamco nostrud. Enim mollit consectetur consequat ullamco magna ad officia ea nulla irure occaecat sunt.",
      "datetime": "Thu Jul 04 2019 09:44:47 GMT+0000"
    },
    {
      "company": "ZERBINA",
      "subject": "amet veniam",
      "from": "blanca.wise@zerbina.me",
      "to": "wade.sellers@zerbina.tv",
      "body": "Cillum laborum proident sint dolor cupidatat exercitation anim minim. Est exercitation qui do mollit nostrud fugiat exercitation dolore ad officia labore Lorem veniam eiusmod. Consequat est magna est sint et culpa amet amet cillum proident ipsum. Amet quis laborum non et exercitation sit sit.\n\nSit irure qui mollit cillum. Aute eiusmod cupidatat veniam ad incididunt fugiat pariatur sint dolor id irure. Consectetur ipsum veniam commodo consequat cupidatat ex aute non anim. Ex eiusmod incididunt ex est sint nostrud dolore commodo est dolore non non. Excepteur esse ut ea consequat incididunt aute amet deserunt excepteur elit sit in. Incididunt elit consequat nulla ex fugiat duis sit dolore. Consequat duis quis laboris consectetur exercitation nostrud sunt aute sint enim nostrud exercitation ut.",
      "datetime": "Fri Nov 08 2019 21:19:50 GMT+0000"
    },
    {
      "company": "ZILLACOM",
      "subject": "sint esse",
      "from": "lilian.gallegos@zillacom.name",
      "to": "bates.wilkins@zillacom.co.uk",
      "body": "Labore occaecat eu est voluptate est. Tempor mollit dolore qui deserunt deserunt magna culpa reprehenderit. Elit pariatur nulla et cillum sunt minim quis aute. Consectetur elit ex tempor nulla labore esse id occaecat do ea velit cupidatat ad. Deserunt et qui non Lorem ut ea consectetur sit eiusmod amet Lorem velit reprehenderit labore.\n\nAd minim tempor magna velit laborum ex mollit est in cupidatat occaecat est. Amet sunt laboris velit nulla deserunt velit minim. Minim amet tempor mollit cupidatat eu tempor laborum occaecat. Dolor non ea consequat voluptate aliquip excepteur veniam anim. Deserunt nostrud eu eiusmod excepteur enim id ea reprehenderit quis Lorem pariatur ipsum aute quis. Lorem eu cupidatat ad ex. Lorem ullamco laboris aliquip culpa exercitation adipisicing cillum proident amet.",
      "datetime": "Sat Jan 05 2019 06:15:40 GMT+0000"
    },
    {
      "company": "GROK",
      "subject": "nulla Lorem",
      "from": "obrien.burton@grok.io",
      "to": "brianna.adkins@grok.com",
      "body": "Cillum quis mollit eu eu dolore anim aliqua Lorem cupidatat sint amet cupidatat labore. Cillum sunt ad magna et. Officia aute anim aliqua commodo consectetur minim. Nisi nulla exercitation reprehenderit nostrud irure culpa esse elit voluptate. Exercitation voluptate officia est in. Ad magna deserunt ut ut do sint id in quis excepteur duis. Sint commodo magna irure id amet culpa commodo nostrud eu sit incididunt fugiat.\n\nNisi voluptate laboris qui veniam sit exercitation qui. Officia veniam occaecat ea occaecat. Duis laboris do sit irure dolor irure velit commodo enim id pariatur minim laboris ipsum. Dolor mollit Lorem dolore nostrud nisi.",
      "datetime": "Tue Jan 29 2019 20:41:38 GMT+0000"
    },
    {
      "company": "PULZE",
      "subject": "pariatur commodo",
      "from": "clements.weiss@pulze.biz",
      "to": "barbara.richardson@pulze.org",
      "body": "Nostrud non adipisicing fugiat veniam sunt non esse ipsum dolor. Ipsum qui id minim Lorem nulla anim et cupidatat commodo veniam cupidatat non culpa ea. Labore sit ex excepteur reprehenderit commodo fugiat ea pariatur exercitation reprehenderit id excepteur quis sunt.\n\nExcepteur sunt eu eu aliqua culpa voluptate nulla quis reprehenderit incididunt irure. Eu Lorem consequat ipsum aute qui qui sunt aliquip est ad. Laborum culpa quis Lorem nostrud dolore ut pariatur id exercitation elit consectetur. Occaecat id proident sint labore tempor laborum eu cillum enim officia nulla eu sunt ullamco.",
      "datetime": "Fri Feb 08 2019 14:50:55 GMT+0000"
    },
    {
      "company": "SCHOOLIO",
      "subject": "consectetur irure",
      "from": "rosales.garner@schoolio.net",
      "to": "bernard.daniel@schoolio.us",
      "body": "Irure elit nisi aliqua veniam laboris proident. Nostrud aliquip nulla officia nostrud amet proident. Dolor eu cillum commodo deserunt velit dolore consequat in officia laboris consequat. Velit minim mollit excepteur enim. Pariatur elit nulla ea occaecat laborum. Est enim reprehenderit non ipsum occaecat quis. Nostrud est elit aliqua dolore ex laborum velit amet nisi.\n\nLorem ea elit veniam velit. Magna voluptate nostrud exercitation in deserunt ipsum pariatur ut minim fugiat. Deserunt enim voluptate fugiat sunt veniam occaecat deserunt aute. Proident dolor consequat commodo occaecat aute eiusmod et est occaecat. Et dolor laborum nisi reprehenderit officia nisi pariatur incididunt. Elit tempor est eu duis velit est veniam deserunt exercitation pariatur.",
      "datetime": "Sat Jul 13 2019 15:13:14 GMT+0000"
    },
    {
      "company": "FOSSIEL",
      "subject": "culpa do",
      "from": "heidi.roberson@fossiel.info",
      "to": "pollard.bentley@fossiel.ca",
      "body": "Ex id mollit quis ut aliqua veniam mollit enim adipisicing mollit occaecat. Culpa et in culpa et. Duis consequat est dolor excepteur nostrud. Ex exercitation eiusmod elit id labore mollit nulla Lorem officia nulla ex. Aute veniam esse occaecat dolore duis duis officia id deserunt laboris non.\n\nProident tempor ea est dolor anim laborum do ut aute mollit cillum qui tempor. Quis culpa labore occaecat ipsum laborum duis laboris enim dolore consequat pariatur quis qui mollit. Deserunt officia non officia ad nulla Lorem eu sint.",
      "datetime": "Tue Aug 27 2019 03:39:07 GMT+0000"
    },
    {
      "company": "BEZAL",
      "subject": "adipisicing laborum",
      "from": "hahn.owens@bezal.me",
      "to": "haynes.mckee@bezal.tv",
      "body": "Tempor reprehenderit irure commodo aliqua. Laboris veniam culpa cillum ut reprehenderit proident et cillum aliqua cillum officia. Elit labore excepteur ut anim culpa tempor consectetur labore aliquip nostrud eu dolore pariatur consectetur.\n\nQui minim esse consectetur enim. Consectetur deserunt cupidatat nulla dolor magna. Velit consectetur do elit nulla. Laborum consectetur enim in consequat ea occaecat qui. Irure occaecat ea est tempor non culpa tempor aliquip mollit ea proident ullamco Lorem. Incididunt tempor amet veniam eu ipsum sunt occaecat excepteur dolore. Non esse fugiat amet voluptate do nisi sunt duis consequat.",
      "datetime": "Wed Sep 18 2019 00:30:47 GMT+0000"
    },
    {
      "company": "APEXTRI",
      "subject": "amet laboris",
      "from": "serrano.hurley@apextri.name",
      "to": "randi.kirk@apextri.co.uk",
      "body": "Adipisicing dolore minim enim culpa elit irure excepteur dolor qui id. Irure commodo pariatur laboris magna reprehenderit cillum ex dolor culpa mollit in irure ea. Fugiat mollit quis quis minim aliquip nostrud do laborum proident id proident ad.\n\nUt commodo amet tempor do est Lorem irure. Adipisicing enim laborum minim commodo mollit. Ea consequat sit dolore excepteur in proident adipisicing nostrud elit qui sit aliquip. Quis id aute culpa in magna adipisicing minim sit adipisicing minim esse cillum. Elit do proident exercitation ex irure ullamco nulla laborum sunt. Ipsum deserunt fugiat sint fugiat excepteur eiusmod in et velit.",
      "datetime": "Mon Feb 25 2019 09:01:48 GMT+0000"
    },
    {
      "company": "GRONK",
      "subject": "qui occaecat",
      "from": "katie.alexander@gronk.io",
      "to": "caldwell.murphy@gronk.com",
      "body": "Proident reprehenderit dolore do pariatur incididunt sunt eiusmod excepteur ad. Amet sint nisi velit nostrud laborum proident nisi consequat mollit. Minim cillum labore do ullamco ea culpa id ipsum consectetur sunt. Ad dolor dolore consectetur sunt. Aute aliqua minim deserunt voluptate adipisicing elit officia. Ex velit sint laboris proident excepteur magna occaecat adipisicing qui ullamco et. Veniam aute veniam laboris mollit enim nulla nulla.\n\nLorem sunt labore ullamco exercitation aute anim aliqua ipsum veniam dolore sint consequat. Veniam ea cillum do cillum ex ullamco consequat sint id laborum sit. Tempor sint in esse excepteur reprehenderit esse occaecat id eu. Aliquip reprehenderit commodo dolor eiusmod proident sint non pariatur.",
      "datetime": "Thu Aug 15 2019 12:44:29 GMT+0000"
    },
    {
      "company": "QIAO",
      "subject": "adipisicing laboris",
      "from": "gross.young@qiao.biz",
      "to": "regina.deleon@qiao.org",
      "body": "Proident commodo reprehenderit aliquip pariatur nostrud Lorem nostrud et amet. Nulla exercitation est et tempor velit nulla id ad cupidatat. Culpa fugiat officia laborum aute Lorem laborum laboris. Ea deserunt ut voluptate duis.\n\nNisi aliquip ad culpa ex eu eu. Adipisicing minim tempor fugiat qui velit labore. Magna velit deserunt occaecat non aliquip sunt commodo duis labore nisi ipsum pariatur. In ipsum esse aliqua do consequat commodo dolor culpa consectetur.",
      "datetime": "Wed Jun 26 2019 02:37:50 GMT+0000"
    },
    {
      "company": "TERSANKI",
      "subject": "proident et",
      "from": "leanne.dejesus@tersanki.net",
      "to": "ila.colon@tersanki.us",
      "body": "Exercitation sit eiusmod voluptate excepteur quis Lorem non. Nostrud mollit veniam mollit esse in est excepteur sunt duis aliquip. Anim magna adipisicing culpa aliqua id consequat culpa est qui.\n\nMinim duis Lorem proident mollit irure Lorem enim cillum aliqua fugiat ipsum occaecat elit elit. Do occaecat cillum eiusmod nulla exercitation aute eu ipsum dolore cillum commodo exercitation aliquip. Culpa elit ex aliqua dolore pariatur ipsum. Nisi deserunt nostrud Lorem sint ut irure laborum officia occaecat laboris. Dolor mollit do deserunt et velit aliquip excepteur sit sit exercitation nostrud laborum.",
      "datetime": "Fri Feb 08 2019 07:22:04 GMT+0000"
    }
  ];

//// ES6 Swap Function
function swap(object) {
    let objectBackwards ={};
    console.log(object);
    for (const key in object){
        console.log(object[key]);
        objectBackwards[object[key]] = key;
    }
    return objectBackwards;

}

console.log(swap(animals));