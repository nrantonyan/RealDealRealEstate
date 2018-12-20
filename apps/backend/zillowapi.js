var Zillow = require("node-zillow")

var zillow = new Zillow(X1-ZWz187ifmasdfv_1fz14)

var parameters = {
    address: "2114 Bigelow Ave",
    citystatezip: "Seattle, WA",
    rentzestimate: false
}

zillow.get('GetSearchResults', parameters)
    .then(function(results) {
        console.log(results)
        return results;
    })