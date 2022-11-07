import data from '../data/products.json'

export function getProducts(){
    return data.products;
}

export function getProduct(id: number){
    return data.products.find((product) => product.id === id);
}

export function deleteProduct(id: number) {
    data.products = data.products.filter((product) => product.id !== id);
}

export interface ProductDocument {
    products: Product[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }
