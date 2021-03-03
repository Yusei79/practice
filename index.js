let imgIndex = 0;
const slidePics = ["img01/1.jpg","img01/photo-1426086800127-2601510ca027.webp","img01/pexels-photo-380768.jpg"];
const image = document.getElementById("image");


const slideshow=()=>{
    if(imgIndex === slidePics.length){
        imgIndex=0;
    }else{
        image.src=slidePics[imgIndex];
        imgIndex++;

    }
    
}
setInterval(slideshow,3000);



const topBtn = document.getElementById("topBack");
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});