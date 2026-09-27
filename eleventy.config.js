import yaml from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml, yml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("dash", (value) => {
    if (value === 0) return "0";
    if (value === false) return "";
    if (value === null || value === undefined || value === "") return "—";
    return String(value);
  });

  eleventyConfig.addFilter("hasValue", (value) => {
    return value !== null && value !== undefined && value !== "";
  });

  eleventyConfig.addFilter("isoDate", () => {
    return new Date().toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
