// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  parse: function(response) {
    return response.results;
  },

  //make ajax request to give us a package of song data
  initialize: function () {
    this.fetch({
      data: {limit: 10}
    });

    // $.ajax ({
    //   url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
    //   type: 'GET',
    //   // success: make a new song library
    //   success: function (data) {
    //     // for each songs in data, make into a song model
    //     new AppModel({library: data.results.map( function(song) {
    //       return new SongModel({model: song});
    //     })});
    //     // package all song models into library collection
      



    //     console.log(data);
    //     app = new AppModel( {library: data.results} );
    //     console.log('success!');
    //     // this.libraryView = new LibraryView({collection: data});
    //     // console.log(this);
    //   },

    //   error: function () {
    //     console.log('error');
    //   }

    // });
  },



});