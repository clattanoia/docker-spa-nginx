const loadRuntimeEnv = () => {
  let compileTimeEnv;
  try {
    compileTimeEnv = process.env;
  } catch (error) {
    compileTimeEnv = {};
  }

  return compileTimeEnv.NODE_ENV === 'production' && window.__env
    ? window.__env
    : compileTimeEnv;
};

export default loadRuntimeEnv;
