# Quick Setup Guide - FinLegal Advisors Website

## 🚀 Quick Start (5 Minutes)

### Step 1: Set Up Google Sheets (2 minutes)

1. **Create a new Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Click "+ Blank" to create a new spreadsheet
   - Name it: "FinLegal Advisors - Form Submissions"

2. **Create three sheet tabs**
   - Rename "Sheet1" to `ServiceBookings`
   - Click "+" to add new sheet, name it `Appointments`
   - Click "+" to add new sheet, name it `Contacts`

3. **Add column headers**
   
   **ServiceBookings tab:**
   ```
   A1: Timestamp
   B1: Service
   C1: Name
   D1: Email
   E1: Phone
   F1: Message
   ```
   
   **Appointments tab:**
   ```
   A1: Timestamp
   B1: Name
   C1: Phone
   D1: Email
   E1: Preferred Date
   F1: Preferred Time
   G1: Service Type
   H1: Message
   ```
   
   **Contacts tab:**
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Subject
   F1: Message
   ```

### Step 2: Deploy Google Apps Script (2 minutes)

1. **Open Apps Script**
   - In your Google Sheet, click **Extensions** > **Apps Script**

2. **Add the script**
   - Delete any existing code in the editor
   - Copy the entire content from `google-apps-script.js`
   - Paste it into the Apps Script editor
   - Click the **Save** icon (💾)
   - Name your project: "Form Handler"

3. **Deploy as Web App**
   - Click **Deploy** > **New deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **Web app**
   - Configure:
     - Description: `Form Submissions Handler`
     - Execute as: **Me**
     - Who has access: **Anyone**
   - Click **Deploy**

4. **Authorize the script**
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [project name] (unsafe)**
   - Click **Allow**

5. **Copy the Web App URL**
   - Copy the URL (looks like: `https://script.google.com/macros/s/XXXXX/exec`)
   - Save it for the next step

### Step 3: Update Website Configuration (1 minute)

1. **Open `js/forms.js`**

2. **Find this section (around line 8-12):**
   ```javascript
   const GOOGLE_SHEETS_CONFIG = {
       serviceBookings: 'YOUR_SERVICE_BOOKINGS_SCRIPT_URL_HERE',
       appointments: 'YOUR_APPOINTMENTS_SCRIPT_URL_HERE',
       contacts: 'YOUR_CONTACTS_SCRIPT_URL_HERE'
   };
   ```

3. **Replace with your URL:**
   ```javascript
   const GOOGLE_SHEETS_CONFIG = {
       serviceBookings: 'https://script.google.com/macros/s/XXXXX/exec',
       appointments: 'https://script.google.com/macros/s/XXXXX/exec',
       contacts: 'https://script.google.com/macros/s/XXXXX/exec'
   };
   ```
   
   **Note:** Use the SAME URL for all three entries!

4. **Save the file**

### Step 4: Customize Contact Information (Optional)

Replace placeholder information in all HTML files:

**Find and replace:**
- `+91 98765 43210` → Your actual phone number
- `919555489525` → Your WhatsApp number (without +)
- `pkguptanassociates@gmail.com` → Your email
- `FinLegal Advisors` → Your company name

### Step 5: Test the Website

1. **Open `index.html` in a browser**
   - Right-click on `index.html`
   - Choose "Open with" > Your browser

2. **Test each form:**
   - Go to Services page → Click "Book This Service"
   - Go to Appointment page → Fill and submit
   - Go to Contact page → Fill and submit

3. **Verify in Google Sheets:**
   - Check if data appears in the respective sheets
   - Each submission should create a new row

---

## 🎨 Customization Options

### Change Colors

The website uses a blue theme. To change it:

