var toggle =  document.getElementById("toggle")
var dashboard = document.querySelector(".dashboard-nav-left")
var link = document.querySelectorAll(".dashboard-nav-left ul li a")



// link span
var linkSpan = document.querySelectorAll(".link-span");
var linkLi   = document.querySelectorAll(".dashboard-nav-left ul li .main-menu") 

for (let a = 0; a < linkLi.length; a++) {
	
	linkLi[a].addEventListener("mouseover", function(){
		for (let i = 0; i < linkSpan.length; i++) {
			if(linkSpan[i].innerHTML == "&gt;"){
				linkSpan[a].innerHTML = "˅"
			}
		}
	})

	linkLi[a].addEventListener("mouseout", function(){
		for (let i = 0; i < linkSpan.length; i++) {
			if(linkSpan[i].innerHTML == "˅"){
				linkSpan[a].innerHTML = "&gt;"
			}	
		}
	})
	
}

toggle.addEventListener("click", function(){
	if (dashboard.style.opacity == 0) {
		dashboard.style.opacity = "1";
		dashboard.style.width = "220px";
		dashboard.style.height = "100%";
		for (let i = 0; i < link.length; i++) {
			if(link[i].style.display == "inline"){
				link[i].style.display = "none"
			}else{
				link[i].style.display = "inline"
			}
		}
	}else{
		dashboard.style.opacity = "0";
		dashboard.style.width = "0%";
		dashboard.style.height = "0vh";
		for (let i = 0; i < link.length; i++) {
			if(link[i].style.display == "none"){
				link[i].style.display = "inline"
			}else{
				link[i].style.display = "none";
			}
		}
	}
})

// preloader functionality
document.onreadystatechange = function() {
	var state = document.readyState;
	if (state == 'interactive'){
		document.getElementById("content").style.visibility = "hidden";
	}
	else if (state == 'complete'){
		setTimeout(function(){
			document.getElementById("loader").style.visibility = "hidden";
			document.getElementById("content").style.visibility = "visible";
		}, 1000)
	}
}