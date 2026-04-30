exports.handler = async function(event, context) {
    const PLACE_ID = 'ChIJvaPHDykVYA0R1KwIPElDb14';
    const API_KEY  = 'AIzaSyDRjI7pcF30kHpLOVvu0vPbrOTchZQPYQQ';

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}&language=es&reviews_sort=newest`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.result) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'No results' })
            };
        }

        const result = {
            name: data.result.name,
            rating: data.result.rating,
            total: data.result.user_ratings_total,
            reviews: (data.result.reviews || []).map(r => ({
                author: r.author_name,
                photo: r.profile_photo_url || '',
                rating: r.rating,
                text: r.text,
                time: r.time,
                relative: r.relative_time_description
            }))
        };

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=3600'
            },
            body: JSON.stringify(result)
        };

    } catch (err) {
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: err.message })
        };
    }
};
