/*jshint unused:false */
/*global describe, it, beforeEach, afterEach, expect, App */
describe('render cloud integration page', function(){
  var pageDiv = $('<div>', {id:'page_view_container'});
  var view = new App.View.IntegrationView({
    el: pageDiv[0]
  });
  view.render();

  it('should display navbar', function(){
    expect(pageDiv.find('.navbar').length).toEqual(1);
    expect(pageDiv.find('.navbar .btn.back').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').text()).toMatch(/cloud integration/i);
  });

  it('should display content', function(){
    expect(pageDiv.find('.content_view .container h1').length).toEqual(1);
    expect(pageDiv.find('.content_view .container h1').text()).toMatch(/cloud integration/i);
    expect(pageDiv.find('.content_view .container p').text().length).toBeGreaterThan(0);
    expect(pageDiv.find('.content_view .container .row .plugins').length).toEqual(9);
  });
  
});