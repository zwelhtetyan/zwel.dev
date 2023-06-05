import { mainNav } from "./main-nav";
import { links } from "./links";
import { skillIcons } from "./skill-icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zwel",
  description:
    "A passionate fullstack developer based in Myanmar. He writes codes to solve real-life problems.",
  mainNav,
  links,
  skillIcons,
};
