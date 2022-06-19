export interface IUserMongoDb{

}

export interface IUserSqlDb{
  moreTwoEmailOnSite?: number;
  lockAccount?: number;
  nowLockAccount?: number;
  invalidCred?: number;
  tempPassword?: number;
  loginSuccess?: number;
}

export class UserSqlDb implements IUserSqlDb{
  moreTwoEmailOnSite?: number;
  lockAccount?: number;
  nowLockAccount?: number;
  invalidCred?: number;
  tempPassword?: number;
  loginSuccess?: number;
  constructor(moreTwoEmailOnSite: number, lockAccount: number, nowLockAccount: number, invalidCred: number, tempPassword: number, loginSuccess: number) {
    this.moreTwoEmailOnSite = moreTwoEmailOnSite;
    this.lockAccount = lockAccount;
    this.nowLockAccount = nowLockAccount;
    this.invalidCred = invalidCred;
    this.tempPassword = tempPassword;
    this.loginSuccess = loginSuccess;
  }
}
