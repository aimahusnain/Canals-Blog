import BlogList from "@/components/blogs/blog-list";
import CategoryList from "@/components/category";

async function extractAllBlogs() {
  const res = await fetch(`/api/blog-post/get-all-post`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

async function getAllListsByCategory(getId: string) {
  const res = await fetch(`/api/category?categoryID=${getId}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;
  const getAllList = await getAllListsByCategory(id);

  return <BlogList lists={getAllList} />;
}