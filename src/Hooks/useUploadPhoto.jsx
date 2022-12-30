import React, { useEffect, useState } from 'react';

    // update user
    // console.log(image);
    const imageHostKey = import.meta.env.VITE_imgbb_key;

    const useUplodPhoto = (image) => {

    const [uploadPhoto, setUploadPhoto] = useState("");
    const [isUploadPhotoLoading, setIsUploadPhotoLoading] = useState(true);

    useEffect(() => {

        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imageData) => {
            if (imageData.status) {
              const photoLink = imageData.data.url;
              console.log(photoLink);
              if (photoLink) {
                    setUploadPhoto(photoLink);
                    setIsUploadPhotoLoading(false);
                }
            }
        }) 

    }, [image])
    console.log(uploadPhoto, isUploadPhotoLoading);

    return [uploadPhoto, isUploadPhotoLoading];

};

export default useUplodPhoto;

