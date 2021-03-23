export const getServerSetting = (environmentVariable: string, defaultValue?: string) => {
  if (typeof window === 'undefined') {
    return process.env[environmentVariable];
  }

  return defaultValue || null;
};
