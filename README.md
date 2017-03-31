# Welcome Client
---------
Author: Erik Jan de Wit   
Level: Intermediate   
Technologies: Javascript, Cordova, RHMAP   
Summary: A demonstration of how to use [FH JavaScript SDK](https://github.com/feedhenry/fh-js-sdk) with RHMAP.   
Community Project: [Feed Henry](http://feedhenry.org)   
Target Product: RHMAP   
Product Versions: RHMAP 3.8.0+   
Source: https://github.com/feedhenry-templates/sync-cordova-app   
Prerequisites: fh-js-sdk : 2.14.+, Cordova 5.0+   

## What is it?

This application shows how you can use cloud call with the RHMAP platform, it should be used in combination with the [Welcome cloud app](https://github.com/feedhenry-templates/welcome-cloud). Refer to `www/fhconfig.json` for configuration.

If you do not have access to a RHMAP instance, you can sign up for a free instance at [https://openshift.feedhenry.com/](https://openshift.feedhenry.com/).

## How do I run it?  

### RHMAP Studio

This application and its cloud services are available as a project template in RHMAP as part of the "Welcome app Project" template.

### Local Clone (ideal for Open Source Development)
If you wish to contribute to this template, the following information may be helpful; otherwise, RHMAP and its build facilities are the preferred solution.

###  Prerequisites  
 * fh-js-sdk : 2.14.+
 * cordova: 5.0+

## Build instructions

***Note: If you're using an emulator you may need to set your Geolocation settings manually for the weather app to work as expected.*** 

 * npm install
 * Edit `www/fhconfig.json` to include the relevant information from RHMAP.  
 * Build and run locally
```
cordova serve  
```
Go to [http://localhost:8000/](http://localhost:8000/)

### npm dependencies
The `fh-js-sdk` and other development dependencies are defined in `package.json` and included in a `www/main.js`.

* This generated `www/main.js` file is checked-in to allow RHMAP studio preview to statically serve dependencies.

* The `www/js/app/init.js` file is browserified and acts as a bridge between template script and npm dependencies. 

* All the other JavaScript files in the template app will not be browserified, in order for you to be able to experiment live edit in RHMAP Studio preview.

### Updating fh-js-sdk version
To update the JS SDK:
- change the version in `package.json`
- run `npm install` a grunt task is automatically ran to regenerate main.js
- check-in git repo the npackage.json + main.js

## How does it work?

* hit `cloud action` for a http call to welcome-clous app
* hit `data browser` to save in MongoDB
* hit `Location Example` to get some geo-location example


