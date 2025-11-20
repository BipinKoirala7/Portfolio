import type { Route } from "./+types/home";
import  HomeComponent from "~/components/Home/HomeComponent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Bipin Koirala" },
    { name: "description", content: "Welcome to the homepage of portfolio of Bipin Koirala" },
  ];
}

export default function Home() {
  return <HomeComponent />;
}
