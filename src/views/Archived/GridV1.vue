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

            <v-layout row justify-space-around>
                <v-flex xs4 md3>
                    <v-btn outlined block color="success">1</v-btn>
                </v-flex>
                <v-flex xs4 md3>
                    <v-btn outlined block color="success">2</v-btn>
                </v-flex>
            </v-layout>
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