Template.ChapitresBar_admin.events({
    "keydown #addChapitre": function(e, t){
        if(e.key=="Enter"){
            console.log("make new chapitre");
            var c = new Chapitre({titre:e.currentTarget.value});
            c.save();
            e.currentTarget.value = "";
        }
    }
});
