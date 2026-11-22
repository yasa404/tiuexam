/* Week 2: Introduction to Data Communications and Networking (PDF pages 1-44). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A: choose the correct option ---------- */
  // What is data communication (p6-7)
  mcq(7, 'e', "Data communications is the exchange of data between two devices via some form of…",
    ["transmission medium", "operating system", "programming language", "storage device"],
    "Slide 7: “…via some form of transmission medium (like a copper wire, fiber optic, or wireless air).”");
  mcq(7, 'e', "Which of these is given on the slides as an example of a transmission medium?",
    ["Fiber optic", "A web browser", "A protocol", "A message"],
    "Slide 7: copper wire, fiber optic or wireless air.");
  mcq(7, 'm', "According to Week 2, data can communicate only if the devices are part of a communication system made of…",
    ["hardware devices and software programs", "senders and receivers with no software", "cables and connectors between two devices", "users and network administrators only"],
    "Slide 7: communication system = hardware device + software program.");
  mcq(6, 'e', "The basic idea behind every data communication example (people, devices, systems) is that…",
    ["information moves from one point to another", "data is stored safely in one central place", "devices share the same screen and keyboard", "users type messages on computer keyboards"],
    "Slide 6.");
  mcq(6, 'm', "In the life scenario, banking, hospitals and universities are given as examples of data communication between…",
    ["systems", "people", "devices", "protocols"],
    "Slide 6: People (speech, texts, video calls) · Devices (phones, computers, sensors) · Systems (banking, hospitals, universities).");
  mcq(6, 'm', "Phones, computers and sensors are listed in the life scenario as examples of communicating…",
    ["devices", "systems", "people", "media"],
    "Slide 6.");
  // Five components (p8-9)
  mcq(9, 'e', "Which component of data communication is the information or data to be communicated (text, image, audio)?",
    ["Message", "Sender", "Medium", "Protocol"],
    "Slide 9: 1. Message.");
  mcq(9, 'e', "The device that sends the data, such as a PC, server or camera, is the…",
    ["sender", "receiver", "medium", "protocol"],
    "Slide 9: 2. Sender.");
  mcq(9, 'e', "The physical path over which data travels (cables, fiber, radio waves) is the…",
    ["medium", "message", "protocol", "receiver"],
    "Slide 9: 4. Medium.");
  mcq(9, 'e', "Which component is the set of rules governing data communication?",
    ["Protocol", "Message", "Medium", "Sender"],
    "Slide 9: 5. Protocol.");
  mcq(9, 'm', "Which of the following is NOT one of the five components of a data communication system?",
    ["Topology", "Receiver", "Message", "Protocol"],
    "Slides 8-9: message, sender, receiver, medium, protocol. Topology is a network layout, not a component.");
  mcq(8, 'm', "In the five-components diagram, the protocol appears on both the sender and the receiver side because…",
    ["both sides must follow the same rules to communicate", "the protocol travels along the cable with the message", "only the receiver needs rules", "the protocol replaces the transmission medium"],
    "Slides 8 and 22: both sides must follow compatible rules.");
  mcq(9, 'm', "A security camera streaming video to a monitoring PC over a cable. Which component is the camera?",
    ["Sender", "Receiver", "Medium", "Protocol"],
    "Slide 9: the sender is the device that sends the data (PC, server, camera).");
  // Four fundamentals (p10)
  mcq(10, 'e', "According to Forouzan, the effectiveness of a data communications system depends on delivery, accuracy, timeliness and…",
    ["jitter", "topology", "bandwidth", "encryption"],
    "Slide 10: the four fundamentals.");
  mcq(10, 'e', "Which fundamental requires the system to deliver data to the correct destination?",
    ["Delivery", "Accuracy", "Timeliness", "Jitter"],
    "Slide 10: 1. Delivery.");
  mcq(10, 'e', "Which fundamental requires the system to deliver data without alteration?",
    ["Accuracy", "Delivery", "Timeliness", "Jitter"],
    "Slide 10: 2. Accuracy.");
  mcq(10, 'm', "Delivering data on time and avoiding late packet arrival is the fundamental called…",
    ["timeliness", "accuracy", "delivery", "reliability"],
    "Slide 10: 3. Timeliness.");
  mcq(10, 'm', "Jitter refers to…",
    ["variation in packet arrival time", "delivering data to the wrong destination", "alteration of data during transmission", "the total capacity of a link"],
    "Slide 10: the system must minimize variations in packet arrival time.");
  mcq(10, 'h', "During a video call the packets all arrive correctly, but some arrive 20 ms apart and others 200 ms apart, so the picture stutters. Which fundamental is being violated?",
    ["Jitter", "Accuracy", "Delivery", "Security"],
    "Slide 10: jitter is the uneven variation in packet arrival time, crucial for video and voice.");
  mcq(10, 'h', "A bank transfer message arrives at the right server on time, but one digit of the amount has changed. Which fundamental failed?",
    ["Accuracy", "Delivery", "Timeliness", "Jitter"],
    "Slide 10: accuracy means data is delivered without alteration.");
  // Data representation (p11-12)
  mcq(11, 'e', "Inside computers, all data types are represented as…",
    ["binary bits (0s and 1s)", "decimal digits (0 to 9)", "continuous analog waves", "ASCII letters and symbols only"],
    "Slide 11.");
  mcq(11, 'm', "Which code, up to 32 bits, can represent all global languages, including Kurdish and Arabic?",
    ["Unicode", "Binary", "RGB", "HTML"],
    "Slide 11.");
  mcq(11, 'e', "How is text represented in data communication?",
    ["Character codes map combinations of bits to symbols", "Each letter is sampled at discrete intervals in time", "Text is divided into a matrix of coloured pixels", "Text is sent as a continuous analog wave of sound"],
    "Slide 11.");
  mcq(11, 'm', "Using the method on the slides, the decimal number 10 is represented in binary as…",
    ["1010", "1100", "0110", "1001"],
    "Slide 11: 10 = 8 + 2 → 1010.");
  mcq(11, 'm', "Numbers are converted directly into binary. What is the decimal number 12 in binary?",
    ["1100", "1010", "1110", "0011"],
    "12 = 8 + 4 → 1·8 + 1·4 + 0·2 + 0·1 = 1100 (same method as slide 11's 10 → 1010).");
  mcq(11, 'h', "What decimal number does the binary value 0111 represent?",
    ["7", "6", "14", "11"],
    "0·8 + 1·4 + 1·2 + 1·1 = 7 (slide 11: numbers are represented directly in binary).");
  mcq(12, 'e', "How is an image represented?",
    ["As a matrix of pixels, each with a bit pattern for its colour", "As a sequence of samples taken from a sound wave's amplitude", "As character codes that map combinations of bits to symbols", "As a sequence of frames displayed rapidly with synchronized audio"],
    "Slide 12.");
  mcq(12, 'm', "In image representation, 24-bit RGB describes each pixel's…",
    ["colour depth", "position in the matrix", "frame rate", "sampling interval"],
    "Slide 12: each pixel is assigned a bit pattern representing its colour depth (e.g. 24-bit RGB).");
  mcq(12, 'h', "An image of 10 × 10 pixels uses 24-bit RGB colour. How many bits does the image need?",
    ["2,400 bits", "240 bits", "24 bits", "100 bits"],
    "10 × 10 = 100 pixels; 100 × 24 bits = 2,400 bits (slide 12: 24 bits per pixel).");
  mcq(12, 'e', "Taking digital samples of a sound wave's amplitude at discrete intervals is called…",
    ["sampling", "framing", "encoding", "pixelation"],
    "Slide 12: audio is sampled and converted to binary values.");
  mcq(12, 'm', "Why must audio be sampled before it can be stored as binary?",
    ["Sound waves are continuous (analog)", "Sound waves are already digital (discrete)", "Audio is made of pixels with a colour depth", "Audio uses Unicode characters for each sound"],
    "Slide 12: sound waves are continuous, so samples are taken at discrete intervals.");
  mcq(12, 'e', "Video is represented as…",
    ["a sequence of image frames displayed rapidly with synchronized audio", "a single high-resolution image with 24-bit colour for every pixel", "a set of character codes that map combinations of bits to symbols", "a continuous analog wave that is never sampled or converted to bits"],
    "Slide 12: e.g. 30 frames per second, combined with synchronized audio.");
  mcq(12, 'h', "A video plays at 30 frames per second, as in the slide example. How many frames are shown in 10 seconds?",
    ["300", "30", "3,000", "40"],
    "30 frames/s × 10 s = 300 frames (slide 12).");
  // Data vs signals, analog vs digital (p13-14)
  mcq(13, 'e', "The physical and electromagnetic form used to carry data through the medium is called a…",
    ["signal", "message", "protocol", "node"],
    "Slide 13.");
  mcq(13, 'm', "Which statement best describes the difference between data and signals?",
    ["Data is the meaning and message; the signal is how that data travels", "Data travels through the medium; the signal is stored in memory", "Data and signals are two names for the same thing", "Signals are the information; data is the electromagnetic carrier"],
    "Slide 13.");
  mcq(14, 'e', "A signal that varies continuously over time is…",
    ["analog", "digital", "binary", "discrete"],
    "Slide 14.");
  mcq(14, 'e', "A signal that uses discrete levels to represent information is…",
    ["digital", "analog", "continuous", "natural audio"],
    "Slide 14.");
  mcq(14, 'm', "Which is given on the slides as an example of an analog signal?",
    ["Natural audio", "Binary data in a computer", "A 0/1 voltage pattern", "A character code"],
    "Slide 14: natural audio and traditional analog transmission.");
  // Data flow (p15-19)
  mcq(15, 'e', "Data flow modes classify communication according to…",
    ["who can transmit and when", "how far the data travels", "which cable is used", "how many devices are in the network"],
    "Slide 15.");
  mcq(16, 'e', "In which data flow mode is transmission strictly unidirectional?",
    ["Simplex", "Half-duplex", "Full-duplex", "Multipoint"],
    "Slide 16.");
  mcq(16, 'm', "Traditional television or radio broadcast stations sending signals to your antenna is an example of…",
    ["simplex", "half-duplex", "full-duplex", "point-to-point mesh"],
    "Slide 16.");
  mcq(17, 'e', "Which mode allows bidirectional transmission, but not at the same time?",
    ["Half-duplex", "Simplex", "Full-duplex", "Broadcast"],
    "Slide 17.");
  mcq(17, 'e', "Police walkie-talkies, where you press Push-To-Talk to speak and say “Over” to listen, are an example of…",
    ["half-duplex", "simplex", "full-duplex", "multipoint"],
    "Slide 17.");
  mcq(18, 'e', "In which mode can both devices transmit and receive data at the exact same time?",
    ["Full-duplex", "Half-duplex", "Simplex", "Time share"],
    "Slide 18.");
  mcq(18, 'm', "A mobile phone conversation, where both people speak and hear each other simultaneously, is…",
    ["full-duplex", "half-duplex", "simplex", "unidirectional"],
    "Slide 18.");
  mcq(18, 'm', "In full-duplex mode, how is the link capacity handled?",
    ["It is divided between the two directions", "It is dedicated to one direction only", "It changes direction turn by turn", "It is given to whichever device holds the token"],
    "Slides 18-19: capacity split/shared, by frequency bands or separate transmit/receive wires.");
  mcq(17, 'm', "In half-duplex mode, the full channel bandwidth is dedicated to…",
    ["whichever direction is currently transmitting", "both directions at the same time, split in half", "the receiver only, while the sender waits", "the sender only, permanently, in one direction"],
    "Slide 17.");
  mcq(19, 'h', "Which pairing of mode and channel utilization is correct?",
    ["Half-duplex: 100% capacity that changes direction", "Simplex: capacity split between two directions", "Full-duplex: 100% capacity in one direction", "Half-duplex: capacity split and used simultaneously"],
    "Slide 19: simplex 100% one direction · half-duplex 100% changing direction · full-duplex split/shared.");
  mcq(19, 'm', "According to the comparison table, shared Ethernet is an example of…",
    ["half-duplex", "simplex", "full-duplex", "point-to-point"],
    "Slide 19: walkie-talkies / shared Ethernet.");
  mcq(18, 'h', "Why can modern switched Ethernet over CAT6 work in full-duplex mode?",
    ["It uses separate transmit and receive wire pairs", "It uses a token that circulates around the ring", "It sends data in one direction only", "Devices take turns using the whole link"],
    "Slide 18.");
  // Transmission medium (p20)
  mcq(20, 'e', "Twisted-pair, coaxial and fiber-optic cables are examples of…",
    ["guided (wired) media", "unguided (wireless) media", "protocols", "network topologies"],
    "Slide 20.");
  mcq(20, 'e', "Radio, microwave and infrared are examples of…",
    ["unguided (wireless) media", "guided (wired) media", "full-duplex data flow modes", "network categories (PAN, LAN)"],
    "Slide 20.");
  mcq(20, 'm', "In unguided media, signals travel through…",
    ["air or space", "a physical cable", "a glass core", "copper wire pairs"],
    "Slide 20.");
  // Protocol (p21-22)
  mcq(21, 'e', "Which of these is one of the rules a protocol specifies?",
    ["Timing", "Topology", "Bandwidth", "Distance"],
    "Slide 21: format, timing, sequence, what to do when something goes wrong.");
  mcq(21, 'm', "According to the slides, what happens without shared rules (protocols)?",
    ["Devices may be connected but still unable to communicate meaningfully", "Devices cannot be physically connected to each other at all", "Data travels faster because no time is spent following rules", "Only wireless devices can communicate, because they need no cables"],
    "Slide 21.");
  mcq(22, 'm', "In the human-conversation analogy for protocols, “turn-taking” corresponds in data communications to…",
    ["timing rules", "message format", "a shared protocol", "agreed interpretation"],
    "Slide 22: same language → shared protocol, turn-taking → timing rules, expected format → message format, meaning → agreed interpretation.");
  mcq(22, 'h', "In the human-conversation analogy, “speaking the same language” corresponds to…",
    ["a shared protocol", "timing rules", "a transmission medium", "a network topology"],
    "Slide 22.");
  // Computer networks & criteria (p23-24)
  mcq(23, 'e', "A computer network is a group of interconnected devices that can…",
    ["exchange data and share resources", "only print documents on a shared printer", "only store files locally on each computer", "only run the same software at the same time"],
    "Slide 23.");
  mcq(23, 'e', "The connected devices in a network are often called…",
    ["nodes", "protocols", "frames", "taps"],
    "Slide 23.");
  mcq(24, 'e', "Which are the three most important network criteria?",
    ["Performance, reliability and security", "Delivery, accuracy, timeliness and jitter", "Mesh, star, bus and ring topologies", "Bandwidth, throughput, delay and load"],
    "Slide 24.");
  mcq(24, 'm', "Which criterion is about how quickly and efficiently data can be delivered?",
    ["Performance", "Reliability", "Security", "Robustness"],
    "Slide 24.");
  mcq(24, 'm', "Failure rate, recovery time and robustness are used to measure…",
    ["reliability", "performance", "security", "throughput"],
    "Slide 24.");
  mcq(24, 'm', "Which of these does NOT influence network performance according to the slides?",
    ["Recovery time", "Bandwidth", "Throughput", "Network load"],
    "Slide 24: performance depends on bandwidth, throughput, delay, load, hardware, software. Recovery time measures reliability.");
  mcq(24, 'e', "Protecting data and resources from unauthorized access, modification or disruption is network…",
    ["security", "performance", "reliability", "timeliness"],
    "Slide 24.");
  mcq(24, 'h', "A university network stays up almost all year and recovers within minutes when a link fails. Which criterion is this describing?",
    ["Reliability", "Performance", "Security", "Jitter"],
    "Slide 24: reliability is the availability of the network, measured by failure rate, recovery time and robustness.");
  // Connection types (p25-26)
  mcq(25, 'e', "A connection that links only two devices directly, with a single transmitter and receiver, is…",
    ["point-to-point", "multipoint link", "bus topology", "time share"],
    "Slide 25.");
  mcq(25, 'm', "Changing TV channels with a remote control is given as an example of…",
    ["a wireless (infrared) point-to-point connection", "a multipoint connection shared by several devices", "a bus topology with drop lines and taps", "a full-duplex connection between two phones"],
    "Slide 25.");
  mcq(26, 'e', "A connection where more than two devices share a single link is…",
    ["multipoint", "point-to-point", "simplex", "mesh"],
    "Slide 26.");
  mcq(26, 'm', "In a multipoint link, when each device uses the whole link but in turns, one after another, this is…",
    ["time share", "space share", "full-duplex", "token ring"],
    "Slide 26.");
  mcq(26, 'm', "In a multipoint link, when each device uses a portion of the link, this is…",
    ["space share", "time share", "half-duplex", "point-to-point"],
    "Slide 26.");
  // Topologies (p27-36)
  mcq(27, 'e', "Network topology refers to…",
    ["the physical or logical arrangement of links and nodes in a network", "the set of rules that governs how devices communicate", "the speed of a network link, measured in bits per second", "the geographic area a network covers, such as a LAN or a WAN"],
    "Slide 27.");
  mcq(27, 'e', "In which topology are all nodes directly connected to each other?",
    ["Mesh", "Star", "Bus", "Ring"],
    "Slide 27.");
  mcq(27, 'e', "In which topology do all nodes connect to a central hub or switch?",
    ["Star", "Mesh", "Bus", "Ring"],
    "Slide 27.");
  mcq(27, 'e', "In which topology do all nodes connect to a single central backbone cable?",
    ["Bus", "Ring", "Star", "Mesh"],
    "Slide 27.");
  mcq(27, 'e', "In which topology do nodes form a closed circle, passing data unidirectionally?",
    ["Ring", "Bus", "Star", "Mesh"],
    "Slide 27.");
  mcq(28, 'm', "The formula for the total number of physical links in a mesh of n nodes is…",
    ["n(n − 1) / 2", "n − 1", "n × n", "(n − 1) / 2"],
    "Slide 28.");
  mcq(28, 'm', "How many physical cables does a mesh topology of 5 nodes need?",
    ["10", "5", "20", "25"],
    "Slide 28: 5(5 − 1)/2 = 5 × 4 / 2 = 10.");
  mcq(28, 'm', "How many physical links are needed to connect 6 devices in a full mesh?",
    ["15", "30", "12", "36"],
    "n(n − 1)/2 = 6 × 5 / 2 = 15 (slide 28 formula).");
  mcq(28, 'h', "How many physical links are needed for a full mesh of 10 devices?",
    ["45", "90", "100", "20"],
    "n(n − 1)/2 = 10 × 9 / 2 = 45 (slide 28 formula).");
  mcq(28, 'm', "In a mesh of 8 nodes, how many I/O ports must each node have?",
    ["7", "8", "28", "16"],
    "Slide 28: every node needs n − 1 ports → 8 − 1 = 7.");
  mcq(28, 'h', "A mesh network grows from 4 to 5 nodes. How many extra links are needed?",
    ["4", "1", "5", "10"],
    "4 nodes: 4·3/2 = 6 links; 5 nodes: 5·4/2 = 10 links; 10 − 6 = 4 extra (the new node links to each of the 4 existing nodes).");
  mcq(28, 'h', "How many I/O ports are needed in total across all nodes of a 6-node mesh?",
    ["30", "15", "36", "6"],
    "Each node needs n − 1 = 5 ports; 6 × 5 = 30 ports in total (each of the 15 links uses two ports).");
  mcq(28, 'm', "Which is an advantage of mesh topology?",
    ["If one link fails, traffic reroutes", "It needs only one cable per device", "It is the cheapest topology to install", "It uses a single backbone cable"],
    "Slide 28: highly robust, secure, easy fault isolation.");
  mcq(28, 'm', "What is the main disadvantage of mesh topology?",
    ["It is extremely expensive and difficult to install due to heavy cabling", "It has a single point of failure at the central controller", "A single break in the ring disables the entire network", "Adding new devices always causes network downtime on the backbone"],
    "Slide 28.");
  mcq(30, 'm', "In a star topology, if Node A sends data to Node B, the data…",
    ["flows to the central controller first, which forwards it", "goes directly from A to B over a dedicated point-to-point link", "circulates around the ring until it reaches B with the token", "travels along the shared backbone and reaches every node"],
    "Slide 30.");
  mcq(30, 'm', "What is the single point of failure in a star topology?",
    ["The central controller (switch or hub)", "Each individual node and its cable", "The terminators at both cable ends", "The token that circulates the network"],
    "Slide 30: if the central controller dies, the whole network collapses.");
  mcq(30, 'm', "Why is star topology described as cost effective?",
    ["Only one cable is needed per device", "Every node links to every other node", "It needs no central device", "It uses one shared backbone with no drop lines"],
    "Slide 30.");
  mcq(30, 'h', "In a star network of 12 PCs, one PC's cable is cut. What happens?",
    ["Only that PC loses its connection; the others keep working", "The whole network collapses until the cable is replaced", "Traffic is rerouted through the other PCs automatically", "The token stops circulating and every PC waits"],
    "Slide 30: high fault tolerance: if one node link breaks, the others survive.");
  mcq(30, 'm', "How many cables are needed to connect 8 PCs to a central switch in a star topology?",
    ["8", "28", "7", "16"],
    "Slide 30: only one cable per device → 8 cables.");
  mcq(32, 'e', "In a bus topology, devices are connected to the backbone using…",
    ["drop lines and taps", "a central switch", "a circulating token", "dedicated links to every other node"],
    "Slide 32.");
  mcq(32, 'm', "Why are terminators placed at both ends of a bus backbone?",
    ["To absorb signals and prevent reflections", "To connect new devices to the backbone", "To pass the token from node to node", "To forward data to the right destination node"],
    "Slide 32.");
  mcq(32, 'm', "What happens in a bus topology if the backbone cable breaks?",
    ["All communication is disabled", "Only one node is affected", "Traffic reroutes through another path", "The central switch takes over"],
    "Slide 32.");
  mcq(32, 'e', "Which is an advantage of bus topology?",
    ["Very simple to install with minimal cabling", "Excellent fault tolerance through multiple paths", "No single point of failure anywhere in the network", "Easy to add new devices without any downtime"],
    "Slide 32.");
  mcq(34, 'm', "In a ring topology, only the device holding the ___ can transmit data.",
    ["token", "terminator", "tap", "central controller"],
    "Slide 34: token passing.");
  mcq(34, 'm', "In a ring topology, each device has a dedicated point-to-point connection with…",
    ["only the two devices on either side of it", "every other device in the network", "a central switch only, like a star", "a backbone cable through a drop line and tap"],
    "Slide 34.");
  mcq(34, 'm', "What is the main disadvantage of ring topology?",
    ["A single break in the physical ring disables the entire network", "It is extremely expensive because every node needs heavy cabling", "It needs a terminator at both ends of the main backbone", "It needs one cable from every device to a central switch"],
    "Slide 34: unidirectional vulnerability.");
  mcq(34, 'm', "Which is an advantage of ring topology?",
    ["Predictable performance", "No single point of failure", "Minimal cabling with drop lines", "Traffic reroutes when a link fails"],
    "Slide 34: relatively easy to install, predictable performance.");
  mcq(36, 'm', "According to the comparison table, which topology has NO single point of failure?",
    ["Mesh", "Star", "Bus", "Ring"],
    "Slide 36.");
  mcq(36, 'm', "Which topology has very low cable cost but poor fault tolerance because of backbone failure?",
    ["Bus", "Mesh", "Star", "Ring"],
    "Slide 36.");
  mcq(36, 'h', "Which topology does the comparison table rate as “very simple” to install with “good” fault tolerance for individual nodes?",
    ["Star", "Bus", "Ring", "Mesh"],
    "Slide 36.");
  mcq(42, 'm', "According to the lecture summary, modern local networks predominantly use which topology?",
    ["Star", "Bus", "Ring", "Mesh"],
    "Slide 42.");
  mcq(37, 'h', "Why can't all devices on the global Internet be physically connected in a mesh?",
    ["The number of cables and ports grows with n², which is impossible for billions of devices", "Mesh topology has a single point of failure at the central switch", "Mesh topology cannot carry Internet traffic between different countries because each link must stay inside one LAN", "Mesh topology only works with wireless media, not with copper or fiber"],
    "Slide 37: with 5 billion devices, n(n − 1)/2 ≈ 1.25 × 10¹⁹ cables and about 5 billion ports per device.");
  mcq(38, 'm', "A topology that combines two or more of the basic topologies is called a…",
    ["hybrid topology", "multipoint topology", "logical topology", "point-to-point topology"],
    "Slide 38: Critical Thinking 2: search Hybrid Topology.");
  // Network categories (p39-41)
  mcq(39, 'e', "Computer networks are categorized (LAN, MAN, WAN, PAN) by…",
    ["the geographic area they cover", "the protocol they use to communicate", "the physical topology they use", "the type of data they carry"],
    "Slide 39.");
  mcq(39, 'e', "Which network category covers an area of less than 2 miles, such as a home, office, lab or building?",
    ["LAN", "WAN", "MAN", "PAN"],
    "Slide 39.");
  mcq(39, 'm', "Which network category lies between LAN and WAN and spans tens of miles, like a city?",
    ["MAN", "PAN", "LAN", "SAN"],
    "Slide 39: Metropolitan Area Network.");
  mcq(39, 'm', "A network with very little coverage, perhaps for one person, is a…",
    ["PAN", "LAN", "MAN", "WAN"],
    "Slide 39: Personal Area Network.");
  mcq(40, 'm', "A LAN is usually owned and managed by…",
    ["a single organization", "telecommunication carriers", "several ISPs together", "the government only"],
    "Slide 40: private ownership (e.g. Tishk International University).");
  mcq(40, 'm', "Which technologies are common in LANs according to the slides?",
    ["IEEE 802.3 Ethernet and IEEE 802.11 Wi-Fi", "BGP and OSPF routing between ISPs", "Leased telephone lines from carriers", "Satellite links and microwave towers"],
    "Slide 40.");
  mcq(40, 'h', "Modern LANs typically run at…",
    ["1 Gbps to 10 Gbps", "10 kbps to 100 kbps", "1 Mbps to 10 Mbps", "100 Tbps"],
    "Slide 40: historically 10–100 Mbps; modern LANs 1–10 Gbps.");
  mcq(41, 'm', "WANs are run by…",
    ["telecommunication carriers and ISPs", "a single university or company", "one home user and their family", "the LAN switch in each building"],
    "Slide 41: public/leased ownership.");
  mcq(41, 'm', "Which device does a WAN primarily use to route packets across separate networks?",
    ["Routers", "Hubs", "Terminators", "Repeaters"],
    "Slide 41.");
  mcq(41, 'h', "Why do WANs have higher error rates than LANs?",
    ["They interconnect diverse media over thousands of miles", "They use high-quality local cabling such as UTP", "They are owned and managed by a single organization", "They cover less than 2 miles, so signals bounce"],
    "Slide 41.");
  mcq([40, 41], 'h', "Tishk International University connects its campus buildings with its own cabling and links to the Internet through an ISP. Which statement is correct?",
    ["The campus network is a LAN; the ISP's long-distance network is a WAN", "The campus network is a WAN; the ISP's long-distance network is a LAN", "Both networks are PANs, because each covers only a few users", "Both networks are LANs, because they are connected to each other"],
    "Slides 40-41: LANs are privately owned and local; WANs are run by carriers and ISPs over large areas.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(7, 'e', "Data communications is the exchange of [[data]] between two devices via some form of transmission medium.", "Slide 7.");
  fill(7, 'm', "Data can communicate if they are part of a communication system made of a hardware device and a [[software program|software|program]].", "Slide 7.");
  fill(9, 'e', "The [[message]] is the information or data to be communicated, such as text, image or audio.", "Slide 9.");
  fill(9, 'e', "The [[receiver]] is the device that receives the data.", "Slide 9.");
  fill(9, 'e', "The [[medium|transmission medium]] is the physical path over which data travels.", "Slide 9.");
  fill(9, 'e', "A [[protocol]] is the set of rules governing data communication.", "Slide 9.");
  fill(9, 'm', "The five components of data communication are message, sender, [[receiver]], medium and [[protocol]].", "Slide 9.", { set: true });
  fill(10, 'm', "The effectiveness of a data communications system depends on delivery, [[accuracy]], [[timeliness]] and jitter.", "Slide 10.", { set: true });
  fill(10, 'm', "[[Jitter]] is the variation in packet arrival time, which is crucial for video and voice.", "Slide 10.");
  fill(10, 'm', "[[Delivery]] means the system must deliver data to the correct destination.", "Slide 10.");
  fill(11, 'm', "[[Unicode]] uses up to 32 bits and can represent all global languages.", "Slide 11.");
  fill(11, 'e', "Inside computers, all data types are represented as [[binary|bits|binary bits]] (0s and 1s).", "Slide 11.");
  fill(11, 'm', "The decimal number 10 becomes [[1010]] in binary.", "Slide 11: 8 + 2 = 10.");
  fill(12, 'm', "An image is divided into a matrix of [[pixels|pixel]].", "Slide 12.");
  fill(12, 'm', "Taking digital samples of a sound wave's amplitude at discrete intervals is called [[sampling]].", "Slide 12.");
  fill(12, 'h', "Video is a sequence of individual image [[frames|frame]] displayed rapidly, combined with synchronized audio.", "Slide 12.");
  fill(13, 'm', "A [[signal]] is the physical and electromagnetic form used to carry data through the medium.", "Slide 13.");
  fill(14, 'e', "An [[analog]] signal varies continuously over time.", "Slide 14.");
  fill(14, 'e', "A [[digital]] signal uses discrete levels to represent information.", "Slide 14.");
  fill(16, 'e', "[[Simplex]] mode is strictly unidirectional.", "Slide 16.");
  fill(17, 'e', "[[Half-duplex|half duplex]] mode allows bidirectional transmission, but not at the same time.", "Slide 17.");
  fill(18, 'e', "[[Full-duplex|full duplex]] mode is fully bidirectional and simultaneous.", "Slide 18.");
  fill(17, 'm', "Walkie-talkies use a [[Push-To-Talk|push to talk|PTT]] button to speak, then the user releases it to listen.", "Slide 17.");
  fill(21, 'm', "Protocols specify rules such as format, [[timing]], [[sequence]] and what to do when something goes wrong.", "Slide 21.", { set: true });
  fill(23, 'e', "The connected devices in a computer network are often called [[nodes|node]].", "Slide 23.");
  fill(24, 'm', "The three most important network criteria are performance, [[reliability]] and [[security]].", "Slide 24.", { set: true });
  fill(24, 'h', "Network reliability is measured by failure rate, [[recovery time]] and robustness.", "Slide 24.");
  fill(25, 'e', "A [[point-to-point|point to point|P2P]] connection connects only two devices together.", "Slide 25.");
  fill(26, 'm', "In a multipoint link, [[time share|time sharing|time-share]] means each device uses the whole link, but in turns.", "Slide 26.");
  fill(27, 'm', "Network [[topology]] is the geometric layout of how devices are connected.", "Slide 27.");
  fill(28, 'm', "For n nodes, a mesh topology needs n(n − 1)/2 physical links, so 5 nodes need [[10|ten]] cables.", "Slide 28: 5 × 4 / 2 = 10.");
  fill(28, 'h', "In a mesh topology, every node must have [[n − 1|n-1|n minus 1]] physical I/O ports.", "Slide 28.");
  fill(30, 'm', "In a star topology, each node has a dedicated link only to a central [[controller|central controller|switch|hub]].", "Slide 30.");
  fill(32, 'm', "In a bus topology, [[terminators|terminator]] are placed on both ends of the backbone to absorb signals and prevent reflections.", "Slide 32.");
  fill(32, 'h', "Bus topology uses drop lines and [[taps|tap]] to connect devices to the backbone.", "Slide 32.");
  fill(34, 'm', "In ring topology, a token circulates around the ring; this method is called [[token passing]].", "Slide 34.");
  fill(30, 'm', "A star topology has a single point of [[failure]]: if the central controller dies, the whole network collapses.", "Slide 30.");
  fill(39, 'e', "A [[LAN|local area network]] covers an area of less than 2 miles, such as a home, office or building.", "Slide 39.");
  fill(39, 'm', "A [[MAN|metropolitan area network]] lies between a LAN and a WAN and spans tens of miles, like a city.", "Slide 39.");
  fill(39, 'm', "A [[PAN|personal area network]] has very little coverage, maybe one person.", "Slide 39.");
  fill(41, 'm', "A [[WAN|wide area network]] provides long-distance transmission over large geographic areas.", "Slide 41.");
  fill(41, 'h', "WANs primarily use [[routers|router]] to route packets across separate networks.", "Slide 41.");
  fill(40, 'h', "Common LAN technologies are IEEE 802.3 [[Ethernet]] and IEEE 802.11 [[Wi-Fi|wifi|wireless]].", "Slide 40.");

  /* ---------- Section C: true / false ---------- */
  tf(9, 'e', "The receiver is the device that sends the data.", false, "False. The sender sends; the receiver receives.");
  tf(9, 'e', "A protocol is the set of rules governing data communication.", true, "True. Slide 9.");
  tf(10, 'm', "Jitter is about delivering data to the correct destination.", false, "False. That is delivery; jitter is variation in packet arrival time.");
  tf(10, 'e', "Accuracy means the system must deliver data without alteration.", true, "True. Slide 10.");
  tf(11, 'm', "Unicode can represent Kurdish and Arabic characters.", true, "True. Slide 11.");
  tf(12, 'm', "Sound waves are naturally digital, so audio does not need sampling.", false, "False. Sound waves are continuous (analog), so they are sampled.");
  tf(13, 'm', "Data and signals mean exactly the same thing.", false, "False. Data is the meaning; the signal is how the data travels.");
  tf(14, 'e', "A digital signal varies continuously over time.", false, "False. An analog signal varies continuously; a digital signal uses discrete levels.");
  tf(16, 'e', "In simplex mode, one device only transmits and the other only receives.", true, "True. Slide 16.");
  tf(17, 'm', "In half-duplex mode, both devices can transmit at the same time.", false, "False. They must take turns.");
  tf(18, 'e', "A mobile phone conversation is an example of full-duplex communication.", true, "True. Slide 18.");
  tf(21, 'm', "Two devices that are physically connected can always communicate meaningfully, even without shared protocols.", false, "False. Without shared rules they may be connected but unable to communicate meaningfully.");
  tf(24, 'm', "Throughput and delay influence network performance.", true, "True. Slide 24.");
  tf(26, 'm', "In time share, each device uses only a portion of the link at the same time.", false, "False. That is space share; in time share each device uses the whole link in turns.");
  tf(28, 'm', "A mesh of 5 nodes needs 10 physical cables.", true, "True. 5 × 4 / 2 = 10.");
  tf(28, 'h', "A full mesh of 7 nodes needs 42 physical links.", false, "False. 7 × 6 / 2 = 21 links. 42 is n(n − 1) without dividing by 2 (the number of ports).");
  tf(30, 'm', "In a star topology, nodes connect directly to each other.", false, "False. Each node links only to the central controller.");
  tf(32, 'e', "In a bus topology, a broken backbone disables all communication.", true, "True. Slide 32.");
  tf(34, 'm', "In ring topology, only the device holding the token can transmit.", true, "True. Slide 34.");
  tf(36, 'h', "According to the comparison table, the mesh topology has a single point of failure.", false, "False. Mesh has multiple paths and no single point of failure.");
  tf(39, 'e', "A WAN can be worldwide.", true, "True. Slide 39.");
  tf(40, 'm', "A LAN is usually run by telecommunication carriers and ISPs.", false, "False. A LAN is privately owned by a single organization; WANs are run by carriers and ISPs.");
  tf(41, 'm', "WANs have higher error rates than LANs.", true, "True. They interconnect diverse media over thousands of miles.");
  tf(42, 'h', "Modern local networks predominantly use the bus topology.", false, "False. They predominantly use the star topology.");

  /* ---------- In the instructor's style (Types 1-3: long technical stems, definitional blanks, swapped-fact statements) ---------- */
  mcq(17, 'm', "Which data flow mode dedicates the full channel bandwidth to whichever device is currently transmitting, forcing the other device to listen until the transmission ends?",
    ["Half-duplex", "Full-duplex", "Simplex", "Multipoint"],
    "Slide 17: half-duplex devices take turns; the whole bandwidth goes to the current sender.");
  mcq(28, 'h', "Which physical topology provides dedicated point-to-point links between every pair of nodes, giving easy fault isolation but requiring n − 1 I/O ports on every node?",
    ["Mesh", "Star", "Bus", "Ring"],
    "Slide 28.");
  mcq(32, 'm', "Which bus topology component is placed at both ends of the main backbone cable to absorb signals and prevent reflections?",
    ["Terminator", "Tap", "Drop line", "Central controller"],
    "Slide 32.");
  mcq(40, 'm', "Which network category is privately owned by a single organization, covers a limited area such as a campus, and typically uses IEEE 802.3 Ethernet and IEEE 802.11 Wi-Fi?",
    ["LAN", "WAN", "MAN", "PAN"],
    "Slide 40.");
  mcq(26, 'h', "In a multipoint connection, which sharing method gives each device the entire capacity of the link, but only during its own turn?",
    ["Time share", "Space share", "Full-duplex", "Point-to-point"],
    "Slide 26: time share = whole link, in turns; space share = a portion of the link each.");
  mcq(21, 'm', "Which component of a data communication system defines the format, timing and sequence of messages, and what to do when something goes wrong?",
    ["Protocol", "Medium", "Message", "Receiver"],
    "Slides 9 and 21.");
  fill(16, 'm', "A data flow mode in which one device can only transmit and the other can only receive is termed [[simplex]].", "Slide 16.");
  fill(26, 'm', "A connection in which more than two devices share a single link is called a [[multipoint|multi-point|multi point]] connection.", "Slide 26.");
  fill(28, 'h', "The physical layout in which every node has a dedicated point-to-point link to every other node is the [[mesh]] topology.", "Slide 28.");
  fill(24, 'h', "The network criterion that is measured by failure rate, recovery time and robustness is [[reliability]].", "Slide 24.");
  tf(30, 'h', "In a star topology, the failure of one node's cable brings down the whole network, while the failure of the central switch affects only one port.", false, "False. It is the other way round: one node's link failure affects only that node, while the central controller is the single point of failure.");
  tf(17, 'h', "Half-duplex allows both devices to transmit simultaneously, while full-duplex forces them to take turns.", false, "False. The two are swapped: half-duplex devices take turns; full-duplex devices transmit simultaneously.");
  tf(40, 'h', "A LAN is privately owned by a single organization and has lower error rates than a WAN, which is run by telecommunication carriers and ISPs.", true, "True. Slides 40-41.");
  tf(28, 'h', "Mesh topology is the cheapest and simplest topology to install, and it also has a single point of failure.", false, "False. Mesh is the most expensive and complex to install, and it has no single point of failure.");
  tf(10, 'h', "According to Forouzan, timeliness means delivering data without alteration, while accuracy means delivering it on time.", false, "False. The definitions are swapped: accuracy = without alteration; timeliness = on time.");

  exp([15, 16, 17, 18, 19], 'm', 5, "Categorize data flow according to who can transmit and when. Describe simplex, half-duplex and full-duplex with a real-world example of each, and draw a labeled diagram showing the direction of data in each mode.",
    [["Data flow is classified by who can transmit and when, giving three modes", "who can transmit", "three modes"],
     ["Simplex: strictly one-way; one device only transmits, the other only receives; e.g. TV/radio broadcast", "one way", "unidirectional", "broadcast"],
     ["Half-duplex: both directions but the devices take turns; e.g. walkie-talkies", "take turns", "turns", "walkie"],
     ["Full-duplex: both directions at the same time, capacity split; e.g. phone call, switched Ethernet", "same time", "simultaneous", "phone"],
     ["Labeled drawing: one arrow A → B (simplex), A → B then B → A (half-duplex), two arrows at once (full-duplex)","labeled drawing","labelled drawing","drawing","diagram"]],
    "Data flow is classified by who can transmit and when, giving three modes. Simplex is strictly one-way (unidirectional): one device only transmits and the other only receives, using all the capacity in one direction, e.g. a TV or radio broadcast. Half-duplex is bidirectional but the devices take turns, and the full bandwidth goes to whichever device is sending, e.g. police walkie-talkies. Full-duplex is bidirectional at the same time (simultaneous), with the capacity split between the two directions, e.g. a mobile phone call or switched Ethernet. Labeled drawing: simplex shows one arrow from A to B; half-duplex shows A → B at time 1 and B → A at time 2; full-duplex shows two arrows in both directions at once.",
    { sec: 'D', figure: 'dataflow' });
  exp([27, 28, 30, 32, 34, 36], 'h', 5, "Categorize the four physical network topologies. Describe how the nodes are connected in each, give one advantage and one disadvantage of each, and draw a labeled diagram of all four.",
    [["Mesh: a dedicated link between every pair of nodes, n(n − 1)/2 links; robust and secure but very expensive", "every other", "every pair", "n(n", "expensive"],
     ["Star: each node linked to a central switch/hub; cheap and easy, but the central controller is a single point of failure", "central", "switch", "hub"],
     ["Bus: one backbone cable with drop lines, taps and terminators; cheapest, but a backbone break stops everything", "backbone", "tap", "terminator"],
     ["Ring: each node linked to its two neighbours, token passing in one direction; predictable, but one break stops the ring", "token", "neighbo", "either side"],
     ["Labeled drawing: mesh, star, bus and ring","labeled drawing","labelled drawing","drawing","diagram"]],
    "Mesh: every node has a dedicated link to every other node, so n nodes need n(n − 1)/2 links; traffic reroutes when a link fails (robust, secure, easy fault isolation), but it is very expensive and hard to install. Star: each node has one link to a central switch or hub, so it is cheap and easy to install, but the central controller is a single point of failure. Bus: all nodes attach to one backbone cable with drop lines and taps, with terminators at both ends; it is the cheapest, but a broken backbone stops all communication. Ring: each node links to the two neighbours on either side and a token circulates in one direction; performance is predictable, but one break disables the ring. Labeled drawing: mesh with every PC linked to every PC, star with PCs around a switch, bus with a backbone, taps and terminators, and ring with PCs in a closed circle.",
    { sec: 'D', figure: 'topologies' });
  exp([25, 26], 'm', 5, "Categorize the two connection types used to connect network devices. Describe each type, give an example, explain the two ways devices share a multipoint link, and draw both connection types.",
    [["Point-to-point: only two devices on a dedicated direct link; single transmitter and receiver", "only two", "two devices", "dedicated", "direct"],
     ["Point-to-point example: a cable between two devices, or a TV remote control (infrared)", "remote", "cable"],
     ["Multipoint: more than two devices share one link", "more than two", "share"],
     ["Space share (each device uses a portion of the link) vs time share (each uses the whole link in turns)", "space share", "time share", "portion"],
     ["Labeled drawing: station – link – station, and a mainframe with several stations on one shared link","labeled drawing","labelled drawing","drawing","diagram"]],
    "A point-to-point connection links only two devices with a dedicated direct link: data from one node goes straight to the other, with a single transmitter and receiver. It is usually a cable, but can be wireless or infrared, for example changing TV channels with a remote control. A multipoint connection links more than two devices that share one link. They share it in two ways: space share, where each device uses a portion of the link, and time share, where each device uses the whole link but in turns. Labeled drawing: a station, a link and a station for point-to-point; a mainframe with several stations attached to one shared link for multipoint.",
    { sec: 'D', figure: 'connections' });

  /* ---------- Section D: categorization & illustration (Type 4) · Section E: explanation & structural mapping (Type 6) ---------- */
  exp([8, 9, 10], 'm', 5, "List the five components of data communication, explain the four fundamentals of effective data communication, and draw a labeled diagram of a data communication system.", [["Delivery: data must reach the correct destination", "correct destination", "destination"],
     ["Accuracy: data must be delivered without alteration", "alteration", "without chang", "unchanged"],
     ["Timeliness: data must be delivered on time (no late packets)", "on time", "late"],
     ["Jitter: variation in packet arrival time must be minimized (video/voice)", "variation", "arrival", "video", "voice"],
     ["Labeled drawing: sender, receiver, medium, message and protocol on both sides","labeled drawing","labelled drawing","drawing","diagram"]], "The five components are the message (the data to be communicated), the sender, the receiver, the medium (the physical path) and the protocol (the set of rules). According to Forouzan, effectiveness depends on four fundamentals: delivery, the system must deliver data to the correct destination; accuracy, data must be delivered without alteration; timeliness, data must be delivered on time without late packet arrival; and jitter, variations in packet arrival time must be minimized, which is crucial for video and voice. Labeled drawing: the sender and receiver are joined by the transmission medium, the message travels along it, and the protocol (the same rules) sits on both sides.", { sec: 'E', figure: 'components', list: { label: "Lists the five components", weight: 0.4, items: [["Message", "message"], ["Sender", "sender"], ["Receiver", "receiver"], ["Medium", "medium"], ["Protocol", "protocol"]] } });
  exp([39, 40, 41], 'm', 5, "Classify networks into LANs and WANs based on geographic scale and ownership, and describe their key characteristics.", [["LAN: limited area (< 2 miles): home, office, classroom, campus", "2 miles", "office", "campus", "home", "limited"],
     ["LAN: private ownership by a single organization; high data rates (1–10 Gbps); minimal errors; Ethernet/Wi-Fi", "private", "single organi", "ethernet", "gbps"],
     ["WAN: long distance across countries, continents or the globe", "countr", "continent", "globe", "worldwide", "long distance"],
     ["WAN: public/leased ownership by carriers and ISPs; higher error rates; uses routers", "isp", "carrier", "leased", "router"]], "A LAN connects devices within a limited geographical area of less than 2 miles, such as a home, office, classroom or campus. It is privately owned and managed by a single organization (for example Tishk International University), has high data rates (modern LANs run at 1 to 10 Gbps), minimal error rates thanks to high-quality local cabling, and uses IEEE 802.3 Ethernet and 802.11 Wi-Fi. A WAN provides long-distance transmission across countries, continents or the entire globe. It is public or leased, run by telecommunication carriers and ISPs, historically has lower data rates and higher error rates because it interconnects diverse media over thousands of miles, and primarily uses routers to route packets between separate networks.", { sec: 'E' });
  exp([28, 37], 'h', 5, "Mesh is the most robust topology. Explain, with a calculation, why the global Internet cannot be physically connected as a full mesh.", [["Mesh is robust: dedicated links, traffic reroutes, no single point of failure", "robust", "reroute", "single point", "dedicated"],
     ["Links needed = n(n − 1)/2", "n(n", "n n 1", "formula"],
     ["For 5 billion devices: about 1.25 × 10^19 cables (cables grow with n²)", "10^19", "10 19", "quintillion", "1.25", "n2", "n^2", "squared"],
     ["Each device would need about 5 billion (n − 1) ports", "port", "5 billion", "n 1"],
     ["Impossible cost, cabling and installation; instead networks are connected hierarchically through routers/hybrid designs", "cost", "expensive", "impossible", "impractical", "router", "hybrid"]], "Mesh is the most resilient topology because every node has a dedicated link to every other node: traffic reroutes when a link fails and there is no single point of failure. However, the number of links is n(n − 1)/2 and every node needs n − 1 ports. With 5 billion devices, that is about 5 × 10⁹ × (5 × 10⁹ − 1) / 2 ≈ 1.25 × 10¹⁹ cables, and every device would need almost 5 billion ports. Cabling grows with n², so the cost, materials and installation work are impossible. Real networks therefore combine topologies (hybrid designs) and connect separate networks through routers.", { sec: 'E', need: 4 });
});
