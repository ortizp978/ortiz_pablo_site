export default {
    name: 'TheLightboxComponent',
    
    props: ['portfolio'],

    template:
    `
    <section class="gallery_background">
        <img @click="closeLB" src="images/closeIcon.svg" class="lightbox_close">
        <div class="project_title">    
        <h2>{{ portfolio.text1 }}</h2>
        <p>{{ portfolio.text2 }}</p></div>
        
        <section class="project_gallery">
            <h2 class="hidden">Projects Gallery Section</h2>
            <div class="gallery_image"><img :src='"images/" + portfolio.image1' alt="project image"></div>
            <div class="gallery_image"><img :src='"images/" + portfolio.image2' alt="project image"></div>
            <div class="gallery_image"><img :src='"images/" + portfolio.image3' alt="project image"></div>
            <div class="gallery_image"><img :src='"images/" + portfolio.image4' alt="project image"></div> 
        </section>
    </section>
    `
    ,
    
    methods: {
        closeLB() {
            this.$emit('closelb');
        }
    }
}