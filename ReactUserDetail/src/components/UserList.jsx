import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", avatar: "https://th.bing.com/th/id/R.4b23a15e3291d3f864f817f05596e1d6?rik=KVyeY0Lqm01SsA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fman%2fman_PNG6513.png&ehk=1vXwKekWJITFtRudCtrbcnpu5bDACJvDhkVoPpHHn8M%3d&risl=&pid=ImgRaw&r=0" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", avatar: "https://static.vecteezy.com/system/resources/previews/035/832/826/non_2x/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com", avatar: "https://th.bing.com/th/id/OIP.tPCRyzGPnM7v3d5_KxSQvwHaKa?rs=1&pid=ImgDetMain" }
];

function UserList() {
  return (
    <div className="container mt-4 text-center">
      <ul className="list-group w-50 m-auto">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex align-items-center p-3 shadow-sm rounded border border-success-subtle mb-2 transition"
            style={{ transition: "0.3s", cursor: "pointer" }}
          >
            <img src={user.avatar} alt="avatar" className="rounded-circle me-3" width={50} height={50} />
            <Link
              className="text-success fs-5 text-decoration-none fw-bold flex-grow-1"
              to={`/user/${user.id}`}
              style={{ transition: "0.3s" }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
