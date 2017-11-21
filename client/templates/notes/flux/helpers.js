/*
Template.flux.helpers({

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
        text:tabImage[i].meta.text,
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
        date:tabText[i].meta.date,
        nom:tabText[i].nom,
        sujet:tabText[i].sujet,
        pseudo:tabText[i].pseudo,
        tag:tabText[i].tag,
        _id:tabText[i]._id
      };
      tab.push(ob);
    }

    //----------------------------------------
    // DESSIN
    //----------------------------------------
    var tabDessin = Dessin.find().fetch();
    for (var i = 0; i < tabDessin.length; i++) {
      var ob={
        type:"dessin",
        url:tabDessin[i].url,
        date:tabDessin[i].meta.date,
        _id:tabDessin[i]._id
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
*/
