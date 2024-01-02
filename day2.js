"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var day2 = function () {
    var inputAsString = fs.readFileSync('day2input.txt').toString();
    var inputAsArray = inputAsString.split("\n");
    var separators = /[;:]/;
    var sumOfIds = 0;
    inputAsArray.map(function (item) {
        var splitInput = item.split(separators);
        console.log(splitInput);
        splitInput.map(function (roundAsString, index2) {
            var roundIsPlayable = true;
            var round = {
                id: 0,
                green: 13,
                red: 12,
                blue: 14
            };
            var roundAsArray = roundAsString.split(',');
            roundAsArray.map(function (roundItem) {
                var roundItemNumber = Number(roundItem.split(" ")[1]);
                if (roundItem.includes('Game')) {
                    var roundId = Number(roundItem.slice(5, roundItem.length));
                    round.id = roundId;
                }
                if (roundItem.includes('red') && roundItemNumber > round.red) {
                    roundIsPlayable = false;
                }
                if (roundItem.includes('blue') && roundItemNumber > round.blue) {
                    roundIsPlayable = false;
                }
                if (roundItem.includes('green') && roundItemNumber > round.green) {
                    roundIsPlayable = false;
                }
            });
            if (roundIsPlayable === true) {
                // console.log(roundIsPlayable)
                sumOfIds += round.id;
            }
        });
    });
    // console.log(sumOfIds)
};
day2();
