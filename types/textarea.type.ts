import { type TextareaHTMLAttributes } from "vue";

export interface TextareaInterface extends TextareaHTMLAttributes {
  name?: string;
  value?: string;
  error?: string;
  required?: boolean;
}
