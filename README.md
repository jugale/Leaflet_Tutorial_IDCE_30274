# Creating a Simple Webmap using Leaflet

## Introduction
### What is Leaflet?

### How can Leaflet be useful to me?


## Tutorial
### Before we start...
You will need:
1. A code editor, I used Atom
2. Set up a local web server. I used [MAMP](https://www.mamp.info/en/mac/).

In this local web server, we will be storing all the files we need to for this tutorial. Using MAMP, I stored all my files in the applications `htdocs` folder. [Check out this short video](https://www.youtube.com/watch?v=N0CPgBrjpl8&feature=emb_logo) to learn how to set up and store files in MAMP.

### Getting Started
First thing to do is to open your code editor and create an `html` file. HTML is the standard language that webpages are in. If you're new to using HTML, I suggest quickly checking out [this HTML tutorial from W3Schools.com](https://www.w3schools.com/html/) to understand the basic components and syntax of an HTML file. 

Neat thing about Atom, is that they make starting an HTML file super easy! In the bottom right corner you will see a series of options like the image below:

If you select the button that says "Plain Text" you will have the option to switch what language you are writing your file in. In the search bar, type "HTML" and select the first HTML option. Now you will be writing in HTML! 

Next we need to create the basic structure of an HTML file, including the `<head>` and `<body>` section. Atom also makes this part wicked easy! Start typing "HTML" and the application will pop-up an autocomplete option. Press tab, or use your mouse to click the autocomplete pop-up, and Atom will start you off with a basic HTML structure:

Here we'll see all the basic components of an HTML file, including a `<title> </title>` section. Here we can give our webpage a title which will appear when you hover over your webpage tab in a browser. Type the title you would like to give your map between the start and end title tags like this:

```html
<title> Hadwen Arboretum Map! </title>
```

Make sure you save your file in your document folder of your local web server application! Now we can get started with Leaflet!

### Getting started with Leaflet
There are a couple of options to start using the Leaflet library in your code. One way is to download and import leaflet into your code from [Leaflet's download page](https://leafletjs.com/download.html). If you decide to use this method, make sure you save these file in the same folder of the local web server! For this tutorial though, we're going to be using a hosted version of Leaflet [also found on Leaflet's download page](https://leafletjs.com/download.html).

Leaflet requires two parts:
1. Leaflet's CSS style sheet: `leaflet.css` (in the downloadable version)
2. Leaflet's JavaScript file: `leaflet.js` (in the downloadable version)

You'll import both of these files into the `<head>` section of your HTML fileThe CSS file **must** come before the JavaScript file in the script.
