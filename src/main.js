import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.mixin(mixins)
app.mount('#app')

window.kakao.init('126995c298196e98ffc285bc0e9f6974')
