import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Backpack-style breadcrumb with BreadcrumbList schema. */
export function Breadcrumbs({ items, onDark = true }: { items: BreadcrumbItem[]; onDark?: boolean }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://bookmyflight.pk${item.href}` : undefined,
    })),
  };

  const color = onDark ? '#fff' : '#161616';

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Breadcrumb" style={{ marginBottom: onDark ? '1rem' : 0 }}>
        <ol
          style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color,
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                {index > 0 && <ChevronRight size={14} aria-hidden style={{ opacity: 0.7 }} />}
                {isLast || !item.href ? (
                  <span aria-current={isLast ? 'page' : undefined} style={{ opacity: isLast ? 0.8 : 1 }}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="bpk-link-implicit" style={{ color }}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
