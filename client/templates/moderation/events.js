Session.setDefault("currentItem", null);

Template.moderation.events({

  "click .delete-transcription": function(){
    //Transcription.remove(this._id);
    Transcription.remove({
      _id: this._id
    });

    console.log("delete");
    console.log(this._id);

  },
  "click .delete-image": function(){
    Transcription.remove(this._id);
    console.log("delete");
    console.log(this._id);
  },

  "click .edit-transcription": function(){
    Session.set("currentItem", this._id);
    console.log("edit");
  },

  "click #updateTranscription": function(event, template){
    event.preventDefault();

    var objet = {};
    objet.text = template.find("input").value;

    Transcription.update(
      {_id: this._id},
      {$set: objet
      });

    Session.set("currentItem", null);
    console.log("update");

  }

});
