import { Block } from '@askrjs/themes/layouts';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Block gap="2" class={className ? `section-heading ${className}` : 'section-heading'}>
      <p class="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </Block>
  );
}