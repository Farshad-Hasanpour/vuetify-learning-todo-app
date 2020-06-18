<template>
	<div class="team">
		<v-container class="my-5">
			<h1 class="=display-1 grey--text mx-6 mb-5">Team</h1>
			<v-row>
				<v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
					<v-card flat class="text-center ma-3">
						<v-avatar class="mt-4 grey lighten-2" size="100">
							<img :src="person.avatar">
						</v-avatar>
						<v-card-text>
							<div class="subheading" v-text="person.name"></div>
							<div class="grey--text" v-text="person.role"></div>
						</v-card-text>
						<v-card-actions>
							<v-btn text color="grey">
								<v-icon smal left>mdi-message</v-icon>
								<span>Message</span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Team",
		data(){
			return{
				team: [
					{
						name: 'Farshad',
						role: 'Web Developer',
						avatar: '/avatar-1.png'
					},
					{
						name: 'Ryu',
						role: 'Graphic designer',
						avatar: '/avatar-2.png'
					},
					{
						name: 'Chun Li',
						role: 'Web developer',
						avatar: '/avatar-3.png'
					},
					{
						name: 'Gouken',
						role: 'Social media maverick',
						avatar: '/avatar-4.png'
					},
					{
						name: 'Yoshi',
						role: 'Sales Guru',
						avatar: '/avatar-5.png'
					}


				]
			}

		}
	}
</script>

<style scoped>
	.v-avatar{
		border-radius: 50% !important;
	}
</style>