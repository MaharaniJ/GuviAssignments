var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true)

request.send();                                             

request.onload = function(){
    var data = JSON.parse(request.response)

    for(let i=0; i<data.length; i++)
    {

    // 1. Get all the countries from the Asia continent/region using the Filter Function
     var result = data.filter((element)=>element.region=="Asia");
     console.log("Asian Countries:", result[i].name);
 
    };

}
   
