const sentence = "hello there from lighthouse labs";

let index = 0;

const typeWriter = () => {
  if (index < sentence.length) {
    process.stdout.write(sentence[index]);
    index ++;  
    setTimeout(typeWriter, 50)
  }
  if (index === sentence.length) {
    process.stdout.write("\n");
  }
};

typeWriter();