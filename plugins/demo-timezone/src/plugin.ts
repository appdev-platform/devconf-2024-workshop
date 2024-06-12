import {
  createPlugin,
  createRoutableExtension,
} from "@backstage/core-plugin-api";
import { rootRouteRef } from "./routes";

export const demoTimezonePlugin = createPlugin({
  id: "demo-timezone",
  routes: {
    root: rootRouteRef,
  },
});

export const Clock = demoTimezonePlugin.provide(
  createRoutableExtension({
    name: "Clock",
    component: () => import("./components/Clock").then((m) => m.Clock),
    mountPoint: rootRouteRef,
  })
);
