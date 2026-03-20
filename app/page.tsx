import dynamic from "next/dynamic";
import personalProjects from "@/data/personalProjects.data";
import workExperiences from "@/data/workExperiences.data";
import DefaultLayoutWrapper from "../components/default-layout-wrapper/default-layout-wrapper";

const AvatarSection = dynamic(
  () => import("@/components/home/avatar-section/avatar-section"),
);
const WorkExperienceSection = dynamic(
  () =>
    import("@/components/home/work-experience-section/work-experience-section"),
);
const PersonalProjectsSection = dynamic(
  () =>
    import(
      "@/components/home/personal-projects-section/personal-projects-section"
    ),
);

export default function Home() {
  return (
    <DefaultLayoutWrapper>
      <AvatarSection />
      <WorkExperienceSection workExperiences={workExperiences} />
      <PersonalProjectsSection projects={personalProjects} />
    </DefaultLayoutWrapper>
  );
}
