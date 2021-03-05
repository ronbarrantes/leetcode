const smallTree = {
	val: 0,
	right: null,
	left:
	{
		val: 1,
		right:  null,
		left:  null }
	,
}

const smallValidBST = {
	val: 2,
	left: {
		val: 1,
		left: null,
		right: null,
	},
	right: {
		val: 3,
		left: null,
		right: null,
	},
}

const bigValidTree = {
	val: 3,
	right:
{
	val: 5,
	right:  { val: 6, right: null, left: null },
	left:  { val: 4, right: null, left: null } },
	left:
{
	val: 1,
	right:  { val: 2, right: null, left: null },
	left:  { val: 0, right: null, left: null } },
}

module.exports = {
	smallTree, bigValidTree,
	smallValidBST,
}