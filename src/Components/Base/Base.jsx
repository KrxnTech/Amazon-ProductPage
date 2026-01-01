import "./Base.css"
import Heading from "../Heading/Heading.jsx"
import ProductCard from "../ProductCard/ProductCard.jsx"
import PriceLable from "../Pricelabel/Pricelable.jsx"

function Base() {
    let FEATURES1 = ["8000 DPI", "5 Programmable Buttons"]
    let FEATURES2 = ["Intuitive touch surface", "Designed for iPad Pro"]
    let FEATURES3 = ["Intuitive touch surface", "Designed for iPad Pro"]
    let FEATURES4 = ["Wireless Mouse 2.4GHz", "Optical Orientation"]
    return (
        <>
            <div className="BASE">

                <Heading />
                <div className="PRODUCT_DIV">
                    <ProductCard title="Logitech MX Master 3S" img="https://i.pcmag.com/imagery/reviews/00R2MBYMeiEv8pejtZ3DL4V-5..v1569481877.jpg" features={FEATURES1} />
                    <ProductCard title="Apple Pencil (2nd Gen)" img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MU8F2?wid=4000&hei=4000&fmt=jpeg&qlt=90&.v=1540596407165" features={FEATURES2} />
                    <ProductCard title="Zebronics Zeb-Transformer" img="https://m.media-amazon.com/images/I/51DY+QrEpOL.jpg" features={FEATURES3} />
                    <ProductCard title="Portronics Toad 23 Wireless Mouse" img="https://www.portronics.com/cdn/shop/products/1_afb1dad0-dbf2-4dab-8c4f-a64d73cd6446.jpg?v=1653546618" features={FEATURES4} />
                </div>

                <div className="PRICE_LABLE">
                    <PriceLable price_1={12495} price_2={8999} />
                    <PriceLable price_1={11900} price_2={9199} />
                    <PriceLable price_1={1599} price_2={899} />
                    <PriceLable price_1={599} price_2={278} />
                </div>

            </div>
        </>
    )
}

export default Base 