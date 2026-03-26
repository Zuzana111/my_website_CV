import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { SkillsSnapshot } from "@/components/sections/skills-snapshot";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <FeaturedProjects />
      <SkillsSnapshot />
      <ContactCta />
    </>
  );
}
