/* Week 4: Physical Layer, Addressing and Encapsulation (PDF pages 1-23). */
EC.lecture(4, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A: choose the correct option ---------- */
  // Big picture (p5-6)
  mcq(5, 'e', "Week 4 focuses on three pillars: physical transmission, addressing and…",
    ["encapsulation", "topology", "routing protocols", "wireless media"],
    "Slide 5.");
  mcq(6, 'e', "In the 5 steps of data traversing the network, what is step 1?",
    ["The user generates meaningful data", "Protocols add control headers", "The Physical layer serializes bits", "The receiver reverses the process"],
    "Slide 6: e.g. a person types HELLO NETWORKS! on a laptop.");
  mcq(6, 'm', "In the 5 steps of data traversing the network, which step comes right after “protocols add control headers”?",
    ["The Physical layer serializes the bits into signals", "The user generates meaningful data on the laptop", "The receiver reverses the process and rebuilds the message", "The signals travel across copper, fiber or wireless media"],
    "Slide 6: 1 data → 2 headers → 3 serialize bits → 4 traverse media → 5 receiver reverses.");
  mcq(6, 'm', "In step 2 of the big picture, which three headers are added to the data?",
    ["Transport port, Network IP, Data Link MAC", "URL, domain name and application port", "Sender, receiver and transmission medium", "Bandwidth, throughput and delay values"],
    "Slide 6.");
  mcq(6, 'm', "What does the receiver do in step 5 of the big picture?",
    ["Reverses the process and rebuilds the original message", "Adds control headers (port, IP, MAC) to the data", "Converts the bits into radio waves for the antenna", "Chooses the best route across the intermediate networks"],
    "Slide 6.");
  // Physical layer duties (p7)
  mcq(7, 'e', "The Physical layer sends raw, unstructured ___ as physical signals over a medium.",
    ["bits", "frames", "packets", "segments"],
    "Slide 7.");
  mcq(7, 'e', "Which Physical layer duty describes how 0s and 1s become signals, such as +5 V / 0 V or light on/off?",
    ["Bit representation", "Transmission rate", "Bit synchronization", "Mechanical and electrical"],
    "Slide 7.");
  mcq(7, 'm', "Which Physical layer duty defines the bit duration and the speed in bps?",
    ["Transmission rate", "Bit representation", "Bit synchronization", "Encapsulation"],
    "Slide 7.");
  mcq(7, 'm', "Which Physical layer duty syncs the sender's and receiver's clocks so the receiver knows where each bit starts and ends?",
    ["Bit synchronization", "Transmission rate", "Bit representation", "Error detection"],
    "Slide 7.");
  mcq(7, 'm', "Connectors, pin layout, voltages and cable type are defined by which Physical layer duty?",
    ["Mechanical and electrical", "Bit representation", "Transmission rate", "Addressing"],
    "Slide 7.");
  mcq(7, 'h', "According to the key rule for Layer 1, what does the Physical layer know about?",
    ["Only raw bits as signals; it has zero knowledge of IP, MAC or web pages", "IP addresses, so that it can route packets between networks", "MAC addresses, so that it can switch frames to the right port", "Port numbers, so that it can deliver data to the right application"],
    "Slide 7.");
  mcq(7, 'h', "A link sends bits at 1 Gbps. What is the duration of one bit?",
    ["1 nanosecond", "1 microsecond", "1 millisecond", "1 second"],
    "Bit duration = 1 / bit rate = 1 / 10⁹ s = 1 ns (slide 7: the transmission rate defines bit duration).");
  mcq(7, 'h', "A link sends bits at 100 Mbps. What is the duration of one bit?",
    ["10 ns", "1 ns", "100 ns", "0.1 ns"],
    "Bit duration = 1 / (100 × 10⁶) s = 10⁻⁸ s = 10 ns.");
  // Data vs bits vs signals (p8-10)
  mcq(8, 'e', "In “Data vs. Bits vs. Signals”, which one is the meaning?",
    ["Data", "Bits", "Signals", "Frames"],
    "Slide 8: data is the meaning, bits are the digital language, signals are the physical carrier.");
  mcq(8, 'e', "Bits are described on the slides as the…",
    ["digital language", "meaning", "physical carrier", "transmission medium"],
    "Slide 8.");
  mcq(8, 'm', "Voltage, light and radio are examples of which stage of information transmission?",
    ["Physical signals", "User data", "Digital bits", "Protocol headers"],
    "Slide 8.");
  mcq(9, 'm', "A signal is defined as an electrical or electromagnetic quantity that…",
    ["varies over time to carry and represent information", "never changes over time once it leaves the sender", "stores data permanently on the receiving device", "decides the route a packet takes across networks"],
    "Slide 9.");
  mcq(9, 'e', "Analog signals are represented by…",
    ["sine waves", "square pulses", "binary digits", "MAC addresses"],
    "Slide 9: varying amplitude, frequency and phase.");
  mcq(9, 'm', "Which three properties of a sine wave can vary in an analog signal?",
    ["Amplitude, frequency and phase", "Voltage, current and resistance only", "Bit rate, throughput and delay", "Header, payload and trailer"],
    "Slide 9.");
  mcq(9, 'm', "Which of these is an example of an analog signal?",
    ["Traditional FM/AM radio", "An Ethernet cable carrying +5 V and 0 V", "A computer bus", "A binary file"],
    "Slide 9: natural human voice, FM/AM radio, legacy telephone systems.");
  mcq(10, 'e', "Digital signals are represented as…",
    ["rectangular square pulses", "smooth, continuous sine waves", "light rays bouncing in a core", "continuous curves of amplitude"],
    "Slide 10.");
  mcq(10, 'm', "What is the main advantage of digital signals given on the slides?",
    ["They are highly resistant to noise", "They vary smoothly over time", "They travel infinitely without loss", "They need no synchronization"],
    "Slide 10.");
  mcq(10, 'm', "In the Ethernet example on the slides, a +5 V level represents…",
    ["a bit 1", "a bit 0", "a frame start", "a collision"],
    "Slide 10: +5 V = 1, 0 V = 0.");
  // Hardware (p11-12)
  mcq(11, 'm', "Why are the wire pairs in a Cat6 cable twisted?",
    ["To cancel electromagnetic interference (EMI)", "To carry light pulses", "To increase the cable's length limit to 10 km", "To store the MAC address"],
    "Slide 11: 4 twisted pairs (8 conductors) cancel EMI.");
  mcq(11, 'e', "What is the maximum run of a Cat6 twisted-pair cable at 1 Gbps?",
    ["100 meters", "10 meters", "1 kilometer", "40 kilometers"],
    "Slide 11: max run 100 m at 1 Gbps.");
  mcq(11, 'm', "The RJ-45 modular connector has…",
    ["8 gold-plated contact pins crimped onto copper wires", "a glass core surrounded by lower-index cladding", "a single central copper pin inside a metal shield", "a laser transmitter and a photodiode receiver"],
    "Slide 11.");
  mcq(12, 'e', "Which cable carries laser or LED light pulses through a glass core?",
    ["Fiber optic cable", "Cat6 twisted pair", "RJ-45 patch cord", "Coaxial cable"],
    "Slide 12.");
  mcq(12, 'm', "Which is an advantage of fiber optic cable given in Week 4?",
    ["Complete immunity to electrical noise", "It uses 8 copper conductors in 4 pairs", "It is limited to 100 meters per cable run", "It carries electrical voltage instead of light"],
    "Slide 12: complete immunity to electrical noise; runs 10 to 40+ km.");
  mcq(12, 'm', "Which device contains the transceiver that converts the motherboard's parallel bits into serial signals on the cable?",
    ["Network Interface Card (NIC)", "Hub (multiport repeater)", "RJ-45 modular connector", "Terminator at the cable end"],
    "Slide 12.");
  mcq(12, 'm', "Where is the hardware-burned MAC address stored?",
    ["On the Network Interface Card (NIC)", "In the router's routing table of networks", "In the RJ-45 connector's gold pins", "In the fiber cladding of the cable"],
    "Slide 12.");
  mcq(11, 'h', "Two buildings are 250 m apart. Using Cat6 at 1 Gbps, what is the minimum number of separate cable runs needed (with a switch or repeater between runs)?",
    ["3", "2", "1", "25"],
    "Each run is at most 100 m: 250 ÷ 100 = 2.5, so at least 3 runs (slide 11, the 100-meter rule).");
  // Metrics (p13)
  mcq(13, 'e', "The number of bits transmitted per second is the…",
    ["bit rate", "bandwidth", "jitter", "attenuation"],
    "Slide 13.");
  mcq(13, 'm', "Which metric describes the maximum (theoretical) data-carrying capacity of a link?",
    ["Bandwidth", "Throughput", "Bit rate", "Latency"],
    "Slide 13: e.g. a 1 Gbps link.");
  mcq(13, 'm', "Which metric is the actual speed of successfully delivered data in practice?",
    ["Throughput", "Bandwidth", "Bit duration", "Frequency"],
    "Slide 13.");
  mcq(13, 'm', "Why is throughput usually lower than bandwidth?",
    ["Header overhead, retransmissions, congestion and processing latency", "Throughput is measured in bytes while bandwidth is measured in bits", "Bandwidth only counts wireless links, while throughput counts cables", "Throughput ignores dropped packets, so it is always reported lower"],
    "Slide 13.");
  mcq(13, 'h', "A 1 Gbps link delivers 750 Mbps of useful data in practice. Which statement is correct?",
    ["Bandwidth is 1 Gbps and throughput is 750 Mbps (75%)", "Bandwidth is 750 Mbps and throughput is 1 Gbps (133%)", "Throughput is 1.75 Gbps, the sum of both figures", "Bandwidth and throughput are both 750 Mbps in practice"],
    "Slide 13: bandwidth = theoretical capacity, throughput = actual delivered rate; 750 / 1000 = 75%.");
  mcq(13, 'h', "At a throughput of 100 Mbps, how long does it take to transfer a 500-megabit file?",
    ["5 seconds", "50 seconds", "0.5 seconds", "500 seconds"],
    "time = data ÷ rate = 500 Mb ÷ 100 Mb/s = 5 s.");
  mcq(13, 'h', "A file of 100 megabytes (MB) is sent over a link with 800 Mbps throughput. How long does it take?",
    ["1 second", "8 seconds", "0.125 seconds", "12.5 seconds"],
    "100 MB × 8 = 800 megabits; 800 Mb ÷ 800 Mb/s = 1 s.");
  // Impairments (p14)
  mcq(14, 'e', "The loss of signal energy over distance is called…",
    ["attenuation", "distortion", "crosstalk", "jitter"],
    "Slide 14.");
  mcq(14, 'm', "Attenuation is fixed by using…",
    ["amplifiers or repeaters", "terminators at both ends", "routers and switches only", "encryption of the signal"],
    "Slide 14.");
  mcq(14, 'm', "When different frequency components travel at different speeds and change the waveform's shape, this is…",
    ["distortion", "attenuation", "noise", "throughput"],
    "Slide 14.");
  mcq(14, 'm', "Unwanted external electrical energy (EMI) that corrupts bits is…",
    ["noise and crosstalk", "attenuation over distance", "distortion", "bit synchronization"],
    "Slide 14.");
  // Hub vs switch (p15)
  mcq(15, 'e', "A hub operates at which OSI layer?",
    ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"],
    "Slide 15: a multiport repeater.");
  mcq(15, 'm', "What does a hub do with the bits it receives on one port?",
    ["Repeats (floods) them out of all other ports", "Sends them only to the destination port", "Routes them using the destination IP addresses", "Drops them unless the sender holds the token"],
    "Slide 15.");
  mcq(15, 'm', "Why is a hub described as insecure?",
    ["Every device receives everyone else's traffic", "It encrypts all traffic with a shared password", "It needs a password that users often forget", "It uses fiber optic cables that can be tapped"],
    "Slide 15.");
  mcq(15, 'm', "Devices on a hub share a single collision domain, so they work in…",
    ["half-duplex", "full-duplex", "simplex", "microsegmented mode"],
    "Slide 15: only one device can transmit at a time.");
  mcq(15, 'm', "A Layer 2 switch decides where to forward a frame by reading the…",
    ["destination MAC address", "destination IP address", "port number", "URL"],
    "Slide 15.");
  mcq(15, 'h', "What is the result of microsegmentation on a switch?",
    ["No collisions and full-duplex communication", "One shared collision domain for all ports", "Traffic is flooded out of every other port", "Half-duplex links where devices take turns"],
    "Slide 15.");
  mcq(15, 'h', "PC1 on a 24-port hub sends a frame to PC2. Which devices receive the frame?",
    ["Every other device connected to the hub", "Only PC2, the destination of the frame", "Only the router connected to the hub", "No device until a token arrives at PC1"],
    "Slide 15: a hub floods bits out of all other ports.");
  mcq(15, 'h', "The same frame is sent by PC1 to PC2 through a Layer 2 switch whose MAC table already knows PC2. Which device receives it?",
    ["Only PC2", "Every connected device", "Every device except PC2", "Only the hub"],
    "Slide 15: the switch forwards selectively to only the target port.");
  // Addressing (p16-17)
  mcq(16, 'e', "Transmitting signals is not enough: the network must also know the source and the…",
    ["destination", "bandwidth", "topology", "cable type"],
    "Slide 16: who created the message, and where it should go.");
  mcq(16, 'm', "In the house analogy, the port number is…",
    ["the specific person living in the house", "your immediate front door of the house", "your city, street and house address", "the postal truck that carries the letter"],
    "Slide 16.");
  mcq(16, 'm', "In the house analogy, the MAC address is…",
    ["your immediate house door", "your city, street and house address", "the specific person living in the house", "the post office"],
    "Slide 16.");
  mcq(16, 'm', "In the house analogy, the IP address is…",
    ["your city, street and house address", "your immediate house door", "the specific person in the house", "the envelope"],
    "Slide 16.");
  mcq(17, 'm', "Which address solves the process-scope problem: which program on the computer (browser, Zoom or Spotify) gets the data?",
    ["Transport port number", "Physical MAC address", "Logical IP address", "Domain name"],
    "Slide 17.");
  mcq(17, 'm', "Which address lets two devices on the same Ethernet cable or switch identify each other (local scope)?",
    ["Physical MAC address", "Logical IP address", "Transport port number", "URL"],
    "Slide 17.");
  mcq(17, 'm', "Which address lets routers find a path across many intermediate networks to a server on another continent (global scope)?",
    ["Logical IP address", "Physical MAC address", "Transport port number", "Bit rate"],
    "Slide 17.");
  mcq(21, 'm', "Which address is a 48-bit flat, burned-in address used for local hop-by-hop delivery?",
    ["MAC address", "IPv4 address", "Port number", "URL"],
    "Slide 21.");
  mcq(21, 'm', "Which address is a 32-bit hierarchical address used for global end-to-end routing?",
    ["IPv4 address", "MAC address", "Port number", "FCS"],
    "Slide 21.");
  mcq(21, 'e', "A port number is a ___ integer used for application process isolation.",
    ["16-bit", "32-bit", "48-bit", "128-bit"],
    "Slide 21.");
  mcq(4, 'h', "As a packet crosses several routers from source to destination, which statement is correct?",
    ["The MAC addresses change hop by hop, while the IP addresses stay the same end to end", "The IP addresses change at every router, while the MAC addresses stay the same", "Both MAC and IP addresses stay the same", "Both MAC and IP addresses change at every switch"],
    "Slides 4 and 21: MAC is for local hop-by-hop delivery; IP is for global end-to-end routing.");
  mcq(20, 'h', "A laptop in the TIU lab (192.168.1.50) opens a page on a Google server in Frankfurt (142.250.190.46). What is the destination IP address in the packet header?",
    ["142.250.190.46", "192.168.1.50", "The MAC address of the Google server", "The IP address of the lab switch"],
    "Slide 20: the IP address identifies the final global destination.");
  mcq(20, 'h', "In the same TIU-to-Google example, what is the source IP address in the packet header?",
    ["192.168.1.50", "142.250.190.46", "00:1A:2B:3C:4D:5E", "Port 443"],
    "The source IP is the laptop that created the packet (slide 20).");
  // Encapsulation (p18-19)
  mcq(18, 'e', "Adding protocol control information (headers and trailers) to data as it moves down the protocol stack is called…",
    ["encapsulation", "decapsulation", "attenuation", "synchronization"],
    "Slide 18: the packaging concept.");
  mcq(18, 'm', "Which layer adds port numbers and sequence tracking during encapsulation?",
    ["Layer 4 (Transport)", "Layer 3 (Network)", "Layer 2 (Data Link)", "Layer 1 (Physical)"],
    "Slide 18.");
  mcq(18, 'm', "Which layer adds IP addresses for path routing?",
    ["Layer 3 (Network)", "Layer 4 (Transport)", "Layer 2 (Data Link)", "Layer 7 (Application)"],
    "Slide 18.");
  mcq(18, 'm', "Which layer adds MAC addresses and an FCS error-checking trailer?",
    ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 1 (Physical)"],
    "Slide 18.");
  mcq(18, 'm', "Decapsulation at the destination host means…",
    ["stripping headers layer by layer until the application receives pure data", "adding headers and trailers to the data as it moves down the stack", "converting the bits into light pulses for the fiber cable", "choosing the best path for packets across many networks"],
    "Slide 18: reversibility.");
  mcq(19, 'm', "What is the correct encapsulation order of PDUs going down the stack?",
    ["Data → Segment → Packet → Frame → Bits", "Bits → Frame → Packet → Segment → Data", "Data → Packet → Segment → Frame → Bits", "Segment → Data → Frame → Packet → Bits"],
    "Slides 19 and 21.");
  mcq(19, 'h', "Which PDU is described as [IP Header | Source/Dest IP] + Segment?",
    ["Packet", "Frame", "Segment", "Bits"],
    "Slide 19.");
  mcq(19, 'h', "Which part of a frame is a trailer rather than a header?",
    ["FCS", "Destination MAC", "Source MAC", "IP header"],
    "Slide 19: [Ethernet Header | MACs] + Packet + [FCS Trailer].");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(5, 'e', "Week 4's three pillars are physical transmission, [[addressing]] and encapsulation.", "Slide 5.");
  fill(7, 'm', "The Physical layer's four duties are bit representation, transmission rate, bit [[synchronization|synchronisation|sync]] and mechanical & electrical.", "Slide 7.");
  fill(7, 'm', "Layer 1 has [[zero|no]] knowledge of IP, MAC or web pages; it knows only raw bits as signals.", "Slide 7.");
  fill(8, 'm', "Data is the meaning, bits are the digital language, and signals are the physical [[carrier]].", "Slide 8.");
  fill(9, 'm', "An [[analog]] signal varies smoothly and continuously over time and is represented by sine waves.", "Slide 9.");
  fill(10, 'm', "A [[digital]] signal changes abruptly between discrete voltage levels.", "Slide 10.");
  fill(10, 'h', "Digital signals are represented as rectangular [[square]] pulses and are highly resistant to [[noise]].", "Slide 10.");
  fill(11, 'm', "A Cat6 cable cancels [[EMI|electromagnetic interference]] by twisting its wire pairs.", "Slide 11.");
  fill(11, 'e', "A Cat6 cable has a maximum run of [[100|one hundred]] meters at 1 Gbps.", "Slide 11.");
  fill(11, 'm', "Cat6 copper cables use the [[RJ-45|rj45|rj 45]] modular connector.", "Slide 11.");
  fill(12, 'm', "The [[NIC|network interface card]] contains the transceiver and the hardware-burned MAC address.", "Slide 12.");
  fill(12, 'h', "A NIC converts the motherboard's [[parallel]] bits into [[serial]] signals on the cable.", "Slide 12.");
  fill(13, 'm', "[[Bandwidth]] is the maximum theoretical data-carrying capacity of a link.", "Slide 13.");
  fill(13, 'm', "[[Throughput]] is the actual speed of successfully delivered data in practice.", "Slide 13.");
  fill(13, 'e', "Bit rate is measured in bits per second, written [[bps|b/s]].", "Slide 13.");
  fill(14, 'm', "[[Attenuation]] is the loss of signal energy over distance.", "Slide 14.");
  fill(14, 'm', "[[Distortion]] happens when different frequency components travel at different speeds.", "Slide 14.");
  fill(15, 'm', "A hub is a multiport [[repeater]] that operates at Layer 1.", "Slide 15.");
  fill(15, 'm', "A switch reads the destination [[MAC|mac address|media access control]] address in the frame.", "Slide 15.");
  fill(15, 'h', "A switch uses [[microsegmentation|micro segmentation|micro-segmentation]] so there are no collisions and links run full-duplex.", "Slide 15.");
  fill(16, 'm', "In the house analogy, the [[port|port number]] is the specific person living in the house.", "Slide 16.");
  fill(16, 'm', "In the house analogy, the [[IP|ip address]] is your city, street and house address.", "Slide 16.");
  fill(18, 'e', "[[Encapsulation]] is the process of adding headers and trailers to data as it moves down the stack.", "Slide 18.");
  fill(18, 'm', "When the destination strips headers layer by layer until the application receives pure data, this is [[decapsulation]].", "Slide 18.");
  fill(18, 'h', "Layer 2 adds MAC addresses and an [[FCS|frame check sequence]] error-checking trailer.", "Slide 18.");
  fill(21, 'h', "A MAC address is used for local [[hop-by-hop|hop by hop]] delivery, while an IP address is used for global [[end-to-end|end to end]] routing.", "Slide 21.");
  fill(21, 'm', "The PDUs going down the stack are Data, Segment, [[Packet]], [[Frame]] and Bits.", "Slide 21.");

  /* ---------- Section C: true / false ---------- */
  tf(7, 'e', "The Physical layer understands IP addresses and web pages.", false, "False. Layer 1 has zero knowledge of IP, MAC or web pages.");
  tf(7, 'm', "Bit synchronization lets the receiver know where each bit starts and ends.", true, "True. Slide 7.");
  tf(9, 'm', "Natural human voice is an example of an analog signal.", true, "True. Slide 9.");
  tf(10, 'm', "Analog signals are more resistant to noise than digital signals.", false, "False. Digital signals are highly resistant to noise.");
  tf(11, 'e', "A Cat6 cable can run 1 km at 1 Gbps without a repeater.", false, "False. The maximum run is 100 meters.");
  tf(12, 'm', "Fiber optic cable is completely immune to electrical noise.", true, "True. Slide 12.");
  tf(13, 'm', "Throughput is usually higher than bandwidth.", false, "False. Throughput is lower because of overhead, retransmissions, congestion and latency.");
  tf(13, 'h', "Protocol header overhead is one reason throughput is lower than bandwidth.", true, "True. Slide 13.");
  tf(14, 'm', "Attenuation can be fixed with amplifiers or repeaters.", true, "True. Slide 14.");
  tf(15, 'm', "A hub forwards each frame only to the destination port.", false, "False. A hub floods bits out of all other ports; a switch forwards selectively.");
  tf(15, 'm', "A Layer 2 switch reads the destination MAC address in each frame.", true, "True. Slide 15.");
  tf(15, 'h', "Devices connected to a hub can all transmit at the same time without collisions.", false, "False. A hub is one shared collision domain; only one device transmits at a time.");
  tf(17, 'm', "The port number decides which program on the computer receives the data.", true, "True. Process scope (slide 17).");
  tf(18, 'm', "During encapsulation, Layer 3 adds port numbers.", false, "False. Layer 4 adds port numbers; Layer 3 adds IP addresses.");
  tf(20, 'h', "When a TIU lab laptop opens a Google page in Frankfurt, the destination IP in the packet is the Google server's IP.", true, "True. The IP identifies the final global destination.");
  tf(21, 'h', "MAC addresses stay the same end to end, while IP addresses change at every hop.", false, "False. It is the opposite: MAC changes hop by hop, IP stays constant end to end.");

  /* ---------- In the instructor's style (Types 1-3: long technical stems, definitional blanks, swapped-fact statements) ---------- */
  mcq(13, 'h', "A student's 1 Gbps link delivers only 650 Mbps when downloading, because of header overhead and retransmissions. The 650 Mbps figure is the link's…",
    ["throughput", "bandwidth", "maximum bit rate", "attenuation"],
    "Slide 13: throughput is the actual delivered rate; bandwidth (1 Gbps) is the theoretical capacity.");
  mcq(14, 'h', "A technician runs a Cat6 cable 160 m between two switches and sees many corrupted bits. Which impairment, caused by losing signal energy over distance, is most likely?",
    ["Attenuation", "Distortion", "Thermal noise", "Jitter"],
    "Slides 11 and 14: the run exceeds the 100 m rule, so the signal is too weak.");
  mcq(18, 'h', "During encapsulation, which layer is the only one that adds a trailer as well as a header?",
    ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"],
    "Slides 18-19: Layer 2 adds the MAC header and the FCS trailer.");
  mcq(7, 'h', "A sender's clock runs slightly faster than the receiver's, so the receiver reads bits at the wrong moments. Which Physical layer duty has failed?",
    ["Bit synchronization", "Bit representation", "Mechanical and electrical", "Transmission rate"],
    "Slide 7: bit synchronization keeps the clocks aligned so the receiver knows where each bit starts and ends.");
  mcq(16, 'm', "In the house analogy, a letter reaches the right street address but is handed to the wrong person living in the house. Which address was wrong?",
    ["The port number", "The IP address", "The MAC address", "The FCS"],
    "Slide 16: the port is the specific person living in the house.");
  fill(14, 'm', "The phenomenon of signal strength loss as an electromagnetic wave travels over distance through a physical medium is known as [[attenuation]].", "Slide 14 (the instructor's sample blank).");
  fill(17, 'm', "The 16-bit identifier that tells the destination computer which program should receive the data is the [[port number|port]].", "Slides 17 and 21.");
  fill(15, 'h', "On a hub, all devices share one collision [[domain]], so only one device can transmit at a time.", "Slide 15.");
  fill(7, 'm', "Defining connectors, pin layout, voltages and cable type is the Physical layer's [[mechanical and electrical|mechanical & electrical|mechanical]] duty.", "Slide 7.");
  tf(21, 'h', "In a global TCP/IP network, as a packet traverses intermediate routers from source to destination, its logical IP addresses change at every router hop, while its physical addresses remain constant end-to-end.", false, "False. It is the opposite: the IP addresses stay constant end to end, while the MAC (physical) addresses change at every hop. (The instructor's sample statement.)");
  tf(15, 'h', "A hub is an intelligent Layer 2 device that reads MAC addresses, while a switch is a dumb Layer 1 repeater.", false, "False. Swapped: the hub is the dumb Layer 1 repeater; the switch is the intelligent Layer 2 device.");
  tf(13, 'h', "Bandwidth is the actual rate of successfully delivered data, while throughput is the theoretical maximum capacity of the link.", false, "False. Swapped: bandwidth is the theoretical capacity; throughput is the actual delivered rate.");
  tf(18, 'm', "During decapsulation, the receiver strips the headers layer by layer until the application receives the pure data.", true, "True. Slide 18.");

  exp([9, 10], 'm', 5, "Categorize transmission signals into their two types. Describe each type with its shape, behaviour and an example, state the main advantage of digital signals, and draw a labeled waveform of each.",
    [["A signal is an electrical or electromagnetic quantity that varies over time to carry information; there are two types", "electrical", "electromagnetic", "varies over time"],
     ["Analog: varies smoothly and continuously; sine waves with amplitude, frequency and phase", "continuous", "smooth", "sine"],
     ["Analog examples: human voice, AM/FM radio, legacy telephone", "voice", "radio", "telephone"],
     ["Digital: changes abruptly between discrete levels; square pulses (+5 V = 1, 0 V = 0); highly resistant to noise; e.g. Ethernet", "discrete", "square", "noise", "ethernet"],
     ["Labeled drawing: a smooth sine wave and a square wave with +5 V / 0 V levels","labeled drawing","labelled drawing","drawing","diagram"]],
    "A signal is an electrical or electromagnetic quantity that varies over time to carry and represent information, and there are two types. An analog signal varies smoothly and continuously over time and is drawn as a sine wave with varying amplitude, frequency and phase; examples are the human voice, AM/FM radio and legacy telephone systems. A digital signal changes abruptly between discrete voltage levels and is drawn as square pulses, for example +5 V for 1 and 0 V for 0 on Ethernet; its main advantage is that it is highly resistant to noise. Labeled drawing: a smooth sine wave for analog and a square wave alternating between +5 V and 0 V for digital.",
    { sec: 'D', figure: 'signals' });
  exp([15], 'h', 5, "Categorize a hub and a switch by OSI layer and intelligence. Explain how each forwards traffic and its effect on collisions, duplex mode and security, and draw a labeled diagram showing how each delivers a frame from PC A to PC B.",
    [["Hub: Layer 1 multiport repeater, a “dumb” device", "layer 1", "repeater", "dumb"],
     ["Hub floods bits out of all other ports: shared collision domain, half-duplex, insecure", "flood", "all other ports", "collision", "insecure"],
     ["Switch: Layer 2 intelligent filter that reads the destination MAC address", "layer 2", "mac", "intelligent"],
     ["Switch forwards only to the target port; microsegmentation means no collisions and full-duplex", "target port", "microsegment", "full duplex"],
     ["Labeled drawing: the hub sending A’s frame to every PC, the switch sending it only to PC B","labeled drawing","labelled drawing","drawing","diagram"]],
    "A hub is a dumb Layer 1 multiport repeater: it receives bits on one port and floods them out of all other ports. All devices share one collision domain, so only one can transmit at a time (half-duplex), and it is insecure because every device receives everyone else's traffic. A switch is an intelligent Layer 2 filter: it reads the destination MAC address in each frame and forwards it only to the target port. Microsegmentation means there are no collisions and links run full-duplex. Labeled drawing: on the hub side, the frame from PC A goes out to every PC; on the switch side, it goes only to PC B.",
    { sec: 'D', figure: 'hubSwitch' });

  /* ---------- Section D: categorization & illustration (Type 4) · Section E: explanation & structural mapping (Type 6) ---------- */
  exp([16, 17, 21], 'h', 5, "Differentiate between physical (MAC) addressing, logical (IP) addressing and port numbers, using the house analogy.", [["MAC: 48-bit flat burned-in address on the NIC; local scope (same switch/subnet); hop-by-hop delivery", "48", "burn", "local", "hop"],
     ["IP: 32-bit hierarchical logical address; global scope; routers use it for end-to-end routing", "32", "hierarch", "global", "rout", "end to end"],
     ["Port: 16-bit number identifying the application process (browser, Zoom, Spotify)", "16", "process", "application", "browser", "program"],
     ["Analogy: IP = city/street/house address, MAC = the house door, port = the person in the house", "city", "street", "door", "person"],
     ["MAC changes at each hop while IP stays constant end to end", "change", "constant", "same"]], "A MAC address is a 48-bit flat, burned-in physical address on the NIC. It solves the local scope: how two devices on the same cable or switch identify each other, and it is used for hop-by-hop delivery, so it changes at every hop. An IP address is a 32-bit (IPv4) hierarchical logical address. It solves the global scope: routers use it to find a path across many networks, and it stays constant end to end. A port number is a 16-bit integer that solves the process scope: which program on the computer (browser, Zoom, Spotify) receives the data. In the house analogy, the IP address is your city, street and house address, the MAC address is your immediate house door, and the port is the specific person living in the house.", { sec: 'E', need: 4 });
  exp([18, 19], 'm', 5, "Illustrate the data encapsulation and decapsulation pipeline: name the PDU and what is added at each layer, and draw the pipeline at the sender and the receiver.", [["Layer 7: data (HTTP / file / message)", "data", "http", "message"],
     ["Layer 4: segment = TCP header with ports (80/443) and sequence tracking + data", "segment", "port", "sequence"],
     ["Layer 3: packet = IP header with source/destination IP + segment", "packet", "ip"],
     ["Layer 2: frame = Ethernet header with MACs + packet + FCS trailer", "frame", "mac", "fcs", "trailer"],
     ["Layer 1: bits sent as signals; the receiver decapsulates by stripping headers layer by layer", "bits", "signal", "decapsul", "strip"],
     ["Labeled drawing: sender stack adding headers going down, receiver stack stripping them going up","labeled drawing","labelled drawing","drawing","diagram"]], "At the sender, Layer 7 produces the data (an HTTP request, file or message). Layer 4 adds a TCP header with port numbers (e.g. 80/443) and sequence tracking, creating a segment. Layer 3 adds an IP header with source and destination IP addresses, creating a packet. Layer 2 adds an Ethernet header with source and destination MAC addresses and an FCS error-checking trailer, creating a frame. Layer 1 sends the frame as bits encoded as physical signals. At the destination, decapsulation reverses the process: each layer strips its header until the application receives the pure data. Labeled drawing: the sender stack (Data, Segment, Packet, Frame, Bits) with an arrow down marked “add headers”, the receiver stack with an arrow up marked “strip headers”, joined by the medium.", { sec: 'E', figure: 'encapsulation' });
  exp([7, 8], 'm', 5, "Explain the role of the Physical layer and its four duties, and distinguish between data, bits and signals.", [["Physical layer sends raw, unstructured bits as signals over the medium; no knowledge of IP/MAC", "raw", "bits", "signal", "zero knowledge"],
     ["Duties: bit representation and transmission rate (bit duration, bps)", "represent", "rate", "bps", "duration"],
     ["Duties: bit synchronization and mechanical & electrical specifications (connectors, pins, voltages, cable)", "synchron", "mechanical", "connector", "pin", "voltage"],
     ["Data = meaning, bits = digital language, signals = physical carrier (voltage, light, radio)", "meaning", "language", "carrier"]], "The Physical layer sends raw, unstructured bits of data as physical signals over a medium; it has zero knowledge of IP, MAC or web pages. Its four duties are bit representation (how 0s and 1s become signals such as +5 V/0 V or light on/off), transmission rate (bit duration and speed in bps), bit synchronization (sender and receiver clocks agree where each bit starts and ends) and mechanical and electrical specifications (connectors, pin layout, voltages and cable type). Data is the meaning, bits are the digital language, and signals are the physical carrier (voltage, light or radio) that travels through the medium.", { sec: 'E' });
  exp([13, 14], 'h', 5, "Explain the three key performance metrics of the Physical layer and the three transmission impairments that degrade signals.", [["Bit rate: number of bits per second (bps, Mbps, Gbps): the actual transmission speed", "bits per second", "bps"],
     ["Bandwidth: theoretical maximum capacity of a link (e.g. 1 Gbps)", "theoretical", "maximum", "capacity"],
     ["Throughput: actual delivered rate; lower than bandwidth due to overhead, retransmissions, congestion, latency", "actual", "overhead", "congestion"],
     ["Attenuation: energy loss over distance, fixed with amplifiers/repeaters", "attenuat", "distance", "repeater", "amplifier"],
     ["Distortion (frequencies at different speeds change the waveform) and noise/crosstalk (EMI corrupts bits)", "distort", "noise", "crosstalk", "emi"]], "Bit rate is the number of bits transmitted per second (bps, kbps, Mbps, Gbps). Bandwidth is the theoretical maximum data-carrying capacity of a link, such as 1 Gbps. Throughput is the actual speed of successfully delivered data, which is lower than bandwidth because of protocol header overhead, retransmissions, congestion and processing latency. Signals degrade in three ways: attenuation is the loss of signal energy over distance and is fixed with amplifiers or repeaters; distortion happens when different frequency components travel at different speeds and change the waveform; and noise and crosstalk are unwanted external electrical energy (EMI) that corrupts bits.", { sec: 'E', need: 4 });
});
