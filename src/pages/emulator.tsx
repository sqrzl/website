import { ArrowRightIcon, LayoutPanelTopIcon, ShieldCheckIcon, SparklesIcon, WorkflowIcon } from '@askrjs/lucide';

import { ContentRows, LandingHero, PageSection } from '../components/site';

const emulatorReasons = [
  {
    icon: <WorkflowIcon size={24} aria-hidden="true" />,
    title: 'Stay local while you build',
    description:
      'Run storage workflows on your own machine instead of depending on a live cloud account for every test loop.',
  },
  {
    icon: <ShieldCheckIcon size={24} aria-hidden="true" />,
    title: 'Make vendor parity visible',
    description:
      'Keep S3, Azure Blob, GCS, and OCI behavior in view so provider differences are easy to compare.',
  },
  {
    icon: <LayoutPanelTopIcon size={24} aria-hidden="true" />,
    title: 'Keep compatibility repeatable',
    description:
      'Use one emulator to keep the same storage story across local development, testing, and compatibility work.',
  },
  {
    icon: <SparklesIcon size={24} aria-hidden="true" />,
    title: 'Prove the edge cases',
    description:
      'Bucket operations, object listings, uploads, downloads, and presigned flows all become easier to exercise locally.',
  },
];

const frontCards = [
  {
    badge: 'S3',
    title: 'Object storage compatibility',
    description:
      'Exercise the S3-compatible surface your apps already expect.',
  },
  {
    badge: 'Azure Blob',
    title: 'Blob workflows',
    description:
      'Check Azure Blob operations against the same local storage core.',
  },
  {
    badge: 'GCS',
    title: 'Google Cloud Storage',
    description:
      'Keep GCS behavior in the matrix without provisioning a cloud project.',
  },
  {
    badge: 'OCI',
    title: 'Oracle Cloud Infrastructure',
    description:
      'Validate OCI object-storage flows against a local provider front door.',
  },
];

export default function EmulatorPage() {
  return (
    <>
      <LandingHero
        eyebrow="Emulator"
        title="One local emulator, multiple vendor fronts."
        lead="Peas exists so you can compare provider behavior without leaving your machine. It gives the clients one target and keeps the differences between storage vendors easy to reason about."
        actions={[
          {
            label: 'Browse the clients',
            href: 'clients/',
            variant: 'primary',
            icon: <ArrowRightIcon size={16} aria-hidden="true" />,
          },
          {
            label: 'Back to the overview',
            href: './',
            variant: 'secondary',
          },
        ]}
        panelLabel="Compatibility"
        statusItems={[
          { value: 'S3', label: 'object API' },
          { value: 'Azure', label: 'blob API' },
          { value: 'GCS', label: 'provider front' },
          { value: 'OCI', label: 'provider front' },
        ]}
        panelFootnote="The emulator keeps vendor parity visible while the client libraries exercise the same endpoints locally."
      />

      <PageSection
        id="why-we-built-it"
        eyebrow="Why we built it"
        title="Local first, provider aware, and easy to compare."
        description="Peas is meant to reduce cloud overhead and make vendor differences easy to see before they become release-time surprises."
      >
        <ContentRows
          items={emulatorReasons.map((item) => ({
            eyebrow: 'Emulator',
            icon: item.icon,
            title: item.title,
            description: item.description,
          }))}
        />
      </PageSection>

      <PageSection
        id="fronts"
        className="notes-section"
        eyebrow="Vendor fronts"
        title="One storage core, four public surfaces."
        description="The emulator keeps the compatibility matrix obvious by exposing the storage vendor front ends separately."
      >
        <ContentRows
          items={frontCards.map((item) => ({
            eyebrow: item.badge,
            title: item.title,
            description: item.description,
          }))}
        />
      </PageSection>

      <PageSection
        id="workflow"
        className="notes-section"
        eyebrow="Workflow"
        title="Use it like a real target."
        description="The emulator is most useful when the local run looks like the thing you will ship against."
      >
        <ContentRows
          items={[
            {
              step: '01',
              title: 'Start Peas locally',
              description: 'Run the emulator with cargo run or docker compose up --build.',
            },
            {
              step: '02',
              title: 'Point a client at it',
              description: 'Use the client that matches your stack and aim it at the local endpoint.',
            },
            {
              step: '03',
              title: 'Compare the result',
              description: 'Exercise bucket and object flows to see how the providers line up.',
            },
          ]}
        />
      </PageSection>
    </>
  );
}
