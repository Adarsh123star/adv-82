var mouseEvent = "empty";


    canvas = document.getElementById('Canvasofmine');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }