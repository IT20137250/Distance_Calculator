This sophisticated web application has been meticulously developed using a powerful combination 
of HTML, CSS, and JavaScript (JS) technologies. Its primary mission is to empower parents with 
a seamless tool for precisely calculating the distances to nearby schools, aiding them in making 
informed decisions regarding their children's first-year admissions.
Users initiate the journey by entering their home address into the designated input field. The 
application seamlessly guides them through this initial step. Upon clicking the "Search" button, 
the application harnesses the robust Google Maps Geocoder service. This service swiftly and 
accurately retrieves the latitude and longitude coordinates corresponding to the provided home 
address. These coordinates serve as the foundation for precise distance calculations. Users have 
the flexibility to explore different school options. They can effortlessly input the address of their 
preferred school and trigger the search process once more. Upon clicking the search button for the 
school address, the application once again leverages the Google Maps Geocoder service. This time, 
it retrieves the latitude and longitude coordinates pinpointing the exact location of the selected 
school. With both the home and school addresses now secured, users can calculate the precise 
distance between the two locations. Upon clicking the "Calculate" button, the application conducts 
intricate mathematical calculations to deliver accurate distance measurements in kilometres. To 
enhance the user experience, the application seamlessly integrates with Google Maps, offering an 
interactive map interface. Here, the user's home is represented as a distinct green marker, while 
the chosen school is marked with a distinctive blue icon. Additionally, the application visually 
depicts a circular radius on the map, ensuring users can visualize the proximity between the two 
locations with ease. In addition to the immediate distance calculation, the application goes the 
extra mile by providing a comprehensive list of nearby schools around Colombo. These schools 
are depicted as vibrant red markers on the map, further assisting parents in exploring their options.

<b>HTML Structure:</b>
  • Creating the basic home interface.</br>
  • Including external libraries such as Bootstrap and Font Awesome for styling and 
    functionality.</br>
  • Adding a script tag to initialize the Google Maps API with an API key.</br>

Form Inputs:
  • Creating form fields for user input, including text input fields for the home address and 
    school address, a button to search for addresses, and input fields to display latitude and 
    longitude.
  • A "Calculate" button is provided to compute the distance between the addresses.

Google Maps Integration:
  • The 'initMap' function initializes a Google Map, sets its center and zoom level, and creates 
    the map object.
  • Markers are added to the map for various school locations, with different icons.
  • The 'addMarker' function adds markers to the map.
  • A blue marker represents the school address, and a green marker represents the user's home 
    address.

Geocoding:
  • Geocoding is used to convert user-entered addresses into latitude and longitude 
    coordinates.
  • The 'geocodeHomeAddress' and 'geocodeSchoolAddress' functions perform geocoding for 
    home and school addresses, respectively
  • Using the Google Maps Geocoder service to perform the geocoding.

Distance Calculation:
  • The 'useCoordinatesClcDis' function calculates the distance between the home and school 
    using the Haversine formula based on the latitude and longitude coordinates.
  • The calculated distance is displayed in kilometers and updated in an input field.
  • Creating a haversine_formula function to calculate the straight-line distance between two 
    sets of latitude and longitude coordinates using the Haversine formula.

Marker Removal and Line Drawing:
  • The 'deleteMarkers' function removes all markers from the map.
  • The 'drawLine' function draws a line between the user's home address and the school 
    address on the map.

Table Generation:
  • A table is dynamically generated to display the distances between the user's home address 
    and various school addresses.
  • The table includes columns for school names and distances.

