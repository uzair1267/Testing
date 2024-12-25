const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "gbot",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mod by Shaan",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Insan ka sabse bada dushman uska apna dimag hota hai...😐 pakd pakd kr lata hai vo bate jo use taklif pahuchati hai....🖤💯", "Shardiyon ki Raat hai.. Aur Charo taraf Tanhayi ka Aalam ,,, hum bhi khoob sote agar teri bahon mai hote...🙃🫠", "Koi Mila hee nhi jisko Wafa Dete Sab Kamine Nikle kis kis ko Saza dete..", "Kuxx Dost Khazane ke Tarh hote hai.🤗 Dil karta hai Zamin mai Gaadh dun😒😕", "Wasta nhi Rakhna to Nazar Kion Rakhte ho... kis Haal mai hun Zinda Khabar Kion Rakhte HO...😐", "Arz Kiye hai..✍️🏻\n\nWoh jo Shamil tha meri Duaon mai bin mange Kisi ko mil Gya..✍️🏻🖤", "Raat bhar Karta raha teri tarif mai Chand 🌙 se aur Chand inna Jala ki subah tak Suraj ho gya😂😁😝", "Akele baithe hain Samjhdaron ki bhid main Ek Raye zaruri hai koi hamara sath den na den hamare loye to bas chai zaruri hai. 🍵 😋", "Pyar Andha hota hai.. Ghar wale aur Muhalle wale nhi 😏 Padke gye to kutayi hogi kutayi..🙄 😂", "Sirhane rakh ke teri Yaad mai Aaj kal roj sota hu 😍 kabhi hasa deti hai tu Mujhko 🙃 kabhi mai bahut Rota hu...🙁🫣", "Dil to karta hai kisi ke pyar mai gir jao 🤔 par Darr Lagta kahi haath pair tut gye to kya hoga mera 😥 vo to bhag Jaygi 😬😒", "Agar Apko koi pagal bole nah to sad 😔 mat hona.. bss baith kAr socHna ki ye Baat Leak kaise ho gyi yarr..🤔🫣", "Tumhare Dil mai Jagah hai kya 🥲 meko Bahar Thandi Lag rahi hai 🥶 andar ane do nah..🥹🙁", "Kaise Batao ki meri Zindagi me kya mol hai.. main Bukhar-e-Ishq hu tera aur tu meri Paracetamol 💊 hai..😁😝", "Han han tum Chand 🌙 ho Aasman pr to Kharbuja latak raha hai 😏🙄😬", "Akar dekho mere dil mai 😢 Jagah kam hai... lekin tum phir bhi fass fass ke Ajaogi,,,🙃🤭", "Badle Badle Se Lagte khair hai.🙄 Kya baat ho gyi 🤔 Shikayat Humse hai ya kisi aur se Mulakat Ho gyi..😆🫠🫣", "Agar tum mujhse Rothogi to batao kaise manunga🤔 akar tere paas kaan ke niche Lagaunga..👋😁😝", "Arz Kiye hai..✍️\n\n Munafikon ki Basti mai Apne dere hain 🏠 mere muh pr mere hai... tere muh pe tere hain...🖤💯", "Arz kiya hai..✍️\n\n Log bhi Kamal karte hain.. dost 🫂 dost bol kr Istemal karte hai....🖤💯", "Ke Zindagi ne mujhe Hazaar gham diye 😢 maine Liye hi nhi 😒 saaf inkar kar diye.😬😂", "Baby, Kaho tO Kiss Kar Lu", "Dur HaT Tere ko Aur Koi Kam Nhi Jb DeKho Bot Bot 😡 ShaDi KerLe Mujhsy 😉😋🤣", "Teri meri kahani Aj blue hai pani pani pani pani pani pani💦💧", "Kahani Suno !😔 Zubani suno !😔 Mujhe Bukhar Huwa Tha'w 😔) Ek So Chaar Huwa tha'w 🥺💔", "Aaj kal Log Dua 🤲 me kam😐 Chugli me Zayda Yaad Rakhte Hai😁😛", "haiy ma sadky jawa teri masoom Shakal phe 😁", "Kisi ki bhi babu sona baby bachha ki Shakal Chand 🌙 se nhi milti hai, to Kirpya Apni Aukat m rahe😏😆", "kya bot bot bot Laga Rakha hai 😀", "Bolo Meri Jaan Tum Mujhse Pyar Karte Ho Na 🙈💋💋", "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 ", "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝", "Ek Ladki ne mere dil ke 1000 tukde kar diye😢aur ab mere dil ka har 1 tukda alag alag ladkio se pyar krta hai😔🥹", "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺", "Sirf 10% Ladkiya dhup se jalti hai,🙄Baki ki 90% ladkiya ek dusre se Jalti hai😜🤣", "Bs kro tharki kitni Bot Bot kro gye🙂💔", "Suna hai aap ki muskurahat par har koi mrta 😳 hai Zara sa time nikaal kar ao chooha 🐀 marvana hai...🙃🤣", "Agar Ladkiya InstaGram, Facebook, WhatsApp, pr nah ho to ye bhi Nahi Chalega..😜🤭", "Crush 😍 ho ya Brush Waqt pr Badal Lena Chahiye 🙃 wrna Dil ho ya Dant tut hi Jata hai,..🤭💔🤯", "Middle Class Ladko ke sapne, aur Urfi jabed ke Kapde kabhi bhi Pure Nahi Hote🤣🫣", "Tanki m tanki - tanki m Pani 💦 Babu Shona ke Chakkar m Don't waste 🗑 your Jawaani..😝🫣", "Mitha Aam 🥭 kabhi kachcha nahi 😐 hota, aur Babu Shona wala pyar kabhi sachcha nahi hota..😆😆", "Boyfriend Ullu 🦉 ki tarah hota hai use Girlfriend ki Sari Achhayi Sirf Raat ko hi nazar aati hai😬🤐" , "Log Raat m apni Janu se Ladd rahe hote 😐 aur m machharon se Ladd raha hota hu😪" ,"Koi Ladki agar kahe Net slow tha samjh jao vo Bartan dho rahi thi🤐😏😆" ,"Humsafar Khubsurat Nahi Sachha Hona Chahiye🫂🥰 Uske baad Phir Bachha 👶🏻 hona chahiye😂😂😂", "Mark Zuckerberg (Zuku) ke Mutabik Facebook couples message pe hi Suhagraat Mana Lete hai 🤐🤣 ", "Har Chiz se Dil se uth gya 😢 siwye Shadi ke😒", "Phool hai Gulab 🌹 ka Nasha hai Sharab Ka 🥂 Agar Ijazat ho to Shohar bann jao main Apka🙃🫣", "Jab Usne Kaha tumhari Soch hee Ghatiya Hai 😒 main us waqt bhi usi ko soch Raha tha😕💔", "Subah se mera blood pressure low ho rhaa hai 😒 Aap mujhe thora purpose kar dogi🤗🫣", "Halwa Puri Hoti hai, Wel Puri Hoti, Pani Puri Hoti, ye nind Puri Q nhi Hoti.....😐😪 ", "Tel Bina Samosa Pakk nhi Sakta Rishtedaron ke Taano se koi bach nhi sakta😬😬", "Chai ke Cup 🍵 se uthe dhu,en main teri Shakal Nazar aati hai., aur tere khayalon me kho kar aksar meri Chai 🍵 thandi Ho jati hai...🫰🏻😒", "Kuxx Bachhe itne Cute 😍 hote unko dekhte hee unki mammy ko bhi dekhne ko dil krta hai....🧐🤓", "Facebook Ka Pyar Aur Washroom ki Chappal kabhi kisi 1 ki nhi hoti......😬🫣 ", "Naraz BiBi se Bahes krna aisa hai, Jaise Dadi ko I_Phone 📱 ke function Samjhana😬🥹", "Mohabbat Karne se Pahle Paise kama lena wrna Apki Mohabbat koi aur khareed le Jayga😐🤓", "Agar logon ke Dilon m Jinda rahna chahte hai na to unse Paise 💸 Udhaar le len😂🤭😬", "Aao Meri Jaan main tumhe Facebook ki Tang Galiyon se utha ke WhatsApp ki Khuli Fizaon me Le Chalu🤗🙃🎉", "Chamcha giri *EK aisa job hai, jisme na Salary milti hai aur naa he Izzat lekin Aksar log Ise Bade shok se karte hai.....😬😹", "Tum Mujhe Apna Bana ke Rakh lo🤗 Sabne mujhe tumhara samjh ke chhor diya😒😪", "Behti huyi Hawa ko mod lun 🙃 Jee Chahta hai tere sare Dant 🦷 tod dun..😒😾", "Uske Ishq Ko uski Shadi pe Dafna Aaya hun 💔😪 Khali Lifafa de kr Biryani Kha Ayaa hun..😜🤣", "Shardiyon main Sabse Mushkil kaam ... Bistar se uth kr washroom tak jana..😂🧐", "Jab bhi koi Ladki dekhu mera Dil dewana bole... Le Le Le Le mera Number Le Le 😒😐", "Shardiyan Aane wali hai, Ab Din chote aur Khandan Bade ho jyenge🤐😂", "Cigarette 🚬 Jalayi thi ke teri Yaad nah Sataye MaGar Kambhat Dhuyen ne Teri Tasweer Bana Daali....🙃🫢", "Pyar krna Gunah nhi 😒 hai... Lekin Gadi ki Pichli seat pr krna ghalt baat hai😬😐", "Maine Tale 🔐 se sikha hai wafa ka hunar tut jata h magar Chavi 🗝 nhi 😒 badlta...😪", "Agar Shatranj main Wajir aur Zindagi m Zameer marr Jaye to Khel Khatam💯🖤🤞", "Apko dekh kar aisa lag rha Apne Duniya ki Sari Gandi filmen dekh rakhi hai🤐😜🤣", "Bachpan ke Din kitne achhe Hote the, Aunty khud bola kr kahti thi jao beta meri beti ke sath khel lo 🤗 ab koi nhi bolta..😔😑", "Plz Apni Apni GF ki Qadar🙏 Kren, Jo 1 Kapde Lene ke Liye puri Dukan ka Satiyanas kar deti hai....😂 Unhone Apko Pasnd kiya hai..😐😬", "Ladkio se Baat nah Bane to Shadi Suda pr line Marte hain,  Hum Ladke hai Janab Haar Kaha Mante hai😏😐😜", "Vo Ishq ki Raahon main Kamaal Karti hai 🙃 I LOVE YOU Likhti Hai 🤗 Aur Send to All karti hai...😬😹", "Peero aur Baba ko Paise de kar Mahboob ko Qaboo main krne Bajaye Direct Paise Mohboob ko den aur Mahboob Qaboo main kr len..🤣😳", "Duniya main aisi koi Shardi nhi bani jo Shadi main jati huye Ladkio ko Jacket Pahna Sake..🤯😹", "Tum par Marne se Achha Hai ...... Main kisi Haadse main mar Jata..🙃💔", "Mujhe Shadi ki koi jaldi nhi 😒 hai.. Lekin Shadi ki Pahli Raat jo Bate hoti hai nah vo Bate kahi nah bhool jaon...😪🤩🤯", "Yar ye jo Hamare Pair ki jo chhoti bali ungli hai🙄 kya ye Table aur Darwaze se Takdane ke liye Bani hai..😔 Kion itna Takdati hai😒🙄", "Email 📧 Jitni bhi Tarkki kar le Lekin Apko sabse pahle Khabar Female hi degi..😁🤭", "Aap Relationship to Kro Breakup to khud hii ho Jayegi..🤭🙂", "Kisi ko Mahboob nah mila aur Kisi ko Mahboob kharidne ke Paise nhi Huye..😹🙉", "Mujhe ek Ladki pansd aane hee wali thi ke usne Sandwich 🥪 Kha kr Plate Chatna suru kar diya..😔😟", "Dil aur Dimag ka bhi Saas aur Bahu wala Rishta Hota hai..😐 Dono ek dusre ki khushi main Kabhi khush nahi rahte... 🙃🙁", "Ek Tarfa Pyar Haar Raha hai 🙁 Khush Wahi Hai Jo Do Jagah Muh Maar Raha Hai...🙃🤞", "Single hone ka Ek Fayeda hai.. Single Logo ka sirf Hath dukhta hai... Dil 💔 nhi Dukhta 😝🫣😂", "Chakar arhy hein apki Ib me aa ke gir jaun>>🥺", "Mout ka farishta ya Mera  rishta....?🙂❤️", "Sab ko Loyal bnda chahiye to hum Dhokebaz kidhar jayen..,,?🥺💔", "Hai Tamna Hame TumhY Chhat sy Girayn🙂", "Suno👀\n\nKya tum mery leye surf kha kar muh sy bulbuly nikal skti ho🤌🙂", "Ghulabii Aankhe Jo terii dekhii Harami Yew Dill h0 Gya,,, 🤓🙂😆", "Mujhe 2 chizen Bahut tang Karti Hai, 🥹 Ek Apki Yaad Jo Aati Bahut Hai 😒 Dusri ye Light jo Jati Bahut hai...😞", "Arz Kiya hai..✍️🏻\n\nTeri Julfon ne har Jagah Hangama Macha Rakha Hai🙃 Kabhi Daal main, Kabhi Sabji main, Kabhi Roti main, Kabza Jama Rakha hai,,😒😓🙁", "Arz kiya hai..✍️🏻\n\n Taawiz Jaise Hote Hain kuch Log, 🤗 Taawiz Jaise hote hain Kuch Log,  Gale 🫂 milte hii Sifa mil jati hai ,,😍🙃", "Arz Kiye Hai..✍️🏻\n\n Choti si Zindagi Lamba sa Rasta...😐 Choti si Zindagi Lamba sa Rasta 😉 Mujhse Shadi kar Lo Apko Rab ka Wasta🥹😞", "Mujhe Kal hee Doctor 😢 ne Kaha hai Apke WhatsApp main Ladki ke number ki Kami hai....😓😕", "Tu Sath Hai mere, mera jahan Aawad hai,, Kahh do apne papa se ke yahi Aapka Damaad hai😮😂", "Rab ka diya hua Sab Kuchh hai🤗 bas ek Kambal meY Laat Marne wali Chahiye🥹😕", "Mujhse Shadi krke dekho Dil se kya Bed 🛌 se nhi Utarne dunga 😗🤗", "BiBi Hamesha sirf ek hEE Ghalti manti Apne Husband se Shadi karne ki🫢😂", "Relationship jo *So Cute* 😍 se suru hoti hai.. uski ending hoti hai *Dur Fatte Muh🤕🫢😅", "Sabko mil rahe hain Sharik-e-Hayat😓 aur hame mil rahe hain Log Vahiyat.😑🥲", "Yon to Kahne ko sab Bhai hote hai.. sath rahne se pata chalta ke inme kitne Kasayi Hote Hain..🙂🥲", "Tehri Baton ka Sidha sa Jawab 🫵🏻 main Badtamiz Meri Aadat Kharab..🙃🤗", "Soya hua Naseeb Jaag jaye Kash Koi Badmash Ladki mujhe le kar Bhag jaye🙃😆🫣", "Zindagi aur Maut ka kuchh pata nahi hai 😐 isliye Raat ko Sari Chat delete krke sona Chahiye 🙄 wrna log kahenge marhoom aise Dikhte to nahi the..🤔😶😹", "Mujhe Maut se Darr Nahi Lagta Kionki main Zindagi se Darr gya hun..🙃💔🥲", "Bura Waqt Batata hai ''' ki Achha Waqt Kiske Sath Ghuzarna Hai,,🙃😇", "Har kisi ko Safayi nah den 😐 bss Screenshot Sambhal kr Rakhen😂😉", "Tum Naraj Naraj se Lagte ho koi Tarkeeb Batao Manane ki..😌 Hum Zindagi Amaanat Rakh denge tum Qimat Batao Muskurane ki....🙃🤗😍", "Arz Kiya Hai.✍️🏻 \n\n Dekh Li Duniya ki Yaari.... Dekh li duniya ki Yaari..🫂 Sab Kamine Nikle Baari Baari....🫵💫🖤", "Pyar main 1 jhut ye bhi hai,. agar meri Shadi kahi aur ho bhi gyi na to tumhari jagah koi Nahi Le Sakta😐,,, Shadi ho gyi jagah ve Le Liya ab kya baki rhaa🤣🤔", "Pahli Mohabbat Hamesha Ghalt Shakhas hoti hai..🙃 Aur Dusri Mohabbat Hamesha Sahi Shakhas Se Ghalt Waqt par ho Jati hai....,🖤🫂", "Main Rojana AC ki hawa khane ATM Jata tha🥵 aur vo Pagli Paise wala samjh kar set ho gyi😆😐", "Roz Sochta hu Aaj degi kal degi 🤔 Mujhe Lagta hai ye Kishmat Sath nhi Degi😁🙃", "Jo jitna Tumhara hai tum bhi uske utne hee raho 🙂 Zayda Dil ki Ghulami main Izzat ki Nilami Ho Jati Hai... 💯🫰🏻", "Apne Bare main na kisi peer se pucho na kisi Farik se pucho 🤗 bass thori der Aankhen Band kro aur apne Zameer se pucho..🤐😐", "Arz kiya hai..✍️🏻\n\n Aye Zindagi Aa baith kahi Chai pite hai, tu bhi thak gyi hogi mujhe Bhagate Bhagate..🙃💔"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("️❤️ Good Night too darling 🥰", threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala Ni😤🙄", threadID);
   };

  
   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("esy na mujy tm dekho na 😒🥺 mitti m dafna dunga😝😆", threadID);
   };


  if ((event.body.toLowerCase() == "👅") || (event.body.toLowerCase() == "👅👅")) {
     return api.sendMessage("Teri Tharakpan khatam nahi hone waly hai😾 Jab ve tharki😂", threadID);
   };


  if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Teri Yeh Ungli Teri He Nak Me De Dunga Halkat 😒😂", threadID);
   };


