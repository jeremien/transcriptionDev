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

	add(note){
    note.parent_id = this._id
    note.save()
	}

  render(){
    if(this.type == "image"){
      return Template["note_image"]
    }
    if(this.type == "text"){
      return Template["note_text"]
    }

    return Template["note_default"]

  }

}


if(Meteor.isClient){
  Template.add_note.events({
    "click button": function(event,t){
      event.preventDefault();
      console.log(event.target.form)
      var titre = event.target.form.titre.value; 
      var parent_id = event.target.form.parent_id.value; 
      if(parent_id == "") parent_id = null
      event.target.form.titre.value = ""; 
      var n = new Note({titre:titre, parent_id:parent_id})
      n.save()
    }
  })

}
