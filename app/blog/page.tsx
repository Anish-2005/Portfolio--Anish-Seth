import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  published_at: string;
  public_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  tags?: string[];
}

async function getBlogs(): Promise<BlogPost[]> {
  try {
    if (!personalData.devUsername) {
      return [];
    }
    
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      console.warn('Failed to fetch blog data');
      return [];
    }

    const data: any[] = await res.json();
    
    // Normalize tags to always be an array and ensure proper typing
    return data.map(blog => ({
      id: blog.id,
      title: blog.title,
      description: blog.description,
      cover_image: blog.cover_image,
      url: blog.url,
      published_at: blog.published_at,
      public_reactions_count: blog.public_reactions_count,
      comments_count: blog.comments_count,
      reading_time_minutes: blog.reading_time_minutes,
      tags: Array.isArray(blog.tags) ? blog.tags : (typeof blog.tags === 'string' ? [blog.tags] : [])
    }));
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="classic-content py-8">
      {/* Section Header */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-accent-500"></span>
          <span className="bg-accent-600/20 backdrop-blur-sm border border-accent-500/30 text-accent-300 p-3 px-8 text-2xl font-bold rounded-lg mx-4 heading-secondary">
            All Articles
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-accent-500"></span>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog, index) => (
          blog?.cover_image && (
            <BlogCard blog={blog} key={blog.id} index={index} />
          )
        ))}
      </div>

      {/* Empty State */}
      {blogs.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-white mb-4">No Articles Found</h2>
          <p className="text-secondary-300">
            Check back later for new articles and insights!
          </p>
        </div>
      )}
    </div>
  );
}
