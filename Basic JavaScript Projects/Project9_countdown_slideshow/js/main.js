let slideIndex=1;// assigning a variable and giving it the value 1
showSlides(slideIndex);//showing the first slide

//next/previous controls
function plusSlides(n) {// creating a function called plusSlides 
    showSlides(slideIndex+=n); //showing slide += the argument n
}

//thumbnail image controls
function currentSlide(n){// creating a function and giving it the argument n
    showSlides(slideIndex=n);//show the slides = the argument n 
}

function showSlides(n){//creating a function with the argument n
    let i;// creating variable i 
    let slides= document.getElementsByClassName("mySlides");//creating a variable and calling the value from the HTML
    let dots= document.getElementsByClassName("dot");//creating a variable and calling the value from HTML
    if (n>slides.length){slideIndex=1}//if argument n is greater than slides.length then the slideIndex si equal to 1
    if (n<1){slideIndex=slides.length}//if the argument n is smaller than 1 then slideindex is equlal to the slide
    for (i=0; i<slides.length; i++){//i is equal to 0, if i is less than the slide.length increment i by 1, as in go to the next slide
        slides[i].style.display="none"//the array of slides is not displayed one the new slide is shown
    }
    for (i=0; i<dots.length; i++){//i is equal to =, if is is less than dots.lenght then increment by 1, as in go to the next dot.lenght
        dots[i].className=dots[i].className.replace(" active", "");//the array of dots is replaced once you increment by 1 
    }
    slides[slideIndex-1].style.display="block";//this is so you can go back to array 0
    dots[slideIndex-1].className +=" active";//this is so that the dots can be active/displayed
}

function countdown(){//creating a function
    var seconds=document.getElementById("seconds").value;//creating a variable and calling the value from HTML

    function tick() {//creating a new function 
        seconds=seconds-1//calling the variable seconds and making it equal to seconds-1
        timer.innerHTML=seconds;//creating the timer and making it seconds
        setTimeout(tick, 1000);//setting the tick of the timer to 1000 milliseconds so it goes down second by second
    if (seconds==-1){//if the timer reaches -1 then alert by sayinig time's up
        alert("time's up")
    }
        }
    tick();//running the function
}
