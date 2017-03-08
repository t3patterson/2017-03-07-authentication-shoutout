export const STORE = {
	_data: {
		shoutOutList: [],
		shownRatingType: 'PG',
		currentNavRoute: ''
		// currentUser: {username: 'billyboy'}
	},
	
	getStoreData: function(){
		return this._data
	},
	
	setStore: function(storeProp, payload){
		if (typeof this._data[storeProp] === 'undefined' ) {
			throw new Error('awwww shiet!') 
		}
		this._data[storeProp] = payload

		if(typeof this._callMeLaterPls === 'function'){
			this._callMeLaterPls()
		}
	},

	onStoreChange: function(cbFunc){
		this._callMeLaterPls = cbFunc
	}

	
}

