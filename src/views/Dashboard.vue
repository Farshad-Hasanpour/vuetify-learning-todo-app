<template>
	<div class="dashboard">
		<v-container class="my-5">
			<h1 class="=display-1 grey--text mx-6 mb-5">Dashboard</h1>
			<v-row class="mb-3 mx-6">
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
							<v-icon left small>mdi-folder</v-icon>
							<span class="caption">by project name</span>
						</v-btn>
					</template>
					<span>Sort projects by project name</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
							<v-icon left small>mdi-account</v-icon>
							<span class="caption">by person</span>
						</v-btn>
					</template>
					<span>Sort projects by person</span>
				</v-tooltip>


			</v-row>
			<v-card flat :class="[project.status, 'project', 'px-4 py-2 mx-6']" v-for="project in projects" :key="project.id">
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
	import db from '@/fb'

	export default {
		name: "Dashboard",
		data: function(){
			return {
				projects: []
			}
		},
		methods:{
			sortBy(prop){
				this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
			}
		},
		created(){
			db.collection('projects').onSnapshot(res => {
				const changes = res.docChanges();
				changes.forEach(change => {
					if(change.type === 'added'){
						this.projects.push({
							...change.doc.data(), //spread properties to object
							id: change.doc.id
						})
					}
				})

			})
		}
	}
</script>

<style scoped>
	.project{
		border-radius: 0 !important;
		border-left-style: solid;
		border-left-width: 4px;

	}

	.project:not(:last-child){
		border-bottom: 1px #ccc solid;
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