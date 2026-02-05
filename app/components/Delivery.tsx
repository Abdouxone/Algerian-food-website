import Image from "next/image";

export default function Delivery() {
  return (
    <div className="w-full bg-white py-16 ">
      <h1 className="text-orange-600 text-2xl font-bold text-center">
        Quick Delivery App
      </h1>
      <div className="lg:w-310 bg-white mx-auto grid sm:grid-cols-1 lg:grid-cols-2">
        <img
          className="w-137.5 mx-auto my-4"
          alt="phone app pic"
          width={700}
          height={700}
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold hidden lg:block">
            Get The App
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 hidden lg:block">
            Limitless Convenience on-demand
          </h1>
          <p className="hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] w-50 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
