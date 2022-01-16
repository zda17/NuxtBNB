<template>
    <div>
        <div v-for="home in homes" :key="home.objectID" style="float: left; margin: 10px;">
            <!-- note: globally disabled prefetchLinks nuxt.config
            add prefetch to the next-link tag to enable it at an individual level -->
            <nuxt-link :to="`/home/${home.objectID}`">
                <home-card :home="home"/>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import homes from '~/data/homes';

export default {
    head() {
        return {
            title: 'Homepage',
            meta: [{
                name: 'description',
                content: 'this is a homepage!',
                hid: 'description',
            }],

        }
    },
    data() {
        return {
            homes: homes.slice(0, 3),
        }
    },
}
</script>