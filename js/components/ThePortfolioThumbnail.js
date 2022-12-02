const theThumbnail = {
    name: 'ThePortfolioThumb',

    props: {
        portfolio: Object
    },

    template:
    `
    <li @click="loadLightboxData">
        <a ref="#projects"><img :src='"images/" + portfolio.thumbnailPic' alt="project image"></a>
        <h2>{{portfolio.name}}</h2>
    </li>
    `,

    methods: {
        loadLightboxData() {
            this.$emit('loadlb',this.portfolio);
        }
    }
}