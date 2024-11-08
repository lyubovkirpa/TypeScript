import { log } from "console";

export default function Lesson06() {
  //* 1.string
  let username: string = "Frodo";
  username = "Piter";
  console.log(username);

  //* 2.number
  let number: number = 42;
  number = 2 + Number("2");
  console.log(number);

  //* 3.boolean
  let isAdmin: boolean = true;
  isAdmin = 2 > 3;
  console.log(isAdmin);

  //* 4.null(ничего, и так и должно быть) / undefined(ничего, так как не произошло присвоение)
  let emptyValue: null = null;
  console.log(emptyValue);

  let empty: undefined = undefined;
  console.log(empty);

  //* 5.arrays

  const rgb: string[] = ["rgb", "green", "blue"];
  console.log(rgb);
  // rgb.push(42)

  const numbers: number[] = [1, 1, 2, 3, 5];
  numbers.push(8);
  console.log(numbers);

  const myArray: [string, number] = ["apple", 42];

  //? 6.objects
  //interface
  interface IHero {
    name: string;
    age: number;
    isDark: boolean;
  }

  interface IMagician extends IHero {
    magic(): void;
  }

  const aragorn: IHero = {
    name: "Aragon",
    age: 150,
    isDark: false,
  };

  const gimli: IHero = {
    name: "Gimli",
    age: 56,
    isDark: false,
  };

  const gendalf: IMagician = {
    magic: function(): void {
        console.log("pass")
    },
    name:'Gendalf',
    age:3000,
    isDark:false
  }

  const heroes: IHero[] = [aragorn, gimli];
  heroes.push(gendalf)
  console.log(heroes)


  return (
    <div className="lesson-container">
      <h2>Lesson 6</h2>
      <p>React TypeScript</p>
    </div>
  );
}
