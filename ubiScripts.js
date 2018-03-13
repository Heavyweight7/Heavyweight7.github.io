function checkIfDone()
{
	/*document.addEventListener("click", function(){
	document.getElementById("demo2").innerHTML = "jhfhjfd";
	});*/
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("new");
	btn.appendChild(t);
	document.body.appendChild(btn);
	var elm = document.getElementById("button2");
	elm.parentNode.removeChild(elm);
	
}

function myFunction()
{
	document.getElementById("demo").innerHTML = "asdf";
}

function newPage()
{
	window.location.href = "http://heavyweight7.github.io/ubiWaiting";
}

//TODO: check if new user has a cookie, if yes check value of that cookie and skip to a specified place 
//in the code based on that value, if no then create new cookie. also update cookie each time 
//the player does something important.

//store progress in document.cookie username

function checkMyCookie()
{
	var user = getCookie("username");
	
	switch (user)
	{
	case "":
	user = prompt("enter:", "");
	setCookie("username", user, 10);
	break;
	//finish this
	default:
	alert("default");
	}
	
	
}

function setCookie(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
}

function getCookie(cname)
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == '')//infinite loop
		{
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0)
		{
			return c.substring(name.lenght, c.lenght);
		}
	}
	return "";
}







