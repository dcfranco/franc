
export class ApiConfiguration {
  static rootUrl: string = 'http://localhost:5000/api';
  static nextUrl: string = 'http://localhost:3001/api';

}

export interface ApiConfigurationParams {
  rootUrl?: string;
}
