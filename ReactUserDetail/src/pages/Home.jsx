import UserList from "../components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container m-auto mt-5 text-center p-3 bg-success-subtle rounded shadow w-50">
      <div className="bg-light ps-5 pe-5 pb-2 pt-3 rounded shadow-sm">
        <h1 className="mb-4">Danh sách người dùng</h1>
        <UserList />
      </div>
    </div>
  );
}
export default Home;