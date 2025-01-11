import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import xgplayer from "./components/xgplayer.vue"
import confetti from "./components/confetti.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import "vitepress-markdown-timeline/dist/theme/index.css";
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import 'virtual:group-icons.css' //代码组样式
export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
  enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard),
    app.component('HomeUnderline' , HomeUnderline),
    app.component('xgplayer' , xgplayer),
    app.component('confetti' , confetti),
    app.component('update' , update),
    app.component('ArticleMetadata' , ArticleMetadata)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}