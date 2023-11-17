"use client";

import Button from "@/components/button";
import { useToast } from "@/components/ui/use-toast";
import { GlobalContext } from "@/context";
import { categories } from "@/utils";
import { Blog } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import SingleBlog from "../single-blog";
import { Search } from "lucide-react";

export default function BlogList({ lists }: { lists: Blog[] }) {
  const router = useRouter();
  const { toast } = useToast();

  const [activeButton, setActiveButton] = useState("All");

  useEffect(() => {
    router.refresh();
  }, []);

  const handleButtonClick = (catItem: any) => {
    setActiveButton(catItem.label);
    router.push(`/blogs/category/${catItem.value}`);
  };

  async function handleDelete(id: number) {
    console.log(id);

    const res = await fetch(`/api/blog-post/delete-post?id=${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const data = await res.json();

    if (data && data.success) router.refresh();
  }

  const { searchResults, setSearchQuery, setSearchResults, searchQuery } =
    useContext(GlobalContext);

  async function handleSearch() {
    helperFuncToFetchSearchResults(searchQuery);
  }

  async function helperFuncToFetchSearchResults(query: string) {
    const res = await fetch(`/api/search?query=${query}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data, "searchdata");

    if (data.success) {
      setSearchResults(data.data);
      if (data.data.length === 0) {
        setSearchResults([]);
        <h1>Please Make it.</h1>;
        toast({
          className: "border-none shadow-2xl",
          title: "Ohh, Sorry This Blog doesn't exist",
          description: "Please Make this",
          action: (
            <Link
              className="rounded-full border-black py-2 px-[0.5rem] text-black dark:text-white shadow-md hover:shadow-xl transition duration-1000 ease-in-out font-normal text-base"
              href="/create"
            >
              Create Blog
            </Link>
          ),
        });
      } else {
        setSearchResults(data.data);
      }
    }
  }

  return (
    <section className="pt-[120px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12 py-10 rounded-3xl font-bold text-white w-full h-fit bg-[#7d41e1]">
          <div className="relative top-5 text-4xl">Blogs</div>
          <div className=" flex items-center gap-4 relative top-16">
            <input
              name="search"
              id="search"
              type="text"
              placeholder="Search Blogs"
              autoComplete="off"
              className="rounded-xl justify-center shadow-3xl py-3 px-6 text-lg text-body-color placeholder-body-color font-semibold shadow-2xl outline-none focus:shadow-primary/40 transition-all duration-100 dark:bg-[#242B51] dark:shadow-signUp"
              value={searchQuery}
              style={{ width: "460px", height: "70px" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
          </div>
        </div>
        <div>
          <Button text="Search" onClick={handleSearch} />
        </div>

        <div className="flex flex-wrap justify-center items-center px-8">
          <button
            onClick={() => {
              setActiveButton("All");
              router.push(`/blogs/`);
            }}
            className={`mr-3 mb-3 inline-flex items-center justify-center rounded-md ${
              activeButton === "All" ? "bg-black" : "bg-primary"
            } py-2 px-4 text-white duration-300`}
          >
            All
          </button>
          {categories.map((catItem) => (
            <button
              onClick={() => handleButtonClick(catItem)}
              className={`mr-3 mb-3 inline-flex items-center justify-center rounded-md ${
                activeButton === catItem.label ? "bg-black" : "bg-primary"
              } py-2 px-4 text-white duration-300`}
              key={catItem.value}
            >
              {catItem.label}
            </button>
          ))}
        </div>
        <div className="-mx-4 grid grid-cols-3 gap-2">
          {searchResults && searchResults.length
            ? searchResults.map((searchBlogitem: Blog) => (
                <div key={searchBlogitem.id} className="w-full px-4">
                  <SingleBlog
                    handleDelete={handleDelete}
                    blogitem={searchBlogitem}
                  />
                </div>
              ))
            : lists && lists.length
            ? lists.map((listItem: Blog) => (
                <div className="px-4" key={listItem.id}>
                  <SingleBlog handleDelete={handleDelete} blogitem={listItem} />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
