// /* 

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

// */

// /* OLD CODE OLD CODE OLD CODE (Jump to line 80 for the refactored code):

//   === GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */
// function GameObject(obj) {
//     this.createdAt = obj.createdAt;
//     this.name = obj.name;
//     this.dimensions = obj.dimensions;
//   }

// // adding the destroy prototype function
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//    };

// /*
//   === CharacterStats ===
//   * healthPoints
//   * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//   * should inherit destroy() from GameObject's prototype
// */

// function CharacterStats(csObj){
//   GameObject.call(this, csObj);
//   this.healthPoints=csObj.healthPoints;
// }

// // linking GameObject to CharacterStats so it can inherit the properties from GameObject.
// CharacterStats.prototype=Object.create(GameObject.prototype);

// //adding the takeDamage prototype function to CharacterStats:
// CharacterStats.prototype.takeDamage = function (){
//   return `${this.name} took damage`}

// /*
//   === Humanoid (Having an appearance or character resembling that of a human.) ===
//   * team
//   * weapons
//   * language
//   * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//   * should inherit destroy() from GameObject through CharacterStats
//   * should inherit takeDamage() from CharacterStats
// */


// function Humanoid(humanObj){
//   CharacterStats.call(this, humanObj);
//   this.team=humanObj.team;
//   this.language=humanObj.language;
//   this.weapons=humanObj.weapons;
// }

// // linking Humanoid to CharacterStats so Humanoid:
// Humanoid.prototype=Object.create(CharacterStats.prototype);

// //creating prototype function greet for humanoid:
// Humanoid.prototype.greet = function(){
//   return `${this.name} offers a greeting in ${this.language}`
// }

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

/***********************************/

//REFACTORED CODE FOR JS 4:
  


class GameObject {
    constructor(obj){
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions; 
    }

    destroy(){
    return `${this.name} was removed from the game.`;
    }

}

// adding the CharacterStats inhertience

class CharacterStats extends GameObject{
    constructor(csObj){
        super(csObj);
        this.healthPoints=csObj.healthPoints;
    }

    takeDamage(){
        return `${this.name} took damage`}
    
  }


// adding the Humanoid inhertience

class Humanoid extends CharacterStats {
    constructor(humanObj){
        super(humanObj);
        this.team=humanObj.team;
        this.language=humanObj.language;
        this.weapons=humanObj.weapons;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`
      }
}


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  


