/* ALL CREDIT FOR THIS ALGORITHM GOES TO:::
 * http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
*/
var calcDist = (coordA, coordB) => {
  if (coordB === null) {
    return 'Somewhere nearby';
  }

  // Helper function for converting coords to radians
  Number.prototype.toRad = function() {
   return this * Math.PI / 180;
  }

  // Helper function to round to two decimals
  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  var lat1 = coordA[0];
  var lat2 = coordB.coordinates[0];
  var lon1 = coordA[1];
  var lon2 = coordB.coordinates[1];

  var R = 6371; // km
  var x1 = lat2-lat1;
  var dLat = x1.toRad();
  var x2 = lon2-lon1;
  var dLon = x2.toRad();
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // distance is in km, let's convert it to feet
  var distanceInFeet = d * 3280.84; // 1km = 3280.84 feet
  return round(distanceInFeet, 2) + ' feet away';
};

var calcTime = (timeA, timeB) => {
  /*
  // Turn timeTweetPostedAgo into seconds, minutes, hours, days, or years
        var rawTime = Int(timeTweetPostedAgo)
        var timeAgo: Int = 0
        var timeChar = ""

        rawTime = rawTime * (-1)

        // Figure out time ago
        if (rawTime <= 60) { // SECONDS
            timeAgo = rawTime
            timeChar = "s"
        } else if ((rawTime/60) <= 60) { // MINUTES
            timeAgo = rawTime/60
            timeChar = "m"
        } else if (rawTime/60/60 <= 24) { // HOURS
            timeAgo = rawTime/60/60
            timeChar = "h"
        } else if (rawTime/60/60/24 <= 365) { // DAYS
            timeAgo = rawTime/60/60/24
            timeChar = "d"
        } else if (rawTime/(60/60/24/365) <= 1) { // ROUGH ESTIMATE OF YEARS
            timeAgo = rawTime/60/60/24/365
            timeChar = "y"
        }

        return "\(timeAgo)\(timeChar)"
  */
}

module.exports.calcDist = calcDist;
module.exports.calcTime = calcTime;
