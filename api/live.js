export default async function handler(req, res) {

  const API_KEY = process.env.YOUTUBE_API_KEY;

  try {

    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search` +
      `?part=snippet` +
      `&channelId=UCig8aKQHLt8E35_LJKwOscA` +
      `&eventType=live` +
      `&type=video` +
      `&maxResults=1` +
      `&key=${API_KEY}`
    );

    const searchData =
      await searchResponse.json();

    if (
      !searchData.items ||
      searchData.items.length === 0
    ) {

      return res.status(200).json({
        live:false
      });

    }

    return res.status(200).json({
      live:true,
      videoId:
        searchData.items[0].id.videoId
    });

  } catch(err) {

    return res.status(500).json({
      error:err.message
    });

  }

}
