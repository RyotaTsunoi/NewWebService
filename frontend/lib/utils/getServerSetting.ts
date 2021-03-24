export const getServerSetting = (environmentVariable: string, defaultValue?: string): string | null => {
  if (typeof window === 'undefined') {
    return process.env[environmentVariable];
  }

  return defaultValue || null;
};
