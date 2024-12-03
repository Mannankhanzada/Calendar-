
	var moveDiv = document.getElementById('movediv');
	window.onmousemove = function (e) {
    var x = e.pageX,
    	y = e.pageY;
    moveDiv.style.top = (y + -120) + 'px';
    moveDiv.style.left = (x + -60) + 'px';
};
