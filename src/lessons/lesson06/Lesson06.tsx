export default function Lesson06() {
  // * typescript

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
  isAdmin = 2 > 3; //переприсвоили результат логического выражения
  console.log(isAdmin);

  //* 4.null(ничего, и так и должно быть) / undefined(ничего, так как не произошло присвоение)
  let emptyValue: null = null;
  console.log(emptyValue);

  let empty: undefined = undefined;
  console.log(empty);

  //* 5.arrays
  // пишем из чего состоит массив и квадратные скобки

  const rgb: string[] = ["rgb", "green", "blue"];
  console.log(rgb);
  // rgb.push(42) в массив из строк не получится добавить число

  const numbers: number[] = [1, 1, 2, 3, 5];
  numbers.push(8);
  console.log(numbers);

  // частный случай типизации для двух элементов в массиве
  const myArray: [string, number] = ["apple", 42];
  console.log(myArray);

  //* 6.objects

  //interface

  // чтобы типизировать объект нужно типизировать значение всех его ключей
  interface IHero {
    name: string;
    age: number;
    isDark: boolean;
  }

  // мы можем наследовать interface через ключевое слово extends
  interface IMagician extends IHero {
    magic(): void;
  }

  interface IVillain {
    name: string;
    isVillain: true;
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
    magic: function (): void {
      console.log("You shall not pass!");
    },
    name: "Gendalf",
    age: 3000,
    isDark: false,
  };

  const saruman: IVillain = {
    name: "Saruman",
    isVillain: true,
  };

  // пример использования union type - оператор объединения
  const heroes: (IHero | IVillain)[] = [aragorn, gimli, saruman];

  heroes.push(gendalf);
  console.log(heroes);

  return (
    <div className="lesson-container">
      <h2>Lesson 6</h2>
      <p>React TypeScript part 1</p>
      <p>Самое важное сейчас происходит внутри компонента, в теле функции и в консоли браузера ⚡️</p>
    </div>
  );
}
