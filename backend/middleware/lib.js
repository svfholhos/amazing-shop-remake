const Joi = require("joi");

const validatePathParams = schema => (req, res, next) => {
  const result = Joi.validate(req.params, schema);
  if (result.error === null) {
    next();
  } else {
    return res.status(400).json({ error: "invalid id..." });
  }
};

module.exports = { validatePathParams };
