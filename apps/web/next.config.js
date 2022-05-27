const withTM = require("next-transpile-modules")(["@ethan-heo/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
