import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const orderSchema = new Schema({
   firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: true
   }

}, {
   collection: 'Orders'
});

const Order = model('Orders', orderSchema);
export default Order;