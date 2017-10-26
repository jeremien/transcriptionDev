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

    var r = Transcription.remove({_id: this._id});
    console.log("delete result > "+r);

  },

  "click .delete-image": function(){
    console.log(this)
    var r = Images.remove({_id: this._id});
    console.log("delete result > "+r);
  },

  "click .delete-dessin": function(){
    console.log(this)
    var r = Dessin.remove({_id: this._id});
    console.log("delete result > "+r);
  },

  "click .edit-transcription": function(){
    Session.set("currentItem", this._id);
    console.log("edit");
  },


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
