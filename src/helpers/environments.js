export const environments = () => {
  const env = import.meta.env
  return {
    ...env
  }
}