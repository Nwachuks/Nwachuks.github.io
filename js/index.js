function slideImageRight() {
    const elems =  document.getElementsByClassName('work-flex');
    for(let i = 0; i < elems.length; i++) {
        if (!elems[i].classList.contains('d-none')) {
            currentCount = i;
        }
    }      
    if (currentCount < elems.length - 1) {
        elems[currentCount + 1].classList.remove('d-none');
        elems[currentCount].classList.add('d-none');
    }
}

function slideImageLeft() {
    const elems =  document.getElementsByClassName('work-flex');
    for(let i = 0; i < elems.length; i++) {
        if (!elems[i].classList.contains('d-none')) {
            currentCount = i;
        }
    }
    if (currentCount > 0) {
        elems[currentCount - 1].classList.remove('d-none');
        elems[currentCount].classList.add('d-none');
    }
}

const elem = document.querySelector('#about');

function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  
function run() {
    if (isInViewport(elem)) {
     elem.classList.add('show');
    }
}

window.addEventListener('load', run);
window.addEventListener('scroll', run);

$('.btn').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400);
    }
})
