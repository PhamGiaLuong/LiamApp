/** @type {import("prettier").Config} */
module.exports = {
  semi: false,                  // Có dấu chấm phẩy cuối câu
  singleQuote: true,          // Dùng nháy đơn thay vì nháy kép
  doubleQuote: false,
  trailingComma: 'es5',       // Thêm dấu phẩy ở cuối danh sách, object (ES5)
  tabWidth: 2,                // Độ rộng của tab
  printWidth: 80,             // Chiều dài tối đa của dòng
  bracketSpacing: true,       // Dấu cách trong object literal: { foo: bar }
  arrowParens: 'always',      // Luôn có ngoặc trong arrow function: (x) => {}
  endOfLine: 'auto'           // Tùy hệ điều hành (LF/CRLF)
};
