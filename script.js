$(document).ready(function() {
  const body = $('body');
  const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];

  setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      body.css('background-image', `url(${randomImage})`);
  }, 5000);

  // Add animation to the navigation menu
  $('nav a').hover(
      function() {
          $(this).css('color', '#ffdd57');
      }, function() {
          $(this).css('color', '#fff');
      }
  );

  // Add animation to the sections
  $('section').hover(
      function() {
          $(this).addClass('animate__pulse');
      }, function() {
          $(this).removeClass('animate__pulse');
      }
  );
});
