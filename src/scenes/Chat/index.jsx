import React, { useState } from "react";

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    Avatar,
} from "@chatscope/chat-ui-kit-react";
import {Box, useTheme, Typography} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {mockDataContacts} from "../../data/mockData";
import {tokens} from "../../theme";

const AVATAR_IMAGE =
    `../../assets/user.png`

const defaultMessage = [
    {
        model: {
            message: "How are you?",
            direction: "incoming",
        },
        avatar: {
            src: AVATAR_IMAGE,
            name: "user",
        },
    },
    {
        model: {
            message: "I'm fine, thank you, and you?",
            direction: "outgoing",
        },
    },
    {
        model: {
            message: "I'm fine, too. thank you, and you?",
            direction: "incoming",
        },
        avatar: {
            src: AVATAR_IMAGE,
            name: "user",
        },
    },
];

const getMessageComponent = (data) => {
    return data.map((item, index) => {
        return (
            <Message key={index} model={item.model}>
                {item.avatar ? (
                    <Avatar src={item.avatar.src} name={item.avatar.name} />
                ) : null}
            </Message>
        );
    });
};

const ChatUI = () => {
    const [messages, setMessages] = useState(defaultMessage);

    const handleSend = (input) => {
        let newMessage = {
            model: {
                message: input,
                direction: "outgoing",
            },
        };

        setMessages([...messages, newMessage]);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        }
    ];


    return (
        <div style={{ display: 'flex', margin : '0 0 0 10px'}}>
            <Box
                height="90vh"
                width="30%"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>

            <div style={{ width: "65%", height: "90vh", display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Box
                    style={{
                        backgroundColor: '#f5f5f5', // 헤더 배경 색상
                        padding: '10px',
                        borderBottom: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        color : 'black',
                    }}
                >
                    <Avatar
                        src="../../assets/user.png"
                        style={{marginRight : '10px'}}
                    />
                    <Typography variant="h3">user11111</Typography>
                </Box>

                {/* Main Container */}
                <MainContainer style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <ChatContainer style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <MessageList>{getMessageComponent(messages)}</MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
};

export default ChatUI;