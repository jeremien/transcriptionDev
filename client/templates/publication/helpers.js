Template.publication.helpers({

  publications: function(){

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
      console.log("link  >>>> "+Images.findOne(tabImage[i]._id).link());
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
        nom:tabText[i].nom,
        date:tabText[i].date,
        _id:tabText[i]._id
      };
      tab.push(ob);
    }

    //retour du tableau
    tab = _.sortBy(tab, function(o) { return o.date; })

    //tab.reverse();

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
