<hr/>

# This is working at 100%. 

<hr/>

# Brief

Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .

<hr/>

# Task 

To create Password Reset Flow .

<hr/>

# Working with the Project

After that create a file with name config.js in the folder where server.js is located and put the below code inside it.

config.js

export default {
    JWT_SECRET : "<secret>",
    EMAIL: "kristopher.boyer64@ethereal.email", // testing email & password
    PASSWORD : "DYbQFMGmH3t3eKv2R8",
    ATLAS_URI: "<MONGODB_ATLAS_URI>"
}

    Note: The ATLAS_URI is important to work this project.

Now, create all these variables in the project and make sure you set ATLAS_URI variable. Otherwise, the project will not work.

<hr/>

# Back-end

Back-end which is used is equal to Node.js or NodeJS .

<hr/>

# Back-end Source code

Back-end Source code's link is equal to https://github.com/Jagadeesh-Kumar-Initial-Is-S/Login-App-with-ResetEmail-Backend .

<hr/>

# Back-end Deployed URL

Back-end Deployed URL's link is equal to https://login-app-with-resetemail-server.onrender.com/ .

<hr/>

# POST Methods

/register // register user <br/>
/registerMail // send the email<br/>
/authenticate // authenticate user<br/>
/login // login in app<br/>

<hr/>

# GET Methods 

/user/:username // user with username<br/>
/generateOTP // generate random OTP<br/>
/verifyOTP // verify generated OTP<br/>
/createResetSession // reset all the variables<br/>

<hr/>

# PUT Methods 

/updateuser // is use to update the user profile<br/>
/resetPassword // use to reset password<br/>

<hr/>
