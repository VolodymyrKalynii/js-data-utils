/**
 * @param imagesSrc - Arr<imagePath> | imagePath
 * imagePath - path to image can be like require('_assets/img/../../[name].png')
 */
export const preloadImages = (imagesSrc:Array<string>|string) => {
    if (typeof imagesSrc === 'string') {
        preloadImage(imagesSrc);
    } else {
        imagesSrc.forEach(src => preloadImage(src));
    }
};

/**
 * @param imagesSrc - path to image can be like require('_assets/img/../../[name].png')
 */
export const preloadImage = (imagesSrc:string) => {
    const image = new Image();

    try {
        image.src = imagesSrc;
    } catch (e) {
        console.error(e);
    }
};