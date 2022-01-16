export default {
    components: true,
    head: {
        titleTemplate: "Mastering Nuxt: %s",
        htmlAttrs: {
            Lang: "en",
        },
        body: {
            class: ["my-style"],
        },
        meta: [{
            charset: "UTF-8",
        }]
    },
    router: {
        prefetchLinks: false,
    }
}