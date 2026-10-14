export default async function handler(req, res) {

  try {

    const API_KEY = process.env.YOUTUBE_API_KEY;

    return res.status(200).json({
      apiKeyExiste: !!API_KEY
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }

}
