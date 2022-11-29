//import PortfolioThumb from './components/ThePortfolioThumbnail.js';
//import Lightbox from './components/TheLightboxComponent.js';
import { SendMail } from "./components/mailer.js";

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
        portfoliothumbnail: theThumbnail,
        lightbox: theLightbox
    }
}).mount('#container'),

createApp({
    data() {
        return {
            errorName: false,
            errorEmail: false,
            errorInMessage: false,
            successMessage: false,

            form: {
                name: "",
                email: "",
                text: ""
            }
        }
    },

    methods: {
        processMailFailure(result) {
            if(this.form.name.length > 0){
            this.$refs.name.classList.remove("error");
            this.errorName = false;
            } else {
            this.$refs.name.classList.add("error");
            this.errorName = true;
            } 

            if(this.form.email.length > 0){
            this.$refs.email.classList.remove("error");
            this.errorEmail = false;
            } else {
            this.$refs.email.classList.add("error");
            this.errorEmail = true;
            }

            if(this.form.text.length > 0){
            this.$refs.message.classList.remove("error");
            this.errorInMessage = false;
            } else {
            this.$refs.message.classList.add("error");
            this.errorInMessage = true;
            }      
        },

        processMailSuccess(result) {
            this.successMessage = true;
            this.$refs.name.classList.remove("error");
            this.$refs.email.classList.remove("error");
            this.$refs.message.classList.remove("error");
            this.errorName = false;
            this.errorEmail = false;
            this.errorInMessage = false;
        },

        processMail(event) {        
            // use the SendMail component to process mail
            SendMail(this.$el.parentNode)
                .then(data => this.processMailSuccess(data))
                .catch(err => this.processMailFailure(err));
        }
    }

}).mount('#mail-form')

})()