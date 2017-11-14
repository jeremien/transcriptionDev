Collections["Notes"] = new Mongo.Collection('notes',{

	transform: (doc) => new Note(doc)

});

/*
   {
titre: "",
sessionçid: ...
note_ids: []
}

 */





Note = class Note extends Model {
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
		this.save()
	}
}


