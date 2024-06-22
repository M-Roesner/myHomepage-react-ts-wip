// Components
import {
  $extraStyle_OffsetButtonWrapper,
  $exraStyle_ListLayout,
  StyledSkillsNavigation,
} from "./styledSkillsNavigation";
import CardRoundedOffsetButtonWrapper from "../../../../../../components/custom/card/CardRoundedOffsetButtonWrapper/CardRoundedOffsetButtonWrapper";
import ListLayout from "../../../../../../components/custom/layout/listLayout/ListLayout";

// Hooks
import useButtonList from "../hooks/useButtonList";
import useRenderList from "../hooks/useRenderList";
import useResponsiveDirection from "../hooks/useResponsiveDirection";
import useSkillCategory from "../hooks/useSkillCategory";

/**
 * Component for navigating and displaying skills.
 * Displays a list of skills based on the current category.
 * Utilizes hooks for dynamically generating the button list, determining the current category,
 * adjusting the layout direction, and providing the skills to render.
 */
const SkillsNavigation = () => {
  const buttonList = useButtonList();
  const currentCategory = useSkillCategory();
  const direction = useResponsiveDirection();
  const rederList = useRenderList(currentCategory);

  if (!rederList || !buttonList)
    return <>Hier ist etwas schief gelaufen, alle meine Fähigkeiten sollten hier aufgeführt sein.</>;

  return (
    <StyledSkillsNavigation>
      <CardRoundedOffsetButtonWrapper
        buttonList={buttonList}
        direction={direction}
        $extraStyleRuleSet_direction={$extraStyle_OffsetButtonWrapper}
      />
      <ListLayout
        list={rederList}
        numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
        $extraStyleRuleSet={$exraStyle_ListLayout}
      />
    </StyledSkillsNavigation>
  );
};

export default SkillsNavigation;
