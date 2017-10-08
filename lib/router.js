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
});
