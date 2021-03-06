// const purgecss = [
//   "@fullhuman/postcss-purgecss",
//   {
//     content: ["./components/**/*.js", "./pages/**/*.js"],
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//   }
// ];
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
          // the paths to all template files
          content: [
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}",
          ],
          whitelist: ['body', 'html'],
          // function used to extract class names from the templates
          defaultExtractor: (content) =>
            content.match(/[\w-/:]+(?<!:)/g) || [],
        }
        : false,
    ],
    //...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
}
