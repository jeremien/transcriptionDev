Template.ajoutTexte.events({

  // envoi des transcriptions
  "click #validerTranscription": function(event,template){
    event.preventDefault();
    if(template.find('.text').value == ""){
      alert("ecrivez un message");
    } else {

    var text = template.find('.text').value;
    var nom = template.find('.select-noms').value;
    var sujet = template.find('.select-sujets').value;

    console.log("submit " + text + "/" + nom + "/" + sujet);

    Transcription.insert({
      text : text,
      meta : {
        date : Date.now()
      },
      nom : nom,
      sujet : sujet
    });

    // clear
    template.find('.text').value="";
    }
  }
});
