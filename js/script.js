window.addEventListener('load', function() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Change background color to the random color
    document.body.style.backgroundColor = randomColor;

    // Show a popup alert with a welcome message
    alert('Welcome to Dante\'s Guide to Everything!');
});