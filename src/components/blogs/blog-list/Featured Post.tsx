import FeaturedPost from "@/components/blogs/Featured-post";

async function extractAllBlogs() {
  const res = await fetch(`${process.env.URL}/api/blog-post/get-all-post`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();

  const featuredPost = blogPostsList.find((post: any) => post.isFeatured);
  console.log("Featured Post:", featuredPost);

  return( <FeaturedPost lists={featuredPost ? [featuredPost] : []} />);
}