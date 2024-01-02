"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var day1 = function () {
    var fileAsString = fs.readFileSync('day1input.txt').toString();
    fileAsString = fileAsString.replace(/twone/g, "21");
    fileAsString = fileAsString.replace(/sevenine/g, "79");
    fileAsString = fileAsString.replace(/oneight/g, "18");
    fileAsString = fileAsString.replace(/threeight/g, "38");
    fileAsString = fileAsString.replace(/nineight/g, "98");
    fileAsString = fileAsString.replace(/fiveight/g, "58");
    fileAsString = fileAsString.replace(/eighthree/, "83");
    fileAsString = fileAsString.replace(/eightwo/g, "82");
    fileAsString = fileAsString.replace(/one/g, "1");
    fileAsString = fileAsString.replace(/two/g, "2");
    fileAsString = fileAsString.replace(/three/g, "3");
    fileAsString = fileAsString.replace(/four/g, "4");
    fileAsString = fileAsString.replace(/five/g, "5");
    fileAsString = fileAsString.replace(/six/g, "6");
    fileAsString = fileAsString.replace(/seven/g, "7");
    fileAsString = fileAsString.replace(/eight/g, "8");
    fileAsString = fileAsString.replace(/nine/g, "9");
    var fileAsArray = fileAsString.split("\n");
    var answer = 0;
    var numberAsString = '';
    fileAsArray.forEach(function (line) {
        var lineNumberAsString = '';
        for (var i = 0; i < line.length; i++) {
            if (Number(line[i])) {
                lineNumberAsString = line[i];
                break;
            }
        }
        for (var i = line.length; i >= 0 - 1; i--) {
            if (Number(line[i])) {
                lineNumberAsString = lineNumberAsString + line[i];
                break;
            }
        }
        answer += Number(lineNumberAsString);
    });
    console.log(answer);
};
day1();
