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
	this.route('api', {
	 path: '/api',
	 where: 'server',
	 action: function () {
		 var json = Transcription.find().fetch(); // what ever data you want to return
		 this.response.setHeader('Content-Type', 'application/json');
		 this.response.end(JSON.stringify(json));
 		}
	});

	// api images
	this.route('images', {
	 path: '/images',
	 where: 'server',
	 action: function () {
		 var json = Images.find().fetch(); // what ever data you want to return
		 this.response.setHeader('Content-Type', 'application/json');
		 this.response.end(JSON.stringify(json));
		}
	});
});
