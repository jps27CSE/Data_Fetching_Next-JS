import Link from "next/link";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const PageDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const data = await res.json();

  return (
    <div>
      <div
        key={data.id}
        className="w-[70%] mx-auto card card-compact mb-2  bg-grey-100 shadow-xl"
      >
        <figure>
          <imgage
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <p>Likes: {data.likesCount}</p>
          <div className="card-actions justify-end">
            <Link href={`/posts/`}>
              <button className="btn btn-primary">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
