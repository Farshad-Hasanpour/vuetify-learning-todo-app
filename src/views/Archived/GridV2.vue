<template>
    <div class="grid">
        <p class="subheading grey--text">Grid</p>
        <v-container class="my-5">
            <v-layout row>
                <v-flex xs12 md6>
                    <v-btn outlined block color="primary">1</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn outlined block color="primary">2</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn outlined block color="primary">3</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn outlined block color="primary">4</v-btn>
                </v-flex>
            </v-layout>

            <v-row justify="space-around">
                <v-col xs="4" md="3">
                    <v-btn outlined block color="success">1</v-btn>
                </v-col>
                <v-col xs="4" md="3">
                    <v-btn outlined block color="success">2</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Grid"
    }
</script>

<style scoped>

</style>