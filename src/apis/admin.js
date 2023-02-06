import { apiHelper } from "@/utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
    categories: {
        get() {
            return apiHelper.get('admin/categories', { headers: { Authorization: `Bearer ${getToken()}` } })
        }
    },
    restaurants: {
        create({ formData }) {
            return apiHelper.post('admin/restaurants', formData, { headers: { Authorization: `Bearer ${getToken()}` } })
        },
        get() {
            return apiHelper.get('admin/restaurants', { headers: { Authorization: `Bearer ${getToken()}` } })
        },
        getDetail({ restaurantId }) {
            return apiHelper.get(`admin/restaurants/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
        },
        upDate({ formData, restaurantId }) {
            return apiHelper.put(`admin/restaurants/${restaurantId}`, formData, { headers: { Authorization: `Bearer ${getToken()}` } })
        },
        deleteRestaurant({ restaurantId }) {
            return apiHelper.delete(`admin/restaurants/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
        }
    }
}