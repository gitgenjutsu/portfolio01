//cursor moving
function cusror_move() {
     let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor-2");
    let navLinks =document.querySelectorAll(".navLinks");
    
        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });
   navLinks.forEach(links => {
       links.addEventListener('mouseover', () => {
           cursor.classList.add('link_hover');
       });
       links.addEventListener('mouseleave', () => {
           cursor.classList.remove('link_hover');
       });
   });
}


//loader
function counter() {
    let count = setInterval(function () {
        let c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c === 100) {
            clearInterval(count);
            $('.preloader').addClass('active');
            cusror_move();
            setInterval(textAnim(),3000);
        }
    },30)
}

$(window).on('load', function () {
    counter();
});

// window.addEventListener('load', () => {
//     counter();
//     cusror_move();
// });

function textAnim() {
    
//text animation
const design = document.querySelector('.designerText');
const developer = document.querySelector('.developerText');
const strDesign = design.textContent;
const splitDesign = strDesign.split("");
design.textContent = "";
const strDeveloper = developer.textContent;
const splitDeveloper = strDeveloper.split("");
developer.textContent = "";

for (let i = 0; i < splitDesign.length; i++) {
    design.innerHTML +="<span>"+ splitDesign[i]+"</span>";
}

for (let i = 0; i < splitDeveloper.length; i++) {
    developer.innerHTML +="<span>"+ splitDeveloper[i]+"</span>";
}

let char = 0;
let timer = setInterval(animWords, 50);

function animWords () {
    const span = design.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitDesign.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
    let time = setInterval(animeWords, 80);
    
let charac = 0;


function animeWords () {
    const span = developer.querySelectorAll('span')[charac];
    span.classList.add('fade');
    charac++;
    if (charac === splitDeveloper.length) {
        done();
        return;
    }
}

function done() {
    clearInterval(time);
    time = null;
}
}

}







//show index
function show_index() {
    $('#hero_text').show('slow');
    $('.work_section').hide('slow');
    $('.about_section').hide('slow');
    $('#scroll-down').show('slow');
    $('.work_menu').removeClass('active');
    $('.about_menu').removeClass('active');
}

//show about
function show_about() {
    $('#hero_text').hide('slow');
    $('.work_section').hide('slow');
    $('.about_section').show('slow');
    $('.about_menu').addClass('active');
    $('.work_menu').removeClass('active');
    $('#scroll-down').hide('slow');
}

//show work
function show_work() {
    $('#hero_text').hide('slow');
    $('.about_section').hide('slow');
    $('.work_section').show('slow');
    $('.about_menu').removeClass('active');
    $('.work_menu').addClass('active');
    $('#scroll-down').hide('slow');
}


//slider animation
const sliderContainer = document.querySelector('.work_section');
const sliderRight = document.querySelector('.right_slide');
const sliderLeft = document.querySelector('.left_slide');
const upBtn = document.querySelector('.up_button');
const downBtn = document.querySelector('.down_button');
const sliderLength = sliderRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
sliderLeft.style.top = `-${(sliderLength-1)*100}%`;
upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > sliderLength - 1) {
            activeSlideIndex = 0;
        }        
    } else {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLength-1;
        }  
    }
    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}



let vid = document.getElementsByTagName("video");
vid.playbackRate = 2.0;