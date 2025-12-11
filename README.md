# Legal Financial Advisor Website

A complete, responsive website for a Legal Financial Advisor in India specializing in GST, ITR filing, tax consultation, and related financial/legal services.

## Features

- ✅ Clean, professional, and responsive design
- ✅ TailwindCSS for modern styling
- ✅ Mobile-friendly navigation
- ✅ Service showcase with detailed descriptions
- ✅ Appointment booking system
- ✅ Service booking forms
- ✅ Contact form
- ✅ Google Sheets integration (no database required)
- ✅ WhatsApp integration
- ✅ Smooth animations and transitions
- ✅ Form validation
- ✅ Loading states and user feedback

## Pages

1. **Home Page** (`index.html`) - Hero section, services overview, why choose us
2. **Services Page** (`services.html`) - Detailed service descriptions with booking modals
3. **Appointment Page** (`appointment.html`) - Consultation booking form
4. **Contact Page** (`contact.html`) - General inquiry form and contact information

## Technologies Used

- HTML5
- TailwindCSS (via CDN)
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Apps Script (for form submissions)

## Google Sheets Integration Setup

### Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "FinLegal Advisors - Form Submissions"
3. Create three separate sheets (tabs) with the following names:
   - `ServiceBookings`
   - `Appointments`
   - `Contacts`

### Step 2: Set Up Each Sheet

#### For ServiceBookings Sheet:
Add these column headers in Row 1:
```
Timestamp | Service | Name | Email | Phone | Message
```

#### For Appointments Sheet:
Add these column headers in Row 1:
```
Timestamp | Name | Phone | Email | Preferred Date | Preferred Time | Service Type | Message
```

#### For Contacts Sheet:
Add these column headers in Row 1:
```
Timestamp | Name | Email | Phone | Subject | Message
```

### Step 3: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any existing code
3. Copy and paste the following script:

```javascript
// Google Apps Script for Form Submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Determine which sheet to use based on the data structure
    let sheetName;
    let rowData;
    
    if (data.service && !data.preferredDate) {
      // Service Booking
      sheetName = 'ServiceBookings';
      rowData = [
        data.timestamp,
        data.service,
        data.name,
        data.email,
        data.phone,
        data.message || ''
      ];
    } else if (data.preferredDate) {
      // Appointment
      sheetName = 'Appointments';
      rowData = [
        data.timestamp,
        data.name,
        data.phone,
        data.email,
        data.preferredDate,
        data.preferredTime,
        data.serviceType || '',
        data.message || ''
      ];
    } else {
      // Contact Form
      sheetName = 'Contacts';
      rowData = [
        data.timestamp,
        data.name,
        data.email,
        data.phone,
        data.subject || '',
        data.message
      ];
    }
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    
    // Append the data
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Script is working!' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 4: Deploy the Script

1. Click on **Deploy** > **New deployment**
2. Click on the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the details:
   - **Description**: Form Submissions Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize** the script (you may see a warning - click "Advanced" and "Go to [project name]")
7. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/XXXXX/exec`)

### Step 5: Update the Website Code

1. Open `js/forms.js`
2. Find the `GOOGLE_SHEETS_CONFIG` object at the top
3. Replace the placeholder URLs with your deployed script URL:

```javascript
const GOOGLE_SHEETS_CONFIG = {
    serviceBookings: 'YOUR_DEPLOYED_WEB_APP_URL_HERE',
    appointments: 'YOUR_DEPLOYED_WEB_APP_URL_HERE',
    contacts: 'YOUR_DEPLOYED_WEB_APP_URL_HERE'
};
```

**Note**: Use the **same URL** for all three (the script automatically determines which sheet to use).

### Step 6: Test the Integration

1. Open your website
2. Fill out and submit each form type
3. Check your Google Sheet to verify the data is being received
4. If data isn't appearing, check the browser console for errors

## Customization

### Update Contact Information

Replace the placeholder contact details in all HTML files:
- Phone: `+91 98765 43210`
- WhatsApp: `https://wa.me/919876543210`
- Email: `info@finlegaladvisors.com`
- Address: Update in `contact.html`

### Update Company Name

Search and replace "FinLegal Advisors" with your company name across all files.

### Update Colors

The website uses a blue color scheme. To change colors:
- Primary Blue: `#1e3a8a` (blue-900)
- Modify TailwindCSS classes in HTML files

### Add Google Maps

In `contact.html`, replace the map placeholder with an actual Google Maps embed:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE" 
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

## File Structure

```
web/
├── index.html              # Home page
├── services.html           # Services page
├── appointment.html        # Appointment booking page
├── contact.html           # Contact page
├── css/
│   └── styles.css         # Custom styles
└── js/
    ├── main.js            # Main JavaScript (navigation, animations)
    └── forms.js           # Form handling & Google Sheets integration
```

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select the branch and deploy

### Option 2: Netlify
1. Drag and drop the `web` folder to Netlify
2. Your site will be live instantly

### Option 3: Traditional Web Hosting
1. Upload all files via FTP to your web hosting
2. Ensure the file structure is maintained

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Security Considerations

- The Google Apps Script uses `mode: 'no-cors'` which is secure for this use case
- Never expose sensitive API keys in client-side code
- The script runs with your Google account permissions
- Consider adding CAPTCHA for production use (Google reCAPTCHA)

## Email Notifications (Optional)

To receive email notifications when forms are submitted, add this to your Apps Script:

```javascript
// Add to the doPost function after sheet.appendRow(rowData);

MailApp.sendEmail({
  to: "your-email@example.com",
  subject: "New Form Submission - " + sheetName,
  body: "New submission received. Check your Google Sheet for details."
});
```

## Troubleshooting

### Forms not submitting
- Check browser console for errors
- Verify the Google Apps Script URL is correct
- Ensure the script is deployed as "Anyone" can access
- Check if the sheet names match exactly

### Data not appearing in sheets
- Verify column headers match exactly
- Check Apps Script execution logs (View > Executions)
- Ensure sheets are in the same spreadsheet

### Mobile menu not working
- Clear browser cache
- Check if JavaScript files are loading correctly

## License

This project is free to use and modify for your business needs.

## Support

For issues or questions:
- Check the console for JavaScript errors
- Verify Google Apps Script deployment
- Ensure all file paths are correct

## Credits

- Icons: Font Awesome
- CSS Framework: TailwindCSS
- Images: Unsplash (placeholder images)

---

**Built with ❤️ for Legal Financial Advisors in India**
