function slideImageRight() {
    // Get all work elements
    const elems = document.getElementsByClassName('work-flex');
    // Find current visible work element without d-none
    for(let i = 0; i < elems.length; i++) {
        if (!elems[i].classList.contains('d-none')) {
            currentCount = i;
        }
    } 
    // If not last work element, manipulate element class list to make next element visible and current element hidden
    if (currentCount < elems.length - 1) {
        elems[currentCount + 1].classList.remove('d-none');
        elems[currentCount].classList.add('d-none');
    }
}

function slideImageLeft() {
    // Get all work elements
    const elems =  document.getElementsByClassName('work-flex');
    // Get current visible work element without d-none
    for(let i = 0; i < elems.length; i++) {
        if (!elems[i].classList.contains('d-none')) {
            currentCount = i;
        }
    }
    // If not first work element, make previous element visible and current element hidden
    if (currentCount > 0) {
        elems[currentCount - 1].classList.remove('d-none');
        elems[currentCount].classList.add('d-none');
    }
}

// Make about section appear when in view
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

// Smooth out scrolling on page
$('.btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 1400);
    }
});
