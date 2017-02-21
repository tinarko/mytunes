// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  
  events: {
    'add': function() {
      console.log('called');
    }
  },

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('dequeue', function() {
      this.render();
    }, this);
  },

  render: function() {
    var songView = new SongQueueEntryView();
    this.$el.append(songView.render());
    return this.$el;
  }

});
