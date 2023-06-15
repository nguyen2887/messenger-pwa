import { IconArchivedStorage, IconChat, IconEveryone, IconWaitingChat } from "@/assets/vectors";

export const menu = [
  {
    title: "Chat",
    icon: <IconChat />,
    link: "/t",
  },
  {
    title: "Mọi người",
    icon: <IconEveryone />,
    link: "/active/t/1",
  },
  {
    title: "Tin nhắn đang chờ",
    icon: <IconWaitingChat />,
    link: "/requests/t/1",
  },
  {
    title: "Kho lưu trữ",
    icon: <IconArchivedStorage />,
    link: "/archived/t/1",
  },
];
