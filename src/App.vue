<template>
    <v-app>
        <navbar/>
        <v-content class="mb-4 grey lighten-4">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        components:{
            Navbar
        }
    }
</script>

<style lang="scss">
    html{
        overflow-y: auto !important;
    }
</style>
