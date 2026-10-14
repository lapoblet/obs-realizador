export default async function handler(req, res) {

  const API_KEY = process.env.YOUTUBE_API_KEY;

  try {

    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search` +
      `?part=snippet` +
      `&channelId=UCz8QaiQxApLq8sLNcszYyJw` +
      `&eventType=live` +
      `&type=video` +
      `&maxResults=1` +
      `&key=${API_KEY}`
    );

    const searchData = await searchResponse.json();

    return res.status(200).json(searchData);

  } catch(err) {

    return res.status(500).json({
      error: err.message
    });

  }

}
