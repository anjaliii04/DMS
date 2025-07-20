export function simulatePaging(processSize, pageSize, memorySize) {
  const pages = Math.ceil(processSize / pageSize);
  const frames = Math.floor(memorySize / pageSize);
  const pageTable = [];

  for (let i = 0; i < pages; i++) {
    if (i < frames) {
      pageTable.push({ page: i, frame: i });
    } else {
      pageTable.push({ page: i, frame: -1 }); // page fault
    }
  }

  // Collect unused frames
  const unusedFrames = [];
  for (let i = pages; i < frames; i++) {
    unusedFrames.push(i);
  }

  return {
    pageTable,
    unusedFrames
  };
}
