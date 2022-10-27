

class Movie {

   constructor(title,studio,rating)
   {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if(this.rating==null)
        {  
          return this.rating ='PG'; 
     }
        else
        {
           return this.rating; 
          }  

   }
   
   getPG (array){
        var result = array.filter((element)=> element.rating =="PG")     
    
        return result;

   }};

   let movie1 = new Movie ("Vikran","rajkamalstudio","PG13");
   let movie2 = new Movie ("Doctor","redgiant studios","PG1");
   let movie3 = new Movie ("A", "red studios");
   let movie4 = new Movie ("B", "pink studios");
   
   let movie5 = new Movie ("CasinoRoyale","Eon Productions","PG1");

   console.log(movie1);
   console.log(movie2);
   console.log(movie3);
   console.log(movie4);
   console.log(movie5);

  
//    same output on different format   
//    const array = [movie1, movie2, movie3, movie4];
//    console.log(array);



