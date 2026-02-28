declare module "to-ico" {
  function toIco(input: Buffer | Buffer[], options?: { resize?: boolean; sizes?: number[] }): Promise<Buffer>;
  export = toIco;
}
