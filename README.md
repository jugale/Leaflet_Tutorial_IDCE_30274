# Creating a Simple Webmap using Leaflet

## Introduction
### What is Leaflet?

### How can Leaflet be useful to me?


## Tutorial
### Before we start...
You will need:
1. A code editor, I used [Atom](https://atom.io/)
2. Set up a local web server. I used [MAMP](https://www.mamp.info/en/mac/).

In this local web server, we will be storing all the files we need to for this tutorial. Using MAMP, I stored all my files in the applications `htdocs` folder. [Check out this short video](https://www.youtube.com/watch?v=N0CPgBrjpl8&feature=emb_logo) to learn how to set up and store files in MAMP.

### Getting Started
First thing to do is to open your code editor and create an `html` file. HTML is the standard language that webpages are in. If you're new to using HTML, I suggest quickly checking out [this HTML tutorial from W3Schools.com](https://www.w3schools.com/html/) to understand the basic components and syntax of an HTML file. 

Neat thing about Atom, is that they make starting an HTML file super easy! In the bottom right corner you will see a series of options like the image below:

If you select the button that says "Plain Text" you will have the option to switch what language you are writing your file in. In the search bar, type "HTML" and select the first HTML option. Now you will be writing in HTML! 

Next we need to create the basic structure of an HTML file, including the `<head>` and `<body>` section. Atom also makes this part wicked easy! Start typing "HTML" and the application will pop-up an autocomplete option. Press tab, or use your mouse to click the autocomplete pop-up, and Atom will start you off with a basic HTML structure:

INSERT PICTURE HERE

Here we'll see all the basic components of an HTML file, including a `<title> </title>` section. Here we can give our webpage a title which will appear when you hover over your webpage tab in a browser. Type the title you would like to give your map between the start and end title tags like this:

```html
<title> Hadwen Arboretum Map! </title>
```

Make sure you save your file in your document folder of your local web server application! You may have to put `.html` to the end of your file name to make sure the file saves as an HTML file. Now we can get started with Leaflet!

### Getting started with Leaflet
There are a couple of options to start using the Leaflet library in your code. One way is to download and import leaflet into your code from [Leaflet's download page](https://leafletjs.com/download.html). If you decide to use this method, make sure you save these file in the same folder of the local web server! For this tutorial though, we're going to be using a hosted version of Leaflet [also found on Leaflet's download page](https://leafletjs.com/download.html).

Leaflet requires two parts:
1. Leaflet's CSS style sheet: `leaflet.css` (in the downloadable version)
2. Leaflet's JavaScript file: `leaflet.js` (in the downloadable version)

You'll import both of these hosted Leaflet files into the `<head>` section of your HTML file, just below the `<title>` section. The CSS file **must** come before the JavaScript file in the script!!

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
```
Cool! Now the Leaflet library is imported in your script for you to use. Now lets make a basic map

### Making a Basemap
To start of making a webmap, we need to create a place to add a map element to our page. To this we're going to use a `<div>` tag to store our map element in the `<body>` of the script, like this:

```html
 <div id="map"></div>
```

Next we're going to define how big the map is going to be on our webpage. To do this, we're going to create a `<style>` section in our `<head>` section. In this case, because we're only displaying the webmap on our page, we'll let it take up the whole page:

```html
  <style>
    #map{ height: 100% }
  </style>
```
Make sure when you're creating the style element, that you include both the start `<style>` tag **and** the end `</style>` tag!

Now our code should be looking something like this:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  
  <title> Hadwen Arboretum Map!</title>                 <!-- Page title --> 

  <!--Import Leaflet-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" /> <!-- Leaflet Style Sheet -->
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>           <!-- Leaflet JavaScript File -->
  
  <style>   
   <!-- set map height in head section -->
      #map { height : 100%} 
  </style>  
  
  </head>
 
  <body>
    <!-- create map div -->
    <div id="map"></div>
  </body>
</html>

```
Save and open your HTML file in your web browser. Cool, but nothing's going to show up. That's because you've created a space for your map on the webpage, but haven't actually made a map element. Lets do that now!

To start doing this, we need to start using JavaScript in our html file. We can do this by creating a `<script>` section within the HTML `<body>`. Paste this code within your HTML `<body> </body>`.

```html
<body>
    <!-- create map div -->
    <div id="map"></div>
 <script>
  
   </script>
 
  </body>

```
From now on, we will be working entirely within the start `<script>` tag and the end `<script>` tag for our map!

First, lets create our map variable. We will be using `L.map` to initialize our map object to the `<div>` we created before, setting the map center on the Hadwen Arboretum, using the format `L.map("html div").setView[latitude,longitude],zoom level)`

```javascript
  // initialize the map
  var map = L.map('map').setView([42.258288, -71.832662], 17);
```
Next, we need to set a base map to work off of. Leaflet uses tile layers as basemaps from services like, [Mapbox](https://docs.mapbox.com/studio-manual/reference/tilesets/), [OpenStreetMap](https://www.openstreetmap.org/#map=4/38.00/-95.80), and [ESRI](http://esri.github.io/esri-leaflet/). To find one you would like to use, I suggest checking out [this basemap preview application](http://leaflet-extras.github.io/leaflet-providers/preview/) that lets you browse for a basemap you like and copy the code needed for your script!

Copy and paste the code for your base map, and paste it below your map variable, making sure you include both the tile layer link **and** the layer attribution. I chose to use the ESRI Topo basemap, but you can use whatever you'd like!

```javascript
var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  }).addTo(map);
```
  After you've inserted the tile layer base map, save and open your HTML file. It should look something like the image below, with the map centered on the Hadwen Arboretum.

INSERT PICTURE HERE


  


