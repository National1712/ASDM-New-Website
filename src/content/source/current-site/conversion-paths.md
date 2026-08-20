# Conversion Paths Summary

## Sticky Conversion Bars

Discovered on mobile and desktop layout:

- **Call Now**: Triggers \`tel:+919016970734\`
- **WhatsApp**: Triggers chat at \`https://wa.me/919327967701?text=Inquiry%20for%20digital%20marketing%20course\`
- **Enquire Now**: Opens modal form.

## Enquiry & Brochure Download Form Fields

- **Name**: Required text input.
- **Email**: Required email format.
- **WhatsApp Phone Number**: Required tel format, between 10 and 15 digits.
- **Select Center**: Dropdown options:
  - `AHMEDABAD`
  - `SURAT`
    _(Note: Naroda is excluded in select lists; Mumbai is also excluded)._

## Form Actions & API Endpoints

- Standard Enquiry: Submits to \`/mail-send\` action.
- Brochure Request (OTP Route): Submits to \`/otp-send\`.
- OTP Validation Form: Input field \`otp\`, submits to \`/otpverification\`.
