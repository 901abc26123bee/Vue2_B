const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: 'algorithm & data structure',
				date: '2006-9',
				price: 400.00,
				count: 1
			},
			{
				id: 2,
				name: 'TCP/IP',
				date: '2006-7',
				price: 600.00,
				count: 1
			},
			{
				id: 3,
				name: 'programming',
				date: '2008-2',
				price: 460.00,
				count: 1
			},
			{
				id: 4,
				name: 'clean code',
				date: '2003-6',
				price: 500.00,
				count: 1
			}
		]
	},
	methods: {
		getFinalPrices(price){
			return '$' + price.toFixed(2);
		},
		increment(index){
			this.books[index].count++;
		},
		decrement(index){
			this.books[index].count--;		
		},
		removeHandler(index){
			this.books.splice(index, 1);
		}
	},
	computed: {
		totalPrices(){
			let totalPrice = 0;
//			for(let i=0; i<this.books.length; i++){
//				totalPrice += this.books[i].price * this.books[i].count;
//			}

//			for(let item of this.books){
//				totalPrice += item.price * item.count;
//			}

			totalPrice = this.books.reduce(function(preValue, book){
				return preValue + book.price *book.count
			}, 0)
			return totalPrice;
		}
	},
	filters: {
		showPrices(price){
			return '$' + price.toFixed(2);
		}
	}
})