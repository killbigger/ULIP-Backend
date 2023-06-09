const expressJwt = require('express-jwt');

 function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return  expressJwt({
        secret,
        algorithms: ['HS256'],
        // isRevoked: isRevoked,
    }).unless({
        path: [
            `${api}/cities`,
            // `${api}/hubs/findhub`,
            // `${api}/hubs/addshipment`,
            `${api}/users/`,
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
}


// async function isRevoked(req, payload, done) {
//     if(!payload.isAdmin) {
//         done(null, true)
//     }

//     done();
// }



module.exports = authJwt