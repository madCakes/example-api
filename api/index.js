const api = require("./api.js");

const port = 3000;

api.listen(process.env.PORT || port, () => {
  console.log(`Listening on ${port} ✅✅✅`);
});
