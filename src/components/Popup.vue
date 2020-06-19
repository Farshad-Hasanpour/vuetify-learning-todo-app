<template>
	<v-dialog max-width="600" v-model="dialog">
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="success" elevation="0" v-on="on" v-bind="attrs">Add new project</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h2>Add a new project</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-4" ref="projectForm" @submit.prevent="submit" id="project-form">
					<v-text-field v-model="title" :rules="[rules.required, rules.min]" label="Title" prepend-icon="mdi-folder"></v-text-field>
					<v-textarea v-model="content" :rules="[rules.required, rules.min]" label="Information" prepend-icon="mdi-pencil"></v-textarea>
					<v-menu>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field :rules="[rules.required]" label="Due date" :value="formattedDate" prepend-icon="mdi-calender" v-bind="attrs" v-on="on"></v-text-field>
						</template>
						<v-date-picker v-model="due"></v-date-picker>
					</v-menu>
					<v-btn type="submit" form="project-form" elevation="0" color="success" class="mx-0 mt-3" :loading="loading">Add project</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	import { format } from 'date-fns';
	import db from '@/fb'
	export default {
		name: "Popup",
		data(){
			return{
				dialog: false,
				title: '',
				content: '',
				due: '',
				loading: false,
				rules: {
					required: value => !!value || 'Field is required',
					min: v => v.length >= 3 || 'Minimum length is 3 characters'
				}
			}
		},
		methods:{
			submit(){
				if(this.$refs.projectForm.validate()){
					this.loading = true;
					const project = {
						title: this.title,
						content: this.content,
						due: this.formattedDate,
						person: 'Farshad', //current user
						status: 'ongoing'
					};

					db.collection('projects').add(project).then(() => {
						this.loading = false;
						this.dialog = false;
						this.$emit('projectAdded');
					});
				}
			}
		},
		computed:{
			formattedDate(){
				return this.due ? format(new Date(this.due), 'dd MMM yyyy') : ''
			}
		}
	}
</script>

<style scoped>

</style>