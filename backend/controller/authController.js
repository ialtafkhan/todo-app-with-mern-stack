const user = require("../modal/userModal")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")




exports.login = async (req, res) => {

    try {
        let { email, password, name } = req.body
        const result = await user.findOne({ email })

        if (!result) {
            return res.status(401).json({
                success: false,
                message: "email not found"
            })

        }

        console.log(result);

        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({
                success: false,
                message: "password not found"
            })

        }

        console.log(verify);
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
        return res.status(200).json({
            success: true,
            message: "user login succesfully",
            result: {
                token,
                name: result.name,
                email: email
            }
        })


    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "error" + error
        })




    }



}