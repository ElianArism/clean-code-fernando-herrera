import { PostService } from "./dependency-inversion.excercise-b";

// Main
(async () => {
  const postService = new PostService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
