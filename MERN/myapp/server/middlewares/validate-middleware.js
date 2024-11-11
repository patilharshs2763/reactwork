const validate = (schema) => async (req, res, next) => {
    try {
        // Using parseAsync method to asynchronously parse the request body
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {

        // Send the first error message from the errors array
        // const errorMessage = error.errors[0]?.message || "Validation failed!";
        // console.log("Error:", errorMessage);
        // res.status(400).json({ msg: errorMessage });

        // console.log(error);
        // res.status(400).json({ msg: "Validation failed!", errors: error.errors[0] });

        //Sending errors to error middleware
        const status = 422;
        const message = "Fill the input properly!";
        const extraDetails = error.errors[0].message;
        const er = {    //object of error
            status,
            message,
            extraDetails,
        };
        console.log(er);
        next(er);
    }
};
module.exports = validate;
// export default validate