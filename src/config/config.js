const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(4000),
    MONGOODB_URL: Joi.string().trim().description("mongoodb url")
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log("config error", config);
};

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGOODB_URL,
        option: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};