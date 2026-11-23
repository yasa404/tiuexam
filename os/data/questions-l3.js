/* Lecture 3: CPU Scheduling (PDF pages 1-40). Not used: pages 6, 18, 20, 26 ("not required in the exam").
   In every priority question, the smallest integer is the highest priority (slide 13). All processes arrive at time 0 in the order given. */
EC.lecture(3, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, calc = Q.calc, pick = Q.pick;

  /* ---------- Section A: multiple choice ---------- */
  mcq(4, 'e', "CPU scheduling allows…",
    ["one process to use the CPU while the execution of other processes is on hold", "all processes to use the CPU at the same moment without any waiting time at all for any of them", "one process to keep the CPU until the computer is turned off by the user", "the I/O devices to use the CPU while all of the processes are terminated"], "Slide 4.");
  mcq(4, 'e', "Each process passes into cycles of…",
    ["CPU burst followed by I/O burst", "I/O burst followed by boot", "ready state followed by new state", "page fault followed by swapping"], "Slide 4.");
  mcq(4, 'm', "What is of main concern to the CPU scheduling?",
    ["CPU burst time", "I/O burst time", "Disk size", "Number of users"], "Slide 4.");
  mcq(4, 'm', "Which is NOT a moment when a CPU scheduling decision may take place?",
    ["A process is stored on disk as an executable file", "A process switches from the running to the waiting state", "A process switches from waiting to ready", "A process terminates"], "The slide lists running→waiting, running→ready, waiting→ready and terminates.");
  mcq(4, 'm', "The OS schedules activities in order to…",
    ["maximize the use of the resources and minimize wait and idle time", "maximize the wait time and minimize the use of the resources", "maximize the number of I/O bursts and minimize the CPU bursts", "maximize the idle time and minimize the number of processes"], "Slide 4.");
  mcq(5, 'e', "The number of processes that complete their execution per time unit is the…",
    ["throughput", "turnaround time", "response time", "CPU utilization"], "Slide 5.");
  mcq(5, 'e', "The amount of time a process has been waiting in the ready queue is the…",
    ["waiting time", "turnaround time", "response time", "burst time"], "Slide 5.");
  mcq(5, 'e', "The amount of time to execute a particular process is the…",
    ["turnaround time", "average waiting time", "throughput", "response time"], "Slide 5.");
  mcq(5, 'm', "The amount of time from when a request was submitted until the first response is produced is the…",
    ["response time", "waiting time", "turnaround time", "throughput"], "Slide 5.");
  mcq(5, 'm', "Keeping the CPU as busy as possible is the criterion called…",
    ["CPU utilization", "throughput", "load balancing", "CPU affinity"], "Slide 5.");
  mcq(7, 'm', "Which pair of criteria should a scheduling algorithm maximize?",
    ["CPU utilization and throughput", "Throughput and waiting time", "Turnaround time and response time", "CPU utilization and response time"], "Slide 7.");
  mcq(7, 'm', "Which criterion should a scheduling algorithm minimize?",
    ["Turnaround time", "Throughput", "CPU utilization", "Processes completed per time unit"], "Slide 7.");
  mcq(9, 'e', "Which algorithm is like customers waiting in line at the bank or the post office?",
    ["First-Come First-Served", "Shortest-Job-First", "Multilevel Feedback Queue", "Priority Scheduling"], "Slide 9.");
  mcq(9, 'm', "FCFS can yield very long average wait times, particularly if…",
    ["the first process to get there takes a long time", "the last process to get there takes a long time", "all the processes have a very short burst time", "the time quantum is larger than the burst time"], "Slide 9.");
  mcq(10, 'm', "P1, P2 and P3 have burst times 24, 3 and 3 and arrive in this order. What is the average waiting time in FCFS?",
    ["17", "27", "10", "3"], "(0 + 24 + 27) / 3 = 17.");
  mcq(10, 'h', "P1, P2 and P3 have burst times 24, 3 and 3. If they arrive in the order P2, P3, P1, what is the average waiting time in FCFS?",
    ["3", "17", "6", "9"], "(0 + 3 + 6) / 3 = 3.");
  mcq(11, 'e', "Shortest-Job-First picks a process based on the…",
    ["next shortest CPU burst", "overall process time", "order of arrival", "smallest priority number"], "Not the overall process time.");
  mcq(11, 'm', "Which algorithm is optimal because it gives the minimum average waiting time for a given set of processes?",
    ["Shortest-Job-First", "First-Come First-Served", "Round Robin", "Multilevel Queue"], "Slide 11.");
  mcq(11, 'm', "What is the difficulty of Shortest-Job-First scheduling?",
    ["Knowing the length of the next CPU request", "Finding the process that arrived first", "Choosing the best value of the time quantum", "Moving the processes between the queues"], "Slide 11.");
  mcq(12, 'm', "P1, P2, P3 and P4 have burst times 6, 8, 7 and 3. In which order does SJF run them?",
    ["P4, P1, P3, P2", "P1, P2, P3, P4", "P2, P3, P1, P4", "P4, P3, P1, P2"], "Shortest first: 3, 6, 7, 8.");
  mcq(12, 'h', "P1, P2, P3 and P4 have burst times 6, 8, 7 and 3. What is the average waiting time in SJF?",
    ["7", "10.25", "16", "6"], "(0 + 3 + 9 + 16) / 4 = 7.");
  mcq(13, 'e', "In priority scheduling, the CPU is allocated to the process with the…",
    ["highest priority (smallest integer)", "highest priority (largest integer)", "lowest priority (smallest integer)", "shortest time in the ready queue"], "Slide 13.");
  mcq(13, 'm', "Priorities assigned by the OS using criteria such as average burst time are called…",
    ["internal priorities", "external priorities", "soft priorities", "hard priorities"], "Slide 13.");
  mcq(13, 'm', "External priorities are assigned by…",
    ["users, based on the importance of the job", "the kernel, based on the average burst time", "the OS, based on system resource use", "the CPU, based on the ratio of CPU to I/O activity"], "Slide 13.");
  mcq(13, 'e', "A low-priority task waits forever because other jobs always have higher priority. This problem is called…",
    ["starvation", "aging", "thrashing", "migration"], "Also called indefinite blocking.");
  mcq(13, 'e', "What is the solution to starvation?",
    ["Aging", "Locking", "Swapping", "Pull migration"], "Slide 13.");
  mcq(13, 'm', "Aging means…",
    ["increasing the priority of a process as time progresses", "decreasing the priority of a process as time progresses", "deleting the processes that have waited for too long", "giving the oldest process a shorter time quantum"], "Slide 13.");
  mcq(14, 'h', "Burst times: P1 = 10, P2 = 1, P3 = 2, P4 = 1, P5 = 5. Priorities: P1 = 3, P2 = 1, P3 = 4, P4 = 5, P5 = 2. In which order are they run in priority scheduling?",
    ["P2, P5, P1, P3, P4", "P4, P3, P1, P5, P2", "P2, P4, P3, P5, P1", "P1, P5, P3, P2, P4"], "Smallest number first.");
  mcq(14, 'h', "Look at the table. What is the average waiting time in priority scheduling?",
    ["8.2", "13.4", "3.2", "9.6"], "(0 + 1 + 6 + 16 + 18) / 5 = 8.2.", { qfig: 'prioTable' });
  mcq(15, 'e', "Round Robin is similar to FCFS, except that CPU bursts are assigned with limits called…",
    ["time quantum", "priority number", "response time", "processor affinity"], "Slide 15.");
  mcq(15, 'm', "In Round Robin, what happens if the timer goes off before the process finishes its burst?",
    ["It is swapped out and moved to the back end of the ready queue", "It is swapped out and moved to the front end of the ready queue again", "It is terminated and its resources are de-allocated by the OS", "It keeps the CPU until it finishes its burst, just like FCFS"], "Slide 15.");
  mcq(15, 'm', "In Round Robin, a process that finishes its burst before the time quantum expires is…",
    ["swapped out of the CPU just like the normal FCFS algorithm", "moved to the back end of the ready queue to wait again", "kept in the CPU until the timer of the quantum goes off", "given a higher priority in a different queue by aging"], "Slide 15.");
  mcq(16, 'e', "In Round Robin, the ready queue is maintained as a…",
    ["circular queue", "linear queue", "device queue", "priority queue"], "Slide 16.");
  mcq(16, 'm', "Round Robin scheduling can give the effect of…",
    ["all processes sharing the CPU equally", "the shortest process always running first", "the highest priority process running first", "all CPUs sharing one locked queue equally"], "Slide 16.");
  mcq(17, 'm', "Which is an advantage of Round Robin over SJF?",
    ["Better response", "Lower average turnaround", "Fewer context switches", "Minimum average waiting time"], "Slide 17.");
  mcq(17, 'm', "Which is a drawback of Round Robin?",
    ["More context switching with considerable overheads", "Some processes never get a chance to run on the CPU", "The length of the next CPU request must be known", "The response time is always worse than in SJF"], "Slide 17.");
  mcq(19, 'm', "Why is a very short time quantum bad?",
    ["Because context switch overhead increases", "Because processes wait long before running", "Because it behaves in the same way as FCFS", "Because low-priority processes starve"], "Slide 19.");
  mcq(19, 'm', "If the time quantum is very long, Round Robin behaves like…",
    ["FCFS", "SJF", "Priority Scheduling", "Multilevel Queue"], "Processes no longer appear to execute concurrently.");
  mcq(19, 'm', "The time quantum should be…",
    ["large compared to context switch time but not larger than average process time", "small compared to context switch time but larger than the average process time", "equal to the context switch time and always larger than the CPU burst time", "larger than the average process time and the I/O burst time added together"], "Slide 19.");
  mcq(21, 'e', "In multilevel queue scheduling, once a job is assigned to a queue…",
    ["it stays in that queue until it finishes", "it moves to another queue when it waits", "it is copied to all of the other queues", "it changes queue after every time quantum"], "Jobs cannot switch from queue to queue.");
  mcq(21, 'm', "In the multilevel queue example, which algorithms are used for the foreground and background queues?",
    ["Foreground RR, background FCFS", "Foreground FCFS, background RR", "Foreground SJF, background RR", "Foreground FCFS, background SJF"], "Slide 21.");
  mcq(22, 'm', "With fixed priority scheduling between the queues of a multilevel queue, there is a possibility of…",
    ["starvation", "locking", "page faults", "push migration"], "Serve all from foreground, then background.");
  mcq(22, 'm', "In the time slice example between queues, how much CPU time goes to the foreground and to the background?",
    ["80% foreground, 20% background", "20% foreground, 80% background", "50% foreground, 50% background", "100% foreground, 0% background"], "Slide 22.");
  mcq(23, 'h', "In the multilevel queue diagram, which order is correct from high priority to low priority?",
    ["Real-time, system, interactive, batch", "System, real-time, batch, interactive", "Batch, interactive, system, real-time", "Interactive, real-time, system, batch"], "Slide 23.");
  mcq(24, 'e', "What is the difference between a multilevel feedback queue and an ordinary multilevel queue?",
    ["Jobs may be moved from one queue to another", "Jobs must stay in one queue until they finish", "There is only one queue shared by all the jobs", "Every queue must use the same algorithm (FCFS)"], "Slide 24.");
  mcq(24, 'm', "In a multilevel feedback queue, why can a job be moved to another queue?",
    ["Its characteristics change between CPU-intensive and I/O-intensive", "Its executable file is stored again on a different disk drive", "Its parent process has been terminated by the operating system itself", "Its burst time is equal to the burst time of another process"], "Aging is the other reason.");
  mcq(25, 'm', "Multilevel feedback queue scheduling is…",
    ["the most flexible and the most complex to implement", "the simplest and the least flexible of the algorithms", "the most flexible and the easiest one to implement", "the least flexible and the most complex to implement"], "Slide 25.");
  mcq(25, 'm', "Which is NOT an implementation parameter of the multilevel feedback queue?",
    ["The number of CPUs in the computer", "The number of queues", "The scheduling algorithm for each queue", "The method that decides which queue a process enters initially"], "Slide 25.");
  mcq(27, 'e', "The goal of multiple-processor scheduling is to achieve…",
    ["maximum load sharing", "minimum throughput", "hard affinity for all", "one queue per process"], "Balancing the load between multiple CPUs.");
  mcq(28, 'm', "Keeping the workload evenly distributed so that one CPU is not idle while another is overloaded is called…",
    ["load balancing", "CPU affinity", "aging", "context switching"], "Slide 28.");
  mcq(28, 'm', "Load balancing between CPUs is done using…",
    ["process migration", "hard affinity", "the time quantum", "internal priorities"], "Slide 28.");
  mcq(29, 'e', "The binding of a process or a thread to a CPU is called…",
    ["CPU affinity", "load balancing", "process migration", "starvation"], "Slide 29.");
  mcq(29, 'm', "The system attempts to keep a process on the same processor but makes no guarantees. This is…",
    ["soft affinity", "hard affinity", "push migration", "pull migration"], "Slide 29.");
  mcq(29, 'm', "A process specifies that it is not to be moved between processors. This is…",
    ["hard affinity", "soft affinity", "load balancing", "pull migration"], "Slide 29.");
  mcq(30, 'm', "In asymmetric multiprocessing…",
    ["a single scheduler runs only on one CPU and decides which process runs on every CPU", "every CPU has its own private ready queue and chooses its next process by itself", "all the CPUs share one ready queue and each CPU takes its next process from it", "a global queue is shared by all the CPUs, plus a local queue for every one of them"], "Slide 30.");
  mcq(30, 'm', "What is the disadvantage of the single scheduler approach?",
    ["Bottleneck: all CPUs wait for the scheduler CPU", "Load imbalance between the private queues", "Two kinds of queues must be managed together", "Each CPU conflicts with the scheduling data"], "Slide 30.");
  mcq(32, 'm', "In global queue scheduling, why does the approach not scale?",
    ["It needs locking, so only one CPU may use the queue at a time", "It has no queue, so every CPU waits for the scheduler CPU to decide", "It has too many queues, so they cannot be managed together", "It moves processes, so the cache and TLB are never reloaded"], "Slide 32.");
  mcq(32, 'm', "Which is an advantage of the global queue approach?",
    ["Fairness: all processes wait in one line", "Strong processor affinity for all processes", "No locking is needed between the CPUs", "Private queues make the choice very quick"], "Slide 32.");
  mcq(32, 'h', "In global queue scheduling, a process may run on a different CPU each time. This disadvantage is…",
    ["weak processor affinity", "load imbalance between queues", "migration cost", "bottleneck"], "Slide 32.");
  mcq(34, 'm', "What is the disadvantage of per CPU queues?",
    ["Load imbalance", "Needs locking", "Bottleneck", "Weak scalability"], "Some CPUs are overloaded, others almost idle.");
  mcq(34, 'm', "Why are per CPU queues scalable?",
    ["There is no locking, so more CPUs do not slow them down", "There is one scheduler, so the CPUs never conflict", "There is one shared line, so each process gets a fair turn", "There are two kinds of queues managed together"], "Slide 34.");
  mcq(36, 'm', "Which approach uses a global queue shared by all CPUs plus a local queue for each CPU?",
    ["Hybrid approach", "Single scheduler", "Per CPU queues", "Global queue"], "Slide 36.");
  mcq(36, 'h', "In the hybrid approach, moving work between queues reloads the…",
    ["cache and TLB", "BIOS and MBR", "stack and heap", "kernel and CLI"], "Migration cost.");
  mcq(38, 'm', "According to the summary table, which scheme is NOT simple?",
    ["Hybrid", "Single scheduler", "Global queue", "Per CPU queues"], "Slide 38.");
  mcq(38, 'm', "According to the summary table, which scheme does NOT have a balanced load?",
    ["Per CPU queues", "Hybrid", "Global queue", "Single scheduler"], "Slide 38.");
  mcq(38, 'h', "According to the summary table, which two schemes are scalable?",
    ["Per CPU queues and hybrid", "Single scheduler and hybrid", "Global queue and per CPU queues", "Single scheduler and global queue"], "Slide 38.");
  mcq(39, 'e', "Moving a waiting process from a busy CPU to a less busy CPU is…",
    ["process migration", "context switching", "processor affinity", "process termination"], "Slide 39.");
  mcq(39, 'm', "A special task periodically monitors the load of all processors and redistributes work. This is…",
    ["push migration", "pull migration", "soft affinity", "hard affinity"], "Slide 39.");
  mcq(39, 'm', "In pull migration, who moves the waiting task?",
    ["The idle processor itself", "The busy processor itself", "A special monitor task", "The user of the system"], "Idle processors pull a waiting task from a busy processor.");

  /* ---------- Section C: true / false ---------- */
  tf(4, 'e', "IO burst distribution is of main concern to the CPU scheduling.", false, "CPU burst time is of main concern.", { qb: 'Q3' });
  tf(16, 'e', "The ready queue in round robin CPU scheduling is maintained as a linear queue.", false, "It is a circular queue.", { qb: 'Q19' });
  tf(4, 'm', "A CPU scheduling decision may take place when a process terminates.", true, "Slide 4.");
  tf(5, 'm', "Waiting time is the amount of time a process has been waiting in the ready queue.", true, "Slide 5.");
  tf(5, 'm', "Response time is measured until the whole output is produced.", false, "Until the first response is produced, not output.");
  tf(7, 'e', "A scheduling algorithm should maximize throughput and minimize waiting time.", true, "Slide 7.");
  tf(7, 'm', "A scheduling algorithm should maximize the turnaround time.", false, "It should be minimized.");
  tf(9, 'm', "FCFS can give a very long average waiting time if the first process takes a long time.", true, "Slide 9.");
  tf(11, 'm', "SJF chooses the process with the shortest overall process time, not the shortest next CPU burst.", false, "It uses the next CPU burst.");
  tf(11, 'm', "SJF gives the minimum average waiting time for a given set of processes.", true, "Slide 11.");
  tf(13, 'm', "In priority scheduling, the smallest integer is the highest priority.", true, "Slide 13.");
  tf(13, 'm', "External priorities are assigned by the OS using the ratio of CPU to I/O activity.", false, "Those are internal priorities.");
  tf(13, 'm', "Aging is a problem in which a low-priority task waits forever.", false, "That is starvation; aging is the solution.");
  tf(17, 'm', "Round Robin typically has a higher average turnaround than SJF.", true, "Slide 17.");
  tf(17, 'm', "Round Robin has a worse response than SJF.", false, "It has better response.");
  tf(19, 'm', "A long time quantum makes Round Robin behave like FCFS.", true, "Slide 19.");
  tf(21, 'm', "In a multilevel queue, jobs can switch from queue to queue at any time.", false, "They cannot switch.");
  tf(24, 'm', "In a multilevel feedback queue, aging can move a job into a higher priority queue.", true, "Slide 24.");
  tf(29, 'm', "Hard affinity means the system tries to keep the process on the same CPU but makes no guarantees.", false, "That is soft affinity.");
  tf(30, 'm', "In asymmetric multiprocessing, only one CPU touches the scheduling data, so CPUs never conflict.", true, "Slide 30.");
  tf(32, 'm', "In the global queue approach, several CPUs may use the queue at the same time.", false, "Only one CPU at a time; the queue is locked.");
  tf(34, 'm', "Per CPU queues can suffer from load imbalance.", true, "Slide 34.");
  tf(36, 'h', "The hybrid approach gives both load balancing and locality.", true, "Slide 36.");
  tf(38, 'h', "According to the summary table, the global queue scheme is scalable.", false, "It is not, because of locking.");
  tf(39, 'm', "In push migration, the idle processor pulls a waiting task from a busy processor.", false, "That is pull migration.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(4, 'e', "Each process will pass into cycles of [[CPU]] burst followed by [[I/O|io|input output]] burst and so on.", "Slide 4.", { qb: 'Q2' });
  fill(7, 'e', "The purpose of a scheduling algorithm is to [[maximize|max]] CPU utilization, [[maximize|max]] throughput, [[minimize|min]] turnaround time, [[minimize|min]] waiting time, and [[minimize|min]] response time.", "Slide 7.", { qb: 'Q7' });
  fill(9, 'e', "[[FCFS|first come first serve|first come first served]] CPU scheduling algorithm is like customers are waiting in line.", "Slide 9.", { qb: 'Q9' });
  fill([9, 11], 'm', "In CPU Scheduling [[FCFS|first come first serve|first come first served]] has very long average waiting time, while [[SJF|shortest job first]] has minimum average waiting time.", "Slides 9 and 11.", { qb: 'Q10' });
  fill(11, 'm', "The difficulty in [[SJF|shortest job first]] CPU Scheduling is knowing the length of the next CPU request.", "Slide 11.", { qb: 'Q11' });
  fill([11, 13], 'm', "In CPU Scheduling, Shortest-Job-First algorithm will pick the [[shortest|fastest|smallest]] job first, while Priority Scheduling algorithm will pick the job with [[highest|the highest]] priority first.", "Slides 11 and 13.", { qb: 'Q12' });
  fill(13, 'm', "Priority scheduling can suffer from a major problem known as [[starvation|indefinite blocking]], and the solution for this is [[aging|ageing]].", "Slide 13.", { qb: 'Q14' });
  fill(15, 'e', "Round robin CPU scheduling is similar to FCFS scheduling, except that CPU bursts are assigned with limits called [[time quantum|quantum]].", "Slide 15.", { qb: 'Q16' });
  fill(15, 'm', "In round robin CPU scheduling, if the process finishes its burst before the time quantum timer expires, then it is [[swapped out of the CPU|swapped out|swapped out of CPU]].", "Just like the normal FCFS algorithm.", { qb: 'Q17' });
  fill(15, 'm', "In round robin CPU scheduling, if the timer goes off first, then the process is swapped out of the CPU and moved to [[the back end of the ready queue|back end of the ready queue|back of the ready queue|end of the ready queue|the back of the ready queue]].", "Slide 15.", { qb: 'Q18' });
  fill(19, 'm', "In RR CPU Scheduling, time quantum should be large compared to [[context switch time|context switch|the context switch time]] but not larger than [[average process time|the average process time]].", "Slide 19.", { qb: 'Q22' });
  fill(19, 'h', "In RR CPU Scheduling, time quantum q should usually be [[10 ms|10 milliseconds|10]] to [[100 ms|100 milliseconds|100]], when context switch time is less than [[10 microseconds|10 micro s|10 micro seconds|10 micro second|10 us]].", "Slide 19.", { qb: 'Q23' });
  fill(32, 'm', "In Global Queue scheduling, only one CPU may use the queue at a time because it needs [[locking|lock|a lock]], so it does not [[scale]].", "Slide 32.", { qb: 'Q33' });
  fill(36, 'm', "In the Hybrid Approach, moving work between queues reloads the [[cache]] and [[TLB]].", "Slide 36.", { set: true, qb: 'Q34' });
  fill(5, 'm', "The number of processes that complete their execution per time unit is called [[throughput]].", "Slide 5.");
  fill(5, 'm', "The amount of time to execute a particular process is called [[turnaround time|turnaround]].", "Slide 5.");
  fill(5, 'm', "The time from when a request was submitted until the first response is produced is the [[response time|response]].", "Slide 5.");
  fill(13, 'm', "Priorities assigned by the OS are called [[internal|internal priorities]] priorities, and priorities assigned by users are called [[external|external priorities]] priorities.", "Slide 13.");
  fill(16, 'e', "In Round Robin, the ready queue is maintained as a [[circular|circular queue]] queue.", "Slide 16.");
  fill(21, 'm', "In the multilevel queue example, the foreground queue uses [[RR|round robin]] and the background queue uses [[FCFS|first come first serve|first come first served]].", "Slide 21.");
  fill(24, 'm', "In a multilevel [[feedback|feedback queue]] queue, jobs may be moved from one queue to another.", "Slide 24.");
  fill(27, 'm', "The goal of Multiple-Processor Scheduling is to achieve maximum [[load sharing]].", "Slide 27.");
  fill(28, 'm', "CPUs load balancing is done using process [[migration]].", "Slide 28.");
  fill(29, 'm', "The binding of a process or a thread to a CPU is called CPU [[affinity]].", "Slide 29.");
  fill(30, 'm', "Asymmetric multiprocessing uses a [[single scheduler|single]] that runs on only one CPU.", "Slide 30.");
  fill(34, 'm', "The disadvantage of Per CPU Queues is load [[imbalance]].", "Slide 34.");
  fill(39, 'm', "In [[pull|pull migration]] migration, idle processors take a waiting task from a busy processor.", "Slide 39.");
  fill(10, 'h', "P1 and P2 have burst times 8 and 2 and arrive in this order. In FCFS, the average waiting time is [[4|four]].", "(0 + 8) / 2 = 4.");

  /* ---------- Section D: define and list ---------- */
  def(4, 'e', 2, "Define CPU scheduling.",
    [["Allows one process to use the CPU", "one process to use", "use the cpu", "uses the cpu"],
     ["While the execution of other processes is on hold", "on hold", "hold"]],
    "CPU scheduling allows one process to use the CPU while the execution of other processes is on hold.", { qb: 'Q1' });
  list(4, 'm', 4, "When CPU scheduling decisions may take place? (list the cases)",
    [["Process switches from running to waiting state", "running to waiting"], ["Process switches from running to ready state", "running to ready"], ["Process switches from waiting to ready", "waiting to ready"], ["Process terminates", "terminat"]], { qb: 'Q4' });
  list(8, 'e', 5, "List the Six CPU Scheduling Algorithms.",
    [["First-Come First-Serve (FCFS)", "first come", "fcfs"], ["Shortest-Job-First (SJF)", "shortest", "sjf"], ["Priority Scheduling", "priority"], ["Round Robin (RR)", "round robin", "=rr"], ["Multilevel Queue Scheduling", "multilevel queue", "multi level queue"], ["Multilevel Feedback-Queue Scheduling", "multilevel feedback", "multi level feedback", "feedback"]], { qb: 'Q8' });
  def(13, 'm', 2, "Define Starvation and Aging.",
    [["Starvation (indefinite blocking): a low-priority task can wait forever because other jobs have higher priority", "wait forever", "waits forever", "waiting forever", "never run"],
     ["Aging: as time progresses, increase the priority of the process", "increase the priority", "increasing the priority", "priority is increased", "increases the priority"]],
    "Starvation is when a low-priority task can wait forever because there are always some other jobs that have higher priority. Aging is the solution: as time progresses, increase the priority of the process.", { qb: 'Q15' });
  list(25, 'm', 4, "List the Implementation parameters for the Multilevel Feedback Queue CPU Scheduling.",
    [["The number of queues", "number of queue"], ["The scheduling algorithm for each queue", "algorithm"], ["The methods used to transfer processes from one queue to another", "transfer", "move", "from one queue"], ["The method used to determine which queue a process enters initially", "initial", "enters", "determine"]], { qb: 'Q27' });
  def(27, 'e', 2, "What is the goal of Multiple-Processor Scheduling?",
    [["Achieve maximum load sharing", "load sharing", "sharing"],
     ["Which means balancing the load between multiple CPUs", "balancing", "balance"]],
    "The goal is to achieve maximum load sharing, which means balancing the load between multiple CPUs.", { qb: 'Q28' });
  def(39, 'm', 2, "Define Process Migration.",
    [["Moving a waiting process from a busy CPU to a less busy CPU", "less busy", "busy cpu", "from a busy"],
     ["It is the tool used for load balancing", "load balanc", "balance the load"]],
    "Process migration is moving a waiting process from a busy CPU to a less busy CPU. It is the tool used for load balancing.", { qb: 'Q41' });
  list(5, 'm', 5, "List the CPU scheduling criteria (names only).",
    [["CPU utilization", "utili"], ["Throughput", "throughput"], ["Turnaround time", "turnaround"], ["Waiting time", "waiting"], ["Response time", "response"]]);
  list([30, 32, 34, 36], 'm', 4, "List the four approaches to multiple-CPU scheduling.",
    [["Asymmetrical scheduling: single scheduler", "single", "asymmetric"], ["Symmetrical scheduling: global queue", "global"], ["Symmetrical scheduling: per CPU queues", "per cpu"], ["Symmetrical scheduling: hybrid approach", "hybrid"]]);
  list(39, 'e', 2, "List the two load balancing techniques.",
    [["Push migration", "push"], ["Pull migration", "pull"]]);
  list(29, 'e', 2, "List the two types of CPU affinity.",
    [["Soft affinity", "soft"], ["Hard affinity", "hard"]]);
  list(13, 'm', 3, "List three criteria that the OS uses to assign internal priorities.",
    [["Average burst time", "burst"], ["Ratio of CPU to I/O activity", "ratio", "cpu to i/o"], ["System resource use", "resource"], ["Other factors available to the kernel", "kernel"]], { n: 3 });
  def(5, 'm', 2, "Define Throughput and Response Time.",
    [["Throughput: number of processes that complete their execution per time unit", "number of processes", "per time unit"],
     ["Response time: time from when a request was submitted until the first response is produced", "first response", "submitted"]],
    "Throughput is the number of processes that complete their execution per time unit. Response time is the amount of time it takes from when a request was submitted until the first response is produced.");
  def(15, 'm', 2, "Define time quantum in Round Robin scheduling.",
    [["The limit assigned to CPU bursts", "limit"],
     ["A timer is set for it when a process is given the CPU", "timer"]],
    "The time quantum is the limit with which CPU bursts are assigned in Round Robin. When a process is given the CPU, a timer is set for a time quantum.");
  def(28, 'm', 2, "Define CPUs Load balancing.",
    [["Keeps the workload evenly distributed", "evenly", "equally"],
     ["So that one CPU is not sitting idle while another is overloaded", "idle", "overloaded"]],
    "CPUs load balancing keeps the workload evenly distributed, so that one CPU is not sitting idle while another is overloaded. It is done using process migration.");
  def(11, 'm', 2, "Why is SJF called optimal, and what is its difficulty?",
    [["It gives the minimum average waiting time for a given set of processes", "minimum average waiting", "minimum waiting", "smallest average waiting"],
     ["The difficulty is knowing the length of the next CPU request", "knowing the length", "length of the next", "next cpu"]],
    "SJF is optimal because it gives the minimum average waiting time for a given set of processes. The difficulty is knowing the length of the next CPU request.");

  /* ---------- Section E ---------- */
  exp(5, 'm', "List the CPU Scheduling Criteria, and define each one.",
    [["CPU utilization: keep the CPU as busy as possible", "as busy as possible", "cpu utilization"],
     ["Throughput: number of processes that complete their execution per time unit", "per time unit", "throughput"],
     ["Turnaround time: amount of time to execute a particular process", "to execute a particular", "turnaround"],
     ["Waiting time: amount of time waiting in the ready queue", "in the ready queue", "ready queue"],
     ["Response time: time from a request until the first response is produced", "first response", "response time"]],
    "CPU utilization: keep the CPU as busy as possible. Throughput: the number of processes that complete their execution per time unit. Turnaround time: amount of time to execute a particular process. Waiting time: amount of time a process has been waiting in the ready queue. Response time: amount of time it takes from when a request was submitted until the first response is produced.", { qb: 'Q5' });
  exp(5, 'm', "As a CPU Scheduling Criteria, explain the difference between Turnaround Time and Waiting Time.",
    [["Turnaround time: amount of time to execute a particular process", "to execute a particular", "execute a process", "execute the process"],
     ["It is the whole time of the process, so it includes the waiting time", "whole time", "includes the waiting", "total time", "includes waiting", "from start to finish"],
     ["Waiting time: amount of time a process has been waiting", "has been waiting", "time waiting", "waits"],
     ["Only in the ready queue", "ready queue"]],
    "Turnaround time is the amount of time to execute a particular process; it is the whole time of the process, so it includes the waiting time. Waiting time is only the amount of time a process has been waiting in the ready queue.", { qb: 'Q6' });
  exp(13, 'm', "Explain the difference between Internal Priorities and External Priorities.",
    [["Internal priorities are assigned by the OS", "by the os", "by the operating system", "by os"],
     ["Using average burst time, ratio of CPU to I/O activity, system resource use", "burst time", "ratio", "resource use"],
     ["External priorities are assigned by users", "by users", "by the user", "by the users"],
     ["Based on the importance of the job", "importance"]],
    "Internal priorities are assigned by the OS using criteria such as average burst time, ratio of CPU to I/O activity, system resource use, and other factors available to the kernel. External priorities are assigned by users, based on the importance of the job.", { qb: 'Q13' });
  exp(17, 'm', "Explain the Advantages and Drawbacks of Round Robin (RR) CPU scheduling.",
    [["Advantage: fair, each process gets a fair chance to run on the CPU", "fair"],
     ["Advantage: better response than SJF", "better response", "response"],
     ["Drawback: increased number of context switching with considerable overheads", "context switch", "overhead"],
     ["Drawback: typically higher average turnaround than SJF", "turnaround"]],
    "Advantages: the algorithm is fair because each process gets a fair chance to run on the CPU, and it has better response than SJF. Drawbacks: there is an increased number of context switching that occurs with considerable overheads, and typically a higher average turnaround than SJF.", { qb: 'Q20' });
  exp(19, 'm', "In round robin CPU scheduling, explain the Good and Bad points in setting short or long Time Quantum Value.",
    [["Short quantum, good: processes need not wait long before they are scheduled in", "not wait long", "need not wait", "wait less"],
     ["Short quantum, bad: context switch overhead increases", "overhead", "context switch"],
     ["Long quantum, bad: processes no longer appear to execute concurrently", "no longer appear", "concurrent"],
     ["Long quantum: may degrade the system performance (same like FCFS)", "fcfs", "degrade"]],
    "A short quantum is good because processes need not wait long before they are scheduled in, but bad because context switch overhead increases. A long quantum is bad because processes no longer appear to execute concurrently, and that may degrade the system performance (same like FCFS).", { qb: 'Q21' });
  exp([21, 22], 'm', "Explain the features of Multilevel Queue Scheduling.",
    [["Processes are categorized into multiple separate queues", "separate queues", "categori", "multiple queues"],
     ["Each queue has its own scheduling algorithm (e.g. foreground RR, background FCFS)", "own scheduling algorithm", "own algorithm", "foreground"],
     ["Jobs cannot switch from queue to queue", "cannot switch", "can not switch", "can't switch", "do not move", "until they finish"],
     ["Scheduling between the queues: fixed priority (possible starvation) or time slice (80% / 20%)", "fixed priority", "time slice", "starvation"]],
    "When processes can be readily categorized, multiple separate queues are established. Each queue has its own scheduling algorithm, for example foreground RR and background FCFS. Jobs cannot switch from queue to queue; they stay in their queue until they finish. Scheduling must be done between the queues: fixed priority scheduling (possibility of starvation) or time slice, e.g. 80% to foreground and 20% to background.", { qb: 'Q24' });
  draw(23, 'm', "Draw the typical diagram for Multilevel Queue Scheduling.", 'multilevelQueue',
    [["Real-time queue (high priority)", "real time"], ["System queue", "system"], ["Interactive queue", "interactive"], ["Batch queue (low priority)", "batch"]],
    "Four queues of processes from high priority to low priority: real-time, system, interactive, batch. Each queue sends its process to the CPU, and a preempted process returns to the same queue.", { qb: 'Q25' });
  exp([21, 24], 'm', "Explain the difference between “Multilevel Queue Scheduling” and “Multilevel Feedback Queue” Scheduling.",
    [["Multilevel queue: jobs cannot switch from queue to queue until they finish", "cannot switch", "can not switch", "until they finish", "stay in"],
     ["Feedback queue: jobs may be moved from one queue to another", "may be moved", "can be moved", "moved from one queue", "can move"],
     ["Reason: the job changes between CPU-intensive and I/O-intensive", "cpu intensive", "i/o intensive"],
     ["Reason: aging, a job that waited long is bumped up into a higher priority queue", "aging", "higher priority queue"]],
    "In multilevel queue scheduling jobs cannot switch from queue to queue; they stay in their queue until they finish. In the multilevel feedback queue jobs may be moved from one queue to another: if the characteristics of a job change between CPU-intensive and I/O-intensive, or by aging, when a job that has waited for a long time gets bumped up into a higher priority queue.", { qb: 'Q26' });
  exp([30, 32, 34, 36], 'm', "For Multiple-Processor Systems explain the difference between Asymmetric multiprocessing and Symmetric multiprocessing.",
    [["Asymmetric: a single scheduler runs only on one CPU", "single scheduler", "one scheduler", "only on one cpu"],
     ["It accesses the system data structures and decides which process runs on every CPU", "decides which process", "data structures", "decides"],
     ["Symmetric: each CPU takes its own next process", "each cpu", "every cpu takes", "own next process"],
     ["From a global queue, per CPU queues, or both (hybrid)", "global", "per cpu", "hybrid"]],
    "Asymmetric multiprocessing is when a single scheduler running only on one CPU accesses the system data structures and decides which process runs on every CPU. In symmetric multiprocessing each CPU takes its own next process: from a global queue shared by all CPUs, from per CPU queues, or from both (hybrid approach).", { qb: 'Q29' });
  exp([32, 34, 36], 'm', "What are the three approaches of Symmetrical Scheduling? Explain the difference between them.",
    [["Global queue, per CPU queues, and hybrid approach", "hybrid"],
     ["Global queue: all CPUs share one ready queue", "share one", "one ready queue", "shared by all", "share a"],
     ["Per CPU queues: each CPU has its own private ready queue", "private", "own ready queue", "own queue"],
     ["Hybrid: a global queue shared by all CPUs plus a local queue for each CPU", "plus a local", "local queue", "global and local"]],
    "The three approaches are global queue, per CPU queues, and the hybrid approach. Global queue: all CPUs share one ready queue, and each CPU takes its next process from it. Per CPU queues: each CPU has its own private ready queue of processes. Hybrid: a global queue shared by all CPUs plus a local queue for each CPU.", { qb: 'Q30' });
  exp([30, 32, 34, 36], 'h', "List the advantages and disadvantages of each multiprocessor scheduling approach: Single Scheduler, Global Queue, Per CPU Queues, and Hybrid Approach.",
    [["Single scheduler: simple to build, but a bottleneck (slow)", "bottleneck"],
     ["Global queue: good CPU utilization and fairness, but needs locking and weak processor affinity", "locking", "weak processor affinity", "weak affinity"],
     ["Per CPU queues: easy to build, scalable, fast (locality), but load imbalance", "imbalance"],
     ["Hybrid: load balancing and locality, but more complex and migration cost", "migration cost", "more complex", "complex"]],
    "Single scheduler: advantage simple to build (CPUs never conflict); disadvantage bottleneck, all CPUs wait for the scheduler CPU. Global queue: advantages good CPU utilization and fairness; disadvantages needs locking and weak processor affinity. Per CPU queues: advantages easy to build, scalable, fast (locality); disadvantage load imbalance. Hybrid approach: advantages load balancing and locality (speed); disadvantages more complex and migration cost.", { qb: 'Q31' });
  draw(38, 'm', "Compare the four multiprocessor scheduling schemes in terms of: Simple?, Scalable?, and Balanced load? (draw the summary table).", 'multiprocTable',
    [["Single scheduler: simple yes, scalable no, balanced yes", "single scheduler"], ["Global queue: simple yes, scalable no (locking), balanced yes", "global queue"], ["Per CPU queues: simple yes, scalable yes, balanced no", "per cpu"], ["Hybrid: simple no, scalable yes, balanced yes", "hybrid"]],
    "Single scheduler: simple ✔, scalable ✘, balanced load ✔. Global queue: simple ✔, scalable ✘ (locking), balanced load ✔. Per CPU queues: simple ✔, scalable ✔, balanced load ✘. Hybrid: simple ✘, scalable ✔, balanced load ✔.", { qb: 'Q32' });
  draw(31, 'm', "Draw Asymmetrical Scheduling - Single Scheduler diagram.", 'singleScheduler',
    [["Single scheduler box", "single scheduler", "scheduler"], ["It runs on one CPU (CPU 3)", "cpu 3", "one cpu"], ["CPU 0, CPU 1 and CPU 2 below", "cpu 0", "cpu 1", "cpu 2"], ["Arrows from the scheduler to each CPU", "arrow", "each cpu", "points to"]],
    "One box “CPU 3, single scheduler” at the top with arrows that go down to each CPU: CPU 0, CPU 1 and CPU 2.", { qb: 'Q35' });
  draw(33, 'm', "Draw Symmetrical Scheduling - Global Queue diagram.", 'globalQueue',
    [["One queue with P1, P2, P3, P4", "p1", "one queue"], ["The queue is locked", "locked", "lock"], ["CPU 0 takes a process", "cpu 0"], ["CPU 1, CPU 2 and CPU 3 wait", "wait"]],
    "One queue holds P1, P2, P3, P4 and is locked. CPU 0 takes P1; only one CPU at a time uses the queue while CPU 1, CPU 2 and CPU 3 wait.", { qb: 'Q36' });
  draw(35, 'm', "Draw Symmetrical Scheduling - Per CPU Queues diagram.", 'perCpu',
    [["CPU 0, CPU 1, CPU 2, CPU 3", "cpu 0", "cpu 1"], ["One queue for each CPU", "one queue for each", "own queue", "queue for each", "private"], ["One CPU very busy", "very busy", "busy"], ["One CPU almost idle (load imbalance)", "idle", "imbalance"]],
    "Four CPUs (CPU 0, CPU 1, CPU 2, CPU 3), with one queue for each CPU. CPU 2 is very busy while CPU 3 is almost idle (load imbalance).", { qb: 'Q37' });
  draw(37, 'm', "Draw Symmetrical Scheduling - Hybrid Approach diagram.", 'hybrid',
    [["Global queue (shared) at the top", "global queue", "global"], ["Arrows down to the local queues", "arrow", "down to"], ["A local queue for each CPU", "local queue"], ["CPU 0, CPU 1, CPU 2, CPU 3", "cpu 0", "cpu 3"]],
    "A global queue (shared) at the top, with arrows down to four local queues, one local queue for each CPU: CPU 0, CPU 1, CPU 2 and CPU 3.", { qb: 'Q38' });
  exp(29, 'm', "Define CPU affinity and explain the difference between soft affinity and hard affinity.",
    [["CPU affinity: binding of a process or a thread to a CPU", "binding", "bind"],
     ["So it will execute only on the designated CPU", "designated", "only on"],
     ["Soft affinity: the system attempts to keep processes on the same processor but makes no guarantees", "no guarantee", "attempts", "not guarantee"],
     ["Hard affinity: a process specifies that it is not to be moved between processors", "not to be moved", "not be moved", "never moved", "specifies"]],
    "CPU affinity is the binding of a process or a thread to a CPU, so that it will execute only on the designated CPU. Soft affinity is when the system attempts to keep processes on the same processor but makes no guarantees. In hard affinity a process specifies that it is not to be moved between processors.", { qb: 'Q39' });
  exp([27, 28, 39], 'm', "For Multiple-Processor Scheduling, explain Load balancing.",
    [["Keeps the workload evenly distributed between the CPUs", "evenly"],
     ["So one CPU is not sitting idle while another is overloaded", "idle", "overloaded"],
     ["Done using process migration", "migration"],
     ["Techniques: push migration and pull migration", "push", "pull"]],
    "Load balancing keeps the workload evenly distributed, so that one CPU is not sitting idle while another is overloaded. This is done using process migration, with push migration or pull migration.", { qb: 'Q40' });
  exp([39, 40], 'm', "Explain the difference between push migration and pull migration.",
    [["Push: a special task periodically monitors the load of all processors", "special task", "monitor"],
     ["Push: it redistributes work when it finds an imbalance", "redistribut", "imbalance", "busy to idle"],
     ["Pull: the idle processor acts itself", "idle processor", "idle cpu"],
     ["Pull: it takes (pulls) a waiting task from a busy processor", "pulls a waiting", "pull a waiting", "waiting task"]],
    "Push migration: a special task periodically monitors the load of all processors, and redistributes work when it finds an imbalance. Pull migration: idle processors pull a waiting task from a busy processor.", { qb: 'Q42' });
  draw([39, 40], 'm', "Draw a diagram that compares push migration and pull migration.", 'pushPull',
    [["Push: monitor task", "monitor"], ["Push arrow from the busy CPU to the idle CPU", "push"], ["Pull: the idle CPU pulls from the busy CPU", "pull"], ["Busy CPU and idle CPU with their queues", "busy cpu", "idle cpu"]],
    "Push migration: a monitor task checks both queues and pushes work from the busy CPU to the idle CPU. Pull migration: no monitor task; the idle CPU itself pulls a waiting task from the busy CPU.");
  exp([15, 16], 'm', "Explain how Round Robin scheduling works.",
    [["A timer is set for a time quantum when a process is given the CPU", "timer", "time quantum"],
     ["If the process finishes before the timer expires, it is swapped out like FCFS", "finishes", "before the"],
     ["If the timer goes off first, it is swapped out and moved to the back end of the ready queue", "back end", "back of the", "end of the ready"],
     ["The ready queue is circular; all processes share the CPU equally", "circular", "equally"]],
    "When a process is given the CPU, a timer is set for a time quantum. If the process finishes its burst before the timer expires, it is swapped out of the CPU like FCFS. If the timer goes off first, the process is swapped out and moved to the back end of the ready queue. The ready queue is circular, so all processes share the CPU equally.");

  calc([10, 12, 14], 'h', "For the below processes table, calculate the average waiting time for the algorithms: First Come First Serve (FCFS), Shortest Job First (SJF) and Priority Scheduling.",
    [["FCFS average waiting time = 233 / 8 = 29.125", "#29.125", "#29.12", "#29.13", "#29.1"], ["SJF order: P2, P6, P5, P3, P7, P1, P8, P4", "p2 p6 p5 p3 p7 p1 p8 p4", "p6 p2 p5 p3 p7 p1 p8 p4"], ["SJF average waiting time = 165 / 8 = 20.625", "#20.625", "#20.62", "#20.63", "#20.6"], ["Priority order: P7, P3, P8, P1, P5, P4, P2, P6", "p7 p3 p8 p1 p5 p4 p2 p6"], ["Priority average waiting time = 265 / 8 = 33.125", "#33.125", "#33.12", "#33.13", "#33.1"]],
    "FCFS: (0 + 10 + 14 + 21 + 39 + 44 + 48 + 57) / 8 = 233 / 8 = 29.125. SJF order P2, P6, P5, P3, P7, P1, P8, P4: (0 + 4 + 8 + 13 + 20 + 29 + 39 + 52) / 8 = 165 / 8 = 20.625. Priority (smallest number = highest priority) order P7, P3, P8, P1, P5, P4, P2, P6: (0 + 9 + 16 + 29 + 39 + 44 + 62 + 66) / 8 = 265 / 8 = 33.125.", { qb: 'AA1', qfig: 'bankTable' });
  calc(10, 'e', "For the below processes table, draw the FCFS Gantt chart and calculate the average waiting time. The processes arrive in the order P1, P2, P3, P4.",
    [["Order: P1, P2, P3, P4", "p1 p2 p3 p4", "p1"], ["P1 waits 0 and P2 waits 5", "#5"], ["P3 waits 8", "#8"], ["P4 waits 16", "#16"], ["Average = 29 / 4 = 7.25", "#7.25"]],
    "Gantt chart: P1 (0–5), P2 (5–8), P3 (8–16), P4 (16–18). Waiting times: P1 = 0, P2 = 5, P3 = 8, P4 = 16. Average = (0 + 5 + 8 + 16) / 4 = 29 / 4 = 7.25.", { qfig: 'table4' });
  calc(12, 'm', "For the below processes table, draw the SJF Gantt chart and calculate the average waiting time.",
    [["Order: P4, P2, P1, P3", "p4 p2 p1 p3"], ["P2 waits 2", "#2"], ["P1 waits 5", "#5"], ["P3 waits 10", "#10"], ["Average = 17 / 4 = 4.25", "#4.25"]],
    "SJF order P4, P2, P1, P3. Gantt chart: P4 (0–2), P2 (2–5), P1 (5–10), P3 (10–18). Waiting times: 0, 2, 5 and 10. Average = (0 + 2 + 5 + 10) / 4 = 17 / 4 = 4.25.", { qfig: 'table4' });
  calc(14, 'm', "For the below processes table, calculate the average waiting time for Priority Scheduling (smallest integer = highest priority).",
    [["Order: P3, P1, P5, P2, P4", "p3 p1 p5 p2 p4"], ["P1 waits 2", "#2"], ["P5 waits 8 and P2 waits 9", "#8", "#9"], ["P4 waits 13", "#13"], ["Average = 32 / 5 = 6.4", "#6.4"]],
    "Order P3, P1, P5, P2, P4. Waiting times: P3 = 0, P1 = 2, P5 = 8, P2 = 9, P4 = 13. Average = (0 + 2 + 8 + 9 + 13) / 5 = 32 / 5 = 6.4.", { qfig: 'table5' });
  calc([10, 12], 'm', "For the below processes table, calculate the average waiting time for FCFS and for SJF. Which algorithm is better here?",
    [["FCFS waiting times 0, 12, 15, 24: average 12.75", "#12.75"], ["SJF order: P2, P4, P3, P1", "p2 p4 p3 p1"], ["SJF waiting times include 3, 8 and 17", "#17"], ["SJF average = 28 / 4 = 7", "#7"], ["SJF is better (smaller average waiting time)", "sjf is better", "sjf better", "better is sjf", "sjf has", "shortest job first is better"]],
    "FCFS: waiting times 0, 12, 15, 24, average = 51 / 4 = 12.75. SJF order P2, P4, P3, P1: waiting times 0, 3, 8, 17, average = 28 / 4 = 7. SJF is better because it gives the smaller average waiting time.", { qfig: 'table4b' });

  pick([15, 16, 17], 'm', "Many users use the same computer at the same time and work with it interactively. Every user wants a fast response and a fair share of the CPU. Which CPU scheduling algorithm is the best? Why?",
    ["First-Come First-Serve (FCFS)", "Shortest-Job-First (SJF)", "Round Robin (RR)"], 2,
    [["Fair: each process gets a fair chance / equal share of the CPU (time quantum)", "fair", "equal", "quantum"], ["Better response than SJF", "response"]],
    "Round Robin gives every process a time quantum in turn, so each process gets a fair share of the CPU. It also has better response than SJF.", { qb: 'CE1' });
  pick(11, 'm', "A bank runs a group of jobs every night. The CPU burst time of every job is known before it starts. No users are waiting for a response. The goal is the smallest average waiting time. Which CPU scheduling algorithm is the best? Why?",
    ["First-Come First-Serve (FCFS)", "Shortest-Job-First (SJF)", "Round Robin (RR)"], 1,
    [["SJF is optimal: it gives the minimum average waiting time", "optimal", "minimum average", "minimum waiting", "smallest average"], ["Its difficulty (knowing the next CPU burst) is solved because burst times are known", "known", "difficulty"]],
    "SJF is optimal because it gives the minimum average waiting time for a given set of processes. Its difficulty is knowing the length of the next CPU request, but here the burst times are known.", { qb: 'CE2' });
  pick([21, 22], 'm', "A university server has two kinds of jobs: student sessions (foreground) and long backup jobs (background). A job never changes from one kind to the other. Which CPU scheduling algorithm is the best? Why?",
    ["Multilevel Queue Scheduling", "Multilevel Feedback Queue Scheduling", "First-Come First-Serve (FCFS)"], 0,
    [["Jobs are categorized into separate queues, each with its own algorithm (foreground RR, background FCFS)", "separate queue", "own algorithm", "own scheduling", "categor", "foreground"], ["Jobs never change kind, so they do not need to move between queues", "never change", "not need to move", "cannot switch", "do not move", "no need"]],
    "The jobs are categorized into separate queues, each with its own scheduling algorithm, such as RR for the foreground and FCFS for the background. Jobs never change kind, so they do not need to move between queues and the feedback queue would only be more complex.", { qb: 'CE3' });
  pick([24, 25], 'm', "In a computer, processes often change: sometimes they use the CPU a lot, and sometimes they use I/O a lot. Also, processes with low priority must not wait forever. Which CPU scheduling algorithm is the best? Why?",
    ["Multilevel Queue Scheduling", "Multilevel Feedback Queue Scheduling", "Priority Scheduling without aging"], 1,
    [["Jobs may be moved from one queue to another when they change between CPU-intensive and I/O-intensive", "moved", "move", "switch"], ["Aging bumps a waiting job to a higher priority queue, so there is no starvation", "aging", "starvation", "higher priority"]],
    "In the multilevel feedback queue, jobs may be moved from one queue to another when they change between CPU-intensive and I/O-intensive. Aging bumps a job that has waited long into a higher priority queue, so there is no starvation.", { qb: 'CE4' });
  pick(29, 'm', "An audio process must always run on CPU 2, because its data is already in the cache of CPU 2. It must never move to another CPU. Which technique is the best? Why?",
    ["Soft affinity", "Hard affinity", "Push migration"], 1,
    [["Hard affinity: the process specifies that it is not to be moved between processors", "not to be moved", "never move", "not be moved", "not moved"], ["Soft affinity makes no guarantees (and push migration moves processes)", "no guarantee", "guarantee", "migration"]],
    "With hard affinity the process specifies that it is not to be moved between processors, so it always runs on CPU 2 and uses its cache. Soft affinity makes no guarantees, and push migration moves processes.", { qb: 'CE5' });
  pick([34, 36], 'h', "A server with 64 CPUs needs quick local decisions by each CPU, but the load must also stay balanced. A more complex design is acceptable. Which approach is the best? Why?",
    ["Single scheduler", "Per CPU queues", "Hybrid approach"], 2,
    [["The global queue gives load balancing", "global queue", "load balanc", "balanced"], ["Local queues give locality / speed and it is scalable", "local queue", "locality", "scalab"]],
    "The hybrid approach has a global queue that gives every CPU a fair share (load balancing) and local queues that let each CPU choose quickly (locality). It is scalable; it is only more complex.");
  pick(30, 'm', "A small system has two CPUs. The designer wants the simplest design, in which the CPUs never conflict over the scheduling data. A little waiting is acceptable. Which approach is the best? Why?",
    ["Single scheduler", "Global queue", "Hybrid approach"], 0,
    [["Simple to build", "simple"], ["Only one CPU touches the scheduling data, so CPUs never conflict", "only one cpu", "never conflict", "no conflict"]],
    "The single scheduler is simple to build: only one CPU touches the scheduling data, so CPUs never conflict. Its disadvantage is the bottleneck, but a little waiting is acceptable here.");
  pick(39, 'm', "The OS has a special task that checks the load of all processors every few milliseconds and moves work when it finds an imbalance. Which technique is this? Why?",
    ["Pull migration", "Push migration", "Hard affinity"], 1,
    [["A special task periodically monitors the load of all processors", "special task", "monitor", "periodic"], ["It redistributes the work; in pull migration the idle CPU takes the task itself", "redistribut", "idle", "pull"]],
    "This is push migration: a special task periodically monitors the load of all processors and redistributes work when it finds an imbalance. In pull migration the idle processor itself takes a waiting task.");
});
