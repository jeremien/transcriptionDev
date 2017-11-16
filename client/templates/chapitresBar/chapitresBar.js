Template.chapitresBar.helpers({
	chapitres : function(){
		return Chapitre.find().fetch();
	}
})

selectedChapitre = new ReactiveVar();

Template.chapitresBar.events({
	"click .chapDiv": function(e, t){
		var id = e.currentTarget.getAttribute("id");
		selectedChapitre.set(id);
	}
});
