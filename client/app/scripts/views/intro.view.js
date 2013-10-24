/*global App, Backbone*/
/* Backbone View */
App.View.IntroView = Backbone.View.extend({
  template: App.Templates.intro,
  model: App.models.introPage,

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this.$el;
  }
});