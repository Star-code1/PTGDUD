import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-danger">404 - Không tìm thấy trang</h1>
      <p>Trang bạn đang tìm không tồn tại.</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Về trang chủ</button>
    </div>
  );
}

export default NotFound;
