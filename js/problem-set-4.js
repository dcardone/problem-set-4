/*
 * Hello. 2 points.
 */

function hello() {
  let p = document.getElementById("output1");
  p.innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  name = prompt("Please Enter Your Name");
  let p = document.getElementById("output2");
  p.innerHTML = "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let ctof = (cels * (9/5) + 32).toFixed(2);
  let p = document.getElementById("output3");
  p.innerHTML = cels + " degrees Celsius equals " + ctof + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let ftoc = ((fahr - 32) * (5/9)).toFixed(2);
  let p = document.getElementById("output4");
  p.innerHTML = fahr + " degrees Fahrenheit equals " + ftoc + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = Math.floor(inches / 63360);
  let yards = Math.floor((inches % 63360) / 36);
  let feet = Math.floor((inches % 36) / 12);
  let inchLeft = Math.floor(inches % 12);
  let p = document.getElementById("output5");
  p.innerHTML = "Miles: " + miles  + "<br/>Yards: " + yards + "<br/>Feet: " + feet + "<br/>Inches: " + inchLeft;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilo = Math.floor(centimeters / 100000);
  let meters = Math.floor((centimeters % 100000) / 100);
  let centi = Math.floor(centimeters % 100);
  let p = document.getElementById("output6");
  p.innerHTML = "Kilometers: " + kilo  + "<br/>Meters: " + meters + "<br/>Centimeters: " + centi;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = Math.floor(fluidOunces / 128);
  let quarts = Math.floor((fluidOunces % 128) / 32);
  let pints = Math.floor((fluidOunces % 32) / 16);
  let cups = Math.floor((fluidOunces % 16) / 8);
  let flOunces = Math.floor(fluidOunces % 8);
  let p = document.getElementById("output7");
  p.innerHTML = "Gallons: " + gallons  + "<br/>Quarts: " + quarts + "<br/>Pints: " + pints + "<br/>Cups: " + cups + "<br/>Fluid Ounces: " + flOunces;


  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = Math.floor(ounces / 32000);
  let pounds = Math.floor((ounces % 32000) / 16);
  let ouncesLeft = Math.floor(ounces % 16);
  let p = document.getElementById("output8");
  p.innerHTML = "Tons: " + tons  + "<br/>Pounds: " + pounds + "<br/>Ounces: " + ouncesLeft;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(pennies / 100);
  let quarters = Math.floor((pennies % 100) / 25);
  let dimes = Math.floor(((pennies % 100) % 25) / 10);
  let nickels = Math.floor((((pennies % 100) % 25) % 10) / 5);
  let penniesLeft = Math.floor((((pennies % 100) % 25) % 10) % 5)
  let p = document.getElementById("output9");
  p.innerHTML = "Dollars: " + dollars  + "<br/>Quarters: " + quarters + "<br/>Dimes: " + dimes + "<br/>Nickels: " + nickels + "<br/>Pennies: " + penniesLeft;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let quarters = Math.floor(amount / .25);
  let dimes = Math.floor((amount % .25) / .1);
  let nickels = Math.floor(((amount % .25) % .1) / .05);
  let pennies = Math.floor((((amount % .25) % .1) % .05) / .01);
  let coins = Math.round(quarters + dimes + nickels + pennies);
  let p = document.getElementById("output10");
  p.innerHTML = `${coins} coins.`;


  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
