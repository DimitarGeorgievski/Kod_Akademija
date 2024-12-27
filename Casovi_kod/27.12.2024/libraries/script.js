$(document).ready(function(){
//    let el = document.getElementById("someId") // vanilla js
let el = $("#mainTitle"); // to get element with jquery
// console.log(el);
let allElements = $("*");
// console.log(allElements);
let elByClassName = $(".innerWrapper");
// console.log(elByClassName);
let elByTagName = $("p");
// console.log(elByTagName);
let elByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle");
// console.log(elByMultipleSelectors);
let firstParagraph = $("p:first");
// console.log(firstParagraph);
let firstChildren = $("h3:first-child");
// console.log(firstChildren);
let nthChild = $("p:nth-child(2)");
// console.log(nthChild);
let btn = $("button[name='test']"); // ako sakame vaka mora so edno apostrovce da pocnuva ili pak da ima razlicni apostrofi nemozi 2 isti.
// console.log(btn);
let allPara = $('p');
let first = allPara.first();
// console.log(first);
let pClass = $("*").find(".innerWrapper").find(".pClass");
// console.log(pClass);
let allEle = $("*");
let fifthElement = allEle.get(5);
// console.log(allEle);
// console.log(fifthElement);
let nextElement = $("#SecondTitle").next();
// console.log(nextElement);

// DOM Manipulation with jQuery
// let value = $('input[value="cool"]').val(); noot a good way
let value = $("input").first().val();
// console.log(value);
// $("#mainTitle").hide();
// $("#mainTitle").show();
let divHtml = $(".innerWrapper").first().html();
// console.log(divHtml);
// $(".innerWrapper").first().html('<p>we changed the html</p>')
let h1Text = $("#mainTitle").first().text();
// console.log(h1Text);
$("#mainTitle").first().text("we changed the text of this h1");
let color = $("#mainTitle").css("color");
// console.log(color);
$("#mainTitle").css("color","rgb(15,127,78") // za promena na boja ili so i da sakas drugo 
$(".innerWrapper").find("P:first").after("<h2>Added header</h2>");
$(".innerWrapper").find("P.pClass").before("<h2>Added header</h2>");
let ourBtn = $("button").first();
ourBtn.on("click", function(e){
    console.log("Hello form the first click handler");
})
let input = $('input').first();
input.on("keypress", function(){
    console.log("on key press");
})
let secondButton = $("button").last();
secondButton.click(function(){
    console.log("Second button click");
})
// input.change(function(e){
//     console.log(e.target.value);
// }); ova ne
});