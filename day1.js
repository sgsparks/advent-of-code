"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var day1 = function () {
    var filesString = fs.readFileSync('day1input.txt').toString();
    filesString = filesString.replace(/twone/g, "21");
    filesString = filesString.replace(/sevenine/g, "79");
    filesString = filesString.replace(/oneight/g, "18");
    filesString = filesString.replace(/threeight/g, "38");
    filesString = filesString.replace(/nineight/g, "98");
    filesString = filesString.replace(/fiveight/g, "58");
    filesString = filesString.replace(/eighthree/, "83");
    filesString = filesString.replace(/eightwo/g, "82");
    filesString = filesString.replace(/one/g, "1");
    filesString = filesString.replace(/two/g, "2");
    filesString = filesString.replace(/three/g, "3");
    filesString = filesString.replace(/four/g, "4");
    filesString = filesString.replace(/five/g, "5");
    filesString = filesString.replace(/six/g, "6");
    filesString = filesString.replace(/seven/g, "7");
    filesString = filesString.replace(/eight/g, "8");
    filesString = filesString.replace(/nine/g, "9");
    var fileAsArray = filesString.split("\n");
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
