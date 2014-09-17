window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var $rootEl = $('div#content');
    new NewsReader.Routers.FeedsRouter({ $root: $rootEl});
    Backbone.history.start();
    this.installSidebar();
  },
  
  installSidebar: function(){
    var collection = NewsReader.Collections.feeds;
    collection.fetch();
    var view = new NewsReader.Views.Index({
      collection: collection
    });
    $('div#sidebar').html(view.render().$el);
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
