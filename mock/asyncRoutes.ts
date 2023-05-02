// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"applicant"
 * admin：招聘官
 * applicant：申请人
 */

const informationRouter = {
  path: "/information",
  meta: {
    title: "menus.positionIntroduction",
    icon: "collection",
    rank: 1
  },
  children: [
    {
      path: "/information/manage",
      name: "InformationManage",
      meta: {
        title: "menus.positionIntroduction",
        roles: ["admin"]
      }
    },
    {
      path: "/information/view",
      name: "InformationView",
      meta: {
        title: "menus.positionIntroduction",
        roles: ["applicant"]
      }
    }
  ]
};

const profileRouter = {
  path: "/profile",
  meta: {
    title: "menus.profile",
    icon: "avatar",
    rank: 2
  },
  children: [
    {
      path: "/profile/index",
      name: "Profile",
      meta: {
        title: "menus.profile",
        roles: ["applicant"]
      }
    }
  ]
};

const applicationRouter = {
  path: "/application",
  meta: {
    title: "menus.application",
    icon: "document-copy",
    rank: 3
  },
  children: [
    {
      path: "/application/new/index",
      name: "ApplicationNew",
      meta: {
        title: "menus.applicationnew",
        roles: ["applicant"]
      }
    },
    {
      path: "/application/progress/index",
      name: "ApplicationProgress",
      meta: {
        title: "menus.applicationprogress",
        roles: ["applicant"]
      }
    },
    {
      path: "/application/manage/index",
      name: "ApplicationManage",
      meta: {
        title: "menus.applicationmanage",
        roles: ["admin"]
      }
    }
  ]
};

const faqsRouter = {
  path: "/faqs",
  meta: {
    title: "menus.faqs",
    icon: "question",
    rank: 4
  },
  children: [
    {
      path: "/faqs/index",
      name: "Faqs",
      meta: {
        title: "menus.faqs",
        roles: ["applicant"]
      }
    }
  ]
};

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/index",
      name: "PermissionPage",
      meta: {
        title: "menus.permissionPage",
        roles: ["admin", "applicant"]
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          permissionRouter,
          informationRouter,
          profileRouter,
          applicationRouter,
          faqsRouter
        ]
      };
    }
  }
] as MockMethod[];
