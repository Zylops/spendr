import { writable } from 'svelte/store'

export const Worth = writable(0);
export const ShopItems = writable([{icon: "https://m.media-amazon.com/images/I/31kRFrOoQ+L._AC_SY580_.jpg", name: "iPad", price: 69}])