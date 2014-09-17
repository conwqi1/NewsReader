NewsReader.Views.Show = Backbone.View.extend({
  events: {
    'click .feed-refresh-btn': 'refreshFeed'
  },
  
  template: JST["feeds/show"],
  initialize: function () {
    this.listenTo(
      this.model,
      'sync',
      this.render
    )
  },
  
  refreshFeed: function(event) {
    this.model.fetch();
  },
  
  render: function () {
    var rendCont = this.template({
      feed: this.model
    });
    this.$el.html(rendCont);
  
    return this;
  }
});


