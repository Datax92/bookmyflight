import Link from 'next/link';
import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
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

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Breadcrumbs" style={{ marginBottom: 24 }}>
        <ol
          style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: 'rgba(255, 255, 255, 0.6)',
            padding: 0,
            margin: 0,
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {index > 0 && (
                  <span style={{ color: 'var(--color-champagne)', opacity: 0.6, fontSize: 11 }}>
                    /
                  </span>
                )}
                {isLast || !item.href ? (
                  <span style={{ color: 'var(--color-champagne)', fontWeight: 500 }} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="hover:underline"
                  >
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
