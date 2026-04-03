export default async function handler(req, res) {
  const url = "GOOGLE_SCRIPT_URL";

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}