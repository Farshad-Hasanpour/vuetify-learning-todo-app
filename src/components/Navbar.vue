<template>
	<nav>
		<v-snackbar v-model="snackbar" :timeout="4000" top color="success">
			<span>Awesome! You added a new project.</span>
			<v-btn elevation="0" color="white" @click="snackbar = false">Close</v-btn>
		</v-snackbar>
		<v-app-bar flat app color="primary" dark clipped-left>
			<v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase">
				<span class="font-weight-light">Todo</span>
				<span class="font-weight-bold">Farshad</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-menu offset-y class="top-menu">
				<template v-slot:activator="{ on, attrs }">
					<v-btn text v-bind="attrs" v-on="on">
						<v-icon left>mdi-arrow-down</v-icon>
						<span>Menu</span>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="link in allLinks" :key="link.text" router :to="link.route">
						<v-list-item-icon>
							<v-icon v-text="link.icon"></v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{ link.text }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn color="white" text>
				<span>Sign out</span>
				<v-icon right>mdi-logout-variant</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer" color="primary" dark clipped>
			<v-row>
				<v-col class="text-center">
					<v-avatar size="100">
						<img src="/avatar-1.png">
					</v-avatar>
					<p class="white--text mt-1">
						The Net Ninja
					</p>
					<popup @projectAdded="snackbar = true" />
				</v-col>
			</v-row>
			<v-list subheader>
				<v-subheader>Pages</v-subheader>
				<v-list-item v-for="link in links" :key="link.text" router :to="link.route">
					<v-list-item-icon>
						<v-icon v-text="link.icon"></v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="link.text"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-group :prepend-icon="archive.icon" color="white--text">
					<template v-slot:activator>
						<v-list-item-title v-text="archive.text"></v-list-item-title>
					</template>
					<v-list-item class="pl-8" v-for="item in archive.links" :key="item.text" router :to="item.route">
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="item.text"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
	import Popup from './Popup'
	export default {
		name: "Navbar",
		components:{
			Popup
		},
		data: function(){
			return{
				drawer: false,
				snackbar: false,
				links:[
					{
						icon: 'mdi-home',
						text: 'Dashboard',
						route: '/'
					},
					{
						icon: 'mdi-folder',
						text: 'My Projects',
						route: '/projects'
					},
					{
						icon: 'mdi-account-tie',
						text: 'Team',
						route: '/team'
					}
				],
				archive: {
					icon: 'mdi-archive',
					text: 'Archive',
					links: [
						{
							icon: 'mdi-link-variant',
							text: 'page 1',
							route: '/archive/1'
						},
						{
							icon: 'mdi-link-variant',
							text: 'Grid Version 1',
							route: '/archive/2'
						},
						{
							icon: 'mdi-link-variant',
							text: 'Grid Version 2',
							route: '/archive/3'
						},
						{
							icon: 'mdi-link-variant',
							text: 'Single Select',
							route: '/archive/4'
						},
						{
							icon: 'mdi-link-variant',
							text: 'Single Select 2',
							route: '/archive/5'
						}
					]
				}
			}
		},
		computed:{
			allLinks(){
				return this.links.concat(this.archive.links)
			}
		}
	}
</script>

<style scoped>
	.v-list-item--active{
		border-left: white 4px solid;
	}

	.v-menu__content .v-list-item--active{
		border-left: var(--primary) 4px solid !important;
	}
</style>