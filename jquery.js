function deleteCharacter() {
  let currentValue = $(".inputDisplay").val();

  $(".inputDisplay").val(currentValue.substring(0, currentValue.length - 1));
}
// Function to insert a character into the input display
function insertCharacter(char) {
  let currentValue = $(".inputDisplay").val();
  let length = currentValue.length;
  let isOperator = char == "+" || char == "-" || char == "*" || char == "/";

  if (char === "." && currentValue.includes(".")) {
    return;
  }

  if (length == 0 && isOperator) {
    return;
  }
  let lastCharacter = currentValue[length - 1];
  let lastIsOperator =
    lastCharacter == "+" ||
    lastCharacter == "-" ||
    lastCharacter == "*" ||
    lastCharacter == "/";
  if (isOperator && lastIsOperator) {
    $(".inputDisplay").val(currentValue.substring(0, length - 1) + char);
  } else {
    $(".inputDisplay").val(currentValue + char);
  }
}
// Function to clear the input display
function clearInput() {
  $(".inputDisplay").val("");
}
// Function to calculate and display the result
function result() {
  let currentValue = $(".inputDisplay").val();
  let length = currentValue.length;
  let lastCharacter = currentValue[length - 1];
  let isOperator =
    lastCharacter == "+" ||
    lastCharacter == "-" ||
    lastCharacter == "*" ||
    lastCharacter == "/";
  // If the last character is an operator, show an error
  if (isOperator) {
    $(".inputDisplay").val("ERROR!");
  } else {
    // Evaluate the expression and update the input display with the result
    try {
      $(".inputDisplay").val(eval(currentValue));
    } catch (e) {
      // Handle any evaluation errors (like invalid expressions)
      $(".inputDisplay").val("ERROR!");
    }
  }
}
// Disable double-click to prevent unintended actions on the input display
$(".inputDisplay").on("dblclick", function (e) {
  e.preventDefault();
});
