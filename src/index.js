import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Person {
  constructor(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
    console.log("ini adalah console di constructor", this);
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  greeting1() {
    const getFullName = () => {
      console.log(this);
      return this.firstName + " " + this.lastName;
    };
    return `Halo ini arrow function, ${getFullName()}`;
  }

  greeting2() {
    const getFullName = function() {
      return this.firstName + " " + this.lastName;
    }.bind(this);
    return `Halo ini bind function, ${getFullName()}`;
  }
}
//instance
const ikhsan = new Person("Abdul Fatah", "Ikhsan");
let greeting1 = ikhsan.greeting1();
let greeting2 = ikhsan.greeting2();
console.log("ini adalah console di instance", greeting1);
console.log("ini adalah console di instance", greeting2);
