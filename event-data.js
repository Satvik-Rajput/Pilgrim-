var TAG_MAP = {
  "Wish fulfillment": { icon: "Pilgrim icons new/Property 1=Wish fulfillment.png", heading: "Helps in Wish fulfillment" },
  "Financial security": { icon: "Pilgrim icons new/Property 1=Financial security.png", heading: "Helps in Financial prosperity" },
  "Marriage blessing": { icon: "Pilgrim icons new/Property 1=Marriage blessing.png", heading: "Helps in Marriage blessings" },
  "Fertility blessing": { icon: "Pilgrim icons new/Property 1=Fertility blessing.png", heading: "Helps in Fertility blessings" },
  "Career growth": { icon: "Pilgrim icons new/Property 1=Career growth.png", heading: "Helps in Career growth" },
  "Education": { icon: "Pilgrim icons new/Property 1=Education.png", heading: "Helps in Education & wisdom" },
  "Obstacle removal": { icon: "Pilgrim icons new/Property 1=Obstacle removal.png", heading: "Helps in Obstacle removal" },
  "Dosha relief": { icon: "Pilgrim icons new/Property 1=Dosha relief.png", heading: "Helps in Karma & dosha relief" },
  "Moksha": { icon: "Pilgrim icons new/Property 1=Moksha.png", heading: "Helps in Moksha & liberation" },
  "Mental peace": { icon: "Pilgrim icons new/Property 1=Mental peace.png", heading: "Helps in Mental peace" }
};

