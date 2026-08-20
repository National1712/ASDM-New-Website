declare module 'node:fs' {
  interface FsReadFileOptions {
    encoding: 'utf8';
  }

  const fs: {
    existsSync(path: string | URL): boolean;
    readFileSync(path: string | URL, encoding: 'utf8'): string;
    readFileSync(path: string | URL, options: FsReadFileOptions): string;
  };

  export default fs;
}
