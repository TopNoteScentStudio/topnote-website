// ─── CONFIG ─────────────────────────────────────────────────────────────────
// Formspree autoreply script for Top Note Scent Studio
// Runs on a time-based trigger (every 5 minutes), scans Gmail for new
// Formspree notification emails, and sends a thank-you reply to the submitter.

var FORMS = {
  contact: {
    subjectMatch: "New Contact Form Submission",
    nameField: "first_name",
    replySubject: "Thank you for contacting Top Note Scent Studio",
    replyBody: function (name) {
      return "Hi " + name + ",\n\n"
        + "Thank you for reaching out! We’ve received your message and will respond within 1–2 business days.\n\n"
        + "Warm regards,\n"
        + "Top Note Scent Studio";
    },
  },
  intake: {
    subjectMatch: "New Event Intake Submission",
    nameField: "name",
    replySubject: "Thank you for your event inquiry — Top Note Scent Studio",
    replyBody: function (name) {
      return "Hi " + name + ",\n\n"
        + "Thank you for your interest in hosting an event with Top Note! We’ve received your submission and will be in touch within 1–2 business days to discuss next steps.\n\n"
        + "Warm regards,\n"
        + "Top Note Scent Studio";
    },
  },
};

var FROM_NAME = "Top Note Scent Studio";
var PROCESSED_LABEL = "Formspree/Processed";

// ─── MAIN ───────────────────────────────────────────────────────────────────

function processFormspreeNotifications() {
  var label = getOrCreateLabel(PROCESSED_LABEL);

  var keys = Object.keys(FORMS);
  for (var k = 0; k < keys.length; k++) {
    var formKey = keys[k];
    var form = FORMS[formKey];

    var query = 'from:noreply@formspree.io subject:"' + form.subjectMatch + '" -label:' + PROCESSED_LABEL.replace("/", "-");
    var threads = GmailApp.search(query, 0, 50);

    for (var i = 0; i < threads.length; i++) {
      var messages = threads[i].getMessages();
      for (var j = 0; j < messages.length; j++) {
        var msg = messages[j];
        if (isAlreadyLabeled(threads[i], label)) continue;

        var body = msg.getPlainBody();
        var email = extractField(body, "email");
        var name = extractField(body, form.nameField);

        if (!email || !isValidEmail(email)) {
          Logger.log("Skipping message (no valid email found): " + msg.getSubject());
          continue;
        }

        if (!name) name = "there";

        GmailApp.sendEmail(email, form.replySubject, form.replyBody(name), {
          name: FROM_NAME,
        });

        Logger.log("Sent " + formKey + " autoreply to: " + email);
      }
      threads[i].addLabel(label);
    }
  }
}

// ─── HELPERS ────────────────────────────────────────────────────────────────

function extractField(body, fieldName) {
  var lines = body.split(/\r?\n/);
  for (var i = 0; i < lines.length - 1; i++) {
    if (lines[i].trim().toLowerCase() === fieldName.toLowerCase()) {
      for (var j = i + 1; j < lines.length; j++) {
        var val = lines[j].trim();
        if (val !== "") return val;
      }
    }
  }
  return null;
}

function isValidEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function isAlreadyLabeled(thread, label) {
  var labels = thread.getLabels();
  for (var i = 0; i < labels.length; i++) {
    if (labels[i].getName() === label.getName()) return true;
  }
  return false;
}

function getOrCreateLabel(name) {
  var label = GmailApp.getUserLabelByName(name);
  if (!label) label = GmailApp.createLabel(name);
  return label;
}

// ─── SETUP (run once) ───────────────────────────────────────────────────────

function createTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "processFormspreeNotifications") {
      Logger.log("Trigger already exists.");
      return;
    }
  }
  ScriptApp.newTrigger("processFormspreeNotifications")
    .timeBased()
    .everyMinutes(5)
    .create();
  Logger.log("Trigger created: every 5 minutes.");
}
