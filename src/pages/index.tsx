import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-2">
      <h1 className="font-bold uppercase text-3xl ">Travel</h1>
      <hr />
      <div className="mt-2 flex">
        <Image
          width={200}
          height={200}
          alt="desc"
          src={
            "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          }
        />
        <div className="p-2">
          <h2 className="text-2xl">Lorem title</h2>
          <p className="p-3 border rounded border-orange-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptates repellendus tempora praesentium nulla voluptatum eius
            minima quia aliquid cumque illum iste deserunt recusandae quos
            veniam, doloribus dicta enim nemo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis, voluptates repellendus tempora
            praesentium nulla voluptatum eius minima quia aliquid cumque illum
            iste deserunt recusandae quos veniam, doloribus dicta enim nemo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptates repellendus tempora praesentium nulla voluptatum eius
            minima quia aliquid cumque illum iste deserunt recusandae quos
            veniam, doloribus dicta enim nemo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis, voluptates repellendus tempora
            praesentium nulla voluptatum eius minima quia aliquid cumque illum
            iste deserunt recusandae quos veniam, doloribus dicta enim nemo.
          </p>
        </div>
      </div>
    </div>
  );
}
