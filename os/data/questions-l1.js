/* Lecture 1: Introduction to OS (PDF pages 1-24). Not used: pages 9, 16, 17, 20, 24 ("not required in the exam"). */
EC.lecture(1, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, pick = Q.pick;

  /* ---------- Section A: multiple choice ---------- */
  mcq(5, 'e', "An operating system is a program that:",
    ["manages the computer hardware and provides a basis for application programs", "manages the application programs and provides a basis for computer hardware", "manages both application programs and computer hardware", "provides an environment within which computer hardware can do work"], "The OS manages the hardware and is the base for application programs.", { qb: 'S1' });
  mcq([22, 23], 'm', "In the drawing of the Computer Startup Operation, select the correct choice:",
    ["1. BIOS Loads MBR  2. MBR Loads boot loader  3. Boot loader Loads OS", "1. BIOS Loads boot loader  2. Boot loader loads MBR  3. MBR Loads OS", "1. BIOS Loads OS  2. OS Loads boot loader  3. Boot loader loads MBR", "1. MBR Loads BIOS  2. BIOS Loads boot loader  3. Boot loader Loads OS"], "BIOS → MBR → boot loader → selected OS.", { qb: 'S2', qfig: 'startupBlank' });
  // What is an OS p5
  mcq(5, 'e', "The operating system acts as an intermediary between…",
    ["the user application and the hardware", "the CPU and the physical main memory", "the kernel and the boot loader program", "the keyboard and the monitor"], "Slide 5.");
  mcq(5, 'e', "The core component of the operating system that is running at all times on the computer is the…",
    ["kernel", "boot loader", "command interpreter", "system software"], "Definition of kernel.");
  mcq(5, 'm', "Which is NOT one of the resources the OS manages as a resource manager?",
    ["Application source code", "CPU time of the processor", "File storage on the disk", "I/O devices"], "The four resources are CPU time, memory, file storage and I/O devices.");
  mcq(5, 'm', "When the OS manages the execution of application programs and prevents errors and improper use of the computer, it acts as a…",
    ["control program", "resource manager", "system program", "boot manager"], "Slide 5.");
  mcq(5, 'm', "The OS divides the available CPU time and memory between the running programs. In this role it acts as a…",
    ["resource manager", "control program", "user interface", "system call"], "CPU time and memory are managed resources.");
  mcq(5, 'm', "“It provides an environment within which application programs can do work” describes the…",
    ["operating system", "application software", "Master Boot Record", "hardware"], "Slide 5.");
  // Components p6-7
  mcq(6, 'e', "Which computer system component provides the basic computing resources: CPU, memory, secondary storage and I/O devices?",
    ["Hardware", "Operating system", "System software", "Application software"], "Slide 6.");
  mcq(6, 'e', "Utilities that are associated with the operating system but are not part of the kernel are called…",
    ["system software", "application software", "system calls", "hardware drivers"], "Slide 6.");
  mcq(6, 'e', "Web browsers, database systems and video games are examples of…",
    ["application software", "system software utilities", "operating systems", "kernel components"], "They help end-users perform specific tasks.");
  mcq(6, 'm', "In the list of computer system components, “users” are…",
    ["people, or other machines", "people only", "application programs only", "the administrators of the OS"], "Slide 6.");
  mcq(6, 'm', "What is the main difference between system software and application software?",
    ["System software is associated with the OS; application software helps end-users do specific tasks", "System software is the kernel itself; application software is every utility outside of the kernel", "System software runs without any hardware; application software needs a CPU and memory to run", "System software is written by end-users; application software is always shipped inside the kernel"], "Slide 6.");
  mcq(7, 'm', "In the diagram of computer system components, system software and application software both sit directly on top of the…",
    ["operating system", "computer hardware", "users of the system", "CPU and RAM"], "Both point down to the operating system, which points to the hardware.");
  mcq(7, 'm', "In the diagram of computer system components, which three items appear inside the hardware block?",
    ["CPU, RAM and I/O", "CPU, kernel and RAM", "BIOS, MBR and I/O", "Users, RAM and CPU"], "Slide 7.");
  // Services p8
  mcq(8, 'e', "Which OS service loads a program into memory, runs it, and ends its execution either normally or abnormally?",
    ["Program execution", "I/O operations", "File-system manipulation", "User interface"], "Slide 8.");
  mcq(8, 'e', "Which OS service enables processes to exchange information?",
    ["Inter-process communications", "I/O operations", "Program execution", "File-system manipulation service"], "Slide 8.");
  mcq(8, 'm', "Permission management belongs to which operating system service?",
    ["File-system manipulation", "Program execution", "User interface", "Inter-process communications"], "Along with create/delete, read/write, list/search.");
  mcq(8, 'm', "A running program needs a way to interact with a printer. Which OS service offers this?",
    ["I/O operations", "Program execution", "File-system manipulation", "Inter-process communications"], "Interaction with I/O devices.");
  mcq(8, 'h', "A program crashes, and the OS ends it abnormally. Which service is responsible for ending it?",
    ["Program execution", "I/O operations", "Inter-process communications", "User interface"], "Program execution ends execution normally or abnormally.");
  // Functions p10
  mcq(10, 'e', "Which OS function ensures that each process receives enough time from the processor to function properly?",
    ["Processor management", "Memory management", "Input-output device management", "File management"], "Slide 10.");
  mcq(10, 'e', "Which OS function manages the allocation and deallocation of memory to various processes?",
    ["Memory management", "Processor management", "File management", "Security"], "Slide 10.");
  mcq(10, 'm', "Assuring the integrity and confidentiality of user data is the OS function called…",
    ["security", "error detection", "file management", "device management"], "Slide 10.");
  mcq(10, 'm', "Keeping track of the creation, deletion, transfer, copy and storage of files in an organized way is…",
    ["file management", "memory management", "device management", "error detection"], "Slide 10.");
  mcq(10, 'm', "The OS receives requests from input-output devices, performs a specific task, and communicates back to the requesting process. This is…",
    ["device management", "processor management", "file management", "error detection"], "Slide 10.");
  mcq(10, 'm', "What does the OS do when it detects damaged hardware or a software error?",
    ["It displays a proper alert to the user so that the appropriate action can be taken", "It deletes the program that caused the error and then reinstalls it from the disk drive", "It restarts the computer and transfers the control to the Master Boot Record", "It hides the error from the user and continues to run the same program again"], "Error detection, slide 10.");
  mcq(10, 'h', "One process tries to use memory that was allocated to another process, and the OS prevents it. Which OS function is this?",
    ["Memory management", "Device management", "Error detection", "File management"], "It ensures other processes do not consume memory allocated to one process.");
  // UI p11-13
  mcq(11, 'e', "Which user interface allows direct command entry?",
    ["Command Line Interface", "Graphical User Interface", "Touch Screen Interface", "Application Programming Interface"], "CLI, or command interpreter.");
  mcq(11, 'm', "The Command Line Interface is implemented…",
    ["in the kernel, or by a system program", "only inside the hardware of the CPU", "by the web browser of the end-user", "inside the Master Boot Record of the disk"], "Slide 11.");
  mcq(11, 'm', "In a CLI, the commands are either…",
    ["built-in, or other programs", "icons, or desktop folders", "gestures, or virtual keys", "interrupts, or registers"], "Slide 11.");
  mcq(11, 'm', "Another name for the Command Line Interface is the…",
    ["command interpreter", "system call interface", "boot manager", "desktop interface"], "Slide 11.");
  mcq(12, 'e', "In a Graphical User Interface, files, programs and actions are represented by…",
    ["icons", "commands", "gestures", "registers"], "Slide 12.");
  mcq(12, 'm', "A GUI is a user-friendly desktop interface that usually interacts with…",
    ["mouse, keyboard and monitor", "gestures and a virtual keyboard", "typed commands and scripts", "registers, memory block and stack"], "Slide 12.");
  mcq(13, 'e', "In a touch screen interface, actions and selection are based on…",
    ["gestures", "icons and mouse buttons", "built-in commands", "system programs"], "Slide 13.");
  mcq(13, 'm', "How is text entered in a touch screen interface?",
    ["With a virtual keyboard", "With a required mouse", "With built-in commands", "With a hardware interrupt"], "Slide 13.");
  mcq(13, 'm', "A touchscreen interface is described as…",
    ["a combined display/input device", "a command interpreter in the kernel", "an input device without a display", "a desktop controlled by mouse buttons"], "The screen displays a graphical interface and touching it is the input.");
  // System calls p14-15
  mcq(14, 'e', "System calls are…",
    ["the programming interface to the services provided by the OS", "the hardware signals sent to the CPU from a specified device", "the small programs that load the selected OS into memory", "the graphical icons that represent files, programs and actions"], "Slide 14.");
  mcq(14, 'm', "A set of routines, data structures, object classes and/or protocols provided to support the building of applications is an…",
    ["API", "MBR", "BIOS", "CLI"], "Application Programming Interface.");
  mcq(14, 'm', "Which API is used for UNIX versions?",
    ["POSIX API", ".NET API", "Java API", "Android API"], "POSIX-based systems are mainly UNIX versions.");
  mcq(14, 'm', "Which API is used for Windows?",
    [".NET API", "POSIX API", "Java API", "UNIX API"], "Slide 14.");
  mcq(14, 'm', "Most details of the OS interface are hidden from the programmer by the…",
    ["API", "kernel", "boot loader", "command interpreter"], "Slide 14.");
  mcq(14, 'm', "The system call interface invokes the intended system call in the OS kernel and returns…",
    ["the status of the system call and any return values", "the source code of the system call and its address", "the number of registers used and the stack size", "the list of all processes and their memory space"], "Slide 14.");
  mcq(14, 'h', "What does the caller of a system call need to know?",
    ["How to obey the API and what the OS will do as a result of the call", "How the system call is implemented inside the code of the kernel", "The physical address where the kernel is loaded in the main memory of the PC", "Which registers the BIOS used when the computer was powered up"], "Slide 14.");
  mcq(15, 'm', "In the System Call – OS Relationship diagram, the system call interface lies between…",
    ["user mode and kernel mode", "the CPU and the memory", "the BIOS and the MBR", "the ready and waiting states"], "Slide 15.");
  mcq(15, 'h', "In the System Call – OS Relationship diagram, where is the system call implementation found?",
    ["In kernel mode, below the system call interface", "In user mode, inside the user application", "In user mode, above the system call interface", "Inside the hardware, below the kernel mode"], "Slide 15.");
  // Parameter passing p18
  mcq(18, 'e', "Which system call parameter passing method limits the number of parameters?",
    ["Registers", "Memory block", "Stack", "Message queue"], "There is a limited number of registers.");
  mcq(18, 'm', "In the memory block method, what is passed as a parameter in a register?",
    ["The address of the block", "Every parameter itself", "The size of the stack", "The status of the call"], "Slide 18.");
  mcq(18, 'm', "In the stack method, the parameters are…",
    ["pushed by the program and popped off by the operating system", "pushed by the operating system and popped off by the program", "stored in a memory block whose address is put in a register", "placed one by one in the limited number of registers"], "Slide 18.");
  mcq(18, 'h', "A system call must pass 60 long parameters. Which methods can be used?",
    ["Memory block or stack", "Registers or stack", "Registers only", "Registers or memory block"], "Block and stack do not limit the number or length of parameters.");
  // OS types p19, 21
  mcq(19, 'e', "Which is an example of a single-task operating system?",
    ["MS-DOS", "Ubuntu", "Android", "Windows 10"], "Slide 19.");
  mcq(19, 'm', "In a single-task OS, after the program exits…",
    ["the CLI is reloaded", "the kernel is deleted", "the BIOS starts again", "the next process is swapped in"], "Slide 19.");
  mcq(19, 'm', "When a single-task OS loads a program into memory, what stays in memory and is never overwritten?",
    ["The kernel", "The command interpreter", "The previous process", "The free memory"], "It overwrites all but the kernel.");
  mcq(19, 'h', "In the single-task OS memory map, which order is correct from the bottom to the top?",
    ["Kernel, command interpreter, process, free memory", "Command interpreter, kernel, free memory, process", "Process, command interpreter, kernel, free memory", "Free memory, process, command interpreter, kernel"], "Slide 19.");
  mcq(21, 'e', "In a multi-task OS, multiple processes can run at the same time, each with its own…",
    ["memory space", "kernel", "boot loader", "BIOS"], "Slide 21.");
  mcq(21, 'm', "Which list contains only multi-task operating systems?",
    ["Ubuntu, Windows 10, Android", "MS-DOS, Ubuntu, IOS", "Windows 10, MS-DOS, Android", "Android, IOS, MS-DOS"], "MS-DOS is single-task.");
  // Startup p22-23
  mcq(22, 'e', "The simple initial program that runs when the computer is powered up is the…",
    ["BIOS", "MBR", "boot loader", "kernel"], "Slide 22.");
  mcq(22, 'e', "The first sector on the disk, which contains the small code that starts the boot process, is the…",
    ["Master Boot Record", "boot manager of the OS", "BIOS", "kernel of the operating system"], "Slide 22.");
  mcq(22, 'e', "A small program that loads the selected OS into memory is the…",
    ["boot loader", "BIOS", "Master Boot Record", "command interpreter"], "Also called boot manager.");
  mcq(23, 'm', "Which step comes directly after the MBR loads the boot loader?",
    ["The boot loader displays OS options to the user", "The BIOS checks the hardware for damage", "The BIOS loads the MBR from the first sector of the disk", "The boot loader loads the selected OS"], "Slide 23.");
  mcq(23, 'm', "What is the first step of the computer startup operation?",
    ["BIOS checks hardware", "BIOS loads MBR", "MBR loads boot loader", "Boot loader loads selected OS"], "Slide 23.");
  mcq(22, 'm', "After the OS is loaded into memory and takes control of the computer, the computer system will…",
    ["sit idle waiting for an event", "delete the boot loader from the disk", "return the control to the BIOS", "check the hardware again and again"], "Slide 22.");
  mcq(22, 'e', "Modern operating systems are said to be…",
    ["interrupt driven", "command driven", "single-task driven", "register driven"], "They wait for something to happen by interrupts.");
  mcq(22, 'm', "A keyboard click sends a signal to the CPU. This is a…",
    ["hardware interrupt", "software interrupt", "system call", "context switch"], "The signal comes from a device.");
  mcq(22, 'm', "An email program executes a system call to check for new emails. This causes a…",
    ["software interrupt", "hardware interrupt", "boot process", "memory block"], "Software interrupts occur by executing a system call.");
  mcq(22, 'h', "Which event is a hardware interrupt according to the slides?",
    ["A message arriving from a remote computer", "A program executing a system call in the OS", "An email program checking for emails", "A program calling the POSIX API"], "Hardware interrupts come from a device.");

  /* ---------- Section C: true / false ---------- */
  tf(12, 'e', "Many systems now include both CLI and GUI interfaces.", true, "Slide 12.", { qb: 'Q16' });
  tf(13, 'e', "Touchscreen devices require a lot of mouse interaction.", false, "Mouse is not desired.", { qb: 'Q17' });
  tf(13, 'e', "Touchscreen devices use virtual keyboard.", true, "Virtual keyboard for text entry.", { qb: 'Q18' });
  tf([19, 21], 'e', "Example of Multi-Task OS is MS-DOS.", false, "MS-DOS is a single-task OS.", { qb: 'Q28' });
  tf(5, 'e', "The kernel is the OS core component that is running at all times on the computer.", true, "Slide 5.");
  tf(5, 'm', "The OS provides an environment within which the computer hardware can do work.", false, "It provides an environment for application programs.");
  tf(6, 'm', "System software is the part of the operating system that forms the kernel.", false, "System software is associated with the OS but is not part of the kernel.");
  tf(6, 'm', "The users of a computer system can be other machines, not only people.", true, "Slide 6.");
  tf(8, 'm', "File-system manipulation includes listing and searching files and folders.", true, "Slide 8.");
  tf(8, 'm', "The OS can end the execution of a program only normally, never abnormally.", false, "Either normally or abnormally.");
  tf(10, 'm', "Error detection means that the OS checks both hardware damage and software errors.", true, "Slide 10.");
  tf(10, 'm', "Security in the OS assures the integrity and confidentiality of user data.", true, "Slide 10.");
  tf(11, 'm', "A CLI can be implemented in the kernel or by a system program.", true, "Slide 11.");
  tf(11, 'm', "All CLI commands are built-in; they can never be other programs.", false, "Commands are either built-in, or other programs.");
  tf(14, 'm', "The API hides most details of the OS interface from the programmer.", true, "Slide 14.");
  tf(14, 'h', "The POSIX API is mainly used for Windows and the .NET API for UNIX versions.", false, "It is the opposite.");
  tf(18, 'm', "The stack method limits the number of parameters that can be passed to the OS.", false, "Only registers limit the number.");
  tf(18, 'h', "In the memory block method, the parameters are popped off the stack by the operating system.", false, "That is the stack method.");
  tf(19, 'm', "In a single-task OS, the application program takes full control of the computer.", true, "Slide 19.");
  tf(21, 'm', "In a multi-task OS, all processes share one single memory space.", false, "Each process has its own memory space.");
  tf(22, 'm', "The MBR is the last sector on the disk.", false, "It is the first sector.");
  tf(22, 'e', "The boot loader is also called the boot manager.", true, "Slide 22.");
  tf(22, 'm', "The BIOS transfers control to the code in the MBR.", true, "Slide 22.");
  tf(22, 'h', "A software interrupt occurs when a device sends a signal to the CPU.", false, "That is a hardware interrupt.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(5, 'e', "The operating system acts as resource manager for: [[CPU time|cpu|processor time]], [[memory]], [[file storage|storage|files]], and [[I/O devices|io devices|input output devices|I/O]].", "Slide 5.", { set: true, qb: 'Q2' });
  fill(5, 'm', "The OS acts as an intermediary between [[user application|application|user applications|applications|user]] and [[hardware|the hardware]], and provides an [[environment]] within which applications can do work.", "Slide 5.", { set: [0, 1], qb: 'Q3' });
  fill(11, 'e', "CLI allows for [[direct command entry|command entry|direct commands entry]].", "Slide 11.", { qb: 'Q12' });
  fill(11, 'h', "CLI user interface is implemented by [[kernel|the kernel]] or [[system program|system programs|a system program]], and commands are either [[built-in|builtin|built in commands]], or [[other programs|programs|other program]].", "Slide 11.", { set: [[0, 1], [2, 3]], qb: 'Q13' });
  fill(12, 'e', "The GUI user interface usually interacts with [[mouse]], [[keyboard]], and [[monitor|screen]].", "Slide 12.", { set: true, qb: 'Q14' });
  fill(12, 'e', "In GUI user interface, [[icons|icon]] represent files, programs, and actions.", "Slide 12.", { qb: 'Q15' });
  fill(13, 'e', "In Touch Screen Interface, actions and selection are based on [[gestures|gesture]].", "Slide 13.", { qb: 'Q19' });
  fill(14, 'e', "Most details of OS interface hidden from programmer by [[API|application programming interface|the API]].", "Slide 14.", { qb: 'Q22' });
  fill(14, 'm', "The system call interface invokes the intended system call in OS kernel and returns [[status|the status]] of the system call and any [[return values|return value|returned values]].", "Slide 14.", { qb: 'Q23' });
  fill([19, 21], 'm', "In [[single-task|single task|singletask]] OS single memory space is used, while in [[multi-task|multi task|multitask|multitasking]] OS each task will have its own memory space.", "Slides 19 and 21.", { qb: 'Q26' });
  fill(19, 'm', "In Single-Task OS, CLI loads the program into memory, overwriting [[all but the kernel|everything but the kernel|all except the kernel|everything except the kernel]].", "Slide 19.", { qb: 'Q27' });
  fill(22, 'm', "After loading, modern operating systems will [[sit idle waiting for an event|wait for an event|sit idle|sit idle and wait for an event|sit idle waiting for event]].", "Slide 22.", { qb: 'Q35' });
  fill(22, 'e', "Modern OS is [[interrupt|interrupts]] driven, so it will wait for something to happen by [[interrupts|interrupt]].", "Slide 22.", { qb: 'Q36' });
  fill(18, 'm', "The System Call Parameter Passing method that limits the number of parameters being passed is [[registers|register]].", "We have a limited number of registers.", { qb: 'S3' });
  fill(5, 'e', "The OS core component that is running at all times on the computer is called the [[kernel]].", "Slide 5.");
  fill(5, 'm', "The OS acts as a [[control program]] that manages the execution of application programs and prevents errors and improper use of the computer.", "Slide 5.");
  fill(6, 'm', "Utilities associated with the operating system but not part of the kernel are called [[system software|system softwares]].", "Slide 6.");
  fill(6, 'e', "Programs that help end-users to perform specific tasks, such as a word editor, are called [[application software|applications|application programs|application softwares]].", "Slide 6.");
  fill(8, 'm', "The OS service that enables processes to exchange information is [[inter-process communications|inter-process communication|interprocess communication|IPC]].", "Slide 8.");
  fill(10, 'm', "Security assures the [[integrity]] and [[confidentiality]] of user data.", "Slide 10.", { set: true });
  fill(10, 'm', "The OS function that controls the working of the input-output devices is [[device management]].", "Slide 10.");
  fill(13, 'e', "The touch screen interface uses a [[virtual keyboard]] for text entry.", "Slide 13.");
  fill(14, 'm', "[[System calls|system call]] are the programming interface to the services provided by the OS.", "Slide 14.");
  fill(14, 'm', "The [[POSIX]] API is used mainly for UNIX versions, and the [[.NET|net|dot net]] API is used for Windows.", "Slide 14.");
  fill(18, 'm', "In the stack method, parameters are [[pushed]] onto the stack by the program and [[popped]] off the stack by the operating system.", "Slide 18.");
  fill(18, 'h', "In the memory block method, the [[address]] of the block is passed as a parameter in a [[register]].", "Slide 18.");
  fill(22, 'e', "The first sector on the disk, with the small code that starts the boot process, is the [[Master Boot Record|MBR]].", "Slide 22.");
  fill(22, 'e', "The program that loads the selected OS into memory is the [[boot loader|bootloader|boot manager]].", "Slide 22.");
  fill(22, 'm', "The simple initial program that runs when the computer is powered up is the [[BIOS]].", "Slide 22.");
  fill(22, 'm', "[[Hardware|hardware interrupts]] interrupts usually occur by sending a signal to the CPU from a specified device.", "Slide 22.");

  /* ---------- Section D: define and list ---------- */
  def(5, 'e', 2, "Define Operating System, and Kernel.",
    [["Operating system: a program that manages the computer hardware and provides the base for application programs", "manages the computer hardware", "manage hardware", "manages hardware", "base for application", "basis for application"],
     ["Kernel: the OS core component that is running at all times on the computer", "core component", "running at all times", "runs at all times", "all times"]],
    "An operating system is a program that manages the computer hardware and provides the base for application programs. The kernel is the operating system core component that is running at all times on the computer.", { qb: 'Q1' });
  def(5, 'm', 2, "How the operating system acts as control program?",
    [["Manages the execution of application programs", "execution of application", "execution of program", "manages the execution", "manage the execution"],
     ["Prevents errors and improper use of the computer", "prevent error", "prevents error", "improper use"]],
    "It acts as a control program that manages the execution of application programs and prevents errors and improper use of the computer.", { qb: 'Q4' });
  def(10, 'm', 2, "What is the OS reaction to errors?",
    [["Checks the hardware for any type of damage, or any software error", "damage", "checks the hardware", "software error", "detects"],
     ["Displays a proper alert to the user so that the appropriate action can be taken", "alert", "appropriate action"]],
    "The OS checks the hardware for any type of damage, or any software error, then displays a proper alert to the user so that the appropriate action can be taken.", { qb: 'Q10' });
  list([11, 12, 13], 'e', 3, "List only the user interface types.",
    [["Command Line Interface (CLI)", "command line", "CLI"], ["Graphical User Interface (GUI)", "graphical", "GUI"], ["Touch Screen Interface", "touch"]], { qb: 'Q11' });
  def(14, 'm', 2, "Define System Calls and API.",
    [["System calls: programming interface to the services provided by the OS", "programming interface to the services", "interface to the services", "services provided by the os", "services provided by the operating system"],
     ["API: set of routines, data structures, object classes and/or protocols to support the building of applications", "routines", "data structures", "building of applications", "building applications"]],
    "System calls are the programming interface to the services provided by the OS. An API is a set of routines, data structures, object classes and/or protocols provided by libraries and/or operating system services in order to support the building of applications.", { qb: 'Q20' });
  list(14, 'e', 3, "List three most common APIs.",
    [[".NET API for Windows", "net api", "net", "windows"], ["POSIX API for POSIX-based systems (mainly UNIX versions)", "posix", "unix"], ["Java API for the Java virtual machine (JVM)", "java", "jvm"]], { qb: 'Q21' });
  list(21, 'e', 2, "Give two examples of Multi-Task OS.",
    [["Ubuntu", "ubuntu"], ["Windows 10", "windows"], ["Android", "android"], ["IOS", "ios"]], { n: 2, qb: 'Q29' });
  def(22, 'm', 3, "Define BIOS, MBR, and boot loader.",
    [["BIOS: simple initial program that runs when the computer is powered up and transfers control to the code in the MBR", "initial program", "powered up", "power up"],
     ["MBR: the first sector on the disk, with the small code that starts the boot process", "first sector", "starts the boot", "start the boot"],
     ["Boot loader: a small program that loads the selected OS into memory", "loads selected", "loads the selected", "loads the os", "loads os", "load the os", "os into memory"]],
    "BIOS is a simple initial program that runs when the computer is powered up, and transfers control to the code in MBR. MBR is the first sector on the disk, which contains the small code that starts the boot process. A boot loader is a small program that loads the selected OS into memory.", { qb: 'Q32' });
  list(5, 'm', 4, "List the resources that the operating system manages as a resource manager.",
    [["CPU time", "cpu", "processor time"], ["Memory", "memory", "ram"], ["File storage", "file", "storage"], ["I/O devices", "i/o", "io dev", "input"]]);
  list([6, 7], 'm', 5, "List the computer system components (names only).",
    [["Hardware", "hardware"], ["Operating system", "operating system", "=os"], ["System software", "system software"], ["Application software", "application"], ["Users", "user"]]);
  list(8, 'm', 5, "List the operating system services (names only).",
    [["User interface", "user interface"], ["Program execution", "program execution", "execution"], ["File-system manipulation", "file"], ["I/O operations", "i/o", "io operation"], ["Inter-process communications", "inter process", "interprocess", "ipc"]]);
  list(18, 'e', 3, "List the methods used to pass parameters to the OS in a system call (names only).",
    [["Registers", "register"], ["Memory block", "block"], ["Stack", "stack"]]);
  list(22, 'e', 2, "List the two types of interrupts.",
    [["Hardware interrupts", "hardware"], ["Software interrupts", "software"]]);
  list(23, 'm', 5, "List the five steps of the computer startup operation.",
    [["BIOS checks hardware", "bios checks", "check hardware", "checks hardware", "checks the hardware"], ["BIOS loads MBR", "bios loads", "loads mbr", "loads the mbr"], ["MBR loads boot loader", "mbr loads", "loads boot loader", "loads the boot loader"], ["Boot loader displays OS options to the user", "display", "options"], ["Boot loader loads the selected OS", "selected", "loads the os", "loads os"]]);
  def(8, 'm', 2, "Define the file-system manipulation service and give one thing it enables a running program to do.",
    [["Enables a running program to work with files and folders", "files and folders", "files"],
     ["Create and delete, read and write, list and search, or permission management", "create", "delete", "read", "write", "search", "permission"]],
    "File-system manipulation enables a running program to create and delete files and folders, read and write files and folders, list and search files and folders, and manage permissions.");
  def(13, 'm', 2, "Define the touch screen interface.",
    [["A combined display/input device", "combined display", "display and input", "display input"],
     ["The screen displays a graphical interface, and the user's touching is interpreted as an input", "touching", "interpreted as", "graphical interface"]],
    "A touchscreen interface is a combined display/input device, where the screen displays a graphical interface and a user's physical touching of the screen is interpreted as an input.");
  def(18, 'h', 2, "Why does the registers method limit the number of parameters, while the memory block method does not?",
    [["There is a limited number of registers", "limited n", "limited number", "few registers"],
     ["With a memory block only the address of the block is passed in a register", "address of", "address"]],
    "We have a limited number of registers, so only a few parameters fit. In the memory block method the parameters are stored in a memory block and only the address of the block is passed in a register.");
  def(22, 'm', 2, "What does “modern OSs are interrupt driven” mean?",
    [["If there is nothing for the OS to do, it waits (sits idle)", "nothing", "wait", "idle"],
     ["Something happens by hardware or software interrupts", "by interrupt", "hardware", "software"]],
    "If there is nothing for the OS to do, it will wait for something to happen by interrupts, which are hardware interrupts or software interrupts.");

  /* ---------- Section E: explain, draw, choose and justify ---------- */
  exp(6, 'm', "List the Computer System Components with brief description on each item.",
    [["Hardware: provides the basic computing resources (CPU, memory, secondary storage, I/O devices)", "computing resources", "basic resources", "cpu"],
     ["Operating system: manages the hardware and provides the base for application programs", "manages the computer hardware", "manages the hardware", "manages hardware", "base for application"],
     ["System software: utilities associated with the OS but not part of the kernel", "utilities", "not part of the kernel", "utility"],
     ["Application software: programs that help end-users to perform specific tasks", "specific task", "end users", "end user"],
     ["Users: people, or other machines", "people", "other machine"]],
    "Hardware: provides basic computing resources: CPU, memory, secondary storage, and I/O devices. Operating system: a program that manages the computer hardware and provides the base for application programs. System software: utilities that are associated with the operating system but not part of the kernel. Application software: programs that help end-users to perform specific tasks, such as word editor, web browsers, database systems. Users: people, or other machines.", { qb: 'Q5' });
  draw(7, 'm', "Draw the diagram of the Computer System Components.", 'components',
    [["Users (User 1, User 2 … User n) at the top", "user 1", "users"], ["System software and application software inside the Software block", "system software", "application software"], ["Operating system below them", "operating system", "below the software"], ["Hardware block: CPU, RAM, I/O", "hardware", "cpu", "ram"]],
    "Users (User 1, User 2 … User n) point down to the software block. Inside it, system software and application software point to the operating system, which points down to the hardware block: CPU, RAM and I/O.", { qb: 'Q6' });
  exp(6, 'm', "Explain the difference between the System Software and Application Software.",
    [["System software: utilities associated with the operating system", "utilities", "associated with the os", "associated with the operating system"],
     ["System software is not part of the kernel", "not part of the kernel", "outside the kernel", "not in the kernel"],
     ["Application software: helps end-users to perform specific tasks", "end user", "specific task"],
     ["Examples: word editor, web browsers, database systems, video games", "word editor", "browser", "database", "video game"]],
    "System software is the utilities that are associated with the operating system but are not part of the kernel. Application software is the programs that help end-users to perform specific tasks, such as word editor, web browsers, database systems and video games.", { qb: 'Q7' });
  exp(8, 'm', "List the operating System Services with brief description on each of them.",
    [["User interface: can be either CLI or GUI", "user interface"],
     ["Program execution: load and run a program into memory, end execution normally or abnormally", "program execution", "load and run", "abnormally"],
     ["File-system manipulation: create, delete, read, write, list, search files and folders, permission management", "file system", "files and folders", "permission"],
     ["I/O operations: a way for the running program to interact with I/O devices", "i/o operations", "i/o devices", "io devices"],
     ["Inter-process communications: enables processes to exchange information", "inter process", "exchange information", "interprocess"]],
    "User interface: which can be either CLI or GUI. Program execution: to load and run a program into memory, and end execution either normally or abnormally. File-system manipulation: enables a running program to create and delete, read and write, list and search files and folders, and permission management. I/O operations: offer a running program a way of interaction with I/O devices. Inter-process communications: enables processes to exchange information.", { qb: 'Q8' });
  exp(10, 'h', "List the operating System Functions with brief description on each of them.",
    [["Processor management: allocates jobs to the processor; each process receives enough time", "processor management", "enough time"],
     ["Memory management: allocation and deallocation of memory to processes", "memory management", "deallocation"],
     ["Device management: controls the working of the input-output devices", "device management", "input output devices", "i/o devices"],
     ["File management: keeps track of creation, deletion, transfer, copy and storage of files", "file management", "storage of files"],
     ["Security: assures the integrity and confidentiality of user data", "security", "confidentiality", "integrity"],
     ["Error detection: checks hardware damage or software errors, then alerts the user", "error detection", "alert", "damage"]],
    "Processor management: allocates various jobs to the processor and ensures that each process receives enough time. Memory management: manages the allocation and deallocation of the memory to various processes. Device management: controls the working of the input-output devices. File management: keeps track of the creation, deletion, transfer, copy, and storage of files. Security: provides techniques which assure the integrity and confidentiality of user data. Error detection: checks the hardware for any damage, or any software error, then displays a proper alert to the user.", { qb: 'Q9' });
  draw(15, 'm', "Draw the diagram of System Call – OS Relationship.", 'syscall',
    [["User application at the top", "user application", "application"], ["System call interface in the middle", "system call interface", "interface"], ["User mode above and kernel mode below", "user mode", "kernel mode"], ["System call implementation in the kernel, with arrows going and returning", "implementation", "returns"]],
    "The user application (user mode) calls the system call interface. The interface invokes the system call implementation in kernel mode, then the result returns through the interface to the user application.", { qb: 'Q24' });
  exp(18, 'm', "List the methods used to pass parameters to the OS in a system call with brief explanation.",
    [["Registers: pass the parameters in registers; the number of registers is limited", "in registers", "registers"],
     ["Memory block: parameters stored in a block; the address of the block is passed in a register", "block"],
     ["Stack: parameters pushed onto the stack by the program and popped off by the OS", "pushed", "popped", "push"],
     ["Block and stack methods do not limit the number or length of parameters", "do not limit", "not limit", "no limit"]],
    "Registers: pass the parameters in registers, but we have a limited number of registers. Memory block: parameters are stored in a memory block, and the address of the block is passed as a parameter in a register. Stack: parameters are pushed onto the stack by the program and popped off the stack by the operating system. Block and stack methods do not limit the number or length of parameters being passed.", { qb: 'Q25' });
  draw(19, 'm', "Draw a typical Single-Task OS Memory Map.", 'singleTaskMap',
    [["Kernel at the bottom", "kernel"], ["Command interpreter above the kernel", "command interpreter", "interpreter", "cli"], ["One process", "process"], ["Free memory at the top", "free memory", "free"]],
    "From bottom to top: kernel, command interpreter, process, free memory.", { qb: 'Q30' });
  draw(21, 'm', "Draw a typical Multi-Task OS Memory Map.", 'multiTaskMap',
    [["Kernel at the bottom", "kernel"], ["Interpreter", "interpreter"], ["Several processes (process B, C, D), each with its own memory space", "process b", "process c", "process d", "processes"], ["Free memory", "free memory", "free"]],
    "From bottom to top: kernel, process B, interpreter, process C, free memory, process D. Several processes are in memory, each with its own memory space.", { qb: 'Q31' });
  exp([22, 23], 'm', "Explain in brief the computer startup operation.",
    [["BIOS runs when the computer is powered up, checks the hardware and transfers control to the code in the MBR", "bios"],
     ["MBR: first sector on the disk; its code transfers the control to the boot loader", "mbr", "master boot record"],
     ["Boot loader displays the OS options and loads the selected OS into memory", "boot loader", "bootloader", "boot manager"],
     ["The OS takes control of the computer and sits idle waiting for an event", "takes control", "idle", "waiting for an event", "waits for an event"]],
    "The BIOS runs when the computer is powered up, checks the hardware, and transfers control to the code in the MBR. The MBR is the first sector on the disk; when executed it transfers the control to the boot loader. The boot loader displays the OS options to the user and loads the selected OS into memory. The OS then takes control of the computer, and the system sits idle waiting for an event.", { qb: 'Q33' });
  draw(23, 'm', "Draw the diagram for Computer Startup Operation.", 'startup',
    [["BIOS checks hardware", "checks hardware", "check hardware", "checks the hardware"], ["BIOS loads MBR", "loads mbr", "loads the mbr"], ["MBR loads boot loader", "loads boot loader", "loads the boot loader"], ["Boot loader displays OS options to the user, then loads the selected OS", "displays", "selected os"]],
    "BIOS checks hardware → BIOS loads MBR → MBR loads boot loader → Boot loader displays OS options to user → Boot loader loads selected OS.", { qb: 'Q34' });
  exp(22, 'm', "Explain the difference between Hardware Interrupts and Software Interrupts.",
    [["Hardware interrupts occur by sending a signal to the CPU from a specified device", "signal", "from a device", "from specified device"],
     ["Example: keyboard click or a message from a remote computer", "keyboard", "remote computer"],
     ["Software interrupts occur by executing a system call from the application program", "system call"],
     ["Example: email program checking for new emails", "email"]],
    "Hardware interrupts usually occur by sending a signal to the CPU from a specified device, like a keyboard click or a message from a remote computer. Software interrupts usually occur by executing a system call from the application program, like an email program checking for new emails.", { qb: 'Q37' });
  exp([19, 21], 'm', "Explain the difference between a Single-Task OS and a Multi-Task OS.",
    [["Single-task: one task and a single memory space", "single memory space", "one task", "one program", "single task"],
     ["Single-task example: MS-DOS", "ms dos", "msdos"],
     ["Multi-task: multiple processes can run at the same time, each with its own memory space", "own memory space", "same time", "multiple processes"],
     ["Multi-task example: Ubuntu, Windows 10, Android, IOS", "ubuntu", "windows", "android", "ios"]],
    "A single-task OS runs one task in a single memory space; the CLI loads the program, overwriting all but the kernel, and is reloaded after the program exits, e.g. MS-DOS. In a multi-task OS multiple processes can run at the same time, each with its own memory space, e.g. Ubuntu, Windows 10, Android, IOS.");
  exp([11, 12, 13], 'm', "Compare the three user interface types: CLI, GUI, and Touch Screen.",
    [["CLI: allows direct command entry (commands are built-in or other programs)", "command entry", "direct command", "built in"],
     ["GUI: user-friendly desktop that interacts with mouse, keyboard and monitor", "desktop", "mouse"],
     ["GUI icons represent files, programs and actions", "icons"],
     ["Touch screen: actions and selection based on gestures, virtual keyboard for text entry", "gesture", "virtual keyboard"]],
    "The CLI allows direct command entry; it fetches a command from the user and executes it, and commands are built-in or other programs. The GUI is a user-friendly desktop interface that interacts with mouse, keyboard and monitor; icons represent files, programs and actions. In the touch screen interface a mouse is not desired: actions and selection are based on gestures, and a virtual keyboard is used for text entry.");
  exp([5], 'h', "Explain the four roles of the operating system: intermediary, environment, resource manager and control program.",
    [["Intermediary between the user application and the hardware", "intermediary", "between the user application"],
     ["Provides an environment within which application programs can do work", "environment"],
     ["Resource manager of CPU time, memory, file storage and I/O devices", "resource manager", "cpu time"],
     ["Control program: manages the execution of programs and prevents errors and improper use", "control program", "improper use"]],
    "The OS acts as an intermediary between the user application and hardware. It provides an environment within which application programs can do work. It acts as the resource manager of CPU time, memory, file storage and I/O devices. It acts as a control program that manages the execution of application programs and prevents errors and improper use of the computer.");

  pick([19, 21], 'm', "A smart home thermostat does only one job. It reads the temperature and turns the heating or cooling on and off. It has very little memory, it must start quickly, and it runs the same program again and again. Which type of OS is the best? Why?",
    ["Multi-Task Operating System", "Single-Task Operating System", "Multi-Processor Operating System"], 1,
    [["It does only one job / runs one program, so multitasking is not needed", "one job", "one program", "one task", "only one", "single"], ["It is simple and needs very little memory (single memory space)", "little memory", "small memory", "less memory", "single memory", "simple"]],
    "The thermostat runs only one program, so a single-task OS is enough. It is simple, uses a single memory space, needs very little memory and starts quickly.", { qb: 'CE1' });
  pick(21, 'm', "An ATM machine must be cheap. It must do many jobs at the same time: check the card, check the PIN, give out cash, print the receipt, and talk to the bank over the network. Which type of OS is the best? Why?",
    ["Multi-Task Operating System", "Single-Task Operating System", "Multi-Processor Operating System"], 0,
    [["Multiple processes can run at the same time, each with its own memory space", "same time", "many jobs", "multiple processes", "many tasks"], ["It is cheap: one processor is enough, no need for a multi-processor machine", "cheap", "one processor", "single processor", "expensive", "cost"]],
    "A multi-task OS lets many jobs run at the same time, each with its own memory space. It works on one processor, so the ATM stays cheap; a multi-processor system would be more expensive.", { qb: 'CE2' });
  pick(13, 'e', "A museum has an information screen for visitors. Most visitors are not good with computers. There is no keyboard and no mouse. Visitors touch and swipe the screen to see the exhibits. Which user interface is the best? Why?",
    ["Command Line Interface (CLI)", "Graphical User Interface (GUI) with mouse and keyboard", "Touch Screen Interface"], 2,
    [["No mouse or keyboard is needed; the screen is both display and input", "no mouse", "no keyboard", "mouse is not", "without mouse", "display and input", "input device"], ["Actions are based on gestures (touch and swipe), easy for visitors", "gesture", "touch", "swipe", "easy"]],
    "The screen is a combined display and input device, so no mouse or keyboard is needed. Actions and selection are based on gestures such as touch and swipe, which is easy for visitors.", { qb: 'CE3' });
  pick(11, 'm', "An IT administrator controls 200 Linux servers from far away. The network is slow. He must type the same commands on all servers many times, so he wants to use scripts. Which user interface is the best? Why?",
    ["Command Line Interface (CLI)", "Graphical User Interface (GUI)", "Touch Screen Interface"], 0,
    [["CLI allows direct command entry, so the same commands can be put in scripts", "direct command", "command entry", "script", "commands"], ["Only text is sent, so it works well on a slow network", "text", "slow network", "no graphics", "fast", "less data", "lightweight"]],
    "The CLI allows direct command entry, so the same commands can be written in scripts and repeated on all servers. It sends only text with no graphics, so it works well on a slow network.", { qb: 'CE4' });
  pick([19, 21], 'm', "A student laptop must play music, download files and run a word editor at the same time, and one program must not use the memory of another. Which type of OS is the best? Why?",
    ["Single-Task Operating System", "MS-DOS", "Multi-Task Operating System"], 2,
    [["Multiple processes can run at the same time", "same time", "multiple processes", "many programs"], ["Each process has its own memory space", "own memory", "memory space", "separate memory"]],
    "In a multi-task OS multiple processes can run at the same time, and each process has its own memory space. MS-DOS is a single-task OS.");
  pick(12, 'e', "An office buys computers with a mouse, a keyboard and a monitor for employees who do not know any commands. They open files and programs by clicking on pictures. Which user interface is the best? Why?",
    ["Command Line Interface (CLI)", "Graphical User Interface (GUI)", "Touch Screen Interface"], 1,
    [["User-friendly desktop that works with mouse, keyboard and monitor", "user friendly", "desktop", "mouse", "keyboard"], ["Icons represent files, programs and actions, so no commands are needed", "icon", "no command", "clicking", "click"]],
    "The GUI is a user-friendly desktop interface that interacts with mouse, keyboard and monitor. Icons represent files, programs and actions, so the employees do not need to know commands.");
  pick(18, 'h', "A programmer writes a system call that must pass 40 parameters, and some of them are very long. Which parameter passing method is the best? Why?",
    ["Registers only", "Memory block", "Return values"], 1,
    [["The number of registers is limited, so 40 parameters do not fit", "limited", "registers are few", "not enough registers"], ["Parameters are stored in a block and only its address is passed in a register; no limit on number or length", "address", "block", "not limit", "no limit"]],
    "The number of registers is limited, so 40 parameters do not fit. In the memory block method the parameters are stored in a block and only the address of the block is passed in a register, so there is no limit on their number or length.");
});
