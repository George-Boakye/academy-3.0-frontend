import AdminDashboardView from "@/views/admin_views/AdminDashboardView.vue"
import AdminLoginView from "@/views/admin_views/AdminLoginView.vue"
import ApplicationEntriesView from "@/views/admin_views/ApplicationEntriesView.vue"
import AssessmentHistoryView from "@/views/admin_views/AssessmentHistoryView.vue"
import ComposeAssessmentView from "@/views/admin_views/ComposeAssessmentView.vue"
import CreateApplicationView from "@/views/admin_views/CreateApplicationView.vue"
import ResultsView from "@/views/admin_views/ResultsView.vue"
import SettingsView from "@/views/admin_views/SettingsView.vue"


export default [
    {
        path:'/admin-login',
        name:'admin-login',
        component: AdminLoginView,
        meta: {
            noAuth: true,
          },
    },
    {
        path:'/admin-dashboard',
        name:'admin-dashboard',
        component: AdminDashboardView
    },
    {
        path:'/create-application',
        name:'create-application',
        component: CreateApplicationView
    },
    {
        path:'/application-entries',
        name:'application-entries',
        component: ApplicationEntriesView
    },
    {
        path:'/compose-assessment',
        name:'compose-assessment',
        component: ComposeAssessmentView
    },
    {
        path:'/assessment-history',
        name:'assessment-history',
        component: AssessmentHistoryView
    },
    {
        path:'/results',
        name:'results',
        component: ResultsView
    },
    {
        path:'/settings',
        name:'settings',
        component: SettingsView
    }
]