const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  process.stdout.write(char);
}
// process.stdout.write() method use to print all char in one line whereas console.log print each char in new line


let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay += 1000);
}  
// each char display after 1sec time in one line, like animation of sentence


