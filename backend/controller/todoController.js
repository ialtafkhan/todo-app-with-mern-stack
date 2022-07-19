const todo = require("../modal/todoModol")

exports.getAllTodo = async (req, res) => {
    console.log(req.body);

    try {
        const result = await todo.find()
        res.status(200).json({
            count: result.length,
            success: true,
            message: "get all todo",
            result
        })
        console.log(result);

    } catch (error) {

        res.status(400).json({

            success: false,
            message: "somthing wro2ng"
        })

    }

}
exports.getSingleTodo = async (req, res) => {

    try {
        const result = await todo.findById(req.params.id)
        res.status(200).json({
            count: result.length,
            success: true,
            message: "get single todo",
            result
        })

    } catch (error) {

        res.status(400).json({

            success: false,
            message: "somthing wro2ng"
        })

    }

}



exports.addTodo = async (req, res) => {
    console.log("xxxxx");
    console.log(req.body);
    try {
        const result = await todo.create(req.body)
        res.status(200).json({

            success: true,
            message: "todo added successfuly",
            result
        })
        console.log(result);

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "somthing wrong "
        })

    }

}



exports.updateTodo = async (req, res) => {
    console.log(req.body);
    try {
        if (!req.params.id) {
            throw new Error("plese provide userid")
        }
        const result = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log("xxxxxxx");
        console.log(result);
        console.log("xxxxxx");
        res.status(200).json({
            success: true,
            message: "todo updated successfuly",
            result
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "somthing wrong"
        })

    }


}
exports.updateStatus = async (req, res) => {
    console.log("yyyyyyyyyyy");
    console.log(req.body);
    console.log("yyyyyyyyyyy");
    try {

        const result = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log("xxxxxxx");
        console.log(result);
        console.log("xxxxxx");
        res.status(200).json({
            success: true,
            message: "status updated successfuly",
            result
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "somthing wrong"
        })

    }


}


exports.deleteAllTodo = async (req, res) => {
    try {
        const result = await todo.deleteMany()
        res.status(200).json({
            success: true,
            message: "todo deleted",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "somthing wrong "
        })

    }

}



exports.deleteSingleTodo = async (req, res) => {
    try {
        const result = await todo.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "All todo Deleted",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "somthing wrong "
        })

    }

}