// upload des images

Template.formImage.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.formImage.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.formImage.events({

  'click #validerImage': function (e, template) {
    e.preventDefault();
    var file = template.find('#fileInput').files[0];
    var text = template.find('#textImage').value;
    var parent_id = event.target.form.parent_id.value;
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

// envoie du texte

Template.formTexte.events({
  "click #addTexteNoteButton": function(event,t){
    event.preventDefault();
    var content = event.target.form.content.value;
    var parent_id = event.target.form.parent_id.value;
    var type = event.target.form.type.value;
    if(parent_id == "") parent_id = null
    event.target.form.content.value = "";
    var n = new Note({content:content, parent_id:parent_id, type:type})
    n.save()
    $(".action").hide();
  }
});
