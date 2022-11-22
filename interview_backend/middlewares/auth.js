const ApiError = require("../exceptions/apiError");

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res
            .status(err.status)
            .json({ status: err.status, message: err.message });
    }
    return res.status(500).json({ message: "Unexpected error" });
};
