var leapYear = function(a){
if (Number.isInteger(a) && a > 1){
if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) { return true;}}
if (a != 4){ return false;};
}
