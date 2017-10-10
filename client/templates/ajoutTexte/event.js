Template.ajoutTexte.events({

  // envoi des transcriptions
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
