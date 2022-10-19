import Taro from "@tarojs/taro";
/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = (): string => {
  const pages = Taro.getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const url = currentPage.route as string;
  return url;
};

export const pageToLogin = () => {
  const path = getCurrentPageUrl();
  if (!path.includes("login")) {
    Taro.navigateTo({
      url: "/pages/login/login",
    });
  }
};
