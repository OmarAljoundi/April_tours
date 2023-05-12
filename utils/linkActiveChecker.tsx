// is active parent check
export const isActiveParent = (data: any[] = [], path: string) => {
  if (data?.length !== 0) {
    return data?.some(({ items }) =>
      items?.some(
        (menu: any) =>
          menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")
      )
    );
  }
};

// is active parent childe check
export const isActiveParentChaild = (data = [], path: string) => {
  if (data?.length !== 0) {
    return data?.some(
      (menu: any) =>
        menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")
    );
  }
};

// is active link check
export const isActiveLink = (menuPath: any, routePath: string) => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
  }
};
