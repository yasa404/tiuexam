/* Lecture 2: Radio wave propagation principles (PDF pages 4-16). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;
  var LINK1 = `Transmit power Pt     20 dBm
Tx antenna gain Gt     8 dBi
Rx antenna gain Gr     8 dBi
Tx cable loss          1 dB
Rx cable loss          1 dB
Free-space loss      100 dB
Rx sensitivity       -85 dBm`;
  var LINK2 = `Transmit power Pt     23 dBm
Tx antenna gain Gt    12 dBi
Rx antenna gain Gr    10 dBi
Tx cable loss          2 dB
Rx cable loss          1 dB
Free-space loss      110 dB
Rx sensitivity       -82 dBm`;
  var LINK3 = `Transmit power Pt     18 dBm
Tx antenna gain Gt     6 dBi
Rx antenna gain Gr     6 dBi
Tx cable loss          2 dB
Rx cable loss          2 dB
Free-space loss      112 dB
Rx sensitivity       -90 dBm`;
  var FSPL = `FSPL (dB) = 32.44 + 20 log10(d) + 20 log10(f)
d = distance in km, f = frequency in MHz`;
  var FRES = `r = 17.32 × √( (d1 × d2) / (f × D) )
r in meters, d1, d2 and D = d1 + d2 in km, f in GHz`;

  /* ---------- Section A ---------- */
  mcq(5, 'e', "A radio wave bounces off a large smooth surface. This is called…",
    ["reflection", "diffraction", "scattering", "absorption"], "Slide 5.");
  mcq(5, 'e', "The bending of radio waves around obstacles or edges is called…",
    ["diffraction", "reflection", "scattering", "polarization"], "Slide 5.");
  mcq(6, 'e', "Radio energy is dispersed in many directions by small objects or rough surfaces. This is…",
    ["scattering", "reflection", "diffraction", "free-space loss"], "Slide 6.");
  mcq(5, 'm', "Reflection occurs when the dimensions of the surface are…",
    ["much larger than the wavelength", "much smaller than the wavelength", "exactly equal to the wavelength", "not related to the wavelength"], "Slide 5.");
  mcq(6, 'm', "Scattering occurs when the dimensions of the objects are…",
    ["comparable to or smaller than the wavelength", "much larger than the wavelength of the signal", "always larger than one kilometer in length", "equal to the distance between the antennas"], "Slide 6.");
  mcq(5, 'm', "Diffraction is more pronounced at…",
    ["lower frequencies", "higher frequencies", "optical frequencies", "all frequencies equally"], "Longer wavelengths bend more.");
  mcq(5, 'm', "A receiver behind the corner of a building still gets the signal. Which mechanism explains this best?",
    ["Diffraction", "Modulation", "Amplification", "Encryption"], "Waves bend around edges.");
  mcq(6, 'm', "Signals that hit trees, street signs, lamp posts or rain are mainly…",
    ["scattered", "amplified", "encoded", "modulated"], "Slide 6.");
  mcq(5, 'm', "A large lake between two antennas mainly causes…",
    ["reflection", "scattering", "encryption", "multiplexing"], "Water is a large smooth surface.");
  mcq(6, 'e', "A wireless signal reaches the receiver through several paths. This is called…",
    ["multipath", "link margin", "line of sight", "attenuation"], "Slide 6.");
  mcq(6, 'e', "Which path from the transmitter to the receiver is the shortest?",
    ["The direct path", "The reflected path", "The diffracted path", "The scattered path"], "Slide 6.");
  mcq(6, 'm', "What is multipath fading?",
    ["Fluctuation of the received signal strength caused by copies that interfere", "A steady increase of the received signal strength on a single direct path", "The loss of energy in the cable between the antenna and the radio receiver", "The use of several antennas that send different data at exactly the same time"], "Slide 6.");
  mcq(5, 'm', "Why can reflection be a problem for the receiver?",
    ["Copies of the signal arrive at different times and interfere", "The signal becomes a digital signal after the reflection", "The frequency of the transmitter becomes zero after the reflection", "The receiver can no longer be moved after the reflection"], "Multipath propagation.");
  mcq(4, 'm', "Look at the picture. Which signal bends over the edge of the small building?",
    ["Diffracted signal", "Reflected signal", "Directly received signal", "Scattered signal"], "Slide 4.", { qfig: 'mechanismsBlank' });
  mcq(7, 'e', "In which range is communication possible with a low error rate?",
    ["Transmission range", "Detection range", "Interference range", "Noise range"], "Slide 7.");
  mcq(7, 'm', "In which range can the signal be detected although no communication is possible?",
    ["Detection range", "Transmission range", "Interference range", "Fresnel range"], "Slide 7.");
  mcq(7, 'm', "In which range may the signal not be detected, while it adds to the background noise?",
    ["Interference range", "Transmission range", "Detection range", "Coverage range"], "Slide 7.");
  mcq(7, 'h', "Which order is correct, from the closest to the farthest from the sender?",
    ["Transmission, detection, interference", "Interference, detection, transmission", "Detection, transmission, interference", "Transmission, interference, detection"], "Slide 7.");
  mcq(8, 'e', "The reduction in the strength of a signal on its way to the receiver is called…",
    ["attenuation", "amplification", "modulation", "polarization"], "Slide 8.");
  mcq(8, 'm', "Which formula gives the attenuation in dB?",
    ["10 log10(Pr/Pt)", "20 log10(Pt × Pr)", "10 log10(Pt + Pr)", "Pr − 10 log10(d)"], "Slide 8.");
  mcq(8, 'm', "Which of these affects the attenuation of a wireless signal?",
    ["The operating frequency", "The color of the receiver", "The name of the network", "The language of the user"], "Slide 8.");
  mcq(8, 'm', "Which one is an atmospheric condition that affects attenuation?",
    ["Rain", "Antenna gain", "Buildings", "Cable length"], "Slide 8.");
  mcq(8, 'h', "The received power is one tenth of the transmitted power. What is 10 log10(Pr/Pt)?",
    ["−10 dB", "10 dB", "−1 dB", "−100 dB"], "10 log10(0.1) = −10 dB.");
  mcq(9, 'e', "dBm is power in decibels relative to…",
    ["1 mW", "1 W", "1 kW", "1 µW"], "Slide 9.");
  mcq(9, 'e', "0 dBm is equal to…",
    ["1 mW", "0 mW", "10 mW", "1 W"], "Slide 9.");
  mcq(9, 'm', "How much is 100 mW in dBm?",
    ["20 dBm", "10 dBm", "30 dBm", "100 dBm"], "10 log10(100) = 20.");
  mcq(9, 'm', "How much is 30 dBm?",
    ["1 W", "30 mW", "3 W", "100 mW"], "10^(30/10) = 1000 mW = 1 W.");
  mcq(9, 'm', "How much is 10 dBm in mW?",
    ["10 mW", "1 mW", "100 mW", "20 mW"], "10^(10/10) = 10 mW.");
  mcq(9, 'h', "A power of −30 dBm is equal to…",
    ["1 µW", "1 mW", "30 µW", "1 W"], "10^(−3) mW = 1 µW.");
  mcq(9, 'h', "A power increases from 20 dBm to 30 dBm. In mW the power becomes…",
    ["10 times larger", "1.5 times larger", "2 times larger", "100 times larger"], "100 mW to 1000 mW.");
  mcq(10, 'e', "Free-space path loss happens even when there are…",
    ["no obstacles, reflections or interference", "many obstacles but there is no distance at all", "two transmitters at the same position", "no transmitter and no receiver at all"], "Slide 10.");
  mcq(10, 'm', "Why does the received power fall with distance in free space?",
    ["The energy spreads out over a larger area", "The frequency of the signal becomes lower", "The speed of the signal becomes lower", "The antenna of the receiver becomes smaller"], "Slide 10.");
  mcq(10, 'm', "In the formula FSPL = 32.44 + 20 log10(d) + 20 log10(f), the units of d and f are…",
    ["km and MHz", "m and Hz", "km and GHz", "m and MHz"], "Slide 10.");
  mcq(10, 'h', "The distance is multiplied by 10. The free-space path loss…",
    ["increases by 20 dB", "increases by 10 dB", "decreases by 20 dB", "stays the same"], "20 log10(10) = 20.");
  mcq(10, 'h', "The distance is doubled. The free-space path loss increases by about…",
    ["6 dB", "2 dB", "3 dB", "20 dB"], "20 log10(2) ≈ 6 dB.");
  mcq(10, 'm', "Two links have the same distance. Which one has the higher free-space path loss?",
    ["The link with the higher frequency", "The link with the lower frequency", "The link with the taller antenna towers", "They always have the same loss"], "FSPL grows with f.");
  mcq(11, 'e', "The Fresnel zone is…",
    ["an elliptical region around the line-of-sight path", "a circle around the transmitter for signal detection", "the area behind a building without any signal", "the band of frequencies of the transmitter"], "Slide 11.");
  mcq(11, 'm', "Two antennas can see each other, but a hill enters the Fresnel zone. What can happen?",
    ["The signal strength is reduced", "The data rate becomes much higher", "The frequency becomes higher", "Nothing changes in the link"], "Line of sight is not enough.");
  mcq(12, 'm', "How much of the radius of the first Fresnel zone should be free of obstacles?",
    ["At least 60%", "At least 10%", "At most 30%", "Exactly 100%"], "Slide 12.");
  mcq(12, 'm', "Where is the Fresnel radius the largest?",
    ["At the midpoint of the link", "At the transmitter", "At the antenna of the receiver", "At the top of the tower"], "Slide 12.");
  mcq(12, 'h', "The frequency of a link is increased and the distance stays the same. The Fresnel radius…",
    ["becomes smaller", "becomes larger", "stays exactly the same", "becomes zero"], "f is in the denominator.");
  mcq(14, 'e', "A link budget decides whether…",
    ["there is enough signal strength for the receiver", "there is enough money to buy and install a new antenna", "the users have enough time to send their data", "the cable is long enough for the two buildings"], "Slide 14.");
  mcq(14, 'm', "Which formula gives the received power in dB units?",
    ["Pr = Pt + Gt + Gr − Losses", "Pr = Pt − Gt − Gr + Losses", "Pr = Pt × Gt × Gr × Losses", "Pr = Pt + Gt − Gr + Losses"], "Slide 14.");
  mcq(14, 'e', "The minimum power needed at the receiver for the desired performance is the…",
    ["receiver sensitivity", "free-space path loss", "link margin", "antenna gain"], "Slide 14.");
  mcq(14, 'm', "Link margin is equal to…",
    ["received power − receiver sensitivity", "receiver sensitivity − transmit power", "transmit power + path loss", "received power + cable losses"], "Slide 14.");
  mcq(14, 'm', "Which expression is also equal to the link margin?",
    ["Actual SNR − required SNR", "Required SNR − actual SNR", "Actual SNR + required SNR", "Actual SNR × required SNR"], "Slide 14.");
  mcq(15, 'm', "Received power = −70 dBm and receiver sensitivity = −80 dBm. The link margin is…",
    ["10 dB", "−10 dB", "150 dB", "−150 dB"], "−70 − (−80) = 10 dB.");
  mcq(15, 'm', "What does a larger link margin generally mean?",
    ["A more reliable wireless link", "A less reliable wireless link", "A shorter distance is required", "A lower transmitter frequency"], "Slide 15.");
  mcq(15, 'm', "Which one is NOT something the link margin protects against?",
    ["The price of the antenna", "Fading of the signal", "Weather effects", "Equipment aging"], "Slide 15.");
  mcq(16, 'm', "EIRP is calculated with…",
    ["Pt + Gt − Ltx", "Pt − Gt + Ltx", "Pr + Gr − Lrx", "Pt + Gr + FSPL"], "Slide 16.");
  mcq(16, 'h', "Pt = 20 dBm, Gt = 8 dBi and the transmitter cable loss is 1 dB. The EIRP is…",
    ["27 dBm", "29 dBm", "13 dBm", "11 dBm"], "20 + 8 − 1 = 27.");
  mcq(16, 'h', "A link has a link margin of −3 dB. What does this mean?",
    ["The received power is below the sensitivity", "The link is very reliable in bad weather", "The received power is above the sensitivity", "The transmitter power is exactly 3 dBm"], "Negative margin.");

  /* ---------- Section C ---------- */
  tf(5, 'e', "Reflection occurs when a wave strikes a large smooth surface.", true, "Slide 5.");
  tf(5, 'm', "Diffraction is more pronounced at higher frequencies.", false, "At lower frequencies (longer wavelengths).");
  tf(5, 'm', "Reflection can help signals reach areas without a direct line of sight.", true, "Slide 5.");
  tf(6, 'e', "Scattering concentrates all the energy in one direction.", false, "It disperses the energy in many directions.");
  tf(6, 'm', "Scattering can increase signal fading and reduce the received power.", true, "Slide 6.");
  tf(6, 'm', "In multipath, copies of the same signal arrive from different paths.", true, "Slide 6.");
  tf(7, 'm', "In the detection range communication is possible with a low error rate.", false, "That is the transmission range.");
  tf(7, 'm', "In the interference range the signal adds to the background noise.", true, "Slide 7.");
  tf(8, 'e', "Attenuation is an increase of the signal strength.", false, "A reduction.");
  tf(9, 'e', "0 dBm means that there is no power.", false, "0 dBm = 1 mW.");
  tf(9, 'm', "20 dBm is equal to 100 mW.", true, "Slide 9.");
  tf(10, 'm', "Free-space path loss increases with distance and with frequency.", true, "Slide 10.");
  tf(10, 'm', "Free-space path loss needs obstacles between the transmitter and the receiver.", false, "It happens in empty space.");
  tf(11, 'm', "Line of sight alone is enough for a strong wireless link.", false, "Fresnel zone clearance is also needed.");
  tf(12, 'm', "The largest Fresnel radius is at the midpoint of the link.", true, "Slide 12.");
  tf(14, 'm', "Antenna gains are added in the link budget, and losses are subtracted.", true, "Slide 14.");
  tf(15, 'm', "A link margin of 10 dB means the received signal is 10 dB stronger than the minimum required level.", true, "Slide 15.");
  tf(15, 'm', "A smaller link margin means a more reliable link.", false, "A larger margin.");

  /* ---------- Section B ---------- */
  fill(5, 'e', "The bouncing of a radio wave off a large smooth surface is called [[reflection]].", "Slide 5.");
  fill(5, 'e', "The bending of radio waves around obstacles or edges is called [[diffraction]].", "Slide 5.");
  fill(6, 'e', "Dispersing radio energy in many directions by small objects is called [[scattering]].", "Slide 6.");
  fill(6, 'm', "The fluctuation of the received signal strength caused by copies of the wave on different paths is multipath [[fading]].", "Slide 6.");
  fill(6, 'm', "The shortest route from the transmitter to the receiver is the [[direct]] path.", "Slide 6.");
  fill(7, 'm', "The range in which communication is possible with a low error rate is the [[transmission]] range.", "Slide 7.");
  fill(7, 'm', "In the [[interference]] range the signal only adds to the background noise.", "Slide 7.");
  fill(8, 'e', "The reduction in the strength of a signal is called [[attenuation]].", "Slide 8.");
  fill(9, 'm', "A power of 1 mW is equal to [[0|zero]] dBm.", "Slide 9.");
  fill(9, 'm', "A power of 1 W is equal to [[30|thirty]] dBm.", "Slide 9.");
  fill(9, 'h', "A power of 10 mW is equal to [[10|ten]] dBm, and 40 dBm is equal to [[10|ten]] W.", "10^4 mW = 10 W.");
  fill(10, 'm', "As a signal moves away from the transmitter, its energy spreads out over a larger [[area]].", "Slide 10.");
  fill(10, 'm', "In the free-space path loss formula the distance is in [[km|kilometers|kilometres]] and the frequency is in [[MHz|megahertz]].", "Slide 10.");
  fill(11, 'm', "The elliptical region around the line-of-sight path is the [[Fresnel]] zone.", "Slide 11.");
  fill(12, 'm', "At least [[60|60%|sixty]] percent of the radius of the first Fresnel zone should be free of obstacles.", "Slide 12.");
  fill(14, 'm', "The amount by which the received power exceeds the receiver sensitivity is the link [[margin]].", "Slide 14.");
  fill(14, 'm', "The calculation that decides whether there is enough signal strength for the receiver is the link [[budget]].", "Slide 14.");
  fill(14, 'm', "The minimum power needed at the receiver is called the receiver [[sensitivity]].", "Slide 14.");
  fill(14, 'm', "SNR stands for signal-to-[[noise]] ratio.", "Slide 14.");
  fill(16, 'h', "EIRP stands for effective [[isotropic]] radiated power.", "Slide 16.");

  /* ---------- Section D ---------- */
  def(5, 'e', 2, "Define reflection and diffraction.",
    [["Reflection: the wave bounces off a large smooth surface", "bounce", "smooth", "large"], ["Diffraction: bending of waves around obstacles or edges", "bend", "around"]],
    "Reflection is when a radio wave bounces off a large smooth surface. Diffraction is the bending of radio waves around obstacles or edges.");
  def(6, 'e', 2, "Define scattering and give an example.",
    [["The energy is dispersed in many directions by small objects or rough surfaces", "many directions", "small objects", "dispers", "rough"], ["Example: trees, street signs, lamp posts or rain", "tree", "sign", "lamp", "rain", "foliage"]],
    "Scattering is when radio energy is dispersed in many directions by small objects or rough surfaces, for example trees or street signs.");
  def(6, 'm', 2, "Define multipath and multipath fading.",
    [["Multipath: the signal reaches the receiver through multiple paths", "multiple paths", "several paths", "different paths", "many paths"], ["Multipath fading: fluctuation of the received signal strength (interference between copies)", "fluctuation", "interfer", "strength"]],
    "Multipath is when a signal reaches the receiver through multiple paths. Multipath fading is the fluctuation of the received signal strength caused by the copies interfering with one another.");
  def(7, 'm', 2, "What is the difference between the transmission range and the detection range?",
    [["Transmission range: communication is possible (low error rate)", "communication is possible", "low error", "can communicate"], ["Detection range: the signal can be detected but no communication is possible", "no communication", "only detect", "detected but", "but not communicate", "not possible"]],
    "In the transmission range communication is possible with a low error rate. In the detection range the signal can be detected but no communication is possible.");
  def(8, 'e', 2, "Define attenuation and write its formula in dB.",
    [["The reduction in the strength of the signal", "reduction", "decrease", "loss"], ["10 log10(Pr/Pt)", "log", "pr pt"]],
    "Attenuation is the reduction in the strength of the signal. Attenuation (dB) = 10 log10(Pr/Pt).");
  def(10, 'e', 2, "Define free-space path loss and state why it happens.",
    [["Reduction in signal power as it travels through empty space", "reduction", "empty space", "decrease"], ["The energy spreads out over a larger area", "spread", "larger area"]],
    "Free-space path loss is the reduction in radio signal power as it travels through empty space, because the energy spreads out over a larger area.");
  def(11, 'm', 2, "Define the Fresnel zone, and state why line of sight is not enough.",
    [["An elliptical region around the line-of-sight path", "ellip", "region around"], ["Objects inside the zone cause loss, so clearance is needed", "clear", "obstacle", "loss", "objects", "attenuation"]],
    "The Fresnel zone is an elliptical region around the line-of-sight path. Objects inside the zone cause signal loss, so Fresnel zone clearance is also needed.");
  def(14, 'm', 2, "Define link budget and link margin.",
    [["Link budget: a calculation to decide whether there is enough signal strength at the receiver", "enough signal", "calculation", "enough strength"], ["Link margin: the amount by which the received power exceeds the sensitivity", "exceed", "received power minus", "above"]],
    "A link budget is a calculation to decide whether there is enough signal strength at the receiver. The link margin is the amount by which the received power exceeds the receiver sensitivity.");
  list([5, 6], 'e', 3, "List the three mechanisms that change the path of a radio signal.",
    [["Reflection", "reflect"], ["Diffraction", "diffract"], ["Scattering", "scatter"]]);
  list(6, 'm', 4, "List the four paths through which a signal can reach the receiver.",
    [["Direct path", "direct"], ["Reflected path", "reflect"], ["Diffracted path", "diffract"], ["Scattered path", "scatter"]]);
  list(8, 'm', 4, "List four factors that affect attenuation in wireless communication.",
    [["Distance", "distance"], ["Operating frequency", "frequency"], ["Obstacles", "obstacle", "building", "wall", "terrain"], ["Reflection, diffraction and scattering", "reflect", "diffract", "scatter"], ["Atmospheric conditions", "atmospher", "rain", "fog", "humid", "weather"], ["Absorption by materials", "absor"], ["Multipath fading", "multipath", "fading"], ["Antenna gain, height and alignment", "antenna", "gain", "height", "alignment"], ["Polarization mismatch", "polari"], ["Interference and noise", "interference", "noise"]], { n: 4 });
  list(11, 'm', 3, "List three effects of objects that intrude into the Fresnel zone.",
    [["Signal attenuation", "attenuation"], ["Diffraction losses", "diffraction"], ["Reduced signal strength", "strength", "weak"], ["Lower data rates", "data rate", "slow"], ["Connection instability", "instab", "unstable"]], { n: 3 });
  list(15, 'm', 3, "List three things that the link margin protects against.",
    [["Fading", "fading"], ["Interference", "interference"], ["Weather effects", "weather", "rain", "fog", "snow"], ["Obstacles and shadowing", "obstacle", "shadow"], ["Equipment aging and component variations", "aging", "ageing", "equipment", "component"]], { n: 3 });
  list(7, 'e', 3, "List the three signal propagation ranges.",
    [["Transmission range", "transmission"], ["Detection range", "detection"], ["Interference range", "interference"]]);

  /* ---------- Section E ---------- */
  exp([5, 6], 'm', "Compare reflection, diffraction and scattering.",
    [["Reflection: bounces off a large smooth surface", "bounce", "smooth"], ["Diffraction: bends around obstacles or edges", "bend", "edges"], ["Scattering: small objects or rough surfaces disperse the energy in many directions", "small", "rough", "many directions"], ["An example, such as buildings, corners or trees", "building", "corner", "tree", "sign", "wall", "water"]],
    "In reflection the wave bounces off a large smooth surface such as a building. In diffraction the wave bends around obstacles or edges such as a corner. In scattering small objects or rough surfaces, such as trees, disperse the energy in many directions.");
  exp(7, 'm', "Explain the three signal propagation ranges around a sender.",
    [["Transmission range: communication is possible", "transmission"], ["with a low error rate", "low error"], ["Detection range: the signal is detected but no communication", "detect"], ["Interference range: may not be detected, adds to the noise", "noise"]],
    "In the transmission range communication is possible with a low error rate. In the detection range the signal can be detected but no communication is possible. In the interference range the signal may not be detected, but it adds to the background noise.");
  exp([11, 12], 'm', "Explain the Fresnel zone and how it should be kept for a strong link.",
    [["An elliptical region around the line of sight", "ellip"], ["Objects in it cause attenuation, lower data rates or instability", "attenuation", "data rate", "instab", "loss", "reduce"], ["At least 60% of the radius should be free", "60"], ["The radius is the largest at the midpoint", "midpoint", "middle"]],
    "The Fresnel zone is an elliptical region around the line of sight. Objects in it cause attenuation, lower data rates and connection instability. At least 60% of the radius of the first zone should be free of obstacles. The radius is the largest at the midpoint of the link.");
  exp([14, 15], 'm', "Explain the link budget and why the link margin is important.",
    [["Received power = transmit power + gains − losses", "gain", "pt gt gr"], ["It is compared with the receiver sensitivity (minimum power)", "sensitivity", "minimum"], ["Link margin = received power − sensitivity", "margin"], ["It is a safety buffer against fading, weather, interference…", "buffer", "fading", "weather", "interference", "reliable"]],
    "The received power is the transmit power plus the antenna gains minus the losses. It is compared with the receiver sensitivity, which is the minimum power. The link margin is the received power minus the sensitivity. It is a safety buffer against fading, weather and interference.");
  draw([4, 5, 6], 'm', "Draw a transmitter and a receiver with the four paths of a multipath signal.", 'mechanisms',
    [["Direct signal", "direct"], ["Reflected signal (building)", "reflect"], ["Diffracted signal (edge)", "diffract"], ["Scattered signal (small object)", "scatter"]],
    "Transmitter and receiver with a direct signal, a signal reflected by a building, a signal diffracted by an edge, and a signal scattered by a small object.");
  draw(7, 'e', "Draw the three propagation ranges around a sender.", 'ranges',
    [["Sender in the center", "sender", "center", "centre"], ["Transmission range (inner)", "transmission"], ["Detection range", "detection"], ["Interference range (outer)", "interference"]],
    "Three circles around the sender in the center: transmission range (inner), detection range, and interference range (outer).");
  draw([11, 12], 'm', "Draw the Fresnel zone of a link and label its main parts.", 'fresnel',
    [["Two antennas (transmitter and receiver)", "antenna", "transmitter"], ["Line of sight", "line of sight"], ["Fresnel zone (ellipse)", "fresnel", "ellipse"], ["Largest radius at the midpoint / obstacle", "midpoint", "middle", "obstacle", "radius"]],
    "Two antennas (transmitter and receiver) joined by the line of sight. The Fresnel zone is an ellipse around it, with the largest radius at the midpoint. An obstacle such as a hill should stay outside the zone.");
  calc(9, 'e', "Convert 50 mW to dBm, and 20 dBm to mW.",
    [["P(dBm) = 10 log10(P mW)", "log"], ["10 log10(50)", "#50"], ["≈ 17 dBm", "#17~0.1"], ["P(mW) = 10^(dBm/10)", "10 2", "10 20", "20 10", "power of", "#100"], ["100 mW", "#100"]],
    "P(dBm) = 10 log10(50) = 16.99 dBm, about 17 dBm. P(mW) = 10^(20/10) = 10^2 = 100 mW");
  calc(10, 'm', "Calculate the free-space path loss of a 2400 MHz link over 1 km.",
    [["FSPL = 32.44 + 20 log10(d) + 20 log10(f)", "#32.44"], ["20 log10(1) = 0", "#0"], ["20 log10(2400)", "#2400"], ["≈ 67.6 dB", "#67.6~0.1"], ["FSPL ≈ 100.04 dB", "#100.04~0.1"]],
    "FSPL = 32.44 + 20 log10(1) + 20 log10(2400) = 32.44 + 0 + 67.6 = 100.04 dB", { code: FSPL });
  calc(10, 'h', "Calculate the free-space path loss of a 1000 MHz link over 10 km. How much does it change if the distance becomes 100 km?",
    [["FSPL = 32.44 + 20 log10(d) + 20 log10(f)", "#32.44"], ["20 log10(10) = 20", "#20"], ["20 log10(1000) = 60", "#60"], ["FSPL = 112.44 dB", "#112.44~0.1"], ["At 100 km: 20 dB more (132.44 dB)", "20 db more", "increases by 20", "#132.44~0.1", "more"]],
    "FSPL = 32.44 + 20 log10(10) + 20 log10(1000) = 32.44 + 20 + 60 = 112.44 dB. At 100 km it is 20 dB more: 132.44 dB", { code: FSPL });
  calc([12, 13], 'm', "A 2.4 GHz link has a distance of 10 km. Calculate the largest Fresnel radius, and how far obstacles should be from the line of sight.",
    [["The largest radius is at the midpoint: d1 = d2 = 5 km", "#5"], ["r = 17.32 √(25 / 24)", "#25", "#17.32"], ["r ≈ 17.7 m", "#17.68~0.1"], ["60% of the radius", "#60", "#0.6"], ["≈ 10.6 m (about 10 m)", "#10.6~0.1", "#10"]],
    "At the midpoint d1 = d2 = 5 km. r = 17.32 √((5 × 5) / (2.4 × 10)) = 17.32 √(25 / 24) = 17.68 m. 60% of it: 0.6 × 17.68 = 10.6 m", { code: FRES });
  calc([12, 13], 'h', "A 5 GHz link has a distance of 8 km. Calculate the largest Fresnel radius and the clearance that is needed.",
    [["d1 = d2 = 4 km", "#4"], ["r = 17.32 √(16 / 40)", "#16", "#17.32"], ["r ≈ 10.95 m", "#10.95~0.1"], ["60% of the radius", "#60", "#0.6"], ["≈ 6.57 m", "#6.57~0.1"]],
    "At the midpoint d1 = d2 = 4 km. r = 17.32 √((4 × 4) / (5 × 8)) = 17.32 √(16 / 40) = 10.95 m. 60% of it: 0.6 × 10.95 = 6.57 m", { code: FRES });
  calc(16, 'm', "For the link below, calculate the EIRP, the received power and the link margin.",
    [["EIRP = 20 + 8 − 1 = 27 dBm", "#27"], ["Pr = Pt + Gt + Gr − losses", "pt gt gr", "pr pt", "20 8 8"], ["Pr = −66 dBm", "#-66"], ["Margin = Pr − sensitivity", "66 85", "sensitivity"], ["Link margin = 19 dB (reliable)", "#19"]],
    "EIRP = Pt + Gt - Ltx = 20 + 8 - 1 = 27 dBm. Pr = Pt + Gt + Gr - Ltx - Lrx - FSPL = 20 + 8 + 8 - 1 - 1 - 100 = -66 dBm. Link margin = Pr - sensitivity = (-66) - (-85) = 19 dB, so the link is reliable.", { code: LINK1 });
  calc(16, 'm', "Calculate the EIRP, the received power and the link margin of this link. Is it reliable?",
    [["EIRP = 23 + 12 − 2 = 33 dBm", "#33"], ["Pr = Pt + Gt + Gr − losses", "pt gt gr", "pr pt", "23 12 10"], ["Pr = −68 dBm", "#-68"], ["Margin = Pr − sensitivity", "68 82", "sensitivity"], ["Link margin = 14 dB (reliable)", "#14"]],
    "EIRP = Pt + Gt - Ltx = 23 + 12 - 2 = 33 dBm. Pr = Pt + Gt + Gr - Ltx - Lrx - FSPL = 23 + 12 + 10 - 2 - 1 - 110 = -68 dBm. Link margin = Pr - sensitivity = (-68) - (-82) = 14 dB, so the link is reliable.", { code: LINK2 });
  calc(16, 'h', "For the link below, calculate the received power and the link margin. A margin of 10 dB is considered acceptable: is this link acceptable?",
    [["Pr = Pt + Gt + Gr − losses", "pt gt gr", "pr pt", "18 6 6"], ["Pr = −86 dBm", "#-86"], ["Margin = Pr − sensitivity", "86 90", "sensitivity"], ["Link margin = 4 dB", "#4"], ["Not acceptable (less than 10 dB)", "not acceptable", "unacceptable", "less than", "below", "not reliable"]],
    "Pr = Pt + Gt + Gr - Ltx - Lrx - FSPL = 18 + 6 + 6 - 2 - 2 - 112 = -86 dBm. Link margin = Pr - sensitivity = (-86) - (-90) = 4 dB. It is not acceptable because 4 dB is less than 10 dB.", { code: LINK3 });
  pick([5, 6], 'm', "A receiver is behind a hill and the direct path is blocked. Which signal frequency is better for reaching it by bending? Why?",
    ["A lower frequency", "A higher frequency", "Frequency does not matter"], 0,
    [["Diffraction is the bending around obstacles", "diffract", "bend"], ["It is more pronounced at lower frequencies (longer wavelengths)", "longer", "more pronounced", "at lower", "low freq"]],
    "The wave reaches the receiver by diffraction, which is bending around obstacles. It is more pronounced at lower frequencies, which have longer wavelengths.");
  pick([11, 12], 'h', "Two towers can see each other, but trees fill half of the first Fresnel zone in the middle. What is the best action? Why?",
    ["Do nothing, line of sight is enough", "Raise the antennas or remove the trees", "Lower both antennas"], 1,
    [["Line of sight is not enough; Fresnel clearance is needed", "not enough", "fresnel", "clearance"], ["At least 60% of the radius should be free", "60", "free", "obstacle", "loss"]],
    "Line of sight is not enough: Fresnel zone clearance is needed. At least 60% of the radius should be free of obstacles to avoid signal loss.");
  pick([14, 15], 'm', "Link A has a margin of 3 dB and link B has a margin of 18 dB. Which link is better for a rainy area? Why?",
    ["Link A", "Link B", "They are the same"], 1,
    [["A larger link margin means a more reliable link", "larger", "more reliable", "higher"], ["The margin is a buffer against weather and fading", "weather", "rain", "fading", "buffer"]],
    "Link B, because a larger link margin means a more reliable link. The margin is a safety buffer against weather effects such as rain, and fading.");
});
