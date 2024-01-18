
type Props = {
    id: string
    name: string
    price: number
    image: string
    category: string
}

const DetailProduct = ({ product }: { product: Props }) => {


    return (
        <div>
            <h1>{product.name}</h1>
            <div className='product-img'>
                <img src={product.image} alt="product" />
            </div>
            <h4 className="product-name">
                {product.name}
            </h4>
            <p className="product-category">
                {product.category}
            </p>
            <p className='product-price'> {product.price && product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} </p>
        </div>
    )
}

export default DetailProduct