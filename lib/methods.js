Meteor.methods({
  addMeta: function(text){
    Metas.insert({
      text: text,
      createdAt: new Date()
    });
  },
  deleteMeta: function(metaId){
    var meta = Metas.findOne(metaId);
    Metas.remove(metaId);
  }
});
