import { PostService } from "./dependency-inversion.solution-b";
import { WebApiProvider } from "./dependency-inversion.solution-c";

// Main
(async () => {
  // aplicando inyeccion e inversion de dependencias
  // Ahora que aplicamos inversion de dependencias es indiferente que provider especificamos
  // Siempre y cuando cumpla las reglas de nuestra abstraccion
  // Es muy importante no depender  (tener dependencias) de implementaciones concretas sino de abstracciones
  // const postService = new PostService(new JSONDatabaseService());
  // const postService = new PostService(new LocalDataBaseService());
  const postService = new PostService(new WebApiProvider());

  const posts = await postService.getPosts();

  console.log({ posts });
})();
