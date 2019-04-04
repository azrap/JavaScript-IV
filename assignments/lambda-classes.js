// CODE here for your Lambda Classes

// Instructor class
class Instructor {
    constructor(insAttr){
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

class Student extends Instructor{
    constructor(stuAttr){
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

class ProjectManagers extends Instructor 

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