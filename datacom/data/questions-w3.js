/* Week 3: Network Models: OSI and TCP/IP (PDF pages 1-27). */
EC.lecture(3, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A: choose the correct option ---------- */
  // Protocol layering (p5-8)
  mcq(5, 'e', "Week 3's solution to breaking network software into structured, manageable parts is to introduce…",
    ["logical network models", "faster physical cables", "new physical topologies", "wireless transmission media"],
    "Slide 5: Solution: introducing logical network models.");
  mcq(6, 'e', "Which benefit of layered architecture means that modifying one layer does not break the others?",
    ["Modularity", "Complexity", "Interoperability", "Encapsulation"],
    "Slide 6.");
  mcq(6, 'e', "Which benefit of layering enables multi-vendor hardware and software to work together?",
    ["Interoperability", "Modularity", "Timeliness", "Segmentation"],
    "Slide 6.");
  mcq(6, 'm', "Layering handles complexity by…",
    ["breaking tasks into independent modules", "putting all functions into one program", "removing the need for protocols", "connecting every device to every other device"],
    "Slide 6.");
  mcq(6, 'm', "According to the basic rules of layering, each layer…",
    ["provides services to the layer above and receives services from the layer below", "communicates only with the physical medium and never with other layers", "performs every function of the network so other layers are not needed", "provides services only to the layer below and receives none from it"],
    "Slide 6.");
  mcq(6, 'm', "Which is one of the basic rules of layering?",
    ["Each layer must perform a specific, well-defined function", "Each layer must use the same protocol as every other layer", "All layers must be modified together whenever one changes", "Only the top layer may add information to the data"],
    "Slide 6.");
  mcq(7, 'm', "In the postal-system example of layering, putting the letter in an envelope with addresses corresponds to…",
    ["Layer 2 (packaging)", "Layer 3 (content)", "Layer 1 (transport)", "the receiver's decapsulation"],
    "Slide 7: Layer 3 content · Layer 2 packaging · Layer 1 transport.");
  mcq(7, 'm', "In the postal-system example, the postal truck or plane carrying the envelope corresponds to…",
    ["Layer 1 (transport)", "Layer 2 (packaging)", "Layer 3 (content)", "the protocol"],
    "Slide 7.");
  mcq(7, 'h', "In the postal example, the receiver opens the envelope and reads the letter. This reverse process is called…",
    ["decapsulation", "encapsulation", "segmentation", "routing"],
    "Slide 7: encapsulation flow ↓ at the sender, decapsulation flow ↑ at the receiver.");
  mcq(8, 'm', "In the airline example of layering, the arrival steps (landing → gate → baggage claim → ticket exit) mirror the departure steps in reverse. This shows that layering is…",
    ["symmetric", "random", "one-directional", "unnecessary"],
    "Slide 8: symmetric passenger flow.");
  // OSI model (p9-10)
  mcq(9, 'e', "What does OSI stand for?",
    ["Open Systems Interconnection", "Open Software Integration", "Optical Signal Interface", "Organized System Interface"],
    "Slide 9.");
  mcq(9, 'e', "Which organization established the OSI reference model?",
    ["ISO", "DARPA", "IEEE", "Cisco"],
    "Slide 9: established by ISO in 1984.");
  mcq(9, 'm', "The OSI model is described on the slides as…",
    ["a theoretical benchmark framework that simplifies the data communication process", "the practical protocol suite developed by DARPA that powers today's Internet", "a physical cable standard for copper and fiber connections", "a type of network topology used in large enterprise networks"],
    "Slide 9.");
  mcq(9, 'm', "What is the purpose of the OSI model according to the slides?",
    ["A universal architectural standard for network education and design", "A commercial protocol that every router on the Internet must run", "A cable and connector standard for local area networks", "A replacement for TCP/IP that will run the Internet in the future"],
    "Slide 9.");
  mcq(9, 'm', "In the mnemonic “Please Do Not Throw Sausage Pizza Away” (layers 1 to 7), “Sausage” stands for the…",
    ["Session layer", "Presentation layer", "Transport layer", "Physical layer"],
    "Slide 9: Physical, Data Link, Network, Transport, Session, Presentation, Application.");
  mcq(9, 'h', "Using the mnemonic “Please Do Not Throw Sausage Pizza Away”, which layer is directly above the Network layer?",
    ["Transport", "Data Link", "Session", "Presentation"],
    "Slide 9: Network is layer 3 (“Not”), Transport is layer 4 (“Throw”).");
  mcq(10, 'e', "Which OSI layer is Layer 7?",
    ["Application", "Physical", "Session", "Presentation"],
    "Slide 10.");
  mcq(10, 'e', "Which OSI layer is Layer 1?",
    ["Physical", "Application", "Data Link", "Network"],
    "Slide 10.");
  mcq(10, 'm', "Which OSI layer is Layer 6?",
    ["Presentation", "Session", "Transport", "Application"],
    "Slide 10.");
  mcq(10, 'm', "Which OSI layer is Layer 2?",
    ["Data Link", "Network", "Physical", "Transport"],
    "Slide 10.");
  mcq(10, 'm', "At the sender, data moves down the OSI layers from Layer 7 to Layer 1. This process is called…",
    ["encapsulation", "decapsulation", "routing", "switching"],
    "Slide 10.");
  // Layer 1 (p11-12)
  mcq(11, 'e', "Which OSI layer transmits raw, unstructured bit streams over the physical medium?",
    ["Physical", "Data Link", "Network", "Transport"],
    "Slide 11.");
  mcq(11, 'm', "Which is a duty of the Physical layer?",
    ["Converting bits to electrical voltage, light pulses or radio waves", "Adding source and destination MAC addresses to frames", "Choosing the best route for packets across many networks", "Encrypting and compressing the data with SSL/TLS and GZIP"],
    "Slide 11.");
  mcq(11, 'm', "Defining bit rate duration and clock synchronization is the job of the…",
    ["Physical layer", "Session layer", "Network layer", "Application layer"],
    "Slide 11.");
  mcq(11, 'e', "Copper UTP Cat6 cables with RJ-45 connectors belong to which OSI layer?",
    ["Physical", "Network", "Transport", "Presentation"],
    "Slide 11: hardware & media types of Layer 1.");
  mcq(12, 'm', "In NRZ (Non-Return-to-Zero) encoding shown on the slides, a logic 1 is represented by…",
    ["a HIGH voltage (+5 V)", "a LOW voltage (0 V)", "a light turned off", "a change in frequency"],
    "Slide 12: HIGH = logic 1 (+5 V), LOW = logic 0 (0 V).");
  mcq(12, 'h', "In the fiber-optic strand shown on the slides, which part has the higher refractive index?",
    ["The glass core", "The cladding", "The yellow jacket", "The RJ-45 plug"],
    "Slide 12: core = silica, high refractive index; cladding = silica, low refractive index.");
  mcq(12, 'h', "Light in a fiber travels at about 200,000 km/s (slide 12). Roughly how long does it take to cross 1,000 km of fiber?",
    ["5 ms", "0.5 ms", "50 ms", "200 ms"],
    "time = distance / speed = 1,000 km ÷ 200,000 km/s = 0.005 s = 5 ms.");
  // Layer 2 (p13-14)
  mcq(13, 'e', "Which OSI layer transforms raw physical bits into structured frames?",
    ["Data Link", "Physical", "Network", "Session"],
    "Slide 13.");
  mcq(13, 'm', "The Data Link layer handles physical addressing using…",
    ["48-bit MAC addresses burned into the NIC", "32-bit logical IPv4 addresses", "16-bit port numbers such as 80 and 443", "URLs and domain names of web servers"],
    "Slide 13.");
  mcq(13, 'm', "The Data Link layer performs error detection using the…",
    ["Frame Check Sequence (FCS / CRC32)", "3-way handshake (SYN, SYN-ACK, ACK)", "sequence numbers in the segment", "SSL/TLS encryption and certificates"],
    "Slide 13.");
  mcq(13, 'm', "Which Data Link sublayer interfaces with the Network layer?",
    ["LLC (Logical Link Control)", "MAC (Media Access Control)", "FCS (Frame Check Sequence)", "CAM (Content Addressable Memory)"],
    "Slide 13.");
  mcq(13, 'm', "Which Data Link sublayer controls hardware access to the cable or air?",
    ["MAC (Media Access Control)", "LLC (Logical Link Control)", "ICMP", "UDP"],
    "Slide 13.");
  mcq(13, 'm', "A Layer 2 switch keeps track of devices using its…",
    ["CAM MAC address table", "routing table of IP subnets", "port number list", "DNS cache"],
    "Slide 13.");
  mcq(14, 'm', "In the Ethernet frame structure, what is carried in the payload?",
    ["The IP packet", "The MAC addresses", "The FCS error check", "Raw bits only"],
    "Slide 14: header (MAC addresses) · payload (IP packet) · trailer.");
  mcq(14, 'h', "An Ethernet frame consists of…",
    ["a header with MAC addresses, the IP packet as payload, and a trailer", "an IP header and a TCP segment only, with no trailer at all", "a port number, a sequence number and the application data", "a URL, a port number and a MAC address in one header"],
    "Slides 14 and 19.");
  // Layer 3 (p15)
  mcq(15, 'e', "Which OSI layer is responsible for source-to-destination packet delivery across multiple subnets?",
    ["Network", "Transport", "Data Link", "Physical"],
    "Slide 15.");
  mcq(15, 'm', "Path determination and routing, finding the optimal route across internetworks, happens at the…",
    ["Network layer", "Data Link layer", "Session layer", "Physical layer"],
    "Slide 15.");
  mcq(15, 'm', "An IPv4 address is ___ bits long, while an IPv6 address is ___ bits long.",
    ["32; 128", "48; 32", "16; 48", "128; 32"],
    "Slide 15: 32-bit IPv4 / 128-bit IPv6.");
  mcq(15, 'm', "Which of these protocols works at the Network layer?",
    ["ICMP (ping)", "HTTP (web)", "FTP (files)", "UDP (datagrams)"],
    "Slide 15: IP, ICMP, ARP, OSPF, BGP.");
  mcq(15, 'e', "What is the primary hardware of the Network layer?",
    ["Routers and Layer 3 switches", "Repeater hubs", "RJ-45 connectors", "Network interface cards only"],
    "Slide 15.");
  mcq(15, 'm', "In an IP packet, the payload is…",
    ["a TCP or UDP segment", "an Ethernet frame", "a MAC address", "raw bits on the cable"],
    "Slide 15: header (IP addresses) + payload (TCP/UDP segment).");
  mcq(15, 'h', "An IPv6 address is how many times longer than an IPv4 address?",
    ["4 times", "2 times", "8 times", "16 times"],
    "128 bits ÷ 32 bits = 4 (slide 15).");
  // Layer 4 (p16)
  mcq(16, 'e', "Which OSI layer provides end-to-end, process-to-process delivery of segments?",
    ["Transport", "Network", "Session", "Data Link"],
    "Slide 16.");
  mcq(16, 'm', "Port numbers such as 80 and 443 are…",
    ["16-bit integers used at the Transport layer", "32-bit addresses used at the Network layer", "48-bit addresses used at the Data Link layer", "names used at the Application layer"],
    "Slide 16.");
  mcq(16, 'm', "The Transport layer reassembles segments in the right order using…",
    ["sequence numbers", "MAC addresses", "the CAM table", "checkpoint recovery"],
    "Slide 16: segmentation & reassembly via sequence numbers.");
  mcq(16, 'e', "Which transport protocol is connection-oriented and reliable, using a 3-way handshake?",
    ["TCP", "UDP", "IP", "ICMP"],
    "Slide 16.");
  mcq(16, 'e', "Which transport protocol is connectionless, fast and low-overhead?",
    ["UDP", "TCP", "ARP", "BGP"],
    "Slide 16.");
  mcq(16, 'm', "What is the correct order of the TCP 3-way handshake?",
    ["SYN → SYN-ACK → ACK", "ACK → SYN → SYN-ACK", "SYN → ACK → FIN", "SYN-ACK → SYN → ACK"],
    "Slide 16.");
  mcq(16, 'h', "Port numbers are 16-bit integers. How many different port numbers can 16 bits represent?",
    ["65,536", "16,384", "1,024", "4,294,967,296"],
    "2¹⁶ = 65,536 values (0 to 65,535).");
  // Layers 5-7 (p17-18)
  mcq(17, 'e', "Session setup, maintenance, dialogue control and checkpoint recovery are duties of the…",
    ["Session layer", "Presentation layer", "Application layer", "Transport layer"],
    "Slide 17.");
  mcq(17, 'e', "Formatting (ASCII/Unicode), encryption (SSL/TLS) and compression (GZIP) happen at the…",
    ["Presentation layer", "Session layer", "Network layer", "Application layer"],
    "Slide 17.");
  mcq(17, 'e', "Which layer provides network services directly to user applications such as HTTP, DNS and SMTP?",
    ["Application", "Presentation", "Session", "Transport"],
    "Slide 17.");
  mcq(17, 'm', "Encrypting a web page with SSL/TLS is a function of which OSI layer?",
    ["Presentation", "Application", "Transport", "Session"],
    "Slide 17.");
  mcq(17, 'm', "Compressing data with GZIP belongs to which OSI layer?",
    ["Presentation", "Application", "Session", "Transport"],
    "Slide 17.");
  mcq(17, 'h', "A large file download is interrupted and resumes from the last saved point instead of the beginning. Which OSI layer function does this illustrate?",
    ["Checkpoint recovery at the Session layer", "Compression at the Presentation layer", "Routing at the Network layer", "Framing at the Data Link layer"],
    "Slide 17: session layer: checkpoint recovery.");
  mcq(17, 'm', "Which of these is an Application layer protocol?",
    ["DNS", "ARP", "UDP", "OSPF"],
    "Slide 17: HTTP, HTTPS, DNS, SMTP, FTP.");
  // PDUs (p19)
  mcq(19, 'e', "What is the PDU at Layer 4 when TCP is used?",
    ["Segment", "Packet", "Frame", "Bits"],
    "Slide 19.");
  mcq(19, 'e', "What is the PDU at Layer 3?",
    ["Packet", "Segment", "Frame", "Data"],
    "Slide 19.");
  mcq(19, 'e', "What is the PDU at Layer 2?",
    ["Frame", "Packet", "Segment", "Message"],
    "Slide 19.");
  mcq(19, 'm', "When UDP is used, the Layer 4 PDU is called a…",
    ["datagram", "segment", "frame", "bit stream"],
    "Slide 19: segment (TCP) / datagram (UDP).");
  mcq(19, 'm', "The PDU at Layers 7, 6 and 5 is called…",
    ["data / message", "segment / datagram", "packet", "frame"],
    "Slide 19.");
  mcq(19, 'h', "Which PDU contains [ETH header] + [IP] + [TCP] + payload + [FCS]?",
    ["Frame", "Packet", "Segment", "Data"],
    "Slide 19: the Layer 2 frame wraps everything above it and adds the FCS trailer.");
  mcq(19, 'm', "What is the correct order of PDUs from Layer 4 down to Layer 1?",
    ["Segment → Packet → Frame → Bits", "Packet → Segment → Bits → Frame", "Frame → Packet → Segment → Bits", "Bits → Frame → Packet → Segment"],
    "Slide 19.");
  // TCP/IP (p20-22)
  mcq(20, 'e', "The TCP/IP model is a practical, commercial architecture developed by…",
    ["DARPA", "ISO", "IEEE", "the ITU"],
    "Slide 20.");
  mcq(20, 'm', "Which model powers today's global Internet?",
    ["TCP/IP", "OSI", "The postal model", "The mesh model"],
    "Slide 20.");
  mcq(21, 'm', "Why are the 7 OSI layers merged into 4 layers in TCP/IP?",
    ["Software applications handle presentation and sessions internally", "The Physical layer is not needed because TCP/IP is software", "TCP/IP has no Transport layer, so TCP and UDP run elsewhere", "Routers replace the Network layer, so it can be removed"],
    "Slide 21.");
  mcq(21, 'm', "The TCP/IP Application layer is described as a “3 in 1” layer because it covers the OSI…",
    ["Application, Presentation and Session layers", "Transport, Network and Data Link layers", "Network, Data Link and Physical layers", "Application, Transport and Network layers"],
    "Slide 21.");
  mcq(22, 'm', "In the OSI vs TCP/IP mapping, the OSI Data Link and Physical layers are merged into the TCP/IP…",
    ["Network Access layer", "Internet (Network) layer", "Transport layer", "Application layer"],
    "Slide 22.");
  mcq(22, 'm', "Which TCP/IP layer handles IPv4, IPv6, ICMP, routing and addressing?",
    ["Internet layer", "Network Access layer", "Transport layer", "Application layer"],
    "Slide 22.");
  mcq(22, 'h', "Which OSI layer maps to the TCP/IP Transport layer with no merging?",
    ["Transport (Layer 4)", "Session (Layer 5)", "Network (Layer 3)", "Data Link (Layer 2)"],
    "Slide 22: TCP and UDP, end-to-end, ports.");
  mcq(22, 'm', "Ethernet, Wi-Fi, MAC addresses, copper and fiber all belong to the TCP/IP…",
    ["Network Access layer", "Internet (Network) layer", "Application layer", "Transport layer"],
    "Slide 22.");
  mcq(25, 'm', "Which statement compares OSI and TCP/IP correctly?",
    ["OSI is a theoretical 7-layer framework; TCP/IP is a practical 4-layer Internet suite", "OSI is the practical 4-layer Internet suite; TCP/IP is a theoretical framework", "Both models have exactly 7 layers, but they use different names for them", "TCP/IP has more layers than OSI because it adds an Internet layer"],
    "Slide 25.");
  // Addressing levels (p23)
  mcq(23, 'm', "Which address identifies the running software process on the destination host?",
    ["Port number", "IP address", "MAC address", "URL"],
    "Slide 23.");
  mcq(23, 'm', "Which address identifies the local physical network interface card for Layer 2 switching?",
    ["MAC address", "IP address", "Port number", "Domain name"],
    "Slide 23.");
  mcq(23, 'm', "Which address identifies the global host location across subnets for path routing?",
    ["Logical IP address", "Physical MAC address", "Transport port", "Application URI"],
    "Slide 23.");
  mcq(23, 'e', "Which of these is an example of a MAC address?",
    ["00:1A:2B:3C:4D:5E", "192.168.1.100", "Port 443", "https://www.tiu.edu.iq"],
    "Slide 23.");
  mcq(23, 'e', "Which of these is an example of a logical IPv4 address?",
    ["192.168.1.100", "00:1A:2B:3C:4D:5E", "Port 80", "GZIP"],
    "Slide 23.");
  mcq(23, 'm', "A URL or domain name is an address at which level?",
    ["Application", "Transport", "Logical (IP)", "Physical (MAC)"],
    "Slide 23: Application URI identifies an application resource or user service.");
  mcq(23, 'h', "Which row of the addressing table is correctly matched?",
    ["Transport port: Segment/Datagram: Port 443", "Physical MAC: Packet: 192.168.1.100 (IPv4)", "Logical IP: Frame: 00:1A:2B:3C:4D:5E", "Application URI: Segment/Datagram: Port 80"],
    "Slide 23.");
  mcq(13, 'h', "A 48-bit MAC address is written as 12 hexadecimal digits. How many bytes is that?",
    ["6", "4", "12", "48"],
    "48 bits ÷ 8 = 6 bytes, the six pairs in 00:1A:2B:3C:4D:5E.");
  // Critical thinking (p24)
  mcq(24, 'm', "At which highest layer does a standard Ethernet switch operate?",
    ["Layer 2 (Data Link)", "Layer 1 (Physical)", "Layer 3 (Network)", "Layer 4 (Transport)"],
    "Slide 24: it inspects destination MAC addresses in frame headers.");
  mcq(24, 'm', "At which highest layer does a router operate?",
    ["Layer 3 (Network)", "Layer 2 (Data Link)", "Layer 4 (Transport)", "Layer 7 (Application)"],
    "Slide 24: it inspects destination IP addresses in packet headers.");
  mcq(24, 'm', "If a physical cable is unplugged, which layer fails first?",
    ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 4 (Transport)", "Layer 7 (Application)"],
    "Slide 24.");
  mcq(24, 'h', "After the cable is unplugged, which sequence describes what happens to the upper layers?",
    ["L2 loses link → L3 routing drops → L4 TCP times out → browser shows “No Internet”", "L7 fails first → L4 retries the connection → L3 reroutes the packets → L1 recovers the cable by itself", "Only Layer 1 is affected; all upper layers keep working normally", "L3 routing drops first → L1 fails → L2 recovers the link"],
    "Slide 24.");
  mcq(24, 'h', "Why does a router need to look at the packet header rather than only the frame header?",
    ["It forwards using the destination IP address in the packet header", "It forwards using the destination MAC address in the frame only", "It only regenerates raw bits and repeats them out of all ports", "It reads the port numbers to choose the receiving application"],
    "Slide 24.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(6, 'e', "[[Modularity]] means that modifying one layer does not break the others.", "Slide 6.");
  fill(6, 'm', "[[Interoperability]] enables multi-vendor hardware and software to work together.", "Slide 6.");
  fill(6, 'm', "Each layer provides services to the layer [[above]] and receives services from the layer [[below]].", "Slide 6.");
  fill(9, 'e', "OSI stands for Open Systems [[Interconnection]].", "Slide 9.");
  fill(9, 'm', "The OSI model was established by [[ISO|international organization for standardization]] in 1984.", "Slide 9.");
  fill(9, 'm', "The OSI model is a [[7|seven]]-layer theoretical benchmark framework.", "Slide 9.");
  fill(10, 'm', "At the sender, data passes down the layers by [[encapsulation]]; at the receiver it passes up by [[decapsulation]].", "Slide 10.");
  fill(11, 'e', "The [[Physical]] layer transmits raw, unstructured bit streams over the physical medium.", "Slide 11.");
  fill(12, 'h', "In [[NRZ|non-return-to-zero|non return to zero]] encoding, a HIGH voltage means logic 1 and a LOW voltage means logic 0.", "Slide 12.");
  fill(13, 'e', "The Data Link layer transforms raw bits into structured [[frames|frame]].", "Slide 13.");
  fill(13, 'm', "A MAC address is a [[48]]-bit address burned into the NIC.", "Slide 13.");
  fill(13, 'm', "The Data Link layer detects errors using the Frame Check Sequence, written as [[FCS|frame check sequence]].", "Slide 13.");
  fill(13, 'h', "The two Data Link sublayers are [[LLC|logical link control]] and [[MAC|media access control]].", "Slide 13.", { set: true });
  fill(13, 'h', "A Layer 2 switch stores MAC addresses in its [[CAM]] table.", "Slide 13.");
  fill(15, 'e', "The [[Network]] layer delivers packets from source to destination across multiple subnets.", "Slide 15.");
  fill(15, 'm', "IPv4 addresses are [[32]] bits long and IPv6 addresses are [[128]] bits long.", "Slide 15.");
  fill(15, 'm', "The ping utility uses the [[ICMP|internet control message protocol]] protocol.", "Slide 15.");
  fill(16, 'e', "The [[Transport]] layer provides end-to-end, process-to-process delivery of segments.", "Slide 16.");
  fill(16, 'm', "Port numbers are [[16]]-bit integers, for example port 80 or port 443.", "Slide 16.");
  fill(16, 'm', "[[TCP|transmission control protocol]] is connection-oriented and reliable, while [[UDP|user datagram protocol]] is connectionless and fast.", "Slide 16.");
  fill(16, 'h', "The TCP 3-way handshake is SYN, [[SYN-ACK|syn ack|synack]], then ACK.", "Slide 16.");
  fill(17, 'm', "The [[Session]] layer handles session setup, maintenance, dialogue control and checkpoint recovery.", "Slide 17.");
  fill(17, 'm', "The [[Presentation]] layer handles formatting, encryption and compression.", "Slide 17.");
  fill(17, 'm', "At the Presentation layer, encryption uses [[SSL/TLS|tls|ssl|ssl tls]] and compression uses GZIP.", "Slide 17.");
  fill(19, 'm', "The PDU at Layer 4 is a segment for TCP and a [[datagram]] for UDP.", "Slide 19.");
  fill(19, 'm', "At Layer 1 the PDU is raw [[bits|bit]] encoded as signals.", "Slide 19.");
  fill(20, 'e', "The TCP/IP model was developed by [[DARPA]].", "Slide 20.");
  fill(22, 'h', "In TCP/IP, the OSI Network layer corresponds to the [[Internet]] layer.", "Slide 22.");
  fill(22, 'h', "In TCP/IP, the OSI Data Link and Physical layers are merged into the [[Network Access|network access layer]] layer.", "Slide 22.");
  fill(23, 'm', "A [[port]] number identifies the running software process on the destination host.", "Slide 23.");
  fill(24, 'm', "A standard Ethernet switch operates at Layer [[2|two]] because it inspects destination MAC addresses.", "Slide 24.");
  fill(24, 'm', "A router operates at Layer [[3|three]] because it inspects destination IP addresses.", "Slide 24.");

  /* ---------- Section C: true / false ---------- */
  tf(6, 'e', "In a layered architecture, modifying one layer breaks all the other layers.", false, "False. Modularity: modifying one layer does not break the others.");
  tf(9, 'e', "The OSI model was established by ISO.", true, "True. In 1984.");
  tf(9, 'm', "The OSI model is the practical protocol suite that runs today's Internet.", false, "False. OSI is theoretical; TCP/IP runs the Internet.");
  tf(10, 'm', "Encapsulation happens at the sender as data moves down from Layer 7 to Layer 1.", true, "True. Decapsulation happens at the receiver going up.");
  tf(11, 'm', "The Physical layer understands IP addresses and frames.", false, "False. It only transmits raw, unstructured bits.");
  tf(13, 'e', "The Data Link layer uses MAC addresses.", true, "True. 48-bit addresses burned into the NIC.");
  tf(13, 'm', "The LLC sublayer controls hardware access to the cable or air.", false, "False. That is the MAC sublayer; LLC interfaces with the Network layer.");
  tf(15, 'e', "Routers are the primary hardware of the Network layer.", true, "True. Routers and Layer 3 switches.");
  tf(15, 'm', "An IPv6 address is 32 bits long.", false, "False. IPv6 is 128 bits; IPv4 is 32 bits.");
  tf(16, 'm', "UDP is connection-oriented and uses a 3-way handshake.", false, "False. TCP does that; UDP is connectionless.");
  tf(16, 'm', "Port numbers identify the process that should receive the data.", true, "True. Slides 16 and 23.");
  tf(17, 'm', "Encryption with SSL/TLS is a Presentation layer function.", true, "True. Slide 17.");
  tf(17, 'h', "Checkpoint recovery is a function of the Application layer.", false, "False. It is a Session layer function.");
  tf(19, 'm', "At Layer 3 the PDU is called a frame.", false, "False. It is a packet; the frame is the Layer 2 PDU.");
  tf(20, 'e', "The TCP/IP model was developed by DARPA.", true, "True. Slide 20.");
  tf(21, 'm', "The TCP/IP Application layer covers the OSI Application, Presentation and Session layers.", true, "True. A “3 in 1” layer.");
  tf(24, 'm', "A standard Ethernet switch's highest layer is Layer 3.", false, "False. It works at Layer 2, using MAC addresses.");
  tf(24, 'h', "When a cable is unplugged, Layer 1 fails first and the upper layers then fail one after another.", true, "True. L2 loses link, L3 routing drops, L4 TCP times out, L7 shows No Internet.");

  /* ---------- In the instructor's style (Types 1-3: long technical stems, definitional blanks, swapped-fact statements) ---------- */
  mcq(13, 'm', "Which Layer 2 Protocol Data Unit (PDU) header component contains the physical source and destination addresses responsible for hop-by-hop delivery across a single network segment?",
    ["MAC frame header", "IP header", "TCP segment header", "Physical bit stream"],
    "Slides 13-14 and 23: the frame header carries the source and destination MAC addresses (the instructor's sample question).");
  mcq(17, 'h', "A banking website encrypts its pages with TLS and compresses them with GZIP before sending them. Which OSI layer is responsible for both operations?",
    ["Presentation", "Application", "Session", "Transport"],
    "Slide 17: formatting, encryption (SSL/TLS) and compression (GZIP) are Presentation layer duties.");
  mcq(16, 'h', "A live video stream prefers speed over guaranteed delivery and does not set up a connection first. Which transport protocol fits this description?",
    ["UDP", "TCP", "ICMP", "ARP"],
    "Slide 16: UDP is connectionless, fast and low-overhead.");
  mcq(22, 'h', "An engineer troubleshooting Wi-Fi links and MAC addressing problems is working in which layer of the TCP/IP model?",
    ["Network Access layer", "Internet (Network) layer", "Transport layer", "Application layer"],
    "Slide 22: Ethernet, Wi-Fi, MAC, copper and fiber belong to Network Access.");
  mcq(15, 'h', "A packet must travel from a laptop in one subnet to a server several networks away. Which OSI layer is responsible for choosing the path?",
    ["Network", "Data Link", "Transport", "Physical"],
    "Slide 15: path determination and routing.");
  fill(10, 'm', "The process of uncovering control headers as a data unit ascends from Layer 1 up to Layer 7 of the OSI model is termed [[decapsulation]].", "Slide 10 (the instructor's sample blank).");
  fill(16, 'h', "The SYN, SYN-ACK, ACK exchange that TCP uses to set up a connection is called the [[3-way handshake|three-way handshake|three way handshake|3 way handshake]].", "Slide 16.");
  fill(6, 'm', "Breaking complex networking tasks into independent modules, each with a well-defined function, is called protocol [[layering]].", "Slide 6.");
  fill(9, 'h', "The theoretical seven-layer benchmark framework established by ISO in 1984 is the [[OSI|osi model|open systems interconnection]] reference model.", "Slide 9.");
  tf(19, 'h', "At the Transport layer the PDU is called a frame, while at the Data Link layer it is called a segment.", false, "False. Swapped: Layer 4 = segment, Layer 2 = frame.");
  tf(24, 'h', "A router operates at Layer 3 because it inspects destination IP addresses, while a standard switch operates at Layer 2 because it inspects destination MAC addresses.", true, "True. Slide 24.");
  tf(20, 'h', "The OSI model was developed by DARPA and powers today's Internet, while TCP/IP is a theoretical framework from ISO.", false, "False. Swapped: OSI is the theoretical ISO framework; TCP/IP came from DARPA and runs the Internet.");
  tf(17, 'h', "The Session layer handles encryption and compression, while the Presentation layer handles dialogue control and checkpoint recovery.", false, "False. Swapped: Presentation = encryption and compression; Session = dialogue control and checkpoint recovery.");

  exp([6, 19, 20, 21, 22], 'h', 5, "Explain the key architectural benefits of protocol layering in computer communication networks. Then, formulate a side-by-side structural drawing that maps the seven layers of the OSI Reference Model to the four layers of the TCP/IP Protocol Suite, clearly indicating the PDU names at each layer.",
    [["Benefits: complexity broken into independent modules; modularity (changing one layer does not break others); interoperability (multi-vendor equipment works together)", "modul", "interoperab", "independent"],
     ["Mapping: OSI Application, Presentation and Session → TCP/IP Application (3 in 1)", "3 in 1", "three in one", "presentation and session", "5 6 7"],
     ["Mapping: Transport → Transport; Network → Internet; Data Link + Physical → Network Access", "internet", "network access"],
     ["PDU names: data/message (L7-5), segment/datagram (L4), packet (L3), frame (L2), bits (L1)", "segment", "packet", "frame", "bits"],
     ["Labeled drawing: OSI 7 layers on one side, TCP/IP 4 layers on the other, with the PDU name beside each level","labeled drawing","labelled drawing","drawing","diagram"]],
    "Protocol layering breaks complex networking into independent modules, each with a well-defined function that serves the layer above and uses the layer below. Its benefits are reduced complexity, modularity (changing one layer does not break the others) and interoperability (hardware and software from different vendors work together). Mapping: the OSI Application, Presentation and Session layers merge into the TCP/IP Application layer (3 in 1), because applications handle presentation and sessions internally; the OSI Transport layer maps to the TCP/IP Transport layer; the OSI Network layer maps to the Internet layer; and the OSI Data Link and Physical layers merge into Network Access. PDU names: data/message at Layers 7-5, segment (TCP) or datagram (UDP) at Layer 4, packet at Layer 3, frame at Layer 2 and bits at Layer 1. Labeled drawing: the seven OSI layers in one column and the four TCP/IP layers in the next, joined at matching levels, with the PDU name written beside each level.",
    { sec: 'E', figure: 'osiTcpip' });
  exp([13, 14, 15, 16, 19], 'm', 5, "Categorize the PDUs of Layers 4, 3, 2 and 1, describe what each one contains, and draw a labeled diagram showing how the segment, packet and frame nest inside each other.",
    [["Layer 4 segment: TCP header with port and sequence numbers + data (a datagram for UDP)", "segment", "port", "datagram"],
     ["Layer 3 packet: IP header with source and destination IP addresses + the segment", "packet", "ip header", "ip address"],
     ["Layer 2 frame: header with MAC addresses + the IP packet as payload + FCS trailer", "frame", "fcs", "trailer"],
     ["Layer 1: raw bits encoded as signals", "bits", "signal"],
     ["Labeled drawing: segment inside the packet inside the frame, with the header, payload and trailer marked","labeled drawing","labelled drawing","drawing","diagram"]],
    "At Layer 4 the PDU is a segment (TCP) or datagram (UDP): a TCP header with source and destination port numbers and sequence numbers, followed by the data. At Layer 3 it is a packet: an IP header with the source and destination IP addresses, followed by the segment. At Layer 2 it is a frame: a header with the source and destination MAC addresses, the IP packet as payload, and an FCS trailer for error detection. At Layer 1 everything is sent as raw bits encoded as signals. Labeled drawing: the segment drawn inside the packet, and the packet inside the frame between the MAC header and the FCS trailer.",
    { sec: 'D', figure: 'framePacket' });
  exp([11, 13, 15, 24], 'h', 5, "Categorize a hub, a Layer 2 switch and a router by the highest OSI layer at which each operates. Explain what each device inspects or does with incoming data, and draw a labeled diagram of the layers each device understands.",
    [["Hub: Layer 1 (Physical); repeats raw bits out of all ports without reading any address", "layer 1", "repeat", "all ports"],
     ["Switch: Layer 2 (Data Link); reads the destination MAC address in the frame header", "layer 2", "mac"],
     ["Router: Layer 3 (Network); reads the destination IP address in the packet header to choose a path", "layer 3", "path", "rout"],
     ["A device that works at a higher layer also handles the layers below it", "below", "lower layer"],
     ["Labeled drawing: Layers 1-3 for each device, with the layers it understands filled in","labeled drawing","labelled drawing","drawing","diagram"]],
    "A hub works at Layer 1 (Physical): it repeats the raw bits it receives out of all ports without reading any address. A Layer 2 switch works up to the Data Link layer: it reads the destination MAC address in the frame header and forwards the frame to the right port. A router works up to Layer 3 (Network): it reads the destination IP address in the packet header and chooses the best path (routing) across networks. A device that works at a higher layer also handles the layers below it. Labeled drawing: three stacks of Layers 1-3 with Layer 1 filled for the hub, Layers 1-2 for the switch and Layers 1-3 for the router.",
    { sec: 'D', figure: 'devices' });

  /* ---------- Section D: categorization & illustration (Type 4) · Section E: explanation & structural mapping (Type 6) ---------- */
  exp([11, 13, 15, 16, 17], 'h', 5, "Identify the seven layers of the OSI model and describe the core responsibility of each.", [["Physical: transmits raw bits as electrical, light or radio signals; bit rate and clock sync", "raw bit", "bits", "voltage", "signal"],
     ["Data Link: builds frames, MAC addressing, error detection (FCS)", "frame", "mac", "fcs", "error"],
     ["Network: packet delivery across subnets, IP addressing and routing", "packet", "ip", "rout"],
     ["Transport: end-to-end process-to-process delivery of segments, ports, TCP/UDP", "segment", "port", "end to end", "tcp", "udp"],
     ["Session: session setup, maintenance, dialogue control, checkpoint recovery", "dialog", "checkpoint", "session setup"],
     ["Presentation: formatting, encryption (SSL/TLS), compression (GZIP)", "encrypt", "compress", "format"],
     ["Application: network services directly to user applications (HTTP, DNS, SMTP, FTP)", "http", "dns", "smtp", "user application", "services"]], "Layer 1 Physical transmits raw, unstructured bits as voltages, light pulses or radio waves and defines bit timing and clock synchronization. Layer 2 Data Link turns bits into frames, handles 48-bit MAC addressing and detects errors with the FCS. Layer 3 Network delivers packets from source to destination across subnets using IP addresses and routing. Layer 4 Transport provides end-to-end process-to-process delivery of segments using port numbers, with TCP (reliable) or UDP (fast). Layer 5 Session sets up and maintains sessions, controls dialogue and provides checkpoint recovery. Layer 6 Presentation handles formatting (ASCII/Unicode), encryption (SSL/TLS) and compression (GZIP). Layer 7 Application provides network services directly to user applications such as HTTP, HTTPS, DNS, SMTP and FTP.", { sec: 'E', need: 6 });
  exp([6, 7, 8], 'm', 5, "Explain the concept of protocol layering, its benefits and basic rules, using a real-world example.", [["Benefits: complexity broken into independent modules", "complex", "module"],
     ["Modularity (change one layer without breaking others) and interoperability (multi-vendor equipment works together)", "modular", "interoperab", "vendor"],
     ["Rules: each layer has a specific, well-defined function and serves the layer above / uses the layer below", "well defined", "above", "below", "specific"],
     ["Example: postal letter (content → envelope with address → truck/plane) or airline flight (symmetric steps)", "letter", "envelope", "postal", "airline", "flight", "baggage"]], "Protocol layering breaks complex networking into independent modules. Its benefits are reduced complexity, modularity (modifying one layer does not break the others) and interoperability (hardware and software from different vendors work together). The basic rules are that each layer performs a specific, well-defined function, and each layer provides services to the layer above and receives services from the layer below. Example: sending a letter. Layer 3 writes the message, Layer 2 puts it in an envelope with addresses, Layer 1 (truck or plane) carries it; the receiver reverses the steps (decapsulation). An airline trip works the same way: ticket, baggage, gate, takeoff, then the reverse on arrival.", { sec: 'E' });
  exp([23, 25], 'h', 5, "Compare the four addressing levels in TCP/IP: give the PDU, an example and the function of each.", [["Application URI/URL: data/message; e.g. https URL or domain name; identifies the application resource or user service", "url", "uri", "domain"],
     ["Transport port: segment/datagram; e.g. port 80/443; identifies the software process on the destination host", "port", "process"],
     ["Logical IP address: packet; e.g. 192.168.1.100; identifies the host globally for routing across subnets", "192", "ip", "rout", "global"],
     ["Physical MAC address: frame; e.g. 00:1A:2B:3C:4D:5E; identifies the local NIC for Layer 2 switching", "mac", "nic", "switch", "00 1a"]], "Application URI: the PDU is data/message, the address is an https URL or domain name, and it identifies the application resource or user service. Transport port: the PDU is a segment or datagram, the address is a port such as 443 or 80, and it identifies the running software process on the destination host. Logical IP address: the PDU is a packet, the address is for example 192.168.1.100, and it identifies the host's global location across subnets for path routing. Physical MAC address: the PDU is a frame, the address is for example 00:1A:2B:3C:4D:5E, and it identifies the local network interface card for Layer 2 switching.", { sec: 'E' });
});
