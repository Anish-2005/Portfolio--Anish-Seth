import { personalData } from "@/utils/data/personal-data";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

interface BlogDetail {
  id: string;
  title: string;
  description: string;
  body_html: string;
  cover_image: string;
  url: string;
  published_at: string;
  public_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  tags?: string[];
}

async function getBlog(slug: string): Promise<BlogDetail | null> {
  try {
    if (!personalData.devUsername) {
      return null;
    }
    
    const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      console.warn('Failed to fetch blog detail');
      return null;
    }

    const data: BlogDetail = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    return null;
  }
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="classic-content py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
        <p className="text-secondary-300 mb-8">
          The article you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a 
          href="/blog" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
        >
          ← Back to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="classic-content py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors duration-300 mb-6"
          >
            ← Back to Articles
          </a>
          
          <h1 className="heading-primary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-secondary-400 text-sm">
            <span>Published: {new Date(blog.published_at).toLocaleDateString()}</span>
            <span>•</span>
            <span>{blog.reading_time_minutes} min read</span>
            <span>•</span>
            <span>{blog.public_reactions_count} reactions</span>
          </div>
        </div>

        {/* Cover Image */}
        {blog.cover_image && (
          <div className="mb-8">
            <img 
              src={blog.cover_image} 
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.body_html }}
        />

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-accent-500/20">
          <div className="flex items-center justify-between">
            <a 
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors duration-300"
            >
              Read on Dev.to →
            </a>
            
            <div className="flex items-center gap-4 text-secondary-400">
              <span>{blog.public_reactions_count} ❤️</span>
              <span>{blog.comments_count} 💬</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
