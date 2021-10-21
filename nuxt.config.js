require('dotenv').config()
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
    plugins:["~/plugins/maps.client", "~/plugins/dataApi"],

    //auto import components
    components: true,
    // env: {
    //     baseUrl: process.env.ALGOLIA_API_KEY || 'http://localhost:3000',
    //     baseUrl: process.env.ALGOLIA_APP_ID || 'http://localhost:3000',
    //     baseUrl: process.env.MAP_API_KEY || 'http://localhost:3000',
    //   },

    modules: [
        '@nuxtjs/dotenv'
    ]
}