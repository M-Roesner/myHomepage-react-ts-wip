// Components
import { StyledProgressListWrapper } from "./styledProgressListWrapper";
import ProgressList from "./progressList/ProgressList";

// Types & Interfaces
import { IProgress } from "../types/progressTypes";

type ProgressListWrapperProps = {
  list: IProgress[];
};

/**
 * Displays a wrapper for progress lists, dividing between completed, in-progress, and non-completed items.
 *
 * @param {IProgress[]} list The array of progress items to display.
 * @returns The rendered progress list wrapper component.
 */
const ProgressListWrapper = ({ list }: ProgressListWrapperProps) => {
  // Separate completed, in-progress, and not-started progress items
  const completedProgressList = list.filter((progress) => progress.status === "complete");
  const inProgressOrNotStartedProgressList = list
    .filter((progress) => progress.status === "in-progress" || progress.status === "not-started")
    .sort((a) => (a.status === "in-progress" ? -1 : 1)); // Sort to prioritize "in-progress" items

  return (
    <StyledProgressListWrapper>
      <ProgressList list={completedProgressList} />
      <ProgressList list={inProgressOrNotStartedProgressList} />
    </StyledProgressListWrapper>
  );
};

export default ProgressListWrapper;
