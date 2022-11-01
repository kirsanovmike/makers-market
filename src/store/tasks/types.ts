/* Adding task. */
export interface Task {
  createTime: string;
  text: string;
  id: string;
}

/* Main state. */
export interface ProfileState {
  tasks: Array<Task>;
  error: boolean;
}

/* Base setting object. */
export interface SettingPayload {
  model: String;
  payload: any;
}
