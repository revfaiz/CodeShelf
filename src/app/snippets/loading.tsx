import React from "react";

export default function SnippetLoading() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
        >
            <h2
                style={{
                    color: "#fff",
                    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'",
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    letterSpacing: "1px",
                    marginBottom: "1rem",
                    textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
            >
                Loading...
            </h2>
            <p
                style={{
                    color: "#f3f3f3",
                    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    textShadow: "0 1px 4px rgba(0,0,0,0.10)",
                }}
            >
                Please wait while we fetch your snippet.
            </p>
        </div>
    );
}
