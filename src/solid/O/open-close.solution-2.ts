import { HttpClient } from "./open-close.solution-3";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export class TodoService {
  constructor(private http: HttpClient) {}

  async getTodoItems() {
    return this.http.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos/"
    );
  }
}

export class PostService {
  constructor(private http: HttpClient) {}

  async getPosts() {
    return this.http.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }
}

export class PhotosService {
  constructor(private http: HttpClient) {}

  async getPhotos() {
    return this.http.get<Photo[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );
  }
}
