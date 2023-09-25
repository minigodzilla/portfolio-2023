const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

process.env.NODE_ENV = "development";

app.use(express.static("public"));

const excludedPaths = ["/assets", "/css", "/js"];

// Catch-all route for all paths except excluded ones
app.get("*", (req, res) => {
  const shouldExclude = excludedPaths.some((path) => req.url.startsWith(path));

  if (shouldExclude) {
    // Pass through to the next middleware or route handler
  }

  const rewrittenUrl = `/#${req.url.substring(1)}`;
  const betterRewrittenUrl = rewrittenUrl.split("?")[0];
  res.redirect(betterRewrittenUrl);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
