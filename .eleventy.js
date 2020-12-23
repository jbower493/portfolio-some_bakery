module.exports = (config) => {

  config.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });

  config.addPassthroughCopy("src/main.js");

  return {
    dir: {
      input: "src",
      output: "build",
      data: "_data"
    }
  };
};