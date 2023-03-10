const mongoose = require("mongoose");
const constants = require("../utils/constants");
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now()
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now()
        }
    },
    verified: {
        type: String,
        required: constants.verificationSatus.notVerified
    },
    jobPost: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Job"
    }

});

module.exports = mongoose.model("Company", companySchema);