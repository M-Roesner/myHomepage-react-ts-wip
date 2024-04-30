// Components
import { CardParagraphStyle } from "../../../../components/custom/card/cardParagraph/styledCardParagraphStyle";
import { StyledPortfolioSkills, StyledSkillItem, StyledSkillList } from "./styledPortfolioSkills";
import { StyledLinkButton } from "../../../../components/custom/button/linkButton/styledLinkButton";
import CardHeadline from "../../../../components/custom/card/cardHeadline/CardHeadline";

type PortfolioSkillsProps = {
  title: string;
  skills: string[] | undefined;
};

const PortfolioSkills = ({ title, skills }: PortfolioSkillsProps): JSX.Element | undefined => {
  if (!skills) return;
  return (
    <StyledPortfolioSkills>
      <CardHeadline level={2}>{title}</CardHeadline>
      <CardParagraphStyle>
        <StyledSkillList>
          {skills.map((skill, index) => (
            <StyledSkillItem key={index}>
              {/* FIXME: Fix text: If the text is too long and contains no white spaces. This will be a general problem! */}
              <StyledLinkButton to={"/"}>{skill}</StyledLinkButton>
            </StyledSkillItem>
          ))}
        </StyledSkillList>
      </CardParagraphStyle>
    </StyledPortfolioSkills>
  );
};

export default PortfolioSkills;
