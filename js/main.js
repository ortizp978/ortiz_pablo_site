import PortfolioThumb from './components/ThePortfolioThumbnail.js';
import Lightbox from './components/TheLightboxComponent.js';

(() => {

//Toggle menu for the hamburguer menu
const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main_menu');

toggleMenuElement.addEventListener('click',() => {
    mainMenuElement.classList.toggle('main_menu--show');
});
// End toggle menu


const { createApp } = Vue

createApp({
    created() {
        fetch('./scripts/json.php')
            .then(res => res.json())
            .then(data => this.portfolioData = data)
            .catch(error => console.error(error));
    },

    data() {
        return {
            portfolioData: {},
            lightboxData: {},
            showLightBox: false
        }
    },

    methods: {
        loadLightBox(item) {
            this.lightboxData = item;
            this.showLightBox = true;
        }
    },

    components: {
        portfoliothumbnail: PortfolioThumb,
        lightbox: Lightbox
    }
}).mount('#container')

})()