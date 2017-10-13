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

    var nom = 'bob';

    Transcription.insert({
      text : text,
      date:Date.now(),
      nom: nom
    });

    // clear
    template.find('.text').value="";
    }
  }
});
