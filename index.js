const { error } = require('console');
const inquirer = require('inquirer');

// regular expression for valid colour hex code
const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
// list of colours that js has predefined
const predefinedColours = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
"BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk",
"Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
"DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
"DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
"DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
"GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
"Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
"LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
"LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime",
"LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
"MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue",
"MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange",
"OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff",
"Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown",
"Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
"SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
"Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

/* create an array of user input */
const questions = [
    // text for the logo
    {
        type: 'input',
        name: 'text',
        message: 'Enter a text(up to 3 characters): ',
        validate: function(input){
            if (input.length > 3 || input.length < 1) {
                return 'Please enter a text(up to 3 characters)';
            }
            return true;
        }
    },
    // colour of the text
    {
        type: 'input',
        name: 'text-colour',
        message: 'Enter a text-colour: ',
        validate: function(input){
            if ((!(predefinedColours.includes(input))) && (!(hexRegex.test(input)))) {
                return 'Please enter a valid colour in hex format (#RRGGBB) or valid predefined colour';
            }
            return true;
        }
    },
    // shape of the logo
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape: ',
        choices: ['rectangle', 'triangle', 'circle'],
        validate: function(input) {
            if(input.length === 0) {
                return 'Please select a shape.';
            }
            return true;
        }
    },
    // colour of the shape
    {
        type: 'input',
        name: 'shape-colour',
        message: 'Enter a shape-colour: ',
        validate: function(input){
            if ((!(predefinedColours.includes(input))) && (!(hexRegex.test(input)))) {
                return 'Please enter a valid colour in hex format (#RRGGBB) or valid predefined colour';
            }
            return true;
        }
    }
];

/* function where inquirer is called */
function init(){
    inquirer.prompt(questions)
        .then(answers => console.log(answers))
        .catch(error => {console.log.error});
    return;
}

init();