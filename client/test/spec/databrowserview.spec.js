/*jshint unused:false */
/*global describe, it, beforeEach, afterEach, expect, App, $fh*/
describe('render data browser page', function(){
  var pageDiv = $('<div>', {id:'page_view_container'});
  var view = new App.View.DatabrowserView({
    el: pageDiv[0]
  });
  view.render();

  it('should display navbar', function(){
    expect(pageDiv.find('.navbar').length).toEqual(1);
    expect(pageDiv.find('.navbar .btn.back').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').text()).toMatch(/data browser/i);
  });

  it('should display content', function(){
    expect(pageDiv.find('.content_view .container h1').length).toEqual(1);
    expect(pageDiv.find('.content_view .container h1').text()).toMatch(/data browser/i);
    expect(pageDiv.find('input#nameField').length).toEqual(1);
    expect(pageDiv.find('.save-data').length).toEqual(1);
    expect(pageDiv.find('.response_content').html()).toEqual('');
    expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(true);
  });

  it('save button should be triggered and extra content should be shown', function(){
    //mock $fh.act
    $fh.act = function(params, success, fail){
      success({
        'status': 'ok'
      });
    };
    pageDiv.find('input#nameField').val('');
    pageDiv.find('.save-data').trigger('click');
    //name field is empty, should show alert
    expect(pageDiv.find('.alert-danger').length).toEqual(1);
    expect(pageDiv.find('.alert-danger').text()).toMatch(/please enter a name/i);

    pageDiv.find('input#nameField').val('test name');
    pageDiv.find('.save-data').trigger('click');
    expect(pageDiv.find('.alert.hidden').length).toEqual(1);
    expect(pageDiv.find('.response_content').text().length).toBeGreaterThan(0);
    expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(false);
  });
  
});