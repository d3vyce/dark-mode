//Script Cookies provide by
//https://www.w3schools.com/js/js_cookies.asp
//---------------------------------------------------------
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//---------------------------------------------------------

//Switch function
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  if (body.className == "light-mode") {
	setCookie("dark-mode", false, 365);
  } else {
	setCookie("dark-mode", true, 365);
  }
}

//onLoad check
function onLoadDarkMode() {
	var DarkModestatus=getCookie("dark-mode");
	if (DarkModestatus == "true") {
		var body = document.getElementById("body");
		var currentClass = body.className;
		body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
	}
}