process.stdout.write('hello from spinner1.js... \rheyyy\n');

let delay = 100;
const spinChars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinChars[i]}`);
  }, delay);

  delay += 200;
}