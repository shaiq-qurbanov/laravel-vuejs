import { createRouter, createWebHistory } from 'vue-router'
import Test from "../pages/Test";

const routes = [
    {
        path: '/',
        name: 'Test',
        component: Test
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
