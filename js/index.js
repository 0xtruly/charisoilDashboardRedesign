// $(document).ready(function(){

// 	$('#toggle').click(function(){

// 		if($('.dashboard-nav-left').css('display', 'block')){	
// 			$('.dashboard-nav-left').css('display', 'none')
			
// 		}else if($('.dashboard-nav-left').css('display', 'none')){
// 			$('.dashboard-nav-left').css('display', 'block')
			
// 		}
// 	});
// });

var toggle =  document.getElementById("toggle")
var dashboard = document.querySelector(".dashboard-nav-left")
var link = document.querySelectorAll(".dashboard-nav-left ul li a")

toggle.addEventListener("click", function(){
	if (dashboard.style.opacity == 0) {
		dashboard.style.opacity = "1";
		dashboard.style.width = "220px";
		dashboard.style.height = "100%";
		for (let i = 0; i < link.length; i++) {
			// alert(link[i].textContent)
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
			// alert(link[i].textContent)
			if(link[i].style.display == "none"){
				link[i].style.display = "inline"
			}else{
				link[i].style.display = "none";
			}
		}
	}
})