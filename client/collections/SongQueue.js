// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //this.set('queue', []);
    // console.log(this.models);
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      } 
    } );

    this.on('ended', function() {
      this.shift();
      if (this.length !== 0) {
        this.playFirst();
      } 
    });

    this.on('dequeue', function() {
      this.remove(0);
    });

  },

  playFirst: function() {
    this.at(0).play();  
  }

});