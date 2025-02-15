const {constants} = require("../constants");
const { stack } = require("../routes/contactRoutes");


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case NOT_FOUND:
            res.json({title: "Not found",message: err.message, stackTrace: err.stack});
            break;
        case UNAUTHORIZED:
            res.json({title: "Unauthorized.",message: err.message, stackTrace: err.stack});
            break;
        case FORBIDDEN:
            res.json({title: "Forbidden.",message: err.message, stackTrace: err.stack});
            break;
        case SERVER_ERROR:
            res.json({title: "Server error.",message: err.message, stackTrace: err.stack});
            break;
        default:
            console.log("No error, all good.");
            break;
    }
    
    
};

module.exports = errorHandler