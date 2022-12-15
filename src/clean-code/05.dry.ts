class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: "" | "M" | "L" | "S" | "XL" | "XS" = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>this[key]).length <= 0)
            throw Error(`${key} is empty`)
          break
        case "number":
          if (<number>this[key] <= 0) throw Error(`${key} is empty`)
          break
        default:
          throw Error(
            `sended data type not supported in field ${key}`
          )
      }
    }
    return true
  }

  toString(): string {
    return `${this.name} ($${this.price}) ${this.size}`
  }
}

;(() => {
  const product = new Product("Jeans", 100, "M")
  console.log(product.toString())
})()
