var Zillow = require("node-zillow")

var zillow = new Zillow('X1-ZWz187ifmasdfv_1fz14')

var parameters = {
    address: "12640 Classics Drive",
    citystatezip: "Granada Hills, CA",
    rentzestimate: false
}
zillow.get('GetSearchResults', parameters)
    .then(results => {
        var zestimate = results.response.results.result[0].zestimate[0].amount[0];
        var homeDetails = results.response.results.result[0].links[0].homedetails[0];
        var mapThisHome = results.response.results.result[0].links[0].mapthishome[0];
        var comparables = results.response.results.result[0].links[0].comparables[0];

        console.log(zestimate);
        console.log(homeDetails);
        console.log(mapThisHome);
        console.log(comparables);
        return results
    })


