export default async function handler(req, res) {

  const API_KEY = process.env.YOUTUBE_API_KEY;

  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?part=snippet` +
    `&channelId=UChs0pSaEoNLV4mevBFGaoKA` +
    `&type=video` +
    `&order=date` +
    `&maxResults=5` +
    `&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return res.status(200).json(data);

}
