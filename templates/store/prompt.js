const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'store name please',
      validate: notEmpty('name')
    }
  ],
  actions(data) {
    const name = '{{name}}'

    return [{
      type: 'add',
      path: `src/store/modules/${name}.js`,
      templateFile: 'templates/store/index.hbs',
    }]
  }
}
