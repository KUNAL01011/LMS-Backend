import mongoose,{Document,Model,Schema} from "mongoose";


export interface IOreder extends Document {
    courseId:string;
    userId:string;
    payment_info:object;
}

const OrderSchema = new Schema<IOreder>({
    courseId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    payment_info:{
        type:Object,
        //required:true
    },
},{timestamps:true});

const OrderModel: Model<IOreder> = mongoose.model("Order",OrderSchema);
export default OrderModel;