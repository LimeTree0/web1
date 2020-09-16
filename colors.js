var Links = {
    setColor: function (color) {
        //     var links = document.querySelectorAll("a");
        //     for (var i = 0; i < links.length; i++) {
        //         links[i].style.color = color;
        //     }
        $('a').css('color', color);
    },
};
var Body = {
    setColor: function (color) {
        //document.querySelector("body").style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        //document.querySelector("body").style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
};
function nightDayHandler(self) {
    var target = document.querySelector("body");
    if (self.value == "night") {
        Body.setBackgroundColor("black"); //target.style.backgroundColor = "black";
        Body.setColor("white"); //target.style.color = "white";
        self.value = "day";
        Links.setColor("yellow");
    } else {
        Body.setBackgroundColor("white"); //target.style.backgroundColor = "white";
        Body.setColor("black"); //target.style.color = "black";
        self.value = "night";
        Links.setColor("blue");
    }
}