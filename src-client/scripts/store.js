export const STORE = {
	_data: {
		shoutOutList: [],
		shownRatingType: 'PG',
		currentNavRoute: '',
		currentUser: {}
	},
	
	getStoreData: function(){
		return this._data
	},
	
	setStore: function(storeProp, payload){
		if (typeof this._data[storeProp] === 'undefined' ) {
			throw new Error('cannot pass undefined property to .setStore() ') 
		}

		this._data[storeProp] = payload

		if(typeof this._callMeLaterPls === 'function'){
			this._callMeLaterPls()
		}
	},

	onStoreChange: function(cbFunc){
		if(typeof cbFunc !== 'function'){
			throw new Error('argument passed to STORE.onStoreChange() must be a function') 
		}
		
		if(typeof this._callMeLaterPls !== 'undefined'){
			throw new Error('STORE.onStoreChange() already has a function to handle changes') 
		}
		
		this._callMeLaterPls = cbFunc
	}

	
}

