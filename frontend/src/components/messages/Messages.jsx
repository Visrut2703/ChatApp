import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {

	const {messages , loading} = useGetMessages();
	const lastMessageRef = useRef();
	useListenMessages()

	useEffect(()=>{
		setTimeout(()=>{
			lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
		} ,100)
	},[messages])
	return (
			
		<div className='px-4 flex-1 overflow-auto' >
			{!loading && messages.length>0 && messages.map((message)=>(
				<div key={message._id} ref={lastMessageRef}>
					<Message message = {message}/>

				</div>
			))}
			{loading && [...Array(5)].map((_,idx)=><MessageSkeleton key={idx}/>)}
			{!loading && messages.length===0 && (
				<p className="text-center">Send a message to start conversation</p>
			)}
		</div>
	);
};
export default Messages;