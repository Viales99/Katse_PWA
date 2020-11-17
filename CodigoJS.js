
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

  $(document).ready(function() {
    var carousel = $("#carousel").featureCarousel({
      trackerSummation: false
      // include options like this:
      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
    });

    $("#but_prev").click(function () {
      carousel.prev();
    });
    $("#but_pause").click(function () {
      carousel.pause();
    });
    $("#but_start").click(function () {
      carousel.start();
    });
    $("#but_next").click(function () {
      carousel.next();
    });

  });
  