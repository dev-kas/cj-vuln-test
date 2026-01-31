import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>hi</h1>
    <script>
      setTimeout(() => {
        window.location.href = "https://www.roblox.com/users/profile";
      }, 3000);
    </script>
  `);
});

app.listen(5500, () => {
  console.log("listening on http://localhost:5500");
});
