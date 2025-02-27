import componentSideBar from "../../pages/components.json"

export default {
  '/zh-CN/guide/': [
    {
      text: '快速开始',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'ouryun-plus', link: '/zh-CN/guide/elp-install' },
      ]
    },
    {
      text: '开发者指南',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'docs项目', link: '/zh-CN/guide/docs-dev' },
        { text: 'ouryun-plus', link: '/zh-CN/guide/elp-dev' },
        { text: 'internal-build打包', link: '/zh-CN/guide/internal-build' },
      ]
    }
  ],
  '/zh-CN/components/ouryun-plus': componentSideBar,
}
