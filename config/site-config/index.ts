import { mainNav } from "./main-nav";
import { links } from "./links";
import { skillIcons } from "./skill-icons";
import { projects } from "./projects";
import { envConfig } from "../env-config";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zwel",
  title: "Zwel - A full-stack developer",
  url: envConfig.BASE_URL,
  description:
    "Zwel is a passionate full-stack developer based in Myanmar. He writes code to solve real-life challenges.",
  mainNav,
  links,
  skillIcons,
  projects,
  favicon: `${envConfig.BASE_URL}/icons/favicon.ico`,
  shortcutIcon: `${envConfig.BASE_URL}/icons/shortcut-icon.png`,
  appleTouchIcon: `${envConfig.BASE_URL}/icons/apple-touch-icon.png`,
  ogImage: `${envConfig.BASE_URL}/images/og.png`,
  country: "Myanmar",
};
