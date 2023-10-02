// Straight Line distance calculation
function haversine_formula(mk1, mk2) {
  var R = 6371.071; // Radius of the Earth in km
  var rlat1 = mk1.position.lat() * (Math.PI / 180); // Convert degrees to radians
  var rlat2 = mk2.position.lat() * (Math.PI / 180); // Convert degrees to radians
  var difflat = rlat2 - rlat1; // Radian difference (latitudes)
  var difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180); // Radian difference (longitudes)

  var d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
        Math.cos(rlat1) *
        Math.cos(rlat2) *
        Math.sin(difflon / 2) *
        Math.sin(difflon / 2)
      )
    );
  return d;
}

function initMap() {
  // Add Markers to Array
  MarkerArray = [
    // {location:{lat: 6.903940767171592, lng:79.95618041534257},imageIcon: "assets/blue-dot.png",  content:`<span class="badge text-bg-success fs-6"><strong>Rahula Balika College</strong></span>`},
    {
      location: { lat: 6.9049464, lng: 79.861789 },
      // imageIcon: 'assets/blue-dot.png',
      content: `Rahula Balika College`,
    },
    {
      location: { lat: 6.94324919944416, lng: 79.86230695129669 },
      content: `Kotahena Central College,Colombo 13`,
    },
    {
      location: { lat: 6.943078700407462, lng: 79.86011279146048 },
      content: `Vivekananda College,Colombo 13`,
    },
    {
      location: { lat: 6.883878949520831, lng: 79.86660003905445 },
      content: `Lumbini College, Colombo 05`,
    },
    {
      location: { lat: 6.926597051968221, lng: 79.85093789577142 },
      content: `Defence Services School, Colombo`,
    },
    {
      location: { lat: 6.933877045607731, lng: 80.00185358340626 },
      content: `Bomiriya National School,Bomiriya`,
    },
    {
      location: { lat: 6.9035569713743055, lng: 79.92418790423054 },
      content: `Sri Subhuthi National School,Battaramulla`,
    },
    {
      location: { lat: 6.9364060124000675, lng: 79.92035072596697 },
      content: `Sri Rajasinghe Central College,Mulleriyawa`,
    },
    {
      location: { lat: 6.842993705229577, lng: 79.95238226026314 },
      content: `Dharmapala Vidyalaya,Pannipitiya`,
    },
    {
      location: { lat: 6.9058136283215, lng: 80.08704279242565 },
      content: `Rajasinghe Central College,Hanwella`,
    },
    {
      location: { lat: 6.957549590674209, lng: 80.21686401957224 },
      content: `Seethawaka National School,Avissawella`,
    },
    {
      location: { lat: 6.824254315043034, lng: 80.0391787159896 },
      content: `Mahinda Rajapakse National School,Homagama`,
    },
    {
      location: { lat: 6.800123382532309, lng: 79.92228781674437 },
      content: `Piliyandala Central College,Piliyandala`,
    },
    {
      location: { lat: 6.920349259142749, lng: 79.87575556277153 },
      content: `All Saint's College,Colombo 10`,
    },
    {
      location: { lat: 6.908117770663221, lng: 80.00475977811347 },
      content: `Karathota Sri Somananda Maha Vidyalaya,Kaduwela`,
    },
    {
      location: { lat: 6.882937422291497, lng: 79.95999138181041 },
      content: `Vidyaraja Maha Vidyalaya,Hokandara`,
    },
    {
      location: { lat: 6.889910165384611, lng: 79.93296212413945 },
      content: `Vidyawardhana Maha Vidyalaya,Battaramulla`,
    },
    {
      location: { lat: 6.9256334577506955, lng: 79.89673814927812 },
      content: `Henry Olcott Maha Vidyalaya,Kolonnawa`,
    },
    {
      location: { lat: 6.912266861257383, lng: 79.89414431859392 },
      content: `Hewavitharana Maha Vidyalaya,Rajagiriya`,
    },
    {
      location: { lat: 6.797196330789229, lng: 79.92554589900028 },
      content: `Sir John Kothalawala Maha Vidyalaya,Piliyandala`,
    },
    {
      location: { lat: 6.8397482645687315, lng: 80.00356516092222 },
      content: `President's College,Homagama`,
    },
    {
      location: { lat: 6.863455409512436, lng: 80.02580050694856 },
      content: `Sri Parakrama Maha Vidyalaya,Homagama`,
    },
    {
      location: { lat: 6.874644284169301, lng: 79.99371158790946 },
      content: `Mahamathya Vidyalaya Athurugiriya`,
    },
    {
      location: { lat: 6.926447069237112, lng: 79.86983192929677 },
      content: `Ananda Balika Vidyalaya,Colombo 10`,
    },
    {
      location: { lat: 6.9236866527516465, lng: 79.87238873393603 },
      content: `Gothami Balika Vidyalaya,Colombo 10`,
    },
    {
      location: { lat: 6.891904423930206, lng: 79.8600478781133 },
      content: `Visakha Vidyalaya,Colombo 05`,
    },
    {
      location: { lat: 6.910502220112008, lng: 79.88294852044243 },
      content: `Devi Balika Vidyalaya,Colombo 08`,
    },
    {
      location: { lat: 6.886366315140501, lng: 79.85818530935077 },
      content: `St. Pauls Girls School Milagiriya,Colombo 4`,
    },
    {
      location: { lat: 6.897060221376931, lng: 79.86361665297498 },
      content: `Sirimavo Bandaranaike Vidyalaya,Colombo 07`,
    },
    {
      location: { lat: 6.881856580444247, lng: 79.86164855907404 },
      content: `Muslim Ladies College,Colombo 04`,
    },
    {
      location: { lat: 6.884107721817914, lng: 79.86083303023852 },
      content: `Ramanathan Hindu Ladies College,Colombo 04`,
    },
    {
      location: { lat: 6.872195060812544, lng: 79.88490246702172 },
      content: `Anula Vidyalaya,Nugegoda`,
    },
    {
      location: { lat: 6.93359640322904, lng: 79.89233985537734 },
      content: `Kolonnawa Balika Vidyalaya,Kolonnawa`,
    },
    {
      location: { lat: 6.850762848715996, lng: 79.86439393023824 },
      content: `Presbyterian Girls' National School,Dehiwala`,
    },
    {
      location: { lat: 6.785441044690074, lng: 79.88357275907318 },
      content: `Princess of Wales' College, Moratuwa`,
    },
    {
      location: { lat: 6.9297126516551035, lng: 79.87880592746122 },
      content: `Anuruddha Balika Maha Vidyalaya,Colombo 09`,
    },
    {
      location: { lat: 6.919658060856693, lng: 79.8676280069491 },
      content: `Presbyterian Balika Maha Vidyalaya,Colombo 10`,
    },
    {
      location: { lat: 6.919051014001746, lng: 79.87513398208748 },
      content: `Rathnawali Balika Maha Vidyalaya,Colombo 08`,
    },
    {
      location: { lat: 6.935413803674382, lng: 79.87284730140347 },
      content: `Hemamali Balika Maha Vidyalaya,Colombo 10`,
    },
    {
      location: { lat: 6.933631105480852, lng: 79.86370103023899 },
      content: `Al Hidhaya Muslim Maha Vidyalaya,Colombo 10`,
    },
    {
      location: { lat: 6.9272142064060045, lng: 79.86873085722584 },
      content: `Clifton Balika Maha Vidyalaya,Colombo 09`,
    },
    {
      location: { lat: 6.909270158838445, lng: 79.97144937071917 },
      content: `Sri Yasodara Maha Vidyalaya,Malambe`,
    },
    {
      location: { lat: 6.864582489359641, lng: 79.9969258860608 },
      content: `Gunasekara Vidyalaya, Athurugiriya`,
    },
    {
      location: { lat: 6.893461341928215, lng: 79.9728747286827 },
      content: `WP/Jaya/ Kahanthota Primary School`,
    },
    {
      location: { lat: 6.884972020035518, lng: 79.96848429999824 },
      content: `Rathna Kanishta Vidyalaya`,
    },
    {
      location: { lat: 6.885005296143684, lng: 79.95113465864186 },
      content: `Vidyaloka Vidyalaya, Hokandara`,
    },
    {
      location: { lat: 6.8670094638759975, lng: 79.94036639238031 },
      content: `Prime Minister's College, Thalawathugoda`,
    },
    {
      location: { lat: 6.8656419812115095, lng: 79.95829773894779 },
      content: `Kottawa North Dharmapala Vidyalaya`,
    },
    {
      location: { lat: 6.90146929335674, lng: 79.93661143874454 },
      content: `Sri Sudarshana Vidyalaya, Batapotha`,
    },
    {
      location: { lat: 6.905581721072124, lng: 79.92483278424424 },
      content: `Lankasabha Vidyalaya, Battaramulla`,
    },
    {
      location: { lat: 6.913019396888181, lng: 79.92958849665686 },
      content: `M.D.H.Jayawardana Vidyalaya`,
    },
    {
      location: { lat: 6.913715859212761, lng: 79.94710979860767 },
      content: `Thalahena Maha Vidyalaya`,
    },
    {
      location: { lat: 6.915581907344374, lng: 79.91711663922908 },
      content: `Kalapaluwawa Sri Siddartta Mahaviddiyalaya`,
    },
    {
      location: { lat: 6.930371139337066, lng: 79.98394437491265 },
      content: `Kothalawala Central College`,
    },
    {
      location: { lat: 6.936332971057721, lng: 79.9615895087169 },
      content: `Welivita St. Mary's College`,
    },
    {
      location: { lat: 6.9322868902313335, lng: 79.9756665739381 },
      content: `Hewagama Kanishta Vidyalaya`,
    },
    {
      location: { lat: 6.889526071019088, lng: 79.99731611171664 },
      content: `Oruwala Vidyalaya`,
    },
    {
      location: { lat: 6.884338513506311, lng: 79.98098930049626 },
      content: `Pore Kanistha Vidyalaya`,
    },
    {
      location: { lat: 6.937223654933803, lng: 80.00831539960527 },
      content: `Ihala Bomiriya Primary School`,
    },
    {
      location: { lat: 6.934688797305342, lng: 79.99359643017505 },
      content: `Munidasa Kumaratunga Vidyalaya`,
    },
    {
      location: { lat: 6.9236775571428515, lng: 80.00096714156912 },
      content: `Sri Seelalankara Vidyalaya`,
    },
  ];

  // Main Map View Config
  var options = {
    center: { lat: 6.9061, lng: 79.9696 },
    zoom: 14,
  };

  //New Map
  map = new google.maps.Map(document.getElementById('map'), options);

  // // Listen for click on map location - Event Listner
  // google.maps.event.addListener(map, "click", (event) => {
  //     // Add Marker
  //     addMarker({location:event.latLng});
  // })
}

