export default function handler(req, res) {
  const code = req.query.code || "no code received";
  res.status(200).json({
    message: "Spotify callback test is working!",
    code: code,
  });
}
