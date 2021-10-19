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
import homes from '@/data/homes.json';
    export default {
        head(){
            return{
                title: this.home.title,
                script: [{
                    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyANnbr08pT--z5OBnhiZBwxShBY3_oOjQM&libraries=places",
                    hid: "map",
                    defer: true
                }]
            }
        },
        data(){
            return{
                home: {},
                api: process.env.API_KEY
            }
        },
        created(){
            const home = homes.find((home) => home.objectID == this.$route.params.id)
            this.home = home
        },
        mounted(){
            const mapOptions = {
                zoom:18,
                center: new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng),
                disableDefaultUI: true,
                zoomControl: true,
                
            }
            const map = new window.google.maps.Map(this.$refs.map, mapOptions)
            const position = new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng)
            const marker = new window.google.maps.Marker({
                position: position,
            })
            marker.setMap(map)
        }
    }
</script>

<style lang="scss" scoped>

</style>