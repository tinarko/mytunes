// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.models.forEach(song, function() {
      this.models[i] = new SongQueueEntryView;
    });
    // this.on('queued', this.render);
  },

  render: function() {
    this.collection.forEach(function(child) { 
      child.render();
    });
    //this.collection.models[0].render();
    return this.$el;
  }

});
