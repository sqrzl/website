import { Link } from '@askrjs/askr/router';
import { GitHubLogo } from '@askrjs/logos';
import { Button } from '@askrjs/themes/controls';
import { Container } from '@askrjs/themes/layouts';
import { Header, NavBrand, NavGroup, NavLink, Navbar } from '@askrjs/themes/shells';
import { ThemeProvider } from '@askrjs/themes/theme';

export default function App({ children }: { children?: unknown }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div class="site-shell">
        <a class="skip-link" href="#content">
          Skip to content
        </a>

        <Header position="sticky" class="site-header">
          <Container size="4" class="site-header-inner">
            <Navbar breakpoint="md" aria-label="Primary" collapseLabel="Open navigation">
              <NavBrand>
                <Link href="./" class="brand" aria-label="sqrzl home">
                  <span class="brand-mark" aria-hidden="true">
                    S
                  </span>
                  <span class="brand-copy">
                    <strong>sqrzl</strong>
                    <span>Peas emulator and clients</span>
                  </span>
                </Link>
              </NavBrand>

              <NavGroup align="center">
                <NavLink href="./" match="exact">
                  Overview
                </NavLink>
                <NavLink href="clients/" match="prefix">
                  Clients
                </NavLink>
                <NavLink href="emulator/" match="prefix">
                  Emulator
                </NavLink>
              </NavGroup>

              <NavGroup align="end">
                <Button asChild>
                  <a
                    class="button button-secondary"
                    href="https://github.com/sqrzl/peas-emulator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubLogo size={18} aria-hidden="true" />
                    <span>Source</span>
                  </a>
                </Button>
              </NavGroup>
            </Navbar>
          </Container>
        </Header>

        <Container size="4" class="site-frame">
          <main id="content" class="main-content">
            {children}
          </main>

          <footer class="footer">
            <p>
              <strong>sqrzl</strong> ships as a static site with Askr SSG and GitHub
              Pages.
            </p>
            <p>Hard-coded content, deterministic output, easy to grow.</p>
          </footer>
        </Container>
      </div>
    </ThemeProvider>
  );
}