const hello = (name?: HelloInput) => `Hello ${name || 'world'}!`;

console.log(hello('world'));

export default hello;