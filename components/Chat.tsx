"use client";

import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

import Message from "./Messsage";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          messages
        ),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex-1">
      <Message key={messages.id} message={messages.data()} />
    </div>
  );
}

export default Chat;
