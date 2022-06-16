class Movies{
constructor(title,studio,rating){
this.title = title;
this.studio =studio;
this.rating = rating;

}
getPG(){
                         return (`The rating of the ${this.title} is ${this.rating="PG"}`)
}

}

const movie1= new Movies('Casino Royale',"Eon Production","PG13")
console.log(movie1.title)
console.log(movie1.studio)
console.log(movie1.rating)
const movie2 = new Movies('Spider-Man',"Marvel","")
console.log(movie2.title)
console.log(movie2.studio)
console.log(movie2.rating)
console.log(movie2.getPG())

//Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
