import { useState } from "react";
import Card from "./Card";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Linen tie-belt dress",
      description:
        "Calf-length dress in airy linen with a gathered neckline and a V-shaped opening at the front with a discreet hook-and-eye fastener.",
      price: 380000,
      stock: 30,
      imgUrl:
        "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/2b47d9c1d312ddd680effd70024dc06ab0915ac8_xxl-1.jpg",
      categoryId: 1,
      authorId: 1,
      createdAt: "2024-01-08T08:48:04.240Z",
      updatedAt: "2024-01-16T08:34:47.860Z",
      Category: {
        id: 1,
        name: "Ladies",
        createdAt: "2024-06-25 00:04:39.106 +0700",
        updatedAt: "2024-06-25 00:04:39.106 +0700",
      },
    },
    {
      id: 2,
      name: "Loose Fit Hoodie",
      description:
        "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside.",
      price: 380000,
      stock: 40,
      imgUrl:
        "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4339fd648392a176a26722143193c5742a1e97e6_xxl-1.jpg",
      categoryId: 1,
      authorId: 1,
      createdAt: "2024-01-08T08:48:04.240Z",
      updatedAt: "2024-01-16T08:34:47.860Z",
      Category: {
        id: 1,
        name: "Ladies",
        createdAt: "2024-06-25 00:04:39.106 +0700",
        updatedAt: "2024-06-25 00:04:39.106 +0700",
      },
    },
    {
      id: 3,
      name: "Loose Fit Hoodie",
      description:
        "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside.",
      price: 380000,
      stock: 40,
      imgUrl:
        "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4339fd648392a176a26722143193c5742a1e97e6_xxl-1.jpg",
      categoryId: 1,
      authorId: 1,
      createdAt: "2024-01-08T08:48:04.240Z",
      updatedAt: "2024-01-16T08:34:47.860Z",
      Category: {
        id: 1,
        name: "Ladies",
        createdAt: "2024-06-25 00:04:39.106 +0700",
        updatedAt: "2024-06-25 00:04:39.106 +0700",
      },
    },
    {
      id: 4,
      name: "Loose Fit Hoodie",
      description:
        "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside.",
      price: 380000,
      stock: 40,
      imgUrl:
        "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4339fd648392a176a26722143193c5742a1e97e6_xxl-1.jpg",
      categoryId: 1,
      authorId: 1,
      createdAt: "2024-01-08T08:48:04.240Z",
      updatedAt: "2024-01-16T08:34:47.860Z",
      Category: {
        id: 1,
        name: "Ladies",
        createdAt: "2024-06-25 00:04:39.106 +0700",
        updatedAt: "2024-06-25 00:04:39.106 +0700",
      },
    },
  ]);
  return (
    <>
      {/*Home */}
      <div className="mt-8">
        
        <div>
          <form action="" method="get" className="flex justify-center items-center ">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="input input-bordered  w-[85%] h-[50px] mx-1 input-sm"
            />
          </form>
        </div>

        <main className="grid grid-cols-2 gap-10 px-10 my-8">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </main>
      </div>
    </>
  );
}
