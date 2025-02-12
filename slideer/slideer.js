var popContainer = document.getElementById('popup_container')
var popItem = document.getElementById('popup-item')
var nextItem = document.getElementById('next')
var prevItem = document.getElementById('prev')
var closeItem = document.getElementById('close')
var imgList = document.querySelectorAll('.images img')
var arr= []
var cuurentIndex = 0 

for(var i = 0 ; i < imgList.length ; i++){
    arr.push(imgList[i])
    imgList[i].addEventListener('click' , function(e){
        cuurentIndex = arr.indexOf(e.target)
        var imgSrc = e.target.getAttribute('src')
        popContainer.style.display = 'flex';
        popItem.style.backgroundImage = "url(" + imgSrc  + ")"
       
    })
}

closeItem.addEventListener('click' , popupclose)
nextItem.addEventListener('click' , nextimage)
prevItem.addEventListener('click' , prevpage)

function popupclose(){
    popContainer.style.display = 'none'
}

function nextimage(){
    cuurentIndex ++


    if(cuurentIndex == arr.length ){
        cuurentIndex = 0
    }

        var imgSrc = arr[cuurentIndex].getAttribute('src')
    popItem.style.backgroundImage = "url(" + imgSrc  + ")" // feh note as2al feha hena 
                                                          // lam 7atet +1 gmb el currentindex gab sorten bs


}


function prevpage(){
    cuurentIndex --;


    if(cuurentIndex < 0 ){
        cuurentIndex = arr.length 
    }

        var imgSrc = arr[cuurentIndex].getAttribute('src')
    popItem.style.backgroundImage = "url(" + imgSrc  + ")" 
                                                          


}

document.addEventListener("keydown" , function(e){
    if(e.keyCode  == 39){
        nextimage()
    }

    if(e.keyCode  == 37){
        prevpage()
    }

    if(e.keyCode  == 27){
        popupclose()
    }
})

popContainer.addEventListener('click' , closephoto)

function closephoto(e){
    if(e.target == nextItem  || e.target  == prevItem || e.target == closeItem || e.target == popItem){
        return
    }
    else{
        popupclose()
    }
}
