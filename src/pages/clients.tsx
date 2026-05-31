import { ArrowRightIcon, LayoutPanelTopIcon, ShieldCheckIcon, SparklesIcon, WorkflowIcon } from '@askrjs/lucide';

import { ContentRows, LandingHero, PageSection } from '../components/site';

const clientCards = [
  {
    icon: <WorkflowIcon size={24} aria-hidden="true" />,
    title: 'TypeScript SDK',
    summary: '@sqrlz/peas',
    description:
      'Use the npm package to talk to the emulator from Node or browser-adjacent TypeScript apps.',
  },
  {
    icon: <LayoutPanelTopIcon size={24} aria-hidden="true" />,
    title: 'Go client',
    summary: 'peas-go',
    description:
      'A good fit for backend services, tooling, and integration tests that need a Go-native API.',
  },
  {
    icon: <SparklesIcon size={24} aria-hidden="true" />,
    title: 'Rust client',
    summary: 'peas-rs',
    description:
      'Useful when you want a fast, strongly typed client for systems or CLI workflows.',
  },
  {
    icon: <ShieldCheckIcon size={24} aria-hidden="true" />,
    title: 'Python client',
    summary: 'peas-py',
    description:
      'Handy for scripts, test fixtures, notebooks, and storage workflows in Python-first projects.',
  },
  {
    icon: <ArrowRightIcon size={24} aria-hidden="true" />,
    title: '.NET client',
    summary: 'peas-dotnet',
    description:
      'Helps C# and .NET applications target the same emulator contract as the rest of the stack.',
  },
];

export default function ClientsPage() {
  return (
    <>
      <LandingHero
        eyebrow="Clients"
        title="The same storage surface, in the language you use."
        lead="sqrzl keeps one emulator contract and multiple client implementations so each language can prove the same object and blob behavior against the same target."
        actions={[
          {
            label: 'About the emulator',
            href: 'emulator/',
            variant: 'primary',
            icon: <ArrowRightIcon size={16} aria-hidden="true" />,
          },
          {
            label: 'Back to the overview',
            href: './',
            variant: 'secondary',
          },
        ]}
        panelLabel="Implementations"
        statusItems={[
          { value: '5', label: 'implementations' },
          { value: '1', label: 'storage contract' },
          { value: 'Local', label: 'endpoint first' },
        ]}
        panelFootnote="Pick the client that matches your stack and you still get the same bucket, object, and compatibility behavior underneath."
      />

      <PageSection
        id="client-implementations"
        eyebrow="Client implementations"
        title="Five packages, one set of semantics."
        description="Each client speaks the same emulator surface. The differences are the language fit, dependency shape, and how you wire it into your stack."
      >
        <ContentRows
          items={clientCards.map((item) => ({
            eyebrow: item.summary,
            icon: item.icon,
            title: item.title,
            description: item.description,
          }))}
        />
      </PageSection>

      <PageSection
        id="how-they-fit"
        className="notes-section"
        eyebrow="How they fit together"
        title="Choose by stack, not by storage behavior."
        description="The client page is about helping you map the same local endpoint to the language and runtime you already use."
      >
        <ContentRows
          items={[
            {
              eyebrow: 'Guidance',
              title: 'TypeScript and Node',
              description: (
                <>
                  Reach for <strong>@sqrzl/peas</strong> when you want an npm-first
                  client with a JavaScript and TypeScript workflow.
                </>
              ),
            },
            {
              eyebrow: 'Guidance',
              title: 'Backend services',
              description: (
                <>
                  <strong>peas-go</strong> and <strong>peas-rs</strong> fit service
                  code, tooling, and faster integration-test loops.
                </>
              ),
            },
            {
              eyebrow: 'Guidance',
              title: 'Scripting and apps',
              description: (
                <>
                  <strong>peas-py</strong> and <strong>peas-dotnet</strong> let
                  scripts and .NET apps point at the same emulator contract.
                </>
              ),
            },
          ]}
        />
      </PageSection>
    </>
  );
}
