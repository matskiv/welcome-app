/*jshint unused:false */
/*global describe, it, beforeEach, afterEach, expect, App, $fh */
describe('render weather example page', function(){
  var pageDiv = $('<div>', {id:'page_view_container'});
  var view = new App.View.WeatherSampleView({
    el: pageDiv[0]
  });
  view.render();

  it('should display navbar', function(){
    expect(pageDiv.find('.navbar').length).toEqual(1);
    expect(pageDiv.find('.navbar .btn.back').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').text()).toMatch(/location example/i);
  });

  it('should display content', function(){
    expect(pageDiv.find('.content_view .container h1').length).toEqual(1);
    expect(pageDiv.find('.content_view .container h1').text()).toMatch(/location example/i);
    expect(pageDiv.find('.get-geo-btn').length).toEqual(1);
    expect(pageDiv.find('input#locationField').length).toEqual(1);
    expect(pageDiv.find('.response_content').html()).toEqual('');
  });

  it('get location button should be triggered and location field should be populated', function(){
    navigator.geolocation = navigator.geolocation || {};
    navigator.geolocation.getCurrentPosition = function(cb){
      cb({coords: {latitude: 0, longitude: 0}});
    };

    pageDiv.find('.get-geo-btn').trigger('click');
    expect(pageDiv.find('input#locationField').val().length).toBeGreaterThan(0);
    expect(pageDiv.find('.get-weather-text').text().length).toBeGreaterThan(0);
    expect(pageDiv.find('.get-weather-btn').length).toEqual(1);
  });

  it('get weather button should be triggered and weather info should be displayed', function(){
    //mock $fh.act
    $fh.act = function(params, success, fail){
      success({"data":[{"date":"2013-09-19","high":"18","low":"7","desc":"Sunny","icon":"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0001_sunny.png"},{"date":"2013-09-20","high":"16","low":"11","desc":"Partly Cloudy","icon":"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"},{"date":"2013-09-21","high":"16","low":"15","desc":"Partly Cloudy","icon":"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"},{"date":"2013-09-22","high":"16","low":"14","desc":"Cloudy","icon":"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"},{"date":"2013-09-23","high":"16","low":"11","desc":"Cloudy","icon":"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"},{"date":"2013-09-24","high":"16","low":"12","desc":"Sunny","icon":"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0001_sunny.png"}]});
    };

    pageDiv.find('.get-weather-btn').trigger('click');
    expect(pageDiv.find('.weather-info .col-xs-6').length).toEqual(6);
  });
  
});