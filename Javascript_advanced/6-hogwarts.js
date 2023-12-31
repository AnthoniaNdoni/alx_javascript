/**
 * A class thats rewards or pernalize student
 */
class studentHogwarts {

    // A class attributes 
   privateScore = 0;
   name = null;

    /**
     * @param {BigInt} points 
     */    
   #changeScoreBy(points) {
        this.privateScore += points;
   }
   
   /** 
    * @param {String} newName 
    */
   setName(newName) {
        this.name = newName;
   }

    // set student score by one
   rewardStudent() {
        this.#changeScoreBy(1);
   }

    //  subtract from score
   penalizeStudent() {
        this.#changeScoreBy(-1);
   }

    //    return score
   get getScore() {
        return `${this.name}: ${this.privateScore}`;
   }

}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore);

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore);