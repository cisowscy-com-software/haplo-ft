const gui = require('nw.gui');
const fs = require('fs-extra');
let gui_Window_isMaximized  = false;
window.onload = function () {
    document.getElementById('windowControlQit').onclick = function () {
        window.close();
    };
    document.getElementById('windowControlMin').onclick = function () {
        gui.Window.get().minimize();
        //const app = require('nw.App');

    };
    document.getElementById('windowControlNew').onclick = function () {
        chrome.runtime.reload();
    };
    document.getElementById('windowControlABC').onclick = function () {
        //ss gui.Window.get().restore();
    };
    document.getElementById('windowControlMax').onclick = function () {
        if (gui_Window_isMaximized) {
            gui.Window.get().unmaximize();
            gui_Window_isMaximized  = false;
        } else {
            gui.Window.get().maximize();
            gui_Window_isMaximized  = true;
        }           
    };

    document.getElementById('windowControlFlat').onclick = function () {
        //var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
        //fs.ensureDirSync(require('path').resolve(require('path').dirname(process.execPath), './zupa'));  
    };
    //document.getElementById('dirThisApp').innerText = nw.App.getStartPath()+'\n'+nw.App.dataPath;

};
//win.isMaximized = false;

// Close


// Max
/** document.getElementById('windowControlMaximize').onclick = function()
 {
     if (win.isMaximized)
         win.unmaximize();
     else
         win.maximize();
 };

 win.on('maximize', function(){
     win.isMaximized = true;
 });

 win.on('unmaximize', function(){
     win.isMaximized = false;
 }); */