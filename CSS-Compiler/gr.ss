var variable = {}

SASS
variable.value = "value's value" + ";"
variable.name = "$" + "variable"

CSS
variable["tag"].
variable.class["classname"]
variable.id["IDname"]



VARIABLE [ ]

global namespace for all variables is VARIABLE and it contains all variables once entered.


$sass-variable:css-value;

CSS tag {
    css-property: $sass-variable; /* css-property: css-value */
}