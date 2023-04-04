import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCaretDown,faDownload, faPlay, faChevronUp, faChevronDown, faCopy} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles 
import 'vue-good-table-next/dist/vue-good-table-next.css'


library.add(faSearch, faCaretDown, faDownload, faPlay, faChevronUp, faChevronDown, faCopy);

createApp(App).use(router, VueGoodTablePlugin).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
