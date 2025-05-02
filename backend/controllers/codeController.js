// filepath: backend/controllers/codeController.js
const axios = require("axios");

const executeCode = async (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      script: code,
      language,
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    });

    if (response.data && response.data.output) {
      return res.json({ output: response.data.output });
    } else {
      return res
        .status(500)
        .json({ error: "Unexpected response from JDoodle API" });
    }
  } catch (error) {
    console.error("Error during code execution:", error.message);
    return res
      .status(500)
      .json({ error: "Code execution failed. Please try again later." });
  }
};

const convertCode = async (req, res) => {
  const { sourceCode, sourceLanguage, targetLanguage } = req.body;

  if (!sourceCode || !sourceLanguage || !targetLanguage) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Add your code conversion logic here
  res.json({ convertedCode: "Converted code will appear here." });
};

module.exports = { executeCode, convertCode };
