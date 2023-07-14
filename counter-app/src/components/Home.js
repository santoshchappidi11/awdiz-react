import { useNavigate } from "react-router-dom";

function Home() {
  const navigateTo = useNavigate();

  return (
    <div>
      <h3>Home</h3>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => navigateTo("/backend-products")}
      >
        Fetch Products
      </button>
    </div>
  );
}

export default Home;
