let term = new Terminal({
    allowTransparency: true,
    cursorBlink: true,
    scrollback: 1000,
    theme:{
        background: '#1a1919'
    }
  });
term.open(document.getElementById('terminal-container'));
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');


//window.onload = function () {
    $($("#terminal-container")[0].firstChild).addClass("boxCornerBottom");
    $($($("#terminal-container")[0].firstChild)[0].children[0]).removeAttr("style");
    $($($("#terminal-container")[0].firstChild)[0].children[1]).removeAttr("style");
    $($($("#terminal-container")[0].firstChild)[0].children[0]).removeClass( "xterm xterm-viewport" )
    $($($("#terminal-container")[0].firstChild)[0].children[0]).addClass("boxCornerBottom2");
    $($($("#terminal-container")[0].firstChild)[0].children[1]).addClass("boxCornerBottom");

//}