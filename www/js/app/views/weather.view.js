/*global App, _, $fh*/
/* Backbone View */
App.View.WeatherSampleView = App.View.BaseView.extend({

  templateId: 'weather',
  model: App.models.weatherPage,

  events: {
    'click .get-geo-btn': 'getLocation',
    'click .get-weather-btn': 'getWeatherData'
  },

  initialize: function(){
    _.bindAll(this, 'getLocation', 'updateLocation', 'gotLocationSuccess', 'gotLocationError', 'getWeatherData', 'gotWeatherData');

    // So the weather example can still be used even if location cannot be found.
    this.defaultLocation = {
      coords: {
        latitude: 52.251188,
        longitude: -7.153205
      }
    };
  },

  getLocation: function(){
    this.dataReset();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.gotLocationSuccess, this.gotLocationError, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    } else {
      this.updateLocation(this.defaultLocation);
    }
  },

  updateLocation: function(pos){
    this.coords = pos.coords;

    this.$el.find('#locationField').val('lat = ' + this.coords.latitude + '; lon = ' + this.coords.longitude);
    this.$el.find('.hidden').removeClass('hidden');
  },

  gotLocationSuccess: function(pos) {
    this.updateLocation(pos);
  },

  gotLocationError: function(err) {
    this.updateLocation(this.defaultLocation);
    this.dataError('Failed to get location : ' + err.message, 'A default location has been set');
  },

  getWeatherData: function(){
    var self = this;
    self.dataReset();

    var lat = this.coords.latitude;
    var lon = this.coords.longitude;

    $fh.cloud({
      path:'getWeather',
      data: {
        lat: lat,
        lon: lon
      }
    }, function(res){
      self.gotWeatherData(res);
    }, function(msg){
      self.dataError(msg);
    });
  },

  gotWeatherData: function(data){
    var source = $("#weather-data").html();
    var template = Handlebars.compile(source);

    this.$el.find('.response_content').removeClass('alert-error').removeClass('alert').html(template(data));
  }
});
