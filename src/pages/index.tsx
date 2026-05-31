import { ArrowRightIcon, LayoutPanelTopIcon, ShieldCheckIcon, WorkflowIcon } from '@askrjs/lucide';

import { ContentRows, LandingHero, PageSection } from '../components/site';

const overviewCards = [
  {
    icon: <WorkflowIcon size={24} aria-hidden="true" />,
    title: 'Local emulator first',
    description:
      'sqrzl peas gives you a storage target you can run on your own machine before you touch any cloud account.',
  },
  {
    icon: <LayoutPanelTopIcon size={24} aria-hidden="true" />,
    title: 'Five client implementations',
    description:
      'The TypeScript, Go, Rust, Python, and .NET clients all point at the same emulator surface.',
  },
  {
    icon: <ShieldCheckIcon size={24} aria-hidden="true" />,
    title: 'Vendor parity you can see',
    description:
      'The emulator keeps S3, Azure Blob, GCS, and OCI behavior visible while you stay local.',
  },
];

export default function Home() {
  return (
    <>
      <LandingHero
        eyebrow="sqrzl peas"
        title="What is sqrzl peas?"
        lead="sqrzl peas is the local emulator and client family for object storage work. It gives you one place to test, compare, and document the behavior your apps depend on."
        actions={[
          {
            label: 'About the emulator',
            href: 'emulator/',
            variant: 'primary',
            icon: <ArrowRightIcon size={16} aria-hidden="true" />,
          },
          {
            label: 'See the clients',
            href: 'clients/',
            variant: 'secondary',
          },
        ]}
        panelLabel="Overview"
        statusItems={[
          { value: 'Peas', label: 'emulator first' },
          { value: '5', label: 'client implementations' },
          { value: 'Local', label: 'storage workflow' },
        ]}
        panelFootnote="The site is here to explain the emulator, the client implementations, and the shared storage surface they all talk to."
      />

      <PageSection
        id="what-it-is-for"
        eyebrow="At a glance"
        title="Three things to know before you dive deeper."
        description="Use this site as a quick map: what the emulator does, which clients exist, and why the project exists in the first place."
      >
        <ContentRows
          items={overviewCards.map((item) => ({
            eyebrow: 'Overview',
            icon: item.icon,
            title: item.title,
            description: item.description,
          }))}
        />
      </PageSection>
    </>
  );
}
