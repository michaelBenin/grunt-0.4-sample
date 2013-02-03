var app =(function(w, d) {

    var config = d.getElementById('config').JSON.parse();

    return {
        "version" : config.version
    }

}(window, document));