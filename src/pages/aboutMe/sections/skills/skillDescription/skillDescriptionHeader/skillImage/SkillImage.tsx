// Components
import { StyledSkillImage } from "./styledSkillImage";

// helpers
import iconMapping from "./iconMapping";

/**
 * A component that renders an icon based on the provided icon name.
 * If the icon does not exist in the iconMapping, nothing is rendered.
 *
 * @param {SkillImageProps} props - The properties for the SkillImage component.
 * @param {string} props.icon - The name of the icon to render.
 * @returns A JSX element containing the icon, or null if the icon is not found.
 */
const SkillImage = ({ icon }: { icon: string }) => {
  const IconComponent = iconMapping[icon] || null;

  // Avoid rendering the span if IconComponent is null
  if (!IconComponent) return null;

  return (
    <StyledSkillImage>
      {/* IconContext.Provider is alternative to style the icon. */}
      {/* <IconContext.Provider value={{ size: "2em", color: "red" }}> */}
      {IconComponent && (
        <span>
          <IconComponent />
        </span>
      )}
      {/* </IconContext.Provider> */}
    </StyledSkillImage>
  );
};

export default SkillImage;
