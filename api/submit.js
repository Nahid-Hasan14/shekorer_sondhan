export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const scriptURL = process.env.GOOGLE_SCRIPT_URL;

    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(req.body).toString(),
    });

    const result = await response.text();
    return res.status(200).send(result);

  } catch (error) {
    return res.status(500).send('Error');
  }
}
