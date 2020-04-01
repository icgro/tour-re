var sass = `$font-stack:    Helvetica, sans-serif;
$primary-color: #333;
$mainWidth: 800px;`;

var sassLines = sass.split(`\n`);

/*
[
    "$font-stack: Helvetica, sans-serif;",
    "$primary-color: #333;"
];
*/

var varStack = [];

for (let index in sassLines) {
    let varVal = sassLines[index].replace(";", "").split(":");

    varStack.push({
        string: varVal[0],
        replacement: varVal[1]
    });
}


var scss = `body {
    font-family: $font-stack;
    color: $primary-color;
}

.container {
    width: $mainWidth;
}`;

for (var i = 0; i < varStack.length; i++) {
    scss = scss.replace(varStack[i].string, varStack[i].replacement);
}