var color = rgb(152, 251, 152); // global variable declared to color of background for all body tags

/**
 * making width and height of tags with "profile" id to 660px (enlarged size of image)
 * changing text of tags with "eyes" id to onclick text
 * changing size of text for tags with "eyes" id to onclick font size
 */
function profileBig() {
    document.getElementById("profile").width = "660";
    document.getElementById("profile").height = "660";
    document.getElementById("eyes").innerHTML = "My eyes are open, trust me!";
    document.getElementById("eyes").style.fontSize = "50px";
}

/**
 * making width and height of tags with "profile" id to original size of image
 * changing text of tags with "eyes" id to original text
 * changing size of text for tags with "eyes" id to original size
 */
function profileSmall() {
    document.getElementById("profile").width = "320";
    document.getElementById("profile").height = "320";
    document.getElementById("eyes").innerHTML = "Click on my Profile Picture to zoom in";
    document.getElementById("eyes").style.fontSize = "24px";
}

/**
 * random generates random int between 0-9
 * colors is an array of colors to be used for a pages background color
 * while loop ensures following color isn't the same as previous
 * global variable color set to index of random color
 * setting background value to all tags with the "all" id
 */
function backColor() {
    let random = Math.floor(Math.random() * 10);
    let colors = new Array("rgb(216,191,216)", "rgb(176,224,230)", "rgb(152, 251, 152)", "rgb(255,228,181)", "rgb(255,192,203)", "rgb(127,255,212)", "rgb(143,188,143)", "rgb(224,255,255)", "rgb(238,130,238)", "rgb(255,250,205)");
    while (colors[random] == color) {
        random = Math.floor(Math.random() * 10);
    }
    console.log("Random color index " + random);
    color = colors[random];
    document.getElementById("all").style.background = color;
    console.log("RGB value of color chosen: " + colors[random]);
}