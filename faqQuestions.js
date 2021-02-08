let questions = document.querySelectorAll(".faq-question");

questions.forEach(element => {
    element.addEventListener("click", (e)=>{
       let texto = element.querySelector("p");
       let arrow = element.querySelector("img");
       console.log(arrow);
       if(texto.style.display == "block"){
        texto.style.display= "none";
        arrow.style.transform = "rotate(0deg)";
       }
       else{
        texto.style.display= "block";
        arrow.style.transform = "rotate(180deg)";
       }
    

    })
});