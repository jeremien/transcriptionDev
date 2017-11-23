Template.metasAutocomplete.events({

  'click form input': function(e){
    e.target.value ='';
  },

  'submit form#participants': function(e) {
    // empêche le rechargement de la page
    e.preventDefault();
    // on fait l'objet post à injecter dans la base
    var metas = {
      participants: $(e.target).find('[name=participants]').val()
    };
    // on insère le tout dans la base avec un id unique
    metas._id = Metas.insert(metas);

    $('input[name=participants]').val('');

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

    $('input[name=subjects]').val('');
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
  }
});
