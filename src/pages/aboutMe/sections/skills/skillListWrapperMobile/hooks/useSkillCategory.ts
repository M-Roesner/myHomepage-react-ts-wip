import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { SkillCategoryType } from "../../skillTypes";

/**
 * Custom hook to manage the current skill category based on URL parameters.
 *
 * @returns {SkillCategoryType | undefined} The current skill category.
 */
const useSkillCategory = (): SkillCategoryType | undefined => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentCategory, setCurrentCategory] = useState<SkillCategoryType | undefined>("Frontend");

  useEffect(() => {
    if (params.skillCategory) {
      setCurrentCategory(params.skillCategory as SkillCategoryType);
    } else {
      navigate(`${location.pathname}/${currentCategory}`);
    }
  }, [currentCategory, location.pathname, navigate, params.skillCategory]);

  return currentCategory;
};

export default useSkillCategory;
