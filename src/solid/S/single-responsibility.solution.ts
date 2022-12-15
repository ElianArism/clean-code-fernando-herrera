(() => {
  interface Product {
    id: number;
    name: string;
  }

  class CartBloc {
    onAddToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  class ProductService {
    loadProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }

  class ProductBloc {
    constructor(
      private readonly mailer: Mailer,
      private readonly productService: ProductService
    ) {}

    loadProduct(id: number) {
      this.productService.loadProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.notifyClients();
    }
  }

  const productBloc = new ProductBloc(
    new Mailer(),
    new ProductService()
  );
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
