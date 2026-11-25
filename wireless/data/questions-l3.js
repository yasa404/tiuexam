/* Lecture 3: Introduction to antennas and arrays (PDF pages 4-33). */
EC.lecture(3, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;

  /* ---------- Section A ---------- */
  mcq(4, 'e', "An antenna is a device that converts…",
    ["electrical signals into electromagnetic waves and vice versa", "digital data into analog voice and then into printed documents", "electrical power into mechanical power for the transmitter", "sound waves into light waves for the optical fiber"], "Slide 4.");
  mcq(4, 'e', "During reception, an antenna converts…",
    ["electromagnetic waves into electrical energy", "electrical energy into electromagnetic waves", "electrical energy into heat and light", "electromagnetic waves into sound waves"], "Slide 4.");
  mcq(4, 'm', "Why are antennas called the gateway of a wireless system?",
    ["They connect the communication equipment with the wireless medium", "They store the received information until the user asks for it", "They protect the network with a password against eavesdropping", "They supply the electrical power for the transmitter and receiver"], "Slide 4.");
  mcq(5, 'e', "An ideal antenna that radiates equally in every direction is called…",
    ["isotropic", "directional", "parabolic", "dipole"], "Slide 5.");
  mcq(5, 'm', "Which statement about the isotropic antenna is correct?",
    ["It is only an ideal model and cannot be built", "It is the most common antenna in mobile phones", "It has the highest directivity of all antennas", "It radiates only in one narrow direction"], "Slide 5.");
  mcq(5, 'e', "The ability of an antenna to radiate more strongly in some directions than in others is…",
    ["directivity", "reciprocity", "efficiency", "bandwidth"], "Slide 5.");
  mcq(5, 'm', "What is the difference between antenna gain and directivity?",
    ["Gain also accounts for losses; directivity ignores them", "Directivity also accounts for losses; gain ignores them", "Gain is for receiving; directivity is for sending", "Gain is in meters; directivity is in seconds"], "Slide 5.");
  mcq(5, 'm', "Which formula is correct?",
    ["Gain = Directivity × Efficiency", "Gain = Directivity ÷ Efficiency", "Gain = Directivity + Efficiency", "Directivity = Gain × Efficiency"], "Slide 5.");
  mcq(5, 'm', "Why is the practical gain always lower than the directivity?",
    ["The efficiency of a real antenna is less than 1", "The directivity of a real antenna is equal to zero", "Real antennas radiate equally everywhere", "Real antennas have no conductor at all"], "Slide 5.");
  mcq(5, 'h', "An antenna has a directivity of 10 and an efficiency of 80%. Its gain is…",
    ["8", "12.5", "10.8", "0.8"], "G = 0.8 × 10 = 8.");
  mcq(6, 'e', "Antenna gain is typically measured in…",
    ["dBi", "Hz", "ohms", "meters"], "Slide 6.");
  mcq(6, 'm', "The letter i in dBi means relative to…",
    ["an isotropic radiator", "an ideal input impedance", "an input current", "an indoor antenna"], "Slide 6.");
  mcq(6, 'e', "The range of frequencies over which an antenna operates correctly is its…",
    ["bandwidth", "beamwidth", "gain", "polarization"], "Slide 6.");
  mcq(7, 'm', "The beamwidth is the angular part of space where the radiated power is at least…",
    ["half of its maximum value", "one tenth of its maximum value", "equal to its maximum value", "one quarter of its maximum value"], "Slide 7 (−3 dB).");
  mcq(7, 'h', "The half-power points of the main lobe are at…",
    ["−3 dB", "0 dB", "−10 dB", "−20 dB"], "Half power = −3 dB.");
  mcq([7, 9], 'm', "Which part of this radiation pattern is marked with 1?",
    ["Main lobe", "Side lobe", "Back lobe", "Null"], "The strongest direction.", { qfig: 'lobesBlank' });
  mcq([7, 9], 'm', "Which part of this radiation pattern is marked with 2?",
    ["Back lobe", "Main lobe", "Beamwidth", "Antenna site"], "Opposite to the main lobe.", { qfig: 'lobesBlank' });
  mcq(8, 'e', "Which field determines the polarization of a radio wave?",
    ["The electric field", "The magnetic field", "The gravity field", "The heat field"], "Slide 8.");
  mcq(8, 'm', "For optimum communication, the polarization of the transmitting and receiving antennas must…",
    ["match", "be opposite", "change every second", "be zero"], "Slide 8.");
  mcq(8, 'm', "Which are the two kinds of linear polarization?",
    ["Vertical and horizontal", "Left-hand and right-hand", "Inner and outer", "Constructive and destructive"], "Slide 8.");
  mcq(8, 'm', "Left-hand and right-hand are two kinds of…",
    ["circular polarization", "linear polarization", "antenna alignment steps", "antenna bandwidth"], "Slide 8.");
  mcq(9, 'e', "Reciprocity means that antenna characteristics are…",
    ["the same in transmitting and receiving", "different in transmitting and receiving", "better at night than during the day", "the same for all types of antennas"], "Slide 9.");
  mcq(9, 'e', "A graphical representation of the power radiated from or received by an antenna is the…",
    ["radiation pattern", "link budget", "Fresnel zone", "constellation diagram"], "Slide 9.");
  mcq(10, 'e', "Adjusting the direction, position, tilt and polarization of an antenna is called…",
    ["antenna alignment", "antenna gain", "antenna bandwidth", "antenna reciprocity"], "Slide 10.");
  mcq(10, 'm', "Which one is a benefit of proper antenna alignment?",
    ["It maximizes the received signal power", "It increases the free-space path loss", "It reduces the communication range of it", "It removes the need for a transmitter"], "Slide 10.");
  mcq(10, 'h', "Which order is correct for aligning a microwave antenna?",
    ["Check line of sight, rough alignment, fine alignment, lock", "Lock, fine alignment, rough alignment, check line of sight", "Fine alignment, lock, check line of sight, rough alignment", "Rough alignment, lock, fine alignment, check line of sight"], "Slide 10.");
  mcq(11, 'e', "Which antenna consists of two conductive elements of equal length fed at the center?",
    ["Dipole antenna", "Dish antenna", "Patch antenna", "Sector antenna"], "Slide 11.");
  mcq(12, 'e', "The total length of a half-wave dipole is…",
    ["λ/2", "λ/4", "λ", "2λ"], "Slide 12.");
  mcq(12, 'm', "The length of each arm of a half-wave dipole is…",
    ["λ/4", "λ/2", "λ", "λ/8"], "Slide 12.");
  mcq(12, 'm', "Where is the feed point of a dipole?",
    ["At the center", "At the left end", "At the right end", "At both ends"], "Slide 12.");
  mcq(13, 'm', "In which direction does a dipole radiate most strongly?",
    ["Perpendicular to its length", "Along its length, off its ends", "Only downward to the ground", "Equally in every direction"], "Slide 13.");
  mcq(13, 'e', "The three-dimensional radiation pattern of a dipole resembles a…",
    ["doughnut", "pencil", "cube", "flat sheet"], "Slide 13.");
  mcq(14, 'm', "The polarization of a vertical dipole is…",
    ["vertical", "horizontal", "left-hand circular", "right-hand circular"], "Slide 14.");
  mcq(14, 'm', "Which one is an advantage of the dipole antenna?",
    ["Simple construction and low cost", "Very high gain in a narrow beam", "It needs no mounting space", "It is not affected by nearby objects"], "Slide 14.");
  mcq(14, 'm', "Which one is a disadvantage of the dipole antenna?",
    ["Limited gain", "High cost", "Difficult installation", "Coverage in one direction only"], "Slide 14.");
  mcq(15, 'h', "What is the length of each arm of a dipole for 100 MHz?",
    ["0.75 m", "1.5 m", "3 m", "0.375 m"], "λ = 3 m, λ/4 = 0.75 m.");
  mcq(16, 'e', "Which antenna is flat and consists of a metal patch on a dielectric substrate?",
    ["Patch (microstrip) antenna", "Dish (parabolic) antenna", "Half-wave dipole antenna", "Sector antenna with a reflector"], "Slide 16.");
  mcq(17, 'e', "Which part of a patch antenna supplies RF power to the patch?",
    ["Feed network", "Ground plane", "Dielectric substrate", "Reflector"], "Slide 17.");
  mcq(17, 'm', "Which part of a patch antenna is the insulating material?",
    ["Dielectric substrate", "Copper radiating patch", "Ground plane", "Feed network"], "Slide 17.");
  mcq(17, 'm', "What is the job of the ground plane in a patch antenna?",
    ["It reflects energy and improves radiation", "It supplies RF power to the metal patch", "It insulates the patch from the substrate", "It changes the operating frequency by hand"], "Slide 17.");
  mcq(18, 'm', "Which fields of a patch antenna radiate electromagnetic waves into space?",
    ["The fringing fields at the patch edges", "The fields inside the ground plane", "The fields of the metal mounting bolts", "The fields at the center of the dish"], "Slide 18.");
  mcq(19, 'm', "A patch antenna radiates mainly…",
    ["broadside to its surface", "along its feed line", "equally in all directions", "behind its ground plane"], "Slide 19.");
  mcq(21, 'm', "Which one is a disadvantage of the patch antenna?",
    ["Narrow bandwidth", "Heavy weight", "High manufacturing cost", "Large size"], "Slide 21.");
  mcq(21, 'm', "Why is a patch antenna suitable for a mobile phone?",
    ["It is compact and can be integrated into circuit boards", "It has a large reflector that must point at a satellite", "It radiates equally in every direction without losses", "It is made of two long metal rods on a tall tower"], "Slide 21.");
  mcq(22, 'm', "Compared with a dipole, a patch antenna has…",
    ["higher gain and directional radiation", "lower gain and omnidirectional radiation", "a larger size and a standalone mounting", "the same gain and the same radiation"], "Slide 22.");
  mcq(23, 'e', "Which antenna radiates over a specific angular sector?",
    ["Sector antenna", "Isotropic antenna", "Dipole antenna", "Omnidirectional antenna"], "Slide 23.");
  mcq(23, 'm', "In a sector antenna, a narrower beam gives…",
    ["higher gain", "lower gain", "wider coverage", "no directivity"], "Slide 23.");
  mcq(26, 'm', "How can a base station with sector antennas cover the full 360°?",
    ["By using several sector antennas", "By removing the reflectors", "By lowering the frequency to zero", "By using one antenna pointing up"], "Slide 26.");
  mcq(25, 'm', "Why do sector antennas reduce interference?",
    ["They limit radiation outside the intended area", "They radiate equally in all of the directions", "They use no polarization at all", "They work only at very low frequencies"], "Slide 25.");
  mcq(28, 'e', "Which antenna uses a curved parabolic reflector?",
    ["Dish antenna", "Patch antenna", "Dipole antenna", "Sector antenna"], "Slide 28.");
  mcq(28, 'm', "Where is the feed antenna of a dish located?",
    ["At the focal point", "Behind the dish", "At the edge of the dish", "Inside the ground"], "Slide 28.");
  mcq(29, 'm', "Why must a dish antenna be aimed accurately?",
    ["It concentrates energy into a narrow beam", "It radiates equally in all directions around it", "It has a very low gain and a short range", "It works without any reflector"], "Slide 29.");
  mcq(29, 'm', "Which application suits a dish antenna?",
    ["Satellite TV reception", "Bluetooth in a headset", "A mobile phone’s internal antenna", "Covering all directions in a room"], "Slide 29.");
  mcq(31, 'e', "A group of two or more antennas that work together as a single system is an antenna…",
    ["array", "lobe", "feed", "patch"], "Slide 31.");
  mcq(32, 'm', "In an antenna array, constructive interference produces…",
    ["strong radiation", "weak radiation", "no polarization", "a lower frequency"], "Slide 32.");
  mcq(32, 'm', "The waves of the array elements combine in space according to the principle of…",
    ["superposition", "reciprocity", "polarization", "encryption"], "Slide 32.");
  mcq(32, 'm', "How can the radiation pattern of an array be controlled?",
    ["By adjusting the phase and spacing between elements", "By painting the elements with several different colors", "By removing the feed lines of all the elements", "By changing the password of the base station"], "Slide 32.");
  mcq(32, 'm', "Which one is a disadvantage of antenna arrays?",
    ["They require precise phase control", "They have a lower gain than one antenna", "They cannot steer the beam", "They reduce the communication range"], "Slide 32.");
  mcq(31, 'h', "Which capability lets an array change the direction of its beam without moving the antennas?",
    ["Beam steering", "Reciprocity", "Polarization mismatch", "Free-space loss"], "Slides 31-32.");

  /* ---------- Section C ---------- */
  tf(4, 'e', "Without antennas, wireless communication is impossible.", true, "Slide 4.");
  tf(5, 'e', "An isotropic antenna can be built and is used in every phone.", false, "Ideal model only.");
  tf(5, 'm', "The efficiency of a real antenna is always less than 1.", true, "Slide 5.");
  tf(5, 'm', "The practical gain of an antenna is higher than its directivity.", false, "Lower.");
  tf(6, 'm', "A 5 GHz antenna is the right choice for a 2.4 GHz system.", false, "Choose an antenna for the intended frequency range.");
  tf(8, 'e', "The magnetic field determines the polarization of a radio wave.", false, "The electric field.");
  tf(8, 'm', "Polarization mismatch between antennas reduces the quality of communication.", true, "They must match.");
  tf(9, 'm', "By reciprocity, the radiation pattern of an antenna is the same for sending and receiving.", true, "Slide 9.");
  tf(10, 'm', "Proper alignment improves data throughput and link reliability.", true, "Slide 10.");
  tf(12, 'm', "Each arm of a half-wave dipole has a length of λ/2.", false, "λ/4.");
  tf(13, 'm', "A dipole radiates very little off its ends.", true, "Slide 13.");
  tf(14, 'm', "A dipole is omnidirectional in the horizontal plane.", true, "Slide 14.");
  tf(17, 'm', "The dielectric substrate is a conductive layer.", false, "It is insulating.");
  tf(19, 'm', "A patch antenna has a wide bandwidth.", false, "Narrow.");
  tf(23, 'm', "A sector antenna radiates equally in all directions.", false, "Over a specific sector.");
  tf(28, 'e', "A dish antenna focuses radio waves onto a feed at the focal point.", true, "Slide 28.");
  tf(30, 'm', "Large dishes can be affected by wind.", true, "Slide 30.");
  tf(32, 'm', "Destructive interference between array elements gives strong radiation.", false, "Weak radiation.");
  tf(31, 'm', "An antenna array can provide higher gain than a single antenna.", true, "Slide 31.");

  /* ---------- Section B ---------- */
  fill(4, 'e', "During transmission, an antenna converts electrical energy into [[electromagnetic|EM]] waves.", "Slide 4.");
  fill(5, 'e', "The ideal antenna that radiates equally in every direction is the [[isotropic]] antenna.", "Slide 5.");
  fill(5, 'm', "Gain = [[directivity]] × [[efficiency]].", "Slide 5.", { set: true });
  fill(6, 'm', "Antenna gain is measured in [[dBi]].", "Slide 6.");
  fill(6, 'm', "The range of frequencies over which an antenna works correctly is the antenna [[bandwidth]].", "Slide 6.");
  fill(7, 'm', "The angle in which the radiated power is at least half of its maximum is the [[beamwidth]].", "Slide 7.");
  fill(8, 'm', "The [[electric|E]] field determines the polarization of the radio wave.", "Slide 8.");
  fill(8, 'm', "Linear polarization is either [[vertical]] or [[horizontal]].", "Slide 8.", { set: true });
  fill(9, 'm', "The property that antenna characteristics are the same in transmitting and receiving is [[reciprocity]].", "Slide 9.");
  fill(10, 'm', "Adjusting an antenna so that it points accurately at the other station is called antenna [[alignment]].", "Slide 10.");
  fill(11, 'e', "The simplest and most widely used antenna type is the [[dipole]].", "Slide 11.");
  fill(13, 'm', "The 3D radiation pattern of a dipole looks like a [[doughnut|donut|torus]].", "Slide 13.");
  fill(15, 'h', "For a wavelength of 2 m, the total length of a half-wave dipole is [[1|one]] m and each arm is [[0.5|half]] m.", "λ/2 and λ/4.");
  fill(16, 'm', "The flat, low-profile antenna used in phones and GPS receivers is the [[patch|microstrip]] antenna.", "Slide 16.");
  fill(17, 'm', "The conductive layer below the substrate of a patch antenna is the ground [[plane]].", "Slide 17.");
  fill(23, 'm', "The directional antenna that covers an angular region in cellular networks is the [[sector]] antenna.", "Slide 23.");
  fill(28, 'm', "A dish antenna uses a [[parabolic|curved]] reflector.", "Slide 28.");
  fill(31, 'e', "Two or more antennas that work together as a single system form an antenna [[array]].", "Slide 31.");
  fill(32, 'm', "In an array, [[constructive]] interference gives strong radiation and [[destructive]] interference gives weak radiation.", "Slide 32.");

  /* ---------- Section D ---------- */
  def(4, 'e', 2, "Define antenna, and state what it does in transmission and reception.",
    [["Transmission: converts electrical signals into electromagnetic waves", "electrical signals into", "electrical energy into", "into electromagnetic"], ["Reception: converts electromagnetic waves back into electrical energy", "back into", "vice versa", "into electrical"]],
    "An antenna is a device that converts electrical signals into electromagnetic waves in transmission, and converts electromagnetic waves back into electrical energy in reception.");
  def(5, 'm', 2, "Define isotropic antenna and directivity.",
    [["Isotropic: radiates equally in every direction (ideal)", "equally", "every direction", "all directions", "ideal"], ["Directivity: ability to radiate more strongly in some directions", "more strongly", "some directions", "specific direction", "focus"]],
    "An isotropic antenna radiates equally in every direction and is only an ideal model. Directivity is the ability to radiate more strongly in some directions than in others.");
  def(5, 'm', 2, "What is the difference between gain and directivity?",
    [["Directivity ignores the losses", "ignor", "without loss", "no loss"], ["Gain accounts for the losses (G = η × D)", "account", "includes", "efficiency", "with loss"]],
    "Directivity ignores the internal losses, while gain accounts for the losses: G = efficiency × D.");
  def([6, 7], 'm', 2, "Define antenna bandwidth and beamwidth.",
    [["Bandwidth: range of frequencies over which the antenna operates correctly", "range of frequenc", "frequencies"], ["Beamwidth: the angle where the power is at least half of the maximum", "angle", "angular", "half"]],
    "The bandwidth is the range of frequencies over which the antenna operates correctly. The beamwidth is the angle where the radiated power is at least half of its maximum.");
  def(8, 'm', 2, "What determines the polarization of a radio wave, and why must the polarizations of two antennas match?",
    [["The electric field", "electric"], ["For optimum communication", "optimum", "best", "loss", "strong", "quality"]],
    "The electric field determines the polarization. The polarizations must match for optimum communication.");
  def(9, 'm', 2, "Define reciprocity and radiation pattern.",
    [["Reciprocity: the same characteristics in transmitting and receiving", "same"], ["Radiation pattern: graphical representation of the radiated or received power", "graph", "represent", "distribution"]],
    "Reciprocity means that the antenna characteristics are the same in transmitting and receiving. The radiation pattern is a graphical representation of the distribution of the power.");
  def(12, 'm', 2, "Write the total length and the arm length of a half-wave dipole in terms of the wavelength.",
    [["Total length = half wavelength (λ/2)", "half of", "half the", "lambda 2", "length 2", "l 2", "2"], ["Each arm = quarter wavelength (λ/4)", "quarter", "lambda 4", "4"]],
    "The total length is half of the wavelength (λ/2), and each arm is a quarter of the wavelength (λ/4).");
  def(28, 'm', 2, "Define dish antenna and state where its feed is placed.",
    [["Uses a curved parabolic reflector to focus radio waves", "parabolic", "reflector", "focus"], ["The feed is at the focal point", "focal"]],
    "A dish antenna is a highly directional antenna with a parabolic reflector. Its feed is placed at the focal point.");
  def(31, 'e', 2, "Define antenna array and state two things that are controlled to shape its pattern.",
    [["Two or more antennas that work together as a single system", "two or more", "group", "work together", "multiple"], ["Spacing and phase (or amplitude)", "spacing", "phase", "amplitude"]],
    "An antenna array is a group of two or more antennas that work together as a single system. The spacing and the phase of the elements are controlled.");
  list([5, 6, 7, 8, 9], 'm', 4, "List four features of antennas.",
    [["Directivity", "directivity"], ["Gain", "gain"], ["Bandwidth", "bandwidth"], ["Beamwidth", "beamwidth"], ["Polarization", "polari"], ["Reciprocity", "reciproc"], ["Radiation pattern", "pattern"]], { n: 4 });
  list(10, 'm', 3, "List three benefits of proper antenna alignment.",
    [["Maximizes received signal power", "power", "signal strength"], ["Reduces signal loss and interference", "loss", "interference"], ["Improves throughput and reliability", "throughput", "reliab"], ["Increases the range", "range"], ["Achieves the link budget", "budget"]], { n: 3 });
  list(17, 'e', 4, "List the four main components of a patch antenna.",
    [["Radiating patch", "=patch", "radiating", "metal patch"], ["Dielectric substrate", "substrate", "dielectric"], ["Ground plane", "ground"], ["Feed network", "feed"]]);
  list(14, 'm', 3, "List three advantages of the dipole antenna.",
    [["Simple construction", "simple"], ["Low cost", "cost", "cheap"], ["Easy to install", "install"], ["Omnidirectional coverage", "omni"], ["Used as a reference antenna", "reference"]], { n: 3 });
  list(21, 'm', 3, "List three advantages of the patch antenna.",
    [["Low profile", "profile", "flat"], ["Lightweight", "light"], ["Easy fabrication", "fabricat", "easy"], ["Low manufacturing cost", "cost"], ["Can be integrated into circuit boards", "integrat", "circuit", "pcb"]], { n: 3 });
  list(31, 'm', 4, "List four benefits of antenna arrays compared with a single antenna.",
    [["Higher gain", "gain"], ["Better directivity", "directivity"], ["Increased range", "range"], ["Beam steering", "steer"], ["Interference reduction", "interference"], ["Improved signal quality", "quality", "snr"]], { n: 4 });
  list([11, 16, 23, 28], 'e', 4, "List four types of antennas.",
    [["Dipole", "dipole"], ["Patch (microstrip)", "patch", "microstrip"], ["Sector", "sector"], ["Dish", "dish", "parabolic"]]);

  /* ---------- Section E ---------- */
  exp([11, 12], 'm', "Explain the structure and the working principle of a dipole antenna.",
    [["Two conductive elements of equal length", "two"], ["RF current is applied at the center feed point", "center", "centre", "feed"], ["The alternating current produces changing electric and magnetic fields", "fields"], ["The fields detach and propagate as electromagnetic waves", "propagate", "detach", "electromagnetic waves"]],
    "A dipole consists of two conductive elements of equal length. RF current is applied at the center feed point and flows to both ends. The alternating current produces changing electric and magnetic fields, which detach and propagate as electromagnetic waves.");
  exp(22, 'm', "Compare the patch antenna and the dipole antenna.",
    [["Shape: flat metal patch and two wire elements", "flat", "two wire", "two"], ["Gain: the patch has a higher gain", "higher gain", "gain"], ["Radiation: patch is directional, dipole is omnidirectional", "omnidirectional", "directional"], ["Size or mounting: patch is compact on a PCB, dipole is larger and standalone", "compact", "pcb", "larger", "standalone"]],
    "The patch antenna is a flat metal patch, and the dipole has two wire elements. The patch has a higher gain. The patch is directional, while the dipole is omnidirectional. The patch is compact and mounted on a PCB, while the dipole is larger and standalone.");
  exp([23, 25, 26], 'm', "Explain the sector antenna with its advantages and disadvantages.",
    [["A directional antenna that covers a specific angular sector", "angular", "sector", "specific"], ["Advantages, e.g. higher gain, longer distance, less interference", "higher gain", "distance", "interference"], ["Used in cellular networks, Wi-Fi or WISP", "cellular", "wi fi", "wisp", "base station"], ["Disadvantages, e.g. limited angle, accurate alignment, several antennas for 360°", "limited", "alignment", "360"]],
    "A sector antenna is a directional antenna that covers a specific angular sector. It has a higher gain, a greater distance and better interference control. It is used in cellular networks. Its disadvantages are the limited coverage angle, the accurate alignment, and that several antennas are needed for 360°.");
  exp(28, 'm', "Explain how a dish antenna works in reception and in transmission.",
    [["Incoming signals strike the parabolic dish", "strike", "parabolic"], ["The dish reflects and concentrates them at the feed", "concentrat", "reflects"], ["The feed is at the focal point", "focal", "feed"], ["In transmission the process is reversed: a narrow beam", "revers", "narrow"]],
    "Incoming signals strike the parabolic dish. The dish reflects and concentrates the signals at the feed, which is at the focal point. In transmission the process is reversed: the signals from the feed are reflected into a narrow beam.");
  exp([31, 32], 'h', "Explain how an antenna array works and how its beam is controlled.",
    [["Two or more antennas work as a single system", "two or more", "single", "together"], ["Waves combine by superposition", "superposition", "combine"], ["Constructive gives strong, destructive gives weak radiation", "constructive", "destructive"], ["Phase and spacing are adjusted to control the pattern", "phase", "spacing"]],
    "An array is two or more antennas that work together as a single system. The waves combine by superposition: constructive interference gives strong radiation and destructive interference gives weak radiation. The phase and spacing of the elements are adjusted to control the pattern.");
  draw([7, 9], 'm', "Draw the radiation pattern of a directional antenna and label its lobes and its half-power angle.", 'lobes',
    [["Main lobe", "main lobe", "main"], ["Side lobes", "side"], ["Back lobe", "back"], ["Beamwidth (−3 dB points)", "beamwidth", "3 db"]],
    "A large main lobe to the front, small side lobes, a back lobe to the rear, and the beamwidth angle between the −3 dB points of the main lobe.");
  draw(12, 'm', "Draw a half-wave dipole and label its parts and its lengths in terms of the wavelength.", 'dipole',
    [["Two arms (elements)", "arm", "element"], ["Feed point at the center", "feed"], ["Total length λ/2", "total length is", "half of", "half the", "length 2", "l 2", "half wavelength"], ["Each arm λ/4", "arm is 4", "arm 4", "each arm is", "quarter"]],
    "Two arms in a line with the feed point at the center. The total length is λ/2 and each arm is λ/4.");
  draw([16, 17], 'm', "Draw a patch antenna from the side and label its four main parts.", 'patch',
    [["Radiating patch", "patch"], ["Dielectric substrate", "substrate", "dielectric"], ["Ground plane", "ground"], ["Feed", "feed"]],
    "From top to bottom: radiating patch (with the feed line), dielectric substrate, and ground plane. The feed supplies RF power to the patch.");
  draw(28, 'm', "Draw a dish antenna in reception and label its main parts.", 'dish',
    [["Parabolic reflector (dish)", "reflector", "parabolic", "dish"], ["Feed", "feed"], ["Focal point", "focal"], ["Incoming waves", "incoming", "waves"]],
    "Incoming waves strike the parabolic reflector (dish) and are reflected to the feed at the focal point.");
  calc([12, 15], 'e', "Calculate the total length and the arm length of a half-wave dipole for 150 MHz.",
    [["λ = c / f", "c f", "3 10 8", "3 x 10"], ["λ = 2 m", "#2"], ["L = λ / 2", "#1"], ["Total length = 1 m", "#1"], ["Each arm = 0.5 m", "#0.5"]],
    "λ = c / f = (3 x 10^8) / (150 x 10^6) = 2 m. L = λ / 2 = 1 m. Each arm = L / 2 = 0.5 m");
  calc([12, 15], 'm', "Calculate the wavelength, the total length and the arm length of a half-wave dipole for 600 MHz.",
    [["λ = c / f", "c f", "3 10 8", "3 x 10"], ["c = 3 × 10^8 m/s", "3 10 8", "3 x 10", "300000000"], ["λ = 0.5 m", "#0.5"], ["Total length = 0.25 m", "#0.25"], ["Each arm = 0.125 m", "#0.125"]],
    "λ = c / f = (3 x 10^8) / (600 x 10^6) = 0.5 m. L = λ / 2 = 0.25 m. Each arm = L / 2 = 0.125 m");
  calc([12, 15], 'h', "Each arm of a half-wave dipole is 0.25 m long. Calculate the wavelength and the operating frequency.",
    [["Arm = λ/4", "#4"], ["λ = 4 × 0.25 = 1 m", "#1"], ["f = c / λ", "3 10 8", "3 x 10", "#300"], ["c = 3 × 10^8 m/s", "3 10 8", "3 x 10", "300000000"], ["f = 300 MHz", "#300"]],
    "Arm = λ / 4, so λ = 4 × 0.25 = 1 m. f = c / λ = (3 x 10^8) / 1 = 300 MHz");
  calc(5, 'm', "An antenna has a directivity of 20 and an efficiency of 75%. Calculate its gain. What would the gain be with an efficiency of 90%?",
    [["G = η × D", "#15", "#18"], ["η = 0.75", "#0.75", "#15"], ["G = 15", "#15"], ["η = 0.9", "#0.9", "#18"], ["G = 18", "#18"]],
    "G = efficiency × directivity = 0.75 × 20 = 15. With 90%: G = 0.9 × 20 = 18");
  pick([16, 21, 22], 'm', "A thin mobile phone needs an antenna inside it. Which antenna is the best? Why?",
    ["Dish antenna", "Patch antenna", "Sector antenna"], 1,
    [["It is compact, flat and lightweight", "compact", "flat", "light", "small", "profile"], ["It can be integrated into the circuit board", "circuit", "integrat", "pcb", "board"]],
    "A patch antenna is compact, flat and lightweight, and it can be integrated into the circuit board.");
  pick([28, 29], 'm', "A home needs to receive satellite TV from a satellite very far away. Which antenna is the best? Why?",
    ["Dipole antenna", "Dish antenna", "Omnidirectional antenna"], 1,
    [["High gain in a narrow beam", "high gain", "narrow", "gain"], ["Suitable for long-distance communication", "long", "distance", "far"]],
    "A dish antenna has a high gain because it concentrates energy into a narrow beam, so it is suitable for long-distance communication.");
  pick([23, 26], 'm', "A cellular base station must cover one 120° area with good gain and little interference outside it. Which antenna is the best? Why?",
    ["Sector antenna", "Dipole antenna", "Isotropic antenna"], 0,
    [["It covers a specific angular sector", "angular", "specific", "covers a", "directional"], ["Higher gain / less interference outside the area", "higher gain", "has a higher", "limits", "reduces", "less interference", "controls"]],
    "A sector antenna covers a specific angular sector. It has a higher gain and limits interference outside the area.");
  pick(14, 'm', "A small FM transmitter must cover all horizontal directions at a low cost. Which antenna is the best? Why?",
    ["Dish antenna", "Sector antenna", "Dipole antenna"], 2,
    [["It is omnidirectional in the horizontal plane", "omni", "all directions"], ["Simple construction and low cost", "simple", "cheap", "easy"]],
    "A dipole is omnidirectional in the horizontal plane, and it has a simple construction and a low cost.");
});
