//---------------------variables----------------------
var nodeImg = document.querySelectorAll("img");
var parentLayer = document.querySelector(".parentlayer");
var nodeI = document.querySelector(".fa-window-close");
var childImg = document.querySelector(".childLayer");
var newArray = Array.from(nodeImg);
console.log(newArray);
var currentIndex;
var next=document.querySelector(".fa-arrow-alt-circle-right");
var prev=document.querySelector(".fa-arrow-alt-circle-left");



//----------------show parent layer ----------------------------
function showParentLayer(infoParameter) {

    currentIndex=newArray.indexOf(infoParameter.target);
    childImg.style.backgroundImage = `url(${infoParameter.target.src})`;
    parentLayer.classList.replace("d-none", "d-flex");
    // console.log(currentIndex);
     
}
for (var i = 0; i < nodeImg.length; i++) {
    nodeImg[i].addEventListener("click", showParentLayer);
    

}
 

//-----------------Close Parent layer--------------------------------- 
function closeParentLayer() {

    parentLayer.classList.replace("d-flex", "d-none");
}
nodeI.addEventListener("click", closeParentLayer);



//----------------next-----------------------------

function showNext()
{
    currentIndex++;
    if(currentIndex==nodeImg.length)
    {
        currentIndex=0;
    }
   
    childImg.style.backgroundImage=`url(${nodeImg[currentIndex].src})`;
  
}
next.addEventListener("click",showNext);


//------------prev-------------------
function showPrev()
{
    currentIndex--;
    if(currentIndex===-1)
    {
        currentIndex=nodeImg.length-1;

    }
    childImg.style.backgroundImage=`url(${nodeImg[currentIndex].src})`;
}
prev.addEventListener("click",showPrev);


// //--------------------keyboard-Escape     -------------------
// document.addEventListener("keydown",function(e)
// {
//     if(e.key==="Escape" && parentLayer.classList.contains("d-flex"))
//     {
//         closeParentLayer();
//     }
// });


// //--------------------keyboard-ArrowRight -------------------
// document.addEventListener("keydown",function(e)
// {
//     if(e.key==="ArrowRight"&& parentLayer.classList.contains("d-flex") )
//     {
//         showNext();
//     }
// });


// //--------------------keyboard-ArrowLeft -------------------
// document.addEventListener("keydown",function(e)
// {
//     if(e.key==="ArrowLeft" && parentLayer.classList.contains("d-flex"))
//     {
//         showPrev();
//     }
// });

document.addEventListener("keydown",function(e)
{

    if(parentLayer.classList.contains("d-flex"))
    {
        switch(e.key)
        {
            case "Escape":
                
              closeParentLayer();
              break;
            case "ArrowRight":
            showNext();
            break;
            case "ArrowLeft":
                showPrev();
            break;

        }
    }
});