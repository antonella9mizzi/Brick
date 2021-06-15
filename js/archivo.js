/*MENU HAM */
let menu = document.getElementById("ham-menu");
let btn = document.getElementById("btn-menu");
btn.onclick = function() {
    $(menu).slideToggle(400);
    $(btn).toggleClass('active')
  }
/*SCROLL */
const scrollUp = (section) => {
    $('html, body').animate({
        scrollTop: $(`#${section}`).offset().top
    },1800)
}
$('#btn-start').click(()=>{scrollUp("subscription-section")})
    
/* FAQ*/ 
$(document).ready(()=>{
    $.getJSON("js/faq.json",
    function(response, status){
        if (status === "success"){
            let content = response
            for (let QA of content){
                $('#faq-content-container').append(
                    `<div id="question${QA.id}" class="question-box">               
                        <p id="btn${QA.id}">${QA.question}</p>
                        <div id="answer${QA.id}" class="answer-box">
                            <p>${QA.answer}</p>
                        </div>
                    </div>`);
                $(`#btn${QA.id}`).click(()=>{
                    $(`#answer${QA.id}`).slideToggle(600);
                })
            }
        }
    })
})
// PRICING // 
let plus = document.getElementById("plus")
let benefits = document.getElementById("benefits-container")
$(plus).click(()=>{
    $(benefits).slideToggle(600)
})

let plus2 = document.getElementById("plus__2")
let benefits2 = document.getElementById("benefits-container__2")
$(plus2).click(()=>{
    $(benefits2).slideToggle(600)
})
let plus3 = document.getElementById("plus__3")
let benefits3 = document.getElementById("benefits-container__3")
$(plus3).click(()=>{
    $(benefits3).slideToggle(600)
})

