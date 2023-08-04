const { initializeBoard } = require("./Initialize");
const { User } = require("./PlayGame/User");
const { isValidMove } = require("./PlayRules/ValidMoves");
const board = initializeBoard();

const user1 = new User("Solo", "White");
const user2 = new User("Paul", "Black");

// console.log(isValidMove(4, 3, 1, 0, user2, board));
