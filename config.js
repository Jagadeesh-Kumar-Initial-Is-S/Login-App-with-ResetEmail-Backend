
    require("dotenv").config();

export default {

    JWT_SECRET : process.env.JWT,

    EMAIL: process.env.EMAIL, // testing email & password

    PASSWORD : process.env.PASSWORD,

    ATLAS_URI: process.env.URL
}

