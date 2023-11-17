import RightArrow from "@/components/spinner/Right Arrow";
import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedDesign({
  blogitem,
  handleDelete,
}: {
  blogitem: Blog;
  handleDelete: (id: number) => {};
}) {
  const { image, category, title, description, userimage, userid, id } =
    blogitem;
  const { data: session } = useSession();
  console.log(session, userid);
  
  return (
    <div className="grid overflow-hidden border-black/30 grid-cols-1 lg:grid-cols-2   gap-5 rounded-2xl shadow-2xl">
      <div className="mb-4 md:mb-0 xs:mb-0 sm:mb-0">
        <Link href={`/blogs/${id}`}>
          <Image
            src={image}
            className="w-full shadow-2xl object-cover"
            width={550}
            height={550}
            alt="Blog Post"
          />
        </Link>
      </div>

      <div className="flex gap-4 pr-5 justify-center flex-col">
          <Link
            className="text-2xl truncate md:text-3xl xl:text-3xl lg:text-2xl font-bold text-ellipsis overflow-hidden block text-black hover:text-primary"
            href={`/blogs/${id}`}
          >
            {title}
          </Link>

        <p className="font-serif">{description.slice(0, 300)}....</p>

        <button className="rounded-lg w-fit px-4 border-black/70 font-semibold shadow-sm p-2 relative transition duration-300 ease-in-out group">
          <Link href={`/blogs/${id}`} className="pr-3 hover:underline">
            Read More
          </Link>
          <Link
            href={`/blogs/${id}`}
            className="absolute right-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          >
            <RightArrow
              className=" ml-24 -mt-[0.35rem]"
              width="30%"
              height="30%"
            />
          </Link>
        </button>
      </div>
    </div>
  );
}
