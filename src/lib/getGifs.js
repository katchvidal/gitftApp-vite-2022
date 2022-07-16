
export const getGifs = async (limit = 5, category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CqPoD5VK4PQUGcL5eAMhKPs6DTI5760y&q=${category}&limit=${limit}`
    const res = await fetch(url)
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log( gifs )
    return gifs;
}