import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

// ApexCharts
import VueApexCharts from "vue3-apexcharts";

// Font Awesome core + Vue component
import "@fortawesome/fontawesome-free/css/all.min.css";

// data table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App)
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)
app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')










