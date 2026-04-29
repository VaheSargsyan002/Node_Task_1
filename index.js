console.log("Basic CLI Calculator");
console.log("Enter numbers for sum, subtract, multiply and divide");

process.stdin.on("data", (input) => {
  const text = input.toString().trim();

  if (text.toLowerCase() === "exit") {
    console.log("Goodbye!");
    process.exit(0);
  }

  const parts = text.split(" ");

  if (parts.length === 0 || parts.length % 2 === 0) {
    console.log(
      "Invalid format. Use: number operator number [operator number ...]\n",
    );
    return;
  }

  let result = Number(parts[0]);

  if (isNaN(result)) {
    console.log("Please start with a valid number.\n");
    return;
  }

  for (let i = 1; i < parts.length; i += 2) {
    const operator = parts[i];
    const nextNum = Number(parts[i + 1]);

    if (isNaN(nextNum)) {
      console.log("Please enter valid numbers.\n");
      return;
    }

    if (operator === "+") {
      result = result + nextNum;
    } else if (operator === "-") {
      result = result - nextNum;
    } else if (operator === "*") {
      result = result * nextNum;
    } else if (operator === "/") {
      if (nextNum === 0) {
        console.log("Error: Cannot divide by zero.\n");
        return;
      }
      result = result / nextNum;
    } else {
      console.log("Unsupported operator. Use +, -, *, or /\n");
      return;
    }
  }

  console.log(`Result: ${result}\n`);
});
