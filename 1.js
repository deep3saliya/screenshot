// Function to take a screenshot of the page
function takeScreenshot() {
    // Using html2canvas to capture the screen
    html2canvas(document.body).then(function(canvas) {
        // Convert the canvas to an image URL
        let img = canvas.toDataURL("image/png");
        // Set the src of the image tag to display the screenshot
        document.getElementById("screenshotImage").src = img;
        // Show the screenshot section
        document.getElementById("screenshot").style.display = "block";
    });
}

// Optional: Function to automatically take a screenshot after a certain time
setTimeout(takeScreenshot, 5000);  // Take a screenshot 5 seconds after page load
