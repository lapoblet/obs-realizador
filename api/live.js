export default async function handler(req, res) {

  const API_KEY = process.env.YOUTUBE_API_KEY;

  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?part=snippet` +
    `&channelId=UCLKpB5WGbfi1GH2zMNzx4DA` +
    `&order=date` +
    `&type=video` +
    `&maxResults=1` +
    `&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || !data.items.length) {

    return res.status(200).json({
      live:false
    });

  }

  return res.status(200).json({
    live:true,
    videoId:data.items[0].id.videoId
  });

}
