Collections = {}

Model = class Model {



	// static insert(obj){
	// 	var klass = this.prototype.constructor.name.toString() + "s"
	// 		return Collections[klass].insert(obj)
	// }
	static find(selector={}, options={}){
		var klass = this.prototype.constructor.name.toString() + "s"
			return Collections[klass].find(selector, options)
	}
	static fetch(selector={}, options={}){
		var klass = this.prototype.constructor.name.toString() + "s"
			return Collections[klass].find(selector, options).fetch()
	}


	static findOne(selector={}, options={}){
		var klass = this.prototype.constructor.name.toString() + "s"
			return Collections[klass].findOne(selector, options)
	}

	static removeAll(){
		var klass = this.prototype.constructor.name.toString() + "s"
		Meteor.call("removeAll",klass);
	}

	remove(){
		var klass = this.constructor.name.toString() + "s"
		if(confirm("Are you sur ?")){
			return Collections[klass].remove(this._id)
		}
	}


  save(){
		var klass = this.constructor.name.toString() + "s";
    if(this.hasOwnProperty('createdAt')){
      this.updatedAt = new Date()
    } else {
      this.createdAt = new Date();
    }
    return Collections[klass].upsert(this._id, {$set: this})

    
  }
}
