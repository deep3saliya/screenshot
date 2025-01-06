// Get video and canvas elements
const video = document.getElementById('video');
const screenshotDiv = document.getElementById('screenshotCapture');
const photo = document.getElementById('photo');
const screenshotImage = document.getElementById('screenshotImage');

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    // Set the video source to the camera stream
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.log("Error accessing the camera: ", error);
  });

// Function to take a photo from the video feed
function takePhoto() {
    // Create a canvas element to capture the image from the video
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set the canvas size to the video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a data URL (image format)
    const imgData = canvas.toDataURL('image/png');

    // Display the captured image on the webpage
    photo.src = imgData;
    screenshotDiv.style.display = 'block'; // Show the image section
}

// Function to take a screenshot of the page
function takeScreenshot() {
    // Using html2canvas to capture the screen
    html2canvas(document.body).then(function(canvas) {
        // Convert the canvas to an image URL
        let img = canvas.toDataURL("image/png");
        // Set the src of the image tag to display the screenshot
        screenshotImage.src = img;
        // Show the screenshot section
        screenshotDiv.style.display = 'block';
    });
}

// Automatically take a photo and screenshot after 5 seconds
setTimeout(function() {
    takePhoto(); // Automatically capture a photo after 5 seconds
    takeScreenshot(); // Automatically take a screenshot after 5 seconds
}, 5000);  // 5000 milliseconds = 5 seconds
