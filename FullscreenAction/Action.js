//
//  Action.js
//  FullscreenAction
//
//  Created by Nathan Toone on 4/19/18.
//  Copyright © 2018 Nathan Toone. All rights reserved.
//

var Action = function() {};

Action.prototype = {
    
    run: function(arguments) {
        // This method is run when the page loads, and can modify the document and/or prepare things before calling
        // into native code

        // Call into native code
        arguments.completionFunction({});
    },
    
    finalize: function(arguments) {
        // This method is run after the native code completes.
        var v = document.querySelector("video");
        if (v) { v.webkitEnterFullScreen(); }
    }
    
};
    
var ExtensionPreprocessingJS = new Action;
