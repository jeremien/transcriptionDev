Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('sessions')
  
  //home
  this.route('transcription',{
    path:'/',
    template: 'transcription'
  });

	// mode d'emploi
	this.route('guide');

	// moderation
	this.route('flux');

	// moderation
	this.route('dessin');

	// moderation
	this.route('moderation');

	// publication
	this.route('publication');

	// api transcription
	this.route('api', {
	 path: '/api',
	 where: 'server',
	 action: function () {
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
