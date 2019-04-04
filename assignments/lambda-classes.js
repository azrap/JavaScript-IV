// CODE here for your Lambda Classes


// Person Class:

class Person {
    constructor(personAttr){
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender=personAttr.gender;
  }
  
  speak(){
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}



// Instructor class
class Instructor extends Person {
    constructor(insAttr){
        super(insAttr);
        this.specialty=insAttr.specialty;
        this.favLanguage=insAttr.favLanguage;
        this.catchPhrase=insAttr.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`)};

}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred);
  console.log(fred.grade({name:'azra'}, 'javascript'));

// Student class

class Student extends Person{
    constructor(stuAttr){
        super(stuAttr);
        this.previousBackground=stuAttr.previousBackground;
        this.className= stuAttr.className;
        this.favSubjects=stuAttr.favSubjects;
    }
    listSubjects(){
    //a method that logs out all of the student's favoriteSubjects one by one
        this.favSubjects.forEach((ele) => {
         console.log(ele);
        //  return favSubjects;
        })
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

const wilma = new Student({
    name: 'wilma',
    location: 'Bedrock',
    age: 37,
    gender: 'female',
    previousBackground: 'marketing',
    className: 'web-19',
    favSubjects: ['javascript', 'python']
  });

console.log(wilma);
console.log(wilma.listSubjects());
console.log(wilma.sprintChallenge('javascript'));
console.log(wilma.PRAssignment('javascript'));
  




// Project Manager class:

class ProjectManagers extends Instructor {
    constructor(PMattr){
        super(PMattr);
        this.gradClassName=PMattr.gradClassName;
        this.favInstructor=PMattr.favInstructor;
    }
    standUp(channel){
       return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

/*
class Child extends Parent {
    constructor(childAttrs) {
        super(childAttrs);
        this.isChild = childAttrs.isChild;
      }
      checkIfChild() {
        if(this.isChild) {
        console.log(`${this.speak} and I am a child object`);
      }
    }

    */

   const rudy = new ProjectManagers({
    name: 'rudy',
    location: 'Bedrock',
    age: 33,
    gender: 'male',
    favLanguage: 'html/css',
    specialty: 'Frontend',
    catchPhrase: "Ive seen your code, you're doing great.",
    gradClassName: 'Web Dev',
    favInstructor: "Josh Knell"
  });
console.log(rudy);
console.log(rudy.standUp('javascript'));

