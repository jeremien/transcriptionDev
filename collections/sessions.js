Chapitre_collection = new Mongo.Collection('session',{

	transform: (doc) => new Chapitre(doc)

});

Chapitre = class Chapitre extends Model {
	constructor(doc){
		super()
		_.extend(this, doc);
	}

	posts(){
		return [{titre: "post1"}]
	}
}





/*
	{
		_id: MongoID,
		timestamp: "",
		Titre: String,
		frozzen : boolean

	}




*/
