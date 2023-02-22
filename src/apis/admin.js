import { apiHelper } from "@/utils/helpers";

export default {
    categories: {
        get() {
            return apiHelper.get('admin/categories')
        },
        delete({ categoryId }) {
            return apiHelper.delete(`admin/categories/${categoryId}`)
        },
        upDate({ categoryId, name }) {
            return apiHelper.put(`admin/categories/${categoryId}`, { name })
        },
        create({ name }) {
            return apiHelper.post('/admin/categories', { name })
        }
    },
    restaurants: {
        create({ formData }) {
            return apiHelper.post('admin/restaurants', formData)
        },
        get() {
            return apiHelper.get('admin/restaurants')
        },
        getDetail({ restaurantId }) {
            return apiHelper.get(`admin/restaurants/${restaurantId}`)
        },
        upDate({ formData, restaurantId }) {
            return apiHelper.put(`admin/restaurants/${restaurantId}`, formData)
        },
        deleteRestaurant({ restaurantId }) {
            return apiHelper.delete(`admin/restaurants/${restaurantId}`)
        }
    },
    users: {
        get() {
            return apiHelper.get('admin/users')
        },
        upDate({ userId, isAdmin }) {
            return apiHelper.put(`admin/users/${userId}`, { isAdmin })
        }
    }
}