const db = require("../../db");

export default (req, res) => {
  if (req.method === "POST") {
    db.push(req.body);
    res.status(200).json(db);
  }
  if (req.method === "GET") {
    res.status(200).json(db);
  }
};
