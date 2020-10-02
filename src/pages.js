const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    chunks: ['home'],
    chunkEntry: {
      'home': './src/pages/home/home.js',
    },
    template: './src/pages/home/home.hbs'
  },
  {
    output: './ui-components/index.html',
    content: {
      title: 'UI Components',
      description: 'List of UI Components'
    },
    chunks: ['ui-components'],
    chunkEntry: {
      'ui-components': './src/pages/ui-components/ui-components.js',
    },
    template: './src/pages/ui-components/ui-components.hbs'
  },
  {
    output: './learn/index.html',
    chunks: ['learn'],
    content: {
      title: 'Learn template',
      description: 'Learn template'
    },
    chunkEntry: {
      'learn': './src/pages/learn/learn.js',
    },
    template: './src/pages/learn/learn.hbs'
  }
]

module.exports = pages
