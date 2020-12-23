module.exports = (config) => {

  config.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });

  config.addPassthroughCopy("src/js/main.js");
  config.addPassthroughCopy("src/css/style.css");
  config.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "build",
      data: "_data"
    }
  };
};