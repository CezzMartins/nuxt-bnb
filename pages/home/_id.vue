<template>
    <div>
        <h1>{{ home.title }}</h1>
    </div>
</template>

<script>
import homes from '@/data/homes.json';
    export default {
        data(){
            return{
                home: {}
            }
        },
        created(){
            const home = homes.find((home) => home.objectID == this.$route.params.id)
            console.log(this.$route)
            this.home = home
        }
    }
</script>

<style lang="scss" scoped>

</style>