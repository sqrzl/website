import { Link } from '@askrjs/askr/router';
import { Button } from '@askrjs/themes/controls';
import { Block, Box, Container, Inline, Section } from '@askrjs/themes/layouts';

type LandingHeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: JSX.Element;
};

type LandingHeroStatusItem = {
  value: string;
  label: string;
};

type LandingHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  actions: LandingHeroAction[];
  panelLabel: string;
  statusItems: LandingHeroStatusItem[];
  panelFootnote: string;
  panelAriaLabel?: string;
};

export function LandingHero({
  eyebrow,
  title,
  lead,
  actions,
  panelLabel,
  statusItems,
  panelFootnote,
  panelAriaLabel,
}: LandingHeroProps) {
  return (
    <Section size="4" class="hero" id="top">
      <Container size="4">
        <Box class="hero-layout">
          <Block gap="2" class="hero-copy">
            <p class="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p class="lead">{lead}</p>

            <Inline class="cta-row" direction="row" gap="2" wrap="wrap" align="center">
              {actions.map((action) => (
                <Button key={action.href} asChild>
                  <Link
                    class={
                      action.variant === 'primary'
                        ? 'button button-primary'
                        : 'button button-secondary'
                    }
                    href={action.href}
                  >
                    {action.label}
                    {action.icon ? action.icon : null}
                  </Link>
                </Button>
              ))}
            </Inline>
          </Block>

          <Box class="hero-panel" aria-label={panelAriaLabel ?? panelLabel}>
            <p class="panel-label">{panelLabel}</p>
            <div class="status-grid">
              {statusItems.map((item) => (
                <Box class="status-item" key={`${item.value}-${item.label}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </Box>
              ))}
            </div>
            <p class="panel-footnote">{panelFootnote}</p>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}