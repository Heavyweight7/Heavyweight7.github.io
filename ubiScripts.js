function checkIfDone()
{
	/*document.addEventListener("click", function(){
	document.getElementById("demo2").innerHTML = "jhfhjfd";
	});*/
	//document.getElementById("demo").innerHTML = "asdf";
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("new");
	btn.appendChild(t);
	document.body.appendChild(btn);
	var elm = document.getElementById("button2");
	elm.parentNode.removeChild(elm);
	
	
}

//TODO: create buttons that create buttons that create buttons
//or override the onclick event with a new one.
//NEW PLAN: switch cases out the ass. when button is pressed check state: do things and change button text. then change state.
//state is keept in localStorage
//long term timer is newDate = date + (i * time in seconds) 
function changeButton()
{
	if (typeof(Storage) !== "undefined")
	{
	switch (localStorage.getItem("lastname"))
	{
		case"state 1":
		//go to start
		document.getElementById("demo").innerHTML = "state 1";
		document.getElementById("new").innerHTML = "state 1";
		break;
		
		default:
		document.getElementById("demo").innerHTML = "default";
		document.getElementById("new").innerHTML = "default";
		changeStored("state 1");
		//go to start
	}
	}
	else
	{
	document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
	}

	
	//var t = document.createTextNode(text);
	
	//figure out how to change button text
}



function myFunction()
{
	document.getElementById("demo").innerHTML = "asdf";
}

function newPage()
{
	window.location.href = "http://heavyweight7.github.io/ubiWaiting";
}

//can make multiple cases do the same thing like so
//case 1:
//case 2:
//case 3: do things
//break;
function StateManager()
{
	//check what the current state is and move to the appropriate paige. only run in index.
	if (typeof(Storage) !== "undefined")
	{
	switch (localStorage.getItem("lastname"))
	{
		case"state 1":
		//go to start
		document.getElementById("demo").innerHTML = "state 1";
		break;
		
		default:

		//go to start
	}

	/*if (localStorage.getItem("lastname") == "state 1")
	{
	document.getElementById("demo").innerHTML = "state 1";
	}*/

	}
	else
	{
	document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

//TODO: check if new user has a cookie, if yes check value of that cookie and skip to a specified place 
//in the code based on that value, if no then create new cookie. also update cookie each time 
//the player does something important.
//jump to a new file instead

//TODO: check stored value, skip to new place based on stored value. otherwise created new stored value.
//also update stored value based on progress.


//display current state

function localStore()
{
	//document.getElementById("demo").innerHTML = "in local store";
	// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("demo2").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}


function testBtn()
{
	document.getElementById("demo").innerHTML = "testBtn";
}

function getStored()
{
	if (typeof(Storage) !== "undefined") {
    // Store
    //localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("demo2").innerHTML = localStorage.getItem("lastname");
	alert(localStorage.getItem("lastname"));
} else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function changeStored(newStore)
{
	if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname",  newStore);
    // Retrieve
    document.getElementById("demo2").innerHTML = localStorage.getItem("lastname");
	//alert(localStorage.getItem("lastname"));
} else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}



/*
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
	}
	
	
	
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
}*/







