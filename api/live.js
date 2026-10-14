export default async function handler(req, res) {

  const API_KEY = process.env.YOUTUBE_API_KEY;

  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?part=snippet` +
    `&channelId=UChs0pSaEoNLV4mevBFGaoKA` +
    `&eventType=live` +
    `&type=video` +
    `&maxResults=1` +
    `&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || data.items.length === 0) {

    return res.status(200).json({
      live: false
    });

  }

  return res.status(200).json({
    live: true,
    videoId: data.items[0].id.videoId
  });

}
