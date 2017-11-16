Template.debug.helpers({

  notes:function(){
    return Note.find({parent_id: null})
    //return Note.find({$where:"this.note_ids.length > 0"})
  }
})
