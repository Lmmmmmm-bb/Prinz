export const getGitHubOAuthConfig = () => {
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
  return {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
  };
};
