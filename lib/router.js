Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

  //home
  this.route('transcription',{
    path:'/',
    template: 'transcription'
  });

	// moderation
	this.route('moderation');

	// publication
	this.route('publication');

	// api transcription
	this.route('api_texte', {
	 path: '/api_texte',
	 where: 'server',
	 action: function () {
		 var jsonTexte = Transcription.find().fetch(); // what ever data you want to return
		 //var jsonImages = Images.find().fetch();
		 console.log(jsonTexte);
		 this.response.setHeader('Content-Type', 'application/json');
		 this.response.end(JSON.stringify(jsonTexte));
 		}
	});

	// api images
	/*
	this.route('api_images', {
	 path: '/api_images',
	 where: 'server',
	 action: function () {
		 var json = Images.find().fetch(); // what ever data you want to return
		 this.response.setHeader('Content-Type', 'application/json');
		 this.response.end(JSON.stringify(json));
		}
	});*/
});
