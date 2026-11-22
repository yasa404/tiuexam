/* Week 6: Transmission Media II: unguided media (combined Week 5 & 6 PDF, pages 26-35, plus outcomes on page 4). */
EC.lecture(6, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A: choose the correct option ---------- */
  // Unguided basics (p27)
  mcq(27, 'e', "Unguided transmission means transmitting electromagnetic signals…",
    ["without using a physical conductor", "through copper twisted pairs and coax", "through a glass core surrounded by cladding", "only inside a single building or room"],
    "Slide 27.");
  mcq(27, 'e', "Unguided signals propagate using…",
    ["free-space propagation", "differential signaling", "total internal reflection", "token passing"],
    "Slide 27.");
  mcq(27, 'm', "Through which of these can unguided signals propagate, according to the slides?",
    ["Air, water or the vacuum of outer space", "Only copper wire and coaxial cable", "Only glass fiber with a cladding layer", "Only the air inside buildings and rooms"],
    "Slide 27.");
  mcq(27, 'm', "Because unguided media are unbounded, who can receive a broadcast signal?",
    ["Anyone within transmission range who has an antenna", "Only the device at the other end of the cable", "Only devices with a MAC address on the same switch", "Only the sender"],
    "Slide 27.");
  mcq(27, 'h', "Why is unguided transmission naturally less secure than guided transmission?",
    ["The signal is broadcast into open air, so anyone in range with an antenna can receive it", "Wireless signals cannot be encrypted, so they are always readable", "Wireless signals carry no source or destination addresses, so the receivers cannot be identified or protected", "Wireless signals always travel through fiber, which anyone can tap"],
    "Slides 27 and 30: unbounded nature; security is low and needs strong encryption such as WPA3.");
  // Why wireless & spectrum (p28)
  mcq(28, 'e', "Which is a reason to go wireless given on the slides?",
    ["Mobility", "Complete immunity to weather", "Higher security than fiber", "Zero attenuation"],
    "Slide 28: mobility, rapid deployment, connectivity where cabling is impossible.");
  mcq(28, 'm', "The electromagnetic spectrum used for wireless communication ranges from…",
    ["3 kHz to 400 THz", "1 GHz to 300 GHz only", "2 MHz to 30 MHz", "100 m to 100 km"],
    "Slide 28.");
  mcq(28, 'e', "Which wireless waves are omnidirectional and penetrate solid building walls easily?",
    ["Radio waves", "Microwaves", "Infrared", "Laser light"],
    "Slide 28.");
  mcq(28, 'm', "Radio waves occupy the frequency range…",
    ["3 kHz to 1 GHz", "1 GHz to 300 GHz", "300 GHz to 400 THz", "400 THz to 800 THz"],
    "Slide 28.");
  mcq(28, 'm', "Microwaves occupy the frequency range…",
    ["1 GHz to 300 GHz", "3 kHz to 1 GHz", "300 GHz to 400 THz", "2 MHz to 30 MHz"],
    "Slide 28.");
  mcq(28, 'm', "Infrared radiation occupies the frequency range…",
    ["300 GHz to 400 THz", "1 GHz to 300 GHz", "3 kHz to 1 GHz", "400 THz to 800 THz"],
    "Slide 28.");
  mcq(28, 'e', "AM/FM radio broadcasting is an example of…",
    ["radio waves", "microwaves", "infrared", "fiber optics"],
    "Slide 28.");
  mcq(28, 'm', "Which waves are highly directional (unidirectional) focused beams that require strict line-of-sight?",
    ["Microwaves", "Radio waves", "Ground waves", "Sound waves"],
    "Slide 28.");
  mcq(28, 'm', "Wi-Fi and satellite links are given on the slides as examples of…",
    ["microwaves", "radio waves", "infrared", "guided media"],
    "Slide 28.");
  mcq(28, 'e', "A TV remote control uses…",
    ["infrared", "microwaves", "coaxial cable", "sky waves"],
    "Slide 28.");
  mcq(28, 'm', "Which wireless waves are short-range and cannot penetrate walls?",
    ["Infrared", "Radio waves", "AM radio waves", "Ground waves"],
    "Slide 28.");
  mcq(28, 'h', "An FM radio station transmits at 100 MHz. In which band of the wireless spectrum does it fall?",
    ["Radio waves (3 kHz – 1 GHz)", "Microwaves (1 – 300 GHz)", "Infrared (300 GHz – 400 THz)", "Visible light"],
    "100 MHz = 0.1 GHz, which is between 3 kHz and 1 GHz (slide 28).");
  mcq(28, 'h', "A Wi-Fi router transmits at 2.4 GHz. In which band does it fall?",
    ["Microwaves (1 – 300 GHz)", "Radio waves (3 kHz – 1 GHz)", "Infrared (300 GHz – 400 THz)", "Ground waves (< 2 MHz)"],
    "2.4 GHz lies between 1 GHz and 300 GHz (slide 28), matching the slide's Wi-Fi example.");
  mcq(28, 'h', "A sensor uses a frequency of 350 THz. In which band does it fall?",
    ["Infrared", "Microwaves", "Radio waves", "Sky waves"],
    "350 THz lies between 300 GHz and 400 THz: infrared (slide 28).");
  mcq(28, 'h', "Two rooms are separated by a solid wall. Which wireless option will reach the other room most easily?",
    ["Radio waves", "Infrared", "A line-of-sight microwave beam", "A TV remote's infrared beam"],
    "Slide 28: radio waves penetrate walls easily; infrared cannot; microwaves need line-of-sight.");
  // Propagation bands (p4)
  mcq(4, 'm', "Ground-wave propagation is used for frequencies…",
    ["below 2 MHz", "between 2 and 30 MHz", "above 30 MHz", "above 300 GHz"],
    "Slide 4 (learning outcome 4).");
  mcq(4, 'm', "Sky-wave propagation is used for frequencies…",
    ["between 2 and 30 MHz", "below 2 MHz", "above 30 MHz", "between 1 and 300 GHz"],
    "Slide 4.");
  mcq(4, 'm', "Line-of-sight propagation is used for frequencies…",
    ["above 30 MHz", "below 2 MHz", "between 2 and 30 MHz", "below 3 kHz"],
    "Slide 4.");
  mcq(4, 'h', "A transmitter works at 1 MHz. Which propagation mode does it use?",
    ["Ground wave", "Sky wave", "Line-of-sight", "Total internal reflection"],
    "1 MHz < 2 MHz → ground wave (slide 4).");
  mcq(4, 'h', "A shortwave broadcast uses 15 MHz. Which propagation mode does it use?",
    ["Sky wave", "Ground wave", "Line-of-sight", "Guided propagation"],
    "15 MHz is between 2 and 30 MHz → sky wave (slide 4).");
  mcq(4, 'h', "A microwave dish link works at 6 GHz. Which propagation mode does it use?",
    ["Line-of-sight", "Sky wave", "Ground wave", "Free-space reflection off the cladding"],
    "6 GHz is far above 30 MHz → line-of-sight (slide 4); microwaves need strict line-of-sight (slide 28).");
  // Wireless standards (p29)
  mcq(29, 'e', "IEEE 802.11 is the standard for…",
    ["Wi-Fi", "Bluetooth", "Ethernet", "4G LTE"],
    "Slide 29.");
  mcq(29, 'e', "IEEE 802.15 is the standard for…",
    ["Bluetooth", "Wi-Fi", "5G NR", "Ethernet"],
    "Slide 29.");
  mcq(29, 'm', "Bluetooth is a short-range wireless…",
    ["personal area network (WPAN) for peripherals", "wide area network covering whole countries", "metropolitan area network covering a city", "backbone network linking large data centers"],
    "Slide 29.");
  mcq(29, 'm', "Which wireless technology uses licensed base stations to provide nationwide mobile connectivity?",
    ["Cellular (4G LTE / 5G NR)", "Bluetooth (IEEE 802.15)", "Infrared (TV remote)", "Wi-Fi (IEEE 802.11)"],
    "Slide 29.");
  mcq(29, 'm', "Which standard provides high-speed local area wireless networking for computers and phones?",
    ["IEEE 802.11 (Wi-Fi)", "IEEE 802.15 (Bluetooth)", "Cellular 5G NR", "IEEE 802.3 (Ethernet)"],
    "Slide 29.");
  mcq(29, 'h', "Wireless earbuds connected to a phone are an example of which network type?",
    ["WPAN using Bluetooth (IEEE 802.15)", "WLAN using Wi-Fi (IEEE 802.11)", "WAN using cellular 4G/5G", "LAN using Ethernet (IEEE 802.3)"],
    "Slide 29: Bluetooth is a short-range WPAN for peripherals.");
  // Guided vs unguided (p30)
  mcq(30, 'm', "Which statement about mobility is correct according to the guided vs unguided comparison?",
    ["Guided media have zero mobility; unguided media offer high mobility and flexible roaming", "Guided media offer high mobility; unguided media have zero mobility and no roaming", "Both guided and unguided media have zero mobility because devices must stay fixed", "Both guided and unguided media offer flexible roaming for every client device"],
    "Slide 30.");
  mcq(30, 'm', "Which encryption standard does the comparison say wireless networks require?",
    ["WPA3", "GZIP", "FCS", "NRZ"],
    "Slide 30.");
  mcq(30, 'm', "Which problem affects unguided media but not guided media, according to the comparison?",
    ["Rain fade and atmospheric absorption", "Fixed physical paths for every link", "High installation labour cost for cabling", "Signals being confined in a cable jacket"],
    "Slide 30.");
  mcq(30, 'm', "In unguided media, distance is limited by…",
    ["free-space path loss and path obstacles", "the 100-meter rule for copper cables", "modal dispersion in the glass core", "the number of twists per meter of cable"],
    "Slide 30.");
  mcq(30, 'h', "Which row of the guided vs unguided comparison is correct?",
    ["Security: guided high, unguided low", "Installation: guided rapid, unguided fixed path", "Weather: guided vulnerable to rain, unguided immune", "Conductor: guided free-space, unguided copper or glass"],
    "Slide 30.");
  mcq(30, 'm', "Guided media have a fixed physical path, which means…",
    ["high labour cost and zero mobility", "rapid deployment and flexible roaming", "vulnerability to rain fade and fog", "low security, since anyone can listen"],
    "Slide 30.");
  // Case study (p31-32)
  mcq(31, 'm', "In the case study, TIU must connect Building A to Building B. What makes the link difficult?",
    ["The buildings are 1.5 km apart across a public highway, and trenching needs a permit", "The buildings share one room, so no cable can be routed between them", "The link only needs 1 Mbps, which no medium can provide over a highway", "Wireless links are not allowed anywhere on the TIU campus by law"],
    "Slide 31.");
  mcq(32, 'm', "Why does Cat6a copper fail for the 1.5 km link between the two TIU buildings?",
    ["Cat6a's maximum distance is strictly 100 meters", "Cat6a cannot carry 10 Gbps over any distance", "Cat6a is a wireless medium that needs line-of-sight", "Cat6a is affected by rain fade on the highway"],
    "Slide 32.");
  mcq(32, 'm', "What is the main drawback of single-mode fiber for the TIU building link?",
    ["High civil trenching cost", "It cannot reach 1.5 km", "It suffers from EMI", "It cannot carry 10 Gbps"],
    "Slide 32: superior 10 Gbps performance, zero EMI, but high trenching cost.");
  mcq(32, 'm', "What is the main advantage of a point-to-point wireless microwave link for the TIU case?",
    ["It bypasses the highway trenching permits completely and is rapid to set up", "It is completely immune to rain fade and other weather problems", "It is completely secure without any encryption on the link", "It needs no line-of-sight, so the dishes can be mounted anywhere"],
    "Slide 32.");
  mcq(32, 'm', "What is the risk of the point-to-point microwave option in the TIU case?",
    ["Rain fade", "The 100-meter limit", "High trenching cost", "Modal dispersion"],
    "Slide 32.");
  mcq(32, 'h', "A point-to-point microwave link between the two TIU buildings needs roof-mounted dishes because microwaves…",
    ["require strict line-of-sight", "penetrate solid walls easily", "travel by sky wave off the ionosphere", "need a physical conductor to travel"],
    "Slides 28 and 32.");
  mcq(32, 'h', "If the TIU link must give the best, most stable 10 Gbps performance and the budget allows trenching, which option should be chosen?",
    ["Single-mode fiber", "Cat6a copper", "Point-to-point microwave", "Bluetooth"],
    "Slide 32: SMF gives superior 10 Gbps performance and zero EMI; its drawback is only the trenching cost.");
  // Summary (p33)
  mcq(33, 'm', "According to the lecture summary, real networks combine media as follows:",
    ["Fiber for backbones, copper for desks and wireless for mobility", "Wireless for backbones, fiber for desks and copper for mobility", "Copper everywhere", "Wireless everywhere"],
    "Slide 33: engineering trade-off.");
  mcq(33, 'm', "According to the summary, free-space propagation (radio, microwave, infrared) enables…",
    ["broadcast and client roaming", "complete immunity to weather", "zero path loss", "higher security than cables"],
    "Slide 33.");
  mcq(10, 'm', "Satellite communication, shown with radio and microwave on the unguided media slide, uses…",
    ["electromagnetic waves through free space", "fiber optic cables laid under the sea", "twisted pairs strung between tall poles", "infrared beams that pass through walls"],
    "Slides 10 and 28: satellite is a microwave example.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(27, 'e', "Unguided transmission sends [[electromagnetic|em]] signals without using a physical conductor.", "Slide 27.");
  fill(27, 'm', "Unguided media use [[free-space|free space]] propagation through air, water or the vacuum of outer space.", "Slide 27.");
  fill(27, 'm', "Because of its [[unbounded]] nature, anyone within range with an antenna can receive a wireless broadcast.", "Slide 27.");
  fill(28, 'm', "Reasons to go wireless include mobility, rapid [[deployment]] and connectivity where cabling is impossible.", "Slide 28.");
  fill(28, 'm', "[[Radio waves|radio|radio wave]] are omnidirectional and penetrate solid building walls easily.", "Slide 28.");
  fill(28, 'm', "[[Microwaves|microwave]] are highly directional, focused beams that require strict line-of-sight.", "Slide 28.");
  fill(28, 'm', "[[Infrared|infrared radiation|ir]] waves are short-range optical waves that cannot penetrate walls.", "Slide 28.");
  fill(28, 'h', "The electromagnetic spectrum for wireless ranges from 3 kHz to [[400 THz|400]].", "Slide 28.");
  fill(28, 'h', "Microwaves occupy the range from 1 GHz to [[300 GHz|300]].", "Slide 28.");
  fill(4, 'h', "Frequencies below 2 MHz travel by [[ground wave|ground-wave|ground]] propagation.", "Slide 4.");
  fill(4, 'h', "Frequencies between 2 and 30 MHz travel by [[sky wave|sky-wave|sky]] propagation.", "Slide 4.");
  fill(4, 'm', "Frequencies above 30 MHz use [[line-of-sight|line of sight|LOS]] propagation.", "Slide 4.");
  fill(29, 'e', "Wi-Fi is defined by the IEEE [[802.11]] standard.", "Slide 29.");
  fill(29, 'm', "Bluetooth (IEEE 802.15) is a short-range wireless personal area network, written [[WPAN|wireless personal area network]].", "Slide 29.");
  fill(29, 'm', "Cellular networks such as 4G LTE and [[5G|5g nr]] use licensed base stations for nationwide connectivity.", "Slide 29.");
  fill(30, 'm', "Wireless signals are broadcast into open air, so they require strong [[WPA3|wpa 3]] encryption.", "Slide 30.");
  fill(30, 'h', "Unguided media are vulnerable to rain [[fade]] and atmospheric absorption.", "Slide 30.");
  fill(30, 'h', "In unguided media, distance is limited by free-space path [[loss]] and path obstacles.", "Slide 30.");
  fill(32, 'm', "Cat6a fails for the TIU building link because its maximum distance is strictly [[100|one hundred]] meters.", "Slide 32.");
  fill(33, 'm', "Networks combine media: fiber for [[backbones|backbone]], copper for desks and wireless for [[mobility]].", "Slide 33.");

  /* ---------- Section C: true / false ---------- */
  tf(27, 'e', "Unguided media need a physical conductor to carry the signal.", false, "False. Unguided transmission uses free space, with no physical conductor.");
  tf(27, 'm', "Unguided signals can propagate through water and the vacuum of outer space.", true, "True. Slide 27.");
  tf(28, 'e', "Radio waves penetrate solid building walls easily.", true, "True. Slide 28.");
  tf(28, 'm', "Infrared waves can pass through walls, so a TV remote works from another room.", false, "False. Infrared is short-range and cannot penetrate walls.");
  tf(28, 'm', "Microwaves are omnidirectional and do not need line-of-sight.", false, "False. Microwaves are highly directional and require strict line-of-sight.");
  tf(28, 'h', "Infrared uses higher frequencies than microwaves.", true, "True. Infrared 300 GHz – 400 THz; microwaves 1 – 300 GHz.");
  tf(4, 'h', "Sky-wave propagation is used for frequencies below 2 MHz.", false, "False. Below 2 MHz is ground wave; sky wave is 2 – 30 MHz.");
  tf(29, 'e', "Bluetooth is defined by IEEE 802.15.", true, "True. Slide 29.");
  tf(29, 'm', "IEEE 802.11 is the standard for cellular 5G networks.", false, "False. IEEE 802.11 is Wi-Fi.");
  tf(30, 'm', "Guided media are vulnerable to rain fade.", false, "False. Guided media are immune to rain and fog; unguided media suffer rain fade.");
  tf(30, 'm', "Unguided media offer rapid deployment and high mobility.", true, "True. Slide 30.");
  tf(32, 'm', "In the TIU case study, the microwave option avoids the highway trenching permits.", true, "True. But it carries a rain fade risk.");
  tf(32, 'h', "In the TIU case study, Cat6a copper is the best option because it is the cheapest.", false, "False. Cat6a fails: its maximum distance is 100 m and the buildings are 1.5 km apart.");

  /* ---------- In the instructor's style (Types 1-3: long technical stems, definitional blanks, swapped-fact statements) ---------- */
  mcq(30, 'h', "A university needs a link that is immune to rain fade and cannot be picked up by anyone with an antenna in range. Which media category should it choose?",
    ["Guided media (e.g. fiber)", "Unguided microwave links", "Unguided radio broadcast", "Infrared line-of-sight links"],
    "Slide 30: guided media are immune to weather and confine the signal.");
  mcq(4, 'h', "A broadcast at 10 MHz is used to reach receivers far beyond the horizon. Which propagation mode does this frequency use?",
    ["Sky wave", "Ground wave", "Line-of-sight", "Guided propagation"],
    "Slide 4: 2-30 MHz is sky wave.");
  mcq(27, 'm', "Which property of unguided media means that any receiver within range that has an antenna can pick up the signal?",
    ["Its unbounded (broadcast) nature", "Total internal reflection in the air", "Differential signaling on two wires", "Microsegmentation by the access point"],
    "Slide 27.");
  mcq(32, 'h', "In the TIU case study, which option is rejected outright rather than being a trade-off?",
    ["Cat6a copper cable", "Single-mode fiber", "Point-to-point microwave", "Leasing dark fiber"],
    "Slide 32: Cat6a fails because its maximum distance is 100 m; the other options are trade-offs.");
  fill(28, 'm', "Waves that radiate in all directions, like AM/FM radio, are described as [[omnidirectional|omni-directional|omni directional]].", "Slide 28.");
  fill(29, 'm', "High-speed local area wireless networking for computers and phones, defined by IEEE 802.11, is known as [[Wi-Fi|wifi|wireless lan]].", "Slide 29.");
  fill(27, 'h', "Unguided media send signals through air, water or the vacuum of space instead of along a physical [[conductor|cable]].", "Slide 27.");
  tf(28, 'h', "Radio waves are highly directional and cannot pass through walls, while infrared is omnidirectional and penetrates walls easily.", false, "False. Swapped: radio is omnidirectional and penetrates walls; infrared is short-range and cannot pass through walls.");
  tf(30, 'h', "Unguided media offer high mobility and rapid deployment, but lower security, so they need strong encryption such as WPA3.", true, "True. Slide 30.");
  tf(4, 'h', "Line-of-sight propagation is used below 2 MHz, while ground-wave propagation is used above 30 MHz.", false, "False. Swapped: ground wave is below 2 MHz; line-of-sight is above 30 MHz.");
  tf(29, 'm', "Bluetooth (IEEE 802.15) is a short-range personal area network, while cellular 4G/5G uses licensed base stations for nationwide coverage.", true, "True. Slide 29.");

  exp([4, 28], 'h', 5, "Categorize the three wireless propagation modes by frequency band. Describe how the signal travels in each mode, and draw a labeled diagram of all three.",
    [["Ground wave: below 2 MHz; the signal travels close to the Earth's surface", "ground", "2 mhz", "surface"],
     ["Sky wave: 2 to 30 MHz; the signal is reflected back down from the ionosphere to reach far receivers", "sky", "ionosphere", "30 mhz"],
     ["Line-of-sight: above 30 MHz; a straight path between antennas or dishes with no obstacles", "line of sight", "straight", "dish"],
     ["Microwaves (and infrared) need line-of-sight; low-frequency radio uses ground or sky waves", "microwave", "infrared", "low frequency"],
     ["Labeled drawing: a ground wave along the surface, a sky wave bouncing off the ionosphere, and a straight line-of-sight path","labeled drawing","labelled drawing","drawing","diagram"]],
    "Wireless signals propagate in three modes according to frequency. Ground-wave propagation is used below 2 MHz: the signal travels close to the Earth's surface. Sky-wave propagation is used between 2 and 30 MHz: the signal goes up and is reflected back down from the ionosphere, reaching receivers far away. Line-of-sight propagation is used above 30 MHz: the signal travels in a straight line between antennas or dishes and needs no obstacles in the way, which is why microwaves (and infrared) need line-of-sight, while low-frequency radio uses ground or sky waves. Labeled drawing: a ground wave following the surface, a sky wave bouncing off the ionosphere, and a straight line-of-sight path between two towers.",
    { sec: 'D', figure: 'propagation' });

  /* ---------- Section D: categorization & illustration (Type 4) · Section E: explanation & structural mapping (Type 6) ---------- */
  exp([28, 4], 'm', 5, "Categorize the wireless electromagnetic spectrum into its three bands. For each band give the frequency range, direction, wall penetration and an example, and draw a labeled spectrum diagram.", [["Radio waves: 3 kHz – 1 GHz; omnidirectional", "3 khz", "1 ghz", "omnidirectional", "omni"],
     ["Radio waves penetrate solid walls easily; e.g. AM/FM radio", "penetrate", "wall", "am", "fm"],
     ["Microwaves: 1 – 300 GHz; highly directional focused beams; strict line-of-sight", "300 ghz", "directional", "line of sight", "focused"],
     ["Microwave examples: Wi-Fi, satellite", "wi fi", "wifi", "satellite"],
     ["Infrared: 300 GHz – 400 THz; short-range; cannot penetrate walls; e.g. TV remote, sensors", "400 thz", "short range", "remote", "cannot"],
     ["Labeled drawing: one frequency axis divided into radio, microwave and infrared, with the boundary values","labeled drawing","labelled drawing","drawing","diagram"]], "The wireless spectrum runs from 3 kHz to 400 THz. Radio waves (3 kHz – 1 GHz) are omnidirectional and penetrate solid building walls easily, for example AM/FM radio; low frequencies travel by ground wave (< 2 MHz) or sky wave (2 – 30 MHz). Microwaves (1 – 300 GHz) are highly directional, focused beams that require strict line-of-sight, for example Wi-Fi and satellite links. Infrared radiation (300 GHz – 400 THz) is short-range optical transmission that cannot penetrate walls, for example TV remote controls and short-range wireless sensors. Labeled drawing: a frequency bar from 3 kHz to 400 THz divided at 1 GHz and 300 GHz into radio waves, microwaves and infrared, with each band’s properties written underneath.", { sec: 'D', figure: 'spectrum' });
  exp([30, 33], 'm', 5, "Compare guided and unguided media in terms of installation and mobility, security, weather and bandwidth/distance.", [["Installation & mobility: guided = fixed path, high labour cost, zero mobility; unguided = rapid deployment, high mobility, roaming", "fixed", "mobility", "roam", "rapid"],
     ["Security: guided high (signal confined, fiber immune to taps); unguided low (broadcast, needs WPA3)", "secur", "wpa3", "broadcast", "confined"],
     ["Weather/interference: guided immune to rain and fog, shielded from EMI; unguided vulnerable to rain fade, absorption, collisions", "rain", "fade", "weather", "fog"],
     ["Bandwidth/distance: guided (fiber) very high bandwidth over long distance; unguided limited by free-space path loss and obstacles", "path loss", "obstacle", "bandwidth", "long distance"]], "Guided media use a solid conduit (copper or glass) with a fixed physical path: installation has a high labour cost and there is zero mobility, while unguided media use free-space propagation, allowing rapid deployment, high mobility and client roaming. Guided media are highly secure because the signal is confined in the jacket (fiber is immune to taps); unguided media are less secure because they broadcast into open air and need strong encryption such as WPA3. Guided media are immune to rain and fog and shielded from EMI; unguided media suffer rain fade, atmospheric absorption and shared collisions. Fiber offers extremely high bandwidth over long distances, whereas wireless distance is limited by free-space path loss and obstacles. Real networks combine them: fiber for backbones, copper for desks, wireless for mobility.", { sec: 'E' });
  exp([31, 32], 'h', 5, "TIU must connect two buildings 1.5 km apart across a public highway with a 10 Gbps link. Evaluate Cat6a copper, single-mode fiber and point-to-point microwave, and recommend an option.", [["Cat6a fails: its maximum distance is 100 m, far less than 1.5 km", "100 m", "100 meter", "fails", "too far"],
     ["Single-mode fiber: superior 10 Gbps performance and zero EMI", "superior", "zero emi", "10 gbps", "emi"],
     ["Fiber drawback: high civil trenching cost and a permit to dig under the highway", "trench", "permit", "cost"],
     ["Microwave: line-of-sight roof dishes bypass the trenching permits, rapid setup", "bypass", "rapid", "roof", "line of sight"],
     ["Microwave risk: rain fade; recommendation justified (fiber for performance, microwave for speed of deployment)", "rain fade", "recommend", "choose", "best"],
     ["Labeled drawing: the two buildings, the highway, and the three link options","labeled drawing","labelled drawing","drawing","diagram"]], "Option 1, Cat6a copper, fails: its maximum distance is strictly 100 m, but the buildings are 1.5 km apart. Option 2, single-mode fiber (trenched or leased dark fiber), gives superior 10 Gbps performance with zero EMI and easily covers 1.5 km, but needs an official permit and a high civil trenching cost under the highway. Option 3, a point-to-point wireless microwave link with line-of-sight roof-mounted dishes, bypasses the trenching permits completely and is quick to set up, but carries a rain fade risk. Recommendation: single-mode fiber when stable 10 Gbps performance is the priority and the budget allows trenching; microwave when fast deployment without permits matters more and some weather risk is acceptable. Labeled drawing: Building A and Building B on either side of the highway, with the failed copper run, the trenched fiber under the road, and the microwave beam between roof dishes.", { sec: 'E', figure: 'tiuLink', need: 4 });
});
