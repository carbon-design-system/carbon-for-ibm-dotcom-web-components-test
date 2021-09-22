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
    output: './example-page-a/index.html',
    chunks: ['example-page-a'],
    content: {
      title: 'Example page A template',
      description: 'Example page A template',
    },
    chunkEntry: {
      'example-page-a': './src/pages/example-page-a/example-page-a.js',
    },
    template: './src/pages/example-page-a/example-page-a.hbs',
  },
  {
    output: './example-page-b/index.html',
    chunks: ['example-page-b'],
    content: {
      title: 'Example page B template',
      description: 'Example page B template',
    },
    chunkEntry: {
      'example-page-b': './src/pages/example-page-b/example-page-b.js',
    },
    template: './src/pages/example-page-b/example-page-b.hbs',
  },
  {
    output: './example-page-c/index.html',
    chunks: ['example-page-c'],
    content: {
      title: 'Example page C template',
      description: 'Example page C template',
    },
    chunkEntry: {
      'example-page-c': './src/pages/example-page-c/example-page-c.js',
    },
    template: './src/pages/example-page-c/example-page-c.hbs',
  },
];

module.exports = pages;
