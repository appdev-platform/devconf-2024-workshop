import React from "react";
import { createDevApp } from "@backstage/dev-utils";
import { demoTimezonePlugin, Clock } from "../src/plugin";
import { EntityProvider } from "@backstage/plugin-catalog-react";
import Grid from "@mui/material/Grid";

const mockEntity = {
  apiVersion: 'backstage.io/v1alpha1',
  kind: 'Component',
  metadata: {
    name: 'Example Application',
    annotations: {
      'demo/timezone': 'Asia/Kolkata'
    }
  },
  spec: {
    type: 'service',
    owner: 'user:default/guest'
  }
}

createDevApp()
  .registerPlugin(demoTimezonePlugin)
  .addPage({
    title: "Demo Timezone Test",
    path: "/demo",
    element: (
      <EntityProvider entity={mockEntity}>
        <Grid item md={6}>
          <Clock />
        </Grid>
      </EntityProvider>
    ),
  })
  .render();
