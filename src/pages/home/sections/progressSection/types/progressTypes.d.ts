export type ProgressStatus = "complete" | "in-progress" | "not-started";
export interface IProgress {
  name: string;
  status: ProgressStatus;
}
