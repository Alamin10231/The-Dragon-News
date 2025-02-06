import React from "react";
import Header from "../Header";
import Right from "../mainstructure/Right";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
console.log(data)
   const news = data.data[0]
  console.log(news);
  return (
    <div>
      <Header></Header>
      <main className="w-11/12 mx-auto grid grid-cols-12 ">
        <section className="col-span-9">
        <div className="card bg-base-100 ">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to category</Link>
    </div>
  </div>
</div>
        </section>
        <aside className="col-span-3">
          <Right></Right>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
