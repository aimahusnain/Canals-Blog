"use client"

import { Blog } from "@/utils/types";
import FeaturedDesign from "../Featured-Post-Design";
import { useEffect } from "react";
import {useRouter} from 'next/navigation'

export default function Featured({ lists }: { lists: Blog[] }) {
  const router = useRouter();

    useEffect(()=>{
        router.refresh()
    },[])

    async function handleDelete(id:number) {
      console.log(id);
      
      const res = await fetch(`${process.env.URL}/api/blog-post/delete-post?id=${id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      const data = await res.json();

      if (data && data.success) router.refresh();
    }

  return (
    <section className="py-[120px]">
      <div className="container">
      {
          lists && lists.length
            ? lists.map((listItem: Blog) => (
                <div className="" key={listItem.id}>
                  <FeaturedDesign handleDelete={handleDelete} blogitem={listItem} />
                </div>
              ))
            : null
            }
      </div>
    </section>
  )
}