mapArray = [];
distanceArray = [];

var latitude; // Declare a variable to store the latitude value
var longitude; // Declare a variable to store the longitude value

function geocodeHomeAddress() {
  console.log('geocodeHomeAddress');
  var address = document.getElementById('searchmap').value;
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat(); // Store the latitude value in the global variable
      longitude = results[0].geometry.location.lng(); // Store the longitude value in the global variable
      document.getElementById('lat').value = latitude;
      document.getElementById('lng').value = longitude;
      console.log('latitude:', latitude, 'longitude:', longitude);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// Function to use the latitude and longitude values outside the geocodeHomeAddress function

console.log('Longitude outside the function:', longitude);

// Function to use the longitude value outside the geocodeHomeAddress function
function useLongitude() {
  console.log('Longitude outside the function:', longitude);
}

console.log('long lat out of**', longitude);

// Geocode School Address
var scllatitude; // Declare a variable to store the school latitude value
var scllongitude; // Declare a variable to store the school longitude value

function geocodeSchoolAddress() {
  console.log('geocodeSchoolAddress');
  var address = document.getElementById('searchschooladdress').value;
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      scllatitude = results[0].geometry.location.lat();
      scllongitude = results[0].geometry.location.lng();
      document.getElementById('scllat').value = scllatitude;
      document.getElementById('scllng').value = scllongitude;
      console.log('scllatitude:', scllatitude, 'scllongitude:', scllongitude);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// Function to use the school latitude and longitude values outside the geocodeSchoolAddress function

function useCoordinatesClcDis() {
  console.log('1st place Latitude:', latitude);
  console.log('1st place Longitude:', longitude);
  console.log('School Latitude:', scllatitude);
  console.log('School Longitude:', scllongitude);

  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(scllatitude - latitude);
  const dLon = deg2rad(scllongitude - longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(latitude)) *
    Math.cos(deg2rad(scllatitude)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  const roundedDistance = parseFloat(distance.toFixed(2)); // Round the distance to two decimal places
  console.log('Distance:', roundedDistance, 'km');
  const formattedDistance = roundedDistance.toFixed(2); // Add ' km' to the value
  document.getElementById('distance').value = formattedDistance; // Update the school longitude input field

  return formattedDistance;
}


function deg2rad(deg) {
  return deg * (Math.PI / 180);
}


// Add Marker
function addMarker(property) {
  const marker = new google.maps.Marker({
    position: property.location,
    map: map,
    draggable: true,
  });

  // Check for custom Icon
  if (property.imageIcon) {
    // set image icon
    marker.setIcon(property.imageIcon);
  }

  if (property.content) {
    const detailWindow = new google.maps.InfoWindow({
      content: property.content,
    });

    marker.addListener('click', () => {
      detailWindow.open(map, marker);
    });
  }

  // google.maps.event.addListener(marker, 'dragend', function (evt) {
  //     document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
  // });

  google.maps.event.addListener(marker, 'position_changed', function () {
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    $('#lat').val(lat);
    $('#lng').val(lng);
    console.log(marker.getPosition().lat());
  });

  mapArray.push(marker);
}

// Draw the line
function drawLine(startLocation, endLocation) {
  // Draw a line showing the straight distance between the markers
  var line = new google.maps.Polyline({
    path: [startLocation, endLocation],
    map: map,
    strokeWeight: 1,
  });
}

//get text field data through DOM and execute the marker placing and line drawing functions.
function getCoordinates() {
  deleteMarkers();
  // createTable ();
  var cellData = '';
  var userLng = document.getElementById('lng').value;
  var userLat = document.getElementById('lat').value;
  console.log(MarkerArray.length);
  MarkerArray.unshift({
    location: { lat: parseFloat(userLat), lng: parseFloat(userLng) },
    imageIcon: 'assets/green-dot.png',
    content: `Home Address`,
  });
  console.log(MarkerArray.length);
  // Add a blue dot marker for the school address
  addMarker({
    location: { lat: scllatitude, lng: scllongitude },
    imageIcon: 'assets/blue-dot.png', // Blue dot image
    content: 'School Address', // Set the content for the info window
  });

  // loop through markers array and execute marker placing and line drawing functions
  for (let i = 0; i < MarkerArray.length; i++) {
    addMarker(MarkerArray[i]);
    drawLine(MarkerArray[0].location, MarkerArray[i].location);
    // console.log(mapArray[i]);

    if (i >= 1) {
      var distance = haversine_formula(mapArray[0], mapArray[i]);
      // console.log(distance);
      // document.getElementById('msg').innerHTML += "Distance between Home Address to " +MarkerArray[i].content+ " is: "  + distance.toFixed(2) + " km."+"<br>"+"<br>";

      // Push the Location details and calculated distance to the distance array one by one.
      distanceArray.push({
        school: MarkerArray[i].content,
        distance: distance.toFixed(2),
      });

      // Sort The array in ascending order.
      distanceArray.sort((a, b) => {
        return a.distance - b.distance;
      });

      // cellData += "<tr><td>" +MarkerArray[i].content+ "</td> <td>" +distance.toFixed(2)+ " km </td></tr>";
    }

    if (i == 1) {
      // Add the radius circle for the inserted address.
      const addressCircle = new google.maps.Circle({
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.35,
        map,
        center: MarkerArray[0].location,
        radius: distance * 1000,
      });
    }
  }

  // Table Header Code Start
  myTable = document.querySelector('#table');
  let headers = ['School', 'Distance'];
  let table = document.createElement('table');
  table.setAttribute('class', 'table table-bordered ');
  myTable.setAttribute('class', 'form-styles');
  let headerRow = document.createElement('thead');

  headers.forEach((headerText) => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  // Add user's school address and calculated distance to the beginning of the table
  let userSchool = document.getElementById('searchschooladdress').value; // Get the user's school address
  let userDistance = document.getElementById('distance').value; // Get the calculated distance

  if (userSchool && userDistance) {
    let userRow = document.createElement('tr');
    let schoolCell = document.createElement('td');
    let distanceCell = document.createElement('td');

    let boldSchool = document.createElement('strong');
    boldSchool.style.fontSize = 'larger';
    boldSchool.style.color = 'red';
    boldSchool.appendChild(document.createTextNode(userSchool));

    let boldDistance = document.createElement('strong');
    boldDistance.style.fontSize = 'larger';
    boldDistance.style.color = 'red';
    boldDistance.appendChild(document.createTextNode(userDistance + ' km'));

    schoolCell.appendChild(boldSchool);
    distanceCell.appendChild(boldDistance);

    userRow.appendChild(schoolCell);
    userRow.appendChild(distanceCell);
    table.appendChild(userRow);
  }

  distanceArray.forEach((e) => {
    console.log(`${e} ${e.distance}`);
    cellData +=
      '<tr><td>' + e.school + '</td> <td>' + e.distance + ' km </td></tr>';
  });

  table.insertAdjacentHTML('beforeend', cellData);
  console.log(distanceArray.length);
  myTable.appendChild(table);
  var cellData = '';

  // Add Notice Alert
  outerAlertDiv = document.querySelector('#alert');
  innerAlterDiv = document.createElement('div');
  innerAlterDiv.setAttribute('class', 'alert alert-success');
  innerAlterDiv.setAttribute('role', 'alert');
  alterContent =
    '<div>' +
    'You can zoom in the map and drag and drop the <b>Green pointer (Home location)</b> if its not on the correct place and <b>submit again</b>. </div>';
  innerAlterDiv.insertAdjacentHTML('beforeend', alterContent);
  outerAlertDiv.appendChild(innerAlterDiv);

}

// Clear the map
function deleteMarkers() {
  var table = document.getElementById('table').children[0];
  var alertDiv = document.getElementById('alert').children[0];

  if (table) {
    table.remove();
  }

  if (alertDiv) {
    alertDiv.remove();
  }

  distanceArray = [];
  distance = null;
  mapArray = [];

  initMap();
  console.log('content deleted');
}
