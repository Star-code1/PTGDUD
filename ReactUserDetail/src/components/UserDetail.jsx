import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", avatar: "https://th.bing.com/th/id/R.4b23a15e3291d3f864f817f05596e1d6?rik=KVyeY0Lqm01SsA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fman%2fman_PNG6513.png&ehk=1vXwKekWJITFtRudCtrbcnpu5bDACJvDhkVoPpHHn8M%3d&risl=&pid=ImgRaw&r=0" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", avatar: "https://static.vecteezy.com/system/resources/previews/035/832/826/non_2x/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com", avatar: "https://th.bing.com/th/id/OIP.tPCRyzGPnM7v3d5_KxSQvwHaKa?rs=1&pid=ImgDetMain" }
];

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === parseInt(id));
  return (
    <div className="container mt-5 text-center p-5 border border-2 border-success-subtle border-5 rounded shadow-lg bg-light w-25 m-auto">
      <img src={user.avatar} alt="avatar" className="rounded-circle mb-3" width={120} height={120} />
      <h1 className="fw-bold text-primary">{user.name}</h1>
      <p className="fw-bold text-danger fs-5 bg-danger-subtle p-3 rounded">Tuổi: {user.age}</p>
      <p className="fw-bold text-info fs-5 bg-warning-subtle p-3 rounded">Email: {user.email}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}

export default UserDetail;
