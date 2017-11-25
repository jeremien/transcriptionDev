import { EJSON } from 'meteor/ejson'
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
    super();
		_.extend(this, doc);
		if(!doc.hasOwnProperty('parent_id')){
			this.parent_id = null
		}
	}

	notes(){
    return Note.find({parent_id: this._id}, {sort:{"createdAt":-1}})
	}

  hasNotes(){
    return this.notes().fetch().length >0;
  }

	add(note){
    note.parent_id = this._id
    note.save()
	}

  url(){
    var image = Images.findOne({_id:this.image_id})
		console.log(image)
    if(image) return image.link();
    else return this.link;
  }

  toJSON(){
    var data = {type:this.type, createdAt: this.createdAt, updatedAt:this.updatedAt};
    if(this.type == "image"){
      data.url = this.url();
    }
    if(this.type == "text"){
      data.content = this.content;
    }
    return data;
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
  // EJSON
  //
  // TODO : Move this in _Model.js
  // toJSONValue(){
  //   self = this;
  //   return JSON.parse(JSON.stringify(self))
  // }
  // typeName(){
  //   return "Note"
  // }

}

// EJSON.addType('Note', function fromJSONValue(json){
//   return new Note(json);
// });
