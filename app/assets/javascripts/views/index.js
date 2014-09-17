NewsReader.Views.Index = Backbone.View.extend({
  initialize: function  () {
    this.listenTo(this.collection, 'sync add remove', this.render)
  },

  events: {
    "click button#deleteFeed": "deleteFeed"
  }, 
  
  deleteFeed: function(event){
    var $target = $(event.target);
    var feed = this.collection.get($target.attr("data-id"));
    feed.destroy();
  },
  
  template: JST["feeds/index"],
  
  render: function () {
    var renderedContent = this.template({
      feeds: this.collection
    });
    this.$el.html(renderedContent);
 
    return this;
  }
});


