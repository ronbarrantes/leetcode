const goodBST = [
    {
        val: 6,
        left: {
            val: 4,
            left: { val: 2,
                left:{ val: 1,
                    left: null,
                    right: null,
                },
                right:   { val: 3,
                    left: null,
                    right: null,
                },
            },
            right:   {
                val: 5,
                left: null,
                right: null,
            },
        },
        right: {
            val: 8,
            left:   {
                val: 7,
                left: null,
                right: null,
            },
            right: {
                val: 10,
                left: {
                    val: 9,
                    left: null,
                    right: null,
                },
                right:   {
                    val: 11,
                    left: null,
                    right: {
                        val: 12,
                        left: null,
                        right: null,
                    },
                },
            },
        },
    },
]

const badBST = [{
    val: 1,
    right:{
        val: 5,
        right:  { val: 7,
            right: { val: 9, right: null, left: null },
            left: { val: 8, right: null, left: null } },
        left: { val: 6, right: null, left: null },
    },
    left: {
        val: 2,
        right:  { val: 4, right: null, left: null },
        left:  { val: 3, right: null, left: null },
    },
},

{ val: 10,
    left: {
        val: 8,
        left: {
            val: 4,
            left:  {
                val: 1,
                left: null,
                right: null,
            },
            right: {
                val: 6,
                left: null,
                right: null,
            },
        },
        right: null,
    },

    right:   {
        val: 20,
        left: {
            val: 9,
            left:   {
                val: 5,
                left: null,
                right: null,
            }
            ,
            right: {
                val: 11,
                left: null,
                right: null,
            },
        },
        right: {
            val: 30,
            left:   {
                val: 18,
                left: null,
                right: null,
            },
            right:   {
                val: 32,
                left: null,
                right: null,
            },
        },
    },
},
{
    val: 3,
    left: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right:null,
        },
        right:{
            val: 2,
            left: null,
            right:{
                val: 3,
                left: null,
                right:null,
            },
        },
    }
    ,
    right:null,
},
]

module.exports = {
    goodBST,
    badBST,
}