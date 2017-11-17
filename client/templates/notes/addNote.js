Template.addNote.events({
  "click .addTexteNoteButton": function(event,t){
    event.preventDefault();
    var content = event.target.form.content.value; 
    var parent_id = event.target.form.parent_id.value; 
    var type = event.target.form.type.value; 
    if(parent_id == "") parent_id = null
    event.target.form.content.value = ""; 
    var n = new Note({content:content, parent_id:parent_id, type:type})
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



