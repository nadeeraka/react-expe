//method distructure
const book = {
  title: "ego the enemy",
  author: "rayn holiday",
  publish: {
    //name: "penguin"
  }
};

const { title, author: auth } = book;
const { name = "self" } = book.publish;

console.log(` ${name}`);
console.log(`title ${title} also author ${auth} `);
