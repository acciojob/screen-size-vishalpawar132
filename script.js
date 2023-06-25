//your JS code here. If required.
 function updateSize() {
      // Get the window width and height
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      
      // Get the sizeText element
      var sizeText = document.getElementById('sizeText');
      
      // Update the size information
      sizeText.textContent = 'Width: ' + width + 'px, Height: ' + height + 'px';
    }

    // Call the updateSize function on window resize
    window.addEventListener('resize', updateSize);

    // Initial call to updateSize to display the initial window size
    updateSize();