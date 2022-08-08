const Bus = require("../models/Bus.js");

async function show(req, res) {
  try {
    const buses = await Bus.all;

    res.json({
      buses: buses,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
}

async function create(req, res) {
  try {
    const name = req.body.name;
    const capacity = req.body.capacity;

    const created = await Bus.create(name, capacity);

    res.json({
      bus: created,
    });
  } catch (err) {
    // err.message only if you know it have a error obj with a
    res.json({
      error: err,
    });
  }
}

module.exports = {
  show,
  create,
};