**Blue color codes used:**
- `blue-900` (#1e3a8a) - Headers, primary buttons
- `blue-600` (#2563eb) - Links, hover states
- `blue-50` (#eff6ff) - Light backgrounds

**To change to green theme:**
- Replace `blue-900` with `green-900`
- Replace `blue-600` with `green-600`
- Replace `blue-50` with `green-50`

### Add Your Logo

Replace the icon in the header:

**Current:**
```html
<i class="fas fa-balance-scale mr-2"></i>
<span>FinLegal Advisors</span>
```

**With image logo:**
```html
<img src="images/logo.png" alt="Logo" class="h-8 mr-2">
<span>Your Company Name</span>
```

### Add Google Maps

In `contact.html`, replace the map placeholder:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE" 
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy"
  class="rounded-xl">
</iframe>
```

**To get your map embed code:**
1. Go to Google Maps
2. Search for your location
3. Click Share > Embed a map
4. Copy the iframe code

---

## 📧 Enable Email Notifications

To receive emails when forms are submitted:

1. **Open Google Apps Script**

2. **Find this line (around line 82):**
   ```javascript
   const adminEmail = "your-email@example.com";
   ```

3. **Replace with your email:**
   ```javascript
   const adminEmail = "youremail@gmail.com";
   ```

4. **Uncomment notification code in doPost function (around line 60):**
   
   **Change from:**
   ```javascript
   // Optional: Send email notification
   // Uncomment the following lines to enable email notifications
   /*
   sendEmailNotification(sheetName, data);
   */
   ```
   
   **To:**
   ```javascript
   // Optional: Send email notification
   sendEmailNotification(sheetName, data);
   ```

5. **Save and redeploy**
   - Click **Deploy** > **Manage deployments**
   - Click the edit icon (✏️)
   - Click **Version** > **New version**
   - Click **Deploy**

---

## 🌐 Deployment Options

### Option 1: Local Testing
1. Simply open `index.html` in your browser
2. Forms will work if Google Apps Script is set up

### Option 2: GitHub Pages (FREE)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings > Pages
5. Select main branch and save
6. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 3: Netlify (FREE)
1. Go to [Netlify.com](https://www.netlify.com)
2. Sign up for free
3. Drag and drop the `web` folder
4. Site goes live instantly
5. You get a URL like: `https://random-name.netlify.app`

### Option 4: Traditional Hosting
1. Use FTP client (FileZilla)
2. Upload all files to your hosting
3. Maintain folder structure

---

## 🐛 Troubleshooting

### Forms Not Submitting

**Problem:** Click submit, nothing happens

**Solutions:**
1. Open browser console (F12) and check for errors
2. Verify Google Apps Script URL is correct in `js/forms.js`
3. Check if JavaScript files are loading (Network tab in console)

### Data Not Appearing in Sheets

**Problem:** Form submits but no data in Google Sheets

**Solutions:**
1. Check sheet names are EXACTLY: `ServiceBookings`, `Appointments`, `Contacts`
2. Verify script deployment settings: Execute as "Me", Access "Anyone"
3. Check Apps Script execution logs: Apps Script > Executions

### "Script is not authorized" Error

**Solutions:**
1. Redeploy the script
2. Make sure you authorized the script when deploying
3. Check deployment settings: "Execute as: Me"

### Mobile Menu Not Working

**Solutions:**
1. Clear browser cache
2. Check if `js/main.js` is loading
3. Verify no JavaScript errors in console

### Form Validation Issues

**Problem:** Phone number or email not accepting input

**Solutions:**
1. Phone must be exactly 10 digits
2. Email must have @ and domain
3. Check browser compatibility

---

## 📱 Testing Checklist

- [ ] Test all forms on desktop
- [ ] Test all forms on mobile
- [ ] Verify data appears in Google Sheets
- [ ] Check all navigation links work
- [ ] Test WhatsApp button (should open WhatsApp)
- [ ] Test phone number click (should open dialer)
- [ ] Test email click (should open email client)
- [ ] Verify responsive design on different screen sizes
- [ ] Check all images load
- [ ] Test smooth scrolling

---

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors (Press F12)
2. Verify all file paths are correct
3. Ensure Google Apps Script is properly deployed
4. Check that sheet names match exactly

---

## 🎯 Next Steps

1. ✅ Set up Google Sheets
2. ✅ Deploy Google Apps Script
3. ✅ Update forms.js with your script URL
4. ✅ Test all forms
5. ✅ Customize contact information
6. ✅ Deploy website
7. ✅ Share with clients!

---

**Congratulations! Your website is ready! 🎉**
