const errorHandler = async (error, req, res, next) => {
    let status = 500;
    let msg = "Internal Server Error";

    if (
        error.message === "SequelizeValidationError" ||
        error.message === "SequelizeUniqueConstraintError"
    ) {
        status = 400;
        msg = error.errors.map(el => ( el.message ))
    } else if (error.message === "INVALID_TOKEN") {
        status = 401;
        msg = "Invalid token";
    }else if (error.message === "USER_NOT_FOUND") {
        status = 401;
        msg = "Invalid token";
    }
    res.status(status).json({ message: msg });
};

module.exports = errorHandler;
