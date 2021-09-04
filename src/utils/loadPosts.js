import axios from "axios";

export const getPosts = async () => {
  const postsResponse = axios.get("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsAndPhotos = await posts.data.map((post, index) => {
    return { ...post, cover: photos.data[index].url };
  });

  return postsAndPhotos;
};
