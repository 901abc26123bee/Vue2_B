export default {
	// computed : return computed state (original state unchange) 
	powerCounter(state){
		return state.counter * state.counter
	},
	more20stu(state){
    return state.students.filter(s => 
      s.age>=25
    )
  },
  more20stuLength(state, getters){
    return getters.more20stu.length
  },
  more2AgeStu(state){
  	// return function(age){
  	// 	return state.students.filter(s => s.age > age)
  	// }
  	return age => {
  		return state.students.filter(s => s.age > age)
  	}
    }
}