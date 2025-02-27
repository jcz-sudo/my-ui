import { defineConfig } from 'vitepress'
import {loadEnv} from "vite"
import nav from "./configs/nav";
import sidebar from "./configs/sidebar";
import footer from "./configs/footer"
// https://vitepress.dev/reference/site-config
export default (mode)=>{
  const env = loadEnv(mode, process.cwd());
  const base = env.VITE_APP_ENV != "production" ? "/" : "/";
  return defineConfig({
  title: "X-UI",
  description: "X-UI组件库文档",
  base,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    footer,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jcz-sudo/my-ui.git' }
    ]
  }

  })}
