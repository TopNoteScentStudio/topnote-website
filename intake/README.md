# Formspree Autoreply Setup

The file `formspree_autoreply.gs` is a Google Apps Script that automatically replies to people who submit the contact form or event intake form on the website. It checks Gmail every 5 minutes for new Formspree notification emails, parses out the submitter's email and name, and sends a short thank-you reply.

## What you need

- Access to the topnotescentstudio@gmail.com Google account

## Steps

1. Log into topnotescentstudio@gmail.com
2. Go to https://script.google.com and create a new project
3. Name it something like "Formspree Autoreply"
4. Delete any starter code in the editor
5. Copy and paste the entire contents of `formspree_autoreply.gs` into the editor
6. In the function dropdown (near the top toolbar), select `createTrigger`
7. Click the Run button (play/triangle icon)
8. Google will ask you to authorize Gmail permissions. Click "Review Permissions", choose the topnotescentstudio account, click "Advanced", then "Go to [project name] (unsafe)", then "Allow"
9. That's it. The script now runs every 5 minutes automatically.

## Testing

To test without waiting 5 minutes, switch the function dropdown to `processFormspreeNotifications` and click Run. It will process any unprocessed Formspree notifications sitting in the inbox and send replies. Check your Sent folder to confirm.

## How it works

- Searches Gmail for emails from noreply@formspree.io that haven't been processed yet
- Tells the two forms apart by subject line ("New Contact Form Submission" vs "New Event Intake Submission")
- Sends a different reply depending on which form it was
- Labels each processed notification with `Formspree/Processed` so it doesn't get re-sent
- The label is created automatically on first run

## Notes

- The reply content (subject lines, body text) can be edited at the top of the script in the `FORMS` config object
- Gmail free accounts can send 500 emails per day, which is more than enough
- This script is separate from the quiz email script and they don't interfere with each other
