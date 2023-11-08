//1. The acronym DRY stands for "Don't Repeat Yourself".
//you wnat to pay attention to it to avoid duplicate
//codes that would cause confusion and mess up futher coding.
//Functions is a programing tool that we
//have learned to write DRY code.


//.2
console.log(a < b);

console.log(c > d);

console.log('Name' === 'Name');

console.log(a < b && b < c);

console.log(a <= a && a <= d);

console.log(e !== 'Kevin');

console.log(48 == '48');

console.log(f !== e);

const g = 0;
console.log(g);

g = b + c;
console.log(g)z

//I used 'const' because the variable does not need to change
//There is an error if you dont 'const', 'let' or 'var'
//


//.3  the fist loop is an infinity loop.  The loop is set to 
// true and there is nothing that will stop it from saying
//"Do not run this loop".  However in the second loop the
// variable is reassigned to false which will cause the loop
// to stop.

let letters = "A";
//the varialbe "letters" will be initialized with "A"
let i = 0;
//the variable "i" will have the value of 0
while (i < 20) {
//starts a while loop that will run when "i" is less than 20
	letters += "A";
	i++;
//"i" will continue to increase unit it gets to 20
}

console.log(letters);
//sends the final value of the "letters" variable


//4.
// A "for" loop contiues until it meets the condition.
// A "while" loop stops when the condition becomes false.

// Both "for" and "while" are used to repeat a code.

//The first part of the control panel is: File
//The second part of the control panel is: Edit
//The third part of the control panel is: View

for (let i = 0; i < 1000; i++) {
    console.log(i)
}

for (let i = 1; i <i= 10; i++) {
    console.log(the value of i is: ${i} of 10')
}


const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
  }

  for (let i = 0; i < StarWars.length; i++) {
    console.log(`Character: ${StarWars[i]}, Index: ${i}`);
  }

  