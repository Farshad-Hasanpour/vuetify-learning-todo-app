<template>
	<v-dialog max-width="600">
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="success" elevation="0" v-on="on" v-bind="attrs">Add new project</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h2>Add a new project</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-4">
					<v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
					<v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil"></v-textarea>
					<v-btn elevation="0" color="success" class="mx-0 mt-3" @click="submit">Add project</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: "Popup",
		data(){
			return{
				title: '',
				content: ''
			}
		},
		methods:{
			submit(){
				console.log(this.title, this.content)
			}
		}
	}
</script>

<style scoped>

</style>