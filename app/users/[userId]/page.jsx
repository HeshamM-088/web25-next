import axios from "axios";

const getUser = async (id) => {
  const data = await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });

  return data.data;
};

const getPosts = async () => {
  const data = await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/`,
  });

  return data.data;
};

const getDogs = async () => {
  const data = await axios({
    method: "get",
    url: `https://dog.ceo/api/breeds/image/random`,
  });

  return data.data;
};

const UserInfo = async ({ params }) => {
  const { userId } = params;

  const user = await getUser(userId);
  const posts = await getPosts();
  const dogs = await getDogs();

  return (
    <div className="text-center">
      <h1>UserInfo</h1>
    </div>
  );
};

export default UserInfo;
