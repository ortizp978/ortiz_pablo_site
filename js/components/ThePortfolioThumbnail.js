const theThumbnail = {
    name: 'ThePortfolioThumb',

    props: {
        portfolio: Object
    },

    template:
    `
    <li @click="loadLightboxData">
        <img :src='"images/" + portfolio.thumbnailPic' alt="project image">
        <h2>{{portfolio.name}}</h2>
    </li>
    `,

    methods: {
        loadLightboxData() {
            this.$emit('loadlb',this.portfolio);
        }
    }
}