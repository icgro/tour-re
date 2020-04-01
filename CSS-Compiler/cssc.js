let cssFullText = `$primary-grey: rgba(127,127,127,1);
$secondary-grey: rgba(172,172,172,1);

body {
    color: $primary-grey;
    margin: 0;
}`

// Find Lines

// $ must be first character
// $variableName + ":" + variableValue + ";"if (allLines[index][0] == "$")

// Anything between $ and : is the variable name
// first character not a number

// if (variableLines)

//
// Assign "-" to "_", 
//
// var primary_grey = variableValue

var csscLines = cssFullText.split('\n'); // split at newlines

function getVariableLines(allLines) {
    let variableLines = [];

    for (index in allLines) {
        console.log(allLines[index])

        if (allLines[index][0] == "$") {
            let varVal = allLines[index].split(":");
            variableLines.push({variableName: varVal[0], variableValue: varVal[1].replace(";", "")});
        }
    }

    return variableLines;
}

function processVariables(csscLines) {
    // get variable lines

    var variableLines = getVariableLines(csscLines);

    console.log(variableLines);
}