if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Mat Roo mere Dil Chup Ho Ja ye to pyar m hota 🥺🙁", threadID);
   };

if ((event.body.toLowerCase() == "I am back") || (event.body.toLowerCase() == "i'm back")) {
     return api.sendMessage("WELCOME 🤗 BACK AND ENJOY THE GROUP", threadID);
   };
  
if ((event.body.toLowerCase() == "iam back") || (event.body.toLowerCase() == "am back")) {
     return api.sendMessage("WELCOME 🤗 BACK AND ENJOY THE GROUP", threadID);
   };
  
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("uper kiya kia hai amma ne chapal mara kia 🙄😈", threadID);
   };

if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "shaam")) {
     return api.sendMessage("✫𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧🌼 ko mention na karo wo busy hai jo kaam hai mujhe batao", threadID);
   };

if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("chashma hatawo na Sir kya Name Apka 😎😎", threadID);
   };
  
   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱🥱")) {
     return api.sendMessage("Abe alsi kahi ky yaha manhusiyt nah faila😡", threadID);
   };


   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("Papa ki barat me aya kya jo siti baja raha 😂😂", threadID);
   };


   if ((event.body.toLowerCase() == "💸") || (event.body.toLowerCase() == "💸💸")) {
     return api.sendMessage("Paisa Paisa krti hai kyu paisy pe tu marti hai 💍😁", threadID);
   };
        

   if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🥸🥸")) {
     return api.sendMessage("teri naak moti moti teri ankhein gol gol aisy na tu dekh mujhe kabool 😂😂", threadID);
   };

  
   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("Hyee Rona nai mela shona bacha idhel ao baklol 🥰😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("kbhi dant b saaf kr lia kro kitny gandy hai Ganny Insan😈", threadID);
   };
 
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("Muh seedha kr papite jaisy shakal waly😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("chal oye dramy baaz 😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Allah kry teri shadi churail se ho wo b moti bhains type churail 😈", threadID);
   };
  
  
   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("Idhar a mere seene se lag ja🥰😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("abe ja dhakkan sharma rahy😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("Bary halami ho bete😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("itna bhi kya sochna koi Patne waly to hai nhi 🤣❤️", threadID);
   };

  
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("hyee mera babu ummmmmmmmmawww 😘", threadID);
   };

  
   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Billi jaisa has rha hai baklol😹😹", threadID);
   };

  
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("🌊⚡Are Jangli Khota Zoo se bahar kaise..😳💨Agya tu firse Zoo m ja Bahar kya kar rha hai🙄😂↗↘••🏔️🍁", threadID);
   };

  
   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

  
    if ((event.body.toLowerCase() == "🫂") || (event.body.toLowerCase() == "🫂🫂")) {
     return api.sendMessage("Hug me baby 😜", threadID);
   };

  
    if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "👀👀👀")) {
     return api.sendMessage("kia hai kiss dun kia 😘", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga😡🥹", threadID);
   };
 
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "by")) {
     return api.sendMessage("BYe Allah Hafiz ❤️ ", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0 || (event.body.indexOf("BOT")) == 0)) {
    var msg = {
      body: `𒄬 𓆩๛⃝ ${name}‣᭄𓆪 𓆩𑁍𓆪🩶🪽\n\n\n𒄬𒄬𒄬❋┈┈┈•✦🩷✦•┈┈┈❋𒄬𒄬𒄬\n \n${rand}\n\n
      𝗖𝗿𝗲𝗱𝗶𝘁𝘀:𒁍≛⃝𝙎𝙝𝙖𝙖𝙣 𝙆𝙝𝙖𝙣 𝙆 ❥||ㅎ
      𒄬𒄬𒄬❋┈┈┈•✦🩶✦•┈┈┈❋𒄬𒄬𒄬`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
