import type { Preview } from "@storybook/nextjs";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Lexend } from "next/font/google";
import "../app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased`}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
