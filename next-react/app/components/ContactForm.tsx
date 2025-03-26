"use client";


import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Make the POST request to the /api/send_email endpoint
      // Include the name, email, and message fields in the request body
      // Handle the response based on success or failure
      // Display the appropriate message and clear the fields if successful
      // Display the error message if the request fails
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={4}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <Button type="submit" variant="contained">
            Submit
          </Button>
        )}
        {success && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your message has been sent successfully.
          </Alert>
        )}
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </form>
    </div>
  );
}
