import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: null,
		config: require("./config.json"),
		loader: null
	},
	mutations: {
	},
	getters: {
		db_url(state) {
			return state.config[process.env.NODE_ENV].db.base_url
		},
		deposit_addr(state) {
			return state.config[process.env.NODE_ENV].deposit_addr
		},
		balance_link(state) {
			if (process.env.NODE_ENV === "production") {
				return `https://www.blockchain.com/btc/address/${state.config[process.env.NODE_ENV].deposit_addr}`
			} else {
				return `https://testnet.blockchain.info/address/${state.config[process.env.NODE_ENV].deposit_addr}`
			}
		}
	},
	actions: {
	}
})
