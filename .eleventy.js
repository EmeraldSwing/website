module.exports = config => {
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/css/');
  config.addWatchTarget("./src/css/")
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
}