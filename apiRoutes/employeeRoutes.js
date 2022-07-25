const express = require("express");
const router = express.Router();
const db = require("../data/connection");

router.get("/employee", (req, res) => {
  const sql = `SELECT e.id,
	            CONCAT(e.last_name,' ',e.first_name) AS employee,
	            IFNULL(CONCAT(m.last_name,' ',m.first_name),'Top manager') AS manager,
	            role.tilte AS position,
      	        role.salary AS wage
                FROM employee e 
                LEFT JOIN role ON e.role_id = role.id
                LEFT JOIN employee m ON e.manager_id = m.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.get("/employee/:id", (req, res) => {
  const sql = `SELECT e.id,
  CONCAT(e.last_name,' ',e.first_name) AS employee,
  IFNULL(CONCAT(m.last_name,' ',m.first_name),'Top manager') AS manager,
  role.tilte AS position,
    role.salary AS wage
  FROM employee e 
  LEFT JOIN role ON e.role_id = role.id
  LEFT JOIN employee m ON e.manager_id = m.id 
                   WHERE e.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

router.post("/employee", ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name, 
    body.role_id,
    body.manager_id
];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

router.delete("/employee/:id", (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Role not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = router;
