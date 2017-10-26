

Template.ajoutTexte.events({
  // envoi des transcriptions
  "click #validerTranscription": function(event,template){
    event.preventDefault();

    var html = $('#summernote').summernote('code');
    var nom = template.find('.select-noms').value;
    var sujet = template.find('.select-sujets').value;

    if( html === '<p><br></p>' || nom === 'noms' || sujet === 'sujets') {

      alert("ecrivez un message, sélectionner un nom et un sujet");

    } else {

      alert("le message est envoyé");

    console.log(html + '\n' + nom  + '\n' + sujet);

    Transcription.insert({
      text:html,
      meta : {
        date : Date.now()
      },
      nom : nom,
      sujet : sujet
    });

    $('#summernote').summernote('reset');
    }
  }
});


/*Template.ajoutTexte.events({

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
});*/
