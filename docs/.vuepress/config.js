module.exports = {
  title: 'Godlike Meteors Notes',
  description: 'A porter of knowledge, a recorder of learning.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav:require('./navigate.js'),
    sidebarDepth: 2,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  }
}