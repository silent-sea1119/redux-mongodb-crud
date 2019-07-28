'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
      // _id : {
      //    type: String,
      //    required: true
      // },
      // seq : {
      //    type: Number,
      //    default: 0
      // },
      name : {
         type: String,
         required: true
      },
      xtype : {
         type: String
      },
      price : {
         type: Number
      },
      rating : {
         type: Number
      },
      warranty_years : {
         type: Number
      },
      available : {
         type: Boolean,
         default: true
      }
},{
     id: false,
     toObject: {
         virtuals: true,
         getters: true
     },
     toJSON: {
         virtuals: true,
         getters: true,
         setters: false
     },
     timestamps: true
});

ProductSchema.pre('find', function () {
     this.where({ available: { $ne: false } });
});
module.exports = mongoose.model('Product', ProductSchema);


// 'use strict';
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const ProductSchema = new Schema({
//       name : {
//          type: String,
//          required: true
//       },
//       type : {
//          type: String
//       },
//       price : {
//          type: Number
//       },
//       rating : {
//          type: Number
//       },
//       warranty_years : {
//          type: Number
//       },
//       available : {
//          type: Boolean,
//          default: false
//       }
// },{
//      id: false,
//      toObject: {
//          virtuals: true,
//          getters: true
//      },
//      toJSON: {
//          virtuals: true,
//          getters: true,
//          setters: false
//      },
//      timestamps: true
// });

// ProductSchema.pre('find', function () {
//      this.where({ is_active: { $ne: false } });
// });
// module.exports = mongoose.model('Product', ProductSchema);