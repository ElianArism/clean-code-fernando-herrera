import { PostProvider } from "./dependency-inversion.solution-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  // aplicando inyeccion de dependencias junto con inversion de dependencias
  // al definir el provider como una abstraccion
  constructor(private readonly postProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
