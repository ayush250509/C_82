var mouseEvent="Empty";
var last_position_of_x, last_position_of_y

canvas = document.getElementById('my Canvas');
ctx =  canvas.getcontext("2d");

color = "black";
width_of_the_line = 1;
canvas.addEventlistner("mousedown",my_mousedown);
function my_mousedown(e)

color = document.getElementById("color").value
width_of_the_line = document.getElementById("width_of_the_line").value


mouseEvent = "mousedown";

canvas.addEventlistner("mousemove", my_mousemove);
function my_mousemove(e)

current_position_of_mouse_x = e.clientX - canvas.offsetLeft
current_position_of_mouse_y = e.clientY - cnavas. offsetTop

if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx = stokestyle = color;
    ctx.lineWidth = width_of_the_line


}

