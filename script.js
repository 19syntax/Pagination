let pageNo = document.querySelectorAll(".link");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
let pageNo2 = document.getElementsByTagName('a');

let currentIndex = 0;

pageNo.forEach((element, numIndex) => {
    element.addEventListener("click", () => {

        currentIndex = numIndex;
        console.log(currentIndex)

        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');

        // if(element.style.backgroundColor == "rgb(63, 84, 202)"){
        //     element.style.backgroundColor = "rgba(209, 209, 209, 0.76)";
        //     element.style.color = 'black';
        // } else {
        //     element.style.backgroundColor = "rgb(63, 84, 202)";
        //     element.style.color = 'white';
        // }
    });
});


previousBtn.addEventListener("click", () => {
    
    pageNo2[currentIndex].classList.remove('active');
    
    if(currentIndex > 0){
        currentIndex--;
        pageNo2[currentIndex].classList.add('active');
    } else if(currentIndex = 0){
        console.log("It has finish")
    }
})

nextBtn.addEventListener("click", () => {
    
    pageNo2[currentIndex].classList.remove('active');
    
    if(currentIndex < 0){
        currentIndex++;
        pageNo2[currentIndex].classList.add('active');
    } else if(currentIndex = 0){
        console.log("It has finish")
    }
})
