// index.js
function greet(name) {
  if (!name) {
    return "Hello, World!";
  }
  return `Hello, ${name}!`;
}

// Ini akan berjalan ketika file dijalankan secara langsung
if (require.main === module) {
  const args = process.argv.slice(2);
  const name = args[0];
  console.log(greet(name));
}

module.exports = greet; // Kita akan export ini untuk pengujian
