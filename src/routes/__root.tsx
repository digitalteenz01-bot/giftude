import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-medium text-navy">404</h1>
        <h2 className="mt-4 font-display text-2xl text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-navy-soft"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-navy">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-navy px-6 py-3 text-sm font-medium text-ivory hover:bg-navy-soft"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-navy/20 px-6 py-3 text-sm font-medium text-navy hover:bg-ivory">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Giftitude — Premium Corporate Gifting in India" },
      { name: "description", content: "Editorial corporate gifting from Giftitude. Curated luxury gift sets, diaries, lamps and accessories crafted for India's most discerning brands." },
      { name: "author", content: "Giftitude" },
      { property: "og:title", content: "Giftitude — Premium Corporate Gifting" },
      { property: "og:description", content: "Curated luxury corporate gifts for India's most discerning brands." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Giftitude" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { ReactLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'framer-motion';

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const routerState = useRouter();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root>
        <AnimatePresence mode="wait">
          <motion.div
            key={routerState.state.location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-screen flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </ReactLenis>
    </QueryClientProvider>
  );
}
