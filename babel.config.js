const plugins = []

// lazy load vant
// if your use import on Demand, Use this code
plugins.push(
  [
    'import',
    {libraryName: 'vant', libraryDirectory: 'es', style: true},
    'vant'
  ]
)

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    'import',
    {libraryName: 'vant', libraryDirectory: 'es', style: true},
    'vant'
  ]
}
