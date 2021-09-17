export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
constructor(id, name, description='', price=0, imageUrl='https://fdn2.gsmarena.com/vv/pics/xiaomi/poco-m2-pro-01.jpg'){
    this.id = id
    this.name =name
    this.description=description
    this.price=price
    this.imageUrl=imageUrl
}
}
