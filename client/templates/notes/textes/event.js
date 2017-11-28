
Template.blockTexte.events({
  "click .event_cancelEditNote" : function(e,t){
    e.preventDefault();
    selectedNote.set(null);
  },

  "click .event_updateNoteButton" : function(e,t){
    e.preventDefault();
    var element = t.find("#new_value_for_"+this._id);
    this.meta = form2js("form_meta_" + this._id);
    this.content = element.value;
    if(!this.content){
      toastr.warning("Impossible d'ajouter une note vide !");
      return;
    }
    this.save();
    selectedNote.set(null);
  }


});




/*

Template.ajoutTexte.events({
  // envoi des transcriptions
  "click #validerTranscription": function(event, template) {
    event.preventDefault();

    //var html = $('#summernote').summernote('code');
    var markdown = template.find('.text-markdown').value;
    var nom = template.find('.select-noms').value;
    var sujet = template.find('.select-sujets').value;
    var pseudo = template.find('.pseudo').value;
    var tag = template.find('.select-tags-texte').value

    //if (html === '<p><br></p>' || nom === 'noms' || sujet === 'sujets') {
    if (markdown === '') {

      alert("ecrivez un message, sélectionner un nom et un sujet");

    } else {

      alert("le message est envoyé");

      console.log(markdown + '\n' + nom + '\n' + sujet + '\n' + pseudo);

      Transcription.insert({
        text: markdown,
        meta: {
          date: Date.now()
        },
        nom: nom,
        sujet: sujet,
        pseudo: pseudo,
        tag: tag
      });

      template.find('.text-markdown').value = '';
      //$('#summernote').summernote('reset');
    }
  }
});

*/
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
