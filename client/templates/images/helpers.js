import Images from '/collections/images.js';
//Meteor.subscribe('files.all');

//Meteor.subscribe('files.images.all');

Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});
