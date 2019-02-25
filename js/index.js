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

toggle.addEventListener("click", function(){
	if (dashboard.style.opacity == 0) {
		dashboard.style.opacity = "1"
		dashboard.style.width = "50%"
		dashboard.style.height = "100%"
	}else{
		dashboard.style.opacity = "0"
		dashboard.style.width = "0%"
		dashboard.style.height = "0%"
	}
})