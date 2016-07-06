var Backbone = require('backbone');
var Handlebars = require("handlebars");
var App = require('../namespace');
var $ = require("jquery");

/*global App, Backbone*/
/* Backbone View */
App.View.IntroView = Backbone.View.extend({
  templateId: 'intro',
  model: App.models.introPage,

  render: function(){
    var source = $("#" + this.templateId).html();
    var template = Handlebars.compile(source);
    this.$el.html(template(this.model.toJSON()));
    return this.$el;
  }
});