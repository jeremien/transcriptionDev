Session.setDefault("currentItem", null);

Template.edit_text.events({
  "click .annuler-edition" : function() {
    Session.set("currentItem", null)
  }
})

Template.render_text.helpers({
  editingTranscription : function(){
    var current = Session.get("currentItem")
    return current == this._id
    //return Session.equals("currentItem", this._id)
  }
})

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
    console.log(this)
    var r = Images.remove({_id: this._id});
    console.log("delete result > "+r);
  },

  "click .edit-transcription": function(){
    Session.set("currentItem", this._id);
    console.log("edit");
  },
/*
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

  },*/

  "click button.update-text" : function(event, tempalte){
    event.preventDefault();
    var newtext = $('.new-text').val()
    console.log(newtext, this._id)
    Transcription.update({_id:this._id},{$set : {text:newtext}}, function(err){
      if(err == undefined){
        Session.set("currentItem", null)
      }
    })
  }
});
