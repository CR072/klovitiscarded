const images = [
    "https://media.discordapp.net/attachments/1211626449979711528/1219591393396260955/image.png?ex=660bdbff&is=65f966ff&hm=e87f4dbefcbd666748dd7670f7fc4d7685aa1a495a58784949b02af397886abd&=&format=webp&quality=lossless&width=662&height=597",
    "https://media.discordapp.net/attachments/1211626449979711528/1219590805107507332/image.png?ex=660bdb72&is=65f96672&hm=6ea52f02788a897c8fc4aac0fa903aad7a7f368df106567f3046ce37886dfa99&=&format=webp&quality=lossless&width=351&height=393",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782162445606993/IMG_0749.png?ex=66058b67&is=65f31667&hm=77fe4bbe6da443da0152233eb4fd472fed17733d7326a71b4c9f8ded0899e1f6&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782161904803860/IMG_0750.png?ex=66058b67&is=65f31667&hm=a98702d39e92ffb7d6b82ac6400b5a2f749279bf5fbb670511c667282cc2f336&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782161397022771/IMG_0751.png?ex=66058b67&is=65f31667&hm=c7babeaab7c5916f5409176e9db1aaf6d4ad1df3450de162c087d303299f37c8&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782160906428507/IMG_0752.png?ex=66058b67&is=65f31667&hm=b05f41b944846dc02b3454849aa5becdf5baafe32175006531ed1658f951a20a&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782160457764904/IMG_0753.png?ex=66058b67&is=65f31667&hm=eb533179859d1854fcffefc151a3edc40e0b3709e3f90ea055d656e8d405f766&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782160004644954/IMG_0747.png?ex=66058b67&is=65f31667&hm=2bd6efcc0bddec89429fa019ee2e08368840c0dd97e3afd779c30c86975d5de1&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782159513784340/IMG_0746.png?ex=66058b67&is=65f31667&hm=57a3ae73730f8cfc7d44234563a18aa18ec3b60bf17e9b2126cf4d1eb23315f1&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782158981365760/IMG_0748.png?ex=66058b67&is=65f31667&hm=5fc72d44af462f371cbfb20db0bf254ef148082cd7eb3e018669091a9be5a161&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782158524059678/IMG_0745.png?ex=66058b66&is=65f31666&hm=96c86efd85bc50fc3be8fbe01d32791330f191c32ab930bce734e2dc4dd45eb8&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212782158112890920/IMG_0744.png?ex=66058b66&is=65f31666&hm=538e26d83a85309879ed4e53b95c0669991bb57248be22062b69b3f7682d9147&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781053262045274/IMG_0739.png?ex=66058a5f&is=65f3155f&hm=7df509d56b372ff23d5f61b1f17071aa4eac33ffc090bcd32174ebdf7a4ae735&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781052691611648/IMG_0743.png?ex=66058a5f&is=65f3155f&hm=d39d86ed258e1f84946fa5e2644dc66e3dd510b17697adaedc2ab93072029493&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781052041625600/IMG_0741.png?ex=66058a5f&is=65f3155f&hm=86892245bccd01646e6a56c6287055c77d0689afa0450ab8ddb752f74286ab6e&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781051466743849/IMG_0740.png?ex=66058a5f&is=65f3155f&hm=342c87983ae7a20c30cd527264612ab22dd16a6afa757d52fd0eb04576965b0a&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781050955309096/IMG_0738.png?ex=66058a5e&is=65f3155e&hm=73e41fc8e9eb4c60b89824f7af3b6ec60d5363ff1dc140b62a3a36f26b50a306&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781023985795114/IMG_0737.png?ex=66058a58&is=65f31558&hm=7a46651786f7cd0a453f0c62eae1df1710bc5637655602a9a6f5dd9de8a8345d&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781023423631400/IMG_0734.png?ex=66058a58&is=65f31558&hm=104d01ac48eca604b62d24c012063f7a028c421180aba96e7c9b68de5038a516&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781022895284274/IMG_0736.png?ex=66058a58&is=65f31558&hm=0d538409cfd97583f3ae9e6df4cce94f0a90972c270d5763df54ede452bf55fa&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781022304018462/IMG_0735.png?ex=66058a58&is=65f31558&hm=dc52c0042c942f6a82708e1bb0dad274df331f2bfd15051e329e996c1ff57f33&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781021683257477/IMG_0732.png?ex=66058a57&is=65f31557&hm=377f47825ca2703d8c9c0ba2137ec866b701fe8f123588dada3668f63453f4a7&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781021276151939/IMG_0732.png?ex=66058a57&is=65f31557&hm=76ca17a3c49a90ee47ffbc418e088833c5e4a6b413ddb489cb5c8cf9136127be&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781020751990835/IMG_0731.png?ex=66058a57&is=65f31557&hm=beda7610658108a539e684ee699f239dba5276a7ef60c347e75d105a324828e0&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781019737096232/IMG_0729.png?ex=66058a57&is=65f31557&hm=12c13f822c1406ac92efd4cabcf916f8b07b56fd436845198c2a8398508024f2&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781020214984724/IMG_0730.png?ex=66058a57&is=65f31557&hm=39aae1a8ba27d6b5a97123526dd67d3542cef1bb66507d3772b7983bb19551e4&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212781019258814504/IMG_0728.png?ex=66058a57&is=65f31557&hm=fcbff578093f8900f9bdad2cd6fc82f4ab9e86c247246e28c583b6fbbc925caf&=&format=webp&quality=lossless&width=718&height=538",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694981215658094/Screenshot_20240229-150546_Discord.png?ex=66053a36&is=65f2c536&hm=87008ea47640db06f486a28621ffd6cae7cf2f3b251c5f181263401728d4b36a&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694962442076170/Screenshot_20240229-150528_Discord.png?ex=66053a31&is=65f2c531&hm=1c3a8ad7a123124ff7f01b025c2df30520daf02742405a96f69956e0e6b42ed5&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694962005745684/Screenshot_20240229-150440_Discord.png?ex=66053a31&is=65f2c531&hm=4247f8717d6b40b301e85178f9fc2eaf5d410c85d2452ffd4c4818422d3c2521&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694961682653204/Screenshot_20240229-150428_Discord.png?ex=66053a31&is=65f2c531&hm=3552c9b786bd08d193c39cc36bbe69d9c3282ec28944b4c401dec79d569f1728&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694961355489280/Screenshot_20240229-150410_Discord.png?ex=66053a31&is=65f2c531&hm=c6bf2e99be9550af86324e7d99b537ce0f840835853c42157346a0755a28d896&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694960978137158/Screenshot_20240229-150359_Discord.png?ex=66053a31&is=65f2c531&hm=7787d7deea6c1c5c69f2b57704a3636825088f0dd3b410a780a533f002d367fa&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694960596324412/Screenshot_20240229-150327_Discord.png?ex=66053a31&is=65f2c531&hm=f26398d98c7294dabb1f6b0b8165e7c400cc54b08cd04dced0f568a2a6d09985&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694960252518421/Screenshot_20240229-150305_Discord.png?ex=66053a31&is=65f2c531&hm=de9c89caa290bbe3cf2700a9d1b34483c820765e494cdfb0ca0a914e361782e5&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694959459930142/Screenshot_20240229-150226_Discord.png?ex=66053a31&is=65f2c531&hm=bc5a6ea48356abbf964717262819f8c0b66b75491f0494c2e61248e42b622833&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1212694959065661512/Screenshot_20240229-150210_Discord.png?ex=66053a31&is=65f2c531&hm=304313c81e13d7f05b3ccb9b7012e82c2192e7ae755878793fbfb2b8bfdab6d6&=&format=webp&quality=lossless&width=268&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1211626473786441758/image.png?ex=660a9196&is=65f81c96&hm=88641b15404b188fd61063d38a40d631a9cd7d7519ab13e66033991af1900a2b&=&format=webp&quality=lossless&width=718&height=133",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708821639794728/Screenshot_2024-03-19_233005.png?ex=660c495c&is=65f9d45c&hm=28cc0cd8f4d0f60840175156d2657018badf2cd886c1c1c543b720d7006111b5&=&format=webp&quality=lossless&width=718&height=535",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708821900099624/Screenshot_2024-03-19_233505.png?ex=660c495c&is=65f9d45c&hm=362a5e68a1217a5726d71548a9901849ec547916c3dab799b5f096c19a9d306c&=&format=webp&quality=lossless&width=718&height=446",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708822160019497/Screenshot_2024-03-19_233257.png?ex=660c495c&is=65f9d45c&hm=72202a10567a9c3e3f6bc2d52f2df7a6b95ab6a152ae43bfbf83f824d9b493ce&=&format=webp&quality=lossless&width=718&height=253",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708822528987186/Screenshot_2024-03-19_233229.png?ex=660c495c&is=65f9d45c&hm=927c63fa58c119018cecb5984a7b7afa221a6f30e6c859cf785f1f88cbe74ca2&=&format=webp&quality=lossless&width=718&height=562",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708822768320633/Screenshot_2024-03-19_233214.png?ex=660c495c&is=65f9d45c&hm=6390245b7c32b111c1d19ffebc72ce6274847bd2bc88e821b2d5aa77649fde78&=&format=webp&quality=lossless&width=718&height=453",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708823024046190/Screenshot_2024-03-19_233132.png?ex=660c495c&is=65f9d45c&hm=d484eeb641d73683d9ac5059317aa17310c0be91e192dbecd75d6d375f9ec550&=&format=webp&quality=lossless&width=718&height=569",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708823250407505/Screenshot_2024-03-19_233126.png?ex=660c495c&is=65f9d45c&hm=fbce8347870ef4400281eb37fee23ad42573e53a0691ef49ed4d5d56a6af982c&=&format=webp&quality=lossless&width=718&height=279",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708823481352323/Screenshot_2024-03-19_233047.png?ex=660c495c&is=65f9d45c&hm=cc5e2c43592ed568422bf8dda8fea3dfc5b5c68d9017983dfe28fda0acb992aa&=&format=webp&quality=lossless&width=718&height=328",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708823686746194/Screenshot_2024-03-19_233040.png?ex=660c495c&is=65f9d45c&hm=39e065ae670f8b295915a9de1123dd4f5fb9e12dfbfda24ad0d44dbe1f58aa8b&=&format=webp&quality=lossless&width=718&height=396",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708823904718958/Screenshot_2024-03-19_233028.png?ex=660c495c&is=65f9d45c&hm=ca50200b65f3ed3751c322cad0a66e5fbf438dfdc798208d5c91310116f818bf&=&format=webp&quality=lossless&width=653&height=500",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708852761788446/Screenshot_2024-03-19_232622.png?ex=660c4963&is=65f9d463&hm=d4a01f4c74285d59628a3b3b4378b7e676d95c0e0bcc9d4e22213f5ff629a466&=&format=webp&quality=lossless&width=718&height=509",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708853042810951/Screenshot_2024-03-19_232957.png?ex=660c4963&is=65f9d463&hm=33fe62155183fd53eb59e938531acb4d180fca7a23dbd0d08878c5aab7ec0f4b&=&format=webp&quality=lossless&width=718&height=493",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708853235486730/Screenshot_2024-03-19_232944.png?ex=660c4963&is=65f9d463&hm=86999470f33f0d25565f8fcc131a7f62d5cbd601d43d580f08ecab80539cef89&=&format=webp&quality=lossless&width=546&height=334",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708853483208806/Screenshot_2024-03-19_232934.png?ex=660c4963&is=65f9d463&hm=6991a579b0b2340a919194c6263cd0e7c3150a5a9ece907a0f876684287415d7&=&format=webp&quality=lossless&width=718&height=469",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708853743259768/Screenshot_2024-03-19_232914.png?ex=660c4963&is=65f9d463&hm=456b45e5d308bd769b97fbd39af84844df1c16d2bce0e620a0fbac0f207752f4&=&format=webp&quality=lossless&width=562&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708853998850118/Screenshot_2024-03-19_232905.png?ex=660c4963&is=65f9d463&hm=c49c20945d0b336bac7712be0b7ed8ae27759d08b193b383492d9586a6bb98c7&=&format=webp&quality=lossless&width=718&height=556",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708854259154974/Screenshot_2024-03-19_232855.png?ex=660c4963&is=65f9d463&hm=7c1f616bec81402ff9becbaff5b99b655972b163456abcdff4626f01e12375f5&=&format=webp&quality=lossless&width=718&height=536",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708854515011615/Screenshot_2024-03-19_232759.png?ex=660c4964&is=65f9d464&hm=a1403cd19573f2ed9c83d7ea656eec1e7e4993721d5088758011b13c8e759382&=&format=webp&quality=lossless&width=718&height=490",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708854758019112/Screenshot_2024-03-19_232744.png?ex=660c4964&is=65f9d464&hm=fb6e86dd898ea7255b52a9de07da25bff89ed10dce2ed47cede26df614bd49d3&=&format=webp&quality=lossless&width=380&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708855039295518/Screenshot_2024-03-19_232700.png?ex=660c4964&is=65f9d464&hm=2e8e9febef724ba6cbdc0a36a5102a379695cebe40ed1f3ffcdfd1c538c31d95&=&format=webp&quality=lossless&width=573&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708889830789220/Screenshot_2024-03-19_232445.png?ex=660c496c&is=65f9d46c&hm=ed4139369dc06ebc1d6008f9221d5d17810a2acdc834d1bc2c926d2e43686e84&=&format=webp&quality=lossless&width=652&height=434",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708890090967217/Screenshot_2024-03-19_232614.png?ex=660c496c&is=65f9d46c&hm=9b7117695b75430cb970e268e0a32ef20b073c07eee28e138c9e09917eeecd77&=&format=webp&quality=lossless&width=718&height=510",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708890380369951/Screenshot_2024-03-19_232541.png?ex=660c496c&is=65f9d46c&hm=034d29f82395ea2ddb36542421d40c403ea10f2b920445a2cc3f0c9d4761c884&=&format=webp&quality=lossless&width=534&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708890627706900/Screenshot_2024-03-19_232533.png?ex=660c496c&is=65f9d46c&hm=d10c6cda0e55ed2f8ee9684c6e52af93840b865736589cafcc40fdd924d138bb&=&format=webp&quality=lossless&width=424&height=596",
    "https://media.discordapp.net/attachments/1211626449979711528/1219708890866913280/Screenshot_2024-03-19_232501.png?ex=660c496c&is=65f9d46c&hm=fa4c3bd3903dfb9f0791dbd0b4d6a87a6651bfe3bd89e4f01ce3b0603c59e5ff&=&format=webp&quality=lossless&width=473&height=596",
    "https://media.discordapp.net/attachments/1144249927573184634/1219727732620005427/Screenshot_2024-03-19-20-22-17-54_572064f74bd5f9fa804b05334aa4f912.jpg?ex=660c5af8&is=65f9e5f8&hm=ea906d031512bd10de164eec8848595a2dceef168e88d87e95949f362c11107c&=&format=webp&width=268&height=597",
    "https://media.discordapp.net/attachments/1144249927573184634/1219727733060272229/Screenshot_2024-03-19-20-22-00-54_572064f74bd5f9fa804b05334aa4f912.jpg?ex=660c5af9&is=65f9e5f9&hm=3ed1a6b92ccd51ec22bcc1d8041e505dfb1096de46998f2532119601b276f9a4&=&format=webp&width=268&height=597",
    "https://media.discordapp.net/attachments/1144249927573184634/1219727733387563181/Screenshot_2024-03-19-20-21-55-00_572064f74bd5f9fa804b05334aa4f912.jpg?ex=660c5af9&is=65f9e5f9&hm=8f706c2a3345e955e374480595fd6150d34cd5c6ab2a3bc9e5ca58fba3ffb076&=&format=webp&width=268&height=597",
    "https://media.discordapp.net/attachments/1144249927573184634/1219728489863844020/Screenshot_2024-03-19-20-24-37-50_572064f74bd5f9fa804b05334aa4f912.jpg?ex=660c5bad&is=65f9e6ad&hm=55da1ba3ec0b5687290cf102eaea1fdf449e48c4087e0811f5f358c7658f20ff&=&format=webp&width=268&height=597"
];

async function start() {
    let data = []
    for (let i in images) {
        let b = await base64(images[i]);
        data.push(b)
        document.getElementById("attachments").innerHTML += `<img src="${b}" class="border border-zinc-800/80 cursor-pointer rounded-xl object-cover shadow-lg w-full h-full">`;
    }
}
async function base64(a) {
    const b = await fetch(a);
    return `data:${b.headers.get('content-type')};base64,${btoa(new Uint8Array(await b.arrayBuffer()).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
}
window.onload = start();
