Template.debug.helpers({

  notes:function(){
    return Note.find({parent_id: selectedChapitre._id})
    //return Note.find({$where:"this.note_ids.length > 0"})
  },

})
Template.add_note.events({
  "click button": function(event,t){
    event.preventDefault();
    console.log(event.target.form)
    var titre = event.target.form.titre.value; 
    var parent_id = event.target.form.parent_id.value; 
    console.log(parent_id);
    if(parent_id == "") parent_id = null
    event.target.form.titre.value = ""; 
    var n = new Note({titre:titre, parent_id:parent_id})
    n.save()
  }
})


