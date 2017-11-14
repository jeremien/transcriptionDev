Collections = {}




Model = class Model {
	constructor(){
		console.log("Bonjour depuis la classe mère...")
	}
	static insert(obj){
		var klass = this.prototype.constructor.name.toString() + "s"
			return Collections[klass].insert(obj)
	}
	static find(selector={}, options={}){
		var klass = this.prototype.constructor.name.toString() + "s"
			return Collections[klass].find(selector, options)
	}

	remove(){
		var klass = this.constructor.name.toString() + "s"
		if(confirm("Are you sur ?")){
			return Collections[klass].remove(this._id)
		}
	}


	save(){
		var klass = this.constructor.name.toString() + "s"
		if(this.hasOwnProperty('_id')){
			// Update
			console.log("update...")
			var self = this
			delete self._id
			return Collections[klass].update(this._id, {$set: self})
		} else {
			// Insert
			console.log("insert...")
			return Collections[klass].insert(this)

		}
	}

}

