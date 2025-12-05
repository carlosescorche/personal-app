"use client";
import { useState, useEffect } from "react";
import { FeaturedPostSection } from "@/components/blog/FeaturedPostSection";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { getCategoryColor } from "@/utils/blog";
import type { Post, Category } from "@/types/blog";

interface Props {
  category: Category;
  allPosts: Post[];
  allCategories: Category[];
}

const CategoryPageContent = ({ category, allPosts, allCategories }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const pageSize = 6;

  useEffect(() => {
    const loadPosts = () => {
      setIsLoading(true);

      // Filter posts by category
      const categoryPosts = allPosts.filter((post) =>
        post.categories.includes(category.id)
      );

      // Get featured post for this category
      const featured = categoryPosts.find((post) => post.featured);
      setFeaturedPost(featured || null);

      // Get regular posts (exclude featured on first page)
      const regularPosts =
        currentPage === 1
          ? categoryPosts.filter((post) => !post.featured)
          : categoryPosts;

      // Paginate posts
      const startIndex =
        currentPage === 1 ? 0 : (currentPage - 1) * pageSize - (featured ? 1 : 0);
      const endIndex = startIndex + pageSize;
      const paginatedPosts = regularPosts.slice(startIndex, endIndex);

      setPosts(paginatedPosts);
      setHasMore(endIndex < regularPosts.length);
      setIsLoading(false);
      setIsLoadingMore(false);
    };

    const timer = setTimeout(loadPosts, 0);

    return () => clearTimeout(timer);
  }, [category, currentPage, allPosts]);

  const loadMorePosts = () => {
    setIsLoadingMore(true);
    setCurrentPage((prev) => prev + 1);
  };

  const categoryColor = getCategoryColor(category, allCategories);

  return (
    <>
      {/* Featured Post */}
      <FeaturedPostSection
        post={featuredPost}
        allCategories={allCategories}
        categoryColor={categoryColor}
        categoryName={category.name}
      />

      {/* Blog Posts Grid */}
      <BlogPostGrid
        posts={posts}
        allCategories={allCategories}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        hasMore={hasMore}
        sectionTitle={`Artículos de ${category.name}`}
        onLoadMore={loadMorePosts}
      />
    </>
  );
};

export default CategoryPageContent;
