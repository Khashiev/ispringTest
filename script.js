const input1 = document.querySelector(".input__write");
const button = document.querySelector(".btn");
const input2 = document.querySelector(".input__read");

button.addEventListener("click", () => {
  let keyword = input1.value.split(" ")[0];
  let flag = true;

  switch (keyword) {
    case "var":
      console.log("объявление");
      break;
    case "let":
      console.log("присваивание");
      break;
    case "fn":
      console.log("подсчет");
      break;
    case "print":
      console.log("вывод");
      break;
    default:
      console.log("ошибка");
      flag = false;
  }

  if (flag) {
    input2.value += `${input1.value}\n`;
    input1.value = "";
  } else {
    input1.value = "";
  }
});

// class Calc {
//   constructor() {
//     this.input1 = document.querySelector(".input__write");
//     this.input2 = document.querySelector(".input__read");
//     this.button = document.querySelector(".btn");
//     this.keyword = this.input1.value.split(" ")[0];

//     this.button.addEventListener("click", this.func);
//   }

//   func() {
//     switch (this.keyword) {
//       case "var":
//         this.var();
//         break;
//       case "let":
//         this.let();
//         break;
//       case "fn":
//         this.fn();
//         break;
//       case "print":
//         this.print();
//         break;
//       default:
//         console.log("ошибка");
//     }
//   }

//   var() {
//     this.input2.value += `${this.input1.value}\n`;
//     this.input1.value = "";
//     console.log("объявление");
//   }

//   let() {
//     this.input2.value += `${this.input1.value}\n`;
//     this.input1.value = "";
//     console.log("присваивание");
//   }

//   fn() {
//     this.input2.value += `${this.input1.value}\n`;
//     this.input1.value = "";
//     console.log("подсчет");
//   }

//   print() {
//     this.input2.value += `${this.input1.value}\n`;
//     this.input1.value = "";
//     console.log("вывод");
//   }
// }

// let calc = new Calc();
