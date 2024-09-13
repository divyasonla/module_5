// Function to serve the custom HTML form
function doGet() {
    return HtmlService.createHtmlOutputFromFile('Form');
  }
  
  // Function to process form data
  function processForm(formData) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
    
    // Append form data to the sheet
    sheet.appendRow([
      new Date(),
      formData.menteeName,
      formData.mentorName,
      formData.feedback,
      formData.bestPerformance,
      formData.improvementAreas
    ]);
  
    // Send an email with the submitted data
    MailApp.sendEmail({
      to: formData.menteeEmail, // Replace with actual mentee email logic
      subject: `Weekly Progress Report for ${formData.menteeName}`,
      body: `
        Dear ${formData.menteeName},
  
        Here is your progress report for the past week:
  
        **Mentor’s Feedback:**
        ${formData.feedback}
  
        **What you did best:**
        ${formData.bestPerformance}
  
        **Areas for Improvement:**
        ${formData.improvementAreas}
  
        Regards,
        ${formData.mentorName}
      `
    });
  }
  