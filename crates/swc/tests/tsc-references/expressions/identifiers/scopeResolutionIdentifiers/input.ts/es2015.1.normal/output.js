// EveryType used in a nested scope of a different EveryType with the same name, type of the identifier is the one defined in the inner scope
var s;
var M1;
(function(M11) {
    var s1;
    var n = s1;
    var n;
    M11.s = s1;
})(M1 || (M1 = {
}));
var M2;
(function(M2) {
    var s2;
    var n = s2;
    var n;
})(M2 || (M2 = {
}));
function fn() {
    var s3;
    var n = s3;
    var n;
}
class C {
    x() {
        var p = this.n;
        var p;
    }
    constructor(){
        this.n = this.s;
    }
}
var M3;
(function(M3) {
    var s4;
    let M4;
    (function(M4) {
        var n = s4;
        var n;
    })(M4 || (M4 = {
    }));
})(M3 || (M3 = {
}));
