export function sendRequest() {
  return new Promise(r => {
    setTimeout(() => {
      r({ result: true });
    }, 2000);
  });
}
