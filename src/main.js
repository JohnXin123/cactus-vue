// import './assets/main.css';
import './assets/tailwind.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useLoginStore } from './stores/loginStore.js'

// prime vue datatable
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

//Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

//preloader
import PreLoader from "@/components/layout/PreLoaderComponent.vue";


const app = createApp(App)
app.use(createPinia())

router.beforeEach((to, from, next) => {

	const loginStore = useLoginStore();

	if (to.meta.requiresAuth && !loginStore.isLoggedIn) {
		next({ name: 'login'})
	}

	if (to.meta.isAuthRoute && loginStore.isLoggedIn) {
		next({ name: 'home'});
	}
		
	next();
	
});

const options = {
	transition: "Vue-Toastification__bounce",
	position: "bottom-center",
	timeout: 3000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: false,
	draggable: true,
	draggablePercent: 0.6,
	showCloseButtonOnHover: false,
	hideProgressBar: true,
	closeButton: "button",
	icon: true,
	rtl: false
}


app.use(router)
app.use(PrimeVue)
app.use(Toast, options)
app.component('PreLoader', PreLoader);
app.component('DataTable', DataTable);
app.component('ColumnComponent', Column);
app.component('InputText', InputText);

app.mount('#app')
