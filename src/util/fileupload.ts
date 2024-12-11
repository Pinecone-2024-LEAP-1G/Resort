import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dnszjq12z",
  api_key: "197478141627578",
  api_secret: "k6YjB1sHv6w4agkPsyeDgGhvh30",
});

// Upload an image
export const uploadImage = async () => {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d422d42e0efdf9e1971e55327ee91cb6?_a=AQAEuiZ",
      {
        folder: "uber-dash",
        public_id: "example-image",
        transformation: [{ width: 500, height: 500, crop: "limit" }],
      },
    );

    console.log("Image uploaded successfully:", result);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
