const mongoose = require('mongoose');
const mongoURI = "mongodb://tarunnemali2004:Iamtarun2004@ac-ufksq8g-shard-00-00.ajrkupp.mongodb.net:27017,ac-ufksq8g-shard-00-01.ajrkupp.mongodb.net:27017,ac-ufksq8g-shard-00-02.ajrkupp.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-tpe666-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const Catdata = await foodCategory.find({}).toArray();
        
        global.food_items = data;
        global.foodCategory = Catdata;
        
        // Commenting out mongoose.connection.close()
        // mongoose.connection.close(); 
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Exporting the connection function

mongoDB()
module.exports = mongoDB;
