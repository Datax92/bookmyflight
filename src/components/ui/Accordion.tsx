'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

export interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  headingLevel = 3,
  large = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  headingLevel?: 2 | 3 | 4;
  large?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const Heading = `h${headingLevel}` as const;
  return (
    <div className={styles.item}>
      <Heading style={{ margin: 0 }}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.flex}>
            <span className={`${styles.title} ${large ? styles.titleLarge : ''}`}>{title}</span>
            <span className={`${styles.icon} ${open ? styles.iconFlipped : ''}`} aria-hidden>
              <ChevronDown size={large ? 24 : 20} strokeWidth={2.25} />
            </span>
          </span>
        </button>
      </Heading>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
      >
        <div className={styles.panelInner}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  items,
  columns = 1,
  onDark = false,
  headingLevel = 3,
}: {
  items: AccordionItemData[];
  columns?: 1 | 2;
  onDark?: boolean;
  headingLevel?: 2 | 3 | 4;
}) {
  const cls = `${styles.accordion} ${onDark ? styles.onDark : ''}`;
  if (columns === 2) {
    const half = Math.ceil(items.length / 2);
    return (
      <div className={`${cls} ${styles.columns}`}>
        {[items.slice(0, half), items.slice(half)].map((col, c) => (
          <div key={c}>
            {col.map((item) => (
              <AccordionItem key={item.title} title={item.title} headingLevel={headingLevel}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={cls}>
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title} headingLevel={headingLevel}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
