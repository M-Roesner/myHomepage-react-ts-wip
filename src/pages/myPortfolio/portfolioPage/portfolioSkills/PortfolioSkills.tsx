// Components
// import { StyledSkillItem, StyledSkillList } from "./styledPortfolioSkills";
// import { StyledLinkButton } from "../../../../components/custom/button/linkButton/styledLinkButton";
import ListLayout from "../../../../components/custom/layout/listLayout/ListLayout";
import { ListItemType, NumerusType } from "../../../../components/custom/layout/listLayout/listLayoutTypes";
import SectionLayout_NoStyle from "../../../../components/custom/layout/sectionLayout/SectionLayout_NoStyle";

type PortfolioListProps = {
  title: string;
  lists: ListItemType[];
  numerusText?: NumerusType;
};

const PortfolioList = ({ title, lists, numerusText }: PortfolioListProps): JSX.Element => {
  if (!lists) return <></>;
  return (
    <SectionLayout_NoStyle headlineText={title}>
      <ListLayout list={lists} numerusText={numerusText}></ListLayout>
    </SectionLayout_NoStyle>
  );
};
{
  /* FIXME: Fix text: If the text is too long and contains no white spaces. This will be a general problem! */
}
export default PortfolioList;
