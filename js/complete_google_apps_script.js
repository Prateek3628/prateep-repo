/**
 * COMPLETE GOOGLE APPS SCRIPT FOR TAX BROTHERS
 * This script handles all form submissions: Contact, Appointments, Service Bookings, and Welcome Popup
 * 
 * SHEETS REQUIRED IN YOUR GOOGLE SHEET:
 * 1. Contacts
 * 2. Appointments
 * 3. ServiceBookings
 * 4. Welcome_Popup_Leads
 */

function doPost(e) {
    try {
        // Parse the incoming data
        var data = JSON.parse(e.postData.contents);

        // Log for debugging
        Logger.log('Received data: ' + JSON.stringify(data));

        // Route to appropriate handler based on formType
        if (data.formType === 'contact') {
            return handleContactForm(data);
        } else if (data.formType === 'appointment') {
            return handleAppointmentForm(data);
        } else if (data.formType === 'serviceBooking') {
            return handleServiceBookingForm(data);
        } else if (data.formType === 'welcomePopup') {
            return handleWelcomePopupForm(data);
        } else {
            throw new Error('Unknown form type: ' + data.formType);
        }

    } catch (error) {
        Logger.log('Error: ' + error.toString());
        return ContentService.createTextOutput(JSON.stringify({
            'status': 'error',
            'message': error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * Handle Contact Form Submissions
 */
function handleContactForm(data) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contacts');

    if (!sheet) {
        throw new Error('Sheet "Contacts" not found');
    }

    var timestamp = new Date();

    sheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.subject || '',
        data.message || data.query || '',
        'Contact Form'
    ]);

    return ContentService.createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Contact form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle Appointment Form Submissions
 */
function handleAppointmentForm(data) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Appointments');

    if (!sheet) {
        throw new Error('Sheet "Appointments" not found');
    }

    var timestamp = new Date();

    sheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.date || '',
        data.time || '',
        data.service || '',
        data.message || data.query || '',
        'Appointment Form'
    ]);

    return ContentService.createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Appointment booked successfully'
    })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle Service Booking Form Submissions
 */
function handleServiceBookingForm(data) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ServiceBookings');

    if (!sheet) {
        throw new Error('Sheet "ServiceBookings" not found');
    }

    var timestamp = new Date();

    sheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.service || '',
        data.message || data.query || '',
        'Service Booking'
    ]);

    return ContentService.createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Service booking submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle Welcome Popup Form Submissions
 */
function handleWelcomePopupForm(data) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Welcome_Popup_Leads');

    if (!sheet) {
        throw new Error('Sheet "Welcome_Popup_Leads" not found');
    }

    var timestamp = new Date();

    sheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.query,
        'Homepage Popup'
    ]);

    return ContentService.createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Welcome popup data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - you can run this to test if sheets exist
 */
function testSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = ['Contacts', 'Appointments', 'ServiceBookings', 'Welcome_Popup_Leads'];

    sheets.forEach(function (sheetName) {
        var sheet = ss.getSheetByName(sheetName);
        if (sheet) {
            Logger.log('✓ Sheet "' + sheetName + '" exists');
        } else {
            Logger.log('✗ Sheet "' + sheetName + '" NOT FOUND');
        }
    });
}
