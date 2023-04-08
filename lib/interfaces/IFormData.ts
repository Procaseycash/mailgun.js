import * as NodeFormData from 'form-data';

export interface IFormDataOptions {
  [key: string]: any;
}

export interface InputFormData {
  new (options?: IFormDataOptions & HTMLFormElement): NodeFormData;
}
