// filepath: backend/routes/codeRoutes.js
const express = require("express");
const { executeCode, convertCode } = require("../controllers/codeController");
const router = express.Router();

router.post("/execute", executeCode);
router.post("/convert", convertCode);

module.exports = router;
