window .onload=function(){
    let changeback = document.getElementById("BD");
    changeback.addEventListener('mouseover',chColor);
    function chColor() {
        changeback.style.backgroundColor='#D0DFDF';
    }
    changeback.addEventListener('mouseout',retColor);
    function retColor() {
        changeback.style.backgroundColor='white';
    }
    let zoomImage = document.getElementById("imageId");
    zoomImage.addEventListener('mouseover', function() {
    zoomImage.classList.add('BGZoomImg');
    zoomImage.classList.remove('BGImg');
});

    zoomImage.addEventListener('mouseout', function() {
    zoomImage.classList.remove('BGZoomImg');
    zoomImage.classList.add('BGImg');
});
};
console.log("Welcome");
// we use window.onload because the JavaScript doesn't execute until after the DOM is loaded 
