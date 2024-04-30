// Components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
import { StyledSkillItem, StyledSkillList } from "./styledPortfolioSkills";
import { StyledLinkButton } from "../../../../components/custom/button/linkButton/styledLinkButton";

type PortfolioSkillsProps = {
  title: string;
  skills: string[] | undefined;
};

const PortfolioSkills = ({ title, skills }: PortfolioSkillsProps): JSX.Element | undefined => {
  if (!skills) return;
  return (
    <SectionLayout headlineText={title}>
      <StyledSkillList>
        {skills.map((skill, index) => (
          <StyledSkillItem key={index}>
            {/* FIXME: Fix text: If the text is too long and contains no white spaces. This will be a general problem! */}
            <StyledLinkButton to={"/"}>{skill}</StyledLinkButton>
          </StyledSkillItem>
        ))}
      </StyledSkillList>
    </SectionLayout>
  );
};

export default PortfolioSkills;
