//Session.setDefault("currentItem", null);
//import Transcription from '/collections/transcription.js';

/*Template.transcription.onCreated(function transcriptionOnCreated(){
  this.state = new ReactiveDict();
  Meteor.subscribe('transcription');
})*/

//Meteor.subscribe('transcription');

Template.transcription.events({

  // envoi des transciptions
  "click #validerTranscription": function(event,template){
    event.preventDefault();
    if(template.find('.text').value == ""){
      alert("ecrivez un message");
    } else {

    var text = template.find('.text').value;
    //objet.temps = new Date();
    console.log("submit " + text);

    /*
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    console.log(heure + ":" + minutes);
    var temps = `${heure}:${minutes}`;
    */

    Transcription.insert({
      text : text,
      date:Date.now()
    });

    // clear
    template.find('.text').value="";
    }
  }
});
