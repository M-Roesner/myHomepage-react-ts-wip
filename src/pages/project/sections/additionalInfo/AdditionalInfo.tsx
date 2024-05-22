import { ContentSectionType } from "../../../myPortfolio/types/projectTypes";
import ParagraphList from "../../utils/paragraphList/ParagraphList";

type AdditionalInfoProps = { list: ContentSectionType[] };

const AdditionalInfo = ({ list }: AdditionalInfoProps) => {
  return (
    <>
      {list.map((item) => (
        <ParagraphList key={item.idTag} tagId={item.idTag} title={item.headlinetext} list={item.paragraphs} />
      ))}
    </>
  );
};

export default AdditionalInfo;
