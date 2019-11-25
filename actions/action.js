export const GET_PHOTO = 'GET_PHOTO';
export const GET_PHOTOS = 'GET_PHOTOS';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
const token = "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";

export const getPhotos = () => dispatch =>{
        return fetch("https://api.unsplash.com/photos",{
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
               Accept: 'application/json',
              'Authorization': `Client-ID ${token}`
            }
          })
          .then(data=>data.json())
          .then(res=>dispatch(actionGetPhotos(res)));
    }

export const actionGetPhotos = photos=>({
    type:GET_PHOTOS,
    obj: photos
})
