Template.addNote.events({
  "click .addTexteNoteButton": function(event,t){
    event.preventDefault();

    var doc = form2js("form_" + this._id);

    // TODO : Data validation in Model !
    if(doc.parent_id == "") parent_id = null
    event.target.form.content.value = ""; 
    var n = new Note(doc)
    // TODO : Data validation in Model !
    n.save()
    $(".action").hide();
  },

  "click .event_showElement" : function(event, template){
    event.preventDefault();
    var element =  "#" + event.target.getAttribute('data-menu');
    if($(element).is(":visible")){
      $(element).hide();
    } else {
      $(".action").hide();
      $(element).show();
    }
  }


})



