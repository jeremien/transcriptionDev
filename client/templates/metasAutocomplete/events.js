Template.metasAutocomplete.events({
  'submit form#participants': function(e) {
    // empêche le rechargement de la page
    e.preventDefault();
    // on fait l'objet post à injecter dans la base
    var metas = {
      participants: $(e.target).find('[name=participants]').val()
    };
    // on insère le tout dans la base avec un id unique
    metas._id = Metas.insert(metas);

    //$("#participants input[name=participants]").val() = "";

  },

  'submit form#subjects': function(e) {
    // empêche le rechargement de la page
    e.preventDefault();
    // on fait l'objet post à injecter dans la base
    var metas = {
      subjects: $(e.target).find('[name=subjects]').val()
    };
    // on insère le tout dans la base avec un id unique
    metas._id = Metas.insert(metas);
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
  }
});
