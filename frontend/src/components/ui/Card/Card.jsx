import "./Card.css";

function Card({ children }) {
    return (
        <div className="alpha-card">
            {children}
        </div>
    );
}

export default Card;