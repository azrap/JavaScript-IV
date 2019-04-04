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
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`)}
  }
}


// Instructor class
class Instructor extends Person {
    constructor(insAttr){
        super(insdAttrs);
        this.specialty=insAttr.specialty;
        this.favLanguage=insAttr.favLanguage;
        this.catchPhrase=insAttr.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)}

}

// Student class

class Student extends Person{
    constructor(stuAttr){
        super(stuAttrs);
        this.previousBackground=stuAttr.previousBackground;
        this.className= stuAttr.className;
        this.favSubjects=stuAttr.favSubjects;
    }

    listSubjects(){
    //a method that logs out all of the student's favoriteSubjects one by one
        this.favSubjects.forEach( (ele) => {
            console.log(ele);
        })
    }

    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject){
        console.log(`${student.name} has begun spritn challenge on ${subject}`)
    }
       
}


// Project Manager class:

class ProjectManagers extends Instructor {
    constructor(PMattr){
        super(PMattr);
        this.gradClassName=PMattr.gradClassName;
        this.favInstructor=PMattr.favInstructor;
    }
    standUp(channel){
        `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student,subject){
        `${this.name} debugs ${student.name}'s code on ${subject}`
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