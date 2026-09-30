import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/JsonLd';

export interface Faq {
  question: string;
  answer: string;
}

/** FAQ block in Skyscanner's "Booking flights with Skyscanner" style, with FAQPage schema. */
export function FaqSection({
  title,
  faqs,
  columns = 2,
  id,
  intro,
}: {
  title: string;
  faqs: Faq[];
  columns?: 1 | 2;
  id?: string;
  intro?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <JsonLd schema={schema} />
      <h2 id={id ? `${id}-title` : undefined} className="text-heading-2" style={{ marginBottom: intro ? '0.5rem' : '0.5rem' }}>
        {title}
      </h2>
      {intro && (
        <p className="text-body text-secondary" style={{ marginBottom: '0.5rem', maxWidth: '48rem' }}>
          {intro}
        </p>
      )}
      <Accordion
        columns={columns}
        items={faqs.map((f) => ({
          title: f.question,
          content: f.answer.split('\n\n').map((para, i) => <p key={i}>{para}</p>),
        }))}
      />
    </section>
  );
}
