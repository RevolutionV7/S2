document.addEventListener('DOMContentLoaded', function() {
  var headerLinks = document.querySelectorAll('.header__link');
  var footerLinks = document.querySelectorAll('.footer__link');
  var headerLogo = document.querySelector('.header__logo');
  var images = document.getElementsByTagName('img');
  var opImages = document.querySelectorAll('.op__img');

  function scaleElement(element) {
    element.style.transform = 'scale(1.2)';
  }

  function resetScaleElement(element) {
    element.style.transform = 'scale(1)';
  }

  function animateOnLoad(element) {
    element.classList.add('animate-on-load');
  }

  headerLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      scaleElement(this);
    });

    link.addEventListener('mouseout', function() {
      resetScaleElement(this);
    });

    animateOnLoad(link);
  });

  footerLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      scaleElement(this);
    });

    link.addEventListener('mouseout', function() {
      resetScaleElement(this);
    });

    animateOnLoad(link);
  });

  headerLogo.addEventListener('mouseover', function() {
    scaleElement(this);
  });

  headerLogo.addEventListener('mouseout', function() {
    resetScaleElement(this);
  });

  animateOnLoad(headerLogo);

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
      console.log('Клік на картинку');
    });

    animateOnLoad(images[i]);
  }

  opImages.forEach(function(image) {
    image.addEventListener('mouseover', function() {
      scaleElement(this);
    });

    image.addEventListener('mouseout', function() {
      resetScaleElement(this);
    });

    animateOnLoad(image);
  });

  headerLogo.classList.add('blink-animation');

  // Додати привітання лише для index.html
  if (window.location.pathname === '/index.html') {
    var greetingElement = document.createElement('div');
    greetingElement.innerHTML = '<h1>Привіт! Ласкаво просимо на наш веб-сайт!</h1>';
    greetingElement.classList.add('greeting', 'popup');

    // Додати кнопку закриття
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Закрити';
    closeButton.classList.add('close-button');

    // Функція для закриття попап вікна привітання
    function closeGreeting() {
      greetingElement.style.display = 'none';
    }

    closeButton.addEventListener('click', closeGreeting);

    // Додати кнопку закриття до привітання
    greetingElement.appendChild(closeButton);

    document.body.appendChild(greetingElement);
  }
});
