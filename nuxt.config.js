export default{
    // Seo Meta tags
    head: {
        titleTemplate: "Nuxt BnB",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class:["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },

    //routes
    router: {
        prefetchLinks: false,
    },
    plugins:["~/plugins/maps.client",],

    //auto import components
    components: true,
}