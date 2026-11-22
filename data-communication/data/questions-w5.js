/* Week 5: Transmission Media I: guided media (combined Week 5 & 6 PDF, pages 1-25). */
EC.lecture(5, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A: choose the correct option ---------- */
  // Layer 0 and the interface boundary (p5-8)
  mcq(5, 'e', "According to the slides, which of these does the transmission medium always dictate?",
    ["Speed, distance, attenuation and cost", "IP addresses and port numbers", "The protocol format and timing", "The application that receives the data"],
    "Slide 5: no signal travels infinitely; the medium dictates speed, distance, attenuation and cost.");
  mcq(6, 'e', "Transmission media is often referred to as…",
    ["Layer 0", "Layer 1", "Layer 2", "Layer 7"],
    "Slide 6: media is located beneath Layer 1.");
  mcq(6, 'm', "Which statement correctly separates Layer 1 from the transmission media (Layer 0)?",
    ["Layer 1 defines voltages, timing, bit encoding and pinouts; the media is the actual physical pathway for the signals", "Layer 1 is the cable itself; the media defines the voltages", "Layer 1 routes packets; the media switches frames", "Layer 1 and the media are the same thing"],
    "Slide 6.");
  mcq(7, 'e', "Which devices bridge Layer 1 to the transmission medium?",
    ["Transceivers such as NICs", "Routers only", "Terminators", "Web browsers"],
    "Slide 7: the interface boundary.");
  mcq(7, 'm', "Which type of interface uses NIC PHY chips to send current over copper twisted pairs?",
    ["Electrical interface", "Optical transceiver", "Wireless radio", "Infrared port"],
    "Slide 7.");
  mcq(8, 'm', "Which type of interface uses lasers or LEDs to inject light photons into glass fibers?",
    ["Optical transceiver", "Electrical interface", "Wireless radio", "BNC connector"],
    "Slide 8.");
  mcq(8, 'm', "Which type of interface uses antennas to radiate electromagnetic waves into the atmosphere?",
    ["Wireless radio", "Optical transceiver", "Electrical interface", "RJ-45 connector"],
    "Slide 8.");
  mcq(8, 'h', "In the optical transceiver module shown on the slides, what happens to the signal?",
    ["It is converted between electrical form (to the device) and optical form (to the fiber)", "It is converted from radio waves to electrical current", "It is amplified as an electrical signal only", "It is encrypted before entering the cable"],
    "Slide 8: optical signal on one side, electrical signal on the other.");
  // Classification (p9-10)
  mcq(9, 'e', "Media in which solid physical conductors guide signals along a specific path are called…",
    ["guided (bounded) media", "unguided (unbounded) media", "free-space media", "broadcast media"],
    "Slide 9.");
  mcq(9, 'e', "Which of these is NOT a guided medium?",
    ["Microwave", "Twisted-pair cable", "Coaxial cable", "Fiber optic cable"],
    "Slides 9-10: microwave is unguided (wireless).");
  mcq(10, 'e', "Unguided (unbounded) media are…",
    ["electromagnetic waves that propagate through open air", "copper wires inside a plastic jacket", "glass fibers carrying light", "cables with braided shielding"],
    "Slide 10.");
  mcq(10, 'm', "Infrared radiation is classified on the slides as…",
    ["short-range optical line-of-sight wireless transmission", "long-range omnidirectional radio", "a guided medium", "a type of coaxial cable"],
    "Slide 10.");
  mcq(9, 'm', "UTP and STP are two kinds of…",
    ["twisted-pair cable", "coaxial cable", "fiber optic cable", "wireless antenna"],
    "Slide 9: unshielded (UTP) and shielded (STP) twisted pair.");
  // Twisted pair (p12-13)
  mcq(12, 'e', "A twisted pair consists of…",
    ["two insulated copper wires twisted around each other in a helical spiral", "a copper core surrounded by braided shielding", "a glass core surrounded by cladding", "a single bare copper wire"],
    "Slide 12.");
  mcq(12, 'm', "Which colours are used for the pairs in Cat6 cable (each paired with a white-striped wire)?",
    ["Blue, orange, green, brown", "Red, yellow, black, white", "Blue, red, green, yellow", "Orange, purple, grey, brown"],
    "Slide 12.");
  mcq(12, 'm', "What happens when a twisted-pair cable has more twists per meter?",
    ["Greater noise immunity and higher supported bandwidth", "More crosstalk and lower bandwidth", "Longer maximum distance of several kilometers", "No effect on transmission"],
    "Slide 12: twist rate matters.");
  mcq(13, 'e', "Twisting the wires in a twisted-pair cable cancels…",
    ["electromagnetic interference (EMI) and crosstalk", "attenuation over long distances", "all collisions on the network", "the need for a connector"],
    "Slide 13.");
  mcq(13, 'm', "In differential signaling over a twisted pair, the two wires carry…",
    ["the signal (+V) and the inverted signal (−V)", "two copies of the same signal (+V and +V)", "data and power", "light and electrical current"],
    "Slide 13.");
  mcq(13, 'h', "Why does external noise almost vanish at the receiver of a twisted pair?",
    ["Noise hits both wires almost identically, so subtracting the two signals cancels it", "The shield absorbs all the noise", "The receiver ignores voltages below 5 V", "The light pulses are immune to EMI"],
    "Slide 13: differential signaling + continuous twisting + receiver subtraction.");
  mcq(13, 'h', "In differential signaling, wire A carries +2 V and wire B carries −2 V. Noise adds +0.5 V to both. What does the receiver get when it subtracts B from A?",
    ["4 V: the noise cancels", "4.5 V", "5 V", "0 V"],
    "(2 + 0.5) − (−2 + 0.5) = 2.5 − (−1.5) = 4 V. The +0.5 V of noise appears on both wires and cancels out.");
  // Coaxial (p14-15)
  mcq(14, 'e', "Which connector is used with coaxial cable?",
    ["BNC", "RJ-45", "LC", "USB"],
    "Slide 14.");
  mcq(14, 'm', "The name “coaxial” comes from the fact that the cable's layers…",
    ["share a single geometric center line (axis)", "are made of two kinds of glass", "carry two signals in opposite directions", "are twisted around each other"],
    "Slide 14: central shared-axis design.");
  mcq(14, 'm', "Which is a reason coaxial cable outperformed twisted pair?",
    ["Heavy braided shielding prevents signal leakage", "It carries light instead of electricity", "It is the cheapest cable available", "It has no conductor at all"],
    "Slide 14: shielding, higher bandwidth (dozens of TV channels), extended range.");
  mcq(14, 'm', "Coaxial cable's higher bandwidth allowed it to carry…",
    ["dozens of analog television channels simultaneously", "only one telephone call", "light pulses over 100 km", "Wi-Fi signals through walls"],
    "Slide 14.");
  mcq(15, 'm', "Which is the innermost layer of a coaxial cable?",
    ["Center core conductor", "Metallic braided shield", "Outer plastic jacket", "Non-conductive insulator"],
    "Slide 15: core → insulator → braided shield → jacket.");
  mcq(15, 'm', "Which layer of a coaxial cable blocks external EMI and also serves as ground?",
    ["Metallic braided shield", "Non-conductive insulator", "Center core conductor", "Outer plastic jacket"],
    "Slide 15.");
  mcq(15, 'm', "What does the non-conductive insulator in a coaxial cable do?",
    ["Maintains uniform spacing around the core", "Carries the electrical signal", "Protects against moisture", "Blocks external EMI and serves as ground"],
    "Slide 15: plastic foam maintaining uniform core spacing.");
  mcq(15, 'h', "What is the correct order of the four coaxial layers, from the center outward?",
    ["Core conductor → insulator → braided shield → outer jacket", "Insulator → core conductor → jacket → braided shield", "Braided shield → core → insulator → jacket", "Core conductor → braided shield → insulator → jacket"],
    "Slide 15.");
  mcq(15, 'm', "The outer jacket of a coaxial cable is made of PVC or Teflon to protect against…",
    ["moisture and physical damage", "electromagnetic interference", "signal reflection", "modal dispersion"],
    "Slide 15.");
  // Fiber optic (p16-21)
  mcq(16, 'e', "Fiber optic cable transmits…",
    ["pulses of light", "electrical voltage currents", "radio waves", "sound waves"],
    "Slide 16.");
  mcq(16, 'm', "Which components generate the optical pulses in a fiber link?",
    ["Injection laser diodes (ILDs) or LEDs", "Photodiodes", "Antennas", "Terminators"],
    "Slide 16.");
  mcq(16, 'm', "Which components decode the light pulses back into binary bits?",
    ["Photodiodes or photo-transistors", "Injection laser diodes", "LEDs", "Braided shields"],
    "Slide 16.");
  mcq(17, 'm', "Why is fiber described as having superior security?",
    ["It cannot be tapped without visibly interrupting the light transmission", "It encrypts every bit automatically", "It is buried deeper than copper", "It uses a token to control access"],
    "Slide 17.");
  mcq(17, 'm', "Light in a fiber is unaffected by power cables, lightning or industrial motors. This advantage is…",
    ["EMI immunity", "immense bandwidth", "lightweight design", "low cost"],
    "Slide 17.");
  mcq(17, 'm', "Thanks to ultra-low attenuation, fiber can span…",
    ["10 to 100+ km without repeaters", "only up to 100 m", "185 m to 500 m", "only within one building"],
    "Slide 17.");
  mcq(17, 'h', "Which is NOT one of the fiber optic advantages listed on the slides?",
    ["Lowest cost per port", "Immense bandwidth", "Extended distance", "Lightweight and compact"],
    "Slide 17; slide 23 says fiber has the highest cable/port cost.");
  mcq(19, 'e', "Which fiber mode is designed for ultra long-distance telecommunications?",
    ["Single-mode fiber (SMF)", "Multimode fiber (MMF)", "Coaxial fiber", "Twisted fiber"],
    "Slide 19.");
  mcq(19, 'm', "Single-mode fiber has an ultra-thin core of about…",
    ["9 to 10 microns", "50 to 62.5 microns", "1 millimeter", "100 microns"],
    "Slide 19.");
  mcq(19, 'm', "What light source does single-mode fiber use?",
    ["Laser diode", "LED", "Photodiode", "Incandescent lamp"],
    "Slide 19: concentrated coherent light.");
  mcq(19, 'm', "Why does single-mode fiber have zero modal dispersion?",
    ["Only a single straight ray of light propagates, so there are no different bouncing angles", "It uses an LED light source", "Its core is thicker than multimode", "It carries electrical signals"],
    "Slide 19.");
  mcq(19, 'm', "Which is an application of single-mode fiber?",
    ["Trans-oceanic subsea cables", "Connecting a PC to a desk switch", "Cable TV to a home", "A TV remote control"],
    "Slide 19: Internet backbone, subsea cables, telecommunications.");
  mcq(20, 'm', "Multimode fiber has a core of about…",
    ["50 to 62.5 microns", "9 to 10 microns", "1 to 2 microns", "500 microns"],
    "Slide 20.");
  mcq(20, 'm', "What light source does multimode fiber use?",
    ["LED (lower-cost transceivers)", "Laser diode only", "Antenna", "Photo-transistor"],
    "Slide 20.");
  mcq(20, 'm', "What limits the distance of multimode fiber?",
    ["Modal dispersion: different ray paths arrive at slightly different times", "Electromagnetic interference from power lines", "Thermal noise in copper", "Lack of a cladding layer"],
    "Slide 20.");
  mcq(20, 'm', "Multimode fiber typically reaches…",
    ["500 m to 2 km", "10 to 100+ km", "only 100 m", "thousands of kilometers"],
    "Slide 20.");
  mcq(20, 'm', "Which is a typical application of multimode fiber?",
    ["Data center inter-rack connections", "Trans-oceanic subsea cables", "The Internet backbone between countries", "Satellite links"],
    "Slide 20.");
  mcq([19, 20], 'h', "A company needs a fiber link between two cities 60 km apart. Which choice fits the slides?",
    ["Single-mode fiber with a laser source", "Multimode fiber with an LED source", "Cat6 twisted pair", "Thin coaxial cable"],
    "Slides 19-20: SMF reaches 10 to 100+ km; MMF only 500 m to 2 km.");
  mcq(21, 'e', "In a fiber optic cable, which layer has the higher refractive index?",
    ["The glass core", "The glass cladding", "The plastic buffer", "The outer jacket"],
    "Slide 21.");
  mcq(21, 'm', "What is the role of the glass cladding?",
    ["It has a lower refractive index and traps the light within the core", "It carries the light pulses itself", "It converts light into electrical signals", "It protects the cable from moisture"],
    "Slide 21.");
  mcq(21, 'm', "According to the slide on Snell's law, what happens to light that hits the core-cladding boundary beyond the critical angle?",
    ["It reflects and stays guided within the core", "It escapes into the cladding", "It is absorbed by the jacket", "It turns into an electrical signal"],
    "Slide 21: total internal reflection.");
  mcq(21, 'm', "The best, lossless optical signaling according to Snell's law is when light…",
    ["zigzags through the core indefinitely without escaping", "travels straight out of the cladding", "is absorbed by the buffer", "refracts into the outer jacket"],
    "Slide 21.");
  mcq(21, 'h', "A fiber core has refractive index n₁ = 1.5 and the cladding n₂ = 1.0. Using Snell's law, what is the critical angle (sin θc = n₂ / n₁)?",
    ["About 41.8°", "About 30°", "About 60°", "About 90°"],
    "sin θc = 1.0 / 1.5 = 0.667 → θc = arcsin(0.667) ≈ 41.8°. Light hitting the boundary at more than 41.8° is totally internally reflected.");
  mcq(21, 'h', "Light inside a core (n₁ = 1.5) hits the boundary with a lower-index medium (n₂ = 1.0) at 30° from the normal. Using n₁ sin θ₁ = n₂ sin θ₂, what is the refracted angle θ₂?",
    ["About 48.6°", "About 30°", "About 19.5°", "It is totally reflected"],
    "sin θ₂ = (1.5 × sin 30°) / 1.0 = 1.5 × 0.5 = 0.75 → θ₂ = arcsin(0.75) ≈ 48.6°. 30° is below the critical angle (41.8°), so the ray escapes, bending away from the normal.");
  mcq(21, 'h', "Light hits the core-cladding boundary at 60° when the critical angle is 41.8°. What happens?",
    ["Total internal reflection: the light stays in the core", "The light refracts into the cladding", "The light stops", "The light is converted to heat immediately"],
    "60° > 41.8° (the critical angle), so the light is totally internally reflected and stays guided (slide 21).");
  mcq(21, 'm', "Which layers of a fiber optic cable are shown on the slides, from the inside out?",
    ["Glass core → glass cladding → plastic coating/buffer → plastic outer jacket", "Copper core → insulator → braided shield → jacket", "Cladding → core → jacket → buffer", "Glass core → braided shield → insulator → jacket"],
    "Slide 21.");
  // Cable comparison (p22-23)
  mcq(22, 'm', "Which cable is used to connect different devices, such as a PC to a switch?",
    ["Straight-through twisted pair", "Crossover twisted pair", "Single-mode fiber", "Coaxial cable"],
    "Slide 22.");
  mcq(22, 'm', "Which cable is used to connect the same kind of devices, such as PC to PC?",
    ["Crossover twisted pair", "Straight-through twisted pair", "Coaxial cable", "Multimode fiber"],
    "Slide 22.");
  mcq(22, 'm', "Which connector is used for both single-mode and multimode fiber in the comparison?",
    ["LC", "BNC", "RJ-45", "RJ-11"],
    "Slide 22.");
  mcq(22, 'm', "Which cable is used for TV, cable internet and CCTV?",
    ["Coaxial cable", "Single-mode fiber", "Crossover twisted pair", "Multimode fiber"],
    "Slide 22.");
  mcq(22, 'h', "According to the five-cable comparison, which cable offers the highest bandwidth (up to 100 Gbps)?",
    ["Fiber optic single mode", "Fiber optic multimode", "Coaxial cable", "Copper straight-through"],
    "Slide 22: SMF up to 100 Gbps; MMF up to 10 Gbps; copper and coax up to 1 Gbps.");
  mcq(23, 'm', "What is the maximum distance of twisted-pair (Cat6/6a) cable without a repeater?",
    ["100 meters", "185 meters", "500 meters", "2 kilometers"],
    "Slide 23.");
  mcq(23, 'm', "Coaxial cable (RG-58/59) reaches…",
    ["185 m (thin) to 500 m (thick)", "only 100 m", "2 km to 100 km", "10 m"],
    "Slide 23.");
  mcq(23, 'm', "Which guided medium has the lowest cost and is used in desktop office LANs?",
    ["Twisted pair", "Coaxial cable", "Single-mode fiber", "Multimode fiber"],
    "Slide 23.");
  mcq(23, 'm', "Which guided medium has the highest cable/port cost and is used in core backbones?",
    ["Fiber optic", "Twisted pair", "Coaxial cable", "UTP"],
    "Slide 23.");
  mcq(23, 'h', "According to the comparison matrix, the noise (EMI) immunity of twisted pair is…",
    ["moderate (UTP) to high (STP)", "complete immunity", "zero", "high because of braided shielding only"],
    "Slide 23.");
  mcq(23, 'e', "What is the conductor material of fiber optic cable?",
    ["Ultra-pure silica glass", "Copper wire pairs", "Copper core with braided mesh", "Aluminium foil"],
    "Slide 23.");
  mcq(23, 'h', "A network needs a 300 m copper link. Using the comparison matrix, which medium reaches that distance without a repeater?",
    ["Thick coaxial cable", "Cat6 twisted pair", "Thin coaxial cable", "Cat6a twisted pair"],
    "Slide 23: twisted pair 100 m, thin coax 185 m, thick coax 500 m.");
  // Impairments (p24-25)
  mcq(24, 'e', "Can signals travel infinitely through a medium?",
    ["No: every physical medium degrades the signal as it propagates", "Yes, in fiber optic cable", "Yes, in shielded twisted pair", "Yes, if the bit rate is low"],
    "Slide 24.");
  mcq(24, 'm', "In attenuation, the lost signal energy is converted to…",
    ["heat", "light", "noise", "bandwidth"],
    "Slide 24.");
  mcq(24, 'm', "Attenuation is measured in…",
    ["decibels (dB) of loss per meter or kilometer", "bits per second", "hertz", "microns"],
    "Slide 24.");
  mcq(24, 'm', "Which active devices are deployed to regenerate degraded signals?",
    ["Amplifiers and repeaters", "Terminators", "Hubs and taps", "Photodiodes only"],
    "Slide 24.");
  mcq(24, 'h', "A fiber loses 0.4 dB per kilometer. What is the total attenuation over 50 km?",
    ["20 dB", "2 dB", "50 dB", "125 dB"],
    "0.4 dB/km × 50 km = 20 dB (slide 24: attenuation is measured in dB loss per km).");
  mcq(24, 'h', "A copper cable loses 0.2 dB per meter. What is the attenuation over a 100 m run?",
    ["20 dB", "2 dB", "0.2 dB", "200 dB"],
    "0.2 dB/m × 100 m = 20 dB.");
  mcq(25, 'm', "Which impairment blurs signals because different frequency components travel at different speeds?",
    ["Distortion", "Attenuation", "Thermal noise", "Crosstalk"],
    "Slide 25.");
  mcq(25, 'm', "Random movement of electrons in conductors, which is always present, is called…",
    ["thermal noise", "crosstalk", "attenuation", "distortion"],
    "Slide 25.");
  mcq(25, 'm', "Signal bleeding from adjacent wires is called…",
    ["crosstalk", "thermal noise", "attenuation", "modal dispersion"],
    "Slide 25.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(6, 'e', "Transmission media is located beneath Layer 1 and is often called Layer [[0|zero]].", "Slide 6.");
  fill(7, 'm', "[[Transceivers|transceiver]], such as NICs, bridge Layer 1 to the medium.", "Slide 7.");
  fill(8, 'm', "Optical transceivers use lasers or [[LEDs|led|light emitting diodes]] to inject light photons into glass fibers.", "Slide 8.");
  fill(9, 'e', "[[Guided|bounded]] media use solid physical conductors to guide signals along a specific path.", "Slide 9.");
  fill(10, 'e', "[[Unguided|unbounded|wireless]] media are electromagnetic waves that propagate through open air.", "Slide 10.");
  fill(9, 'm', "Twisted-pair cable comes as unshielded ([[UTP|unshielded twisted pair]]) and shielded ([[STP|shielded twisted pair]]) types.", "Slide 9.");
  fill(12, 'm', "More twists per meter give greater noise [[immunity]] and higher supported bandwidth.", "Slide 12.");
  fill(13, 'h', "In [[differential]] signaling, one wire carries the signal (+V) and the other carries the inverted signal (−V).", "Slide 13.");
  fill(13, 'm', "Twisting cancels external [[EMI|electromagnetic interference]] and crosstalk.", "Slide 13.");
  fill(14, 'e', "Coaxial cable uses the [[BNC]] connector.", "Slide 14.");
  fill(15, 'm', "The coaxial [[braided shield|metallic braided shield|shield|braid]] blocks external EMI and serves as ground.", "Slide 15.");
  fill(15, 'h', "The coaxial insulator is plastic [[foam]] that keeps the spacing around the core uniform.", "Slide 15.");
  fill(15, 'm', "The outer jacket of coaxial cable is made of PVC or [[Teflon]].", "Slide 15.");
  fill(16, 'm', "Fiber light pulses are generated by injection laser diodes ([[ILD|injection laser diode]]) or LEDs.", "Slide 16.");
  fill(16, 'm', "[[Photodiodes|photodiode|photo-transistors|phototransistors]] decode light pulses back into binary bits.", "Slide 16.");
  fill(19, 'm', "Single-mode fiber ([[SMF|single mode fiber]]) has an ultra-thin core of about 9 to 10 microns.", "Slide 19.");
  fill(19, 'h', "Single-mode fiber uses a [[laser|laser diode]] light source and has zero modal dispersion.", "Slide 19.");
  fill(20, 'm', "Multimode fiber ([[MMF|multimode fiber|multi mode fiber]]) has a thicker core of about 50 to 62.5 microns.", "Slide 20.");
  fill(20, 'h', "In multimode fiber, [[modal dispersion|dispersion|spreading]] limits the distance because different ray paths arrive at different times.", "Slide 20.");
  fill(21, 'm', "The fiber core has a [[higher]] refractive index than the cladding.", "Slide 21.");
  fill(21, 'h', "Beyond the [[critical]] angle, light reflects at the core-cladding boundary and stays guided in the core.", "Slide 21.");
  fill(21, 'h', "Light bouncing inside the core without escaping is called total internal [[reflection]].", "Slide 21.");
  fill(22, 'm', "A [[straight-through|straight through]] cable connects different devices, such as a PC to a switch.", "Slide 22.");
  fill(22, 'm', "A [[crossover|cross over|cross-over]] cable connects the same kind of devices, such as PC to PC.", "Slide 22.");
  fill(23, 'h', "Thin coaxial cable reaches [[185]] meters and thick coaxial cable reaches 500 meters.", "Slide 23.");
  fill(24, 'm', "Attenuation is measured in [[decibels|decibel|dB]] of loss per meter or kilometer.", "Slide 24.");
  fill(25, 'm', "[[Thermal|thermal noise]] noise is caused by the random movement of electrons in conductors and is always present.", "Slide 25.");
  fill(25, 'm', "[[Crosstalk|cross talk]] is signal bleeding from adjacent wires.", "Slide 25.");

  /* ---------- Section C: true / false ---------- */
  tf(6, 'e', "Transmission media sits beneath Layer 1 and is often called Layer 0.", true, "True. Slide 6.");
  tf(9, 'e', "Fiber optic cable is an unguided medium.", false, "False. It is guided (bounded); wireless media are unguided.");
  tf(12, 'm', "Fewer twists per meter give a twisted-pair cable better noise immunity.", false, "False. More twists per meter give greater noise immunity and higher bandwidth.");
  tf(13, 'm', "In differential signaling, the receiver subtracts the two wires so that common noise cancels.", true, "True. Slide 13.");
  tf(14, 'e', "Coaxial cable uses the RJ-45 connector.", false, "False. Coaxial uses BNC; twisted pair uses RJ-45.");
  tf(15, 'm', "The metallic braided shield of a coaxial cable also serves as ground.", true, "True. Slide 15.");
  tf(16, 'e', "Fiber optic cable transmits electrical voltage currents.", false, "False. It transmits pulses of light.");
  tf(17, 'm', "Fiber cannot be tapped without visibly interrupting the light transmission.", true, "True. Superior security (slide 17).");
  tf(19, 'm', "Single-mode fiber has a thicker core than multimode fiber.", false, "False. SMF ≈ 9-10 µm; MMF ≈ 50-62.5 µm.");
  tf(20, 'm', "Multimode fiber usually uses LED light sources.", true, "True. Lower-cost transceivers (slide 20).");
  tf(20, 'h', "Single-mode fiber suffers more modal dispersion than multimode fiber.", false, "False. SMF has zero modal dispersion; MMF is limited by it.");
  tf(21, 'm', "The cladding has a lower refractive index than the core.", true, "True. This traps light in the core.");
  tf(22, 'm', "A crossover cable is used to connect a PC to a switch.", false, "False. PC to switch (different devices) uses straight-through; crossover connects the same devices.");
  tf(23, 'm', "Twisted pair is the lowest-cost guided medium.", true, "True. Used in desktop office LANs (slide 23).");
  tf(24, 'm', "With a good enough cable, a signal can travel infinitely without loss.", false, "False. Every physical medium degrades the signal.");
  tf(25, 'h', "Thermal noise only appears when there is a nearby motor or power line.", false, "False. Thermal noise is always present; motors and power lines cause EMI.");

  /* ---------- Section D: short answer ---------- */
  def(9, 'e', 2, "Define guided media and give the three types.",
    [["Solid physical conductors (bounded) guide the signal along a specific path", "solid", "physical", "bounded", "specific path", "conduct"],
     ["Types: twisted pair, coaxial, fiber optic", "twisted", "coax", "fiber", "fibre"]],
    "Guided (bounded/conducted) media are solid physical conductors that guide signals along a specific path. The three types are twisted-pair cable, coaxial cable and fiber optic cable.");
  def(6, 'm', 2, "Why is transmission media called Layer 0?",
    [["It is located beneath Layer 1 (the Physical layer)", "beneath", "below", "under"],
     ["Layer 1 defines voltages/timing/encoding; the medium is the actual physical pathway the signals travel", "pathway", "path", "physical channel", "propagate"]],
    "Transmission media is located beneath Layer 1. The Physical layer defines voltages, frequencies, timing, bit encoding and pinouts, while the transmission medium is the actual physical pathway (channel) over which the signals propagate, so it is often called Layer 0.");
  def(21, 'm', 2, "Explain total internal reflection in a fiber optic cable.",
    [["Core has a higher refractive index than the cladding", "higher", "refractive"],
     ["Light hitting the boundary beyond the critical angle reflects back and zigzags through the core without escaping", "critical", "reflect", "zigzag", "without escaping"]],
    "The glass core has a higher refractive index than the glass cladding. According to Snell's law, light hitting the core-cladding boundary beyond the critical angle is reflected back instead of escaping, so it zigzags through the core indefinitely. This total internal reflection gives near-lossless optical transmission.");
  def(24, 'm', 2, "Define attenuation and state how it is measured and solved.",
    [["Loss of signal energy (strength) over distance; energy converts to heat", "loss", "energy", "strength", "heat", "distance"],
     ["Measured in dB per meter/km; amplifiers or repeaters regenerate the signal", "db", "decibel", "amplifier", "repeater"]],
    "Attenuation is the loss of signal energy over distance: signal strength drops as energy converts to heat. It is measured in decibels (dB) of loss per meter or kilometer, and amplifiers and repeaters are deployed to regenerate the degraded signal.");
  list(15, 'e', 2, "List the four layers of a coaxial cable from the center outward.",
    [["Center core conductor", "core", "conductor", "copper"], ["Non-conductive insulator", "insulat", "foam"], ["Metallic braided shield", "shield", "braid", "mesh"], ["Outer plastic jacket", "jacket", "pvc", "teflon"]],
    { explain: "Slide 15." });
  list(17, 'm', 3, "List four advantages of fiber optic cable.",
    [["Immense bandwidth", "bandwidth", "tbps", "terabit"], ["Extended distance", "distance", "km", "long"], ["EMI immunity", "emi", "immun", "interference"], ["Superior security", "secur", "tap"], ["Lightweight and compact", "light weight", "lightweight", "compact", "thin"]],
    { n: 4, explain: "Slide 17." });
  list(14, 'm', 3, "Give three reasons why coaxial cable outperformed twisted pair.",
    [["Heavy braided shielding prevents signal leakage", "shield", "leak", "braid"], ["Higher bandwidth (dozens of analog TV channels)", "bandwidth", "channel"], ["Extended range (hundreds of meters without severe attenuation)", "range", "hundreds", "distance", "attenuation"]],
    { explain: "Slide 14." });
  list(7, 'm', 3, "List the three types of interfaces that bridge Layer 1 to the medium.",
    [["Electrical interfaces (NIC PHY chips over copper)", "electrical", "phy", "nic"], ["Optical transceivers (lasers/LEDs into fiber)", "optical", "laser", "led"], ["Wireless radios (antennas)", "wireless", "radio", "antenna"]],
    { explain: "Slides 7-8." });
  list(13, 'm', 3, "List the three steps of how a twisted pair cancels EMI.",
    [["Differential signaling (+V and −V)", "differential", "inverted"], ["External noise hits both wires almost identically", "both wires", "identical", "noise hits"], ["Receiver subtraction cancels the noise", "subtract", "receiver", "cancel", "vanish"]],
    { explain: "Slide 13." });
  list([24, 25], 'e', 3, "List the three main reasons for transmission impairments.",
    [["Attenuation", "attenuat"], ["Distortion", "distort"], ["Noise", "noise", "crosstalk", "emi"]],
    { explain: "Slides 24-25." });

  /* ---------- Section E: explain ---------- */
  exp([19, 20], 'm', 5, "Compare single-mode fiber (SMF) and multimode fiber (MMF).",
    [["SMF: ultra-thin core about 9-10 µm; only one straight ray", "9", "10 micron", "thin", "single ray", "one ray", "straight"],
     ["SMF: laser diode source; zero modal dispersion; 10 to 100+ km", "laser", "zero", "100 km", "long distance"],
     ["SMF applications: Internet backbone, subsea cables, telecommunications", "backbone", "subsea", "ocean", "telecom"],
     ["MMF: thicker core about 50-62.5 µm; many rays bounce at different angles; LED source (lower cost)", "50", "62.5", "thick", "led", "bounce", "multiple ray"],
     ["MMF: modal dispersion limits distance to 500 m - 2 km; used in data centers and campus backbones", "dispersion", "2 km", "500", "data center", "campus"]],
    "Single-mode fiber has an ultra-thin core of about 9-10 microns that lets only one straight ray of light propagate. It uses a laser diode, has zero modal dispersion and carries signals 10 km to 100+ km, so it is used for the Internet backbone, trans-oceanic subsea cables and telecommunications. Multimode fiber has a thicker core of about 50-62.5 microns, so many rays bounce at different angles. It uses lower-cost LED transceivers, but modal dispersion (rays arriving at slightly different times) limits it to about 500 m - 2 km; it is used in data-center inter-rack links and enterprise campus backbones.");
  exp([12, 13, 14, 15], 'h', 5, "Explain the architecture of twisted-pair and coaxial cables and how each protects the signal from interference.",
    [["Twisted pair: two insulated copper wires twisted in a helical spiral; more twists per meter = better noise immunity", "twist", "helical", "spiral", "per meter"],
     ["Twisting + differential signaling: noise hits both wires equally and the receiver subtracts it", "differential", "subtract", "both wires", "cancel"],
     ["Coaxial: layers share one center axis: core conductor, insulator, braided shield, jacket", "axis", "core", "insulator", "jacket"],
     ["Coaxial braided shield blocks EMI and acts as ground; prevents leakage", "shield", "braid", "ground", "leak"],
     ["Coaxial gives higher bandwidth and longer range than twisted pair (TV channels, hundreds of meters)", "bandwidth", "range", "tv", "television", "hundreds"]],
    "A twisted pair is two insulated copper wires twisted around each other in a helical spiral (Cat6 has blue, orange, green and brown pairs). One wire carries the signal and the other its inverse (differential signaling); because of the continuous twisting, external noise hits both wires almost identically, and the receiver subtracts them so the noise cancels. More twists per meter give greater noise immunity and bandwidth. A coaxial cable shares one geometric center line: a copper core conductor, a plastic-foam insulator that keeps spacing uniform, a metallic braided shield that blocks EMI and serves as ground, and an outer PVC or Teflon jacket. The heavy shielding prevents signal leakage, which gave coax higher bandwidth (dozens of analog TV channels) and a longer range (hundreds of meters) than twisted pair.",
    { need: 4 });
  exp([22, 23], 'm', 4, "Evaluate twisted pair, coaxial and fiber optic cables in terms of distance, noise immunity, connectors, cost and usage.",
    [["Twisted pair (Cat6): up to 100 m; moderate (UTP) to high (STP) immunity; RJ-45; lowest cost; desktop office LANs", "100 m", "rj", "lowest", "office", "desktop"],
     ["Coaxial: 185 m (thin) to 500 m (thick); high immunity (braided shield); BNC; medium cost; cable TV & CCTV", "185", "500", "bnc", "cctv", "tv"],
     ["Fiber: 2 km (MMF) to 100+ km (SMF); complete EMI immunity; LC connectors; highest cost; core backbones", "2 km", "100 km", "lc", "backbone", "highest"],
     ["Conclusion: choice is a trade-off (copper for desks, fiber for backbones)", "trade", "desk", "choose", "depend"]],
    "Twisted pair (Cat6/6a) is copper wire pairs with an RJ-45 connector; it reaches 100 m without a repeater, has moderate (UTP) to high (STP) noise immunity, has the lowest cost and is used for desktop office LANs. Coaxial cable (RG-58/59) has a copper core with braided mesh and a BNC connector; it reaches 185 m (thin) to 500 m (thick), has high immunity thanks to its shield, costs a medium amount and is used for cable TV and CCTV. Fiber optic (SMF/MMF) is ultra-pure silica glass with LC connectors; it reaches 2 km (MMF) to 100+ km (SMF), is completely immune to EMI, has the highest cable/port cost and is used in core backbones. The choice is a trade-off: copper for desks, fiber for backbones.");
  exp([21], 'h', 5, "Using Snell's law, explain how light is guided in a fiber, and calculate the critical angle for a core with n₁ = 1.5 and cladding with n₂ = 1.0.",
    [["Core has a higher refractive index; cladding has a lower one", "higher", "lower", "refractive"],
     ["Snell's law: n₁ sin θ₁ = n₂ sin θ₂; light refracts at the core-cladding boundary", "n1 sin", "snell", "refract"],
     ["Critical angle: sin θc = n₂ / n₁", "sin", "n2 n1", "critical"],
     ["Calculation: sin θc = 1.0 / 1.5 = 0.667 → θc ≈ 41.8°", "41.8", "0.667", "0.67", "42"],
     ["Beyond the critical angle: total internal reflection; light zigzags through the core without escaping", "total internal", "zigzag", "without escaping", "reflect"]],
    "A fiber has a glass core with a higher refractive index and a glass cladding with a lower one. By Snell's law, n₁ sin θ₁ = n₂ sin θ₂: light refracts as it crosses the core-cladding boundary. The critical angle is where the refracted ray would travel along the boundary (θ₂ = 90°), so sin θc = n₂ / n₁ = 1.0 / 1.5 = 0.667 and θc = arcsin(0.667) ≈ 41.8°. Light that hits the boundary at more than 41.8° is not refracted out but totally internally reflected, so it zigzags through the core indefinitely without escaping: lossless optical signaling.",
    { need: 4 });
});
