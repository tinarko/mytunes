// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  
  // events: {
  //   'click': function() {
      
  //   }
  // },

  initialize: function() {
    // console.log('init');
    // console.log(this);
    this.collection.on('add remove', this.render, this);
    // this.collection.on('dequeue', function() {
    //   this.render();
    // }, this);
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      }));


    // var songView = new SongQueueEntryView({model: this.model});
    // songView.render();
    // console.log(songView.$el);
    // this.$el.html(songView.$el);
    // console.log(this.$el);
    // return this.$el;
  }

});
