export const parseToken = (authorization: string) => {
  if (authorization.startsWith('Bearer')) {
    return authorization.split(' ')[1];
  }
  return authorization;
};
