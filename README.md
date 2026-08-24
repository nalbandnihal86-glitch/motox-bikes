# MOTOX Bike Showroom

Pure HTML + CSS + JavaScript multi-page motorcycle showroom.

## Pages
Home, Motorcycles, Bike Details, Compare, Customize, Test Ride, Service, Accessories, Gallery, Dealers, Stories, Offers, Wishlist, Cart, Login, Register, Profile, Bookings.

## Run
Open `index.html` in VS Code with Live Server, or simply open it in a browser.

## Important
The project uses CSS/typographic motorcycle placeholders so it works without external image assets. Replace the `.fake-bike` blocks with your own motorcycle images later if desired.

## Data
Wishlist, cart, saved configuration, login demo, and bookings use browser localStorage. There is no backend/database because this version is intentionally HTML/CSS/JS only.

## Login Gate
No login gate is used. All pages can be opened directly.

### Demo credentials
- Email: `demo@motox.com`
- Password: `motox123`

A successful login creates a browser session using `localStorage`. The Logout button clears the session and returns to the login page. This is a front-end demo only; it is not a secure production authentication system.


## Latest MOTOX UI changes
- Removed the duplicate navigation-style links from the bottom footer.
- Footer now shows motorcycle-focused details and MOTOX information only.
- Replaced the accessory placeholder images with more realistic motorcycle-gear imagery.
- The ♡ Wishlist button now saves the bike and opens its full bike-details page.
- Added a clearer "♡ Wishlist" label to make the action obvious.
