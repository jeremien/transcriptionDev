Model = class Model {
	constructor(){
		console.log("Bonjour depuis la classe mère...")
	}
	static insert(obj){
		var klass = this.prototype.constructor.name.toString() + "_collection"
		return window[klass].insert(obj)
	}
	static find(selector={}, options={}){
		var klass = this.prototype.constructor.name.toString() + "_collection"
		return window[klass].find(selector, options)
	}

}

