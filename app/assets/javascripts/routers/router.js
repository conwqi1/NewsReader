NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$root
  },
  routes: {
    "": "index",
     "feed/new": "new",
    "feeds/:id": "show"
   
  },
  
  show: function(id){
    var feed = NewsReader.Collections.feeds.getOrFetch(id);
    feed.fetch();
    var view = new NewsReader.Views.Show({
      model: feed
    });
    
    this._swapView(view);
  },
  
  index: function () {
    var collection = NewsReader.Collections.feeds
    collection.fetch();
    var view = new NewsReader.Views.Index({
      collection: collection
    });
    this._swapView(view);
  },
  
  new: function () {
    var collections = NewsReader.Collections.feeds;
    var view = new NewsReader.Views.New({
      collection: collections
    });
    
    this._swapView(view);
    
  },
  
  _swapView: function (view) {
      this.currentView && this.currentView.remove();
      this.currentView = view;
      this.$rootEl.html(view.render().$el);
    }
});