Router.configure({
	layoutTemplate: 'main'
});

Router.map(function(){

  //home
  this.route('chapitres', {
		path:"/"
	});

	// gestion des chapitres
	this.route('flux');

	// ajout des metas pour l'autocompletion
	this.route('metasAutocomplete');

	// mode d'emploi
	this.route('guide');

	// moderation
	//this.route('flux');

	// moderation
	//this.route('dessin');

	// moderation
	//this.route('moderation');

	// publication
	//this.route('publication');

	// api transcription
	this.route('api', {
	 path: '/api/v1',
	 where: 'server',
	 action: function () {

     var data = Chapitre.toJSON();
		 this.response.setHeader('Content-Type', 'application/json');
     this.response.setHeader("Access-Control-Allow-Origin", "*");
     this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		 this.response.end(JSON.stringify(data));
		 /*
		 var texte = Transcription.find().fetch(); // what ever data you want to return
		 var images = Images.find().fetch();
		 var dessin = Dessin.find().fetch();


		 data = Array.prototype.concat(images, texte, dessin);


		 data = _.sortBy(data, function(o){
			 return o.meta.date;
		 });
		 data.reverse();

		 this.response.setHeader('Content-Type', 'application/json');
		 this.response.end(JSON.stringify(data));
		*/
 		}
	});

	// carte
	this.route('carte');
});
