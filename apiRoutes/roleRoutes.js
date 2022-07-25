const express = require("express");
const router = express.Router();
const db = require("../data/connection");

router.get("/role", (req, res) => {
  const sql = `SELECT role.id,role.tilte,role.salary, department.name 
                  AS derpartment
                  FROM role
                  LEFT JOIN department 
                  ON role.department_id = department.id`;

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

router.get("/role/:id", (req, res) => {
  const sql = `SELECT role.id,role.tilte,role.salary, department.name 
                  AS derpartment
                  FROM role
                  LEFT JOIN department 
                  ON role.department_id = department.id 
                  WHERE role.id = ?`;
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

router.post("/role", ({ body }, res) => {
  const sql = `INSERT INTO role (tilte,salary,department_id) VALUES (?,?,?)`;
  const params = [body.tilte, body.salary, body.department_id];

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

router.delete("/role/:id", (req, res) => {
  const sql = `DELETE FROM role WHERE id = ?`;

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
