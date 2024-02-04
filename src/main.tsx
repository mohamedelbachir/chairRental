import React from "react";
import ReactDOM from "react-dom/client";
import {
  createTheme,
  MantineProvider,
  Button,
  Indicator,
  Anchor,
  Accordion,
  Drawer,
} from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { generateColors } from "@mantine/colors-generator";
import { BrowserRouter as Router } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import("./App.tsx"));
import Loader from "./components/Loader.component.tsx";
//import App from "";

import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "./global.css";

const theme = createTheme({
  colors: {
    "main-color": generateColors("#6a71f1"),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        fw: "normal",
      },
    }),
    Indicator: Indicator.extend({
      defaultProps: {
        color: "transparent",
        //opacity: 1,
      },
      styles: {
        indicator: {
          backgroundColor: "red",
        },
      },
    }),
    Accordion: Accordion.extend({
      defaultProps: {
        px: 0,
      },
      styles: {
        control: {
          paddingRight: 0,
        },
        content: {
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
    }),
    Drawer: Drawer.extend({
      styles: {
        body: {
          paddingLeft: 10,
        },
        header: {
          paddingLeft: 10,
        },
        inner: {
          width: "75%",
        },
      },
      defaultProps: {
        w: "20%",
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        c: "rgba(139, 150, 165, 1)",
      },
      styles: {
        root: {
          textDecoration: "none",
        },
      },
    }),
  },
  activeClassName: "active-element",
  primaryShade: 3,
  primaryColor: "main-color",
});

//type Props = {}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router>
        <React.Suspense fallback={<Loader />}>
          <NavigationProgress />
          <App />
        </React.Suspense>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
