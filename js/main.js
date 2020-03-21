/*document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const modalDialog = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target != modalDialog && event.target == modal) {
      modal.classList.remove('modal--visible');
    }
  });
});*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  
      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 25)
  bullets.css('left', prev.width() + 25)

  new WOW().init();

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      userName: {
        required: "Обязательно укажите Имя",
        minlength: "Имя должно быть не менее двух букв"
      },
      userPhone: "Телефон обязателен для ввода",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
      userQuestion: {
        required: "Обязательно напишите свой вопрос",
        minlength: "Вопрос должен состоять из десяти символов и более"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
    },
    messages: {
      userName: {
        required: "Обязательно укажите Имя",
        minlength: "Имя должно быть не менее двух букв"
      },
      userPhone: "Телефон обязателен для ввода",
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: {
        required: true,
        minlength: 10
      },
    },
    messages: {
      userName: {
        required: "Обязательно укажите Имя",
        minlength: "Имя должно быть не менее двух букв"
      },
      userPhone: "Телефон обязателен для ввода",
      userQuestion: {
        required: "Обязательно напишите ваш вопрос",
        minlength: "Вопрос должен состоять из десяти символов и более"
      },
    }
  });



  $('[type="tel"]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

});

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
    });
      
    $('.scroll-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});