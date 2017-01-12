function Parser(string) {
    var index = 0;
    var str = string;

    var parse = function () {
        var c, label, left, right;
        c = str.charAt(index);
        if (c.search(/^[a-zA-Z]$/) === 0) {
            label = c;
            ++index;
            ++index;
            left = parse();
            ++index;
            right = parse();
            ++index;

            return { label: label, left: left, right: right };
        } else {
            if(c === "," || c === ")") {
                return null;
            } else {
                throw "error";
            }
         }
    };

    return parse();
}

var s = "abcded";
var c = s.charAt(3);
console.log(c);

var r = Parser("a(,)");
console.log(r);
r = Parser("a(b(,),c(,))");
console.log(r);

r = Parser("A(B(,C(,)),D(,))");
console.log(r);