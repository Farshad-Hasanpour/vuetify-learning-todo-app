<template>
    <v-container>
        <div class="question-container my-4 mx-10">
            <div id="question-control" class="elevation-3">
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
            <v-tabs v-model="tab" slider-size="40px" class="question elevation-3" background-color="blue darken-4" dark right >
                <v-tabs-slider color="orange"></v-tabs-slider>

                <v-tab v-for="tab in questionTabs" :key="tab.title" :href="tab.href" class="font-weight-thin">
                    <span v-text="tab.title"></span>
                </v-tab>

                <v-tabs-items v-model="tab" class="pa-5">
                    <v-tab-item value="main" >
                        <v-row>
                            <v-col cols="3" right order="2">
                                <v-select
                                    outlined
                                    v-model="selectedQuestionType"
                                    reverse
                                    return-object
                                    :items="questionTypes"
                                    item-text="title"
                                    label="نوع سوال"
                                ></v-select>
                            </v-col>
                            <v-col order="1">
                                <v-text-field outlined reverse  label="متن سوال"></v-text-field>
                            </v-col>
                        </v-row>
                        <h3 class=" text-right r-dir mb-2" style="color: #aaa;">گزینه های پاسخ:</h3>
                        <v-row>
                            <v-col class="pa-3" cols="4" style="border-right: 1px lightgrey solid" v-if="!imagedSelectQuestion">
                                <v-card class="card-outter pb-12" flat>
                                    <div id="single-answer-options" class="mb-4" v-if="singleSelectQuestion">
                                        <v-select
                                            v-model="SelectedAnswerOptions"
                                            :change="test"
                                            return-object
                                            :items="defaultAnswerOptions"
                                            item-text="name"
                                            label="گزینه های پیشفرض"
                                            outlined
                                            reverse
                                            hide-details
                                        ></v-select>
                                        <v-checkbox
                                                v-model="ex4"
                                                label="ترتیب معکوس"
                                                color="blue darken-4"
                                                value="invert-options"
                                                hide-details
                                                class="text-right r-dir"
                                        ></v-checkbox>
                                    </div>

                                    <div id="star-options" class="r-dir" v-if="starQuestion">
                                        <v-color-picker canvas-height="120" width="200" class="ma-2" hide-inputs flat></v-color-picker>
                                    </div>

                                    <p class="text-right r-dir mb-10 question-error" v-if="errorMessage">
                                        <span>*</span>
                                        <span v-text="errorMessage"></span>
                                        <span>*</span>
                                    </p>

                                    <v-card-actions class="card-actions" style="width: 100%;">
                                        <div class="mr-auto ml-0">
                                            <v-btn :disabled="errorMessage.length" :dark="!errorMessage.length" color="green" title="ذخیره تغییرات سوال" fab>
                                                <v-icon>mdi-floppy</v-icon>
                                            </v-btn>
                                        </div>
                                        <div class="ml-auto mr-0">
                                            <v-btn color="blue darken-4" large rounded dark>
                                                <v-icon left>mdi-book-outline</v-icon>
                                                بانک سوالات
                                            </v-btn>
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col id="single-or-multiple-answers"
                                    v-if="selectQuestion"
                            >
                                <v-card v-for="(option, index) in SelectedAnswerOptions.titles" :key="option" class="answer-option pl-3 pr-5" :class="(index != 0)? 'mt-4': ''"  flat>
                                    <v-row no-gutters align="center">
                                        <div class="option-controls">
                                            <v-btn icon :title="btn.title" :color="btn.color" v-for="btn in optionControls" :key="btn.title">
                                                <v-icon v-text="btn.icon"></v-icon>
                                            </v-btn>
                                        </div>

                                        <v-col class="text-right answer-option-title">
                                            <v-text-field single-line reverse solo class="r-dir" flat :value="option"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col id="star-answers" v-if="starQuestion">
                                <v-row class="fill-height" align="center" justify="center">
                                    <v-img src="../../assets/img/questions/star/star.svg" max-width="70" max-height="70"></v-img>
                                    <v-img src="../../assets/img/questions/star/star.svg" max-width="70" max-height="70"></v-img>
                                    <v-img src="../../assets/img/questions/star/star.svg" max-width="70" max-height="70"></v-img>
                                    <v-img src="../../assets/img/questions/star/star.svg" max-width="70" max-height="70"></v-img>
                                    <v-img src="../../assets/img/questions/star/star.svg" max-width="70" max-height="70"></v-img>
                                </v-row>

                            </v-col>
                            <v-col id="emoji-answers" v-if="emojiQuestion">
                                <v-row class="fill-height" align="center" justify="center">
                                    <v-img src="../../assets/img/questions/emoji/sentiment.jpg" max-width="350"></v-img>
                                </v-row>
                            </v-col>
                            <v-col id="imaged-single-multiple-select-answers"
                                   v-if="imagedSelectQuestion"
                                   class="r-dir"
                            >
                                <v-row>
                                    <v-col cols="4"
                                           lg="3"
                                           v-for="answerOption in imagedAnswerOptions"
                                           :key="answerOption.id"
                                           direction="ltr"
                                    >
                                        <v-card>
                                            <v-img :src="answerOption.image" aspect-ratio="1"></v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn absolute color="blue darken-4" dark fab large left top>
                                                    <v-icon>mdi-pencil</v-icon>
                                                </v-btn>
                                                <div class="grey--text mb-3" style="font-size: 16px;">
                                                    <span>گزینه </span>
                                                    <span v-text="answerOption.id"></span>
                                                </div>
                                                <h1 class="font-weight-light orange--text" v-text="answerOption.title"></h1>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <div v-if="imagedSelectQuestion">
                            <v-row v-if="errorMessage">
                                <v-col>
                                    <p class="text-right r-dir question-error">
                                        <span>*</span>
                                        <span v-text="errorMessage"></span>
                                        <span>*</span>
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="mr-auto ml-0">
                                    <v-btn :disabled="errorMessage.length" :dark="!errorMessage.length" color="green" title="ذخیره تغییرات سوال" fab>
                                        <v-icon>mdi-floppy</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col class="ml-auto mr-0 text-right">
                                    <v-btn color="blue darken-4" large rounded dark>
                                        <v-icon left>mdi-book-outline</v-icon>
                                        بانک سوالات
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
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
        </div>



    </v-container>
</template>

<script>
    export default {
        name: "SingleSelect",
        computed:{
            imagedSelectQuestion: function(){
                return (this.selectedQuestionType.id === 5 || this.selectedQuestionType.id === 6);
            },
            selectQuestion: function(){
                return (this.selectedQuestionType.id === 1 || this.selectedQuestionType.id === 2);
            },
            singleSelectQuestion: function(){
                return (this.selectedQuestionType.id === 1);
            },
            starQuestion: function(){
                return (this.selectedQuestionType.id === 3)
            },
            emojiQuestion: function(){
                return (this.selectedQuestionType.id === 4)
            }
        },
        data: function(){
            return {
                //Models
                tab: 'main',
                errorMessage: 'متن سوال نباید خالی باشد',
                SelectedAnswerOptions:{
                    id: 1,
                    name: 'هیچکدام',
                    titles: ['گزینه 1','گزینه 2','گزینه 3','گزینه 4']
                },
                selectedQuestionType: {
                    id: 5,
                    title: 'تک انتخابی عکسی'
                },
                // Fixed data
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
                    },
                    {
                        id: 3,
                        title: 'ستاره ای'
                    },
                    {
                        id: 4,
                        title: 'صورتک'
                    },
                    {
                        id: 5,
                        title: 'تک انتخابی عکسی'
                    },
                    {
                        id: 6,
                        title: 'چند انتخابی عکسی'
                    },
                    {
                        id: 7,
                        title: 'اسلایدر'
                    }
                ],
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
                defaultAnswerOptions:[
                    {
                        id: 1,
                        name: 'شخصی سازی شده',
                        titles: ['گزینه 1','گزینه 2','گزینه 3','گزینه 4']
                    },
                    {
                        id: 2,
                        name: 'خوب تا بد',
                        titles: ['خیلی خوب','خوب','متوسط','بد','خیلی بد']
                    },
                    {
                        id: 3,
                        name: 'زیبا تا زشت',
                        titles: ['خیلی زیبا','زیبا','معمولی','زشت','خیلی زشت']
                    }
                ],

                // User dependant data
                imagedAnswerOptions:[
                    {
                        id: 1,
                        image: require('../../assets/img/upload/pizza.jpg'),
                        title: 'پیتزا'
                    },
                    {
                        id: 2,
                        image: require('../../assets/img/upload/hamburger.jpg'),
                        title: 'همبرگر'
                    },
                    {
                        id: 3,
                        image: require('../../assets/img/upload/sheep.jpg'),
                        title: 'کله پاچه'
                    },
                    {
                        id: 4,
                        image: require('../../assets/img/upload/macaroni.png'),
                        title: 'ماکارونی'
                    }
                ],

            }
        }
    }
</script>

<style>
    .question-container{
        position: relative;
    }

    .question{
        min-height: 300px;
        border-radius: 10px;
    }

    #question-control{
        position:absolute;
        top: 80px;
        left: -40px;
        width:40px;
        border-radius: 0;
        background-color: white;
        padding: 0 !important;
        border-right: 0;
    }

    .control-button{
        border-radius: 0;
    }

    .answer-option{
        border-radius: 30px !important;
        border: 1px lightgrey solid !important;
    }

    .answer-option-title .v-text-field__details{
        display: none;
    }

    .answer-option:focus-within{
        border-color: orange !important;
    }

    .answer-option-title .v-input__slot{
        margin: 0;
        padding: 0 !important;
    }

    .answer-option-title p{
        margin:0;
    }

    .v-input--selection-controls__input{
        margin-right:0 !important;
        margin-left: 8px
    }

    .card-outter{
        position: relative;
        min-height: 100%;
    }

    .card-actions{
        position: absolute;
        bottom: 0;
    }

    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }

</style>

<style>

    .v-color-picker__controls{
        direction: ltr;
    }

    .question .v-tabs-bar{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .question .v-tabs-items{
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        min-height: 300px;
    }

    .question .v-tabs-slider-wrapper{
        height: 4px !important;
    }

    .question-error{
        color: red;
    }
</style>