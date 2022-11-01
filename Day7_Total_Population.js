var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true)

request.send();                                             

request.onload = function(){
    var data = JSON.parse(request.response)

    for(let i=0; i<data.length; i++)
    {
   
 
    // 4. Print the total Population of countries using reduce function
    var restotpop = data.reduce((acc,element) => acc+element.population,0);
    console.log("World Population in 250 countries:", restotpop);  

    };


}
   
