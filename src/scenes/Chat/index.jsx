import React, { useState } from "react";
import { Box, TextField, Button, Typography, List, ListItem } from "@mui/material";

const ChatRoom = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage("");
        }
    };

    return (
        <Box
            sx={{
                width: "400px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Chat Room
            </Typography>
            <List sx={{ maxHeight: "200px", overflowY: "auto", marginBottom: "20px" }}>
                {messages.map((msg, index) => (
                    <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
                        {msg}
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
