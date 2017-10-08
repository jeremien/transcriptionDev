//export const Transcription = new Mongo.Collection('transcription');
Transcription = new Mongo.Collection('transcription');

/*if(Meteor.isServer) {
  Meteor.publish('transcription', function transcriptionPublication(){
    return Transcription.find();
  });
}*/
