let url = "https://restcountries.com/v2/alpha/mkd"

async function functionWithAsync() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
function functionWithAjax(successFnc,errorFnc){
    $.ajax({
        url: url,
        success: function(response){
        let data = JSON.parse(response);
        successFnc(data);
        },
        error: function(error){
        errorFnc(error);
        }
    })
}
function functionWithPromise(){
    return new Promise((resolve,reject) => {
    if(data){
    console.log(data)
    }
    else{
    reject("Error")
    }
    })
}
functionWithAjax(function(data){
    console.log(data);
}, function(error){
    console.log(error)
})
functionWithPromise(url)
    .then()
// functionWithAsync();