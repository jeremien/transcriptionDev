Collections["Chapitres"] = new Mongo.Collection('chapitres',{

	transform: (doc) => new Chapitre(doc)

});

Chapitre = class Chapitre extends Model {
	constructor(doc){
		super()
		_.extend(this, doc);
	}

	notes(){
    return Note.find({parent_id:this._id})
	}

	add(note){
    note.parent_id = this._id;
    note.save()
	}
}


/*
	{
		_id: MongoID,
		timestamp: "",
		Titre: String,
		frozzen : boolean

	}
*/
