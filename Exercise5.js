
let dolphins;
let koalas;

const calcAverage = (score1, score2, score3) => (score2 + score3 + score1) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }
    else if (avgKoalas * 2 <= avgDolphins) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
    else {
        console.log("No team wins...")
    }
}
checkWinner(scoreDolphins, scoreKoalas);