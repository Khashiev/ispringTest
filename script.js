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
