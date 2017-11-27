// TODO Redo this mess !
Template.blocImage.events({
  "click .event_cancelEditNote" : function(e,t){
    e.preventDefault();
    selectedNote.set(null);
  }


});

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
    console.log(this);
    var file = template.find('#fileInput').files[0];
    var legend = e.target.form.legend.value;
    var parent_id = this._id;
    //var meta = e.target.form.keywords.value;
    var meta = form2js("form_meta_" + this._id);
    var type = "image";
    var image_id = null;

    if(this.hasOwnProperty("image_id")){
      image_id = this.image_id;
    }

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
          //window.alert('File "' + fileObj.name + '" successfully uploaded');

          if(image_id){
            // Mise à jour d'une image existante
            var n = Note.findOne({image_id:image_id});
            n.image_id = fileObj._id;
            n.legend = legend;
            n.meta = form2js("form_meta_" + this._id);

            n.save();
          } else {
            // Création d'une nouvelle note avec une nouvelle image
            //n = new Note({type:"image", parent_id:parent_id, image_id:fileObj._id, legend:legend });
            n = new Note({type:"image", parent_id:parent_id, image_id:fileObj._id, legend:legend, meta:meta });
            //console.log(meta)
            n.save();
          }
          $(".action").hide();
          selectedNote.set(null);

        }

        template.currentUpload.set(false);
      });

      uploadInstance.start();
    } else {
      var url = template.find('#linkinput').value;
      console.log(url);
      if(url==""){
            var n = Note.findOne({image_id:image_id});
            n.meta = form2js("form_meta_" + this._id);
            n.save();
            $(".action").hide();
            selectedNote.set(null);
      } else {
        n = new Note({type:"image", parent_id:parent_id, link: url, legend:legend });
        n.save();
        $(".action").hide();
      }
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
