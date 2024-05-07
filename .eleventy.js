const fs = require('fs');

module.exports = (eleventyConfig) => {
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addPassthroughCopy({ _public: '/' });
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content404 = fs.readFileSync('_site/404.html');
        browserSync.addMiddleware('*', (req, res) => {
          res.write(content404);
          res.end();
        });
      },
    },
  });
  return {
    pathPrefix: '/',
    passthroughFileCopy: true,
  };
};
