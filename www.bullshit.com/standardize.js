require('../global.js');
require('../connection.js');
const async = require('async');
const rawSubtitle = require('../schema/RawSubtitle.js');
const Subtitle = require('../schema/Subtitle.js');
const Video = require('../schema/Video.js');

const Standardize = async() =>{
    // //find all records in Subtitle 
    // const sub = await Subtitle.find().limit(50000).skip(300000).exec();
    // // console.log(sub);
    // sub.forEach( async(element, index) => {
    //     function getData(cb){
    //         cb(null, element);
    //     }
    //     async function addVideoid(data){
    //         const video = await Video.findOne({_id : data.videorecordid}).exec();
    //     await (data.videoid = video.videoid);
    //     data.save().then(result => {});
    //     return (null, "done");
    //     }
    //     async.waterfall([
    //         getData,
    //         addVideoid
    //     ], function (err, result) {
    //         // console.log("error be like: ", err);
    //         // result now equals 'done'
    //         console.log("index: ", index);
    //     });

    // });

//fuck


    //find matching video record in Video
    
    // console.log(video);
    //get videoid from the matching video record
    //add videoid field
    
    // console.log(sub)
    
}

Standardize();
// second jopik process data: change name field of caption


// initial process Jopik's data

// const findData = async () => {
//     const rawData = await rawSubtitle.find({ "captions.lang": "en" }).limit(10000).skip(310000).exec();
//     //console.log(rawData);
//     //

//     rawData.forEach((element, index) => {

//         function getData(cb) {
//             //get from youtube 
//             console.log("from get data function in waterfall: ", element)
//             cb(null, element)
//         }

//         async function createVideoData(data) {
//             const videoRecord = {
//                 "videoid": data.video.videoid,
//                 "title": data.video.title,
//                 "viewcount": data.video.viewcount,
//                 "duration": data.video.duration,
//                 "thumbnailurl": "",
//                 "category": data.video.category,
//                 "uploaddate": data.video.uploaddate,
//                 "channelid": data.video.channelid,
//                 "channelname": data.video.channelname
//             }

//             const videoData = await Video.create(videoRecord);
//             //console.log("running create videodata:", videoData);
//             return (null, [videoData, data]);
//         }

//         async function createSubtitleData([videoData, originalData]) {
//             //console.log("i'm going in");
//             //console.log("originaldataUwU", originalData);
//             //console.log("videodataAAAAAAa", videoData);
//             const englishCaption = originalData.captions.find((caption) => (caption.lang === "en")).subtitles.transcript.text;
//             const subtitleRecord = {
//                 "videoid": videoData._id,
//                 "isauto": false,
//                 "caption": englishCaption
//             }
//             //console.log("new updated subtitle format: ", subtitleRecord);
//             const subtitleData = await Subtitle.create(subtitleRecord);
//             //console.log("running create subtitle data: ", subtitleData);
//             return (null, "done");
//         }


//         async.waterfall([
//             getData,
//             createVideoData,
//             createSubtitleData,
//         ], function (err, result) {
//             console.log("error be like: ", err);
//             // result now equals 'done'
//             console.log("result: ", result, "index: ", index);
//         });

//     });



// }

// findData();


