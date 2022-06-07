module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        grid: 'no-autoplace'
      },
      stage: 2,
    }),
    require('postcss-object-fit-images')
  ]
}