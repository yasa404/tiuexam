/* Lecture 4: Digital modulation techniques (PDF pages 4-15). */
EC.lecture(4, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;
  var QP = `Bits     Phase
00         0°
01        90°
10       180°
11       270°`;

  /* ---------- Section A ---------- */
  mcq(4, 'e', "Digital communication represents information using…",
    ["bits", "colors", "paper", "sound only"], "Slide 4.");
  mcq(4, 'm', "Compared with analog communication, digital communication is…",
    ["more resistant to noise", "less resistant to noise", "not able to use error correction", "not able to use encryption"], "Slide 4.");
  mcq(4, 'm', "Which advanced features does digital communication allow?",
    ["Error correction and encryption", "Only a louder voice signal", "Longer cables without any loss", "Communication without any channel"], "Slide 4.");
  mcq(4, 'm', "In this block diagram, which block is missing at (1)?",
    ["Modulation", "Sink", "Source decoder", "Sync recovery"], "After the channel encoder.", { qfig: 'blocksBlank' });
  mcq(4, 'm', "In this block diagram, which block is missing at (2)?",
    ["Channel", "Source", "Source encoder", "Sink"], "Between multiple access and multiple de-access.", { qfig: 'blocksBlank' });
  mcq(4, 'h', "Which block comes directly after the source in a digital communication system?",
    ["Source encoder", "Channel encoder", "Modulation", "Multiple access"], "Slide 4.");
  mcq(5, 'e', "Digital modulation is the process of converting digital data into…",
    ["signals suitable for transmission", "printed documents for the user", "electrical power for the antenna", "analog voice for the microphone only"], "Slide 5.");
  mcq(5, 'e', "ASK stands for…",
    ["Amplitude Shift Keying", "Analog Signal Keying", "Antenna Shift Keying", "Amplitude Signal Coding"], "Slide 5.");
  mcq(5, 'e', "QAM stands for…",
    ["Quadrature Amplitude Modulation", "Quality Amplitude Modulation", "Quadrature Antenna Modulation", "Quick Analog Modulation"], "Slide 5.");
  mcq(6, 'e', "Which one is a benefit of modulation?",
    ["It reduces the antenna size", "It increases the noise", "It prevents wireless transmission", "It shortens the transmission range"], "Slide 6.");
  mcq(6, 'm', "Why does a higher carrier frequency allow a smaller antenna?",
    ["The wavelength becomes shorter", "The wavelength becomes longer", "The signal becomes an analog one", "The noise becomes zero"], "Antenna length depends on the wavelength.");
  mcq(6, 'm', "Why is it not practical to transmit a 3 kHz voice signal directly, without modulation?",
    ["The antenna would have to be kilometers long", "The voice would be too loud for the receiver", "The signal would travel faster than light does", "The receiver would need an optical fiber cable"], "Slide 6.");
  mcq(6, 'm', "Modulation enables multiple users to…",
    ["share channels", "stop sending", "use no antenna", "avoid receivers"], "Slide 6.");
  mcq(7, 'e', "In s(t) = A cos(2πft + φ), the letter A is the…",
    ["amplitude", "frequency", "phase", "antenna"], "Slide 7.");
  mcq(7, 'e', "In s(t) = A cos(2πft + φ), the symbol φ is the…",
    ["phase", "frequency", "amplitude", "period"], "Slide 7.");
  mcq(7, 'm', "Which are the three parameters of a carrier that digital modulation can change?",
    ["Amplitude, frequency and phase", "Voltage, color and time", "Length, width and height", "Velocity, distance and time slot"], "Slide 7.");
  mcq(7, 'm', "Digital modulation works by changing…",
    ["one or more carrier parameters according to the data", "the length of the antenna according to the weather", "the speed of light according to the distance to the user", "the number of receivers according to the noise"], "Slide 7.");
  mcq(8, 'm', "Which modulation is shown in this figure?",
    ["ASK", "FSK", "PSK", "QAM"], "The amplitude changes.", { qfig: 'askWave' });
  mcq(8, 'm', "Identify the modulation technique of the signal in this figure.",
    ["FSK", "ASK", "PSK", "QAM"], "The frequency changes.", { qfig: 'fskWave' });
  mcq(8, 'm', "What kind of shift keying does this figure show?",
    ["PSK", "FSK", "ASK", "QAM"], "The phase changes.", { qfig: 'pskWave' });
  mcq(9, 'e', "In ASK, which carrier parameter varies with the input bit?",
    ["Amplitude", "Frequency", "Phase", "Wavelength"], "Slide 9.");
  mcq(9, 'e', "In ASK, bit 0 is represented by…",
    ["no signal or a low amplitude", "a high frequency", "a phase shift of 180 degrees", "a high amplitude"], "Slide 9.");
  mcq(9, 'm', "Why does ASK perform poorly in noisy environments?",
    ["The information depends on the amplitude", "The information depends on the phase", "The receiver needs several antennas", "The carrier frequency changes all the time"], "Noise changes the amplitude.");
  mcq(9, 'm', "Which one is an advantage of ASK?",
    ["Simple circuitry and low cost", "Very high noise immunity", "Very high power efficiency", "Several bits in every one symbol"], "Slide 9.");
  mcq(9, 'm', "Which one is a disadvantage of ASK?",
    ["Poor power efficiency", "Complex and large circuitry", "High cost", "It cannot send bits"], "Slide 9.");
  mcq(10, 'e', "In FSK, bit 1 is represented by…",
    ["a high frequency", "a low frequency", "no carrier", "a phase shift of 180°"], "Slide 10.");
  mcq(10, 'm', "Why is FSK more robust against noise than ASK?",
    ["Information is carried in frequency rather than amplitude", "Information is carried in amplitude rather than frequency", "It sends each of the bits several times without a carrier", "It never uses a carrier signal to transmit the information"], "Slide 10.");
  mcq(10, 'm', "FSK is widely used in…",
    ["telemetry systems", "optical fiber only", "paper printers", "X-ray machines"], "Slide 10.");
  mcq(11, 'e', "PSK transmits information by changing the carrier’s…",
    ["phase", "amplitude", "frequency", "power supply"], "Slide 11.");
  mcq(11, 'm', "In binary PSK, bit 1 is phase 0° and bit 0 is phase…",
    ["180°", "90°", "45°", "360°"], "Slide 11.");
  mcq(11, 'm', "Which one is an advantage of PSK?",
    ["Good bandwidth efficiency", "Poor noise immunity", "It needs no carrier signal", "It changes the amplitude"], "Slide 11.");
  mcq(12, 'e', "How many bits does QPSK transmit in each symbol?",
    ["2", "1", "4", "8"], "Slide 12.");
  mcq(12, 'm', "Compared with BPSK, the data rate of QPSK at the same symbol rate is…",
    ["doubled", "halved", "the same", "four times higher"], "2 bits per symbol.");
  mcq(12, 'm', "According to this table, which phase represents the bits 10?",
    ["180°", "0°", "90°", "270°"], "Read the table.", { code: QP });
  mcq(12, 'h', "According to this table, which phases are sent for the bit sequence 01 11 00?",
    ["90°, 270°, 0°", "0°, 90°, 270°", "90°, 180°, 0°", "270°, 90°, 0°"], "Two bits per symbol.", { code: QP });
  mcq(12, 'h', "How many QPSK symbols are needed to send 100 bits?",
    ["50", "100", "200", "25"], "2 bits per symbol.");
  mcq(13, 'e', "QAM combines…",
    ["phase and amplitude modulation", "frequency and time modulation", "amplitude and code modulation", "time slots and phase encryption"], "Slide 13.");
  mcq(13, 'm', "The different symbols of a QAM format are represented in a…",
    ["constellation diagram", "radiation pattern", "link budget table", "Fresnel zone ellipse"], "Slide 13.");
  mcq(13, 'm', "What does a higher-order QAM need?",
    ["A better signal-to-noise ratio", "A lower signal-to-noise ratio", "No carrier signal at all", "A larger free-space path loss"], "Slide 13.");
  mcq(13, 'e', "Why does QAM provide very high data rates?",
    ["It transmits multiple bits per symbol", "It uses only one bit per symbol", "It changes only the carrier frequency", "It has the lowest complexity"], "Slide 13.");
  mcq(14, 'm', "How many bits per symbol does 64-QAM carry?",
    ["6", "4", "8", "64"], "2^6 = 64.");
  mcq(14, 'm', "Which QAM carries 8 bits per symbol?",
    ["256-QAM", "8-QAM", "16-QAM", "128-QAM"], "2^8 = 256.");
  mcq(14, 'h', "A system sends 1000 symbols per second with 16-QAM. What is its bit rate?",
    ["4000 bit/s", "16000 bit/s", "1000 bit/s", "250 bit/s"], "4 bits × 1000.");
  mcq(14, 'h', "The modulation changes from 16-QAM to 256-QAM at the same symbol rate. The data rate becomes…",
    ["2 times higher", "16 times higher", "4 times higher", "the same"], "4 bits to 8 bits.");
  mcq(15, 'm', "Which technique has the lowest noise immunity?",
    ["ASK", "FSK", "BPSK", "QPSK"], "Slide 15.");
  mcq(15, 'm', "Which technique has the highest complexity?",
    ["QAM", "ASK", "FSK", "BPSK"], "Slide 15.");
  mcq(15, 'm', "Which technique changes both the amplitude and the phase of the carrier?",
    ["QAM", "QPSK", "FSK", "ASK"], "Slide 15.");
  mcq(15, 'm', "A user far from the base station in LTE or 5G may use…",
    ["QPSK", "256-QAM", "128-QAM", "64-QAM"], "Better reliability and noise immunity.");
  mcq(15, 'h', "Why may a user close to the base station use 256-QAM?",
    ["The SNR is high, so the throughput can be maximized", "The SNR is low, so a lot more noise immunity is needed", "The antenna of the base station is turned off", "QPSK does not work when the distance is short"], "Slide 15.");
  mcq(15, 'h', "The choice between QPSK and QAM depends on…",
    ["the available SNR and the channel conditions", "the color of the antenna and the length of the cable", "the name of the user and the network", "the length of the message and the language"], "Slide 15.");

  /* ---------- Section C ---------- */
  tf(4, 'e', "Digital communication is more resistant to noise than analog communication.", true, "Slide 4.");
  tf(5, 'e', "Modulation allows digital information to be carried over radio waves, cables or optical fibers.", true, "Slide 5.");
  tf(6, 'm', "A higher carrier frequency needs a longer antenna.", false, "A shorter antenna.");
  tf(6, 'm', "Modulation increases the transmission range.", true, "Slide 6.");
  tf(7, 'm', "Wavelength, color and time are the three carrier parameters.", false, "Amplitude, frequency and phase.");
  tf(9, 'e', "In ASK, the amplitude of the carrier varies according to the bit.", true, "Slide 9.");
  tf(9, 'm', "ASK performs very well in noisy environments.", false, "Poorly.");
  tf(10, 'e', "In FSK, bit 1 and bit 0 use different frequencies.", true, "Slide 10.");
  tf(10, 'm', "FSK has worse noise performance than ASK.", false, "Better.");
  tf(11, 'e', "In PSK, the amplitude of the carrier carries the information.", false, "The phase.");
  tf(12, 'e', "QPSK transmits two bits per symbol.", true, "Slide 12.");
  tf(12, 'm', "QPSK halves the data rate compared with BPSK.", false, "It doubles the data rate.");
  tf(13, 'm', "QAM changes only the amplitude of the carrier.", false, "Both amplitude and phase.");
  tf(13, 'm', "Higher-order QAM requires a better signal-to-noise ratio.", true, "Slide 13.");
  tf(14, 'm', "32-QAM carries 5 bits per symbol.", true, "2^5 = 32.");
  tf(14, 'm', "QAM systems are named according to the number of different symbols.", true, "Slide 14.");
  tf(15, 'm', "QPSK provides better reliability, while QAM provides higher data rates.", true, "Slide 15.");
  tf(15, 'm', "ASK has the highest complexity of all the techniques.", false, "QAM has.");

  /* ---------- Section B ---------- */
  fill(4, 'e', "Unlike analog communication, digital communication represents information using [[bits|bit]].", "Slide 4.");
  fill(5, 'e', "Converting digital data into signals suitable for transmission is called digital [[modulation]].", "Slide 5.");
  fill(5, 'm', "FSK stands for [[frequency]] shift keying, and PSK stands for [[phase]] shift keying.", "Slide 5.");
  fill(6, 'm', "Higher carrier frequencies greatly reduce the size of the [[antenna]].", "Slide 6.");
  fill(7, 'e', "The three carrier parameters are [[amplitude]], [[frequency]] and [[phase]].", "Slide 7.", { set: true });
  fill(9, 'e', "In ASK, the [[amplitude]] of the carrier varies according to the input bit.", "Slide 9.");
  fill(9, 'm', "ASK is highly sensitive to [[noise]].", "Slide 9.");
  fill(10, 'e', "In FSK, bit 1 is sent with a [[high|higher]] frequency and bit 0 with a [[low|lower]] frequency.", "Slide 10.");
  fill(11, 'm', "In binary PSK, bit 0 is sent with a phase of [[180]] degrees.", "Slide 11.");
  fill(12, 'e', "QPSK transmits [[2|two]] bits per symbol.", "Slide 12.");
  fill(12, 'm', "QPSK [[doubles|double]] the data rate compared with BPSK.", "Slide 12.");
  fill(13, 'm', "QAM changes both the [[amplitude]] and the [[phase]] of the carrier.", "Slide 13.", { set: true });
  fill(13, 'm', "QAM symbols are represented in a [[constellation]] diagram.", "Slide 13.");
  fill(13, 'm', "Higher-order QAM requires a better signal-to-[[noise]] ratio.", "Slide 13.");
  fill(14, 'm', "16-QAM carries [[4|four]] bits per symbol, and 256-QAM carries [[8|eight]] bits per symbol.", "Slide 14.");
  fill(14, 'h', "A QAM system with 7 bits per symbol has [[128]] different symbols.", "2^7 = 128.");
  fill(15, 'm', "The technique with the lowest complexity and the lowest noise immunity is [[ASK]].", "Slide 15.");
  fill(15, 'h', "In LTE and 5G, a user far from the base station may use [[QPSK]], and a user close to it may use 256-[[QAM]].", "Slide 15.");

  /* ---------- Section D ---------- */
  def(4, 'e', 2, "Define digital communication and give one advantage over analog communication.",
    [["Transmitting information in digital form (bits)", "digital form", "bits"], ["More resistant to noise (or error correction, encryption)", "noise", "error correction", "encryption"]],
    "Digital communication is transmitting information in digital form, using bits. It is more resistant to noise and allows error correction and encryption.");
  def(5, 'e', 2, "Define digital modulation and give two techniques.",
    [["Converting digital data into signals suitable for transmission", "convert", "suitable"], ["Two of ASK, FSK, PSK, QPSK, QAM", "ask", "fsk", "psk", "qpsk", "qam"]],
    "Digital modulation is converting digital data into signals suitable for transmission, for example ASK and FSK.");
  def(7, 'm', 2, "Write the carrier wave equation and name its three parameters.",
    [["s(t) = A cos(2πft + φ)", "cos"], ["Amplitude, frequency and phase", "amplitude frequency and phase", "amplitude frequency phase", "phase"]],
    "s(t) = A cos(2πft + φ). The parameters are amplitude, frequency and phase.");
  def(9, 'm', 2, "How does ASK represent bit 1 and bit 0?",
    [["Bit 1: high amplitude (carrier present)", "high amplitude", "carrier present", "1 high"], ["Bit 0: no signal or low amplitude", "no signal", "low amplitude", "absent", "no carrier"]],
    "Bit 1 is a high amplitude (carrier present), and bit 0 is no signal or a low amplitude.");
  def([10, 11], 'm', 2, "How do FSK and PSK represent the bits?",
    [["FSK: different frequencies (high for 1, low for 0)", "frequenc"], ["PSK: different phases (0° for 1, 180° for 0)", "phase"]],
    "FSK uses different frequencies: high for 1 and low for 0. PSK uses different phases: 0° for 1 and 180° for 0.");
  def(12, 'm', 2, "How many bits per symbol does QPSK send, and what is its advantage over BPSK?",
    [["2 bits per symbol", "#2", "two"], ["It doubles the data rate", "double", "twice"]],
    "QPSK sends 2 bits per symbol, so it doubles the data rate compared with BPSK.");
  def(13, 'm', 2, "Define QAM and state what a higher order requires.",
    [["Combines phase and amplitude modulation", "phase and amplitude", "amplitude and phase", "both"], ["A better signal-to-noise ratio", "signal to noise", "snr"]],
    "QAM combines phase and amplitude modulation. A higher order requires a better signal-to-noise ratio.");
  def(15, 'm', 2, "What is the main advantage of QPSK over QAM, and of QAM over QPSK?",
    [["QPSK: better reliability and noise immunity", "reliab", "noise immunity"], ["QAM: higher data rates", "higher data", "data rate", "spectral"]],
    "QPSK provides better reliability and noise immunity, while QAM provides higher data rates.");
  list(5, 'e', 4, "List four digital modulation techniques.",
    [["ASK", "ask", "amplitude shift"], ["FSK", "fsk", "frequency shift"], ["PSK", "=psk", "=bpsk", "phase shift keying"], ["QPSK", "qpsk", "quadrature phase"], ["QAM", "qam", "quadrature amplitude"]], { n: 4 });
  list(6, 'm', 4, "List four benefits of digital modulation.",
    [["Allows wireless transmission", "wireless"], ["Reduces antenna size", "antenna"], ["Increases transmission range", "range"], ["Improves noise immunity", "noise"], ["Multiple users share channels", "users", "share"]], { n: 4 });
  list(7, 'e', 3, "List the three carrier parameters.",
    [["Amplitude", "amplitude"], ["Frequency", "frequency"], ["Phase", "phase"]]);
  list(9, 'm', 4, "List two advantages and two disadvantages of ASK.",
    [["Simple circuitry", "simple"], ["Low cost", "cost", "cheap"], ["Sensitive to noise", "noise"], ["Poor power efficiency", "power"]]);
  list(13, 'm', 3, "List three communication systems that use QAM.",
    [["Radio", "radio"], ["Microwave", "microwave"], ["Optical fiber", "optical", "fiber", "fibre"], ["Digital cable television", "television", "cable", "tv"]], { n: 3 });
  list(4, 'h', 4, "List four blocks on the transmitter side of a digital communication system.",
    [["Source", "=source", "the source"], ["Source encoder", "source encoder"], ["Channel encoder", "channel encoder"], ["Modulation", "modulation", "modulator"], ["Multiple access", "multiple access"]], { n: 4 });

  /* ---------- Section E ---------- */
  exp(6, 'm', "Explain why modulation is needed in wireless communication.",
    [["It reduces the antenna size", "antenna"], ["Because a higher carrier frequency has a shorter wavelength", "higher", "shorter", "carrier"], ["It increases the range or improves noise immunity", "range", "noise"], ["Multiple users can share channels", "users", "share"]],
    "Modulation reduces the antenna size, because a higher carrier frequency has a shorter wavelength. It also increases the transmission range and improves noise immunity, and it lets multiple users share channels.");
  exp([9, 10, 11], 'm', "Compare ASK, FSK and PSK.",
    [["ASK changes the amplitude", "amplitude"], ["FSK changes the frequency", "frequency"], ["PSK changes the phase", "phase"], ["ASK has the lowest noise immunity; FSK and PSK are better", "noise"]],
    "ASK changes the amplitude, FSK changes the frequency and PSK changes the phase of the carrier. ASK has the lowest noise immunity, FSK is better, and PSK has a high noise immunity.");
  exp([12, 13, 15], 'm', "Compare QPSK and QAM and explain when each one is used.",
    [["QPSK changes the phase and sends 2 bits per symbol", "2 bits", "two bits", "phase"], ["QAM changes amplitude and phase and sends more bits per symbol", "amplitude and phase", "more bits", "multiple bits"], ["QPSK for far users: reliability and noise immunity", "far", "reliab", "noise"], ["QAM for close users with high SNR: higher data rate", "close", "near", "snr", "data rate"]],
    "QPSK changes the phase and sends 2 bits per symbol. QAM changes both amplitude and phase and sends more bits per symbol. QPSK is used for far users because of its reliability and noise immunity. QAM is used for close users with a high SNR, because it gives a higher data rate.");
  exp(14, 'h', "Explain how a QAM system is named and how its bits per symbol are found, with an example.",
    [["It is named after the number of different symbols", "number of", "symbols"], ["Number of symbols = 2^bits", "2 power", "power of", "2 bits", "2 n", "log"], ["An example, such as 16-QAM = 4 bits", "16 qam", "64 qam", "256 qam", "32 qam"], ["More bits per symbol give a higher data rate (and need a better SNR)", "data rate", "snr", "noise"]],
    "A QAM system is named after the number of different symbols. The number of symbols is 2 to the power of the bits per symbol. For example, 16 QAM has 4 bits per symbol because 2^4 = 16. More bits per symbol give a higher data rate but need a better SNR.");
  draw([9, 10, 11], 'm', "Draw the signals of the three basic shift keying techniques for the bits 1 0 1 1 0.", 'shiftKeying',
    [["Data bits 1 0 1 1 0", "1 0 1 1 0", "10110", "data"], ["ASK: carrier for 1, no carrier for 0", "ask", "amplitude"], ["FSK: high frequency for 1, low for 0", "fsk", "frequency"], ["PSK: phase change of 180° between 1 and 0", "psk", "phase"]],
    "Data bits 1 0 1 1 0. ASK: carrier for 1 and no carrier for 0. FSK: high frequency for 1 and low frequency for 0. PSK: the phase changes by 180° between 1 and 0.");
  draw(4, 'm', "Draw the block diagram of a digital communication system (transmitter side, channel and receiver side).", 'blocks',
    [["Source and source encoder", "source"], ["Channel encoder", "channel encoder"], ["Modulation (and multiple access), then the channel", "modulation"], ["Receiver side in reverse order up to the sink", "sink", "decoder", "demodulation"]],
    "Source → source encoder → channel encoder → modulation → multiple access → channel → multiple de-access → demodulation and detection → channel decoder → source decoder → sink.");
  draw(12, 'h', "Draw the constellation (phase positions) of QPSK for the table below.", 'qpskConst',
    [["00 at 0°", "00"], ["01 at 90°", "01"], ["10 at 180°", "10"], ["11 at 270°", "11"]],
    "Four points on a circle: 00 at 0°, 01 at 90°, 10 at 180° and 11 at 270°.", { code: QP });
  calc(14, 'e', "A system sends 2000 symbols per second with 64-QAM. Calculate the bits per symbol and the bit rate.",
    [["2^n = 64", "2 6", "26 64", "2 n", "log", "#6"], ["n = 6 bits per symbol", "#6"], ["Bit rate = symbol rate × bits per symbol", "symbol rate", "times", "2000 6", "#12000"], ["2000 × 6", "2000 6", "2000 x 6", "#12000"], ["12000 bit/s (12 kbps)", "#12000", "#12"]],
    "2^6 = 64, so 6 bits per symbol. Bit rate = symbol rate × bits per symbol = 2000 × 6 = 12000 bit/s");
  calc([12, 14], 'm', "A file has 1200 bits. Calculate the number of symbols needed with BPSK (1 bit per symbol), QPSK and 16-QAM.",
    [["BPSK: 1200 symbols", "#1200"], ["QPSK: 2 bits per symbol", "#2"], ["QPSK: 600 symbols", "#600"], ["16-QAM: 4 bits per symbol", "#4"], ["16-QAM: 300 symbols", "#300"]],
    "BPSK: 1200 / 1 = 1200 symbols. QPSK: 1200 / 2 = 600 symbols. 16-QAM: 1200 / 4 = 300 symbols");
  calc(6, 'm', "The antenna length is a quarter of the wavelength. Calculate it for a 3 kHz voice signal and for a 100 MHz carrier.",
    [["λ = c / f", "c f", "3 10 8", "3 x 10"], ["3 kHz: λ = 100 km", "#100", "#100000"], ["3 kHz: 25 km", "#25", "#25000"], ["100 MHz: λ = 3 m", "#3"], ["100 MHz: 0.75 m", "#0.75"]],
    "λ = c / f. For 3 kHz: λ = (3 x 10^8) / (3 x 10^3) = 100 km and the antenna is 100 / 4 = 25 km. For 100 MHz: λ = (3 x 10^8) / (100 x 10^6) = 3 m and the antenna is 3 / 4 = 0.75 m");
  calc([12, 14], 'h', "A link sends 5000 symbols per second. Calculate its bit rate with QPSK and with 256-QAM, and how many times faster 256-QAM is.",
    [["QPSK: 2 bits per symbol", "#2"], ["QPSK: 10000 bit/s", "#10000", "#10"], ["256-QAM: 8 bits per symbol", "#8"], ["256-QAM: 40000 bit/s", "#40000", "#40"], ["4 times faster", "#4"]],
    "QPSK: 2 bits per symbol, 5000 × 2 = 10000 bit/s. 256-QAM: 8 bits per symbol, 5000 × 8 = 40000 bit/s. 256-QAM is 4 times faster");
  pick(15, 'm', "A phone is at the edge of the cell with a low SNR. Which modulation is the best? Why?",
    ["256-QAM", "QPSK", "128-QAM"], 1,
    [["Better reliability and noise immunity", "reliab", "noise"], ["Higher-order QAM needs a better SNR", "snr", "signal to noise", "higher order"]],
    "QPSK has better reliability and noise immunity, while higher-order QAM needs a better SNR.");
  pick([13, 15], 'm', "A phone is close to the base station with a high SNR and wants the highest data rate. Which modulation is the best? Why?",
    ["ASK", "QPSK", "256-QAM"], 2,
    [["It transmits more bits per symbol (8)", "more bits", "8 bits", "multiple bits", "bits per symbol"], ["The SNR is high enough", "snr", "signal to noise", "close"]],
    "256-QAM transmits more bits per symbol, so the data rate is higher, and the SNR is high enough for it.");
  pick([9, 10], 'm', "A cheap sensor must send bits in a noisy factory. Which is the better choice? Why?",
    ["ASK", "FSK", "They are the same in noise"], 1,
    [["FSK carries information in the frequency", "frequency"], ["So it is more robust against noise than ASK", "robust", "noise"]],
    "FSK carries the information in the frequency rather than the amplitude, so it is more robust against noise than ASK.");
});