// // const sampleData = [
// //     {
// //         "video": {
// //             "videoid": "1CpYVvT5T9U",
// //             "fetchdate": "2019-10-02",
// //             "uploaddate": "2014-02-07",
// //             "viewcount": 8853,
// //             "likecount": 24,
// //             "dislikecount": 3,
// //             "duration": 180,
// //             "category": "Education",
// //             "title": "12 Deadly Weapons From The Future",
// //             "channelid": "UC712bc5st89LJMkkho32M4Q",
// //             "channelname": "Amazing Facts",
// //             "channelcountry": "N/A",
// //             "subscribers_count": 2237,
// //             "baselangcaptions": " ar bn de el en es fi fil fr hi hu id it ja jv ko mr ms nl pa pt ru sv ta th tr uk vi zh ",
// //             "captions": " ar bn de el en es fi fil fr hi hu id it ja jv ko mr ms nl pa pt ru sv ta th tr uk vi zh-CN zh-Hans zh-Hant ",
// //             "auto": " ",
// //             "cnt_captions": 29
// //         },
// //         "subscontributions": [
// //             {
// //                 "id": "UC46dw8Xf9pz9HXsYJdCDmpQ",
// //                 "lang": "Danish",
// //                 "seclang": "",
// //                 "author": "Sofie Malou"
// //             },
// //             {
// //                 "id": "UC2Or7QIjX_DqONNnjj1GKRw",
// //                 "lang": "Portuguese ",
// //                 "seclang": "Brazil",
// //                 "author": "Juliana Cintra"
// //             },
// //             {
// //                 "id": "UC7oce_yJ_oIfq3PZE4oau1w",
// //                 "lang": "Italian",
// //                 "seclang": "",
// //                 "author": "Francesca J. Bonetti"
// //             },
// //             {
// //                 "id": "UC933U9EkT1q7OTLvxA6v4-g",
// //                 "lang": "Polish",
// //                 "seclang": "",
// //                 "author": "DubiousStory"
// //             },
// //             {
// //                 "id": "UCaGbeoGidvVliRyArzTINew",
// //                 "lang": "Chinese ",
// //                 "seclang": "Taiwan",
// //                 "author": "YUKI LIN"
// //             },
// //             {
// //                 "id": "UCGpmPdn49g1gR_9bktmgRZA",
// //                 "lang": "English ",
// //                 "seclang": "United Kingdom",
// //                 "author": "Wolve_Dreamer"
// //             },
// //             {
// //                 "id": "UCing2J4gtb-2__WbWCFfFtw",
// //                 "lang": "Polish",
// //                 "seclang": "",
// //                 "author": "Ola Malinowska"
// //             },
// //             {
// //                 "id": "UCqGg5kL1X0BiwuMaIYMAmJw",
// //                 "lang": "Portuguese ",
// //                 "seclang": "Portugal",
// //                 "author": "Arine Riuca"
// //             },
// //             {
// //                 "id": "UCTtweiOS2VkqOe9ih4s3AZA",
// //                 "lang": "English",
// //                 "seclang": "",
// //                 "author": "BendingUnit84"
// //             },
// //             {
// //                 "id": "UCWwxaKnhbue8vJnVCETwsdQ",
// //                 "lang": "Spanish ",
// //                 "seclang": "Latin America",
// //                 "author": "Fiore Deste"
// //             },
// //             {
// //                 "id": "UCznDSvLoKCVgDzoPz_w4EMg",
// //                 "lang": "Russian",
// //                 "seclang": "",
// //                 "author": "Youtube Rus Sub"
// //             },
// //             {
// //                 "id": "UCYw_NfYN8TIooT6MA901tmg",
// //                 "lang": "Spanish ",
// //                 "seclang": "Latin America",
// //                 "author": "Andrea Oblitas"
// //             },
// //             {
// //                 "id": "UCxV3Wd7nB90ERDsz4Cy59mA",
// //                 "lang": "Turkish",
// //                 "seclang": "",
// //                 "author": "Gizem Söylemzoğlu"
// //             }
// //         ],
// //         "captions": [
// //             {
// //                 "lang": "sv",
// //                 "baselang": "sv",
// //                 "isauto": false,
// //                 "subtitles": {
// //                     "transcript": {
// //                         "text": [
// //                             {
// //                                 "t": "12 Dödliga vapen från framtiden",
// //                                 "-start": "0",
// //                                 "-dur": "3"
// //                             },
// //                             {
// //                                 "t": "Soldater kommer att utrustas med osynlighetsmantlar, som kallas Metaflex, som kommer att böja ljus runt användaren.",
// //                                 "-start": "4",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Precis som Predator kommer stridande soldater kunna göra recon, avfyra sina vapen, och stealth runt som Harry Potter.",
// //                                 "-start": "12",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Aurora Excalibur, en drönare, kan nå hastigheter på 460 km / h eller 740 kmh.",
// //                                 "-start": "20",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Det var framgångsrikt testats i juni 2009, och bär dödliga Hellfire missiler.",
// //                                 "-start": "28",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Pentagon utvecklar hög effekt laserområdet försvarssystem vätska.",
// //                                 "-start": "35",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Dessa lasrar kan sättas på ett flygplan, och kan skjuta ner raketer, missiler och artillerigranater.",
// //                                 "-start": "42",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Den Railgun har testats sedan våren 2008, och kan avfyra en kula vid 2,4 kilometer per sekund.",
// //                                 "-start": "49",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "En fulländad version av vapnet beräknas vara klar mellan 2020 och 2025.",
// //                                 "-dur": "6",
// //                                 "-start": "57"
// //                             },
// //                             {
// //                                 "t": "DARPA försöker lura döden, genom att skapa mikroorganismer som kan leva för evigt. Det finns också en kill switch om du inte vill leva för evigt.",
// //                                 "-start": "64",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "En annan länkad projekt för att låta metabolisk dominans för att möjliggöra bättre fysisk och fysiologisk prestation genom att kontrollera ämnesomsättningen på efterfrågan.",
// //                                 "-start": "73",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Den kinesiska marinen är att bygga en \"kill vapen\" som kan förstöra amerikanska hangarfartyg.",
// //                                 "-start": "81",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Utbudet av dessa missiler är 2,000 km, och kan flyga på låg höjd undvika radarupptäckt.",
// //                                 "-start": "89",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "DREAD, en tyst maskingevär, kan avfyra 120.000 varv per minut, med inget ljud, eller blixt för att ge bort utlösaren mannen.",
// //                                 "-start": "97",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "Active Denial System avfyras en hög effekt stråle av elektromagnetisk strålning i form av mikrovågor.",
// //                                 "-start": "106",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Mikrovågorna snabba vattenmolekyler, att vända en människa in i en varm ficka.",
// //                                 "-dur": "6",
// //                                 "-start": "114"
// //                             },
// //                             {
// //                                 "t": "Den Taser shockwave, klasar sex Taser X26 elpistoler för att täcka en 20 graders båge för att chocka och ta ut kravall publik.",
// //                                 "-start": "121",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "XM-25 granatkastare är en del dator, del mega pistol, kan avfyra 25 granater som användaren kan programmera för att detonera bort luften.",
// //                                 "-start": "130",
// //                                 "-dur": "10"
// //                             },
// //                             {
// //                                 "t": "HULC battle är ett exoskelett som ansluter till användarens rörelser med hjälp av en batteridriven titan ramen.",
// //                                 "-dur": "7",
// //                                 "-start": "141"
// //                             },
// //                             {
// //                                 "t": "Detta tillåter användaren super mänsklig styrka som gör det möjligt för dem att utföra massiva vapen över långa avstånd.",
// //                                 "-start": "149",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Den Antimatter Bomb skapar en antikollision, omvandla en större del av massa än sin egen i explosiv energi.",
// //                                 "-start": "156",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "Enkelt uttryckt, den fysiska materia som du håller i din hand storleken på en mobiltelefon skulle deatomize och förstöra de flesta av jorden.",
// //                                 "-start": "165",
// //                                 "-dur": "8"
// //                             }
// //                         ]
// //                     }
// //                 }
// //             },
// //             {
// //                 "lang": "fi",
// //                 "baselang": "fi",
// //                 "isauto": false,
// //                 "subtitles": {
// //                     "transcript": {
// //                         "text": [
// //                             {
// //                                 "t": "12 tappavia aseita tulevaisuudesta",
// //                                 "-start": "0",
// //                                 "-dur": "3"
// //                             },
// //                             {
// //                                 "t": "Sotilaat on varustettu näkymättömyys kaavut , nimeltään Metaflex , joka taivuttaa valon käyttäjän ympärillä .",
// //                                 "-start": "4",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Aivan kuten Predator , taistelusotilailla pystyy tekemään Recon , palo aseensa , ja stealth ympäriinsä kuin Harry Potter .",
// //                                 "-start": "12",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Aurora Excalibur ,drone , voi saavuttaa jopa 460 mph tai 740 kmh .",
// //                                 "-start": "20",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Se on testattu kesäkuussa 2009 , ja kuljettaa tappava Hellfire ohjuksia .",
// //                                 "-start": "28",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Pentagon kehittää korkean powered neste laser alueen puolustus.",
// //                                 "-start": "35",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Nämä laserit voidaan laittaailma , ja voi ampua alas raketteja , ohjuksia ja kranaatteja .",
// //                                 "-start": "42",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Railgun on testattu keväästä 2008 , ja voi ampualuoti 2,4 kilometriä sekunnissa .",
// //                                 "-start": "49",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Täydelliseksi versioase on määrä valmistua vuosien 2020 ja 2025 .",
// //                                 "-dur": "6",
// //                                 "-start": "57"
// //                             },
// //                             {
// //                                 "t": "DARPA yrittää huijata kuolemaa , luomalla mikro-organismeja , jotka voivat elää ikuisesti . Myöskill switch , jos et halua elää ikuisesti .",
// //                                 "-start": "64",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "Toinen liittyy hankkeeseen , jotta aineenvaihdunnan määräävä asema mahdollistaa erinomaisen fyysisen ja fysiologinen suorituskykyä ohjaamalla aineenvaihduntaa kysyntään .",
// //                                 "-start": "73",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Kiinan laivasto rakentaa\" kill ase\" , joka voi tuhota Yhdysvaltain Lentotukialukset .",
// //                                 "-start": "81",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Valikoima näitä ohjuksia on 2000 km , ja voi lentää matalilla korkeuksilla välttämään tutkan .",
// //                                 "-start": "89",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "DREAD ,hiljainen konekivääri , voi ampua 120000 kierrosta minuutissa , ilman ääntä , tai flash lahjoittaalaukaista mies .",
// //                                 "-dur": "8",
// //                                 "-start": "97"
// //                             },
// //                             {
// //                                 "t": "Active Denial System tulipalotkorkea powered valot sähkömagneettisen säteilyn muodossa mikroaallot .",
// //                                 "-start": "106",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Mikroaaltouuni nopeuttaa vesimolekyylejä , kääntämälläihmisen kuumaan taskuun .",
// //                                 "-start": "114",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "Taser Shockwave , bunches kuusi Taser X26 tainnutusaseita kattamaan20 asteen kaaren iskuja ja ottaa mellakka väkijoukkoja .",
// //                                 "-start": "121",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "XM - 25 kranaatinheitin on osa tietokoneen , osa mega aseen , pystyy ampumaan 25 kranaatteja, jotkakäyttäjä voi ohjelmoida räjäyttää pois ilmassa .",
// //                                 "-start": "130",
// //                                 "-dur": "10"
// //                             },
// //                             {
// //                                 "t": "HULC Battlesuit ontukiranka , joka yhdistääkäyttäjän liikkeiden avullaparistokäyttöinen titaani- runko .",
// //                                 "-start": "141",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Tämän avulla käyttäjä super ihmisen voimaa jonka avulla voitaisiin tehdä massiivinen aseita pitkillä etäisyyksillä.",
// //                                 "-dur": "6",
// //                                 "-start": "149"
// //                             },
// //                             {
// //                                 "t": "Antimatter Bomb luoantimateria törmäys , muuntaasuurempi osa massasta kuin omiin osaksi räjähtävää energiaa .",
// //                                 "-start": "156",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "Yksinkertaisesti sanottuna ,fyysistä ainetta pidät kädessäsikokomatkapuhelin olisi deatomize ja tuhota suurimman osanmaapallon .\n.",
// //                                 "-start": "165",
// //                                 "-dur": "8"
// //                             }
// //                         ]
// //                     }
// //                 }
// //             },
// //             {
// //                 "lang": "en",
// //                 "baselang": "en",
// //                 "isauto": false,
// //                 "subtitles": {
// //                     "transcript": {
// //                         "text": [
// //                             {
// //                                 "t": "12 Deadly Weapons From The Future",
// //                                 "-start": "0",
// //                                 "-dur": "3"
// //                             },
// //                             {
// //                                 "t": "Soldiers will be equipped with invisibility cloaks, called Metaflex, that will bend light around the user.",
// //                                 "-start": "4",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "Just like Predator, combat soldiers will be able to do recon, fire their weapon, and stealth around like Harry Potter.",
// //                                 "-start": "12",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "The Aurora Excalibur, a drone, can reach speeds of 460 mph or 740 kmh.",
// //                                 "-dur": "7",
// //                                 "-start": "20"
// //                             },
// //                             {
// //                                 "t": "It was successfully tested in June of 2009, and carries deadly Hellfire missiles.",
// //                                 "-start": "28",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "The Pentagon is developing high powered liquid laser area defense system.",
// //                                 "-start": "35",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "These lasers can be put on an aircraft, and can shoot down rockets, missiles, and artillery shells.",
// //                                 "-start": "42",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "The Railgun has been tested since spring of 2008, and can fire a bullet at 2.4 kilometers PER SECOND.",
// //                                 "-start": "49",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "A perfected version of the gun is expected to be read between 2020 and 2025.",
// //                                 "-start": "57",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "DARPA is trying to cheat death, by creating microorganisms that can live forever.  There is also a kill switch if you don't want to live forever.",
// //                                 "-dur": "8",
// //                                 "-start": "64"
// //                             },
// //                             {
// //                                 "t": "Another linked project to allow metabolic dominance to enable superior physical and physiological performance by controlling metabolism on demand.",
// //                                 "-start": "73",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "The Chinese navy is building a \"kill weapon\" that can destroy US Aircraft carriers.",
// //                                 "-start": "81",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "The range of these missiles is 2,000 km, and can fly at low altitudes avoiding radar detection.",
// //                                 "-dur": "7",
// //                                 "-start": "89"
// //                             },
// //                             {
// //                                 "t": "DREAD, a silent machine gun, can fire 120,000 rounds per minute, with no sound, or flash to give away the trigger man.",
// //                                 "-start": "97",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "The Active Denial System fires a high powered beam of electromagnetic radiation in the form of microwaves.",
// //                                 "-start": "106",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "The microwaves speed water molecules, turning a human into a hot pocket.",
// //                                 "-start": "114",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "The Taser shockwave, bunches six TASER X26 stun guns to cover a 20 degree arc to shock and take out riot crowds.",
// //                                 "-start": "121",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "XM-25 Grenade launcher is part computer, part mega gun, capable of firing 25 grenades that the user can program to detonate off mid-air.",
// //                                 "-start": "130",
// //                                 "-dur": "10"
// //                             },
// //                             {
// //                                 "t": "HULC Battlesuit is an exoskeleton that connects to the users movements using a battery powered titanium frame.",
// //                                 "-start": "141",
// //                                 "-dur": "7"
// //                             },
// //                             {
// //                                 "t": "This allows the user super human strength allowing them to carry massive weapons across long distances.",
// //                                 "-start": "149",
// //                                 "-dur": "6"
// //                             },
// //                             {
// //                                 "t": "The Antimatter Bomb creates an antimatter collision, converting a larger fraction  of mass than its own into explosive energy.",
// //                                 "-start": "156",
// //                                 "-dur": "8"
// //                             },
// //                             {
// //                                 "t": "Simply put, the physical matter you hold in your hand the size of a cell phone would deatomize and destroy most of the Earth.",
// //                                 "-dur": "8",
// //                                 "-start": "165"
// //                             }
// //                         ]
// //                     }
// //                 }
// //             }
// //         ]
// //     }
// // ]

