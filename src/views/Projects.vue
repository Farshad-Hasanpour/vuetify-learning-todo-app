<template>
	<div class="projects">
		<v-container class="my-5">
			<h1 class="=display-1 grey--text mx-6 mb-5">Projects</h1>
			<v-expansion-panels>
				<v-expansion-panel v-for="project in myProjects" :key="project.title">
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
	export default {
		name: "Projects",
		data(){
			return{
				projects: [
					{
						title: 'Design a new website 1',
						person: 'Farshad',
						due: '1st jan 2019',
						status: 'complete',
						content: 'this is content'
					},
					{
						title: 'Design a new website 2',
						person: 'Farshad',
						due: '1st jan 2019',
						status: 'complete',
						content: 'this is content'
					},
					{
						title: 'Design a new website 3',
						person: 'Farshad 1',
						due: '1st jan 2019',
						status: 'overdue',
						content: 'this is content'
					},
					{
						title: 'Design a new website 4',
						person: 'Farshad 4',
						due: '1st jan 2019',
						status: 'ongoing',
						content: 'this is content'
					},
				]
			}
		},
		computed:{
			myProjects(){
				return this.projects.filter(project => {
					return project.person === 'Farshad'
				})
			}
		}
	}
</script>

<style scoped>

</style>