const body = document.querySelector('.container') 


//-------------정렬 변경-----------------//
const line1 = document.getElementById('line1');
line1.addEventListener('click', () => {
    const potpolio_ul = document.querySelector('.potpolio ul')
    potpolio_ul.style.display = 'flex';
    const potpolio = document.querySelector('.potpolio')
    potpolio.style.width = '64%'
    const menu = document.querySelector('.menu')
    menu.style.display = 'block'
})

const line2 = document.getElementById('line2');
line2.addEventListener('click', () => {
    const potpolio_ul = document.querySelector('.potpolio ul')
    potpolio_ul.style.display = 'block';
    const potpolio = document.querySelector('.potpolio')
    potpolio.style.width = '400px'
    const menu = document.querySelector('.menu')
    menu.style.display = 'flex'
})


//-------------정렬 변경-----------------//

//-------------테마 변경-----------------//
const dark = document.querySelector('.dark');
dark.addEventListener('click', () => {
    for (const potpolio_a of document.querySelectorAll('.potpolio ul li a') ) {
        potpolio_a.style.color = 'white'
    } 
    for (const potpolio_li of document.querySelectorAll('.potpolio ul li') ) {
        potpolio_li.style.border = '3px solid white'
    }
    for (const potpolio_p of document.querySelectorAll('.potpolio ul li p') ) {
        potpolio_p.style.color = 'white'
    }
    for (const potpolio_span of document.querySelectorAll('span') ) {
        potpolio_span.style.color = 'white'
    }
    
    body.style.backgroundColor = 'rgb(65, 65, 65)';

})

const light = document.querySelector('.light');
light.addEventListener('click', () => {
    for (const potpolio_a of document.querySelectorAll('.potpolio ul li a') ) {
        potpolio_a.style.color = 'black'
    } 
    for (const potpolio_li of document.querySelectorAll('.potpolio ul li') ) {
        potpolio_li.style.border = '3px solid black'
    }
    for (const potpolio_p of document.querySelectorAll('.potpolio ul li p') ) {
        potpolio_p.style.color = 'black'
    }
    for (const potpolio_span of document.querySelectorAll('span') ) {
        potpolio_span.style.color = 'black'
    }

    body.style.background = 'white';

})
//-------------테마 변경-----------------//

//-------------메인 모달-----------------//
// const main = document.querySelector('.main_site')
// main.addEventListener('click', () => {
//     alert('현재 페이지 입니다.')
// })


$('.open_modal1').click(function() {
    $('.modal_inner').fadeIn();
    $('#one').fadeIn();
})
$('.close_modal1').click(function() {
    $('#one').fadeOut();
    $('.modal_inner').fadeOut();
})


$('.open_modal2').click(function() {
    $('.modal_inner').fadeIn();
    $('#two').fadeIn();
})
$('.close_modal2').click(function() {
    $('#two').fadeOut();
    $('.modal_inner').fadeOut();
})


$('.open_modal3').click(function() {
    $('.modal_inner').fadeIn();
    $('#three').fadeIn();
})
$('.close_modal3').click(function() {
    $('#three').fadeOut();
    $('.modal_inner').fadeOut();
})


$('.main_site').click(function() {
    $('.modal_inner').fadeIn();
    $('#four').fadeIn();
})
$('.close_modal4').click(function() {
    $('#four').fadeOut();
    $('.modal_inner').fadeOut();
})

$('.open_modal5').click(function() {
    $('.modal_inner').fadeIn();
    $('#five').fadeIn();
})
$('.close_modal5').click(function() {
    $('#five').fadeOut();
    $('.modal_inner').fadeOut();
})



/****************************************/

for (const potpolioli of document.querySelectorAll('.potpolio ul li')) {
    potpolioli.addEventListener('mouseover', () => {
        potpolioli.classList.add('modal_open');
    })
}

// let background = setInterval(function() {
//     var ran1 = Math.floor(Math.random() * 200) + 50;
//     var ran2 = Math.floor(Math.random() * 200) + 50;
//     var ran3 = Math.floor(Math.random() * 200) + 50;
//     var ran4 = Math.random() * 0.8;

//     const body = document.querySelector('body')
//     body.style.backgroundColor = `rgba(${ran1},${ran2},${ran3},${ran4})`
// },5000)

// const yes_back = document.querySelector('.yes_background')

// yes_back.addEventListener('click', () => [
//     background()
// ])

// const no_back = document.querySelector('.no_background')

// yes_back.addEventListener('click', () => [
//     clearInterval(background())
// ])

const right = document.querySelector('.right')
const slide = document.querySelector('.slide ul')
const move = document.querySelector('.slide_button')

slide.className += 'slidemove';


let slidecnt = 0
let block = 400;

function rightslide() {
    right.style.display = 'none'
    move.style.fontSize = '1rem'
    move.style.paddingTop = '10px'
    slidecnt++;
    console.log(slidecnt)
    slide.style.transform = `translateX(${-block * slidecnt}px)`;
    if(slidecnt == 5) {
         setTimeout(function() {
             slide.classList.remove('slidemove')
             slide.style.transform = 'translateX(0px)'; 
             slidecnt = 0;
             setTimeout(function() {
                 slide.className += 'slidemove';
             },100)
             right.style.display = 'block'
             right.style.margin = '0 auto'
             move.style.fontSize = '0'
             move.style.paddingTop = '0px'
         },500)
    }
    else {
        setTimeout(function() {
            right.style.display = 'block'
            right.style.margin = '0 auto'
            move.style.fontSize = '0'
            move.style.paddingTop = '0px'
        },500)
    }
}


