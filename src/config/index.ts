/**
 * 环境配置封装
 */
// const env = import.meta.env.Mode || "prod" ;
const env = "prod";

const EnvConfig = {
  dev: {
    baseApi: "/",
    mockAPi: "",
  },
  test: {
    baseApi: "//test.futurefe.com/api",
    mockAPi: "",
  },
  prod: {
    baseApi: "//futurefe.com.api",
    mockAPi: "",
  },
};

export default {
  env,
  mock: true,
  ...EnvConfig[env],
};
