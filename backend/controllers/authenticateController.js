const Profiles = require("../resources/profiles")

const authenticateUser = (request,response) => {
    const {usertype} = request.query
    console.log(usertype)
    response.json(Profiles)
}

module.exports = {
    authenticateUser
}