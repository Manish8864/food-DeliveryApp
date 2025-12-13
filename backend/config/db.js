import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://manishkumar:manishritvik42@cluster0.gtjahtp.mongodb.net/food-DeliveryApp').then(()=>console.log("DB Connected"));
}