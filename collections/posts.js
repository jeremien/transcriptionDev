Notes_collection = new Mongo.Collection('notes',{

	transform: (doc) => new Note(doc)

});







Note = class Note extends Model {
	constructor(doc){
		super()
		_.extend(this, doc);
	}


	posts(){
		return [{titre: "post1"}]
	}
}


