/* Lecture 1: Radio Wave Propagation 1, electromagnetic waves and spectrum (PDF pages 9-15; pages 1-8 are course administration and titles). */
EC.lecture(1, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;

  /* ---------- Section A ---------- */
  mcq(9, 'e', "In which situation is wireless communication most needed?",
    ["Where wired communication is difficult or impossible", "Where optical fiber is already installed everywhere", "Where nobody needs to move from a desk", "Where the highest possible data rate is the only goal"], "Slide 9.");
  mcq(9, 'e', "Which one is an advantage of wireless communication?",
    ["Quick deployment", "Immunity to noise", "Higher data rate than fiber", "Easy frequency reuse"], "Slide 9.");
  mcq(9, 'e', "Secretly listening to a conversation is called…",
    ["eavesdropping", "broadcasting", "frequency modulation", "attenuation"], "Slide 9.");
  mcq(9, 'm', "Which one is a concern (disadvantage) of wireless communication?",
    ["It is more susceptible to interference", "It has a very high initial cost for users", "It takes a long time to deploy", "It cannot reach several locations"], "Slide 9.");
  mcq(9, 'm', "Compared with optical fiber, the data rate of wireless communication is…",
    ["lower", "higher", "always equal", "unlimited"], "Slide 9.");
  mcq(9, 'm', "A company must send the same information to many locations at once. Why is wireless suitable?",
    ["Information can be broadcast to many locations", "Wireless signals never lose any of their power", "Each location needs its own long cable", "Wireless is immune to all interference"], "Slide 9.");
  mcq(9, 'm', "Which statement about frequency reuse is correct?",
    ["It is more difficult in wireless than in wired communication", "It is not needed, since wireless has unlimited frequencies to use", "It is easier in wireless because signals stay in one cable", "It only concerns optical fiber and never concerns radio"], "Slide 9.");
  mcq(10, 'e', "Electromagnetic waves arise from coupled oscillations of…",
    ["electric and magnetic fields", "sound and light fields", "electric and gravitational fields", "heat and pressure fields"], "Slide 10.");
  mcq(10, 'e', "What is the angle between the electric field and the magnetic field of an EM wave?",
    ["A right angle (90°)", "Zero degrees (0°)", "Forty-five degrees (45°)", "A half turn (180°)"], "Slide 10.");
  mcq(10, 'm', "In which direction does an EM wave travel?",
    ["Perpendicular to both the electric and magnetic fields", "Parallel to the electric field and opposite to the magnetic field", "Parallel to the magnetic field vector", "In a circle around both fields"], "Slide 10.");
  mcq(10, 'm', "Which part of the electromagnetic spectrum supports the transmission of communication signals?",
    ["The Radio Frequency (RF) spectrum", "The visible light spectrum only", "The X-ray part of the spectrum", "The gamma-ray part of the spectrum"], "Slide 10.");
  mcq(10, 'm', "The RF spectrum extends approximately from…",
    ["9 kHz to 300 GHz", "9 Hz to 300 kHz", "9 MHz to 300 MHz", "9 GHz to 300 THz"], "Slide 10.");
  mcq(11, 'm', "Which quantity is shown by λ in this picture of an EM wave?",
    ["Wavelength", "Period of the wave", "Velocity", "Amplitude"], "The distance of one cycle.", { qfig: 'emWaveBlank' });
  mcq(12, 'e', "The smallest portion of a waveform that, if repeated, represents the entire waveform is the…",
    ["cycle", "amplitude", "velocity", "spectrum"], "Slide 12.");
  mcq(12, 'e', "The measurement of a waveform above a center reference is its…",
    ["amplitude", "period", "frequency", "wavelength"], "Slide 12.");
  mcq(12, 'e', "The time that a wave takes to repeat itself (one cycle) is the…",
    ["period", "frequency", "amplitude", "wavelength"], "Slide 12.");
  mcq(12, 'm', "In which unit is the velocity of propagation usually measured?",
    ["Meters per second", "Cycles per second", "Volts per meter", "Seconds"], "Slide 12.");
  mcq(12, 'm', "In which units is the amplitude of an EM wave usually measured?",
    ["Volts or watts", "Hertz or cycles", "Meters or seconds", "Degrees or radians"], "Slide 12.");
  mcq(13, 'e', "The distance that a wave propagates in one cycle is the…",
    ["wavelength", "period", "frequency", "phase velocity"], "Slide 13.");
  mcq(13, 'e', "The rate at which individual cycles pass a given point is the…",
    ["frequency", "period", "wavelength", "amplitude"], "Slide 13.");
  mcq(13, 'e', "One hertz (Hz) is equal to one…",
    ["cycle per second", "meter per second", "second per cycle", "volt per meter"], "Slide 13.");
  mcq(13, 'm', "Which formula relates frequency, period, velocity and wavelength?",
    ["f = 1/T = v/λ", "f = T = v × λ", "f = 1/v = T/λ", "f = λ/v = T"], "Slide 13.");
  mcq(13, 'm', "Which property of a waveform is NOT included in the formula f = 1/T = v/λ?",
    ["Amplitude", "Wavelength", "Velocity", "Period"], "Slide 13.");
  mcq(13, 'm', "The velocity of propagation of EM waves equals the speed of light, which is…",
    ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s"], "Slide 13.");
  mcq(13, 'm', "The period of a wave is 0.5 seconds. What is its frequency?",
    ["2 Hz", "0.5 Hz", "5 Hz", "20 Hz"], "f = 1/T = 1/0.5 = 2 Hz.");
  mcq(13, 'm', "What is the wavelength of a 100 MHz radio wave?",
    ["3 m", "0.3 m", "30 m", "300 m"], "λ = 3 × 10^8 / 100 × 10^6 = 3 m.");
  mcq(13, 'h', "A radio wave has a wavelength of 0.1 m. What is its frequency?",
    ["3 GHz", "300 MHz", "30 GHz", "30 MHz"], "f = 3 × 10^8 / 0.1 = 3 × 10^9 Hz.");
  mcq(13, 'h', "The frequency of an EM wave is doubled. What happens to its wavelength?",
    ["It becomes half", "It becomes double", "It stays the same", "It becomes four times larger"], "λ = c/f.");
  mcq(13, 'h', "Wave A has a period of 1 µs and wave B has a period of 2 µs. Which statement is correct?",
    ["Wave A has the higher frequency", "Wave B has the higher frequency", "They have the same frequency", "Wave A has no frequency at all"], "f = 1/T.");
  mcq(14, 'e', "The entire range of EM waves in order of increasing frequency is called the…",
    ["electromagnetic spectrum", "Fresnel zone", "wireless link budget", "antenna radiation pattern"], "Slide 14.");
  mcq(14, 'e', "The relationship between wavelength and frequency is…",
    ["inverse", "direct", "constant", "random"], "Slide 14.");
  mcq(14, 'm', "Moving along the spectrum towards higher frequencies, the wavelength…",
    ["gets smaller", "gets larger", "stays the same", "becomes zero at once"], "Slide 14.");
  mcq(14, 'm', "According to this table, which band is used by FM radio?",
    ["VHF", "VLF", "SHF", "MF"], "Read the table.", { qfig: 'bands' });
  mcq(14, 'm', "According to this table, a 2.4 GHz Wi-Fi signal is in the…",
    ["UHF band", "VHF band", "HF band", "EHF band"], "UHF is 300 MHz to 3 GHz.", { qfig: 'bands' });
  mcq(14, 'h', "According to this table, a 5 GHz Wi-Fi signal is in the…",
    ["SHF band", "UHF band", "VHF band", "LF band"], "SHF is 3 GHz to 30 GHz.", { qfig: 'bands' });
  mcq(14, 'h', "Which band in this table has the longest wavelength?",
    ["VLF", "EHF", "HF", "UHF"], "Lowest frequency = longest wavelength.", { qfig: 'bands' });
  mcq(15, 'e', "Which EM waves have the longest wavelengths and the lowest frequencies?",
    ["Radio waves", "Infrared waves", "Visible light", "Ultraviolet light"], "Slide 15.");
  mcq(15, 'e', "Which EM waves are used in TV remote control devices?",
    ["Infrared waves", "Radio waves", "Ultraviolet light", "Visible light"], "Slide 15.");
  mcq(15, 'm', "Which EM waves can penetrate living cells and cause them damage?",
    ["Ultraviolet light", "Radio waves", "Infrared waves", "Red visible light"], "Slide 15.");
  mcq(15, 'm', "Which type of EM wave is used for finding people in the dark?",
    ["Infrared", "Ultraviolet", "Visible light", "Radio"], "Slide 15.");
  mcq(15, 'h', "Which order is correct, from the lowest to the highest frequency?",
    ["Radio, infrared, visible light, ultraviolet", "Ultraviolet, visible light, infrared, radio", "Infrared, radio, ultraviolet, visible light", "Visible light, infrared, radio, ultraviolet"], "Slide 15.");
  mcq(15, 'h', "Why can ultraviolet rays damage living cells while radio waves do not?",
    ["Their frequency, and therefore their energy, is high enough", "Their wavelength is much longer than the body of one person", "They travel much faster than the speed of other EM waves", "They do not have an electric field or a magnetic field"], "Slide 15.");

  /* ---------- Section C ---------- */
  tf(9, 'e', "Wireless communication can be deployed quickly.", true, "Slide 9.");
  tf(9, 'e', "Wireless communication is immune to interference and noise.", false, "It is more susceptible.");
  tf(9, 'm', "Wireless communication has lower data rates than optical fiber.", true, "Slide 9.");
  tf(10, 'e', "In an EM wave, the electric and magnetic fields are parallel to each other.", false, "They lie at right angles.");
  tf(10, 'm', "An EM wave travels perpendicular to both the electric and the magnetic field.", true, "Slide 10.");
  tf(10, 'm', "The whole electromagnetic spectrum is used to transmit communication signals.", false, "Only a small portion, the RF spectrum.");
  tf(12, 'e', "The period of a wave is measured in meters.", false, "In seconds.");
  tf(12, 'm', "A cycle is the smallest portion of a waveform that can be repeated to represent the entire waveform.", true, "Slide 12.");
  tf(13, 'e', "The wavelength is designated by the Greek letter lambda (λ).", true, "Slide 13.");
  tf(13, 'm', "The frequency equals one divided by the period.", true, "f = 1/T.");
  tf(13, 'm', "The amplitude is included in the formula f = 1/T = v/λ.", false, "All properties except amplitude.");
  tf(13, 'h', "A wave with a higher frequency has a longer wavelength.", false, "Shorter: inverse relationship.");
  tf(14, 'm', "Wavelength and frequency have an inverse relationship.", true, "Slide 14.");
  tf(15, 'e', "Infrared waves are used in TV remote controls.", true, "Slide 15.");
  tf(15, 'm', "Infrared waves have a lower frequency than radio waves.", false, "Higher frequency.");
  tf(15, 'm', "Ultraviolet light has enough energy to damage living cells.", true, "Slide 15.");
  tf(15, 'm', "Radio waves have the shortest wavelengths of all EM waves.", false, "The longest.");

  /* ---------- Section B ---------- */
  fill(9, 'e', "Wireless communication is more susceptible to signal loss, noise, [[interference]] and eavesdropping.", "Slide 9.");
  fill(9, 'm', "Secretly listening to a conversation is called [[eavesdropping]].", "Slide 9.");
  fill(10, 'e', "EM waves arise from coupled oscillations of [[electric]] and [[magnetic]] fields.", "Slide 10.", { set: true });
  fill(10, 'm', "An EM wave travels in a direction [[perpendicular|at right angles]] to both field vectors.", "Slide 10.");
  fill(10, 'm', "The part of the spectrum that supports communication signals is the [[Radio Frequency|RF]] spectrum.", "Slide 10.");
  fill(12, 'e', "The smallest portion of a waveform that can be repeated to represent the entire waveform is a [[cycle]].", "Slide 12.");
  fill(12, 'e', "The measurement of a waveform above a center reference is the [[amplitude]].", "Slide 12.");
  fill(12, 'm', "The time a wave takes to complete one cycle is the [[period]], and it is measured in [[seconds|second]].", "Slide 12.");
  fill(13, 'e', "The distance a wave propagates in one cycle is the [[wavelength]].", "Slide 13.");
  fill(13, 'e', "Frequency is measured in cycles per second or [[hertz|Hz]].", "Slide 13.");
  fill(13, 'm', "The velocity of propagation of EM waves is equal to the speed of [[light]].", "Slide 13.");
  fill(13, 'm', "The only waveform property that is not in the formula f = 1/T = v/λ is the [[amplitude]].", "Slide 13.");
  fill(13, 'h', "The wavelength of a 300 MHz wave is [[1|one]] meter.", "3 × 10^8 / 300 × 10^6 = 1 m.");
  fill(13, 'h', "A wave with a period of 0.1 seconds has a frequency of [[10|ten]] Hz.", "f = 1/T.");
  fill(14, 'm', "As the frequency increases, the wavelength [[decreases|gets smaller|becomes smaller|gets shorter]].", "Slide 14.");
  fill(14, 'm', "The relationship between wavelength and frequency is [[inverse]].", "Slide 14.");
  fill(15, 'e', "The EM waves with the longest wavelengths are [[radio]] waves.", "Slide 15.");
  fill(15, 'm', "TV remote controls use [[infrared]] waves.", "Slide 15.");
  fill(15, 'm', "The type of light that can damage living cells is [[ultraviolet|UV]] light.", "Slide 15.");

  /* ---------- Section D ---------- */
  def(10, 'e', 2, "Define electromagnetic waves.",
    [["Coupled oscillations of electric and magnetic fields", "electric and magnetic", "electric", "oscillation"], ["The fields lie at right angles to one another", "right angle", "perpendicular", "90"]],
    "Electromagnetic waves arise from coupled oscillations of electric and magnetic fields, which lie at right angles to one another.");
  def(10, 'm', 2, "In which direction does an EM wave travel, and what can it carry?",
    [["Perpendicular to both the electric and magnetic fields", "perpendicular", "right angle"], ["It can transmit information through space", "information"]],
    "An EM wave travels perpendicular to both the electric and magnetic field vectors, and it can transmit information through space.");
  def(12, 'e', 2, "Define cycle and period.",
    [["Cycle: the smallest portion that, if repeated, represents the entire waveform", "smallest"], ["Period: the time the wave takes to repeat itself", "time"]],
    "A cycle is the smallest portion of a waveform that, if repeated, represents the entire waveform. The period is the time the wave takes to repeat itself.");
  def(12, 'm', 2, "Define amplitude and velocity of propagation.",
    [["Amplitude: measurement of a waveform above a center reference", "center", "centre", "reference"], ["Velocity: the velocity that a wave travels through a medium", "medium", "travels"]],
    "Amplitude is the measurement of a waveform above a center reference. The velocity of propagation is the velocity that a wave travels through a medium.");
  def(13, 'e', 2, "Define wavelength and frequency.",
    [["Wavelength: distance the wave propagates in one cycle", "distance"], ["Frequency: rate at which cycles pass a given point", "rate", "cycles per second", "pass a given point", "number of cycles"]],
    "The wavelength is the distance the wave propagates in one cycle. The frequency is the rate at which cycles pass a given point.");
  def(13, 'm', 2, "Write the formula that relates frequency, wavelength and the speed of light, and the value of the speed of light.",
    [["f = c/λ (frequency = speed of light / wavelength)", "f c", "f v", "c divided", "divided by"], ["3 × 10^8 m/s", "3 10 8", "3 108", "3x10", "300000000", "3 x 10"]],
    "f = c / λ = 3 x 10^8 / λ, where the speed of light is 3 × 10^8 m/s.");
  def(14, 'm', 2, "Define the electromagnetic spectrum and state how wavelength changes along it.",
    [["The entire range of EM waves in order of increasing frequency", "entire range", "range of"], ["The wavelength decreases as the frequency increases", "decreas", "smaller", "shorter", "inverse"]],
    "The electromagnetic spectrum is the entire range of EM waves in order of increasing frequency, so the wavelength decreases along it.");
  def(15, 'm', 2, "Compare the wavelength and the frequency of radio waves and infrared waves.",
    [["Radio waves: longer wavelength and lower frequency", "radio waves have the longest", "radio waves have longer", "longer wavelength", "longest", "lower frequenc"], ["Infrared: shorter wavelength and higher frequency", "shorter", "higher"]],
    "Radio waves have a longer wavelength and a lower frequency. Infrared waves have a shorter wavelength and therefore a higher frequency.");
  list(9, 'e', 3, "List three situations in which wireless communication is needed.",
    [["Wired communication is difficult or impossible", "wired", "difficult", "impossible"], ["Quick deployment", "quick deploy", "quickly", "deploy", "fast"], ["Low initial cost", "cost", "cheap"], ["Broadcasting information to many locations", "broadcast", "many locations"]], { n: 3 });
  list(9, 'm', 4, "List four problems (concerns) of wireless communication.",
    [["Interference", "interference"], ["Signal loss", "signal loss", "loss"], ["Noise", "noise"], ["Eavesdropping", "eavesdrop", "listen"], ["Lower data rates than wired", "data rate", "slower"], ["Difficult frequency reuse", "reuse"]], { n: 4 });
  list([12, 13], 'm', 4, "List four properties of a waveform.",
    [["Amplitude", "amplitude"], ["Velocity of propagation", "velocity", "speed"], ["Period", "period"], ["Wavelength", "wavelength"], ["Frequency", "frequency"]], { n: 4 });
  list(15, 'm', 4, "List four types of EM waves.",
    [["Radio waves", "radio"], ["Infrared waves", "infrared"], ["Visible light", "visible"], ["Ultraviolet light", "ultraviolet", "uv"]]);

  /* ---------- Section E ---------- */
  exp(9, 'm', "Explain the advantages and the disadvantages of wireless communication (two of each).",
    [["Advantage 1, e.g. works where wires are difficult or impossible", "difficult", "impossible", "where wire"], ["Advantage 2, e.g. quick deployment, low initial cost or broadcasting", "quick deploy", "quickly", "deploy", "cost", "broadcast"], ["Disadvantage 1, e.g. interference, noise, signal loss or eavesdropping", "interference", "noise", "eavesdrop", "signal loss"], ["Disadvantage 2, e.g. lower data rates or difficult frequency reuse", "data rate", "reuse"]],
    "Advantages: it works where wired communication is difficult or impossible, and it allows quick deployment at a low initial cost. Disadvantages: it is more susceptible to interference, noise and eavesdropping, and it has lower data rates than optical fiber.");
  exp(13, 'm', "Explain the relation between frequency, period and wavelength.",
    [["f = 1/T: frequency is the inverse of the period", "inverse of the period", "1 t", "1 divided", "one divided", "f 1"], ["f = v/λ", "f v", "v divided", "velocity divided"], ["For EM waves v is the speed of light, 3 × 10^8 m/s", "speed of light", "3 10 8", "3 x 10"], ["Higher frequency means shorter wavelength", "shorter", "smaller", "decreas", "inversely"]],
    "The frequency is the inverse of the period: f = 1/T. It also equals v/λ: f = v divided by the wavelength. For EM waves the velocity is the speed of light, 3 x 10^8 m/s. Therefore a higher frequency means a shorter wavelength.");
  exp(15, 'm', "Explain the differences between radio waves, infrared, visible light and ultraviolet in wavelength, and give a use or effect of two of them.",
    [["Radio waves have the longest wavelengths (lowest frequencies)", "longest", "lowest"], ["Infrared, visible and ultraviolet have shorter and shorter wavelengths (higher frequencies)", "shorter", "higher"], ["First use or effect, e.g. radio for wireless communication", "wireless communication", "communication"], ["Second use or effect, e.g. infrared in remote controls, UV damages cells", "remote", "dark", "damage", "cells"]],
    "Radio waves have the longest wavelengths and the lowest frequencies. Infrared, visible light and ultraviolet have shorter and shorter wavelengths, so higher frequencies. Radio waves are used for wireless communication, infrared is used in TV remote controls, and ultraviolet can damage living cells.");
  draw([12, 13], 'm', "Draw a sine waveform and label its main properties and its axis.", 'waveform',
    [["Amplitude (height above the center)", "amplitude"], ["Wavelength (λ)", "wavelength", "lambda"], ["One cycle", "cycle"], ["Distance axis (meters)", "distance", "meter", "metre"]],
    "A sine wave on a distance axis (meters). Amplitude is the height above the center line. The wavelength is the distance of one cycle.");
  draw([10, 11], 'h', "Draw an electromagnetic wave and label its fields, the direction in which it travels, and the length of one cycle.", 'emWave',
    [["Electric field (E)", "electric"], ["Magnetic field (B)", "magnetic"], ["Propagation direction", "propagation", "direction"], ["Wavelength (λ)", "wavelength", "lambda"]],
    "Two sine waves at right angles: the electric field (E) and the magnetic field (B). The propagation direction is perpendicular to both. The wavelength is the distance of one cycle.");
  calc(13, 'e', "Calculate the wavelength of a radio signal with a frequency of 900 MHz.",
    [["Formula λ = c / f", "c f", "3 10 8", "3 x 10", "divided"], ["c = 3 × 10^8 m/s", "3 10 8", "3 x 10", "300000000"], ["f = 900 × 10^6 Hz", "#900"], ["Result: about 0.333 m", "#0.333~0.004"], ["Unit: meters (m)", "333 m", "33 m", "meter", "metre"]],
    "λ = c / f = (3 x 10^8) / (900 x 10^6) = 0.333 m");
  calc(13, 'm', "A wave has a wavelength of 0.125 m. Calculate its frequency and its period.",
    [["f = c / λ", "3 10 8", "3 x 10", "#2.4"], ["c = 3 × 10^8 m/s", "3 10 8", "3 x 10", "300000000"], ["f = 2.4 GHz (2.4 × 10^9 Hz)", "#2.4"], ["T = 1 / f", "1 f", "1 2 4", "1 divided", "#0.417~0.004", "#4.17~0.04"], ["T ≈ 0.417 ns (4.17 × 10^-10 s)", "#0.417~0.004", "#4.17~0.04"]],
    "f = c / λ = (3 x 10^8) / 0.125 = 2.4 x 10^9 Hz = 2.4 GHz. T = 1 / f = 1 / (2.4 x 10^9) = 0.417 ns");
  calc(13, 'm', "Calculate the period and the wavelength of a 50 MHz radio wave.",
    [["T = 1 / f", "1 f", "1 50", "1 divided", "#0.02", "#20"], ["T = 0.02 µs (20 ns)", "#0.02", "#20", "#2"], ["λ = c / f", "c f", "3 10 8", "3 x 10"], ["c = 3 × 10^8 m/s", "3 10 8", "3 x 10", "300000000"], ["λ = 6 m", "#6"]],
    "T = 1 / f = 1 / (50 x 10^6) = 0.02 µs = 20 ns. λ = c / f = (3 x 10^8) / (50 x 10^6) = 6 m");
  pick(9, 'm', "A village in the mountains has no cables and needs communication quickly and at a low initial cost. What is the best choice? Why?",
    ["Optical fiber", "Wireless communication", "No communication system"], 1,
    [["Wired communication is difficult there", "difficult", "impossible", "hard"], ["Quick deployment / low initial cost", "deploy", "fast", "cheap", "low cost", "gives quick"]],
    "Wireless is best because wired communication is difficult there, and wireless gives quick deployment at a low initial cost.");
  pick(9, 'm', "A data center needs the highest data rate and the lowest interference between two fixed buildings. Which choice is the best? Why?",
    ["Optical fiber", "A wireless link", "A broadcast radio"], 0,
    [["Wired links such as fiber have higher data rates", "higher data", "higher rate", "faster"], ["Wireless is more susceptible to interference, noise or eavesdropping", "noise", "eavesdrop", "susceptible", "wireless has more interference", "more interference", "affected"]],
    "Optical fiber has higher data rates, and wireless is more susceptible to interference, noise and eavesdropping.");
  pick(15, 'm', "A rescue team must find people in the dark. Which EM waves are the best? Why?",
    ["Ultraviolet light", "Infrared waves", "Red visible light"], 1,
    [["Infrared waves are heat waves", "heat", "warm"], ["They are used for finding people in the dark", "find", "dark", "body"]],
    "Infrared waves are heat waves, so they can be used for finding people in the dark by the heat of the body.");
});
