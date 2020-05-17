<template>
    <v-container class="home">
        <h1>Home page</h1>
        <hr>
        <h1 class="display-4">Massive Display</h1>
        <h1 class="display-1">smaller Display</h1>
        <p class="headline">this is a headline</p>
        <p class="subheading font-weight-bold">this is a subheading</p>
        <p class="caption">this is a caption</p>
        <hr>
        <v-btn class="pink white--text">click me</v-btn>
        <br>
        <v-btn color="pink" dark depressed>click me</v-btn>
        <br>
        <v-btn depressed color="pink white--text">
            <v-icon left>mdi-email</v-icon>
            <span>email me</span>
        </v-btn>
        <v-btn depressed small  color="pink white--text">
            <v-icon left small>mdi-email</v-icon>
            <span>email me</span>
        </v-btn>
        <v-btn depressed large color="pink white--text">
            <span>email me</span>
            <v-icon right large>mdi-email</v-icon>
        </v-btn>
        <v-btn fab depressed small dark color="purple">
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <hr>
        <v-btn class="hidden-md-and-down">click me</v-btn>
        <br>
        <v-btn class="hidden-md-and-up blue">click me</v-btn>
        <br>
        <v-btn class="hidden-sm-only purple">click me</v-btn>
        <br>


    </v-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    button{
        margin: 5px;
    }
</style>