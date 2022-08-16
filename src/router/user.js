import SignUpView from "@/views/user_views/SignUpView.vue";
import LoginView from "@/views/user_views/LoginView.vue";
import PreDashboardView from "@/views/user_views/PreDashboardView.vue";
import ForgotPasswordView from "@/views/user_views/ForgotPasswordView.vue";
import DashboardView from "@/views/user_views/DashboardView.vue";
import AssessmentView from "@/views/user_views/AssessmentView.vue";
import QuestionsView from "@/views/user_views/QuestionsView.vue";
import SuccessfulView from "@/views/user_views/SuccessfulView.vue";

export default[
    {
        path: "/signup",
        name: "sign-up",
        component: SignUpView,
      },
      {
        path: "/login",
        name: "login",
        component: LoginView,
      },
      {
        path: "/forget-password",
        name: "forget-password",
        component: ForgotPasswordView,
      },
      {
        path: "/pre-dashboard",
        name: "pre-dashboard",
        component: PreDashboardView,
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardView,
      },
    
      {
        path: "/assessment",
        name: "assessment",
        component: AssessmentView,
      },
      {
        path: "/questions",
        name: "questions",
        component: QuestionsView,
      },
      {
        path: "/successful",
        name: "successful",
        component: SuccessfulView,
      },
    ]