declare module '@octokit/app' {
  interface Options {
    id: number,
    privateKey: string
  }

  declare class App {
    constructor (options: Options)

    public getSignedJsonWebToken(): string
    public getInstallationAccessToken({id: number}): Promise<string>
  }

  export = App
}
