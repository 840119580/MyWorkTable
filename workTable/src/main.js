import { createApp } from 'vue'
import './stylebak.css'
import App from './App.vue'
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import "element-plus/dist/index.css"
import ElementPlus from 'element-plus'
import { ref } from 'vue'
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
import '@vxe-ui/plugin-render-chart/dist/style.css'
import '@icon-park/vue-next/styles/index.css';
// ...

VxeUI.use(VxeUIPluginRenderElement)

const app = createApp(App)
app.use(ElementPlus)
app.use(VxeUI)
app.use(VxeUITable)
app.mount('#app')