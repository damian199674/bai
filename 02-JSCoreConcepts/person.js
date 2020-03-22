class Person { 
    constructor(name, surname) { 
        this.name = name; 
        this.surname = surname; 
    } 
    name_surname() { 
        console.log( `${this.name} ${this.surname.toUpperCase()}` ); 
    } 
    initial(){
        console.log( `${this.name.charAt(0)}.${this.surname.charAt(0)}.` ); 
    }

}

const person1 = new Person("Jan", "Nowak");
const person2 = new Person("Damian", "Górski");
person1.name_surname();
person1.initial();
person2.name_surname();
person2.initial();