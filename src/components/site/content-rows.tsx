import { Block, Box } from '@askrjs/themes/layouts';

type ContentRowItem = {
  title: string;
  description: unknown;
  eyebrow?: string;
  icon?: JSX.Element;
  step?: string;
};

type ContentRowsProps = {
  items: ContentRowItem[];
  className?: string;
};

export function ContentRows({ items, className }: ContentRowsProps) {
  return (
    <Block gap="2" class={className ? `content-rows ${className}` : 'content-rows'}>
      {items.map((item) => (
        <Box class="content-row" key={item.title}>
          {item.step ? <span class="content-row-step">{item.step}</span> : null}
          {!item.step && item.icon ? <span class="content-row-icon">{item.icon}</span> : null}

          <Block gap="1" class="content-row-copy">
            {item.eyebrow ? <p class="content-row-eyebrow">{item.eyebrow}</p> : null}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Block>
        </Box>
      ))}
    </Block>
  );
}