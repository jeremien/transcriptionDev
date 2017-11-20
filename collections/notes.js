Collections["Notes"] = new Mongo.Collection('notes',{
	transform: (doc) => new Note(doc)
});

/*
   {
titre: "",

type:"image,..."
isSession:false
frozen: false

sessionçid: ...
note_ids: []
}
*/

Note = class Note extends Model {
	constructor(doc){
		super()
		_.extend(this, doc);
		if(!doc.hasOwnProperty('parent_id')){
			this.parent_id = null
		}
	}

	notes(){
    return Note.find({parent_id: this._id})
	}

  hasNotes(){
    return this.notes().fetch().length >0;
  }

	add(note){
    note.parent_id = this._id
    note.save()
	}

  url(){
    var image = Images.findOne(this.image_id)
    if(image) return image.link();
  }

  render(){
    if(this.type == "image"){
      return Template["blocImage"]
    }
    if(this.type == "text"){
      return Template["blockTexte"]
    }

    return Template["note_default"]

  }

}


