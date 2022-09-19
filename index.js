// We import the object from the data file. Inside that object there is a function to get players data.

const { getPlayers } = require("./data");
// const data = require("./data");

/**
 * Test 1
 *Write a function to log in the console the players data with this format: 
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code
const players = getPlayers();

players.forEach((player, index) =>
    console.log(`PLAYER ${index +1}`, 
                `\nNAME: ${player.name}`, 
                `\nLASTNAME: ${player.lastname}`,
                `\nPOSITION: ${player.position}\n`));


/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

const playerNames = players.map(player => player.name);

const orderedPlayerList = playerNames.sort((player1, player2) =>  player2.length -  player1.length);

console.log(orderedPlayerList);


/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average
 * Output example -> Goals per match: 2.19
 */

// Your code

// create a new array just with for the scores
const scores = players.map(player => player.scoringChance);

//creating a function to calculate the sum of an array
function sumOfScores(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum / 100);
}
//displaying the result 
console.log(`Goals per match: ${sumOfScores(scores)}`);


/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code


const playerName = (name) =>{
    //find the object in the array by the imput "name"
    let selectedPlayer = players.find(player => player.name === name);
    console.log(selectedPlayer.position);
}
//calling the function with the "name"
playerName( "Diego");



/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

//randomise the "players" array 
const shuffle = (a) => {
    let i, j, x;
    for (i = a.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));

        x = a[i];

        // swapping the elements
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


//split the array into two group: "Team A & Team B" after randomise the original array
const teamA = shuffle([...players]);
const teamB = teamA.splice(0, players.length >> 1); //shifting with 1-bit

//creating a new array with just the scoringChance for "Team A & Team B"
const scoresA = teamA.map(player => player.scoringChance);
const scoresB = teamB.map(player => player.scoringChance);

//round up the "sum" of the scores in each team
teamAScores = Math.round(sumOfScores(scoresA));
teamBScores = Math.round(sumOfScores(scoresB));

//display the result 
console.log(`The "Team A" score is ${teamAScores}`);
console.log(`The "Team B" score is ${teamBScores}`);

