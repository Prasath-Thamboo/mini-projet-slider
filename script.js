function previous(){
    const a = document.querySelector('.slider').offsetWidth;
    document.querySelector('.slider-content').scrollLeft -= a

}
 
function next() {
    const a = document.querySelector('.slider').offsetWidth;
    document.querySelector('.slider-content').scrollLeft += a;
}

