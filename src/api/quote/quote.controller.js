const Quote = require("./quote.model");

const { setError } = require("../../helpers/error/handle.error");

const getQuotes = async (req, res, next) => {
  try {
    const quotes = await Quote.find();
    return res.json({
      status: 200,
      message: "Recovered all quotes",
      data: { quotes },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover quote"));
  }
};
const getQuote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findById(id);
    res.status(200).json(quote);
  } catch (error) {
    return next(error);
  }
};
const postQuote = async (req, res, next) => {
  try {
    const newQuote = new Quote(req.body);
    const newQuoteInDB = await newQuote.save();

    return res.json({
      status: 201,
      message: "Registered Quote",
      data: { newQuoteInDB },
    });
  } catch (error) {
    return next(error);
  }
};
const patchQuote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const quote = new Quote(req.body);
    quote._id = id;
    const updateQuote = await Quote.findByIdAndUpdate(id, quote);
    return res.status(200).json(updateQuote);
  } catch (error) {
    return next(error);
  }
};

const deleteQuote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findByIdAndDelete(id);
    return res.status(200).json(quote);
  } catch (error) {
    return next(error);
  }
};
module.exports = { getQuotes, getQuote, postQuote, patchQuote, deleteQuote };
