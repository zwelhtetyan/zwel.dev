import { Icons } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zwel",
  description:
    "A passionate fullstack developer based in Myanmar. He writes codes to solve real-life problems.",
  mainNav: [
    {
      title: "About",
      href: "#about",
      Icon: Icons.user,
    },
    {
      title: "Work",
      href: "#work",
      Icon: Icons.flame,
    },
    {
      title: "Contact",
      href: "#contact",
      Icon: Icons.send,
    },
  ],
  links: {
    github: "https://github.com/zwelhtetyan",
    docs: "https://ui.shadcn.com",
  },
};
