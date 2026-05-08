import dynamic from "next/dynamic";
import DefaultLayoutWrapper from "@/components/default-layout-wrapper/default-layout-wrapper";
import AvatarSection from "@/components/home/avatar-section/avatar-section";
import WorkExperienceSection from "@/components/home/work-experience-section/work-experience-section";
import personalProjects from "@/data/personalProjects.data";
import workExperiences from "@/data/workExperiences.data";

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
