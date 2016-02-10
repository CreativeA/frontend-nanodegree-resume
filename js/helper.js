/* Base Variables */

var HTMLheaderName = '<h1 id="name" class="center-text">Hello. I\'m %data%</h1>';
var HTMLheaderRole = '<h2 class="role">%data%</h3>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="grey-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="blue-text">mobile</span><span class="grey-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="blue-text">email</span><span class="grey-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="blue-text">twitter</span><span class="grey-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="blue-text">github</span><span class="grey-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="blue-text">blog</span><span class="grey-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="blue-text">location</span><span class="grey-text">%data%</span></li>';

var HTMLbioStart = '<div class="left column col-6"></div><div class="right column col-6"></div>'
var HTMLbioPic = '<img src="%data%" class="biopic"><div style="clear: both;"></div>';
var HTMLwelcomeType = '<div id="tagline" class="center-content clear-fix"><div class="type-wrap"><div id="typed-strings"></div><span id="typed"></span></div></div>';
var HTMLwelcomeMsg = '<p>%data%</p>';
var HTMLgetStarted = '<a href="#workExperience" class="button">Explore My Resume ></a>';

var HTMLskillsStart = '<div id="skillbox"><h3 class="subtitle">Ice Breaker? The Skill Play Pen</h3><h5>Instructions: Drag & drop the skills to order them from cool to red hot >> Go, go, go!</h5><ul id="skills" class="flex-box"></ul></div>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<article class="work-entry"><div class="left column col-2"></div><div class="right column col-10"></div></article>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLworkImage = '<img src="%url%">';

var HTMLprojectStart = '<article class="project-entry column col-5"></article>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<article class="education-entry"></article>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLclassStart = '<article class="course-entry column col-4"><div class="card"><div class="front"></div><div class="back"></div></div></article>';
var HTMLonlineClasses = '<h3 class="sub">Completed Course Library</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="http://%url%" target="_blank">%data%</a>';

var HTMLquoteStart = '<div class="quote-entry"></div>';
var HTMLquoteText = '<p>%data%</p>';
var HTMLquoteAuthor = '<span>%data%</span>';
var HTMLsoundCloud = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/104735681&amp;color=00aabb&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';

var HTMLlanguageStart = '<div id="canvas-holder" class="column col-3"><canvas id="chart-area" width="100%" height="100%"></div><div id="canvas-holder2" class="column col-3"><canvas id="chart-area2" width="100%" height="100%"></div><div class="column col-6"><div class="wordpress column col-5"><img src="images/wordpress.png" width="90%"></div><div class="opencart column col-5"><img src="images/opencart.png" width="90%"></div><h4>The Question Remains: Which Platform? >>></h4></div>';
var HTMLchartTitle = '<h4>%data%</h4>';

var HTMLbackTop = '<a class="top" href="#top">Back to top ^</a>';

var internationalizeButton = '<button>Not in the UK? Let\'s Go Global ></button>';
var googleMap = '<div id="map"></div>';

var HTMLfooter = '<a href="%url%" target="blank"><img src="%image%"></a><p class="white-text">Designed by %data% | Developed with Udacity</p>';


/* Internationize Button */

/*
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
}); 
*/


/* Click locations */

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  /* everytime page is clicked we create these two new variables*/
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

 //Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

 //Vanilla JS way to listen for resizing of the window
 //and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});