import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu, TitleBar } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";
import appCss from "../css/app.css?url";
import Footer from "../components/footer/Footer";



export const links = () => [{ rel: "stylesheet", href: polarisStyles }, { rel: "stylesheet", href: appCss }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/createruleset">Create Ruleset</Link>
        <Link to="/app/general-settings">General Settings</Link>
        <Link to="/app/plans">Plans</Link>
      </NavMenu>


      {/* <TitleBar title="Products">
      <button variant="primary">Primary action</button>
      <button>Secondary action</button>
      <button>Secondary action</button>
      <button>Secondary action</button>
      <button>Secondary action</button>
    </TitleBar> */}

      <Outlet />

      <Footer />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
