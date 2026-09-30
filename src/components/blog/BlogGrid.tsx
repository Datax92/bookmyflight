'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog-data';
import { formatPostDate } from '@/lib/format';
import styles from './Blog.module.css';

export type BlogCardData = Pick<BlogPost, 'slug' | 'title' | 'excerpt' | 'category' | 'readTime' | 'publishDate' | 'image'>;

export function BlogCard({ post }: { post: BlogCardData }) {
  return (
    <article className={`bpk-card ${styles.card}`}>
      <Link href={`/blog/${post.slug}`} className={styles.media} tabIndex={-1} aria-hidden>
        <Image src={post.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={styles.img} />
      </Link>
      <div className={styles.content}>
        <span className={styles.category}>{post.category}</span>
        <h3 className={styles.title}>
          <Link href={`/blog/${post.slug}`} className="bpk-link-implicit">
            {post.title}
          </Link>
        </h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.meta}>
          {formatPostDate(post.publishDate)} · {post.readTime}
        </p>
      </div>
    </article>
  );
}

export function BlogGrid({ posts, categories }: { posts: BlogCardData[]; categories: string[] }) {
  const [cat, setCat] = useState('All');
  const shown = cat === 'All' ? posts : posts.filter((p) => p.category === cat);
  return (
    <div>
      <div className={styles.chips} role="group" aria-label="Filter articles by category">
        {['All', ...categories].map((c) => (
          <button key={c} type="button" className="bpk-chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <ul className={styles.grid}>
        {shown.map((p) => (
          <li key={p.slug}>
            <BlogCard post={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
