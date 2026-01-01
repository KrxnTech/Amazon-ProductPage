import "./ProductCard.css"

function ProductCard({ img, title, features }) {
    const featurelist = features.map((feature) => (<li>{feature}</li>))
    return (
        <div className="CARD">
            <p className="PRODUCT_TITLE">{title}</p>
            <img className="IMAGE_" src={img} />
            <ul>{featurelist}</ul>
        </div>
    )
}

export default ProductCard