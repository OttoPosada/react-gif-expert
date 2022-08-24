export const getGifs = async(category) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=VVyX6p6o99Z0h5sihll696SWhIcT6Ey8&q=${category}&limit=20`
    const resp = await fetch( url );
    
    const { data = [] } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })

    )
   
    return gifs;
}