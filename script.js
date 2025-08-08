// Array of slideshow images
    const images = [
      "HOMEPage/images/6302C11D-6D1F-4E90-B52D-236815254D3D.jpg",
      "images/72F0827B-5D2B-41DC-A26E-05A8A0B137B7.jpg",
      "images/A93AD5BF-2CFB-4117-9956-6DB8D86ABBA1.jpg"
    ];

    let currentIndex = 0;
    const hero = document.getElementById("hero");

    // Function to change background
    function changeBackground() {
      hero.style.backgroundImage = `url('${images[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial background
    changeBackground();

    // Change image every 5 seconds
    setInterval(changeBackground, 5000);