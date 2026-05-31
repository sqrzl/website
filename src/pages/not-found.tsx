import { Link } from '@askrjs/askr/router';

export default function NotFoundPage() {
  return (
    <section class="not-found-wrap">
      <div class="not-found-card">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          The route you requested is not part of the current sqrzl website.
        </p>
        <div class="cta-row">
          <Link href="./" class="button button-primary">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}