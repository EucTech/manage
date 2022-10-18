$('.alltest').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

const navlinks = document.querySelector('.navlink')
const navlinksEl = document.querySelectorAll('.navlink a')
const navOpen = document.querySelector('.open')
const navClose = document.querySelector('.close')

function openNav(){
  navlinks.style.top = "40%";
  navOpen.style.display = "none"
  navClose.style.display = "block"
}

function closeNav(){
  navlinks.style.top = "-40%";
  navOpen.style.display = "block"
  navClose.style.display = "none"
}

navlinksEl.forEach(navLink => {
  navLink.addEventListener('click', function(){
    closeNav()
  })
})