<template>
    <div class="grid">
        <p class="subheading grey--text">Grid</p>
        <v-container class="my-5">
            <v-row>
                <v-col cols="12" md="6">
                    <v-btn outlined block color="primary">1</v-btn>
                </v-col>
                <v-col cols="4" md="2">
                    <v-btn outlined block color="primary">2</v-btn>
                </v-col>
                <v-col cols="4" md="2">
                    <v-btn outlined block color="primary">3</v-btn>
                </v-col>
                <v-col cols="4" md="2">
                    <v-btn outlined block color="primary">4</v-btn>
                </v-col>
            </v-row>

            <v-row justify="space-around">
                <v-col cols="4" md="3">
                    <v-btn outlined block color="success">1</v-btn>
                </v-col>
                <v-col cols="4" md="3">
                    <v-btn outlined block color="success">2</v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-btn outlined block color="primary">3.5 of 12</v-btn>
                </v-col>
                <v-col cols="5">
                    <v-btn outlined block color="primary">5 of 12</v-btn>
                </v-col>
                <v-col>
                    <v-btn outlined block color="primary">3.5 of 12</v-btn>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <template v-for="n in 4">
                    <v-col :key="n">
                        <v-card class="pa-2" outlined tile>{{n}}</v-card>
                    </v-col>
                    <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
                </template>
            </v-row>

            <v-row>
                <v-col order="3">
                    <v-btn outlined block color="primary">1</v-btn>
                </v-col>
                <v-col cols="5" order="1">
                    <v-btn outlined block color="primary" >2</v-btn>
                </v-col>
                <v-col order="2">
                    <v-btn outlined block color="primary">3</v-btn>
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