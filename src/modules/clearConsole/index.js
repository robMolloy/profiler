const onStatusChange = (status) => {
  if (status !== 'prepare') return;

  console.clear();
  console.warn('Console cleared in \'src/boot/clearConsole.js\' - may not show boot errors');
};

export const clearConsole = () => {
  if (module.hot) {
    module.hot.accept(); // already had this init code
    module.hot.addStatusHandler(onStatusChange);
  }
};
