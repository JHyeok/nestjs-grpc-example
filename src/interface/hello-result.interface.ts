export enum LoginCode {
  SUCCESS = 0,
  FAIL = 1,
  UNRECOGNIZED = -1,
}

export interface HelloResult {
  loginCode: LoginCode;
  token?: string | undefined;
}
