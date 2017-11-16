Template.chapitre_list.helpers({
	chapitres : function(){
		return Chapitre.find()
	}
})

Template.note.helpers({
	notes : function(){
		return []//Note.find()
	}
})
