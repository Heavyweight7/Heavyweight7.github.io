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

//display current state
function checkState()
{
	var user = getCookie("username");
	document.getElementById("demo2").innerHTML = user;
}


//store progress in document.cookie username

function checkMyCookie()
{
	//document.getElementById("demo").innerHTML = "in checkCookie";
	var user = getCookie("username");
	//document.getElementById("demo").innerHTML = "user set";
	switch (user)
	{
	case "":
	user = "state 1";
	setCookie("username", user, 1);
	break;
	//finish this
	default:
	alert("default");
	}
	
	
	//example code
	/*if (user != "") 
	{
		document.getElementById("demo").innerHTML = "in if";
        alert("Welcome again " + user);
    } 
	else 
	{
		document.getElementById("demo").innerHTML = "in else";
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) 
		{
            setCookie("username", user, 1);
        }
	}*/
	
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
		while (c.charAt(0) == '')
		{
			c = c.subString(1);
		}
		if(c.indexOf(name) == 0)
		{
			return c.substring(name.lenght, c.lenght);
		}
	}
	return "";
}







