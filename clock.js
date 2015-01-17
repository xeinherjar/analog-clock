
var hour_hand = document.getElementById("hour-hand");
var min_hand = document.getElementById("min-hand");
var sec_hand  = document.getElementById("sec-hand");

// Update Hands
var update_hand = function(elem, value) {
  elem.style.transform = value;  
};

var tick = function() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  

  // Convert Hour from 24 to 12 hour format.
  if (h > 12) { h -= 12; }
  var deg_12 = function(val) {
    var val = ((360 / 12) * val);
    val = "rotate(" + val + "deg)";
    return val;
  };

  var deg_60 = function(val) {
    var val = ((360 / 60) * val);
    val = "rotate(" + val + "deg)";
    return val;
  };

  update_hand(hour_hand, deg_12(h));
  update_hand(min_hand,  deg_60(m));
  update_hand(sec_hand,  deg_60(s));
};

window.setInterval(tick, 1000);
