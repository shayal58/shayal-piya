const img =document.getElementById("img")
const imageDescription= document.querySelector(".imageDescription")
const bod =document.querySelector('body');
function developer() {
    const develop = document.querySelector(".developer");
    const skillset = ["UI & UX", "WEB", "APP", "GRAPHIC"];
    let i = 0;

    function displaySkill() {
        if (i < skillset.length) {
           develop.innerHTML =`${skillset[i]}`
          
            i++;
            setTimeout(displaySkill, 1000);  // Call the function recursively with a 5-second delay
        }
        else{
            i = 0;
            setTimeout(displaySkill, 1000); // Restart the skillset
        }
    }

    displaySkill();  // Start the recursive function
}


developer();
function Description1(){
    img.src ="assets/ims.png"
    imageDescription.innerHTML ='This is the inventory management system we created to check inventory';
}
function Description2(){
    img.src ="assets/finance.png"
    imageDescription.innerHTML ='this is finance litracy which provide literacy on finance with help of quiz expense tracker etc';
}
function Description3(){
    img.src ="assets/portfolio.png"
    imageDescription.innerHTML ='This is the protfolio that i have created';
}
function darkMode(){
bod.style.backgroundColor ='#000000';
bod.style.color ="#FFFFFF"
}
function WhiteMode(){
    bod.style.backgroundColor ='#FFFFFF';
    bod.style.color ="#000000";
    }
    
    function downloadPDF(){
        const link = document.createElement('a');
        link.href = 'cv.pdf'; // Replace with your file URL
        link.download = 'cv.pdf'; // Optional: Specify the download filename
        link.click();
    }
    function contactMe(){
        
    }
