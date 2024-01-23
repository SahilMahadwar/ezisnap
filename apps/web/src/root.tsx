import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import ThemeCss from "@ezisnap/tailwind-config/theme.css";
import FontsCss from "~/styles/fonts.css";
import GlobalCss from "~/styles/globals.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: GlobalCss },
  { rel: "stylesheet", href: FontsCss },
  { rel: "stylesheet", href: ThemeCss },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
