import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getRecieverSocetId, io } from "../socket/socket.js";

export const sendMessage = async(req , res)=>{
    try{
        const {message} = req.body;
        const {id : reciverId}  = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId , reciverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId , reciverId]
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        });
        console.log(newMessage._id);
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }   
        
        // await conversation.save();
        // await newMessage.save();

        //This will run parallel and take less time
        await Promise.all([conversation.save() , newMessage.save()]);
        
        // Socket Io need to added here
        
        const receiverSocketId =  getRecieverSocetId(reciverId);
        console.log(receiverSocketId);
        if(receiverSocketId){
            console.log(newMessage);
            io.to(receiverSocketId).emit("newMessage" , newMessage)
            console.log(2);
        }
        
        res.status(201).json(newMessage);
        

    }catch(e){
        console.log("Error in send Message controller");
        res.status(500).json({e : "Internal Server Error"});
    }
}

export const getMessage = async(req , res)=>{
    try {
        const {id :userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId , userToChatId]},
        }).populate("messages"); //  not reference but messages itself
        if(!conversation) return res.status(200).json([])
        const messages = conversation.messages
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in send Message controller" , error.message);
        res.status(500).json({error : "Internal Server Error"});
    }
}