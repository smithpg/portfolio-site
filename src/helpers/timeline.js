export async function timedSequence(cb, timeline) {
  // Arrange for cb to be called at each millisecond
  // offset specified within timeline

  for (let offset of timeline) {
    await promiseToCallAfterTimeout(cb, offset);
  }
}

function promiseToCallAfterTimeout(fn, timeout) {
  return new Promise((res, rej) => {
    res(fn());
  }, timeout);
}
