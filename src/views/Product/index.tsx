import styles from './Product.module.scss'

type Props = {
    id: string
    name: string
    price: number
    image: string
    category: string
}


const ProductView = ({ products }: { products: Props[] }) => {
    console.log(products);

    return (
        <div className={styles.product} >
            <h3 className='text-3xl font-semibold mb-5' >Product</h3>
            <div className={`flex  ${styles.product_content}`}>
                {products.map((products: any) => (
                    <div className={styles.product_content_item} key={products.id}>
                        <h1>{products.name}</h1>
                        <div className={styles.product_img}>
                            <img src={products.image} alt="product" />
                        </div>
                        <h4 className="product-name">
                            {products.name}
                        </h4>
                        <p className="product-category">
                            {products.category}
                        </p>
                        <p className='product-price'> {products.price} </p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default ProductView