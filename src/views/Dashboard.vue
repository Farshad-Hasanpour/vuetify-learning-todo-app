<template>
    <div class="dashboard">
        <v-container class="my-5">
            <h1 class="=display-1 grey--text mx-6 mb-5">Dashboard</h1>
            <v-row class="mb-3 mx-6">
                <v-btn small text color="grey">
                    <v-icon left="" small="">mdi-folder</v-icon>
                    <span class="caption">by project name</span>
                </v-btn>
                <v-btn small text color="grey">
                    <v-icon left small>mdi-account</v-icon>
                    <span class="caption">by person</span>
                </v-btn>
            </v-row>
            <v-card flat :class="[project.status, 'project', 'px-4 mx-6 my-4']" v-for="project in projects" :key="project.title">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="caption grey--text">Project title</div>
                        <div v-text="project.title">Create a new website</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Person</div>
                        <div v-text="project.person">Farshad</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Due By</div>
                        <div v-text="project.due">1st jan 2019</div>
                    </v-col>
                    <v-col cols="12" sm="4" md="2" class="text-left text-sm-right text-md-right">
                            <v-chip small="" :class="[project.status, 'font-weight-bold white--text my-2']" v-text="project.status"></v-chip>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data: function(){
            return {
                projects: [
                    {
                        title: 'Design a new website',
                        person: 'Farshad',
                        due: '1st jan 2019',
                        status: 'complete',
                        content: 'this is content'
                    },
                    {
                        title: 'Design a new website',
                        person: 'Farshad',
                        due: '1st jan 2019',
                        status: 'complete',
                        content: 'this is content'
                    },
                    {
                        title: 'Design a new website',
                        person: 'Farshad',
                        due: '1st jan 2019',
                        status: 'overdue',
                        content: 'this is content'
                    },
                    {
                        title: 'Design a new website',
                        person: 'Farshad',
                        due: '1st jan 2019',
                        status: 'ongoing',
                        content: 'this is content'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .project{
        border-radius: 0 !important;
        border-left-style: solid;
        border-left-width: 4px;
    }

    .project.complete{
        border-left-color: #3cd1c2;
    }

    .project.ongoing{
        border-left-color: orange;
    }

    .project.overdue{
        border-left-color: tomato;
    }

    .v-chip.complete{
        background-color: #3cd1c2;
    }

    .v-chip.ongoing{
        background-color: orange;
    }

    .v-chip.overdue{
        background-color: tomato;
    }
</style>