import axios from 'axios';
import cors from 'cors'

export async function GET(req) {
  const headers = cors(req); // Apply CORS headers

  // Parse the URL to get query parameters
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query'); // Get the "query" parameter from URL

  if (!query) {
    return new Response(JSON.stringify({ error: `Failed to fetch users - query parameter missing` }), { status: 400, headers });
  }

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
      params: {
        input: query,
        key: process.env.GOOGLE_PLACES_API_KEY,
        types: "address",
        components: "country:us"
      }
    });
    return new Response(JSON.stringify(response.data), { status: 200, headers });

  } catch (error) {
    console.log("ERROR!!", error);
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500, headers });
  }
}
