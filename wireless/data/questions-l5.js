/* Lecture 5: Multiple access techniques (PDF pages 4-17). */
EC.lecture(5, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;

  /* ---------- Section A ---------- */
  mcq(4, 'e', "What is the purpose of multiple access techniques?",
    ["Many users share the same communication channel", "One user sends the same data several times", "Every user has a private cable to the base station", "The antenna changes its size for every user"], "Slide 4.");
  mcq(4, 'm', "Which two goals do multiple access techniques have?",
    ["Prevent interference and maximize spectral efficiency", "Increase interference and reduce the number of users", "Reduce the antenna gain and increase the path loss", "Remove the channel and increase the guard bands"], "Slide 4.");
  mcq(4, 'm', "Multiple access techniques differ in how they divide the…",
    ["resources", "antennas", "cables", "receivers"], "Frequency, time, code, subcarriers.");
  mcq(4, 'm', "Which multiple access technique is shown in picture A?",
    ["FDMA", "TDMA", "CDMA", "OFDM"], "Each user has a band all the time.", { qfig: 'accessBlank' });
  mcq(4, 'm', "Which multiple access technique is shown in picture B?",
    ["TDMA", "FDMA", "CDMA", "OFDMA"], "Each user has a time slot.", { qfig: 'accessBlank' });
  mcq(4, 'm', "Which multiple access technique is shown in picture C?",
    ["CDMA", "FDMA", "TDMA", "OFDMA"], "All users share frequency and time.", { qfig: 'accessBlank' });
  mcq(5, 'e', "In FDMA, each user is assigned a unique…",
    ["frequency band", "time slot", "spreading code", "antenna"], "Slide 5.");
  mcq(5, 'm', "For how long does an FDMA user keep the assigned frequency band?",
    ["For the entire communication duration", "For one short time slot in every frame", "Only until another user sends any data", "For exactly one bit of the message"], "Slide 5.");
  mcq(5, 'e', "The key idea of FDMA is to divide the spectrum into…",
    ["non-overlapping frequency channels", "short time slots in a repeated frame", "pseudo-random spreading codes", "overlapping antenna beams"], "Slide 5.");
  mcq(6, 'm', "Which one is a characteristic of FDMA?",
    ["Continuous transmission", "Tight time synchronization", "Spreading codes", "FFT processing"], "Slide 6.");
  mcq(6, 'm', "Why does FDMA need guard bands?",
    ["To prevent interference between neighboring channels", "To keep all of the users synchronized in time", "To spread the signal of a user over the whole spectrum", "To increase the number of time slots"], "Slides 6-7.");
  mcq(6, 'm', "Which system uses FDMA?",
    ["Analog cellular systems (1G)", "GSM time slots (2G)", "GPS satellite spreading codes", "5G NR numerology"], "Slide 6.");
  mcq(7, 'm', "Which one is an advantage of FDMA?",
    ["No synchronization needed", "Very high spectral efficiency", "Dynamic allocation", "Soft capacity"], "Slide 7.");
  mcq(7, 'm', "Which one is a limitation of FDMA?",
    ["Inefficient spectrum usage", "Complex hardware", "Near-far problem of users", "High latency"], "Slide 7.");
  mcq(7, 'h', "Why does FDMA have poor scalability?",
    ["The allocation of frequencies is fixed", "The users share the same time slot", "The codes of the users are much too long", "The subcarriers are orthogonal"], "Slide 7.");
  mcq(8, 'e', "In TDMA, the users are separated by…",
    ["time slots", "frequency bands", "spreading codes", "polarization"], "Slide 8.");
  mcq(8, 'e', "What does TDMA require between the users?",
    ["Tight synchronization", "Guard bands only", "Two different antennas", "Unique spreading codes"], "Slide 8.");
  mcq(8, 'm', "What separates neighboring time slots in TDMA?",
    ["Guard times", "Guard bands", "Pilot codes", "Reflectors"], "Slide 8.");
  mcq(8, 'm', "In this frame, what is the part marked with ? at the start of the slot?",
    ["Guard time", "Data", "Spreading code", "Subcarrier"], "Slide 8.", { qfig: 'tdmaBlank' });
  mcq(8, 'm', "Which system uses TDMA?",
    ["GSM (2G)", "FM radio", "LTE", "GPS"], "Slide 8.");
  mcq(9, 'm', "What happens in TDMA if synchronization fails?",
    ["Interference occurs", "The codes become longer", "The guard bands disappear", "The frequency doubles"], "Slide 9.");
  mcq(9, 'm', "Which one is an advantage of TDMA over FDMA?",
    ["It is more efficient", "It needs no timing", "It is always analog data", "It uses no channel"], "Slide 9.");
  mcq(9, 'm', "Which one is a limitation of TDMA?",
    ["It requires precise timing", "It cannot carry digital data", "It needs high-quality filters", "It has a near-far problem"], "Slide 9.");
  mcq(10, 'e', "In CDMA, all users share the same frequency and time, but each one uses a unique…",
    ["spreading code", "time slot", "frequency band", "antenna"], "Slide 10.");
  mcq(10, 'm', "In CDMA the signals of the users overlap. How can they be separated?",
    ["By their codes", "By their time slots", "By guard bands", "By their distance"], "Slide 10.");
  mcq(10, 'm', "How does a CDMA receiver recover the data of sender 1 from the summed channel?",
    ["It uses the same code as sender 1", "It waits for the time slot of sender 1", "It uses a filter for the band of sender 1", "It asks sender 2 to stop sending"], "Slide 10.");
  mcq(11, 'm', "What does soft capacity mean in CDMA?",
    ["More users cause more noise", "More users are always blocked", "The number of users is always one", "The codes are written in software"], "Slide 11.");
  mcq(11, 'm', "Which kind of codes does CDMA use?",
    ["Pseudo-random codes", "Postal codes", "Morse code signals", "Color codes"], "Slide 11.");
  mcq(11, 'm', "Which system uses CDMA (spread spectrum)?",
    ["GPS", "FM radio", "GSM", "Wi-Fi 6"], "Slide 11.");
  mcq(12, 'm', "Which problem is a limitation of CDMA?",
    ["Near-far problem", "High PAPR", "Inefficient guard bands", "Fixed frequency allocation"], "Slide 12.");
  mcq(12, 'm', "Why does CDMA need power control?",
    ["Because of the near-far problem", "Because of the guard bands", "Because of the FFT processing", "Because of the time slots in frames"], "Near users would mask far users.");
  mcq(12, 'm', "Which one is an advantage of CDMA?",
    ["Strong interference resistance", "Simple and cheap receivers", "No power control", "No spreading codes are ever needed"], "Slide 12.");
  mcq(12, 'h', "Which capability of CDMA lets a phone move between cells smoothly?",
    ["Soft handoff", "Guard time", "Guard bands", "High PAPR"], "Slide 12.");
  mcq(13, 'e', "In OFDMA, users are assigned groups of…",
    ["orthogonal subcarriers", "different spreading codes", "separate cables", "guard times only"], "Slide 13.");
  mcq(13, 'm', "The key idea of OFDMA is to divide the channel into many…",
    ["narrowband subcarriers that are allocated dynamically", "wide bands that are fixed for the whole communication", "long codes that are the same for all of the users", "time slots that belong to only one user forever"], "Slide 13.");
  mcq(14, 'm', "Why do OFDMA subcarriers not interfere with each other?",
    ["They are orthogonal", "They are very far apart", "They use the same code", "They have no data"], "Slide 14.");
  mcq(14, 'm', "OFDMA is based on…",
    ["OFDM", "FDMA 1G", "GSM", "GPS"], "Slide 14.");
  mcq(13, 'h', "What is the difference between OFDM and OFDMA in this figure?",
    ["OFDMA shares the frequencies between users at the same time", "OFDM shares the frequencies between users at the same time", "OFDMA gives all of the frequencies to one user all of the time", "OFDM uses no time axis and OFDMA uses no frequency axis"], "In OFDM one user takes all the subcarriers at a time.", { qfig: 'ofdma' });
  mcq(14, 'm', "Which systems use OFDMA?",
    ["LTE, 5G NR and Wi-Fi 6", "1G and FM radio", "GSM and cordless phones", "IS-95 and GPS"], "Slide 14.");
  mcq(15, 'm', "Which one is a limitation of OFDMA?",
    ["High PAPR", "Near-far problem", "Inefficient spectrum usage", "Fixed allocation"], "Slide 15.");
  mcq(15, 'm', "PAPR stands for…",
    ["Peak-to-Average Power Ratio", "Power and Phase Ratio", "Phase-to-Amplitude Power Rate", "Primary Access Power Rate"], "Slide 15.");
  mcq(15, 'm', "Which processing does OFDMA require?",
    ["FFT/IFFT", "Analog filters only", "Power control only", "Near-far coding"], "Slide 15.");
  mcq(15, 'm', "Which one is an advantage of OFDMA?",
    ["Robust against multipath fading", "Not sensitive to frequency offset", "Very low PAPR", "Needs no processing"], "Slide 15.");
  mcq(16, 'm', "Which technique is simple but inefficient?",
    ["FDMA", "TDMA", "CDMA", "OFDMA"], "Slide 16.");
  mcq(16, 'm', "Which technique is complex and divides users by codes?",
    ["CDMA", "FDMA", "TDMA", "OFDMA"], "Slide 16.");
  mcq(16, 'h', "Which technique has the best efficiency but a high PAPR?",
    ["OFDMA", "FDMA", "TDMA", "CDMA"], "Slide 16.");
  mcq(17, 'm', "LTE resource blocks are an example of…",
    ["OFDMA", "CDMA", "TDMA", "FDMA"], "Slide 17.");
  mcq(17, 'm', "Which technique dominates modern wireless systems?",
    ["OFDMA", "FDMA", "TDMA", "CDMA"], "Slide 17.");

  /* ---------- Section C ---------- */
  tf(4, 'e', "Multiple access techniques let several users share the same channel.", true, "Slide 4.");
  tf(5, 'e', "In FDMA, each user has a unique frequency band.", true, "Slide 5.");
  tf(5, 'm', "In FDMA, the frequency channels of the users overlap.", false, "They do not overlap.");
  tf(7, 'm', "FDMA needs tight synchronization.", false, "No synchronization is needed.");
  tf(6, 'm', "FDMA transmission is continuous and has low latency.", true, "Slide 6.");
  tf(8, 'e', "TDMA divides the users by time slots.", true, "Slide 8.");
  tf(8, 'm', "TDMA frames contain time slots and guard times.", true, "Slide 8.");
  tf(9, 'm', "TDMA is less efficient than FDMA.", false, "More efficient.");
  tf(10, 'e', "In CDMA, every user has a different time slot.", false, "Users share frequency and time.");
  tf(10, 'm', "In CDMA, overlapping signals can be separated by their codes.", true, "Slide 10.");
  tf(12, 'm', "CDMA does not need power control.", false, "It requires power control.");
  tf(12, 'm', "CDMA has complex receivers.", true, "Slide 12.");
  tf(13, 'e', "OFDMA assigns groups of orthogonal subcarriers to users.", true, "Slide 13.");
  tf(14, 'm', "In OFDMA, resources are allocated dynamically.", true, "Slide 14.");
  tf(15, 'm', "OFDMA is not affected by frequency offset.", false, "It is sensitive to it.");
  tf(15, 'm', "OFDMA has a very low peak-to-average power ratio.", false, "High PAPR.");
  tf(16, 'm', "OFDMA has the best efficiency of the four techniques.", true, "Slide 16.");
  tf(17, 'm', "FDMA dominates modern wireless systems such as LTE and 5G.", false, "OFDMA does.");

  /* ---------- Section B ---------- */
  fill(4, 'm', "Multiple access techniques divide the resources by frequency, time, [[code|codes]] or orthogonal subcarriers.", "Slide 4.");
  fill(5, 'e', "FDMA stands for [[frequency]] division multiple access.", "Slide 5.");
  fill(5, 'm', "FDMA divides the spectrum into [[non-overlapping|nonoverlapping]] frequency channels.", "Slide 5.");
  fill(6, 'm', "The unused frequencies between FDMA channels are called guard [[bands|band]].", "Slide 6.");
  fill(8, 'e', "TDMA stands for [[time]] division multiple access.", "Slide 8.");
  fill(8, 'm', "TDMA requires tight [[synchronization|synchronisation|sync]].", "Slide 8.");
  fill(8, 'm', "In TDMA, a frame is divided into time [[slots|slot]], which are separated by guard [[times|time]].", "Slide 8.");
  fill(10, 'e', "CDMA stands for [[code]] division multiple access.", "Slide 10.");
  fill(10, 'm', "In CDMA each user has a unique [[spreading]] code.", "Slide 10.");
  fill(11, 'm', "In CDMA, more users cause more noise. This is called [[soft]] capacity.", "Slide 11.");
  fill(12, 'm', "CDMA needs power control because of the [[near-far|near far]] problem.", "Slide 12.");
  fill(13, 'e', "In OFDMA, users are assigned groups of [[orthogonal]] subcarriers.", "Slide 13.");
  fill(13, 'm', "OFDMA divides the channel into many narrowband [[subcarriers|subcarrier]].", "Slide 13.");
  fill(15, 'm', "A limitation of OFDMA is its high [[PAPR|peak-to-average power ratio]].", "Slide 15.");
  fill(15, 'h', "OFDMA requires [[FFT|IFFT]] and IFFT processing.", "Slide 15.");
  fill(16, 'm', "GSM uses [[TDMA]], and LTE uses [[OFDMA]].", "Slides 16-17.");
  fill(17, 'm', "GPS spreading codes are an example of [[CDMA]].", "Slide 17.");
  fill(17, 'm', "The technique that is simple but inefficient is [[FDMA]].", "Slide 17.");

  /* ---------- Section D ---------- */
  def(4, 'e', 2, "Define multiple access and state one of its goals.",
    [["Multiple users share the same channel", "share", "users"], ["Prevent interference or maximize spectral efficiency", "interference", "efficiency"]],
    "Multiple access means that multiple users share the same channel, to prevent interference and maximize spectral efficiency.");
  def(5, 'e', 2, "Define FDMA and its key idea.",
    [["Each user has a unique frequency band", "unique frequency", "frequency band", "band"], ["The spectrum is divided into non-overlapping channels", "non overlapping", "divide", "channels"]],
    "In FDMA each user is assigned a unique frequency band. The spectrum is divided into non-overlapping channels.");
  def(8, 'm', 2, "How does TDMA separate the users, and what does it require?",
    [["By time slots", "time"], ["Tight synchronization", "synchron", "timing"]],
    "TDMA separates the users by time slots and requires tight synchronization.");
  def(10, 'm', 2, "Define CDMA and state how the overlapping signals are separated.",
    [["All users share the same frequency and time", "same frequency", "share"], ["Each one uses a unique code", "code"]],
    "In CDMA all users share the same frequency and time, and the signals are separated by a unique code for each user.");
  def(13, 'm', 2, "Define OFDMA and its key idea.",
    [["Users are assigned groups of orthogonal subcarriers", "orthogonal"], ["Many narrowband subcarriers are allocated dynamically", "narrowband", "dynamic", "divide"]],
    "In OFDMA users are assigned groups of orthogonal subcarriers. The channel is divided into many narrowband subcarriers that are allocated dynamically.");
  def([6, 8], 'm', 2, "What is the difference between guard bands and guard times?",
    [["Guard bands: between frequency channels (FDMA)", "frequency", "fdma"], ["Guard times: between time slots (TDMA)", "slot", "tdma", "time slots"]],
    "Guard bands are between the frequency channels in FDMA. Guard times are between the time slots in TDMA.");
  def(12, 'h', 2, "What is needed in CDMA because of the near-far problem, and why?",
    [["Power control", "power control", "power"], ["A near user’s strong signal can hide a far user’s weak signal", "strong", "weak", "hide", "mask", "louder"]],
    "Power control is needed, because the strong signal of a near user can hide the weak signal of a far user.");
  def(14, 'm', 2, "Why do OFDMA subcarriers not interfere, and how are resources allocated?",
    [["They are orthogonal", "orthogonal"], ["Dynamically", "dynamic", "flexib"]],
    "The subcarriers are orthogonal, so they do not interfere. Resources are allocated dynamically.");
  list(4, 'e', 4, "List four ways to divide the resources between users.",
    [["Frequency", "frequency"], ["Time", "time"], ["Code", "code"], ["Orthogonal subcarriers", "subcarrier", "orthogonal"]]);
  list([5, 8, 10, 13], 'e', 4, "List the four multiple access techniques.",
    [["FDMA", "=fdma", "frequency division"], ["TDMA", "tdma", "time division"], ["CDMA", "cdma", "code division"], ["OFDMA", "ofdma", "orthogonal"]]);
  list(7, 'm', 3, "List the three limitations of FDMA.",
    [["Inefficient spectrum usage", "inefficient", "spectrum"], ["Fixed allocation (poor scalability)", "fixed", "scalab"], ["Requires high-quality filters", "filter"]]);
  list(9, 'm', 3, "List three advantages of TDMA.",
    [["More efficient than FDMA", "efficient"], ["Flexible time allocation", "flexible"], ["Supports digital data", "digital"]]);
  list(12, 'm', 3, "List three advantages of CDMA.",
    [["High spectral efficiency", "spectral", "efficiency"], ["Strong interference resistance", "interference"], ["Supports variable data rates", "variable", "data rate"], ["Soft handoff", "handoff", "handover"]], { n: 3 });
  list(15, 'm', 3, "List the three limitations of OFDMA.",
    [["High PAPR", "papr", "peak"], ["Requires FFT/IFFT processing", "fft"], ["Sensitive to frequency offset", "offset"]]);
  list(14, 'm', 3, "List three systems that use OFDMA.",
    [["LTE / LTE-A", "lte", "4g"], ["5G NR", "5g"], ["WiMAX", "wimax"], ["Wi-Fi 6", "wi fi", "wifi"]], { n: 3 });

  /* ---------- Section E ---------- */
  exp([5, 8], 'm', "Compare FDMA and TDMA.",
    [["FDMA gives each user a frequency band", "frequency"], ["TDMA gives each user a time slot", "time slot", "slot"], ["FDMA: simple, no synchronization (guard bands)", "simple", "no synchron", "guard band"], ["TDMA: needs tight synchronization but is more efficient", "tight", "more efficient", "needs synchron", "requires"]],
    "FDMA gives each user a frequency band for the whole communication, while TDMA gives each user a time slot. FDMA is simple, needs no synchronization and uses guard bands. TDMA needs tight synchronization but is more efficient.");
  exp([10, 11, 12], 'm', "Explain how CDMA works, with one advantage and one limitation.",
    [["All users share the same frequency and time", "same frequency", "share"], ["Each user has a unique spreading code; the receiver uses the same code", "code"], ["Advantage, e.g. high efficiency, interference resistance or soft handoff", "efficiency", "resistance", "handoff", "variable"], ["Limitation, e.g. complex receivers, near-far problem, power control", "complex", "near far", "power control"]],
    "In CDMA all users share the same frequency and time. Each user has a unique spreading code, and the receiver uses the same code to recover the data. An advantage is its strong interference resistance. A limitation is the near-far problem, which requires power control.");
  exp([13, 14, 15], 'm', "Explain how OFDMA works and why it is used in LTE and 5G.",
    [["The channel is divided into many narrowband subcarriers", "subcarrier"], ["The subcarriers are orthogonal, so there is no interference", "orthogonal"], ["Resources are allocated dynamically to users", "dynamic", "flexib"], ["Very high spectral efficiency / robust against multipath / many users", "efficien", "multipath", "massive", "many users"]],
    "OFDMA divides the channel into many narrowband subcarriers. The subcarriers are orthogonal, so they do not interfere. Resources are allocated dynamically to the users. It has a very high spectral efficiency, it is robust against multipath fading and it supports massive users.");
  exp(16, 'h', "Compare the four multiple access techniques by the resource they divide and one weakness of each.",
    [["FDMA: frequency; inefficient", "inefficient"], ["TDMA: time; needs synchronization", "sync"], ["CDMA: code; complex", "complex", "near far"], ["OFDMA: subcarriers; high PAPR", "papr", "subcarrier"]],
    "FDMA divides the frequency and is inefficient. TDMA divides the time and needs synchronization. CDMA divides by code and is complex. OFDMA divides subcarriers and has a high PAPR.");
  draw(4, 'm', "Draw how the users share frequency and time in the three classic multiple access techniques.", 'access',
    [["Frequency and time axes", "axes", "axis"], ["FDMA: horizontal bands", "fdma"], ["TDMA: vertical time slots", "tdma"], ["CDMA: all users overlap (different codes)", "cdma"]],
    "Frequency and time axes. FDMA: horizontal bands, one for each user. TDMA: vertical time slots. CDMA: all users overlap in frequency and time with different codes.");
  draw(8, 'm', "Draw a TDMA frame with its time slots, and the parts of one slot.", 'tdma',
    [["Frame with time slots", "slot", "frame"], ["Guard time", "guard"], ["Header", "header"], ["Data", "data"]],
    "A frame with time slots 1 to n. One slot contains the guard time, the header and the data.");
  draw(13, 'h', "Draw how OFDM and OFDMA share frequency and time between users.", 'ofdma',
    [["Frequency and time axes", "frequency", "axis", "axes"], ["OFDM: one user takes all the frequencies at a time", "ofdm"], ["OFDMA: users share the frequencies at the same time", "ofdma"], ["Blocks of different users", "user"]],
    "Two grids with frequency and time axes. OFDM: one user takes all the frequencies at a time. OFDMA: blocks of different users share the frequencies at the same time.");
  draw(5, 'm', "Draw how three users share a transmission path with FDMA.", 'fdma',
    [["Three users (devices)", "user", "device"], ["A different frequency for each user", "frequency", "freq"], ["Multiplexing on the sending side", "multiplex"], ["Division of the channels on the receiving side", "division", "receiv"]],
    "Three users (devices) on the sending side with different frequencies 1, 2 and 3 are multiplexed on one path, and the channels are divided again on the receiving side.");
  calc(5, 'e', "A system has 1 MHz of spectrum. Each FDMA user needs a 25 kHz channel (guard bands included). How many users can it support?",
    [["1 MHz = 1000 kHz", "#1000"], ["Users = total / channel", "1000 25", "divided", "#40"], ["1000 / 25", "1000 25", "#40"], ["= 40", "#40"], ["40 users", "#40"]],
    "1 MHz = 1000 kHz. Users = 1000 / 25 = 40 users");
  calc(8, 'm', "A TDMA frame lasts 4 ms and has 8 equal slots. Calculate the slot time, and the data rate of one user if the channel rate is 200 kbps.",
    [["Slot time = 4 / 8", "4 8", "#0.5"], ["0.5 ms", "#0.5"], ["Rate per user = channel rate / slots", "200 8", "divided", "#25"], ["200 / 8", "200 8", "#25"], ["25 kbps", "#25"]],
    "Slot time = 4 / 8 = 0.5 ms. Rate of one user = 200 / 8 = 25 kbps");
  calc(10, 'h', "Sender 1 uses the code (1, 1, −1, −1) and sends the bit 1. Sender 2 uses the code (1, −1, 1, −1) and sends the bit −1 (a bit is multiplied by the code). Calculate the channel sum, and recover the bit of sender 1.",
    [["Sender 1 sends (1, 1, −1, −1)", "sends 1 1 1 1", "0 2 2 0"], ["Sender 2 sends (−1, 1, −1, 1)", "2 sends 1 1 1 1", "0 2 2 0"], ["Sum: (0, 2, −2, 0)", "0 2 2 0"], ["Multiply by the code of sender 1 and add: 0 + 2 + 2 + 0 = 4", "#4"], ["Divide by 4: the bit is 1", "#1"]],
    "Sender 1 sends (1, 1, -1, -1). Sender 2 sends (-1, 1, -1, 1). Sum = (0, 2, -2, 0). Times the code of sender 1: 0 + 2 + 2 + 0 = 4. 4 / 4 = 1, so the bit of sender 1 is 1");
  calc(5, 'm', "An FDMA system has 500 kHz. Each user needs 40 kHz of data bandwidth and 10 kHz of guard band. How many users fit, and what percentage of the spectrum carries data?",
    [["Each user takes 40 + 10 = 50 kHz", "#50"], ["500 / 50", "#500"], ["10 users", "#10"], ["Data: 10 × 40 = 400 kHz", "#400"], ["80%", "#80"]],
    "Each user takes 40 + 10 = 50 kHz. 500 / 50 = 10 users. Data = 10 × 40 = 400 kHz, which is 400 / 500 = 80%");
  pick([13, 17], 'm', "A new 5G network must serve a massive number of users with the best spectral efficiency. Which technique is the best? Why?",
    ["FDMA", "TDMA", "OFDMA"], 2,
    [["Very high spectral efficiency", "very high", "high spectral", "high efficiency", "most efficient"], ["Dynamic allocation / supports massive users / robust against multipath", "dynamic", "supports", "flexib", "multipath", "robust"]],
    "OFDMA has a very high spectral efficiency, allocates resources dynamically and supports massive users.");
  pick([5, 7], 'm', "A small radio system needs simple hardware and no synchronization. Which technique is the best? Why?",
    ["FDMA", "TDMA", "CDMA"], 0,
    [["Simple hardware", "has simple", "is simple", "simple but", "easy"], ["No synchronization needed", "synchronization is not", "no synchronization is", "does not need synchron", "without synchron", "needs no synchron"]],
    "FDMA has simple hardware and no synchronization is needed.");
  pick([10, 12], 'm', "Users must share the same frequency at the same time with strong resistance to interference. Which technique is the best? Why?",
    ["FDMA", "CDMA", "TDMA"], 1,
    [["Each user has a unique spreading code", "code"], ["Strong interference resistance / signals stay separable", "resist", "separa", "interference"]],
    "CDMA gives each user a unique spreading code, so the overlapping signals stay separable and it has strong interference resistance.");
});
