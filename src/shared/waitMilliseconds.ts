const waitMilliseconds = (timeInMilliseconds: number) =>
  new Promise<void>(resolve => {
    setTimeout(resolve, timeInMilliseconds);
  });

export default waitMilliseconds;
