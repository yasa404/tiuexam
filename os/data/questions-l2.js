/* Lecture 2: Processes and Threads (PDF pages 1-28). Not used: pages 9, 14, 20, 27 ("not required in the exam"). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;

  /* ---------- Section A: multiple choice ---------- */
  mcq(5, 'e', "A process is…",
    ["an active program in execution", "a passive entity stored on disk", "a set of routines in a library", "a hardware device of the CPU"], "Slide 5.");
  mcq(5, 'e', "A program becomes a process when…",
    ["the executable file is loaded into memory", "the executable file is stored on the disk", "the programmer compiles the source code", "the parent process executes its last statement"], "Slide 5.");
  mcq(5, 'm', "A user opens the same program three times. What is generated?",
    ["Three processes", "One process with three programs", "Three programs on disk", "One process only"], "One program can be executed multiple times generating multiple processes.");
  mcq(5, 'm', "Process execution must progress in…",
    ["sequential fashion", "random fashion", "circular fashion", "parallel fashion only"], "Slide 5.");
  mcq(5, 'm', "Which statement describes the difference between a program and a process?",
    ["A program is passive and stored on disk; a process is active and in execution", "A program is active and in execution; a process is passive and stored on disk", "A program is loaded into memory; a process is kept in the executable file", "A program has five states; a process is never managed by the scheduler"], "Slide 5.");
  mcq(6, 'e', "Process Explorer is a freeware that shows…",
    ["a list of the currently active processes", "a list of the files stored on the disk", "a list of the system calls of the kernel", "a list of the drivers that need updates"], "Slide 6.");
  mcq(6, 'm', "Why is Process Explorer useful?",
    ["For tracking down problems and giving insight into how Windows and applications work", "For creating new threads and assigning every one of them to a different CPU core", "For compiling programs and loading the executable files into the main memory", "For terminating the operating system and returning the control to the boot loader"], "Slide 6.");
  // Parts p7
  mcq(7, 'e', "Which part of a process contains the program code?",
    ["Text section", "Data section", "Stack", "Heap"], "Slide 7.");
  mcq(7, 'e', "Which part of a process contains the global variables?",
    ["Data section", "Text section", "Stack", "Heap"], "Slide 7.");
  mcq(7, 'e', "Which part of a process contains dynamically allocated memory during run time?",
    ["Heap", "Stack", "Data section", "Text section"], "Slide 7.");
  mcq(7, 'm', "Function parameters, return addresses and local variables are kept in the…",
    ["stack", "heap", "data section", "text section"], "Slide 7.");
  mcq(7, 'm', "In the diagram of a process in memory, which part is at the bottom (address 0)?",
    ["Text", "Stack", "Heap", "Data"], "Order from 0: text, data, heap, then stack at max.");
  mcq(7, 'h', "In the diagram of a process in memory, the free space lies between…",
    ["the stack and the heap", "the heap and the data", "the data and the text", "the text and the kernel"], "Stack and heap grow toward each other.");
  mcq(7, 'h', "A function is called with two parameters and it declares one local variable. Where are these three values stored?",
    ["All in the stack", "All in the heap", "Parameters in the data section, variable in the heap", "Parameters in the text section, variable in the stack"], "The stack holds parameters and local variables.");
  // States p8
  mcq(8, 'e', "In which state are the instructions of the process being executed?",
    ["Running", "Ready", "Waiting", "New"], "Slide 8.");
  mcq(8, 'e', "A process that is waiting to be assigned to a processor is in the…",
    ["ready state", "waiting state", "new state", "running state"], "Slide 8.");
  mcq(8, 'e', "A process that is waiting for some event to occur is in the…",
    ["waiting state", "ready state", "terminated state", "new state"], "Slide 8.");
  mcq(8, 'm', "What moves a process from the ready state to the running state?",
    ["Scheduler dispatch", "Interrupt", "I/O or event wait", "Admitted"], "Slide 8 diagram.");
  mcq(8, 'm', "What moves a process from the running state back to the ready state?",
    ["Interrupt", "Exit", "I/O or event wait", "Scheduler dispatch"], "Slide 8 diagram.");
  mcq(8, 'm', "A running process asks to read a file from disk. To which state does it move?",
    ["Waiting", "Ready", "Terminated", "New"], "I/O or event wait.");
  mcq(8, 'm', "When the I/O that a waiting process needs is completed, the process goes to the…",
    ["ready state", "running state", "new state", "terminated state"], "I/O or event completion: waiting → ready.");
  mcq(8, 'm', "Look at the diagram of process states. Which labels are correct for 1 and 2?",
    ["1 = ready, 2 = running", "1 = running, 2 = ready", "1 = waiting, 2 = ready", "1 = ready, 2 = waiting"], "New is admitted to ready; the scheduler dispatches ready to running.", { qfig: 'statesBlank' });
  mcq(8, 'h', "Which state transition does NOT exist in the process states diagram?",
    ["Waiting → running", "Running → waiting", "Running → ready", "New → ready"], "From waiting, the process goes to ready first.");
  // PCB p10
  mcq(10, 'e', "The information associated with each process is kept in the…",
    ["Process Control Block", "Master Boot Record of the disk", "page table of the MMU", "device queue"], "PCB.");
  mcq(10, 'm', "Which of these is NOT stored in the Process Control Block?",
    ["Global variables", "Program counter", "CPU registers", "Accounting information"], "Global variables are in the data section.");
  mcq(10, 'm', "In the doctor analogy of the lecture, the PCB is like the…",
    ["patient information", "doctor who treats patients", "hospital building", "medicine"], "PCB = patient information.");
  // Queues p11-12
  mcq(11, 'e', "What selects among the available processes for the next execution on the CPU?",
    ["Process scheduler", "Process Explorer tool", "Device queue", "Boot loader"], "Slide 11.");
  mcq(11, 'e', "The set of all processes in the system is the…",
    ["job queue", "ready queue", "device queue", "message queue"], "Slide 11.");
  mcq(11, 'm', "The set of processes residing in main memory, ready and waiting to execute, is the…",
    ["ready queue", "job queue", "device queue", "message queue"], "Slide 11.");
  mcq(11, 'm', "Processes waiting for the printer are kept in a…",
    ["device queue", "ready queue", "job queue", "message queue"], "Device queues: processes waiting for an I/O device.");
  mcq(12, 'm', "In the scheduling queues diagram, after the I/O is finished a process goes back to the…",
    ["ready queue", "job queue", "I/O waiting queue", "exit"], "Slide 12.");
  // Operations p13, 15
  mcq(13, 'e', "Generally, a process is identified and managed via a number called…",
    ["pid", "PCB", "IPC", "API"], "Process identifier.");
  mcq(13, 'm', "Parent processes create children processes, which in turn create other processes, forming a…",
    ["tree of processes", "queue of processes", "circle of processes", "stack of processes"], "Slide 13.");
  mcq(13, 'm', "Which are the two execution options between a parent and its children?",
    ["They execute concurrently, or the parent waits until the children terminate", "They share one stack and heap, or the children wait until the parent terminates", "The parent becomes a thread, or the children become separate programs", "The parent is deleted first, or the children are moved to the job queue"], "Slide 13.");
  mcq(15, 'm', "When a process executes its last statement, it…",
    ["asks the operating system to delete it using a system call", "asks the parent process to load it again from the executable file", "moves itself to the device queue to wait for an event", "deletes its own program file from the hard disk drive"], "Slide 15.");
  mcq(15, 'm', "During process termination, status data is returned…",
    ["from child to parent", "from parent to child", "from the heap to the stack", "from the kernel to the disk"], "Slide 15.");
  mcq(15, 'm', "Who de-allocates the resources of a terminated process?",
    ["The operating system", "The parent process", "The compiler", "The user"], "Slide 15.");
  mcq(15, 'h', "Which is NOT a reason for a parent to terminate the execution of its child?",
    ["The child has returned from waiting to ready", "The child has exceeded allocated resources", "The task assigned to the child is no longer required", "The parent is exiting"], "The other three are on slide 15.");
  // IPC p16-17
  mcq(16, 'e', "The two models of inter-process communication are…",
    ["shared memory and message passing", "ready queue and device queue", "thread concurrency and core parallelism", "stack and heap"], "Slide 16.");
  mcq(16, 'm', "Processes within a system may be…",
    ["independent or cooperating", "passive or always sequential", "internal or external", "logical or physical"], "Slide 16.");
  mcq(17, 'm', "In the message passing model diagram, where is the message queue?",
    ["In the kernel area", "Inside process A", "Inside process B", "Between process A and process B"], "Slide 17 (a).");
  mcq(17, 'h', "In the shared memory model, how do process A and process B exchange data?",
    ["Both use the same shared memory region", "Each sends messages to a queue in the kernel", "The parent copies the data to the disk for them", "The scheduler copies one stack to the other"], "Slide 17 (b).");
  // Threads p19
  mcq(19, 'e', "The smallest sequence of instructions that can be managed by the scheduler is a…",
    ["thread", "process", "program", "kernel"], "Slide 19.");
  mcq(19, 'm', "Multiple threads within one process…",
    ["execute concurrently and share resources such as memory", "execute one by one and never share any resources", "always have separate copies of the program and its data", "must be created on separate computers in a network"], "Slide 19.");
  mcq(19, 'm', "In implicit threading, the creation and management of threads is done by…",
    ["compilers", "programmers", "end-users", "children processes"], "Compilers rather than programmers.");
  mcq(19, 'm', "Which is an example from the lecture of tasks implemented by separate threads?",
    ["Update display, fetch data, spell checking", "Load BIOS, load MBR, load the boot loader", "Create file, delete file, search for files", "Job queue, ready queue, device queue"], "Slide 19.");
  mcq(22, 'm', "In the multithreaded server architecture, what does the server do after receiving a client request?",
    ["Creates a new thread to service the request", "Creates a new computer to service the request", "Stops listening until the request is finished", "Sends the request back to the same client"], "Slide 22.");
  mcq(22, 'h', "In the multithreaded server architecture, what is step (3), after creating the thread?",
    ["Resume listening for additional client requests", "Terminate the server and all of its threads", "Wait until the thread finishes its service", "Create a new server process for the client"], "Slide 22.");
  // Benefits p23
  mcq(23, 'e', "Which multithreading benefit allows continued execution if part of the process is blocked?",
    ["Responsiveness", "Resource sharing", "Economy", "Scalability"], "Slide 23.");
  mcq(23, 'e', "Creating threads is cheaper than creating processes. Which benefit is this?",
    ["Economy", "Responsiveness", "Scalability", "Resource sharing"], "Slide 23.");
  mcq(23, 'm', "A process can take advantage of multiprocessor architectures. Which benefit is this?",
    ["Scalability", "Economy", "Responsiveness", "Resource sharing"], "Slide 23.");
  mcq(23, 'm', "Which multithreading benefit is especially important for user interfaces?",
    ["Responsiveness", "Economy", "Scalability", "Resource sharing"], "Slide 23.");
  mcq(23, 'h', "According to the slides, thread switching has lower overhead than…",
    ["context switching", "message passing", "executing in shared memory", "spell checking"], "Economy, slide 23.");
  // Multi-core, concurrency p24-25
  mcq(24, 'e', "A multi-core processor is one which combines…",
    ["two or more independent processors into a single chip", "two or more independent computers into a single network", "two or more threads into a single program counter", "two or more processes into a single shared memory"], "Slide 24.");
  mcq(25, 'e', "More than one task making progress on a single processor with a scheduler is called…",
    ["concurrency", "parallelism", "scalability", "responsiveness"], "Slide 25.");
  mcq(25, 'e', "Performing more than one task simultaneously on a multi-core system is called…",
    ["parallelism", "concurrency", "economy", "sequencing"], "Slide 25.");
  mcq(25, 'm', "A single core runs T1, T2, T3, T4, T1, T2 … one after the other. This shows…",
    ["concurrency only", "parallelism only", "both concurrency and parallelism", "scalability on a multi-core system"], "One core with a scheduler.");
  mcq(25, 'h', "In the parallelism diagram, core 1 runs T1, T3, T1, T3 …. What does core 2 run at the same time?",
    ["T2, T4, T2, T4 …", "T1, T3, T1, T3 …", "T1, T2, T3, T4 …", "T3, T1, T3, T1 …"], "Slide 25.");
  // Amdahl p26, 28
  mcq(26, 'm', "In Amdahl's Law, as N approaches infinity, the speedup approaches…",
    ["1 / S", "1 / P", "1 / N", "S / N"], "Slide 26.");
  mcq(26, 'm', "According to Amdahl's Law, what limits the performance gained by adding cores?",
    ["The serial portion of the application", "The parallel portion of the application", "The number of users of the application", "The size of the heap of the application"], "Slide 26.");
  mcq(26, 'm', "In Amdahl's Law, if the parallel portion P is 0.7, then the serial portion S is…",
    ["0.3", "0.7", "1.7", "0.07"], "S = 1 − P.");
  mcq([26, 28], 'h', "An algorithm has an 80% parallel part. What is its speedup when moving from one processor to four processors?",
    ["2.5", "4", "3.2", "1.25"], "1 / (0.2 + 0.8/4) = 1 / 0.4 = 2.5.");
  mcq(26, 'h', "An application has a 25% serial part. What is the maximum speedup with an infinite number of cores?",
    ["4", "25", "1.33", "0.25"], "1 / S = 1 / 0.25 = 4.");
  mcq(26, 'h', "An application has a 50% parallel part. What is the speedup with two cores?",
    ["1.33", "2", "1.5", "0.75"], "1 / (0.5 + 0.5/2) = 1 / 0.75 = 1.33.");

  /* ---------- Section C: true / false ---------- */
  tf(5, 'e', "One program can be executed multiple times generating a single process.", false, "It generates multiple processes.", { qb: 'Q3' });
  tf(19, 'e', "Multiple threads can not exist within one process.", false, "Multiple threads can exist within one process.", { qb: 'Q22' });
  tf(19, 'e', "Multiple threads can execute concurrently and share resources.", true, "Slide 19.", { qb: 'Q23' });
  tf(19, 'e', "Most modern applications are single-threaded.", false, "Most are multithreaded.", { qb: 'Q24' });
  tf(26, 'm', "According to Amdahl's Law, adding more processors leads to successively smaller returns in terms of speedup.", true, "Slide 26.", { qb: 'Q32' });
  tf(5, 'e', "A program is a passive entity stored on disk.", true, "Slide 5.");
  tf(5, 'm', "A process is a passive entity, and a program is an active entity.", false, "It is the opposite.");
  tf(7, 'm', "The heap contains function parameters and return addresses.", false, "That is the stack.");
  tf(7, 'm', "The data section contains the global variables.", true, "Slide 7.");
  tf(8, 'm', "A process can move directly from the waiting state to the running state.", false, "Waiting → ready → running.");
  tf(8, 'e', "In the new state, the process is being created.", true, "Slide 8.");
  tf(8, 'm', "An interrupt moves a running process to the ready state.", true, "Slide 8 diagram.");
  tf(10, 'm', "The program counter and the CPU registers are part of the PCB.", true, "Slide 10.");
  tf(11, 'm', "The ready queue is the set of processes waiting for an I/O device.", false, "Those are device queues.");
  tf(11, 'm', "Processes migrate among the various scheduling queues.", true, "Slide 11.");
  tf(13, 'm', "A parent must always wait until its children terminate.", false, "They may also execute concurrently.");
  tf(15, 'm', "A parent may terminate its children because the parent itself is exiting.", true, "Slide 15.");
  tf(15, 'h', "When a process terminates, status data is returned from the parent to the child.", false, "From child to parent.");
  tf(17, 'h', "In message passing, the message queue is located in the kernel.", true, "Slide 17.");
  tf(19, 'm', "In implicit threading, threads are created and managed by programmers rather than compilers.", false, "By compilers rather than programmers.");
  tf(23, 'm', "Thread switching has a higher overhead than context switching.", false, "Lower overhead.");
  tf(24, 'm', "A system can have independent CPUs in a single motherboard.", true, "Slide 24.");
  tf(25, 'm', "Concurrency needs a multi-core system.", false, "A single core with a scheduler is enough.");
  tf(25, 'm', "Parallelism means performing more than one task simultaneously.", true, "Slide 25.");
  tf(26, 'h', "With a serial portion of 0.5, the speedup can be larger than 2 if enough cores are added.", false, "The limit is 1 / 0.5 = 2.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(5, 'e', "Program is a [[passive]] entity stored on disk, and it becomes a process when the executable file is loaded into [[memory|main memory|RAM]].", "Slide 5.", { qb: 'Q2' });
  fill(13, 'e', "Process is identified and managed via a number called [[pid|process identifier|process id]].", "Slide 13.", { qb: 'Q13' });
  fill(15, 'm', "While process is terminating, process executes [[last statement|the last statement|its last statement]] and then asks the operating system to [[delete it|delete|delete the process]] using a [[system call]], after that process resources are [[de-allocated|deallocated|released|freed]].", "Slide 15.", { qb: 'Q15' });
  fill(15, 'm', "While process is terminating, process returns [[status data|status]] from [[child|the child]] to [[parent|the parent]].", "Slide 15.", { qb: 'Q16' });
  fill(16, 'e', "Processes within a system may be [[independent]] or [[cooperating|cooperative]] when they need to share data.", "Slide 16.", { set: true, qb: 'Q19' });
  fill(5, 'm', "Process execution must progress in [[sequential]] fashion.", "Slide 5.");
  fill(6, 'm', "The freeware that shows a list of the currently active processes is [[Process Explorer]].", "Slide 6.");
  fill(7, 'e', "The [[text|text section]] section of a process contains the program code.", "Slide 7.");
  fill(7, 'm', "The [[heap]] contains dynamically allocated memory during run time, and the [[stack]] contains function parameters and local variables.", "Slide 7.");
  fill(7, 'm', "The data section contains the [[global variables|global variable]].", "Slide 7.");
  fill(8, 'e', "A process that has finished execution is in the [[terminated]] state.", "Slide 8.");
  fill(8, 'm', "A process moves from ready to running by [[scheduler dispatch|dispatch]].", "Slide 8.");
  fill(8, 'm', "A new process is [[admitted]] to the ready state.", "Slide 8.");
  fill(10, 'e', "The information associated with each process is stored in the [[Process Control Block|PCB]].", "Slide 10.");
  fill(11, 'm', "The set of all processes in the system is the [[job queue|job]].", "Slide 11.");
  fill(11, 'm', "The [[process scheduler]] selects among available processes for next execution on CPU.", "Slide 11.");
  fill(13, 'm', "Processes that create other processes form a [[tree]] of processes.", "Slide 13.");
  fill(16, 'm', "The two models of inter-process communications are [[shared memory]] and [[message passing]].", "Slide 16.", { set: true });
  fill(19, 'e', "The smallest sequence of instructions that can be managed by the scheduler is the [[thread|threads]].", "Slide 19.");
  fill(19, 'm', "In implicit threading, threads are created and managed by [[compilers|compiler|the compiler]] rather than programmers.", "Slide 19.");
  fill(23, 'm', "The multithreading benefit that lets a process continue if part of it is blocked is [[responsiveness]].", "Slide 23.");
  fill(23, 'm', "The multithreading benefit of using multiprocessor architectures is [[scalability]].", "Slide 23.");
  fill(24, 'm', "A [[multi-core|multicore]] processor combines two or more independent processors into a single chip.", "Slide 24.");
  fill(25, 'm', "[[Concurrency]] can be implemented by a single core with a scheduler, while [[parallelism]] needs a multi-core system.", "Slide 25.");
  fill(26, 'm', "In Amdahl's Law, the [[serial|serial portion]] portion of an application limits the performance gained by adding cores.", "Slide 26.");
  fill(26, 'h', "With a serial portion S = 0.1, the speedup approaches [[10|ten]] when the number of cores approaches infinity.", "1 / S = 1 / 0.1 = 10.");

  /* ---------- Section D: define and list ---------- */
  def(6, 'm', 2, "What is Process Explorer, and why is it useful?",
    [["A freeware that shows a list of the currently active processes", "active processes", "list of process", "freeware", "running processes"],
     ["Useful for tracking down problems and insight into how Windows and applications work", "problems", "insight", "track"]],
    "It is a freeware that shows a list of the currently active processes. It is useful for tracking down problems and provides insight into the way Windows and applications work.", { qb: 'Q4' });
  list(10, 'm', 5, "List the information items stored in Process Control Block (PCB).",
    [["Process state", "process state", "state"], ["Program counter", "program counter", "counter"], ["CPU registers", "register"], ["CPU scheduling information", "scheduling"], ["Memory-management information", "memory"], ["Accounting information", "account"], ["I/O status information", "i/o", "io status"]], { qb: 'Q9' });
  def(11, 'e', 2, "Define Process Scheduler.",
    [["Selects among available processes", "select", "chooses", "choose"],
     ["For next execution on the CPU", "next execution", "execution on cpu", "cpu", "to execute"]],
    "The process scheduler selects among available processes for next execution on CPU.", { qb: 'Q10' });
  list(13, 'e', 2, "List the execution options between parent and child processes.",
    [["Parent and children execute concurrently", "concurrent"], ["Parent waits until children terminate", "wait"]], { qb: 'Q14' });
  list(15, 'm', 3, "Why parent may terminate the execution of children processes? (list the reasons)",
    [["Child has exceeded allocated resources", "exceed", "allocated resources"], ["Task assigned to child is no longer required", "no longer", "not required", "task assigned"], ["The parent is exiting", "exiting", "exit", "parent is"]], { qb: 'Q17' });
  list(16, 'e', 2, "List the inter-processes communications models.",
    [["Shared memory", "shared"], ["Message passing", "message"]], { qb: 'Q18' });
  def(19, 'm', 2, "Define Thread, and Implicit Threading.",
    [["Thread: component of the process; the smallest sequence of instructions that can be managed by the scheduler", "smallest sequence", "smallest", "component of the process"],
     ["Implicit threading: creation and management of threads done by compilers rather than programmers", "compiler"]],
    "The thread is a component of the process and it is the smallest sequence of instructions that can be managed by the scheduler. Implicit threading is where the creation and management of threads is done by compilers rather than programmers.", { qb: 'Q21' });
  list(19, 'e', 3, "Give three examples of tasks within an application that can be implemented by separate threads.",
    [["Update display", "display"], ["Fetch data", "fetch"], ["Spell checking", "spell"]], { qb: 'Q25' });
  def(24, 'e', 2, "Define multi-core processor.",
    [["Combines two or more independent processors", "two or more", "combines", "independent processors", "several processors"],
     ["Into a single chip", "single chip", "one chip"]],
    "A multi-core processor is one which combines two or more independent processors into a single chip.", { qb: 'Q28' });
  def(26, 'm', 2, "According to Amdahl's Law, what will happen to the speedup when the number of processing cores approaches infinity? What limits the performance gained by adding more cores?",
    [["The speedup approaches 1 / S", "1 / s", "1 s", "one over s", "1 over s"],
     ["The serial portion of the application limits the performance", "serial"]],
    "As N approaches infinity, the speedup approaches 1 / S. The serial portion of the application limits the performance gained by adding additional cores.", { qb: 'Q31' });
  list(7, 'e', 4, "List the process parts in memory (names only).",
    [["Text section", "text"], ["Data section", "data"], ["Stack", "stack"], ["Heap", "heap"]]);
  list(8, 'e', 5, "List the five process states (names only).",
    [["New", "new"], ["Running", "running"], ["Waiting", "waiting"], ["Ready", "ready"], ["Terminated", "terminat"]]);
  list(11, 'e', 3, "List the process scheduling queues (names only).",
    [["Job queue", "job"], ["Ready queue", "ready"], ["Device queues", "device"]]);
  list(23, 'm', 4, "List the benefits of multithreaded programming (names only).",
    [["Responsiveness", "responsive"], ["Resource sharing", "resource", "sharing"], ["Economy", "econom"], ["Scalability", "scalab"]]);
  def(8, 'm', 2, "Define the ready state and the waiting state of a process.",
    [["Ready: waiting to be assigned to a processor", "assigned to a processor", "assigned to the processor", "assigned to a cpu", "to be assigned", "waiting for the cpu"],
     ["Waiting: waiting for some event to occur", "some event", "event to occur", "for an event", "i/o"]],
    "Ready: the process is waiting to be assigned to a processor. Waiting: the process is waiting for some event to occur.");
  def(13, 'm', 2, "Define process identifier (pid) and tree of processes.",
    [["pid: the number used to identify and manage a process", "identif", "manage"],
     ["Tree: parent processes create children, which in turn create other processes", "children", "parent"]],
    "The process identifier (pid) is the number used to identify and manage a process. A parent process creates children processes, which in turn create other processes, forming a tree of processes.");
  def(10, 'm', 2, "Define the Process Control Block (PCB) and give one item stored in it.",
    [["The information associated with each process", "information associated", "information about", "associated with each process"],
     ["For example process state, program counter, CPU registers, scheduling, memory-management, accounting or I/O status information", "process state", "program counter", "register", "accounting", "scheduling", "i/o status"]],
    "The PCB is the information associated with each process, for example the process state, program counter and CPU registers.");
  def(26, 'm', 2, "What does Amdahl's Law identify? Write the meaning of S and N in its formula.",
    [["Performance gains from adding additional cores to an application with serial and parallel components", "performance gain", "adding additional cores", "adding cores", "speedup"],
     ["S is the serial portion, N is the number of processing cores", "serial", "cores"]],
    "Amdahl's Law identifies performance gains from adding additional cores to an application that has both serial and parallel components. S is the serial portion and N is the number of processing cores.");

  /* ---------- Section E ---------- */
  exp(5, 'm', "Define “Process” and explain the difference between Process and Program.",
    [["Process: an active program in execution", "active", "in execution"],
     ["Process execution must progress in sequential fashion", "sequential"],
     ["Program: a passive entity stored on disk (executable file)", "passive", "stored on disk", "executable file"],
     ["The program becomes a process when the executable file is loaded into memory; one program can generate multiple processes", "loaded into memory", "multiple processes", "loaded in memory"]],
    "A process is an active program in execution; process execution must progress in sequential fashion. A program is a passive entity stored on disk (executable file), and it becomes a process when the executable file is loaded into memory. One program can be executed multiple times, generating multiple processes.", { qb: 'Q1' });
  exp(7, 'm', "List process parts in memory with brief description of each.",
    [["Text section: contains the program code", "program code", "the code"],
     ["Data section: contains the global variables", "global"],
     ["Stack: function parameters, return addresses, and local variables", "function parameters", "return address", "local variable"],
     ["Heap: dynamically allocated memory during run time", "dynamically", "dynamic"]],
    "Text section contains the program code. Data section contains the global variables. Stack contains function parameters, return addresses, and local variables. Heap contains dynamically allocated memory during run time.", { qb: 'Q5' });
  draw(7, 'm', "Draw the diagram of the process parts in memory.", 'processMemory',
    [["Stack at the top (max)", "stack"], ["Heap (with free space between it and the stack)", "heap"], ["Data", "data"], ["Text at the bottom (0)", "text"]],
    "From the top (max) to the bottom (0): stack, free space (the stack and heap grow toward each other), heap, data, text.", { qb: 'Q6' });
  exp(8, 'm', "List the process states with brief description of each.",
    [["New: the process is being created", "being created", "created"],
     ["Running: instructions are being executed", "being executed", "instructions"],
     ["Waiting: waiting for some event to occur", "event"],
     ["Ready: waiting to be assigned to a processor", "assigned"],
     ["Terminated: the process has finished execution", "finished"]],
    "New: the process is being created. Running: instructions are being executed. Waiting: the process is waiting for some event to occur. Ready: the process is waiting to be assigned to a processor. Terminated: the process has finished execution.", { qb: 'Q7' });
  draw(8, 'm', "Draw the Diagram of Process States.", 'processStates',
    [["The five states: new, ready, running, waiting, terminated", "new", "terminated"], ["Admitted (new → ready) and exit (running → terminated)", "admitted", "exit"], ["Scheduler dispatch (ready → running) and interrupt (running → ready)", "dispatch", "interrupt"], ["I/O or event wait (running → waiting) and I/O or event completion (waiting → ready)", "event wait", "completion", "i/o"]],
    "New → (admitted) → ready → (scheduler dispatch) → running → (exit) → terminated. Running → (interrupt) → ready. Running → (I/O or event wait) → waiting → (I/O or event completion) → ready.", { qb: 'Q8' });
  exp(11, 'm', "List the scheduling queues with brief description of each.",
    [["Job queue: set of all processes in the system", "all processes in the system", "job queue"],
     ["Ready queue: processes residing in main memory, ready and waiting to execute", "main memory", "ready and waiting", "ready queue"],
     ["Device queues: processes waiting for an I/O device", "i/o device", "device queue"],
     ["Processes migrate among the various queues", "migrate", "move between", "move among"]],
    "Job queue: set of all processes in the system. Ready queue: set of all processes residing in main memory, ready and waiting to execute. Device queues: set of processes waiting for an I/O device. Processes migrate among the various queues.", { qb: 'Q11' });
  draw(12, 'm', "Draw the Diagram of Process Scheduling Queues.", 'schedQueues',
    [["Job queue → ready queue", "job queue"], ["Ready queue → CPU", "cpu"], ["CPU → exit, and CPU back to the ready queue", "exit"], ["CPU → I/O waiting queue → I/O → ready queue", "i/o waiting", "waiting queue", "i/o"]],
    "Job queue → ready queue → CPU → exit. The CPU may return the process to the ready queue, or send it to the I/O waiting queue, then I/O, then back to the ready queue.", { qb: 'Q12' });
  draw(17, 'm', "Draw the diagram of inter-processes communications models.", 'ipc',
    [["Message passing: process A and process B", "message passing"], ["Message queue (m0, m1, … mn) in the kernel", "message queue", "m0"], ["Shared memory region between process A and process B", "shared memory"], ["Kernel at the bottom of both models", "kernel"]],
    "(a) Message passing: process A and process B send and receive through a message queue (m0, m1, m2 … mn) in the kernel. (b) Shared memory: process A and process B both access a shared memory region between them; the kernel is at the bottom.", { qb: 'Q20' });
  draw(22, 'm', "Draw the diagram for Multithreaded Server Architecture Example.", 'threadServer',
    [["Client", "client"], ["(1) request to the server", "request"], ["(2) create new thread to service the request", "create new thread", "new thread", "creates"], ["(3) resume listening for additional client requests", "listening", "resume"]],
    "The client sends (1) a request to the server. The server (2) creates a new thread to service the request, one thread for each request, and (3) resumes listening for additional client requests.", { qb: 'Q26' });
  exp(23, 'm', "List the benefits of multithreaded programming with brief on each.",
    [["Responsiveness: may allow continued execution if part of the process is blocked", "responsive", "continued execution", "blocked"],
     ["Resource sharing: threads share resources of the process, easier than shared memory or message passing", "resource sharing", "share resources"],
     ["Economy: cheaper than process creation; thread switching has lower overhead than context switching", "econom", "cheaper"],
     ["Scalability: the process can take advantage of multiprocessor architectures", "scalab", "multiprocessor"]],
    "Responsiveness: may allow continued execution if part of the process is blocked, especially important for user interfaces. Resource sharing: threads share resources of the process, easier than shared memory or message passing. Economy: cheaper than process creation, and thread switching has lower overhead than context switching. Scalability: the process can take advantage of multiprocessor architectures.", { qb: 'Q27' });
  exp(25, 'm', "Explain the difference between parallelism and concurrency.",
    [["Concurrency supports more than one task making progress", "making progress", "progress"],
     ["It can be implemented by a single processor / core with a scheduler", "single processor", "single core", "one core", "scheduler"],
     ["Parallelism: the system performs more than one task simultaneously", "simultaneous", "exactly the same time"],
     ["On a multi-core system", "multi core", "multicore", "multiple cores"]],
    "Concurrency supports more than one task making progress; this can be implemented by a single processor / core with a scheduler. Parallelism implies a system can perform more than one task simultaneously on a multi-core system.", { qb: 'Q29' });
  draw(25, 'm', "Draw a diagram shows the difference between parallelism and concurrency.", 'concurrency',
    [["Single core running T1, T2, T3, T4, T1 … one after the other (concurrency)", "single core", "concurrency", "one core"], ["Core 1 running T1, T3, T1, T3 …", "core 1"], ["Core 2 running T2, T4, T2, T4 … at the same time (parallelism)", "core 2"], ["Time axis", "time"]],
    "Concurrency: a single core runs T1, T2, T3, T4, T1, T2 … one after the other along the time axis. Parallelism: core 1 runs T1, T3, T1, T3 … while core 2 runs T2, T4, T2, T4 … at the same time.", { qb: 'Q30' });
  exp([13, 15], 'm', "Explain process creation and process termination.",
    [["Creation: parent processes create children processes, forming a tree", "tree", "children"],
     ["A process is identified and managed via a process identifier (pid)", "pid", "identifier"],
     ["Termination: the process executes its last statement and asks the OS to delete it using a system call", "last statement", "system call", "delete"],
     ["Status data returns from child to parent and the OS de-allocates the resources", "status", "de allocat", "deallocat"]],
    "Creation: a parent process creates children processes, which in turn create other processes, forming a tree of processes; each is identified and managed via a process identifier (pid). Termination: the process executes its last statement and asks the operating system to delete it using a system call; it returns status data from child to parent, and its resources are de-allocated by the operating system.");
  exp([16, 17], 'h', "Compare the two models of inter-process communication.",
    [["Shared memory: the processes use a common region of memory", "shared memory", "common region", "same region"],
     ["Process A and process B both read and write that region", "read and write", "both access", "both use", "both processes"],
     ["Message passing: processes exchange messages", "message passing", "messages"],
     ["The message queue is kept in the kernel", "message queue", "kernel"]],
    "In shared memory, process A and process B both access a shared memory region to exchange data. In message passing, the processes exchange messages through a message queue that is kept in the kernel.");

  calc([26, 28], 'm', "Using Amdahl's Law, calculate the speed up factor for moving from single processor to five processors with an algorithm that has 80% parallel part.",
    [["N = 5", "#5", "n = 5"], ["S = 1 − P = 1 − 0.8 = 0.2", "#0.2"], ["Formula: speedup = 1 / (S + (1 − S) / N)", "speedup", "1 / s", "speed up"], ["0.2 + 0.8 / 5 = 0.36", "#0.36"], ["Speedup ≈ 2.78", "#2.78", "#2.777", "#2.8"]],
    "N = 5, S = 1 − P = 1 − 0.8 = 0.2. Speedup = 1 / (S + (1 − S) / N) = 1 / (0.2 + 0.8 / 5) = 1 / 0.36 = 2.78.", { qb: 'AA1' });
  calc([26, 28], 'm', "Using Amdahl's Law, calculate the speed up factor for moving from single processor to ten processors with an algorithm that has 40% serial part.",
    [["N = 10", "#10"], ["S = 0.4", "#0.4"], ["Formula: speedup = 1 / (S + (1 − S) / N)", "speedup", "1 / s", "speed up"], ["0.4 + 0.6 / 10 = 0.46", "#0.46"], ["Speedup ≈ 2.17", "#2.17", "#2.174", "#2.2"]],
    "N = 10, S = 0.4. Speedup = 1 / (S + (1 − S) / N) = 1 / (0.4 + 0.6 / 10) = 1 / 0.46 = 2.17.", { qb: 'AA2' });
  calc([26, 28], 'm', "Using Amdahl's Law, calculate the speed up factor for moving from single processor to eight processors with an algorithm that has 75% parallel part.",
    [["N = 8", "#8"], ["S = 1 − P = 0.25", "#0.25"], ["Formula: speedup = 1 / (S + (1 − S) / N)", "speedup", "1 / s", "speed up"], ["0.25 + 0.75 / 8 = 0.34375", "#0.34", "#0.344", "#0.34375"], ["Speedup ≈ 2.91", "#2.91", "#2.9"]],
    "N = 8, S = 1 − P = 1 − 0.75 = 0.25. Speedup = 1 / (S + (1 − S) / N) = 1 / (0.25 + 0.75 / 8) = 1 / 0.34375 = 2.91.");
  calc([26, 28], 'm', "Using Amdahl's Law, calculate the speed up factor for moving from single processor to three processors with an algorithm that has 10% serial part.",
    [["N = 3", "#3"], ["S = 0.1", "#0.1"], ["Formula: speedup = 1 / (S + (1 − S) / N)", "speedup", "1 / s", "speed up"], ["0.1 + 0.9 / 3 = 0.4", "#0.4"], ["Speedup = 2.5", "#2.5"]],
    "N = 3, S = 0.1. Speedup = 1 / (S + (1 − S) / N) = 1 / (0.1 + 0.9 / 3) = 1 / 0.4 = 2.5.");
  calc(26, 'h', "An application has 60% parallel part. Using Amdahl's Law, calculate its speed up with four cores, then the maximum speed up when the number of cores approaches infinity.",
    [["S = 1 − 0.6 = 0.4", "#0.4"], ["0.4 + 0.6 / 4 = 0.55", "#0.55"], ["Speedup with four cores ≈ 1.82", "#1.82", "#1.818", "#1.8"], ["Maximum speedup = 1 / S", "1 / s", "1/0.4", "1 over s"], ["1 / 0.4 = 2.5", "#2.5"]],
    "S = 1 − 0.6 = 0.4. With N = 4: speedup = 1 / (0.4 + 0.6 / 4) = 1 / 0.55 = 1.82. When N approaches infinity the speedup approaches 1 / S = 1 / 0.4 = 2.5.");
  calc(26, 'h', "Program A has 90% parallel part and runs on 2 cores. Program B has 50% parallel part and runs on 10 cores. Using Amdahl's Law, which program gets the larger speed up?",
    [["Program A: S = 0.1", "#0.1"], ["Speedup A = 1 / (0.1 + 0.9 / 2) = 1 / 0.55 ≈ 1.82", "#1.82", "#1.818"], ["Program B: S = 0.5", "#0.5"], ["Speedup B = 1 / (0.5 + 0.5 / 10) = 1 / 0.55 ≈ 1.82", "#1.82", "#1.818"], ["Both speedups are equal", "equal", "same", "both"]],
    "Program A: S = 0.1, speedup = 1 / (0.1 + 0.9 / 2) = 1 / 0.55 = 1.82. Program B: S = 0.5, speedup = 1 / (0.5 + 0.5 / 10) = 1 / 0.55 = 1.82. Both speedups are equal: with a large serial part, ten cores give no more than two cores do with a small one.");

  pick([19, 22, 23], 'm', "A web server gets thousands of requests every second. Making a new process for each request is too slow and uses too much memory. What is the best design? Why?",
    ["Make a new process for each request", "Make a new thread for each request inside one server process", "Answer the requests one by one with only one thread"], 1,
    [["Creating threads is cheaper and faster than creating processes (economy)", "cheaper", "econom", "faster", "overhead"], ["Threads share the memory / resources of the process, and the server can keep listening for other requests", "share", "listening", "less memory"]],
    "Creating a thread is cheaper than creating a process and thread switching has lower overhead. Threads share the resources of the process, so less memory is used, and the server resumes listening for other requests.", { qb: 'CE1' });
  pick([19, 23], 'm', "A word processor stops working while it checks the spelling of a long document. The user cannot type until the check is finished. What is the best way to fix this? Why?",
    ["Do the spell checking in a separate thread", "Keep one thread but give the program a higher priority", "Add more RAM to the computer"], 0,
    [["Responsiveness: the program continues execution even if part of the process is busy or blocked", "responsive", "continue", "blocked", "keep typing", "can type"], ["The spell checking runs in its own thread, concurrently with typing", "own thread", "separate thread", "concurrent", "same time", "another thread"]],
    "Spell checking runs in a separate thread concurrently with the typing thread. This gives responsiveness: the program continues execution even if part of the process is blocked or busy.", { qb: 'CE2' });
  pick(25, 'm', "A small media player has only one CPU core. It plays music and downloads files \"at the same time\". Which word describes this correctly? Why?",
    ["Concurrency", "Parallelism", "Both concurrency and parallelism"], 0,
    [["With one core, the scheduler switches between the tasks so both make progress", "scheduler", "switch", "progress", "turns"], ["Parallelism needs a multi-core system to run tasks simultaneously", "multi core", "multicore", "more than one core", "only one core", "one core", "single core"]],
    "There is only one core, so the scheduler switches between the two tasks and both make progress: this is concurrency. Parallelism needs a multi-core system to run tasks simultaneously.", { qb: 'CE3' });
  pick([16, 17], 'h', "Two cooperating processes must exchange data through messages kept in a queue inside the kernel, without sharing any memory region. Which model is the best? Why?",
    ["Shared memory", "Message passing", "Multithreading"], 1,
    [["Messages are exchanged through a message queue in the kernel", "message queue", "kernel", "messages"], ["No memory region is shared between the processes", "no shared", "not share", "without sharing", "no memory"]],
    "In message passing, the processes exchange messages through a message queue in the kernel, and no memory region is shared between them.");
  pick([24, 25], 'm', "A video program must process two parts of a film at exactly the same moment. Which system should run it? Why?",
    ["A single-core system with a scheduler", "A multi-core system", "A single-task system with one process"], 1,
    [["Parallelism: more than one task performed simultaneously", "parallel", "simultaneous"], ["Each core runs one part; a single core only switches between tasks", "each core", "core", "switch"]],
    "Only a multi-core system gives parallelism: it performs more than one task simultaneously because each core runs one part. A single core can only switch between the tasks.");
  pick(26, 'h', "An application has a 50% serial part. A manager wants to buy 100 more cores to make it 10 times faster. What is the best advice? Why?",
    ["Buy the 100 cores, because speedup is equal to the number of cores", "Reduce the serial part first, because the maximum speedup is 2", "Buy 10 cores, because each core doubles the speed"], 1,
    [["As N approaches infinity the speedup approaches 1 / S = 1 / 0.5 = 2", "1 / s", "#2", "maximum speedup", "approaches"], ["The serial portion limits the performance gained by adding cores", "serial"]],
    "The speedup approaches 1 / S = 1 / 0.5 = 2, so it can never be 10. The serial portion limits the performance gained by adding cores, so it must be reduced first.");
});
