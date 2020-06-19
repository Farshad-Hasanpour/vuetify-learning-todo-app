import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#0D47A1',
				error: '#E53930',
				warning: '#ffaa2c',
				success: '#4CAF50',
			},
		},
	},
})