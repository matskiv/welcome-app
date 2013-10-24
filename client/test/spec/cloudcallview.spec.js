/*jshint unused:false */
/*global describe, it, beforeEach, afterEach, expect, App, $fh */
describe('render cloud action page', function(){
  var pageDiv = $('<div>', {id:'page_view_container'});
  var cloudCallView = new App.View.CloudcallView({
    el: pageDiv[0]
  });
  cloudCallView.render();
  it('should display navbar', function(){
    expect(pageDiv.find('.navbar').length).toEqual(1);
    expect(pageDiv.find('.navbar .btn.back').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').text()).toMatch(/cloud action/i);
  });

  it('should display content', function(){
    expect(pageDiv.find('.content_view .container h1').length).toEqual(1);
    expect(pageDiv.find('.content_view .container h1').text()).toMatch(/cloud action/i);
    expect(pageDiv.find('.cloud-action-button').length).toEqual(1);
    expect(pageDiv.find('.response_content').html()).toEqual('');
    expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(true);
  });

  it('call cloud button should be triggered and extra content should be shown', function(){
    //mock $fh.act
    $fh.act = function(params, success, fail){
      success({
        text: 'test hello'
      });
    };
    pageDiv.find('.cloud-action-button').trigger('click');
    expect(pageDiv.find('.response_content').html()).toMatch(/test hello/i);
    expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(false);
  });
});