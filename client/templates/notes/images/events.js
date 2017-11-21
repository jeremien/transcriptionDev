
Template.uploadImages.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadImages.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadImages.events({

  'click #validerImage': function (e, template) {
    e.preventDefault();
    var file = template.find('#fileInput').files[0];
    var text = template.find('.textImage').value;
    var parent_id = e.target.form.parent_id.value; 
    var type = "image";

    if(file){

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
        var utc = Date.now();
        Images.update(
          {
            _id:fileObj._id
          },
          {
            $set:{
              "meta.date":utc,
              "meta.text":text
            }
          });
        //window.alert('File "' + fileObj.name + '" successfully uploaded');
        n = new Note({type:"image", parent_id:parent_id, image_id:fileObj._id })
        n.save()
        $(".action").hide();
        
      }

      template.currentUpload.set(false);
    });

    uploadInstance.start();
    }
  }
});

/*Template.uploadImages.events({
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
            console.log(file);
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
});*/
