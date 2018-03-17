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
//jump to a new file instead



//display current state

function editState()
{
	document.getElementById("demo").innerHTML = "user editState";
	//document.cookie = "setUserId=state 2";
	document.getElementById("demo").innerHTML = "cookie editState";
	var user = getCookie("username");
	document.getElementById("demo").innerHTML = "getCookie editState";
	user = "state 2";
	setCookie("username", user, 1);
	alert(user);
}

function checkState()
{
	document.getElementById("demo").innerHTML = "user checkState";
	var user = getCookie("username");
	//document.getElementById("demo").innerHTML = " ran getCookie";
	document.getElementById("demo2").innerHTML = user;
	alert("test" + user);
}


//store progress in document.cookie username

function checkMyCookie()
{
	document.getElementById("demo").innerHTML = "in checkCookie";
	var user = getCookie("username");
	//document.getElementById("demo").innerHTML = "user set";
	/*switch (user)
	{
	case "":
	user = "state 1";
	setCookie("username", user, 1);
	break;
	//finish this
	case "state 1":
	document.getElementById("demo").innerHTML = "state 1 checked";
	break;
	case "state 2":
	document.getElementById("demo").innerHTML = "state 2 checked";
	break;
	default:
	alert("default");
	}
	
	if (user == "state 1")
	{
		document.getElementById("demo").innerHTML = "state 1 if checked";
	}*/
	
	
	
	//example code
	if (user != "") 
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
		document.getElementById("demo").innerHTML = " in getCookie for";
		var c = ca[i];
		while (c.charAt(0) == '')
		{
			document.getElementById("demo").innerHTML = " in getCookie while1";
			c = c.subString(1);
		}
		if(c.indexOf(name) == 0)
		{
			document.getElementById("demo").innerHTML = " in getCookie if";
			return c.substring(name.lenght, c.lenght);
		}
	}
	//document.getElementById("demo").innerHTML = " in getCookie while";
	return "error";
}







