var openBtn = document.getElementById("open-modal");
var modal = document.getElementById("show-modal");
var closeBtn = document.getElementById("closeBtn");

//Button that opens Modal
openBtn.addEventListener("click", function(){
	modal.style.display = "block";
});

// "X" Button that close Modal
closeBtn.addEventListener("click", function(){
	modal.style.display = "none";
});

//Close Modal clicking anywhere
window.addEventListener("click", function(e) {
	if(e.target === modal){
		modal.style.display = "none";
	}
});
