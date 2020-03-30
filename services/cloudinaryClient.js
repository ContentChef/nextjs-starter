import CloudinaryClient from 'cloudinary-core';

class Cloudinary {
    client = undefined;

    constructor() {
        this.client = new CloudinaryClient.Cloudinary({ secure: true })
    }

    getCloudinaryPublicUrl = (publicId, cloud_name) => {
        return this.client.url(publicId, { cloud_name });
    }
}

export const cloudinary = new Cloudinary();
