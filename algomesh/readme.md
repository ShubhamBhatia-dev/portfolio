## a high speed trade execution engine  – Built a high-performance C++20 execution engine achieving 100M+ ops/sec throughput, 21.52 ns mean latency, and a 99.0 ns
P99 tail latency (verified via perf stat yielding 2.19 IPC).
– Designed a highly concurrent synchronization pipeline using custom slab allocators and lock-free SPSC ring buffers; employed
64-byte cache-line alignment to eliminate false sharing and achieve 98.92% branch prediction accuracy.
– Developed a high-throughput storage engine with custom B-Tree indexing and kernel-bypass asynchronous I/O (Linux
io_uring), persisting millions of binary events/sec to disk.
– Implemented a resilient network ingestion layer featuring a custom zero-allocation parser to process high-velocity WebSocket
streams directly into 64-bit fixed-point representations at the network edge to prevent latency spikes.