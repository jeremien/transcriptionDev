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
  hasNotes(){
    return this.notes().fetch().length >0;
  }

	add(note){
    note.parent_id = this._id;
    note.save()
	}
  toJSON(){
    return {titre:this.titre, createdAt: this.createdAt, updatedAt:this.updatedAt};
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
