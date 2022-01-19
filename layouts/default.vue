<template>
    <div>
        <header style="background-color:#eee">
            <nuxt-link to="/">Home</nuxt-link>
            <input type="text" ref="citySearch" @changed="changed" placeholder="City Search" />
        </header>
        <nuxt/>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$maps.makeAutoComplete(this.$refs.citySearch);
    },
    methods: {
        changed(event) {
            console.log(event);
            const place = event.detail;
            console.log(place);

            if (!place.geometry) return;

            console.log(place.geomtery);

            this.$router.push({
                name: 'search',
                query: {
                    Lat: place.geometry.location.lat(),
                    Lng: place.geometry.location.lng(),
                    Label: this.$refs.citySearch.value,
                }
            })
        }
    }
}
</script>
<style>
    /* .pac-container { 
        display: block !important; 
        z-index: 10000 !important; 
    } */
</style>