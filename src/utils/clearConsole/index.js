export const clearConsole = () => {
  if (module.hot) {
    module.hot.accept(); // already had this init code

    module.hot.addStatusHandler((status) => {
      if (status === 'prepare') console.clear();
    });
  }
};
