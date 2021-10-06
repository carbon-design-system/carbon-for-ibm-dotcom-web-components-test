const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page',
    },
    chunks: ['home'],
    chunkEntry: {
      home: './src/pages/home/home.js',
    },
    template: './src/pages/home/home.hbs',
  },
  {
    output: './ui-components/index.html',
    content: {
      title: 'UI Components',
      description: 'List of UI Components',
    },
    chunks: ['ui-components'],
    chunkEntry: {
      'ui-components': './src/pages/ui-components/ui-components.js',
    },
    template: './src/pages/ui-components/ui-components.hbs',
  },
  {
    output: './learn/index.html',
    chunks: ['learn'],
    content: {
      title: 'Learn template',
      description: 'Learn template',
    },
    chunkEntry: {
      learn: './src/pages/learn/learn.js',
    },
    template: './src/pages/learn/learn.hbs',
  },
  {
    output: './solutions/index.html',
    chunks: ['solutions'],
    content: {
      title: 'Solutions template',
      description: 'Solutions template',
    },
    chunkEntry: {
      solutions: './src/pages/solutions/solutions.js',
    },
    template: './src/pages/solutions/solutions.hbs',
  },
  {
    output: './services/index.html',
    chunks: ['services'],
    content: {
      title: 'Services template',
      description: 'Services template',
    },
    chunkEntry: {
      services: './src/pages/services/services.js',
    },
    template: './src/pages/services/services.hbs',
  },
  {
    output: './white-theme-page/index.html',
    chunks: ['white-theme-page'],
    content: {
      title: 'White theme page',
      description: 'White theme page',
    },
    chunkEntry: {
      'white-theme-page': './src/pages/white-theme-page/white-theme-page.js',
    },
    template: './src/pages/white-theme-page/white-theme-page.hbs',
  },
  {
    output: './g100-theme-page/index.html',
    chunks: ['g100-theme-page'],
    content: {
      title: 'Gray 100 theme page',
      description: 'Gray 100 theme page',
    },
    chunkEntry: {
      'g100-theme-page': './src/pages/g100-theme-page/g100-theme-page.js',
    },
    template: './src/pages/g100-theme-page/g100-theme-page.hbs',
  },
  {
    output: './cloud/index.html',
    chunks: ['cloud'],
    content: {
      title: 'Cloud template',
      description: 'Cloud template',
    },
    chunkEntry: {
      cloud: './src/pages/cloud/cloud.js',
    },
    template: './src/pages/cloud/cloud.hbs',
  },
];

module.exports = pages;
