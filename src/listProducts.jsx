 class Product {
        constructor(name, color, price) {
            this.name = name
            this.color = color
            this.price = price
        }
    }

    const tenis1 = new Product ('FASTZ Fit','black', '$199.90')
    const tenis2 = new Product ('FASTZ Casual','white', '$499.90')
    const tenis3 = new Product ('FASTZ Confortable','blue', '$99.90')
    const tenis4 = new Product ('FASTZ Street','red', '$49.90')

    const allShoes = [
        tenis1,
        tenis2,
        tenis3,
        tenis4,
    ]

export default allShoes
