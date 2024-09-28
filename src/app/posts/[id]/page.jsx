// fetch details data
const getDetailsPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
const page = async ({ params }) => {
  console.log(params.id);
  const { title, body } = await getDetailsPosts(params.id);
  //   console.log(postsDetailsData)
  return (
    <div>
      <h6>Title:{title}</h6>
      <h6>description:{body}</h6>
    </div>
  );
};

export default page;
