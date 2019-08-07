const Joi = require("joi");

const productIdValidation = Joi.object().keys({
  id: Joi.number().integer()
});

module.exports = { productIdValidation };
