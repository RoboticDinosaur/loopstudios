const socialImages = require("@11tyrocks/eleventy-plugin-social-images");
const emojiRegex = require("emoji-regex");
const slugify = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const packageVersion = require("./package.json").version;

const dateFilter = require('./src/_11ty/filters/date-filter.js');
const markdownFilter = require('./src/_11ty/filters/markdown-filter.js');
const yearFilter = require('./src/_11ty/filters/year-filter.js');
const w3DateFilter = require('./src/_11ty/filters/w3-date-filter.js');

const { configFunction } = require("@11ty/eleventy-plugin-syntaxhighlight");

const site = require('./src/_data/site.json');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(socialImages);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");

  eleventyConfig.addShortcode("packageVersion", () => `v${packageVersion}`);

	eleventyConfig.addFilter('dateFilter', dateFilter);
	eleventyConfig.addFilter('markdownFilter', markdownFilter);
	eleventyConfig.addFilter('yearFilter', yearFilter);
	eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }

    const regex = emojiRegex();
    // Remove Emoji first
    let string = str.replace(regex, "");

    return slugify(string, {
      lower: true,
      replacement: "-",
      remove: /[*+~·,()'"`´%!?¿:@\/]/g,
    });
	});


	const now = new Date();

	// Custom collections
	const livePosts = (post) => post.date <= now && !post.data.draft;
	eleventyConfig.addCollection('posts', (collection) => {
		return [
			...collection.getFilteredByGlob('./src/posts/**/*.md')
			.filter(livePosts)
		].reverse();
	})

	eleventyConfig.addCollection('postFeed', (collection) => {
		return [
			...collection.getFilteredByGlob('./src/posts/**/*.md')
			.filter(livePosts)
		].reverse()
		.slice(0, site.maxPostsPerPage);
	})


  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
