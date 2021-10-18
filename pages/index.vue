<template>
    <div>
        <div v-for="home in homes" :key="home.objectID" style="float: left; margin: 10px;">
            <HomeCard :home="home"/>
        </div>
    </div>
</template>

<script>
import homes from '@/data/homes.json';
    export default {
        head(){
            return{
                title: "Nuxt Bnb, Wellcome!!",
                meta: [{
                    name: "description",
                    content: "This is my Home page",
                    hid: "description"
                }]
            }
        },
        
        data(){
            return{
                homes: homes.slice(0,4)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>