import axios from 'axios'

export const cityGuess = () => axios.get('http://cangdu.org:8001/v1/cities?type=guess')
export const foodTypes = () => axios.get('http://cangdu.org:8001/v2/index_entry')
export const foodLeft = () => axios.get('http://cangdu.org:8001/shopping/v2/restaurant/category')
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
    let supportStr = '';
	support_ids.forEach(item => {
		if (item.status) {
			supportStr += '&support_ids[]=' + item.id;
		}
	});
	let data = {
		latitude,
		longitude,
		offset,
		limit: '20',
		'extras[]': 'activities',
		keyword: '',
		restaurant_category_id,
		'restaurant_category_ids[]': restaurant_category_ids,
		order_by,
		'delivery_mode[]': delivery_mode + supportStr
	};
    return axios.get('http://cangdu.org:8001/shopping/restaurants',data)
}