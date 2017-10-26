import { FilesCollection } from 'meteor/ostrio:files';

Meteor.h="";

 Images = new FilesCollection({
  debug: true,
  collectionName: 'Images',
  allowClientCode: true,
  /*storagePath: () => {
      return `${process.env.PWD}/data/uploads`;
  },*/
  onBeforeUpload: function(file) {
      if(file.size <= 1024 * 1024 * 10 && /png|jpe?g/i.test(file.extension)){
        return true;
      }
      return 'please upload new file';
  }
})

/*if (Meteor.isServer){
  //Images.denyClient()
  Meteor.publish('files.images.all', function (){
    return Images.find().cursor
  });
} else {
  Meteor.subscribe('files.images.all')
}*/

export default Images
