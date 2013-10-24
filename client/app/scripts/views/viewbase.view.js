/*global App, Backbone*/
/* Backbone View */
App.View.BaseView = Backbone.View.extend({
  
  className: 'page_view',
  render: function(){
    this.navbar = new App.View.NavbarView({title: this.model.get('title'), titleWidth: this.model.get('titleWidth')});
    this.$el.append(this.navbar.render());
    this.$el.append(this.template(this.model.toJSON()));
    return this.$el;
  },

  dataError: function(msg){
    this.$el.find('.response_content').removeClass('alert-success').addClass('alert').addClass('alert-danger').html('Ops, something went wrong (' + msg+ '). Please try again later.');
  },

  dataReset: function(){
    this.$el.find('.response_content').removeClass('alert-success').removeClass('alert').removeClass('alert-danger').html('');
  }

});