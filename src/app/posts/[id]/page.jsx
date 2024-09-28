// fetch details data
const getDetailsPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
const page = async ({ params }) => {
  console.log(params.id);
  const postsDetailsData = await getDetailsPosts(params.id);
  console.log(postsDetailsData)
  return (
    <div>
      <h2>posted details of id=${params.id}</h2>
    </div>
  );
};

export default page;
