window._ = _
console.log(_.sortBy)
var people = [{name: 'rick',age: 30},{name:'jack',age: 24}]
console.log(_.sortBy(people, (p)=>p.age))
var nums = [1,2,3,4,5]

function doubleAll(arr){
	return _.map(arr, n=> n*2)
}

var double = doubleAll(nums)

console.log(double)

console.log(_.map({a:1,b:2},_.identity))

function average(arr){
	return _.reduce(arr,(a,b)=>a+b)/_.size(arr)
}

console.log('average of nums:' + average(nums))

function aMap(obj){
	return _.isObject(obj)
}

function validator(message, fun){
	var f = function(){
		return fun.apply(fun, arguments)
	}

	f['message'] = message
	return f
}

function checker(){
	var validators = _.toArray(arguments)

	return function(obj){
		return _.reduce(validators, function(errs, check){
			if(check(obj)){
				return errs
			}
			else{
				return _.chain(errs).push(check.message).value();
			}
		}, [])
	}
}

function hasKeys(){
	var keys = _.toArray(arguments)
	var fun = function(obj){
		return _.every(keys, function(k){
			return _.has(obj, k)
		})
	}

	fun.message = _.cat(['must have values for keys:'], keys).join(' ')
	return fun
}

var checkCommand = checker(validator('must be a map', aMap), hasKeys('msg', 'type'))

checkCommand({msg: 'blah', type: 'display'})
console.log(checkCommand(3))

function lookupIterator(iteratee){
	if(iteratee == null) return _.identity
	if(typeof iteratee == 'function') return iteratee
	return _.property(iteratee)
}

function groupBy(list, iteratee){
	iteratee = lookupIterator(iteratee)
	return list.reduce((prev,next)=>{
		prev[iteratee(next)] ? prev[iteratee(next)].push(next) : prev[iteratee(next)] = [next]
		return prev
	},{});
}


console.log(groupBy([1.3,2.1,2.4], (num)=>Math.floor(num)))
console.log(groupBy(['one','two', 'three', 'four'], 'length'))
var albums = [{title: 'sabbath', genre:'metal'},
		{title: 'scientist', genre:'dub'},
		{title: 'undertow', genre: 'metal'}
	]
console.dir(groupBy(albums, (a)=>a.genre))



function cat(){
	var head = _.first(arguments)
	if(_.exists(head)){
		return head.concat.apply(head, _.rest(arguments))
	}
	else{
		return []
	}
}

function construct(head, tail){
	return cat([head], _.toArray(tail))
}

function mapcat(fun, coll){
	return cat.apply(null, _.map(coll, fun))
}

console.log(mapcat(function(e){
	return construct(e, [','])
}, [1,2,3]))