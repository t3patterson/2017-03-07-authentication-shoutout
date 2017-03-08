import Backbone from 'backbone';
import {ShoutModel, ShoutCollection} from './models/model-shout.js'
import {STORE} from './store.js'

export const ACTIONS = {
	saveNewShout: function(userFormEntry){
		let newShoutInstance = new ShoutModel()
		newShoutInstance.set(userFormEntry)
		newShoutInstance.save().then(function(serverRes){
			ACTIONS.fetchAllShouts()
		})
	},
	
	fetchAllShouts: function(){
	
		let shoutsCollInstance = new ShoutCollection()
		shoutsCollInstance.fetch().then(function(serverRes){
			console.log(serverRes)
			STORE.setStore('shoutOutList', serverRes)
		})
	},
	
	changeShownRating: function(ratingVal){
		STORE.setStore('shownRatingType', ratingVal)
	},

	changeCurrentNav: function(selectedAppRoute, urlRoute){
		STORE.setStore('currentNavRoute', selectedAppRoute)
		window.location.hash = urlRoute

	}
}

