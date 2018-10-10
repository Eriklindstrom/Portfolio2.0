function showDiv (clicked_id) {
	if(clicked_id == "Proj1") {
		var x = document.getElementById("Project1");
		if (x.style.display == "none") {
			x.style.display = "block";
		} else{
			x.style.display = "none";
		}
	}
	if(clicked_id == "Proj2") {
		var x = document.getElementById("Project2");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
}