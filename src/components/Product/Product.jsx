import ProductItem from "./ProductItem";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 5000,
    title: "Book Bliss",
    description: "A sanctuary for avid readers seeking literary treasures.",
  },
  {
    id: "p2",
    price: 8000,
    title: "Page Turners",
    description: "Where stories come alive and adventures await on every page.",
  },
  {
    id: "p3",
    price: 12000,
    title: "Novel Nook",
    description: "A cozy retreat for bookworms to dive into captivating tales.",
  },
  {
    id: "p4",
    price: 15000,
    title: "Literary Escape",
    description:
      "Transport yourself to new worlds and unlock boundless imagination.",
  },
  {
    id: "p5",
    price: 17000,
    title: "Book Haven",
    description: "Where every bookworm finds their literary haven.",
  },
  {
    id: "p6",
    price: 20000,
    title: "Storybook Corner",
    description: "A charming nook filled with tales of wonder and imagination.",
  },
];

const Product = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-auto mt-5 px-5 lg:p-0">
      <h1 className="py-3 text-[22px] font-[500] text-slate-600">
        Our Product
      </h1>
      <div className="flex flex-row flex-wrap gap-5 ">
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem key={product.id} id={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
