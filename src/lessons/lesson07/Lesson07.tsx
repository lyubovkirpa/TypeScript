import React from "react";

export default function Lesson07() {
  //* функции

  //   const showMessage = (message: string):string => {
  //     console.log(`message: ${message}`);
  //     return `message: ${message}`
  //   };
  //   showMessage('hello')

  const showMessage = (message: string): void => {
    console.log(`message: ${message}`);
  };
  showMessage('hello')

  const sum = (a: number, b: number): number => a + b;

const sumToString = (a: number, b: number): string => String(a + b);


  const result:number = sum(42, 100);
  const result1:string = sumToString(42, 100);


  //* any
  //
const someVar: any = 'hello'

//* union type
//
let stringOrNumber: string | number = 42

//пример
type ButtonType = 'button' | 'reset' | 'submit';
let buttonType: ButtonType = "submit"


  return (
    <div className="lesson-container">
      <h2>Lesson 7</h2>
      <p>React TypeScript part 2</p>
    </div>
  );
}
