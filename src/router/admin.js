import AdminDashboardView from "@/views/admin_views/AdminDashboardView.vue";
import AdminLoginView from "@/views/admin_views/AdminLoginView.vue";
import ApplicationEntriesView from "@/views/admin_views/ApplicationEntriesView.vue";
import AssessmentHistoryView from "@/views/admin_views/AssessmentHistoryView.vue";
import ComposeAssessmentView from "@/views/admin_views/ComposeAssessmentView.vue";
import CreateApplicationView from "@/views/admin_views/CreateApplicationView.vue";
import ResultsView from "@/views/admin_views/ResultsView.vue";
import SettingsView from "@/views/admin_views/SettingsView.vue";
import jwt_decode from "jwt-decode";

let admin = localStorage.getItem("admin-token");
let decodedAdmin;
let adminAuth = false;

if (admin) {
  decodedAdmin = jwt_decode(admin);
  const expirydate = new Date(decodedAdmin.exp * 1000);
  const now = new Date();

  if (now < expirydate) {
    adminAuth = true;
  }
}

export default [
  {
    path: "/admin-login",
    name: "admin-login",
    component: AdminLoginView,
    meta: {
      noAuth: true,
    },
  },
  {
    path: "/admin-dashboard",
    name: "admin-dashboard",
    component: AdminDashboardView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
  {
    path: "/create-application",
    name: "create-application",
    component: CreateApplicationView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
  {
    path: "/application-entries",
    name: "application-entries",
    component: ApplicationEntriesView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
  {
    path: "/compose-assessment",
    name: "compose-assessment",
    component: ComposeAssessmentView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
  {
    path: "/assessment-history",
    name: "assessment-history",
    component: AssessmentHistoryView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
    meta: {
      admin: true,
      noAuth: true,
    },
    beforeEnter: (to) => {
      if (to.meta.admin && !adminAuth) {
        return { name: "admin-login" };
      }
      return true;
    },
  },
];
