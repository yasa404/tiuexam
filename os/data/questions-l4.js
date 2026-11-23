/* Lecture 4: Memory Management (PDF pages 1-36). Not used: pages 5, 8, 20 ("not required in the exam"). 1 KB = 1024 bytes (slide 23). */
EC.lecture(4, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;

  /* ---------- Section A: multiple choice ---------- */
  mcq(3, 'e', "The second most important hardware resource in the computer system, after the CPU, is the…",
    ["memory", "hard disk", "monitor", "keyboard"], "Slide 3.");
  mcq(3, 'm', "Why does the introduction of multi-tasking OSes increase the need for complex memory management?",
    ["As processes are swapped in and out of the CPU, their code and data must be swapped in and out of memory", "As processes are compiled one after another, their source code must be stored on a much larger disk drive", "As the number of users increases, every user needs a separate CPU and a separate operating system kernel", "As the computer starts up, the BIOS must keep the boot loader and the MBR in memory for all the processes"], "Slide 3.");
  mcq(4, 'e', "Main memory is also called…",
    ["Random Access Memory", "Cache Memory", "Virtual Memory", "Associative Memory"], "RAM.");
  mcq(4, 'e', "RAM speed is measured in…",
    ["nanoseconds", "milliseconds", "seconds", "minutes"], "Billionths of a second.");
  mcq(4, 'm', "Which storage can the CPU access directly?",
    ["Main memory and registers", "Main memory and SSD", "Registers and hard disk", "Backing store and cache"], "Slide 4.");
  mcq(6, 'e', "The small-sized volatile memory that provides high-speed data access to the processor and stores frequently used code and data is the…",
    ["cache memory", "main memory", "backing store", "page table"], "Slide 6.");
  mcq(6, 'm', "Which is the fastest of these memories?",
    ["Cache memory", "RAM", "SSD", "Magnetic disk"], "Slide 6.");
  // Linking p7
  mcq(7, 'e', "When system libraries and program code are combined by the loader into the binary program image, it is…",
    ["static linking", "dynamic linking", "load time binding", "segmentation"], "Slide 7.");
  mcq(7, 'e', "When linking of the routines to the main program is postponed until execution time, it is…",
    ["dynamic linking", "static linking", "compile time binding", "compaction"], "Slide 7.");
  mcq(7, 'm', "A stub is a small piece of code used to…",
    ["point to the address of the routine in the shared library, and execute the routine", "combine all the system libraries and the program code into one big binary program image", "move a process temporarily out of the memory to the backing store and back", "translate the logical address of a page into the physical address of a frame"], "Slide 7.");
  mcq(7, 'm', "Which is NOT an advantage of dynamic linking and shared libraries?",
    ["Larger binary program image", "Less program loading time", "Less memory space", "Less disk space to store binaries"], "The other three are the advantages.");
  // Binding p9
  mcq(9, 'm', "In compile time binding, the compiler generates…",
    ["absolute code with actual physical addresses", "relocatable code relative to the program start", "shared code that is read-only for all processes", "code that can be moved during the execution"], "Like MSDOS .com programs.");
  mcq(9, 'm', "Relocatable code, which references addresses relative to the start of the program, is generated in…",
    ["load time binding", "compile time binding", "execution time binding", "static linking"], "Slide 9.");
  mcq(9, 'm', "Which address binding scheme is implemented by most modern OSes?",
    ["Execution time binding", "Compile time binding", "Load time binding", "Static binding"], "Slide 9.");
  mcq(9, 'h', "A program must be movable in memory while it is executing. Which binding scheme does it need?",
    ["Execution time binding", "Load time binding", "Compile time binding", "Any of the three schemes"], "Binding must be delayed until execution time.");
  // Approaches p10-12
  mcq(10, 'e', "Allocating, freeing, and re-organizing memory to optimize the available memory is called…",
    ["memory management", "address binding", "page replacement", "process migration"], "Slide 10.");
  mcq(10, 'm', "Which is NOT one of the five memory management approaches?",
    ["Load Balancing", "Segmentation", "Swapping", "Single Contiguous Model"], "The fifth and fourth are Single Contiguous and Partition.");
  mcq(11, 'e', "In the Single Contiguous Model, the RAM is occupied by…",
    ["one process at a time", "two processes at a time", "many processes at a time", "pages of all processes"], "Slide 11.");
  mcq(11, 'm', "In the Single Contiguous Model, the process memory size is restricted by the…",
    ["RAM size", "disk size", "page size", "cache size"], "Slide 11.");
  mcq(12, 'e', "In Partition with Contiguous Allocation, each process should be contained in…",
    ["a single contiguous partition of memory", "many non-contiguous frames of the memory", "different segments of the main memory", "the backing store until its execution"], "Slide 12.");
  mcq(12, 'm', "In Partition with Contiguous Allocation, main memory is usually partitioned into…",
    ["resident operating system area and user processes area", "pages area and frames area of the same fixed size", "cache memory area and CPU registers area of the processor", "shared code area and private data area"], "Slide 12.");
  mcq(12, 'm', "Which of these is NOT in the partition table according to the slides?",
    ["The page number and the offset", "The base address of a process", "The size of the process", "A process identifier"], "Slide 12.");
  mcq(13, 'h', "Look at the partition table. A new process needs 40k of contiguous memory. What happens?",
    ["It cannot be loaded, because the free partition is only 30k", "It is loaded at address 180k, because that partition is free", "It is loaded at address 120k, because it needs less than 60k", "It is loaded partly at 180k and partly inside process 1"], "Only 30k is free.", { qfig: 'partitionTable' });
  mcq(14, 'm', "Which is NOT a limitation of Partition with Contiguous Allocation?",
    ["Only one process can be in RAM at a time", "Each process needs to be entirely in RAM", "External fragmentation", "The size of the process is limited by RAM size"], "Multiple processes can occupy the RAM.");
  // Fragmentation p15-16, 22
  mcq(15, 'e', "Total memory space exists to satisfy a request, but it is not contiguous. This is…",
    ["external fragmentation", "internal fragmentation", "thrashing", "a memory leak"], "Slide 15.");
  mcq(16, 'e', "Shuffling memory contents to place all free memory together in one large block is called…",
    ["compaction", "swapping", "segmentation", "linking"], "Slide 16.");
  mcq(16, 'm', "Compaction is possible only if…",
    ["relocation is dynamic, and is done at execution time", "relocation is static, and is done at compile time", "the page size is a power of 2 and it is very large", "the memory is occupied by one process at a time"], "Slide 16.");
  mcq(16, 'm', "Compaction is used to reduce…",
    ["external fragmentation", "internal fragmentation", "page faults", "the page table size"], "Slide 16.");
  mcq(22, 'e', "Memory is divided into fixed partitions and the allocated memory is slightly larger than the requested memory. The size difference is…",
    ["internal fragmentation", "external fragmentation", "a page fault", "compaction"], "Slide 22.");
  mcq(22, 'm', "A 3 MB program is loaded into a fixed partition of 4 MB. How much is the internal fragmentation?",
    ["1 MB", "3 MB", "4 MB", "7 MB"], "4 − 3 = 1 MB unused.");
  // Swapping, segmentation p17, 19
  mcq(17, 'e', "A process can be moved temporarily out of memory to a backing store and then brought back for continued execution. This technique is…",
    ["swapping", "compaction", "segmentation", "paging"], "Slide 17.");
  mcq(17, 'm', "A fast disk large enough to accommodate copies of all memory images for all processes is the…",
    ["backing store", "cache memory", "page table", "partition table"], "Slide 17.");
  mcq(17, 'm', "In modern operating systems, the swapping procedures became part of…",
    ["virtual memory", "cache memory", "static linking", "the boot loader"], "Slide 17.");
  mcq(19, 'm', "Segmentation loads the segments of a process into…",
    ["different non-contiguous addressed spaces in memory", "one single contiguous partition of the main memory", "fixed-sized blocks that are all of the same size", "the cache memory next to the processor registers"], "Slide 19.");
  mcq(19, 'm', "Each row in the segment descriptor table refers to…",
    ["one particular segment", "one particular page", "one particular process", "one free partition"], "Slide 19.");
  // Paging p21
  mcq(21, 'e', "In paging, physical memory is divided into fixed-sized blocks called…",
    ["frames", "pages", "segments", "partitions"], "Slide 21.");
  mcq(21, 'e', "In paging, logical memory is divided into blocks called…",
    ["pages", "frames", "segments", "stubs"], "Slide 21.");
  mcq(21, 'm', "Paging eliminates … but it still suffers from …",
    ["external fragmentation … internal fragmentation", "internal fragmentation … external fragmentation", "thrashing … compaction", "page faults … memory leaks"], "Slide 21.");
  mcq(21, 'm', "Which page size is NOT possible according to the paging rules?",
    ["3000 bytes", "512 bytes", "4096 bytes", "16 MB"], "A page size is a power of 2.");
  mcq(21, 'h', "The page size is 4 KB and the process size is 13 KB. How many free frames are needed?",
    ["4", "3", "13", "52"], "13 / 4 = 3.25, so 4 frames.");
  mcq([21, 22], 'h', "The page size is 2 KB and the process size is 9 KB. What is the internal fragmentation?",
    ["1 KB", "9 KB", "2 KB", "0 KB"], "5 frames = 10 KB; 10 − 9 = 1 KB.");
  mcq([21, 22], 'h', "The page size is 1 KB and the process size is 3,000 bytes. What is the internal fragmentation?",
    ["72 bytes", "1,024 bytes", "48 bytes", "952 bytes"], "3 frames = 3,072 bytes; 3,072 − 3,000 = 72.");
  mcq(23, 'e', "In the binary system, 1 kilobyte is equal to…",
    ["1024 bytes", "1000 bits", "512 bytes", "2048 bytes"], "2 to the power 10.");
  // Page table p24-27
  mcq(24, 'e', "The table used to look up what frame a particular page is stored in is the…",
    ["page table", "partition table", "segment descriptor table", "process control block"], "Slide 24.");
  mcq(24, 'm', "The special fast-lookup hardware cache that solves the two memory access problem is the…",
    ["associative memory", "virtual memory", "main memory (RAM)", "backing store"], "Slide 24.");
  mcq(24, 'm', "What is the effect of a large page size?",
    ["Internal fragmentation increases", "The page table size increases", "External fragmentation increases", "The number of frames increases"], "Slide 24.");
  mcq(24, 'm', "What is the effect of a small page size?",
    ["The size of the page table increases", "The internal fragmentation increases", "The logical address space decreases", "The cache memory becomes slower"], "Slide 24.");
  mcq(24, 'm', "A multi-level table which breaks up the virtual address into multiple page tables is used in…",
    ["hierarchical paging", "basic paging", "segmentation", "a single shared page"], "Slide 24.");
  mcq(25, 'm', "Look at the paging diagram. In which frame is page 2 stored?",
    ["Frame 3", "Frame 2", "Frame 4", "Frame 7"], "Page table entry 2 is 3.", { qfig: 'pagingQ' });
  mcq(26, 'm', "One copy of which code can be shared among processes, such as text editors and compilers?",
    ["Read-only code", "Read-write code", "Private code", "Absolute code"], "Slide 26.");
  mcq(26, 'm', "Sharing of which pages is useful for inter-process communication?",
    ["Read-write pages", "Read-only pages", "Private pages", "Free pages"], "Slide 26.");
  mcq(26, 'h', "Where can the pages of the private code and data appear?",
    ["Anywhere in the logical address space", "Only in the first frame of memory", "Only in the pages of the shared code", "Only on the backing store drive"], "Slide 26.");
  mcq(27, 'h', "Three processes run the same editor (ed 1, ed 2, ed 3) with shared code, and each one has one private data page. How many frames are used?",
    ["6", "12", "9", "4"], "3 shared + 3 private data = 6.");
  // Virtual memory p28-30
  mcq(28, 'e', "Virtual memory increases the available memory of the computer by using…",
    ["hard disk space", "cache memory", "CPU registers", "more RAM chips"], "Slide 28.");
  mcq(28, 'm', "Data stored in virtual memory must be … in order to be used.",
    ["mapped back to real memory", "deleted from the hard disk", "copied to the page table", "compiled again by the loader"], "The hard drive is much slower than RAM.");
  mcq(28, 'm', "Which is NOT a reason why most real processes do not need all their pages?",
    ["The page size is always larger than the process", "Error handling code is needed only when an error occurs", "Only a small fraction of the arrays are actually used", "Certain routines of programs are rarely used"], "Slide 28.");
  mcq(29, 'e', "The address generated by the process executing currently on the CPU is the…",
    ["logical address", "physical address", "frame address", "base address"], "Also called virtual address.");
  mcq(29, 'm', "The address seen by the memory management unit, where actual code and data are loaded, is the…",
    ["physical address", "logical address", "virtual address", "relative address"], "Slide 29.");
  mcq(29, 'm', "In virtual memory, the logical address space can be … the physical address space.",
    ["much larger than", "only equal to", "only smaller than", "never bound to"], "Slide 29.");
  mcq(30, 'e', "The hardware device that at run time maps virtual to physical address is the…",
    ["MMU", "CPU", "BIOS", "SSD"], "Memory-Management Unit.");
  mcq(30, 'e', "The trap raised when a running process accesses a page that is not currently in physical RAM is a…",
    ["page fault", "page replacement", "memory leak", "thrashing"], "Slide 30.");
  mcq(30, 'm', "Finding some page in memory, which is not really in use, in order to page it out is called…",
    ["page replacement", "page fault", "compaction", "hierarchical paging"], "Slide 30.");
  mcq(30, 'm', "A process does not have enough pages, its page-fault rate is very high, and it is busy swapping pages in and out. This is…",
    ["thrashing", "a memory leak", "compaction", "external fragmentation"], "Slide 30.");
  mcq(30, 'm', "An application uses more RAM than it normally does, which slows down the system. This is a…",
    ["memory leak", "page fault", "page replacement", "context switch"], "Slide 30.");
  mcq(31, 'h', "In the general layout of virtual memory, what lies between the virtual memory pages and the physical memory?",
    ["The MMU", "The backing store", "The kernel", "The cache"], "Slide 31: logical address → MMU → physical address.");
  // Optimization p32-36
  mcq(33, 'm', "Why does adding more RAM improve performance?",
    ["Windows is less likely to move program data to the page file on disk", "Windows will increase the page size of every process automatically", "Windows will stop all of the device drivers that need to be updated again", "Windows can run every application directly from the hard disk drive"], "Slide 33.");
  mcq(33, 'm', "Which counter is added in Performance Monitor to watch the available memory?",
    ["Memory → Available MBytes", "Processor → Available MBytes", "Memory → Page Table Size", "Disk → Free MBytes"], "Slide 33.");
  mcq(33, 'm', "Which is NOT one of the Windows monitoring tools used to watch the available memory?",
    ["Windows Update", "Task Manager", "Resource Monitor", "Performance Monitor"], "Slide 33.");
  mcq(34, 'm', "Where can startup apps that are not required be disabled?",
    ["Task Manager → Startup apps tab", "Resource Monitor → Memory tab", "Windows Update → Optional updates", "Performance Monitor → Counters"], "Slide 34.");
  mcq(34, 'm', "In Task Manager, a process whose memory use keeps growing may have a…",
    ["memory leak", "page table", "shared page", "hard affinity"], "Slide 34.");
  mcq(35, 'e', "Applications and the page file should be kept on…",
    ["an SSD", "a hard disk (HDD)", "the cache memory", "a network drive"], "The fastest drive.");
  mcq(36, 'm', "Moving some of the workload of a server machine to another server, or scaling out to cloud servers, is called…",
    ["offloading extra workload", "reducing memory demand", "adding physical memory", "updating device drivers"], "Slide 36.");
  mcq(36, 'e', "Updated device drivers often…",
    ["fix bugs and improve performance", "increase the size of the RAM", "remove the need for any paging file", "create new memory leaks"], "Slide 36.");

  /* ---------- Section C: true / false ---------- */
  tf(4, 'e', "Main memory and registers are the only storage that CPU can access directly.", true, "Slide 4.", { qb: 'Q4' });
  tf(21, 'e', "In Paging, physical address space of a process should be contiguous.", false, "It can be noncontiguous.", { qb: 'Q29' });
  tf(29, 'm', "In virtual memory, logical address space can therefore be much larger than physical address space.", true, "Slide 29.", { qb: 'Q46' });
  tf(29, 'm', "There is a global system-wide page table for all processes.", false, "Every process has its own page table.", { qb: 'Q47' });
  tf(6, 'm', "Cache memory is a large non-volatile memory used to store all files of the user.", false, "It is small-sized and volatile.");
  tf(7, 'm', "In static linking, linking of the routines is postponed until execution time.", false, "That is dynamic linking.");
  tf(7, 'm', "Dynamic linking needs less disk space to store binaries.", true, "Slide 7.");
  tf(9, 'm', "Compile time binding generates absolute code that contains actual physical addresses.", true, "Slide 9.");
  tf(11, 'e', "In the Single Contiguous Model, many processes share the RAM at the same time.", false, "One process at a time (no sharing).");
  tf(12, 'm', "Partition with Contiguous Allocation is a slight improvement over the Single Contiguous Model.", true, "Slide 12.");
  tf(15, 'm', "External fragmentation means the total free memory is not enough for the request.", false, "The total exists, but it is not contiguous.");
  tf(16, 'm', "Compaction is possible only if relocation is static.", false, "Only if it is dynamic, done at execution time.");
  tf(17, 'm', "In swapping, a process is moved temporarily to a backing store and then brought back into memory.", true, "Slide 17.");
  tf(19, 'm', "The segment descriptor table is stored in memory.", true, "Slide 19.");
  tf(21, 'm', "Paging completely removes both external and internal fragmentation.", false, "It still suffers from internal fragmentation.");
  tf(21, 'e', "The page size is a power of 2.", true, "Slide 21.");
  tf(24, 'm', "A small page size increases the size of the page table.", true, "Slide 24.");
  tf(24, 'm', "The page table translates physical addresses to logical addresses.", false, "It translates logical to physical addresses.");
  tf(26, 'm', "Each process keeps a separate copy of the private code and data.", true, "Slide 26.");
  tf(29, 'm', "The user process always sees the real physical addresses.", false, "It deals with logical addresses.");
  tf(30, 'm', "The MMU is a hardware device.", true, "Slide 30.");
  tf(30, 'm', "Thrashing happens when a process has too many pages in memory.", false, "When it does not have enough pages.");
  tf(33, 'm', "Moving program data to the page file on disk improves the performance.", false, "It is a real performance killer.");
  tf(34, 'm', "Restarting the computer occasionally clears accumulated memory use.", true, "Slide 34.");
  tf(35, 'm', "The page file should be kept on a hard disk (HDD) rather than an SSD.", false, "On the fastest drive: an SSD.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(4, 'e', "RAM speed is measured in [[nanoseconds|nanosecond|ns]], while magnetic and SSD storage is measured in [[milliseconds|millisecond|ms]].", "Slide 4.", { qb: 'Q3' });
  fill(9, 'm', "The Address Binding Scheme used in modern OSes is [[execution time binding|execution time]].", "Slide 9.", { qb: 'Q9' });
  fill(11, 'm', "[[Single Contiguous Model|single contiguous]] is one of the most primitive ways of managing memory especially done for the older operating systems.", "Slide 11.", { qb: 'Q12' });
  fill(11, 'e', "In Single Contiguous Model RAM is occupied by [[one process at a time|one process|only one process|a single process]].", "Slide 11.", { qb: 'Q13' });
  fill(11, 'e', "In Single Contiguous Model process memory size is restricted by [[RAM size|the RAM size|size of RAM|RAM]].", "Slide 11.", { qb: 'Q14' });
  fill(12, 'm', "In Partition with Contiguous Allocation, the Partition Table would have [[base address|the base address|base address of a process]], [[size|size of the process|process size]], and [[process identifier|a process identifier|process id|pid]].", "Slide 12.", { set: true, qb: 'Q17' });
  fill(12, 'h', "In Partition with Contiguous Allocation Memory Management, when a process completes execution, the area in RAM that it holds will be [[de-allocated|deallocated|freed]] and the corresponding entry in the partition table will be [[free|freed]].", "Slide 12.", { qb: 'Q18' });
  fill(16, 'm', "Compaction is possible only if relocation is [[dynamic]], and is done at [[execution time|run time]].", "Slide 16.", { qb: 'Q21' });
  fill(19, 'm', "In Segment Descriptor Table each row refers to [[one particular segment|one segment|a particular segment|a segment]].", "Slide 19.", { qb: 'Q27' });
  fill(21, 'm', "Paging eliminates [[external fragmentation|external]], but it still suffers from [[internal fragmentation|internal]].", "Slide 21.", { qb: 'Q30' });
  fill(21, 'm', "In Paging, Page Size is a power of 2, usually between [[512 bytes|512 byte|512]] and [[16 Mbytes|16 MB|16 megabytes|16 mbyte]].", "Slide 21.", { qb: 'Q31' });
  fill(21, 'm', "In Paging, to load a process of size S where (N-1) pages < S < (N) pages, it is required to find [[N]] free frames to load the process.", "Slide 21.", { qb: 'Q32' });
  fill(24, 'm', "Associative Memory is a special fast-lookup hardware cache that can solve the [[two memory access|two memory accesses|two memory access problem]] problem if the page table is stored in main memory.", "Slide 24.", { qb: 'Q35' });
  fill(26, 'm', "In Shared Pages: one copy of [[read-only|readonly]] code shared pages can be shared among processes, while sharing of [[read-write|readwrite]] pages is useful for inter-process communication.", "Slide 26.", { qb: 'Q38' });
  fill(28, 'm', "Since the hard drive is much slower than the RAM, data stored in virtual memory must be [[mapped back to real memory|mapped to real memory|mapped back to real memory in order to be used|mapped back]].", "Slide 28.", { qb: 'Q42' });
  fill(29, 'e', "The user process deals with [[logical|virtual|logical address]] addresses.", "Slide 29.", { qb: 'Q45' });
  fill(33, 'm', "In Performance Monitor, the counter added to watch the available memory is [[Available MBytes|memory available mbytes|Memory → Available MBytes]].", "Memory → Available MBytes.", { qb: 'Q52' });
  fill(6, 'e', "The fastest memory in a computer is the [[cache|cache memory]].", "Slide 6.");
  fill(7, 'm', "The small piece of code that points to the address of the routine in the shared library is the [[stub]].", "Slide 7.");
  fill(9, 'm', "In load time binding, the compiler must generate [[relocatable|relocatable code]] code.", "Slide 9.");
  fill(9, 'm', "In compile time binding, the compiler generates [[absolute|absolute code]] code.", "Slide 9.");
  fill(12, 'm', "In Partition with Contiguous Allocation, main memory is partitioned into the resident [[operating system|os]] area and the user [[processes|process]] area.", "Slide 12.");
  fill(16, 'm', "[[Compaction]] is shuffling memory contents to place all free memory together in one large block.", "Slide 16.");
  fill(17, 'm', "A fast disk that holds copies of all memory images for all processes is the [[backing store]].", "Slide 17.");
  fill(21, 'e', "In paging, physical memory is divided into [[frames|frame]] and logical memory is divided into [[pages|page]].", "Slide 21.");
  fill(24, 'm', "A large page increases internal fragmentation, while a small page increases the size of the [[page table]].", "Slide 24.");
  fill(24, 'm', "A single page table is used in [[basic|basic paging]] paging, and a multi-level table is used in [[hierarchical|hierarchical paging]] paging.", "Slide 24.");
  fill(30, 'e', "The hardware device that at run time maps virtual to physical address is the [[MMU|memory management unit]].", "Slide 30.");
  fill(30, 'm', "A trap raised when a process accesses a page that is not currently in RAM is a [[page fault]].", "Slide 30.");
  fill(30, 'm', "When a process does not have enough pages and is busy swapping pages in and out, it is called [[thrashing]].", "Slide 30.");
  fill(36, 'm', "For server machines, moving some of the workload to another server is called [[offloading|offloading extra workload]] extra workload.", "Slide 36.");
  fill([21, 22], 'h', "The page size is 4 KB and the process size is 10 KB. The process needs [[3|three]] frames, and the internal fragmentation is [[2|two]] KB.", "3 × 4 = 12 KB; 12 − 10 = 2 KB.");

  /* ---------- Section D: define and list ---------- */
  def(3, 'm', 2, "Why the introduction of multi-tasking OSes increases the need for complex memory management?",
    [["As processes are swapped in and out of the CPU, their code and data must be swapped in and out of memory", "swapped in and out", "swapped", "swap"],
     ["All at high speeds and without interfering with any other processes", "high speed", "interfer"]],
    "Because as processes are swapped in and out of the CPU, so must their code and data be swapped in and out of memory, all at high speeds and without interfering with any other processes.", { qb: 'Q1' });
  def([4, 6], 'e', 2, "Define Main Memory, and Cache Memory.",
    [["Main memory (RAM): the area in which data is stored for quick access by the processor", "quick access", "area in a computer", "ram"],
     ["Cache: small-sized volatile memory with high-speed access that stores frequently used code and data", "small", "high speed", "frequently"]],
    "Main memory (RAM) is the area in a computer in which data is stored for quick access by the computer's processor. Cache memory is a small-sized type of volatile computer memory that provides high-speed data access to a processor and stores frequently used computer code and data.", { qb: 'Q2' });
  list(7, 'e', 3, "List the three advantages of Dynamic Linking?",
    [["Less program loading time", "loading", "load time"], ["Less memory space", "memory"], ["Less disk space to store binaries", "disk"]], { qb: 'Q6' });
  def(9, 'm', 3, "List and Define the three Address Binding Schemes of a Process.",
    [["Compile time binding: absolute code generated by the compiler, with actual physical addresses", "compile time", "absolute"],
     ["Load time binding: the compiler generates relocatable code, relative to the start of the program", "load time", "relocatable"],
     ["Execution time binding: delayed until execution time, so the program can be moved in memory during execution", "execution time", "delayed"]],
    "Compile time binding: the absolute code is generated by the compiler, containing actual physical addresses. Load time binding: the compiler must generate relocatable code, which references addresses relative to the start of the program. Execution time binding: binding is delayed until execution time, so the program can be moved around in memory during execution.", { qb: 'Q7' });
  def(7, 'e', 2, "Define stub.",
    [["A small piece of code", "small piece", "piece of code"],
     ["Points to the address of the routine in the shared library and executes the routine", "address of the routine", "points to", "shared library"]],
    "A stub is a small piece of code, used to point to the address of the routine in the shared library, and executes the routine.", { qb: 'Q8' });
  def(10, 'e', 2, "Define Memory Management.",
    [["Allocating, freeing, and re-organizing memory", "allocating", "freeing", "organizing", "allocate"],
     ["To optimize the available memory or make more memory available; keeps track of every memory location", "optimize", "more memory", "keeps track", "keep track"]],
    "Memory management is allocating, freeing, and re-organizing memory in a computer system to optimize the available memory or to make more memory available. It keeps track of every memory location.", { qb: 'Q10' });
  list(10, 'e', 5, "List the five Memory Management Approaches.",
    [["Single Contiguous Model", "single"], ["Partition with Contiguous Allocation", "partition"], ["Swapping", "swap"], ["Segmentation", "segment"], ["Paging", "paging"]], { qb: 'Q11' });
  def([11, 12], 'm', 3, "Define Partition with Contiguous Allocation Memory Management? Is it better than Single Contiguous Model?",
    [["Multiple processes occupy the RAM simultaneously", "multiple processes", "many processes", "simultaneous"],
     ["Each process is contained in a single contiguous partition of memory", "single contiguous partition", "contiguous partition", "one partition"],
     ["Yes: it is a slight improvement over the single contiguous model", "improvement", "yes", "better"]],
    "At any instant of time multiple processes can occupy the RAM simultaneously, but each process should be contained in a single contiguous partition of memory. Yes, it is a slight improvement over the single contiguous model.", { qb: 'Q15' });
  list(12, 'e', 2, "List the two memory parts in Partition with Contiguous Allocation Memory Management.",
    [["Resident operating system area", "operating system", "resident", "os area"], ["User processes area", "user"]], { qb: 'Q16' });
  list(14, 'm', 5, "List the Limitations of Partition with Contiguous Allocation.",
    [["Each process needs to be entirely in RAM", "entire", "fully in"], ["Allocation needs to be in contiguous memory", "contiguous"], ["External fragmentation", "external", "fragment"], ["Limit the size of the process by RAM size", "size"], ["Performance degradation", "performance", "degrad"]], { qb: 'Q19' });
  def([15, 16, 22], 'm', 4, "Define External Fragmentation, Internal Fragmentation, and Compaction and explain why it is used.",
    [["External: total memory space exists to satisfy a request, but it is not contiguous", "not contiguous", "non contiguous", "noncontiguous"],
     ["Internal: size difference when allocated memory is slightly larger than requested memory (fixed partitions)", "slightly larger", "larger than requested", "size difference", "fixed partition"],
     ["Compaction: shuffling memory contents to place all free memory together in one large block", "shuffling", "one large block", "together"],
     ["Compaction is used to reduce external fragmentation", "reduce external", "solution", "reduces external"]],
    "External fragmentation is the case when total memory space exists to satisfy a request, but it is not contiguous. Internal fragmentation is the size difference that happens when memory is divided into fixed partitions and the allocated memory is slightly larger than the requested memory. Compaction is shuffling memory contents to place all free memory together in one large block; it is used as a solution to reduce external fragmentation.", { qb: 'Q20' });
  def(17, 'm', 2, "Define Swapping, and Backing store.",
    [["Swapping: a process is moved temporarily out of memory to the backing store, then brought back for continued execution", "temporarily", "brought back", "out of memory"],
     ["Backing store: a fast disk large enough to accommodate copies of all memory images for all processes", "fast disk", "memory images", "large enough"]],
    "Swapping is a technique in which a process can be moved temporarily out of memory to a backing store, and then brought back into memory for continued execution. A backing store is a fast disk large enough to accommodate copies of all memory images for all processes, with direct access to them.", { qb: 'Q23' });
  def(17, 'm', 2, "What is the swapping procedures that are found on current operating systems?",
    [["The swapping procedures became part of something larger in modern operating systems", "became part", "part of", "modern"],
     ["Virtual Memory", "virtual memory", "virtual"]],
    "The swapping procedures in modern operating systems became part of Virtual Memory.", { qb: 'Q24' });
  def(19, 'm', 2, "Define Segmentation.",
    [["Segmenting processes (memory-management approach)", "segmenting", "dividing", "segments"],
     ["Loading them into different non-contiguous addressed spaces in memory with different segment address", "non contiguous", "noncontiguous", "segment address"]],
    "Segmentation is a memory-management approach that is implemented by segmenting processes and loading them into different non-contiguous addressed spaces in memory with different segment address.", { qb: 'Q26' });
  def([21, 24], 'h', 5, "Define Paging, Page Table, Associative Memory, Basic Paging, and Hierarchical Paging.",
    [["Paging: divide physical memory into frames and logical memory into pages of the same size", "frames", "same size"],
     ["Page table: used to look up what frame a page is stored in; translates logical to physical addresses", "look up", "translates", "what frame", "which frame"],
     ["Associative memory: special fast-lookup hardware cache", "fast lookup", "hardware cache"],
     ["Basic paging: a single page table (page number and offset)", "single page table", "offset", "one page table"],
     ["Hierarchical paging: a multi-level table that breaks the virtual address into multiple page tables", "multi level", "multilevel", "multiple page tables"]],
    "Paging is to divide physical memory into fixed-sized blocks called frames and divide logical memory into blocks of same size called pages. The page table is used to look up what frame a particular page is stored in; it translates logical to physical addresses. Associative memory is a special fast-lookup hardware cache that can solve the two memory access problem. Basic paging: a single page table which stores the page number and the offset. Hierarchical paging: a multi-level table which breaks up the virtual address into multiple page tables.", { qb: 'Q28' });
  def(24, 'm', 2, "Why Page size selection is critical?",
    [["A large page increases internal fragmentation", "internal fragmentation", "internal"],
     ["A small page size increases the size of the page table", "page table"]],
    "A large page will result in an increase of internal fragmentation, while a small page size will increase the size of the page table.", { qb: 'Q34' });
  def([28, 30], 'm', 2, "Define Virtual Memory and Memory-Management Unit.",
    [["Virtual memory: increases the available memory by enlarging the address space, using hard disk space", "address space", "hard disk", "increases the available"],
     ["MMU: the hardware device that at run time maps virtual to physical address", "maps", "hardware device"]],
    "Virtual memory increases the available memory of the computer by enlarging the address space; it does this by using hard disk space for additional memory allocation. The MMU is the hardware device that at run time maps virtual to physical address.", { qb: 'Q41' });
  list(28, 'm', 3, "Why most real processes do not need all their pages? (list the reasons)",
    [["Error handling code is needed only when an error occurs", "error"], ["Only a small fraction of the arrays are actually used", "array"], ["Certain routines of programs are rarely used", "routine", "rarely"]], { qb: 'Q43' });
  def(30, 'm', 4, "Define Page Fault, Page Replacement, Thrashing, and Memory Leak.",
    [["Page fault: trap raised when a process accesses a page that is not currently in physical RAM", "trap", "not currently in", "not in ram"],
     ["Page replacement: finding some page in memory, not really in use, in order to page it out", "page it out", "not really in use", "page out"],
     ["Thrashing: not enough pages, very high page-fault rate, busy swapping pages in and out", "enough pages", "busy swapping", "page fault rate"],
     ["Memory leak: an application is using more RAM than it normally does, which slows down the system", "more ram", "slows down"]],
    "Page fault is a type of trap raised when a running process accesses a memory page that is not currently in the physical RAM. Page replacement is finding some page in memory, which is not really in use, in order to page it out. Thrashing is when a process does not have enough pages, so the page-fault rate is very high and the process is busy swapping pages in and out. Memory leak occurs when an application is using more RAM than it normally does, which slows down the system.", { qb: 'Q49' });
  list(32, 'm', 5, "List the five pointers for improving the performance of applications under Windows 10 / 11.",
    [["Adding more physical memory (RAM)", "physical memory", "ram", "more memory"], ["Reducing memory demand", "demand", "reduc"], ["Using an SSD for applications and the paging file", "ssd"], ["Keeping Windows and device drivers updated", "driver", "update"], ["Offloading extra workload", "offload", "workload"]], { qb: 'Q50' });
  list(33, 'e', 3, "List the Windows monitoring tools to watch the available memory value.",
    [["Task Manager", "task manager"], ["Resource Monitor", "resource"], ["Performance Monitor", "performance"]], { qb: 'Q51' });
  list(34, 'm', 4, "List the steps that are important to reduce memory demand in Windows.",
    [["Disable not required startup apps", "startup"], ["Stop unwanted background apps and uninstall programs you no longer use", "background", "uninstall"], ["Find memory leaks", "leak"], ["Restart the computer occasionally", "restart"]], { qb: 'Q53' });
  def(34, 'm', 2, "How can you find a process that may have a memory leak using Task Manager?",
    [["Task Manager → Processes, sort by Memory", "sort"],
     ["A process whose memory use keeps growing may have a memory leak", "growing", "keeps grow", "increasing"]],
    "In Task Manager → Processes, sort by Memory. A process whose memory use keeps growing may have a memory leak; restart or update it.", { qb: 'Q54' });
  def([33, 35], 'm', 2, "Why should applications and the paging file be kept on an SSD rather than a hard disk (HDD)?",
    [["The SSD is the fastest drive", "fastest", "faster", "fast"],
     ["Moving data to the page file on disk is a performance killer, so the page file must be on a fast drive", "page file", "paging", "performance", "loading"]],
    "Because the SSD is the fastest drive. Moving program data to the page file on disk slows the system, so keeping applications and the page file on a faster drive improves the performance.", { qb: 'Q55' });
  def(36, 'm', 2, "What is meant by Offloading Extra Workload for server machines?",
    [["Move some of the workload to another server", "another server", "other server"],
     ["Or scale out to cloud servers", "cloud", "scale out"]],
    "For server machines, move some of the workload to another server, or scale out to cloud servers.", { qb: 'Q56' });
  def(24, 'm', 2, "Define associative memory and the problem it solves.",
    [["A special fast-lookup hardware cache", "fast lookup", "hardware cache", "cache"],
     ["Solves the two memory access problem when the page table is stored in main memory", "two memory"]],
    "Associative memory is a special fast-lookup hardware cache that can solve the two memory access problem if the page table is stored in main memory.");
  list(9, 'e', 3, "List the three address binding schemes (names only).",
    [["Compile time binding", "compile"], ["Load time binding", "load"], ["Execution time binding", "execution"]]);
  list(24, 'e', 2, "List the two types of page table structure.",
    [["Basic paging", "basic"], ["Hierarchical paging", "hierarch"]]);

  /* ---------- Section E ---------- */
  exp(7, 'm', "Explain the difference between Static Linking and Dynamic Linking.",
    [["Static: system libraries and program code are combined by the loader into the binary program image", "combined", "binary program image", "binary image"],
     ["Dynamic: linking of the routines is postponed until execution time", "postponed", "until execution", "at execution"],
     ["Dynamic linking uses a stub that points to the routine in the shared library", "stub", "shared librar"],
     ["Dynamic linking: less loading time, less memory space, less disk space", "less memory", "less disk", "less program loading", "less loading"]],
    "Static linking is the case when system libraries and program code are combined by the loader into the binary program image. Dynamic linking is the case when linking of the routines to the main program is postponed until execution time; a stub points to the address of the routine in the shared library. Dynamic linking gives less program loading time, less memory space and less disk space.", { qb: 'Q5' });
  draw([15, 16, 22], 'm', "Draw simple diagrams for External Fragmentation, Internal Fragmentation, and Compaction.", 'fragmentation',
    [["External: free blocks (holes) between the used blocks, and a request larger than each hole", "external", "holes", "request"], ["Internal: a program smaller than its fixed partition, with unused space inside", "internal", "unused"], ["Before compaction: free blocks scattered", "before", "scattered"], ["After compaction: all free memory in one large block", "after", "one large block"]],
    "External fragmentation: used blocks with scattered free holes between them, and a request larger than every hole. Internal fragmentation: a program smaller than its fixed partition, with unused space inside the partition. Compaction: before, the free blocks are scattered; after, all free memory is together in one large block.", { qb: 'Q22' });
  draw([17, 18], 'm', "Draw a Schematic View of Swapping.", 'swapping',
    [["Main memory: operating system and user space", "operating system", "user space"], ["Backing store with process P1 and P2", "backing store"], ["1. swap out arrow", "swap out"], ["2. swap in arrow", "swap in"]],
    "Main memory holds the operating system and the user space. (1) swap out: process P1 moves from main memory to the backing store. (2) swap in: process P2 moves from the backing store into main memory.", { qb: 'Q25' });
  draw(25, 'm', "Draw The Basic Paging Diagram.", 'basicPaging',
    [["Logical memory: page 0, page 1, page 2, page 3", "logical memory", "page 0"], ["Page table with the frame numbers", "page table"], ["Physical memory with frame numbers 0 to 7", "physical memory", "frame"], ["Each page is placed in the frame written in the page table (e.g. page 0 → frame 1)", "frame 1", "page 0 in", "1 4 3 7"]],
    "Logical memory has page 0, page 1, page 2, page 3. The page table holds the frame numbers 1, 4, 3, 7. In physical memory, page 0 is in frame 1, page 1 in frame 4, page 2 in frame 3 and page 3 in frame 7.", { qb: 'Q36' });
  exp(24, 'm', "Explain the difference between Basic Paging and Hierarchical Paging.",
    [["Basic paging uses a single page table", "single page table", "one page table"],
     ["It stores the page number and the offset", "page number", "offset"],
     ["Hierarchical paging uses a multi-level table", "multi level", "multilevel"],
     ["It breaks up the virtual address into multiple page tables", "multiple page tables", "breaks up", "breaks the virtual"]],
    "Basic paging uses a single page table which stores the page number and the offset. Hierarchical paging uses a multi-level table which breaks up the virtual address into multiple page tables.", { qb: 'Q37' });
  exp(26, 'm', "In Shared Pages, explain the difference between Shared code and Private code and data.",
    [["Shared code: one copy of read-only code is shared among processes", "read only", "one copy"],
     ["Examples: text editors, compilers, window systems; useful for IPC if read-write pages are shared", "text editor", "compiler", "inter process", "read write"],
     ["Private: each process keeps a separate copy of the code and data", "separate copy", "own copy"],
     ["Private pages can appear anywhere in the logical address space", "anywhere", "logical address space"]],
    "Shared code: one copy of read-only code can be shared among processes (text editors, compilers, window systems); it is also useful for inter-process communication if sharing of read-write pages is allowed. Private code and data: each process keeps a separate copy of the code and data, and these pages can appear anywhere in the logical address space.", { qb: 'Q39' });
  draw(27, 'h', "Draw the diagram of Shared Pages.", 'sharedPages',
    [["Processes P1, P2, P3 each with ed 1, ed 2, ed 3 and its own data", "ed 1", "p1"], ["A page table for each process", "page table"], ["The shared code has the same frame numbers (3, 4, 6) in all page tables", "same frame", "3 4 6", "shared"], ["The private data pages are in different frames", "different frame", "data 1", "private"]],
    "Processes P1, P2 and P3 each have ed 1, ed 2, ed 3 and their own data page. Each has a page table: the shared code has the same frames 3, 4, 6 in all of them, and the private data pages are in different frames (data 1 in 1, data 2 in 7, data 3 in 2).", { qb: 'Q40' });
  exp(29, 'm', "Explain the difference between logical address and physical address.",
    [["Logical (virtual) address: generated by the process executing currently on the CPU", "generated by the process", "generated by the cpu", "generated"],
     ["The user process deals with logical addresses and never sees the real physical addresses", "deals with logical", "never sees"],
     ["Physical address: seen by the memory management unit", "memory management unit", "mmu"],
     ["It is where actual code and data are loaded", "actual code", "where the code", "are loaded"]],
    "The logical (virtual) address is the address generated by the process executing currently on the CPU; the process deals with logical addresses and never sees the real physical addresses. The physical address is the address seen by the memory management unit where actual code and data are loaded.", { qb: 'Q44' });
  draw(31, 'm', "Draw The General Layout of Virtual Memory.", 'virtualMemory',
    [["Virtual memory: page 0, page 1, page 2 … page v", "virtual memory", "page 0", "page v"], ["MMU (logical address in, physical address out)", "mmu"], ["Physical memory", "physical memory"], ["Backing store", "backing store"]],
    "Virtual memory pages (page 0, page 1, page 2 … page v) send the logical address to the MMU. The MMU gives the physical address in physical memory, or points to the backing store. Pages move between physical memory and the backing store.", { qb: 'Q48' });
  exp([21, 15, 22], 'm', "Compare paging with Partition with Contiguous Allocation.",
    [["Paging: fixed-sized frames and pages", "frames", "fixed size"],
     ["In paging the physical address space of a process can be noncontiguous", "noncontiguous", "non contiguous"],
     ["Paging eliminates external fragmentation but has internal fragmentation", "internal"],
     ["Partition: each process is in a single contiguous partition and suffers from external fragmentation", "single contiguous", "contiguous partition", "suffers from external"]],
    "Paging divides physical memory into fixed-sized frames and logical memory into pages; the physical address space of a process can be noncontiguous. It eliminates external fragmentation but still suffers from internal fragmentation. In Partition with Contiguous Allocation each process must be in a single contiguous partition, so it suffers from external fragmentation.");
  exp([32, 33, 34, 35, 36], 'm', "Explain four pointers for improving the performance of applications under Windows 10 / 11.",
    [["Adding more RAM: less data is moved to the page file on disk", "more ram", "adding more", "physical memory"],
     ["Reducing memory demand: disable startup apps, stop background apps, find memory leaks, restart", "startup", "background", "memory demand"],
     ["Using an SSD for applications and the paging file", "ssd"],
     ["Keeping Windows and device drivers updated", "driver"],
     ["Offloading extra workload to another server or the cloud", "offload", "another server", "cloud"]],
    "Adding more RAM makes it less likely that Windows moves program data to the page file. Reducing memory demand: disable startup apps, stop background apps, find memory leaks and restart occasionally. Using an SSD for applications and the paging file, because it is the fastest drive. Keeping Windows and device drivers updated, because updates fix bugs and improve performance.", { need: 4 });

  calc([21, 22, 23], 'm', "In Paging, if the page size is 2 KB and the process size is 72,766 bytes, how many frames are needed to load the process, and what is the size of the internal fragmentation?",
    [["Page size = 2 × 1024 = 2048 bytes", "#2048"], ["72,766 / 2048 = 35.53", "#35.53", "#35.5"], ["36 frames are needed", "#36"], ["36 × 2048 = 73,728 bytes", "#73728"], ["Internal fragmentation = 73,728 − 72,766 = 962 bytes", "#962"]],
    "Page size = 2 × 1024 = 2048 bytes. 72,766 / 2048 = 35.53, so 36 frames are needed. Allocated memory = 36 × 2048 = 73,728 bytes. Internal fragmentation = 73,728 − 72,766 = 962 bytes.", { qb: 'Q33' });
  calc([21, 22, 23], 'm', "In Paging, if the page size is 4 KB and the process size is 50,000 bytes, how many frames are needed, and what is the size of the internal fragmentation?",
    [["Page size = 4 × 1024 = 4096 bytes", "#4096"], ["50,000 / 4096 = 12.21", "#12.21", "#12.2"], ["13 frames are needed", "#13"], ["13 × 4096 = 53,248 bytes", "#53248"], ["Internal fragmentation = 53,248 − 50,000 = 3,248 bytes", "#3248"]],
    "Page size = 4 × 1024 = 4096 bytes. 50,000 / 4096 = 12.21, so 13 frames are needed. Allocated memory = 13 × 4096 = 53,248 bytes. Internal fragmentation = 53,248 − 50,000 = 3,248 bytes.");
  calc([21, 22], 'e', "In Paging, if the page size is 16 KB and the process size is 100 KB, how many frames are needed, and what is the size of the internal fragmentation?",
    [["100 / 16 = 6.25", "#6.25"], ["7 frames are needed", "#7"], ["7 × 16 = 112 KB", "#112"], ["112 − 100", "#112"], ["Internal fragmentation = 12 KB", "#12"]],
    "100 / 16 = 6.25, so 7 frames are needed. Allocated memory = 7 × 16 = 112 KB. Internal fragmentation = 112 − 100 = 12 KB.");
  calc([21, 22, 24], 'h', "A process of 21 KB can be loaded with a page size of 8 KB or with a page size of 2 KB. Calculate the frames and the internal fragmentation for both page sizes. Which one wastes less memory?",
    [["8 KB pages: 3 frames", "#3"], ["Internal fragmentation with 8 KB pages = 24 − 21 = 3 KB", "#24"], ["2 KB pages: 11 frames", "#11"], ["Internal fragmentation with 2 KB pages = 22 − 21 = 1 KB", "#22"], ["The 2 KB page wastes less memory (but the page table is larger)", "2 kb wastes less", "2 kb page wastes less", "2 kb is better", "smaller page", "2 kb pages waste less"]],
    "8 KB pages: 21 / 8 = 2.63, so 3 frames; 24 − 21 = 3 KB internal fragmentation. 2 KB pages: 21 / 2 = 10.5, so 11 frames; 22 − 21 = 1 KB internal fragmentation. The 2 KB page wastes less memory, but its page table is larger.");

  pick(11, 'e', "An old small device has very little RAM and runs only one program at a time. The most important thing is that the system is simple. Which memory management approach is the best? Why?",
    ["Single Contiguous Model", "Paging", "Segmentation"], 0,
    [["RAM is occupied by one process at a time, which is what the device needs", "one process", "one program", "only one"], ["It is the simplest (most primitive) approach: no page table or segment table", "simple", "primitive", "no page table", "no table"]],
    "In the Single Contiguous Model the RAM is occupied by one process at a time, which fits a device that runs one program. It is the simplest approach: no page table or segment table is needed.", { qb: 'CE1' });
  pick([15, 16], 'm', "A computer uses Partition with Contiguous Allocation. It has 50 MB of free memory in total, but the free memory is in many small pieces. A new 30 MB process cannot be loaded. What is the best solution? Why?",
    ["Compaction", "Static linking", "Compile time binding"], 0,
    [["The problem is external fragmentation: free memory exists but is not contiguous", "external fragmentation", "not contiguous", "fragment"], ["Compaction shuffles memory contents to place all free memory together in one large block", "one large block", "together", "shuffl"]],
    "This is external fragmentation: enough free memory exists, but it is not contiguous. Compaction shuffles the memory contents to place all free memory together in one large block, so the 30 MB process can be loaded.", { qb: 'CE2' });
  pick([21, 24], 'm', "A computer runs many small processes. The designer must choose the page size. Wasted memory must be very small, and a bigger page table is OK. Which page size is the best? Why?",
    ["16 MB pages", "4 KB pages", "3000-byte pages"], 1,
    [["A small page gives less internal fragmentation (a large page wastes memory)", "internal fragmentation", "less wast", "waste"], ["The page size must be a power of 2, so 3000 bytes is not possible", "power of 2", "power of two", "3000"]],
    "4 KB pages give little internal fragmentation, while 16 MB pages would waste a lot of memory with small processes. 3000 bytes is not possible because the page size must be a power of 2. The bigger page table is acceptable.", { qb: 'CE3' });
  pick(7, 'm', "A company has 10 programs, and all of them use the same graphics library. The company wants to use less memory and disk space. It also wants to update the library without building all 10 programs again. Which linking method is the best? Why?",
    ["Static linking", "Dynamic linking", "Compile time binding"], 1,
    [["The shared library is stored once: less memory space and less disk space", "less memory", "less disk", "shared", "one copy"], ["Linking is postponed until execution time, so the library can be updated without rebuilding the programs", "postponed", "execution time", "without rebuild", "updated", "run time"]],
    "With dynamic linking the programs use one shared library, so less memory and less disk space are needed. Linking is postponed until execution time, so the library can be updated without building the programs again.", { qb: 'CE4' });
  pick(33, 'm', "An office computer with Windows 11 is very slow. Task Manager shows that the Available memory is very low, and the disk is always busy with paging. What is the best thing to do? Why?",
    ["Add more physical memory (RAM)", "Open more programs at the same time", "Move the paging file from the SSD to an HDD"], 0,
    [["All applications run in RAM; more RAM means more available memory", "more ram", "run in ram", "available memory", "more memory"], ["Windows will move less data to the page file on disk, which is a performance killer", "page file", "paging", "less paging", "disk"]],
    "All applications run in RAM. With more RAM, Windows is less likely to move program data to the page file on disk, which is a real performance killer. The other two choices would increase the paging or make it slower.", { qb: 'CE5' });
  pick([21, 22], 'm', "A computer uses paging with a page size of 4 KB. A process of size 18 KB must be loaded into memory. How many frames are needed, and what is the size of the internal fragmentation? Show your calculation.",
    ["4 frames, and the internal fragmentation is 2 KB", "5 frames, and the internal fragmentation is 2 KB", "5 frames, and the internal fragmentation is 0 KB"], 1,
    [["18 / 4 = 4.5, so 5 frames", "#4.5"], ["5 × 4 = 20 KB, 20 − 18 = 2 KB", "#20"]],
    "18 / 4 = 4.5, so 5 frames are needed. Allocated memory = 5 × 4 = 20 KB, and the internal fragmentation = 20 − 18 = 2 KB.", { qb: 'AA1' });
  pick([21, 22], 'm', "A computer uses paging with a page size of 8 KB. A process of size 50 KB must be loaded into memory. How many frames are needed, and what is the size of the internal fragmentation? Show your calculation.",
    ["6 frames, and the internal fragmentation is 2 KB", "7 frames, and the internal fragmentation is 2 KB", "7 frames, and the internal fragmentation is 6 KB"], 2,
    [["50 / 8 = 6.25, so 7 frames", "#6.25"], ["7 × 8 = 56 KB, 56 − 50 = 6 KB", "#56"]],
    "50 / 8 = 6.25, so 7 frames are needed. Allocated memory = 7 × 8 = 56 KB, and the internal fragmentation = 56 − 50 = 6 KB.", { qb: 'AA2' });
  pick([26, 27], 'h', "Two users run the same text editor at the same time (process P1 and process P2). The editor code (ed 1, ed 2) is shared, and each process has its own private data page. Look at the diagram. Which page tables are correct for P1 and P2? Why?",
    ["P1: 5, 2, 0 and P2: 5, 2, 6", "P1: 5, 2, 0 and P2: 5, 2, 0", "P1: 0, 1, 2 and P2: 0, 1, 2"], 0,
    [["The shared code has the same frames in both page tables: ed 1 in frame 5 and ed 2 in frame 2", "same frame", "shared", "frame 5", "ed 1"], ["Each process has its own private data page: data 1 in frame 0, data 2 in frame 6", "private", "frame 0", "frame 6", "own data", "data 1"]],
    "The code is shared, so both page tables use the same frames: ed 1 in frame 5 and ed 2 in frame 2. The data pages are private: data 1 of P1 is in frame 0 and data 2 of P2 is in frame 6.", { qb: 'AA3', qfig: 'sharedQ3' });
  pick([26, 27], 'h', "Two students use the same compiler at the same time (process P1 and process P2). The compiler code (comp 1, comp 2, comp 3) is shared, and each process has its own private data page. Look at the diagram. Which page tables are correct for P1 and P2? Why?",
    ["P1: 7, 1, 4, 9 and P2: 7, 1, 4, 9", "P1: 1, 4, 7, 9 and P2: 1, 4, 7, 2", "P1: 7, 1, 4, 9 and P2: 7, 1, 4, 2"], 2,
    [["The shared code has the same frames in both page tables: comp 1 in 7, comp 2 in 1, comp 3 in 4", "same frame", "shared", "frame 7", "comp 1"], ["Each process has its own private data page: data 1 in frame 9, data 2 in frame 2", "private", "frame 9", "frame 2", "own data", "data 1"]],
    "The code is shared, so both page tables use the same frames in page order: comp 1 in frame 7, comp 2 in frame 1 and comp 3 in frame 4. The data pages are private: data 1 of P1 is in frame 9 and data 2 of P2 is in frame 2.", { qb: 'AA4', qfig: 'sharedQ4' });
  pick(9, 'm', "A modern OS wants to move a program to another place in memory while the program is running. Which address binding scheme is the best? Why?",
    ["Compile time binding", "Load time binding", "Execution time binding"], 2,
    [["Binding is delayed until execution time", "delayed", "until execution"], ["So the program can be moved around in memory during execution", "moved", "during execution", "move"]],
    "In execution time binding the binding is delayed until execution time, so the program can be moved around in memory during execution. Compile time binding uses fixed physical addresses.");
  pick([24], 'm', "A system stores its page table in main memory, so every access needs two memory accesses and the programs are slow. What is the best solution? Why?",
    ["Use a larger page size", "Use associative memory", "Use static linking"], 1,
    [["It solves the two memory access problem", "two memory", "problem"], ["It is a special fast-lookup hardware cache", "fast lookup", "cache", "fast"]],
    "Associative memory is a special fast-lookup hardware cache, and it solves the two memory access problem when the page table is stored in main memory.");
  pick([30, 34], 'm', "In Task Manager, the memory use of one browser process keeps growing every hour and the computer becomes slower. What is the best thing to do first? Why?",
    ["Restart or update that program", "Replace the CPU with a faster one", "Make the page size larger"], 0,
    [["A process whose memory use keeps growing may have a memory leak", "memory leak", "leak"], ["Restarting or updating it frees the memory, so there is less paging", "frees", "free the memory", "less paging", "restart", "update"]],
    "A process whose memory use keeps growing may have a memory leak. Restarting or updating the program frees the memory it uses, so there is less paging and the system becomes faster.");
});
