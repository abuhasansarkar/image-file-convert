import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
}

export function BlogCard({ title, description, slug, category, readTime, featured = false, tags }: BlogCardProps) {
  return (
    <article className={`group card p-6 space-y-4 hover:shadow-soft-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${featured ? 'ring-2 ring-primary/20 hover:ring-primary/40' : ''}`}>
      {featured && (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          <Tag className="w-3 h-3" />
          <span>Featured Guide</span>
        </div>
      )}
      
      <div className="space-y-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="px-2 py-1 bg-muted rounded text-xs font-medium transition-all group-hover:bg-primary/10 group-hover:text-primary">{category}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 transition-transform group-hover:scale-110" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-muted/50 text-xs rounded transition-all hover:bg-primary/10 hover:text-primary hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="pt-2">
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium group-hover:gap-3 transition-all"
        >
          Read Full Guide
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
