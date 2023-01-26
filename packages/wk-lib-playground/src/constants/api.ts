export class ApiConfiguration {
  static rootUrl: string = 'http://localhost:3000/api';
  static nextUrl: string = 'http://localhost:3002/api';
}

export interface ApiConfigurationParams {
  rootUrl?: string;
}
