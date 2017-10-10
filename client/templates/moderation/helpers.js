

Template.moderation.helpers({
  transcriptions: function(){

    var tab =[];

    //----------------------------------------
    // IMAGE
    //----------------------------------------
    var tabImage = Images.find().fetch();
    for (var i = 0; i < tabImage.length; i++) {
      var ob={
        type:"image",
        lien:Images.findOne(tabImage[i]._id).link(),
        date:tabImage[i].meta.date,
        _id:tabImage[i]._id
      };
      //console.log("link  >>>> "+Images.findOne(tabImage[i]._id).link());
      tab.push(ob);
    }

    //----------------------------------------
    // TEXT
    //----------------------------------------
    var tabText = Transcription.find().fetch();
    for (var i = 0; i < tabText.length; i++) {
      var ob={
        type:"text",
        text:tabText[i].text,
        date:tabText[i].date,
        _id:tabText[i]._id
      };
      tab.push(ob);
    }

    //retour du tableau
    tab = _.sortBy(tab, function(o) { return o.date; })
    tab.reverse();

    return tab;
  },
  //-----------------------------------------------------------------
  typeIs:function(isType,type){
    console.log(isType+"  "+type);
    if(isType==type){
      return true;
    }else{
      return false;
    }
  }


});



Template.render_text.helpers({
  editingTranscription : function(){
    var current = Session.get("currentItem")
    return current == this._id
    //return Session.equals("currentItem", this._id)
  }
})

Template.edit_text.events({
  "click .annuler-edition" : function() {
    Session.set("currentItem", null)
  }
})
