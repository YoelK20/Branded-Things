import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();
  function handleDetail(id) {
    navigate(`/products/detail/${id}`);
  }
  return (
    <>
      <div className="card bg-gray-100 shadow-2xl flex flex-row hover:scale-110 transition-transform">
        <figure>
          <img src={product.imgUrl} className="w-40" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge mx-2 badge-error">NEW</div>
          </h2>
          <p>{product.description}</p>
          <div className="badge badge-outline">{product.Category.name}</div>
          <div className="justify-end card-actions">
            <button
              onClick={() => handleDetail(product.id)}
              className="btn btn-ghost btn-accent"
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
