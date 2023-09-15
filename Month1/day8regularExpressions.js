// ❓DESCRIPTION:
// 1. Имена пользователей могут использовать только буквенно-цифровые символы.
// 2. Единственные цифры в имени пользователя должны быть в конце. В конце их может быть ноль или более. Имя пользователя не может начинаться с цифры.
// 3. Буквы имени пользователя могут быть строчными и прописными.
// 4. Имена пользователей должны иметь длину не менее двух символов. Двухсимвольное имя пользователя может использовать в качестве символов только буквы алфавита.
// ✅ SOLUTION
let username = "JackOfAllTrades"
let userCheck = /^\D[A-Za-z]+?\d*?$|^\D\d\d\d*?$/ // через или для проверки имен типа А97
let result1 = userCheck.test(username)

// ❓DESCRIPTION:
// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
// ✅ SOLUTION
let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6}\sno/
let result2 = ohRegex.test(ohStr)

// ❓DESCRIPTION:
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
// ✅ SOLUTION
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d\d)(?!\d{5,})/
let result3 = pwRegex.test(sampleWord);
// ❓DESCRIPTION:
// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
// ✅ SOLUTION
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // без  ^ $ пропускает 42 42 42 42
let result4 = reRegex.test(repeatNum);
// ❓DESCRIPTION:
// Иногда пробельные символы вокруг строк нежелательны, но они есть. Типичная обработка строк заключается в удалении пробелов в начале и конце строки.
// Напишите регулярное выражение и используйте соответствующие строковые методы для удаления пробелов в начале и конце строк.
// Примечание. Здесь этот String.prototype.trim()метод подойдет, но вам придется выполнить эту задачу, используя регулярные выражения.
// ✅ SOLUTION
let hello = "   Hello, World!  ";
let swRegex = /^\s+|\s+$/g; // Change this line
let result5 = hello.replace(swRegex, '') // Change this line