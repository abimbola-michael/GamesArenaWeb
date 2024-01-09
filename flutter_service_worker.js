'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "48c110b4dcbef5bd5ec3ec0204eb5d32",
".git/config": "8710aec1d0ef170f422894b4824ec53f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bcd498faf0042e9615ea6e08abef0cc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1e83430b5e1fd105f88c22ac221c75a",
".git/logs/refs/heads/master": "f1e83430b5e1fd105f88c22ac221c75a",
".git/logs/refs/remotes/origin/master": "11b96459f44cc80ee6aa76e9ad6dde2f",
".git/objects/02/b2a93f95ba5b861ba971226f06a3ade38db487": "409631dc29b96d1fff9c8560f78bce68",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/10/5c71e2ea8af1671cfb42aaef1ce347d9323e66": "5dab1b6d22b0e56dd4c421a7ac90f819",
".git/objects/10/c93f2a691fcfce76b76549dfd04abf0d9f9c9b": "6bd7877157b6c910d7c98482a41b1f38",
".git/objects/16/793d7910cc9945b127985309a6a334bd18b145": "57e528540349796e4e8ee34af872eaf9",
".git/objects/19/f0d3539eb1270ea285f17b1860f3f43d925b96": "92d197ca48774ea8094799b5c926c4e3",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/5d19d00ae7da16c3dde41f329a3c95ff671f56": "24463f2fa14af39bc716d6c4ae8ccd4b",
".git/objects/25/72d404f844f0978102da8e6bad969e73bff896": "9f834555b9623f3f6b2d5a88864d2131",
".git/objects/28/8d389453e01ae1b6ef54d72876783af7c7782c": "aab994e04d6ee4ee9d96be8cab38c94a",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/b9eda9e0742561fb55f14a549c5bd1b99df386": "173001f8c02d361228b4c6e4fdf9e0ef",
".git/objects/30/33308a695ab4efa60441c23f2c18aaa94c568f": "b24945e1772cf4c26f94eff7c8f3dd6d",
".git/objects/34/a1996f6f9372d557b84dca5c22e1e9fd6ef3a8": "0017dd25df1f183c95c3d8b51fc9d9a2",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/38/45898813b3f2434b7bc79ab19199fdf5f4f2b1": "4d41bee48729fb457728b5ed19150601",
".git/objects/38/a91a265d9aa6d4778952d64facb813d5ac344b": "c96850625b1cc74903fdab6c78d1adc8",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/79a525b89b2ce6c0bce3fc74f096dcc4a49c37": "5b6404d30782e48be3013f78034c82d8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/cd9dd86f409bc15310acd3618d16e1984a154b": "19f10d2a1119d7d2cdfb18e2a11d64fa",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/5e2936c946ae95cfa37c733c32167d105f690e": "502ffc48d1cc5c527bbb1caee375c9d0",
".git/objects/3d/9cf4d5ad23940d7125a0c32ec8c087e7f8174a": "5878a3342ad52e0a3c473c64462323a9",
".git/objects/3f/292a397743d2c167b2b6a5249a38b4565cc22a": "16e5c31f9227c6fe0cd6c733bbcd0d26",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/3f/bbfdac0add09b9335c1cac395b2984c290cbee": "c28e265330e3d9a7c2efbec7c32ecf23",
".git/objects/40/8053669c3c843b0ac24de2d08f0ba5c36e0877": "635fc7d0b1c26408a62f18053b489559",
".git/objects/43/4558669e8f29e102fb348d2737d2e7bb566406": "1124b6ec9eadb107eb1e42de55070c11",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/4e/cf2754b89492c0e2b51b173593d0118ed648b2": "8baac8b2dcc0bc5a6a126ee581b5eae0",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/3d9babf88ad4f9685f83280bcd166734046e5b": "01837627068964b1b8cc8f0b0cae4115",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/68b2b0a91c3d6017fd4680f915876f75674555": "e1abea08f70264f240a869b95549e5e2",
".git/objects/58/8f6f141e9110d5878cc4addb93106387e82f44": "1ef40d1882b2b2a1ea6a8c91e15b900d",
".git/objects/5a/18f5b1ed57bbe4f7bc842d580849dff0384461": "331b43bf3c4badcbda8e4b309a850116",
".git/objects/5f/7c47795fce8192c356262463bc3294aa82e856": "4cf244180d72a6ff4dde2a84e235ebe2",
".git/objects/61/67271b532605d13bf7a6248138bcdfd3bdfc47": "5a71248708b058e73619c6b3c9da59ac",
".git/objects/63/e903a26481e0e1af60dde5d9b44e2c172fcd06": "c8ffa4f2785a4d0809c620a66814ad01",
".git/objects/66/118f8717f950d44cb1070ca3cf3d1d208c3e3d": "6bf2799e6b0fdab2c38386249299c917",
".git/objects/67/62eb4a72124c404904594882284879bf5188e1": "747b92c87d03069bc369f71f3a3e16e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6a/2fbf9d783f8d2490e5e6c6602fc2b153ade39d": "467b17a82f487585e701c7eb9d1dd75d",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/8c1746002245e7d935c385dd72bb027065ab24": "d603b36426562a65ecc02560e3820581",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/97362486eb8b21dd8981615279e279fbf70917": "e5dafb68e4b37cf257dace9b143cedde",
".git/objects/76/03918b827bc6ae10413ea1ec4b2c771a531da3": "cd17943df05d1488492539781eef3477",
".git/objects/76/1f95d92914ffd16269e153c8ae066ac9ca39bb": "3e08080a8a2dfbc29086a3e2ab9a27f6",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/77/8e04a95ed73e261523b301b519c159c42e0151": "2154d59dba35b772afe0277f6660d9ff",
".git/objects/84/8a06dba84ff7328438fccd9fde058f01096bb1": "8dc27f7148d8ddc3cca11e03e3ada516",
".git/objects/88/e2ae5d323df247dc81725b3aba20abeb249873": "45510c2173b03b86422a54aaadefa6b1",
".git/objects/8f/c73827746ea0159a8022b7aeca6f7fa03c5a14": "a75c117b3e9a7266cb07b2186b59dea2",
".git/objects/93/135a503068a25202360e5f05ed3e1b10a9679f": "3717410e8ba071e03c043db0208a7f6b",
".git/objects/94/3b9db6237bd98ea7010e13ea1c8115273eec2f": "ff736a55e4d25db673f6670f570cc44a",
".git/objects/96/d1cb581fd5f7f077fbca6c19396caa23838ba2": "32febcbbf8ba0a9888e5cb5b9ad94f38",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/97/f16bdfd57774152e5396a5f830b2691c320898": "edc0ae14f5067baab51b844a39fc1040",
".git/objects/9c/eea8864e99190f6e3d2450893f08ffa26159eb": "49ef7a2eb706813fab6c17eb5b384aef",
".git/objects/9f/dc71b9349b8a2411f60c0862653f3d2e0c08fb": "df658fd0d4c52714fb2ca33568486e3b",
".git/objects/a0/18d1ada492fff7f1baf1ae575ca58d9a680b3e": "cec52cf194fcab10682c54f71c32ba31",
".git/objects/a6/6b86c3348ab99a3ea7495c08f77aa8e23739fb": "37222ef028a455558ebdec409da7ff53",
".git/objects/ae/5a036a59c82a86433e9077c9f541ddcfd6ab37": "e6397ed13326518219f0356bb6cdc8c8",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/e08781ada90baea62d7f4d3f1ff713cb8be128": "c870a0c3d0b53508053d1c44167e2ba9",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/30909ec571e720cf55a69a7f6b50216c33dd4e": "ab9b9438db285055a7416d99192df46f",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d6/85716f1ade3e4cca9d1a9d565944b3004e49a8": "1baa21f7c628d000b74bb1af419139e4",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/0b85f151f92648373ca40a8ac363a35cdebde4": "23547328ffcf731399791593a9f9d8c5",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/e2/9b53c2fd9b9b112c504fd4ac1a21587200b3bc": "f6608353e58fd524b5e3b2d45012887e",
".git/objects/e2/9b864c948ca31d5c675cd161648f1122858455": "cfb20fe16195f9e58e909eeffbf17301",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5685e218f3803af545d8c16a393e31bac9a439": "7eadc3cd5251d950f69f62bf0ec492b4",
".git/objects/ea/44bd0c3b664ed627318a30e5328c627b5701ea": "50d8643821e78c1b8bfa7810f68a2774",
".git/objects/ea/b6b35d64a72021cb5432117a15d8a4d31d1af1": "326a5b44795a93caff923fc8a38fa87e",
".git/objects/ee/280b54ecea0c51519bc3a714d8d252e58c1282": "794ad8923f1da0ef233802109b758988",
".git/objects/ee/553cd98d056744aa493e9549c86b6b8cbb78c1": "34f4632a398f6b31af107312ebcb980e",
".git/objects/f0/e60559d5829fecbd4788348341ad1468fe6953": "2a9724b62c1f2da3bb2e9d24fcd112ae",
".git/objects/f1/25a45fe3709856fc8d952f8102d7c4e87aa8bc": "629a55fe9804c9e03efc9ac9f7f1e919",
".git/objects/f1/b14c107cd2984d2c36e77a7b533326aefb031a": "67c75c2b9f806b4f5faea27432305c0f",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f8/88f23092fef088a9da2f399d59ae116c8b7e2e": "85697c383d814d085e64b86a9d470154",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fc/b6268da39c5bf50bfa724e68a3cfb02f9273b1": "3dff2a174ea5516af4f0703fc3b6ed3c",
".git/objects/fd/fe96acd0702757f9d34912e5b02b561ea65bf1": "67984747c0404eb28a6abd199064b5f5",
".git/refs/heads/master": "5f05a7edaffc8d3579ff0451e71c301c",
".git/refs/remotes/origin/master": "5f05a7edaffc8d3579ff0451e71c301c",
"assets/AssetManifest.bin": "f6427c3016b6c1125b0e5005b54dc900",
"assets/AssetManifest.bin.json": "24a3e2482cf8521efb9255e3a8b05a24",
"assets/AssetManifest.json": "db3b13f944d2e8ae54a1a1f84ed5ffac",
"assets/assets/audios/F4J5TCX-ball-hits-ball.mp3": "ddf6612058a6f180f90a9cda0b2661e1",
"assets/assets/audios/game_ringtone.mp3": "d8320cb92255b9318e4a65ef8ca59bf6",
"assets/assets/audios/hit-ball-60701.mp3": "4a33539bf8697c1a5b759bdcf3a2b3a5",
"assets/assets/audios/mixkit-ball-bouncing-in-the-ground-2077.wav": "d50a0c411c61ebc6439acb04183aee29",
"assets/assets/audios/TunePocket-3-2-1-Go-Countdown-Male-2-Preview.mp3": "66bff042ad8219ea682ac0d3379085a4",
"assets/assets/icons/gmail_icon.svg": "c3d303f6fe059c192ed3f6404df0d553",
"assets/assets/icons/gmail_icon_round.svg": "2455473071857881ae74a5c26dcca063",
"assets/assets/icons/icon.png": "5842f6a10f3216ff62abd985b735a179",
"assets/assets/icons/icon_bg.jpg": "f9549b67683f9c6d9648dd555e6f2e68",
"assets/assets/images/batball.jpeg": "6e7934afb966c13f4b1a5d0f57f8c1fa",
"assets/assets/images/chess.jpeg": "7ce08d04fcb62fbdd6d665e94a68d1c8",
"assets/assets/images/die.png": "3b6757c239d9edb22b6ebcd06e8f8148",
"assets/assets/images/draught.jpeg": "b87fb54bbe9770482feb5a764274f441",
"assets/assets/images/ludo.jpeg": "612f65b9f84220077ba9570e392b8eca",
"assets/assets/images/whot.jpeg": "b61187858eedfec7cb242333d1c789d3",
"assets/assets/images/xando.jpeg": "07fe4ea57e924e7f872baa6fc53ac9df",
"assets/assets/svgs/chess_bishop_icon.svg": "b4afaa107c2d23998b0d43af9d88ae2e",
"assets/assets/svgs/chess_horse_knight_icon.svg": "896197c68e2b148f37c8abea8b7e4034",
"assets/assets/svgs/chess_king_icon.svg": "371f941c5153c3bcb94ec22043b614d0",
"assets/assets/svgs/chess_pawn_icon.svg": "684287f5d13ce6607db47ad4559b12d0",
"assets/assets/svgs/chess_queen_icon.svg": "c0e94b09e2f525b5f529b475f3d765ad",
"assets/assets/svgs/chess_rook_icon.svg": "a36488649dadadcd3a3a1ac8ea7b1dae",
"assets/FontManifest.json": "804707ad6eb45368673f1e39bf241e41",
"assets/fonts/MaterialIcons-Regular.otf": "aaa3c77adc4ef78b87c6b65500dc33ee",
"assets/google_fonts/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/NOTICES": "6b613916bc2145b32cbe48dd79f86867",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fa374c5bcd15e9b468c501d3ffdefcc8",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "4a4919c19304a04341dc515a096a0b0b",
"icons/Icon-512.png": "036bebd473d6ee3e1e22406c6cd50b91",
"icons/Icon-maskable-192.png": "4a4919c19304a04341dc515a096a0b0b",
"icons/Icon-maskable-512.png": "036bebd473d6ee3e1e22406c6cd50b91",
"index.html": "84e2e632a102a339fa02f2d4863f2293",
"/": "84e2e632a102a339fa02f2d4863f2293",
"main.dart.js": "4e9257c240827fca67296f2b194a9648",
"manifest.json": "ff18d444a34ec5c4d43f38ee8a89497f",
"version.json": "d7999b91975022415d886ec9ef2ff045"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
