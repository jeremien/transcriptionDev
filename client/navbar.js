Template.footer.events({
  'click #scrollTop' : function(e){
    console.log('scroll');
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  },
  'click #noImages' : function(e){
    $('.imageBloc').hide();
    console.log('no images');
  },
  'click #allImages' : function(e){
    $('.imageBloc').show();
    console.log('all images');
  }
});
