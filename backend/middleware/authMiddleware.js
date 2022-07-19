const jwt = require("jsonwebtoken")


exports.logiOnly = async (req, res, next) => {

    try {

        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "invalid token"

            })
        }

        const { id } = jwt.verify(token, process.env.JWT_KEY)

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "invalid id"
            })
        }

        // req.body.userId

        next()

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error" + error
        })


    }



}
