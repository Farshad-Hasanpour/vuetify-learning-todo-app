<template>
	<div class="projects">
		<v-container class="my-5">
			<h1 class="=display-1 grey--text mx-6 mb-5">Projects</h1>
			<v-expansion-panels>
				<v-expansion-panel v-for="project in myProjects" :key="project.id">
					<v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
					<v-expansion-panel-content class="px-4 grey--text">
						<div class="font-weight-bold">due by {{project.due}}</div>
						<div>{{ project.content }}</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-container>
	</div>
</template>

<script>
	import db from '@/fb';
	export default {
		name: "Projects",
		data(){
			return{
				projects: []
			}
		},
		computed:{
			myProjects(){
				return this.projects.filter(project => {
					return project.person === 'Farshad'
				})
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

</style>