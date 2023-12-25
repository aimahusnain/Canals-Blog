import FeaturedPost from "@/components/blogs/Featured-post";

async function extractAllBlogs() {
  try {
    const res = await fetch(`${process.env.URL}/api/blog-post/get-all-post`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await res.json();

    if (data.success) {
      return data.data;
    } else {
      throw new Error("API request was not successful");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();

  if (!blogPostsList || blogPostsList.length === 0) {
    // Handle the case where there are no blog posts or an error occurred
    return <div>No featured posts available.</div>;
  }

  const featuredPost = blogPostsList.find((post: any) => post.isFeatured);
  console.log("Featured Post:", featuredPost);

  return <FeaturedPost lists={featuredPost ? [featuredPost] : []} />;
}
