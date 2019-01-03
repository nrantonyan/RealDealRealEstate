var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy ({
    clientID: "451217140697-ul14vi9di51d1dshna4c239vg489bujn.apps.googleusercontent.com",
    clientSecret: "c9qEaLbJRwaXVBRxP5tmXaxJ",
    callbackURL: "../views/index.html",
},

function(accessToken, refreshToken, profile, done) {
    User.findorCreate({ googleId: profile.id}, function (err, user) {
        return done(err, user);
    });
}
));