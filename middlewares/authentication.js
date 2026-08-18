const { validateToken } = require("../services/authentication");
function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];

        if (!tokenCookieValue) {
            console.log("❌ No token");
            return next();
        }

        try {
            const userPayload = validateToken(tokenCookieValue);

            console.log("Payload:", userPayload);

            req.user = userPayload;

            console.log("req.user:", req.user);
        } catch (error) {
            
        }

        next();
    };
}
module.exports={
    checkForAuthenticationCookie,
};