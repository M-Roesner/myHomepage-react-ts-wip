// Components
import SectionLayout from "../../../../components/custom/layout/sectionLayout/SectionLayout";
// import { StyledSkillItem, StyledSkillList } from "./styledPortfolioSkills";
// import { StyledLinkButton } from "../../../../components/custom/button/linkButton/styledLinkButton";
import ListLayout from "../../../../components/custom/layout/listLayout/ListLayout";
import { ListItemType } from "../../../../components/custom/layout/listLayout/listLayoutTypes";

type PortfolioSkillsProps = {
  title: string;
  skills: ListItemType[];
};

const PortfolioSkills = ({ title, skills }: PortfolioSkillsProps): JSX.Element => {
  if (!skills) return <></>;
  return (
    <SectionLayout headlineText={title}>
      <ListLayout
        list={skills}
        personalButtonText={{ singular: "Fähigkeit", plural: "Fähigkeiten" }}
        isLinkButton
      ></ListLayout>
    </SectionLayout>
  );
};

// const PortfolioSkillsOLD = ({ title, skills }: PortfolioSkillsProps): JSX.Element => {
//   if (!skills) return;
//   return (
//     <SectionLayout headlineText={title}>
//       <StyledSkillList>
//         {skills.map((skill, index) => (
//           <StyledSkillItem key={index}>
//             <StyledLinkButton to={"/"}>{skill}</StyledLinkButton>
//           </StyledSkillItem>
//         ))}
//       </StyledSkillList>
//     </SectionLayout>
//   );
// };

{
  /* FIXME: Fix text: If the text is too long and contains no white spaces. This will be a general problem! */
}
export default PortfolioSkills;
