var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true)

request.send();                                             

request.onload = function(){
    var data = JSON.parse(request.response)

    for(let i=0; i<data.length; i++)
    {

  
    // 2. Get all the countries with population less than 2 lakhs using Filter Functino
    var respop = data.filter((element)=>element.population<200000);
    console.log("Name:", respop[i].name, "Population:",respop[i].population);
  

    };
}