var EVENTS = [
  {
    id: 0,
    title: "Ugadi Festival at Sri Chamundeshwari Temple",
    temple: "Sri Chamundeshwari Temple",
    date: "20 Mar 2026, Friday",
    location: "Mysuru, Karnataka",
    image: "Pilgrim images/Chamundeshwari temple Maysuru-optimized.webp",
    travelHrs: 3,
    mapDist: "150 km away",
    tags: [
      { name: "Wish fulfillment", body: "Goddess Chamundeshwari is believed to grant sincere wishes \u2014 devotees offer coconuts and kumkum seeking her powerful blessings for desires close to their heart." },
      { name: "Financial security", body: "The Ugadi festival marks new beginnings \u2014 devotees seek Chamundeshwari\u2019s blessings for financial stability and abundance in the coming year." }
    ],
    about: "Perched atop Chamundi Hills in Mysuru, Sri Chamundeshwari Temple is one of the 18 Maha Shakti Peethas. The goddess Chamundeshwari, the fierce form of Durga, slayed the buffalo demon Mahishasura here \u2014 the legend that gave Mysuru its name. Ugadi, the Telugu and Kannada New Year, is celebrated with grand processions, special poojas, and the traditional Ugadi Pachadi symbolizing life\u2019s six flavors. Thousands gather at dawn for the deity\u2019s special alankara and to seek blessings for a prosperous new year."
  },
  {
    id: 1,
    title: "Rama Navami at Kodandarama Temple",
    temple: "Kodandarama Temple",
    date: "26 Mar 2026, Thursday",
    location: "Chikmagalur, Karnataka",
    image: "Pilgrim images/Kothanda_Ramar_temple,_Hiremagalur_03-optimized.webp",
    travelHrs: 6,
    mapDist: "250 km away",
    tags: [
      { name: "Marriage blessing", body: "Lord Rama and Sita\u2019s eternal love is celebrated here. Couples seek blessings for a harmonious married life, and the Kalyanam ceremony is especially auspicious." }
    ],
    about: "Nestled amidst the Western Ghats near Chikmagalur, Kodandarama Temple is an ancient shrine dedicated to Lord Rama in his warrior form holding the Kodanda bow. Legend holds that Rama himself rested here during his search for Sita. On Rama Navami, the temple comes alive with devotional chanting, Kalyanam ceremonies reenacting Rama-Sita\u2019s divine wedding, and a magnificent procession through the surrounding hills. The misty mountain setting adds a mystical charm to this deeply spiritual celebration of Lord Rama\u2019s birth."
  },
  {
    id: 2,
    title: "Panguni Uthiram at Kapaleeshwarar Temple",
    temple: "Kapaleeshwarar Temple",
    date: "28 Mar 2026, Saturday",
    location: "Chennai, Tamil Nadu",
    image: "Pilgrim images/Kapaleeshwarar Temple Chennai-optimized.webp",
    travelHrs: 6,
    mapDist: "350 km away",
    tags: [
      { name: "Marriage blessing", body: "The divine wedding of Shiva and Parvati during Panguni Uthiram blesses couples with enduring marital harmony and togetherness." },
      { name: "Fertility blessing", body: "Parvati herself is said to have worshipped Shiva here. Couples seeking the blessing of children find deep solace in the goddess\u2019s grace at this ancient shrine." }
    ],
    about: "Standing at the heart of Mylapore in Chennai, Kapaleeshwarar Temple is a magnificent Dravidian masterpiece dedicated to Lord Shiva. Ancient Tamil literature references this temple, making it over a thousand years old. During Panguni Uthiram, the grand 10-day Brahmotsavam culminates with a spectacular celestial wedding of Shiva and Parvati. Devotees throng the streets to witness the decorated deities on towering chariots, accompanied by traditional Nadaswaram music and sacred rituals that have continued unbroken for centuries."
  },
  {
    id: 3,
    title: "Chariot Festival at Chennakeshava Temple",
    temple: "Chennakeshava Temple",
    date: "31 Mar 2026, Tuesday",
    location: "Belur, Karnataka",
    image: "Pilgrim images/Chennakeshava Temple Belur-optimized.webp",
    travelHrs: 5,
    mapDist: "220 km away",
    tags: [
      { name: "Career growth", body: "Lord Chennakeshava, the handsome Vishnu, is believed to bless devotees with professional success and the clarity to make wise career decisions." },
      { name: "Education", body: "The temple\u2019s intricate carvings depict stories of knowledge and wisdom \u2014 students and scholars seek inspiration from this UNESCO-worthy masterpiece." }
    ],
    about: "Built in 1117 AD by Hoysala King Vishnuvardhana, Chennakeshava Temple in Belur is an architectural jewel celebrated for its extraordinarily detailed stone carvings. Every inch of its walls tells stories from the Ramayana, Mahabharata, and Bhagavata Purana. The annual Chariot Festival sees the deity paraded through Belur\u2019s streets on an elaborately decorated wooden rath, accompanied by Veda chanting and folk music. Devotees believe pulling the chariot rope grants divine merit and spiritual fulfillment for the year ahead."
  },
  {
    id: 4,
    title: "Hanuman Jayanti at Namakkal Anjaneyar Temple",
    temple: "Namakkal Anjaneyar Temple",
    date: "02 Apr 2026, Thursday",
    location: "Namakkal, Tamil Nadu",
    image: "Pilgrim images/Namakkal Anjaneyar Temple, Namakkal, TN-optimized.webp",
    travelHrs: 6,
    mapDist: "350 km away",
    tags: [
      { name: "Obstacle removal", body: "Lord Hanuman\u2019s immense strength removes all obstacles. Devotees recite Hanuman Chalisa here, believing the towering deity clears every hurdle in their path." }
    ],
    about: "Carved into the face of a massive rock hill, Namakkal Anjaneyar Temple houses an awe-inspiring 18-foot-tall standing statue of Lord Hanuman. This ancient rock-cut marvel is believed to be self-manifested, with Hanuman appearing to protect Namakkal from a demon\u2019s wrath. On Hanuman Jayanti, the entire town resonates with Hanuman Chalisa recitals and special abhishekams. The sight of thousands of devotees offering prayers before the towering Anjaneyar, adorned with vermillion and garlands, is truly unforgettable."
  },
  {
    id: 5,
    title: "Karaga Festival at Dharmaraya Swamy Temple",
    temple: "Dharmaraya Swamy Temple",
    date: "02 Apr 2026, Thursday",
    location: "Bangalore, Karnataka",
    image: "Pilgrim images/Dharmaraya Swamy Temple Bangalore-optimized.webp",
    travelHrs: 2,
    mapDist: "20 km away",
    tags: [
      { name: "Financial security", body: "Dharmaraja, the embodiment of righteousness, blesses devotees who walk the honest path with stable finances and lasting prosperity." },
      { name: "Mental peace", body: "The ancient Karaga tradition brings a deep sense of community calm \u2014 witnessing this 800-year-old ritual is said to dissolve stress and restore inner balance." }
    ],
    about: "One of Bangalore\u2019s oldest temples, Dharmaraya Swamy Temple dates back to the time of the Ganga dynasty and is dedicated to Dharmaraja, the eldest Pandava. The Karaga Festival is Bangalore\u2019s oldest and most iconic celebration, a nine-day spectacle that transforms the city streets. A priest carries the sacred Karaga \u2014 a towering floral pyramid \u2014 through the old city, guarded by sword-wielding Veerakumaras. This living tradition has continued for over 800 years, making it a cultural treasure of Karnataka."
  },
  {
    id: 6,
    title: "Akshaya Tritiya at Kukke Subramanya Temple",
    temple: "Kukke Subramanya Temple",
    date: "19 Apr 2026, Sunday",
    location: "Subramanya, Karnataka",
    image: "Pilgrim images/Kukke Subramanya Temple-optimized.webp",
    travelHrs: 8,
    mapDist: "260 km away",
    tags: [
      { name: "Financial security", body: "Akshaya Tritiya means \u2018imperishable prosperity.\u2019 Offerings made at this sacred shrine on this day are believed to multiply manifold and bring lasting wealth." },
      { name: "Wish fulfillment", body: "Lord Subramanya is believed to fulfill wishes of devotees who perform the sacred Sarpa Samskara ritual with sincere devotion at this forest shrine." }
    ],
    about: "Deep in the Western Ghats, Kukke Subramanya Temple is the foremost pilgrimage site for Sarpa Dosha Nivarana in India. Lord Subramanya (Kartikeya) is worshipped here as the serpent god, and the temple sits at the confluence of two rivers amidst lush tropical forests. On Akshaya Tritiya, devotees perform Sarpa Samskara rituals believed to bring eternal prosperity \u2014 as the name \u2018Akshaya\u2019 means imperishable. The festival atmosphere, combined with the pristine natural surroundings, makes this a deeply rejuvenating spiritual experience."
  },
  {
    id: 7,
    title: "Basava Jayanti at Kudalasangama Temple",
    temple: "Kudalasangama Temple",
    date: "20 Apr 2026, Monday",
    location: "Bagalkot, Karnataka",
    image: "Pilgrim images/Kudalasangama Temple-optimized.webp",
    travelHrs: 11,
    mapDist: "520 km away",
    tags: [
      { name: "Dosha relief", body: "At the holy confluence of two rivers, devotees perform rituals to wash away karmic debts and doshas, finding spiritual purification in Basaveshwara\u2019s sacred land." }
    ],
    about: "At the sacred confluence of the Krishna and Malaprabha rivers, Kudalasangama is where the great 12th-century saint Basaveshwara attained Aikya with Lord Shiva. This ancient Sangama \u2014 meaning \u2018meeting point\u2019 \u2014 holds immense spiritual significance for the Lingayat community. On Basava Jayanti, lakhs of devotees gather to honor Basaveshwara\u2019s revolutionary teachings of equality and devotion. Grand processions, philosophical discourses, and mass prayers mark this celebration of one of India\u2019s greatest social reformers."
  },
  {
    id: 8,
    title: "Narasimha Jayanti at Ahobilam Temple",
    temple: "Ahobilam Temple",
    date: "08 May 2026, Friday",
    location: "Ahobilam, Andhra Pradesh",
    image: "Pilgrim images/Ahobilam Temple-optimized.webp",
    travelHrs: 8,
    mapDist: "450 km away",
    tags: [
      { name: "Obstacle removal", body: "Lord Narasimha, the fiercest protector among Vishnu\u2019s avatars, destroys all obstacles and enemies of devotees who surrender with genuine faith." },
      { name: "Mental peace", body: "The pristine Nallamala forest setting and the powerful Narasimha presence bring profound peace to troubled minds seeking divine solace." }
    ],
    about: "Nestled in the Nallamala Hills, Ahobilam is the sacred site where Lord Vishnu appeared as Narasimha \u2014 the fierce half-man, half-lion avatar \u2014 to protect his devotee Prahlada. The temple complex features nine shrines, each marking a spot associated with the Narasimha legend. On Narasimha Jayanti, elaborate rituals begin at dusk and continue past midnight, marking the exact twilight hour of the Lord\u2019s divine appearance. Devotees trek through forested hills to visit all nine Narasimha forms, seeking protection and courage."
  },
  {
    id: 9,
    title: "Vaikasi Visakam at Palani Murugan Temple",
    temple: "Palani Murugan Temple",
    date: "30 May 2026, Saturday",
    location: "Palani, Tamil Nadu",
    image: "Pilgrim images/Vaikasi Visakam at Palani Murugan Temple-optimized.webp",
    travelHrs: 8,
    mapDist: "410 km away",
    tags: [
      { name: "Education", body: "Lord Murugan, the divine teacher who instructed even Brahma, blesses seekers of knowledge with sharp intellect and academic excellence." },
      { name: "Career growth", body: "Lord Dandayudhapani, who renounced worldly attachments, paradoxically blesses devotees with clarity and success in their professional pursuits." }
    ],
    about: "Palani Murugan Temple sits atop a 450-foot hill in Tamil Nadu and is one of the six sacred abodes of Lord Murugan. The deity here, Dandayudhapani, is a form of Murugan who renounced material wealth and stands with just a staff. Vaikasi Visakam celebrates the birth of Lord Murugan with a spectacular festival featuring chariot processions and kavadi dances. Thousands climb the hill barefoot as an act of devotion, and the temple\u2019s ancient herbal idol is believed to have miraculous healing properties."
  },
  {
    id: 10,
    title: "Rath Yatra at ISKCON Temple",
    temple: "ISKCON Temple",
    date: "27 Jun 2026, Saturday",
    location: "Bangalore, Karnataka",
    image: "Pilgrim images/Rath Yatra at ISKCON Temple-optimized.webp",
    travelHrs: 2,
    mapDist: "15 km away",
    tags: [
      { name: "Wish fulfillment", body: "Lord Jagannath, the Lord of the Universe, is known for fulfilling the heartfelt prayers of devotees who join the sacred Rath Yatra procession." }
    ],
    about: "ISKCON Bangalore, one of the largest Krishna temples in the world, is a stunning modern architectural marvel on Hare Krishna Hill. The temple draws millions annually with its spiritual programs, cultural events, and the famous Akshaya Patra mid-day meal initiative. During Rath Yatra, magnificent chariots carrying deities of Jagannath, Balabhadra, and Subhadra are pulled through Bangalore\u2019s streets by thousands of joyful devotees. This grand re-enactment of Krishna\u2019s journey from Gokul to Mathura fills the city with devotional music and celebration."
  },
  {
    id: 11,
    title: "Aadi Krithigai at Arunachaleswarar Temple",
    temple: "Arunachaleswarar Temple",
    date: "21 Jul 2026, Tuesday",
    location: "Tiruvannamalai, Tamil Nadu",
    image: "Pilgrim images/Aadi Krithigai at Arunachaleswarar Temple-optimized.webp",
    travelHrs: 5,
    mapDist: "250 km away",
    tags: [
      { name: "Moksha", body: "Circumambulating Arunachala during Krithigai is believed to break the cycle of birth and death, guiding the soul toward ultimate liberation." },
      { name: "Education", body: "The spiritual wisdom traditions of Tiruvannamalai, home to Ramana Maharshi\u2019s teachings, inspire seekers of true knowledge and self-inquiry." }
    ],
    about: "At the foot of Arunachala Hill, Arunachaleswarar Temple is revered as the Fire element among Shiva\u2019s Pancha Bhoota Sthalams. A famous legend says Shiva once appeared here as an endless pillar of fire between Brahma and Vishnu, and that blazing jyoti later cooled into Arunachala Hill itself. Aadi Krithigai honors Lord Murugan\u2019s star Krithigai during the Tamil month of Aadi, with special abhishekams and processions. The hill is lit with thousands of oil lamps, creating an ethereal glow visible for miles."
  },
  {
    id: 12,
    title: "Varalakshmi Vratham at Kanaka Durga Temple",
    temple: "Kanaka Durga Temple",
    date: "28 Aug 2026, Friday",
    location: "Vijayawada, Andhra Pradesh",
    image: "Pilgrim images/Varalakshmi Vratham at Kanaka Durga Temple-optimized.webp",
    travelHrs: 12,
    mapDist: "600 km away",
    tags: [
      { name: "Financial security", body: "Goddess Kanaka Durga, the \u2018Golden Durga,\u2019 is specifically worshipped for wealth and material abundance. Her Varalakshmi form grants boons of prosperity to devoted families." },
      { name: "Education", body: "Goddess Kanaka Durga in her Saraswati form blesses students and scholars \u2014 many visit before exams seeking divine support for academic success." }
    ],
    about: "Perched on Indrakeeladri Hill overlooking the Krishna River, Kanaka Durga Temple in Vijayawada is one of the most revered Shakti Peethas in South India. The goddess is worshipped in eight powerful forms across the year, with Varalakshmi being the boon-granting form. During Varalakshmi Vratham, married women perform elaborate poojas seeking the goddess\u2019s blessings for their family\u2019s prosperity and well-being. The hilltop temple offers breathtaking views of the Krishna River, and the festival draws over a million devotees."
  },
  {
    id: 13,
    title: "Krishna Janmashtami at Udupi Sri Krishna Temple",
    temple: "Udupi Sri Krishna Temple",
    date: "04 Sep 2026, Friday",
    location: "Udupi, Karnataka",
    image: "Pilgrim images/Chennakeshava Temple Belur-optimized.webp",
    travelHrs: 8,
    mapDist: "400 km away",
    tags: [
      { name: "Education", body: "Krishna revealed the Bhagavad Gita\u2019s supreme wisdom. Madhvacharya\u2019s seat of learning blesses students and seekers with divine knowledge and intellectual clarity." }
    ],
    about: "Founded by the 13th-century saint Madhvacharya, Udupi Sri Krishna Temple is uniquely famous for worshipping Lord Krishna through a latticed window called the Navagraha Kindi. Legend says a low-caste devotee named Kanakadasa, denied entry, prayed so intensely that the temple wall cracked to reveal Krishna\u2019s face. On Janmashtami, the midnight celebration of Krishna\u2019s birth features special abhishekams, Yakshagana performances, and the iconic Paryaya tradition. The temple\u2019s divine prasadam and the sacred Madhwa Sarovar tank make this pilgrimage deeply fulfilling."
  },
  {
    id: 14,
    title: "Brahmotsavam at Tirumala Venkateswara Temple",
    temple: "Tirumala Venkateswara Temple",
    date: "18 Sep 2026, Friday",
    location: "Tirupati, Andhra Pradesh",
    image: "Pilgrim images/Ahobilam Temple-optimized.webp",
    travelHrs: 6,
    mapDist: "250 km away",
    tags: [
      { name: "Moksha", body: "Lord Venkateswara descended to Tirumala to liberate souls in the Kali Yuga. Devotees believe a pilgrimage here accelerates the journey toward spiritual freedom." },
      { name: "Education", body: "The Tirumala hills are a center of Vedic learning \u2014 Lord Venkateswara blesses seekers of knowledge with divine wisdom and academic success." },
      { name: "Career growth", body: "Millions of professionals offer their first salary and seek career blessings here, trusting Lord Venkateswara to guide their professional journey." }
    ],
    about: "Tirumala Venkateswara Temple, set atop the seven hills of Tirumala, is the world\u2019s most visited and wealthiest Hindu temple. Lord Venkateswara \u2014 an incarnation of Vishnu \u2014 is believed to have appeared here to save humanity during the Kali Yuga. The annual Brahmotsavam is a nine-day grand celebration with the deity paraded on unique celestial vahanas each day, from Garuda to Suryaprabha. Over a million devotees witness this spectacle, making it one of the largest religious gatherings in the world."
  },
  {
    id: 15,
    title: "Navratri Festival at Chamundeshwari Temple",
    temple: "Chamundeshwari Temple",
    date: "17 Oct 2026, Saturday",
    location: "Mysuru, Karnataka",
    image: "Pilgrim images/Chamundeshwari temple Maysuru-optimized.webp",
    travelHrs: 3,
    mapDist: "150 km away",
    tags: [
      { name: "Marriage blessing", body: "The goddess who conquered evil blesses devotees with the strength for lasting relationships. Navratri celebrations here are especially auspicious for marital harmony." },
      { name: "Financial security", body: "The nine nights of worship invoke Lakshmi, the goddess of wealth \u2014 Navratri at Chamundi Hills is believed to open doors to financial abundance." }
    ],
    about: "During Navratri, Chamundeshwari Temple atop Chamundi Hills becomes the spiritual epicenter of the legendary Mysuru Dasara celebrations. The nine nights honor the goddess\u2019s battle with Mahishasura, culminating in the grand Vijayadashami procession. The royal palace is illuminated with 100,000 lights, and a golden howdah carrying the deity\u2019s idol is paraded through the city streets. This 400-year-old tradition, started by the Wodeyar kings, remains one of India\u2019s most magnificent festivals and draws visitors worldwide."
  },
  {
    id: 16,
    title: "Deepavali Lakshmi Puja at Ashtalakshmi Temple",
    temple: "Ashtalakshmi Temple",
    date: "10 Nov 2026, Tuesday",
    location: "Chennai, Tamil Nadu",
    image: "Pilgrim images/Kapaleeshwarar Temple Chennai-optimized.webp",
    travelHrs: 6,
    mapDist: "350 km away",
    tags: [
      { name: "Financial security", body: "The eight forms of Lakshmi together represent complete prosperity. Deepavali puja here invokes every dimension of abundance \u2014 wealth, health, courage, and wisdom." }
    ],
    about: "Ashtalakshmi Temple on the shores of Elliott\u2019s Beach in Chennai is dedicated to the eight forms of Goddess Lakshmi. Built in a unique multi-tiered design resembling a chariot, each floor enshrines a different form of Lakshmi representing prosperity, courage, knowledge, and more. During Deepavali, the temple glows with thousands of oil lamps as devotees perform special Lakshmi Puja seeking abundance and light. The ocean breeze, the sound of temple bells, and the golden lamp-lit corridors create an extraordinary spiritual atmosphere."
  },
  {
    id: 17,
    title: "Karthigai Deepam at Arunachaleswarar Temple",
    temple: "Arunachaleswarar Temple",
    date: "24 Nov 2026, Tuesday",
    location: "Tiruvannamalai, Tamil Nadu",
    image: "Pilgrim images/Aadi Krithigai at Arunachaleswarar Temple-optimized.webp",
    travelHrs: 5,
    mapDist: "250 km away",
    tags: [
      { name: "Moksha", body: "The Maha Deepam fire on Arunachala\u2019s summit symbolizes Shiva\u2019s infinite light that dissolves ignorance and guides souls toward ultimate liberation and eternal peace." },
      { name: "Education", body: "The light of Karthigai Deepam symbolizes the illumination of knowledge \u2014 devotees believe witnessing the Maha Deepam dispels the darkness of ignorance." }
    ],
    about: "Karthigai Deepam at Arunachaleswarar Temple is one of South India\u2019s most spectacular festivals. The celebration honors the legend of Shiva manifesting as an infinite column of fire atop Arunachala Hill. On the main evening, a massive fire beacon \u2014 the Maha Deepam \u2014 is lit on the summit and can be seen from over 30 kilometers away. Millions of devotees circumambulate the 14-kilometer Girivalam path around the hill, with every home, shop, and street illuminated by thousands of flickering oil lamps."
  },
  {
    id: 18,
    title: "Padmavathi Thayar Chariot Festival at Padmavathi Temple",
    temple: "Padmavathi Temple",
    date: "13 Dec 2026, Sunday",
    location: "Tiruchanur (Tirupati), Andhra Pradesh",
    image: "Pilgrim images/Varalakshmi Vratham at Kanaka Durga Temple-optimized.webp",
    travelHrs: 6,
    mapDist: "250 km away",
    tags: [
      { name: "Marriage blessing", body: "Goddess Padmavathi is the divine consort who blesses couples with love, understanding, and harmony. Her grace ensures lasting marital bonds and family well-being." },
      { name: "Fertility blessing", body: "Goddess Padmavathi, the divine mother, is especially revered by couples seeking the blessing of children and a growing, joyful family." }
    ],
    about: "Just 5 kilometers from Tirumala, Padmavathi Temple in Tiruchanur is the abode of Goddess Padmavathi \u2014 the consort of Lord Venkateswara. It is traditional to visit this temple before ascending Tirumala, as devotees believe seeking the goddess\u2019s blessings first ensures Venkateswara\u2019s complete grace. The annual Chariot Festival features the beautifully adorned deity on a towering wooden chariot, pulled through flower-strewn streets. The temple\u2019s serene ambiance and the goddess\u2019s famously compassionate gaze make this pilgrimage a deeply moving experience."
  },
  {
    id: 19,
    title: "Vaikunta Ekadashi Festival at Ranganathaswamy Temple",
    temple: "Ranganathaswamy Temple",
    date: "30 Dec 2026, Wednesday",
    location: "Srirangam, Tamil Nadu",
    image: "Pilgrim images/Namakkal Anjaneyar Temple, Namakkal, TN-optimized.webp",
    travelHrs: 7,
    mapDist: "350 km away",
    tags: [
      { name: "Moksha", body: "Passing through the Paramapada Vasal on Vaikunta Ekadashi is believed to be a direct gateway to moksha \u2014 spiritual liberation from the cycle of rebirth." },
      { name: "Education", body: "Srirangam has been a center of Sri Vaishnavism learning for millennia \u2014 Lord Ranganatha\u2019s presence inspires deep philosophical inquiry and wisdom." }
    ],
    about: "Ranganathaswamy Temple in Srirangam is the largest functioning Hindu temple in the world, sprawling across 156 acres with seven magnificent prakarams. Lord Ranganatha \u2014 Vishnu reclining on the cosmic serpent Adishesha \u2014 is the presiding deity of this 2,000-year-old temple. On Vaikunta Ekadashi, the sacred Paramapada Vasal (Gate to Heaven) opens at dawn, and passing through it is believed to guarantee moksha. Over a million pilgrims queue through the night for this once-a-year spiritual gateway, making it Tamil Nadu\u2019s grandest temple festival."
  }
];
