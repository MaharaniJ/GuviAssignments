var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true)

request.send();                                             

request.onload = function(){
    var data = JSON.parse(request.response)

// 5. Print the country which uses US Dollars as currency 
//code//name//symbol
data.filter((element)=>{
  for(let key in element.currencies)
  {
      if(element.currencies[key].symbol=="$")
      {
        console.log(element.currencies[key].name," ",element.currencies[key].symbol," ",element.currencies[key].code);
      }
  }
 })


}
   
