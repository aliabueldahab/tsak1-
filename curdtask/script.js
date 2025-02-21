

var data;
var http = new XMLHttpRequest()
var url = 'https://jsonplaceholder.typicode.com/posts';
http.open("get" , url)
http.send();

http.addEventListener('readystatechange' , function(){
    if(http.readyState == 4 && http.status == 200 ){
        console.log(http.response);
        data  = JSON.parse(http.response)
        display(data);
        
    }
})

function display(res){
    var result = ''
    for(var i = 0 ; i < res.length ; i++){
        result += `
        <div>
        <h5>${res[i].title}</h5>
        <p>${res[i].body}</p>
        </div>`
    }

    document.getElementById('result').innerHTML = result
}
