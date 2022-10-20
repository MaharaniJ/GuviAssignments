const resume = 
    [
        {
    "Name": "Maha J",
    "Profession":"Student"
},
    {
    "Qualification":"BE.CompSci.Engg",
    "Place":"Tiruneveli"
},
{
    "Technical Skills" : "C, C++"
},
{
    "College": "PSN Engg College",
    "CGPA":"7.1",
},
{
   "e-mail id": "jeyamaha98@gmail.com",
   "Mobile No": "9123456789"
},
{
    "Interests": "'Cricket', 'Football', 'Golf'",
    "Hobbies":"Painting, Pencil Sketching, Listening to Music"

}
]

//format 1
 console.log("Resume")
 for (var i in resume){
    //console.log(i);
    for (var key in resume[i]){
        console.log( key + ":" + " " + resume[i][key]);
    }
}


//format 2 - for reference
// resume.forEach(function(obj){
//     //console.log(index);
//     for (var key in obj){
//         console.log(key,":",obj[key]);
//     }
// });
