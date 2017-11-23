// meta autocompletion

Template.formMeta.rendered = function() {
  AutoCompletion.init("input[name=participants]");
  AutoCompletion.init("input[name=subjects]");
  AutoCompletion.init("input[name=keywords]");
  //AutoCompletion.enableLogging = true;
}

Template.formMeta.events = {
  'keyup input[name=participants]': function() {
    AutoCompletion.autocomplete({
      element: 'input[name=participants]', // DOM identifier for the element
      collection: Metas, // MeteorJS collection object
      field: 'participants', // Document field name to search for
      limit: 0, // Max number of elements to show
      sort: {
        name: 1
      }
    }); // Sort object to filter results with
    //filter: { 'gender': 'female' }}); // Additional filtering
  },
  'keyup input[name=subjects]': function() {
    AutoCompletion.autocomplete({
      element: 'input[name=subjects]', // DOM identifier for the element
      collection: Metas, // MeteorJS collection object
      field: 'subjects', // Document field name to search for
      limit: 0, // Max number of elements to show
      sort: {
        name: 1
      }
    }); // Sort object to filter results with
    //filter: { 'gender': 'female' }}); // Additional filtering
  },
  'keyup input[name=keywords]': function() {
    AutoCompletion.autocomplete({
      element: 'input[name=keywords]', // DOM identifier for the element
      collection: Metas, // MeteorJS collection object
      field: 'keywords', // Document field name to search for
      limit: 0, // Max number of elements to show
      sort: {
        name: 1
      }
    }); // Sort object to filter results with
    //filter: { 'gender': 'female' }}); // Additional filtering
  }
}



Template.noteToolBar.events({
  "click .addTexteNoteButton": function(event, t) {
    event.preventDefault();

    var doc = form2js("form_" + this._id);
    doc.meta = form2js("form_meta_" + this._id);

    // TODO : Data validation in Model !
    if (doc.parent_id == "") parent_id = null
    event.target.form.content.value = "";
    var n = new Note(doc)
    // TODO : Data validation in Model !
    n.save()
    $(".action").hide();
  },

  "click .event_showFormToAddNewNote": function(event, template) {
    event.preventDefault();
    isNew.set(true);
    var element =  "#" + event.target.getAttribute('data-menu');
    if($(element).is(":visible")){
      $(element).hide();
    } else {
      //$(".action").hide();
      $(element).show();
      //$("#form_"+this._id)[0].content.value="";
    }
  },
  "click .event_showFormToEditNote": function(event, template) {
    event.preventDefault();
    isNew.set(false);

    var element = "#" + event.target.getAttribute('data-menu');
    if ($(element).is(":visible")) {
      $(element).hide();
    } else {
      //$(".action").hide();
      $(element).show();
    }
  },

  "click .event_removeNote": function(e, t) {
    console.log(this);
    // TODO : Use EJSON to do better thing here...
    if (!this.parent_id) Chapitre.findOne({
      _id: this._id
    }).remove()
    else Note.findOne({
      _id: this._id
    }).remove()
  }


})
