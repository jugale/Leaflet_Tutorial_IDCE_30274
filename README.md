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

INSERT IMAGE HERE

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


### Adding Points

Now that we have our base, we can start adding elements to our map! With leaflet, you can add points, markers, and polygons to your map. In this tutorial, we're going to try out putting a point to our map. If you're interested in learning how to put other geometries on your webmap, check out [Leaflet's Quick Start Tutorial](https://leafletjs.com/examples/quick-start/).

Let's add a point to the center of the Hadwen Arboretum. To do this, we use `L.marker([latitude,longitude])` using the coordinates of where we want our maker to be.

```javascript
var marker = L.marker([42.258288,-71.832662])
```
Test out your script by saving and refreshing your HTML page in your browser. Look's like nothing is showing up? That's because you need to make sure you add the point to your map using `.addTo()` like below:

```javascript
  var marker = L.marker([42.258288,-71.832662]).addTo(map);
```
Here we've addedthe marker to our map variable we defined previously. Save and refresh your HTML page, and it should look something like this:

INSERT PICTURE HERE

Neat! Now we know how to add a marker to our Leaflet Map. This point isn't super helpful to us going forward, so you can either comment out this line like below, or delete this line from your code.

```javascript
//var marker = L.marker([42.258288,-71.832662]).addTo(map);
```

### Adding your own data to a Leaflet Map
Built into Leaflet is the ability to add GeoJSON features to your map using `L.geoJSON()` ! We're going to use this ability to add our trails and tree data to create a simple map of the Hadwen Arboretum. 

[GeoJSON](https://geojson.org/) is a way to code geographic data, and supports points, lines (LineString), polygons, and multi-point,line, and polygon features. Shapefiles can be converted into GeoJSON format using a variety of GIS softwares. If you have ArcPro, you can use the feature to JSON conversion utility to convert a `.shp` to a `.geojson`. You can also do this using QGIS by exporting a `.shp` to a `.geojson`. [Here's a quick Youtube tutorial on how to do this using QGIS](https://youtu.be/K9648vyQEFM).

For the sake of time, I have converted the data that we will use to GeoJSON format that can be found in the the `data` folder in this repo. Download the `arboretumtrails.js` and `selectTrees.js` save them into your folder on the server you are working in.

Let's open up the `arboretumtrails.js` to look at the GeoJson format. Here's what you'll see at the top of the file:
```javascript
var trails = [{                                   //set variable
  "type":"Feature",                               //define variable type
  "properties":{                                  //properties holds data about feature
    "trail_name":"Larch Lane Trail"
  },                                              //close properties
  "geometry":{                                    //define geometry
    "type":"LineString",                          //define type of geometry -- linestring = continuous line feature
    "coordinates":[                               //All coordinates of line feature, all coordinates of containted in brackets,
      [-71.830063273720128,42.258708084231166],   //each coordinate within own brackets, coordinates separated by commas
      [-71.830256090000859,42.258787690003146],
      [-71.830419410000758,42.258846530003197],
      [-71.830614170000828,42.258929770003107],
      [-71.830754670000715,42.258991920003147],
      [-71.830882800000708,42.25905416000311],
      [-71.831061690000837,42.259128980003204],
      [-71.831170010000761,42.259168470003182],
      [-71.831272990000826,42.259183040003087],
      [-71.831415250000717,42.259286890003118],
      [-71.831547230000794,42.259338280003149],
      [-71.83169322000073,42.259360740003167],
      [-71.831789430000811,42.259406100003169],
      [-71.831922650000763,42.259498150003147],
      [-71.832027770000749,42.259563120003129],
      [-71.832148220000747,42.259616150003161],
      [-71.832257730000691,42.259655620003187],
      [-71.832441880000786,42.259741470003206],
      [-71.832560290000686,42.259797320003216],
      [-71.832671810000804,42.2598600800032],
      [-71.83279861000085,42.259920600003127],
      [-71.832905040000782,42.259981510003222],
      [-71.833019900000835,42.260025960003169]
    ]                                             //close coordinates
  }                                              //close geometry
},{                                               //close first feature, open next, repeat for each unique feature
```
As we can see, the GeoJSON format stores the type of geometry, attribute data of the feature stored in *properties*, as well as the coordinates that are connected together to make a line. Copy and paste the contents of the script from the `arboretumtrails.js` under your tile base layer. 

Now that we have geometry information in our file, we can use Leaflet to load it onto our map!

```javascript
L.geoJSON(trails).addTo(map);
```

Save your file and refresh your webpage. It should now show all the trails in the Arboretum!

INSERT PICTURE HERE

This is great, but just lines on a map isn't super helpful. We want to be able to make a distinction between trails, and know what the different trail names are. To do this we need to add a pop-up that displays the trail name stored in the properties of each feature. 

To add a pop-up we're going to create a function that can then be called when displaying the trails:
```javascript
function trailname(feature, layer) {
    if (feature.properties && feature.properties.trail_name) {
        layer.bindPopup(feature.properties.trail_name);
    }
};
```
This creates a function called `trailname` that runs an if statement if the line feature has `trail_name` in the properties then bind the trail name as a popup to the layer. Add this function below the `trails` variable but before the `L.geoJSON()` function.

Now we need to include the `trailname` function we created when adding our trails layer to our map. To do this we the  `onEachFeature` function, which will call the passed function one on each feature, and we add it like this:

```javascript
//use geoJSON to add the trail to the map
  L.geoJSON(trails,{
    onEachFeature: trailname
  }).addTo(map);
```

Again, save your file and refresh your webpage. Now when you click on a line, a pop-up should occur showing the name of each trail.

We can go a bit further and give each trail a unique color so that users can distinguish between each trail. Again, to do this we will be creating a function that contains the style for our lines:

```javascript
//this function assigns an individual color to each trail on the map
function trailstyle(feature) {
  switch (feature.properties.trail_name){
    case 'Larch Lane Trail': return {color: "green"};
    case 'East-West Trail': return {color: "blue"};
    case 'Obadiah Trail': return {color: "yellow"};
    case 'Appleton Trail': return {color: "red"};
    case 'Facility Road': return {color: "black"};
    case 'Beech Trail': return {color:"violet"}
    case '': return {color: "grey"};
  }
};
```
This assigns a color to each line based on the trail name listed in each line's geometry! Add the code from above into your script, below the `trailname` function and **before** `L.geoJSON()`.

Now we have to pass this function when creating our map to do this we're going to update the `L.geoJSON()` function to look like this:

```javascript
//use geoJSON to add the trail to the map
  L.geoJSON(trails,{
    style: trailstyle,
    onEachFeature: trailname
  }).addTo(map);
```

Like always, save your script and refresh your html page. Now you should be able to see each trail in a different color!

INSERT PICTURE HERE

Because we're looking at an Arboretum, we have to add some trees to this map. Next we will be adding some point data of the unique trees you can find at the Hadwen. The process to add point data is very similar to the process we used to add the trail feature. Open up `selectTrees.js` and copy and paste the contents of the file into your script below our work for the trail feature.

Before we display our tree points, we need to create a maker to display our trees (if we don't the default Leaflet marker will be displayed for each point). Unlike the trails, we don't need to make a function because each tree point will have the same symbology. Instead we will just be making a variable, which you will put directly under the `uniquetrees` variable from the `selectTrees.js`:

```javascript
//create maker for trees
var treemarker = {
    radius: 6,
    fillColor: "Green",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
```
You can play around with these properties, changing the marker size with `radius` and the colors with `fillColor` and `color`. 

To add our tree points to the map, we will be using `L.geoJSON()` again, but points require a little bit more to be displayed. We must use the `pointToLayer` fucntion to actually spawn the points on the map. Add this to your code after your `treemarker` variable:

```javascript
  //use geoJSON to add unique trees points to the map
  L.geoJSON(uniquetrees, {
      pointToLayer: function (feature, latlng) { //pointToLayer defines how GeoJSON points spawn Leaflet Layers; passes the point feature and coordinates
          return L.circleMarker(latlng,treemarker); //creates circle marker at point, and uses style defined above
      },
  }).addTo(map);
```
Here we're using `geoJSON` to display the unique trees variable, `pointToLayer` to spawn the points, and the `L.circleMarker` function which creates the tree point and applies the symbology we created in the `treemarker` variable.

Save your file and refresh your HTML, and the tree points should appear on your map! Our last step here is to add a pop-up to the tree layer so the user can know what type of tree each point is. The process to do this the exact same as binding a pop-up for the trails layer, but this time we're creating a function called `treepopup` and basing the pop-up off of the `Common_Nam` property:

```javascript
//bind popup to tree points, and have it display the common name of each tree
function treepopup(feature, layer) {
    if (feature.properties && feature.properties.Common_Nam) {
        layer.bindPopup(feature.properties.Common_Nam);
    }
};
```
Add this script below your `treemarker` variable, and **above** the `geoJSON()` function and add the `onEachFeature` function when displaying `uniquetrees`:

```javascript
//use geoJSON to add unique trees points to the map
L.geoJSON(uniquetrees, {
    pointToLayer: function (feature, latlng) { //pointToLayer defines how GeoJSON points spawn Leaflet Layers; passes the point feature and coordinates
        return L.circleMarker(latlng,treemarker); //creates circle marker at point, and uses style defined above
    },
    onEachFeature: treepopup //onEachFeature calls function once per feature; used to bind popup
}).addTo(map);
```
Now one last time, save your file and refresh your webpage. Now you should be able to click the tree points and see the common name of each tree!

**Congrats! You've just created a basic webmap using Leaflet!**

##Credit
This tutorial adapts elements of [Leaflet's Quick Start Guide](https://leafletjs.com/examples/quick-start/), [MapTimeBoston's Leaflet Demo](https://maptimeboston.github.io/leaflet-intro/), and [Leaflet's GeoJSON tutorial](https://leafletjs.com/examples/geojson/).
Hadwen Arboretum data was provided by Professor John Rogan from Clark University, and collected by the Hadwen Arboretum Research Cohort.

