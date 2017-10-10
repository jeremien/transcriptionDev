Session.setDefault("currentItem", null);

Template.moderation.events({

  "click .delete-transcription": function(e,t){
    //Transcription.remove(this._id);

    //var id = e.currentTarget.getAttribute("data-id");
    //console.log("delete");
    //console.log(this._id);

    var r = Transcription.remove({_id: this._id});
    console.log("delete result > "+r);

  },
  "click .delete-image": function(){
    Transcription.remove(this._id);
    console.log("delete");
    console.log(this.size);
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
