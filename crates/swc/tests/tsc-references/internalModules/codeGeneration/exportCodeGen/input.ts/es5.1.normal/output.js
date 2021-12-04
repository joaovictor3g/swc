function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
// should replace all refs to 'x' in the body,
// with fully qualified
var A;
(function(A1) {
    var lt12 = function lt12() {
        return x < 12;
    };
    A1.x = 12;
})(A || (A = {
}));
// should not fully qualify 'x'
var B;
(function(B) {
    var lt12 = function lt12() {
        return x < 12;
    };
    var x = 12;
})(B || (B = {
}));
// not copied, since not exported
var C;
(function(C) {
    var no = function no() {
        return false;
    };
})(C || (C = {
}));
// copies, since exported
var D;
(function(D1) {
    var yes = function yes() {
        return true;
    };
    D1.yes = yes;
})(D || (D = {
}));
// validate all exportable statements
var E;
(function(E1) {
    var fn = function fn() {
    };
    var Color;
    (function(Color) {
        Color[Color["Red"] = 0] = "Red";
    })(Color || (Color = {
    }));
    E1.fn = fn;
    var C1 = function C1() {
        "use strict";
        _classCallCheck(this, C1);
    };
    E1.C = C1;
    var M1;
    (function(M) {
        M.x = 42;
    })(M1 || (M1 = {
    }));
    E1.Color = Color, E1.M = M1;
})(E || (E = {
}));
// validate all exportable statements,
// which are not exported
var F;
(function(F) {
    var fn = function fn() {
    };
    var Color;
    (function(Color) {
        Color[Color["Red"] = 0] = "Red";
    })(Color || (Color = {
    }));
    var C2 = function C2() {
        "use strict";
        _classCallCheck(this, C2);
    };
    var M;
    (function(M) {
        var x = 42;
    })(M || (M = {
    }));
})(F || (F = {
}));
