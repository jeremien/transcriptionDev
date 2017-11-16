Collections["Chapitres"] = new Mongo.Collection('chapitres',{

	transform: (doc) => new Chapitre(doc)

});

Chapitre = class Chapitre extends Model {
	constructor(doc){
		super()
		_.extend(this, doc);

		if(!doc.hasOwnProperty('note_ids')){
			this.note_ids = []
		}
	}

	notes(){
		if(this.note_ids != undefined && this.note_ids.constructor == Array){
			return Note.find({_id : {$in : this.note_ids}})
		} else {
			throw new Meteor.Error('Warnning', 'note_ids is not an Array')
		}
	}

	add(node_id){
		this.note_ids.push(node_id)
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
