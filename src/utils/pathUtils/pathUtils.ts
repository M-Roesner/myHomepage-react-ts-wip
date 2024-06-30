import { ProjectType } from "../../pages/myPortfolio/types/projectTypes";

/**
 * Constructs the full URL path by appending the provided relative path to the BASE_URL.
 * @param relativePath The relative path to be appended to the BASE_URL.
 * @returns The full URL path.
 *
 * German explanation:
 * Konstruktiert den vollständigen URL-Pfad, indem der angegebene relative Pfad an die BASE_URL angehängt wird.
 * @param relativePath Der relative Pfad, der an die BASE_URL angehängt werden soll.
 * @returns Der vollständige URL-Pfad.
 *
 * More details on path handling can be found in [pathUtils.md](pathUtils.md).
 */
export function getFullPath(relativePath: string | undefined): string {
  // If relativePath is not defined or empty, return an empty string. - Wenn relativePath nicht definiert oder leer ist, gibt eine leere Zeichenkette zurück.
  if (!relativePath) return "";

  // Remove any leading slash from the relativePath - Entfernt einen führenden Schrägstrich vom relativePath
  const cleanedRelativePath = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;

  // Ensure BASE_URL ends with a single slash - Stellt sicher, dass BASE_URL mit einem einzelnen Schrägstrich endet
  const baseUrl = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

  // Construct the full URL path by appending cleanedRelativePath to baseUrl. - Konstruiert den vollständigen URL-Pfad, indem cleanedRelativePath an baseUrl angehängt wird.
  return `${baseUrl}${cleanedRelativePath}`;
}

/**
 * Processes the array of projects by mapping each project and updating the image paths and link icons to use full URLs.
 * @param projects The array of ProjectType objects to be processed.
 * @returns The processed array of ProjectType objects with updated image paths and link icons.
 *
 * German explanation:
 * Verarbeitet das Array von Projekten, indem jedes Projekt gemappt und die Bildpfade und Link-Icons aktualisiert werden, um vollständige URLs zu verwenden.
 * @param projects Das Array von ProjectType-Objekten, das verarbeitet werden soll.
 * @returns Das verarbeitete Array von ProjectType-Objekten mit aktualisierten Bildpfaden und Link-Icons.
 */
export function processJsonData(projects: ProjectType[]): ProjectType[] {
  // Map over each project in the projects array and update its images and links.
  return projects.map((project) => ({
    ...project,
    // Update images array by mapping over each image and updating imgSrcs paths.
    images: project.images?.map((image) => ({
      ...image,
      imgSrcs: {
        preview: getFullPath(image.imgSrcs.preview),
        mobile: getFullPath(image.imgSrcs.mobile),
        desktop: getFullPath(image.imgSrcs.desktop),
      },
    })),
    // Update links array by mapping over each link and updating iconSrc path if present.
    links: project.links?.map((link) => ({
      ...link,
      iconSrc: link.iconSrc ? getFullPath(link.iconSrc) : undefined,
    })),
  }));
}
