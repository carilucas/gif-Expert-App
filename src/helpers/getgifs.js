export const getGifs = async(category)=>{
   const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bRWSlDNKQ3bI7tNLcHIv9rqI5kAwGtjr&q=${category}&limit=10`);
   const {data} = await resp.json();

   const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
   }))

   return gifs;

} 