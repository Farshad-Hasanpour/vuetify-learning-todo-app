<template>
    <v-container>
        <v-card class="question single-select mt-12 py-3 pl-12 pr-4 mx-10" flat>
            <div id="question-control" style="">
                <v-btn
                        icon
                        :color="(btn.title === 'delete')? 'red' : 'blue darken-4'"
                        v-for="btn in questionControls"
                        :key="btn.title"
                        class="control-button"
                        width="40"
                        height="40"
                >
                    <v-icon v-text="btn.icon"></v-icon>
                </v-btn>
            </div>

            <v-tabs v-model="tab" background-color="transparent" right class="mt-n9" hide-slider>
                <v-tabs-slider></v-tabs-slider>
                <v-tab v-for="tab in questionTabs" :key="tab.title" :href="tab.href" class="font-weight-thin">
                    <span v-text="tab.title"></span>
                </v-tab>
                <v-tabs-items v-model="tab" class="mt-4">
                    <v-tab-item value="main">
                        <v-row>
                            <v-col cols="4" right order="2">
                                <v-select v-model="selectedQuestionType" reverse outlined return-object :items="questionTypes" item-text="title" label="نوع سوال"></v-select>
                            </v-col>
                            <v-col order="1">
                                <v-text-field reverse outlined label="متن سوال" placeholder="تا چه حد از خدمات ما راضی بودید؟"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row v-if="selectedQuestionType.id === 1">
                            <v-col class="grey" cols="4"></v-col>
                            <v-col>
                                <v-card v-for="option in answerOptions" :key="option.title" class="answer-option mb-4 pa-0">
                                    <v-row no-gutters align="center">
                                        <div class="option-controls">
                                            <v-btn icon :title="btn.title" :color="btn.color" v-for="btn in optionControls" :key="btn.title">
                                                <v-icon v-text="btn.icon"></v-icon>
                                            </v-btn>
                                        </div>

                                        <v-col class="text-right px-4 answer-option-title" r-dir>
                                            <p v-text="option.title" class="r-dir"></p>
                                        </v-col>

                                        <div class="image-upload">
                                            <v-btn tile height="45" color="blue darken-4 white--text">
                                                <v-icon>mdi-camera</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-row>

                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row v-if="selectedQuestionType.id === 2">
                            <v-col class="grey" cols="3"></v-col>
                            <v-col class="grey lighten-2">چند انتخابی</v-col>
                        </v-row>


                    </v-tab-item>
                    <v-tab-item value="condition">
                            this is second tab
                    </v-tab-item>
                    <v-tab-item value="index">
                            this is third tab
                    </v-tab-item>
                    <v-tab-item value="option">
                            this is fourth tab
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "SingleSelect",
        data: function(){
            return {
                tab: 'main',
                questionTabs: [
                    {
                        title: 'تنظیمات',
                        href: '#option'
                    },
                    {
                        title: 'شاخص',
                        href: '#index'
                    },
                    {
                        title: 'شرط',
                        href: '#condition'
                    },
                    {
                        title: 'ویرایش',
                        href: '#main'
                    }
                ],
                questionControls: [
                    {
                        title: 'minimize',
                        icon: 'mdi-window-minimize'
                    },
                    {
                        title: 'up',
                        icon: 'mdi-chevron-up'
                    },
                    {
                        title: 'down',
                        icon: 'mdi-chevron-down'
                    },
                    {
                        title: 'duplicate',
                        icon: 'mdi-content-duplicate'
                    },
                    {
                        title: 'delete',
                        icon: 'mdi-delete-forever'
                    },
                ],
                questionTypes: [
                    {
                        id: 1,
                        title: 'تک انتخابی'
                    },
                    {
                        id: 2,
                        title: 'چند انتخابی'
                    }
                ],
                selectedQuestionType: {
                    id: null,
                    title: null
                },
                optionControls: [
                    {
                        title: 'حذف',
                        icon: 'mdi-delete',
                        color: 'red'
                    },
                    {
                        title: 'بالا',
                        icon: 'mdi-arrow-up-thick',
                        color: 'blue darken-4'
                    },
                    {
                        title: 'پایین',
                        icon: 'mdi-arrow-down-thick',
                        color: 'blue darken-4'
                    },
                    {
                        title: 'افزودن',
                        icon: 'mdi-plus-thick',
                        color: 'green lighten-2'
                    },
                ],
                answerOptions:[
                    {
                        title: 'خیلی خوب',
                    },
                    {
                        title: 'خوب',
                    },
                    {
                        title: 'متوسط',
                    },
                    {
                        title: 'بد',
                    },
                    {
                        title: 'خیلی بد',
                    },
                    /*{
                        title: ' خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد خیلی بد',
                    },*/
                ]
            }
        }
    }
</script>

<style scoped>
    .question{
        border: 2px #0D47A1 solid;
        min-height: 300px;
    }

    #question-control{
        position:absolute;
        top: 30px;
        left: -40px;
        width:40px;
        border-radius: 0;
        background-color: white;
        padding: 0 !important;
        border: 2px #0D47A1 solid;
        border-right: 0;
    }

    .control-button{
        border-radius: 0;
    }

    .v-tabs-items {
        background-color: transparent;
    }

    .v-tab{
        background-color: white;
        color: #0D47A1 !important;
        margin-right: -2px;
        border: 2px #0D47A1 solid;
    }

    .v-tab.v-tab--active{
        background-color: #0D47A1;
        color: white !important;
    }

    .image-upload button{
        min-height: 100%;
    }
    .answer-option-title{

    }
    .answer-option-title p{
        margin:0;
    }

</style>