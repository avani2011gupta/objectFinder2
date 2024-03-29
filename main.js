status = "";

function setup()
{
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    canvas.position(490, 270);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    name_of_object = document.getElementById("objectName").value;
}

function modelLoaded()
{
    console.log("Model is loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
}