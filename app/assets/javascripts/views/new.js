NewsReader.Views.New = Backbone.View.extend({

 template: JST["feeds/new"],
  
  createFeed: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    
    var url = $target.find('#feedUrl').val();
    var model = new NewsReader.Models.Feed({url: url});
    var that = this;
    // model.save({},{
//       success: function(){
//         that.collection.add(model);
//       }
//     });
    this.collection.create(model);
    Backbone.history.navigate("#", {trigger: true})
  },
  
  events: {
    "submit form#new_rss": 'createFeed'
  },
  
  
  render: function () {
    var rendCont = this.template();
    this.$el.html(rendCont);
    
    return this;
  }
})