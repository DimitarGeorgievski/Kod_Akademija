// 3 inputs for numbers i prosek i da se isprinta prosekot i ako e prosekot ako e pomal od 10 da e vo crveno inace da e vo zeleno

let tekst = $("#tekst");
$("#btn").click(function(){
    let input1 = $("#input1").val();
    let input2 = $("#input2").val();
    let input3 = $("#input3").val();
    let average = (Number(input1)+Number(input2)+Number(input3)) / 3;
    if(average<10){
        tekst.css("color", "red");
        tekst.text(average);
    }
    else{
        tekst.css("color", "green");
        tekst.text(average);
    }
});
