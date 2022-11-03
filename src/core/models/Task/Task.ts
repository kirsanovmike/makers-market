/* Adding task. */
export class Task {
  constructor(data: Task) {
    this.createTime = data?.createTime;
    this.text = data?.text;
    this.id = data?.id;
  }
  createTime: string;
  text: string;
  id: string;
}
