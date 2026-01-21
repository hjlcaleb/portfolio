const isProd = process.env.NODE_ENV === "production";
const repoPath = "/portfolio"; // replace with your repo name
export default {
  output: "export",
  ...(isProd && {
    basePath: repoPath,
    assetPrefix: repoPath,
  }),
};