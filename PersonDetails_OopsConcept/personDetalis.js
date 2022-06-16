class Person{
constructor(name,age,nationality,gender,Martial_status){
this.name=name;
this.age=age;
this.nationality=nationality;
this.gender=gender;
this.Martial_status=Martial_status

}
getName(){return this.name}
getAge(){return this.age}
getNationality(){return this.nationality}
getGender(){return this.gender}
getMartial_status(){return this.Martial_status}
}
const person1= new Person("Abu",'24','Indian','Male','Single')
console.log(person1.getName())
console.log(person1.getAge())
console.log(person1.getNationality())
console.log(person1.getGender())
console.log(person1.getMartial_status())
