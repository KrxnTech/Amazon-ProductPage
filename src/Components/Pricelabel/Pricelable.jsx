import "./Pricelable.css"
function PriceLable({ price_1, price_2 }) {
    return (
        <div className="PRICELABLE">
            <p className="PRICE_1">&#8377;{price_1}</p>
            <p className="PRICE_2">&#8377;{price_2}</p>
        </div>
    )
}

export default PriceLable