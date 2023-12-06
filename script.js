let topOfPoint = -53 ;
let leftOfPoint = 40.5 ;
 
let percent = '%' ;
 
let bool = true ;
let Up = -1 ;
let left = -1 ;
let abscissa = 0 ;
let ordinate = 0 ;

let newTopOfPoint ;
let newLeftOfPoint ;
let quadrant = document.querySelector("#quadrantName") ;

let coordinates = document.querySelector("#coordinates") ;


let UpArrow = document.querySelector("#up") ;
let downArrow = document.querySelector("#down") ;
let leftArrow = document.querySelector("#left") ;
let rightArrow = document.querySelector("#right") ;
let reset = document.querySelector("#reset")


reset.addEventListener("click", ()=>{
topOfPoint = -53 ;
newTopOfPoint = topOfPoint + percent ;
// console.log(newTopOfPoint);
document.getElementById('point').style['top'] = newTopOfPoint;

leftOfPoint = 40.5 ;
newLeftOfPoint = leftOfPoint + percent ;
// console.log(newTopOfPoint);
document.getElementById('point').style['left'] = newLeftOfPoint;

abscissa = 0 ;
ordinate = 0;
coordinates.innerHTML = `( ${ordinate} , ${abscissa})`
quadrant.innerHTML = "Origin"
}  ) ;



UpArrow.addEventListener("click", ()=>{
topOfPoint += Up ;
newTopOfPoint = topOfPoint + percent ;
// console.log(newTopOfPoint);
document.getElementById('point').style['top'] = newTopOfPoint;
abscissa += 1 ;
coordinates.innerHTML = `( ${ordinate} , ${abscissa})`

checkQuadrant()
}  ) ;

downArrow.addEventListener("click", ()=>{
topOfPoint -= Up ;
newTopOfPoint = topOfPoint + percent ;
// console.log(newTopOfPoint);
document.getElementById('point').style['top'] = newTopOfPoint;
abscissa -= 1 ;
coordinates.innerHTML = `( ${ordinate} , ${abscissa})`
checkQuadrant()
}  ) ;

rightArrow.addEventListener("click", ()=>{
leftOfPoint += left ;
newLeftOfPoint = leftOfPoint + percent ;
// console.log(newTopOfPoint);
document.getElementById('point').style['left'] = newLeftOfPoint;
ordinate -= 1 ;
coordinates.innerHTML = `( ${ordinate} , ${abscissa})`
checkQuadrant()
}  ) ;
leftArrow.addEventListener("click", ()=>{
leftOfPoint -= left ;
newLeftOfPoint = leftOfPoint + percent ;
// console.log(newTopOfPoint);
document.getElementById('point').style['left'] = newLeftOfPoint;
ordinate += 1 ;
coordinates.innerHTML = `( ${ordinate} , ${abscissa})`
checkQuadrant()
}  ) ;
let arrows = document.querySelectorAll(".arrow")

function checkQuadrant(){
    if (ordinate > 0 && abscissa > 0 ) {
        quadrant.textContent = "First"
    } 
    if(abscissa < 0 && ordinate > 0){
        quadrant.innerHTML = "Fourth"
    }
     if(ordinate < 0 && abscissa > 0){
        quadrant.textContent = "Second"
    }
     if(ordinate < 0 && abscissa < 0){
        quadrant.textContent = "Third"
    }
    
    if(abscissa == 0 && ordinate == 0){
        quadrant.innerHTML = "Origin"
    }
    if(abscissa == 0 && ordinate != 0){
        quadrant.innerHTML = "X-axis"
    }
    if(abscissa != 0 && ordinate == 0){
        quadrant.innerHTML = "Y-axis"
    }
 
}
