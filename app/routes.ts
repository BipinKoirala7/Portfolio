import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/AppLayout.tsx",
    [
      index("routes/Home/home.tsx"),
      route("/projects","routes/Projects/Projects.tsx"),
      route("/about","routes/About/About.tsx")
    ]
  ),
] satisfies RouteConfig;