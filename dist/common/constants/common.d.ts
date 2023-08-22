export declare const EVENTS: {
    connection: string;
    CLIENT: {
        SEND_ROOM_MESSAGE: string;
        REQUEST_ROOM_MESSAGE: string;
        REQUEST_CONTACT_LIST: string;
        DELETE_CONVERSATION: string;
        JOIN_ROOM: string;
        DELETE_MESSAGE: string;
        TYPING: string;
    };
    SERVER: {
        JOINED_ROOM: string;
        RECEIVED_ROOM_MESSAGE: string;
        DELETE_MESSAGE_RESULT: string;
        DELETE_CONVERSATION_RESULT: string;
        IS_TYPING: string;
        STATUS: {
            ONLINE: string;
            OFFLINE: string;
        };
    };
};
