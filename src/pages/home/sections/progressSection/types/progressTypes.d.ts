export type ProgressStatus = "completed" | "in-progress" | "not-started";
export interface IProgress {
  name: string;
  status: ProgressStatus;
}
