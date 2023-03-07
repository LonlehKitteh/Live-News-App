import React from "react";
import "../src/styles/globals.css";
import Header from "./Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <Header />
                <div>{children}</div>
            </body>
        </html>
    );
}
