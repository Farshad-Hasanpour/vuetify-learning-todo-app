import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify, {
    theme:{
        primary: '#0D47A1',
        success: 'green lighten-2',
        info: 'blue',
        error: '#333333',
        warning: '#ffaa2c'
    }
})

export default new Vuetify({
})