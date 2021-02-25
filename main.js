var mouseEvent="empty";
var last_posision_of_x,last_posision_of_y;
canvas=document.getElementById("myCanvas");
ctx = canvas.context("2d");
color_input_box = "black";
width_of_the_line_input_box = 2;

canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e) {
mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e) {
mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e) {
current_position_of_mouse_x =e.clientX-canvas.offsetLeft;  
current_position_of_mouse_y =e.clientY-canvas.offsetTop; 
if(mouseEvent="mouseDown") {
    ctx.beginPath()
  ctx.strokeStyle = color_input_box;
  ctx.arc(200,200,40,0,2*Math.PI);
  ctx.stroke();
console.log("last_position_of_x_and_y");
console.log("x = "+last_posision_of_x+ "y ="+last_posision_of_y);
ctx.moveTo(last_posision_of_x,last_posision_of_y);
console.log("current_position_of_x_and_y");
console.log("x = "+current_position_of_mouse_x+ "y ="+current_position_of_mouse_y);
ctx.lineTo(current_posision_of_mouse_x,current_posision_of_mouse_y);
ctx.stroke();


} 
last_posision_of_x = current_posision_of_mouse_x;
last_posision_of_y = current_posision_of_mouse_y;
}

