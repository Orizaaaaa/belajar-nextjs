import styles from './Product.module.scss'

type Props = {
    id: string
    name: string
    price: number
    image: string
    category: string
}


const ProductView = ({ products }: { products: Props[] }) => {

    return (
        <div className={styles.product} >
            <h3 className='text-3xl font-semibold mb-5' >Product</h3>
            {products.map((products: any) => (
                <div key={products.id}>
                    <h1>{products.name}</h1>
                </div>
            ))}

        </div>
    )

}
export default ProductView