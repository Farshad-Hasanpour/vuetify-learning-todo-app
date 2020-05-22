<template>
    <v-app>
        <navbar/>
        <v-content class="grey lighten-4">
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

    #app{
        font-family: shabnam, tahoma !important;
    }

    @font-face {
        font-family: shabnam;
        src: url('./assets/font/shabnam/Shabnam-FD.eot');
        src: url('./assets/font/shabnam/Shabnam-FD.eot?#iefix') format('embedded-opentype'),
        url('./assets/font/shabnam/Shabnam-FD.woff') format('woff'),
        url('./assets/font/shabnam/Shabnam-FD.ttf') format('truetype');
        font-weight: normal;
    }

    .r-dir{
        direction: rtl !important;
    }

    input{
        direction: rtl !important;
    }

    .v-select-list{
        text-align: right;
        direction: rtl;
    }
</style>
