<template>
    <div>
        
        <div style="display: flex">
            <img v-for="image in home.images" :key="image" alt="homes" :src="image" width="200px" height="150px"/>        
        </div>
    {{ home.title }}
    ${{ home.pricePerNight }} / night <br/>
    <img src="/images/marker.svg" alt="" width="20" height="20">{{ home.location.address }} - {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br/>
    <img src="/images/star.svg" alt="" width="20" height="20">{{ home.reviewValue }} <br/>
    {{ home.guests }} guests, {{ home.badrooms }}, {{ home.beds }} beds, {{ home.bathrooms }} bath<br/>
    <div style="height: 800px; width: 800px" ref="map">

    </div>
    </div>
</template>

<script>
    export default {
        head(){
            return{
                title: this.home.title,
            }
        },
        methods:{
            
        },
        
        mounted(){
            // get the plugin to show the map at de div
            this.$maps.showMap(this.$refs.map, this.home._geoloc.lat,this.home._geoloc.lng)
        },                              
        async asyncData({ params, $dataApi, error }){
            const response = await $dataApi.getHome(params.id)
            if(!response.ok) return error({ statusCode: response.status, message: response.status })
            return {
                home: response.json
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>