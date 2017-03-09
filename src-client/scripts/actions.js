import Backbone from 'backbone';
import {STORE} from './store.js'
import {ShoutModel, ShoutCollection} from './models/model-shout.js'
import {UserModel} from './models/model-user.js'

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
			// console.log(serverRes)
			STORE.setStore('shoutOutList', serverRes)
		})
	},
	
	changeShownRating: function(ratingVal){
		STORE.setStore('shownRatingType', ratingVal)
	},

	changeCurrentNav: function(selectedAppRoute, urlRoute){
		STORE.setStore('currentNavRoute', selectedAppRoute)
		window.location.hash = urlRoute
	},
	
	registerNewUser: function(newUserInfoObj){
		UserModel.register(newUserInfoObj).then(function(serverRes){
			ACTIONS.changeCurrentNav('SHOUTS', 'shouts')		
		})
	},
	
	loginUser: function(usr, pw){
		UserModel.logIn(usr, pw).then(function(serverRes){
			// console.log('authenticated user!!!', serverRes)
			STORE.setStore('currentUser', serverRes )
			ACTIONS.changeCurrentNav('SHOUTS', 'shouts')		
		})
	},
	
	fetchCurrentUser: function(){
		UserModel.getCurrentUser().then(function(serverRes){
			console.log(serverRes)
			if(serverRes.user !== null){
				STORE.setStore('currentUser', serverRes.user )
			}
		})
	}


}

