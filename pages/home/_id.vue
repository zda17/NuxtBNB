<template>
    <div>
        <div style="display: flex">
            <img v-for="image in home.images" :key="image" :src="image"  alt="image of home...." width="200" height="150">
        </div>
        {{ home.title }}
        <br>
        ${{ home.pricePerNight }} / night 
        <br>
        <img src="/images/marker.svg" width="20" height="20" alt="location icon">
        {{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}
        <br>
        <img src="/images/star.svg" width="20" height="20" alt="location icon">
        {{ home.reviewValue }}
        <br>
        {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath
        <br>
        {{ home.description }}
        <br>
        <div style="height: 800px; width: 800px;" ref="map">

        </div>
    </div>
</template>
<script>

export default {
    // layout: 'red',
    head() {
        return {
            title: this.home.title,
        }
    },
    data() {
        return {}
    },
    methods: {},
    mounted() {
        this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
    },
    async asyncData({ params, $dataApi }) {
        const home = await $dataApi.getHome(params.id);
        return {
            home, 
        }
    }
}
</script>