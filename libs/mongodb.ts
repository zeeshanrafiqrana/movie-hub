const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Connected');
  }
  catch(err){
    console.log(err);
  }
 
};

export default connectMongoDB;