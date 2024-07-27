export interface AgentType {
  id: number;
  name: string;
  systemInstructions: string;
  editable?: boolean;
  hidden?: boolean;
}
