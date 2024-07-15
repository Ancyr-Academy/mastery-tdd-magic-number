# Mastery TDD - Magic Number

Write a program in which the user must guess a randomly generated number.
The user has 10 tries to guess the number. 
If they fail after these 10 tries, the game is over and the program displays the number.

You should end up with a `main.ts` file containing code that looks like the following :

```ts 
function main() {
  const game = new Game();
  return game.start();
}

main();
```

NOTE : the game will probably have constructor parameters, they will emerge as you develop unless you already know
which ones you need.

# Hints


Testing this program can be hard because it has many areas that are difficult to test
- How to test the generation of a random number ?
- How to test the user input ?
- How to test the output ?

Gain some insights about the technique of Seams (Michael Feather) or the Dependency Inversion (Robert C. Martin).
Insert them strategically.
And begin with a Game class.
