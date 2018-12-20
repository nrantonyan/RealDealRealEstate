var Zillow = require("node-zillow")

var zillow = new Zillow('X1-ZWz187ifmasdfv_1fz14')

var parameters = {
    address: "12640 Classics Drive",
    citystatezip: "Granada Hills, CA",
    rentzestimate: false
}
zillow.get('GetSearchResults', parameters)
    .then(results => {
        var zestimate = results.response.results.result[0].zestimate[0].amount;
        console.log(zestimate)
        return results
    })


