require("dotenv").config();

export default {

    JWT_SECRET : process.env.JWT_SECRET,

    EMAIL: process.env.EMAIL, // testing email & password

    PASSWORD : process.env.PASSWORD,

    ATLAS_URI: process.env.ATLAS_URI
}