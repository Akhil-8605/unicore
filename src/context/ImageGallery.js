import { createContext, useContext } from "react";

const ImageGallery = createContext({
    imageGallery:  [
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img.png?updatedAt=1741013196518",
            caption: "Campus"
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img2.png?updatedAt=1741013201220",
            caption: "Campus"
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img3.png?updatedAt=1741013205191",
            caption: "Campus Ground"
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img1-.png?updatedAt=1741013207782",
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img1.png?updatedAt=1741013209989",
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img5.png?updatedAt=1741013212462",
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/campus-img4.png?updatedAt=1741013212562",
        },
        {
            url: "https://ik.imagekit.io/2kxsego5o5/compus-img.png?updatedAt=1741013490721",
            caption: "Librabry"
        },
    ],
    addImage: (url) => {},
    deleteImage: (url) => {},
});

export const ImageGalleryProvider = ImageGallery.Provider;


export const useImageGallery = () => {
  return useContext(ImageGallery);
};

