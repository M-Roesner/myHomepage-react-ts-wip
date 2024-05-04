// Components
import { StyledImageWrapperLayout } from "./styledImageWrapperLayout";
import CardHeadline from "../../card/cardHeadline/CardHeadline";

type imageWrapperLayoutProps = {
  headlineText: string;
  children: React.ReactNode;
};
const ImageWrapperLayout = ({ headlineText, children }: imageWrapperLayoutProps) => {
  return (
    <StyledImageWrapperLayout>
      <CardHeadline level={2}>{headlineText}</CardHeadline>
      {children}
    </StyledImageWrapperLayout>
  );
};

export default ImageWrapperLayout;
