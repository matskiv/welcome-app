# Development

The client app stucture is created using Yeoman. It is based on the Yeoman web-app project template with some customizations. The main change is to use the HTML5 mobile boilerplate (http://html5boilerplate.com/mobile/). 

All the client app files are in the "app/" directory. This is where you should do the development work. When the app is ready to be deployed, a grunt task should be run to generat the distribution version to the "default/" directory. You SHOULD NEVER edit the files directly in the "default/" directory.

The distribution version of the app will use merged & minified version of javascript and css files, which will improve the app performance when running on the devices.

To develop locally, run:

    npm install -g yeoman
    npm install .
    bower install
    grunt server

It will automatically load index.html file in the browser and reload if anything changed. Note that this only runs the client side of the app. 

If you also wish to run server functionality locally, install and run both Redis and MongoDB on your machine and then run the following from the top level of the project:

    fhc target [your-studio-domain].feedhenry.com
	  fhc login your-studio-username your-studio-password
	  fhc apps
    fhc local the-id-of-your-app

When you are finished with your changes, run

    grunt

to generate files for distribution and they will be copied to the default directory.

# Test

The "test/" directory contains Jasmine tests for the client app. To run the tests, first go to the "test" dir and install Bower dependencies, then run

    grunt test
