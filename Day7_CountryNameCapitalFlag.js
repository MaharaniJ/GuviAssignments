
var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true)

request.send();                                             

request.onload = function(){
    var data = JSON.parse(request.response)

    for(let i=0; i<data.length; i++)
    {

 // 3. Print the following details name, capital, flag using forEach function
 data.forEach(element => console.log("Country Name:", element.name, ".....Capital:", element.capital, ".....Flag:", element.flag));

    };

}
   


  