Test Cases for Share Feature - what3words.com

Test Cases

TC-SHARE-001: Copy Link Functionality
Objective: Verify that the "Copy Link" button works correctly.
Steps:
Navigate to a valid 3-word address (e.g., https://what3words.com/daring.lion.race).
Click on the "Share" button/tab.
Click on the "Copy Link" button.
Expected Results:
A confirmation toast message (e.g., "Link copied!") appears briefly.
The link copied to the clipboard is correct and matches the current page URL.
The copied link, when pasted and opened in a new browser tab, leads to the exact same location.


TC-SHARE-002: Share via Email Functionality
Objective: Verify that the "Share via Email" option works correctly.
Steps:
Navigate to a valid 3-word address (e.g., https://what3words.com/daring.lion.race).
Click on the "Share" button/tab.
Click on the "Email" icon/option.
Expected Results:
The device's default email client opens (or a modal with email fields appears).
The email subject and body are pre-populated with the correct 3-word address and a link to the location.
The generated email contains a valid, clickable URL.


TC-SHARE-003: Share via Twitter Functionality
Objective: Verify that sharing to Twitter works correctly.
Steps:
Navigate to a valid 3-word address (e.g., https://what3words.com/daring.lion.race).
Click on the "Share" button/tab.
Click on the "Twitter" icon.
Expected Results:
A new browser tab/window opens to Twitter's compose tweet page.
The tweet text is pre-populated with the correct 3-word address and its URL.
The URL in the tweet is shortened using a w3w.me shortlink or similar.


TC-SHARE-004: Share via Facebook Functionality
Objective: Verify that sharing to Facebook works correctly.
Steps:
Navigate to a valid 3-word address (e.g., https://what3words.com/daring.lion.race).
Click on the "Share" button/tab.
Click on the "Facebook" icon.
Expected Results:
A new browser tab/window opens to Facebook's share dialog.
The URL of the current 3-word address is pre-populated in the post.
Facebook correctly fetches and displays the page's preview (title, image, description).


TC-SHARE-005: UI and Content Validation
Objective: Verify the UI, spelling, and grammar of the Share dialog.
Steps:
Navigate to any 3-word address page.
Click on the "Share" button/tab.
Expected Results:
All text labels, buttons, and tooltips have correct spelling and grammar.
All icons (Copy, Email, Twitter, Facebook, etc.) are displayed clearly and are not pixelated.
The dialog is visually appealing, properly aligned, and follows the site's design language.


TC-SHARE-006: Accessibility Testing
Objective: Verify the share feature is keyboard-navigable and screen reader friendly.
Steps:
Navigate to a 3-word address page using a keyboard (Tab key).
Tab to the "Share" button and activate it with the Enter key.
Continue tabbing through all share options within the dialog.
Expected Results:
All interactive elements (Share button, copy link, social icons) are focusable and have a visible focus indicator.
Each element announces its purpose clearly when focused with a screen reader.
All functionality can be achieved using only the keyboard.


TC-SHARE-007: Cross-Browser Consistency
Objective: Verify the share functionality works consistently across different browsers.
Steps:
Open the same 3-word address in different browsers (Chrome, Firefox, Safari, Edge).
In each browser, click the "Share" button/tab and test the "Copy Link" functionality.
Expected Results:
The visual appearance and behavior of the Share dialog are consistent across all supported browsers.
The "Copy Link" function works correctly in each browser.


TC-SHARE-008: Mobile Responsiveness and Functionality
Objective: Verify the share feature works correctly on mobile devices.
Steps:
Open a 3-word address page on a mobile device (or use browser dev tools to simulate a mobile view).
Tap the "Share" button/tab.
Test the "Copy Link" and one social sharing option.
Expected Results:
The Share interface is touch-friendly, with appropriately sized tap targets.
The "Copy Link" function works on mobile, showing a confirmation message.
Tapping a social sharing icon opens the respective app (if installed) or the mobile web version of the platform.


TC-SHARE-009: QR Code Functionality (if applicable)
Objective: Verify the QR code generation and scanning works correctly.
Steps:
Navigate to a valid 3-word address.
Click on the "Share" button/tab.
Locate the QR code displayed in the dialog.
Scan the QR code with a mobile device.
Expected Results:
A QR code is displayed clearly and can be scanned successfully.
Scanning the QR code directs the mobile device to the correct 3-word address location.


TC-SHARE-010: Link Correctness and Persistence
Objective: Verify that the shared link always points to the correct, permanent location.
Steps:
Navigate to a valid 3-word address.
Use the "Copy Link" function.
Wait 24 hours, then paste and open the copied link in a new browser tab.
Expected Results:
The shared link remains valid over time and continues to resolve to the exact same geographic location.
The link does not expire or become invalid after a period of time.