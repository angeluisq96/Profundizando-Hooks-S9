
export const environments = () => {
  const env = import.meta
  console.log(import.meta);
  return {
    ...env, aja: 2
  }
}