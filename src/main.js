import { createApp } from 'vue'
import App from './App.vue'
// router 의 셋팅값을 읽어들여서 사용한다. js 생략 가능
// import router from './router/index.js'
// vuex 의 store 활용, js 안 적어도 읽힘
// import store from './store/index'
// scss 를 이용한 css 파일 활용
import './css/style.scss'

// use를 써서 사용할 것을 추가
// createApp(App).use(store).use(router).mount('#app')
createApp(App).mount('#app')
