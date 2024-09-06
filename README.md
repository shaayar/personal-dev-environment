# Personal Development Environment

This document outlines the concept and features for a personal development environment application. It's designed to enhance productivity, organization, and security for users.

<!-- add project image here -->

## Necessities:

1. **`Diary`:** A space for users to jot down notes and brainstorm ideas with an integrated canvas.
2. **`Github`:** A section displaying all user-created repositories, with clickable links redirecting to the respective repository pages on GitHub.
3. **`Password Manager`:** Secure storage and management of passwords for various sites and accounts.
4. **`To-Do`:** A task list for recording and tracking daily activities.
5. **`Social`:** A centralized hub for accessing social media links.
6. **`Links`:** A curated collection of links to favorite blogs and websites.
7. **`Document`:** A secure storage space for important documents like ID proofs and government documents.

## Functionalities

1. **`Clock and Date`:** Display the current time and date in the top left corner for quick reference.
2. **`Water Reminder`:** A notification system reminding users to drink water every 20 minutes, promoting healthy habits.
3. **`Pomodoro Clock`:** A built-in timer for implementing the Pomodoro Technique, enhancing focus and productivity during study or work sessions.
4. **`Customizable Background`:** Allow users to personalize the app's appearance by changing the background image.

## Security

1. **`AWS Credential Integration`:** Securely fetch and manage user credentials from AWS services.
2. **`Password Encryption`:** Implement robust encryption for passwords stored in the `password manager` section.
3. **`Optional Diary Encryption`:** Provide the option for users to encrypt their `diary` entries with a password for enhanced privacy.

## Technology Stack

- **`Frontend`:** Next JS and React JS for building a dynamic and responsive user interface.
- **`Backend`:** Node.js with Express for handling API requests and server-side logic.
- **`Database`:** MongoDB for storing user data securely.
- **`Cloud Services`:** AWS for credential management and potentially hosting the application.

## Future Development

- **`Calendar Integration`:** Synchronize with user's calendar for scheduling tasks and appointments.
- **`Cloud Storage Integration`:** Allow users to store documents directly in their preferred cloud storage provider (e.g., Google Drive, Dropbox).
- **`Cross-Platform Compatibility`:** Develop mobile applications for iOS and Android to provide access on the go (only `documents`, `diary` and `password manager` will be accessible).

## Conclusion

This concept outlines a comprehensive personal development environment application that caters to various user needs. The focus on productivity, organization, and security aims to create a valuable tool for personal and professional growth.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Set up

First, either clone or fork the project to get your own individual copy of the web app.

To fork the project, run the following command in the terminal:

```bash
gh repo fork shaayar/personal-dev-environment
```
To clone the project, run the following command in the terminal:

```bash
git clone https://github.com/shaayar/personal-dev-environment.git
```

Then, instal the development dependencies by running the following command in the terminal:

```bash
npm install
# or
yarn
# or
pnpm
# or
bun install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the it running.