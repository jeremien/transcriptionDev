import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Images from '/collections/images.js';
import '/client/templates/uploadImages/uploadImages.html';

//Meteor.subscribe('files.images.all')

Template.uploadImages.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadImages.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadImages.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {


        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            window.alert('Error during upload: ' + error.reason);
          } else {
            console.log("id"+fileObj._id);
            var utc = Date.now();
            Images.update({_id:fileObj._id},{$set:{"meta.date":utc}});
            window.alert('File "' + fileObj.name + '" successfully uploaded');
          }

          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});
