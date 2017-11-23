
isNew = new ReactiveVar(false);

Template.addTexte.helpers({
  isNew : function(){
    return isNew.get() && true;
  }


});






/*Template.ajoutTexte.onRendered(function(){
    $('#summernote').summernote({
      height: 200,
      placeholder: 'écrivez votre transcription',
      toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline', 'clear']]
      ]
    });

});

Template.ajoutTexte.onDestroyed(function(){
  console.log('destroy')
  $('#summernote').summernote('destroy');
});*/
