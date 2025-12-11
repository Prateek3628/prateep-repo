/**
 * Google Apps Script for FinLegal Advisors Website
 * 
 * This script handles form submissions from the website and stores them in Google Sheets.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Sheet with three tabs: ServiceBookings, Appointments, Contacts
 * 2. Add appropriate column headers to each sheet (see README.md)
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code
 * 5. Deploy as Web App (Deploy > New deployment > Web app)
 * 6. Set "Execute as: Me" and "Who has access: Anyone"
 * 7. Copy the deployment URL and update js/forms.js
 */

// ==========================================
// MAIN HANDLER FOR POST REQUESTS
// ==========================================

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Determine which sheet to use based on the data structure
    let sheetName;
    let rowData;
    
    if (data.service && !data.preferredDate) {
      // ========== SERVICE BOOKING ==========
      sheetName = 'ServiceBookings';
      rowData = [
        data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        data.service || '',
        data.name || '',
        data.email || '',
        data.phone || '',
        data.message || ''
      ];
      
    } else if (data.preferredDate) {
      // ========== APPOINTMENT ==========
      sheetName = 'Appointments';
      rowData = [
        data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        data.name || '',
        data.phone || '',
        data.email || '',
        data.preferredDate || '',
        data.preferredTime || '',
        data.serviceType || '',
        data.message || ''
      ];
      
    } else {
      // ========== CONTACT FORM ==========
      sheetName = 'Contacts';
      rowData = [
        data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.subject || '',
        data.message || ''
      ];
    }
    
    // Get the active spreadsheet and target sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    
    // Validate that the sheet exists
    if (!sheet) {
      throw new Error('Sheet "' + sheetName + '" not found. Please create it first.');
    }
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Optional: Send email notification
    // Uncomment the following lines to enable email notifications
    /*
    sendEmailNotification(sheetName, data);
    */
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success',
        'message': 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'error': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// HANDLER FOR GET REQUESTS (FOR TESTING)
// ==========================================

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      'result': 'success', 
      'message': 'FinLegal Advisors Form Handler is working!',
      'timestamp': new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ==========================================
// EMAIL NOTIFICATION FUNCTION (OPTIONAL)
// ==========================================

function sendEmailNotification(sheetName, data) {
  // Replace with your email address
  const adminEmail = "your-email@example.com";
  
  let subject = "";
  let body = "";
  
  switch(sheetName) {
    case 'ServiceBookings':
      subject = "New Service Booking Request";
      body = `
        New Service Booking Received:
        
        Service: ${data.service}
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Message: ${data.message}
        
        Timestamp: ${data.timestamp}
      `;
      break;
      
    case 'Appointments':
      subject = "New Appointment Booking";
      body = `
        New Appointment Booking Received:
        
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Preferred Date: ${data.preferredDate}
        Preferred Time: ${data.preferredTime}
        Service Type: ${data.serviceType}
        Message: ${data.message}
        
        Timestamp: ${data.timestamp}
      `;
      break;
      
    case 'Contacts':
      subject = "New Contact Form Submission";
      body = `
        New Contact Form Submission:
        
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Subject: ${data.subject}
        Message: ${data.message}
        
        Timestamp: ${data.timestamp}
      `;
      break;
  }
  
  // Send the email
  MailApp.sendEmail({
    to: adminEmail,
    subject: subject,
    body: body
  });
}

// ==========================================
// UTILITY FUNCTION: FORMAT SHEET HEADERS
// ==========================================

function setupSheetHeaders() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Setup ServiceBookings sheet
  let sheet = ss.getSheetByName('ServiceBookings');
  if (!sheet) {
    sheet = ss.insertSheet('ServiceBookings');
  }
  sheet.getRange('A1:F1').setValues([[
    'Timestamp', 'Service', 'Name', 'Email', 'Phone', 'Message'
  ]]).setFontWeight('bold').setBackground('#1e3a8a').setFontColor('#ffffff');
  
  // Setup Appointments sheet
  sheet = ss.getSheetByName('Appointments');
  if (!sheet) {
    sheet = ss.insertSheet('Appointments');
  }
  sheet.getRange('A1:H1').setValues([[
    'Timestamp', 'Name', 'Phone', 'Email', 'Preferred Date', 'Preferred Time', 'Service Type', 'Message'
  ]]).setFontWeight('bold').setBackground('#1e3a8a').setFontColor('#ffffff');
  
  // Setup Contacts sheet
  sheet = ss.getSheetByName('Contacts');
  if (!sheet) {
    sheet = ss.insertSheet('Contacts');
  }
  sheet.getRange('A1:F1').setValues([[
    'Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'
  ]]).setFontWeight('bold').setBackground('#1e3a8a').setFontColor('#ffffff');
  
  // Auto-resize all columns
  ss.getSheets().forEach(function(sheet) {
    sheet.autoResizeColumns(1, sheet.getLastColumn());
  });
  
  SpreadsheetApp.getUi().alert('Sheet headers have been set up successfully!');
}

// ==========================================
// UTILITY FUNCTION: ADD TIMESTAMP TRIGGER
// ==========================================

function addTimestampFormulas() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ['ServiceBookings', 'Appointments', 'Contacts'];
  
  sheets.forEach(function(sheetName) {
    const sheet = ss.getSheetByName(sheetName);
    if (sheet && sheet.getLastRow() > 1) {
      // Format timestamp column as date/time
      const timestampRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1);
      timestampRange.setNumberFormat('dd/mm/yyyy hh:mm:ss');
    }
  });
  
  SpreadsheetApp.getUi().alert('Timestamp formatting applied!');
}

// ==========================================
// CUSTOM MENU (OPTIONAL)
// ==========================================

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Form Handler')
    .addItem('Setup Sheet Headers', 'setupSheetHeaders')
    .addItem('Format Timestamps', 'addTimestampFormulas')
    .addToUi();
}
