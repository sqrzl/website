import { Block, Container, Section } from '@askrjs/themes/layouts';

import { SectionHeading } from './section-heading';

type PageSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: unknown;
  id?: string;
  className?: string;
};

export function PageSection({
  eyebrow,
  title,
  description,
  children,
  id,
  className,
}: PageSectionProps) {
  const sectionClass = className ? `stack-section ${className}` : 'stack-section';

  return (
    <Section size="3" class={sectionClass} id={id}>
      <Container size="4">
        <Block gap="4">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {children}
        </Block>
      </Container>
    </Section>
  );
}