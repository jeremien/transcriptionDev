Template.metasAutocomplete.events({

  'click form input': function(e){
    e.target.value ='';
  },

  'submit form#keywords': function(e) {
    // empêche le rechargement de la page
    e.preventDefault();

    // on fait l'objet post à injecter dans la base
    var metas = {
      keywords: $(e.target).find('[name=keywords]').val()
    };
    // on insère le tout dans la base avec un id unique
    metas._id = Metas.insert(metas);

    $('input[name=keywords]').val('');
    //e.target.value ='';
  },
  'click .delete-meta': function(e) {
    console.log("click");
  }
});
