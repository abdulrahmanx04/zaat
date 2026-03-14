export const templates = {
  verification: (url: string, name = 'there') => ({
    subject: 'Verify your Zaat account',
    html: `
      <div style="margin:0;padding:0;background-color:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f5f7fb;padding:40px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
                
                <tr>
                  <td style="background:linear-gradient(135deg,#5B5FEF,#7B61FF);padding:32px 24px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:0.3px;">
                      Zaat
                    </h1>
                    <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">
                      Your digital identity, beautifully shared
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px 28px 24px;">
                    <p style="margin:0 0 16px;font-size:16px;color:#111827;">
                      Hi ${name},
                    </p>

                    <h2 style="margin:0 0 14px;font-size:24px;line-height:1.3;color:#111827;">
                      Verify your email address
                    </h2>

                    <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4b5563;">
                      Welcome to Zaat. Please confirm your email address to activate your account and start building your digital business card.
                    </p>

                    <div style="text-align:center;margin:30px 0;">
                      <a href="${url}"
                        style="display:inline-block;background:linear-gradient(135deg,#5B5FEF,#7B61FF);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 28px;border-radius:14px;">
                        Verify Account
                      </a>
                    </div>

                    <p style="margin:0 0 10px;font-size:14px;line-height:1.7;color:#6b7280;">
                      This link will expire in <strong>7 days</strong>.
                    </p>

                    <p style="margin:0 0 18px;font-size:14px;line-height:1.7;color:#6b7280;">
                      If the button does not work, copy and paste this link into your browser:
                    </p>

                    <p style="margin:0;padding:12px 14px;background:#f3f4f6;border-radius:12px;word-break:break-word;font-size:13px;line-height:1.6;color:#374151;">
                      ${url}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 28px 28px;">
                    <div style="height:1px;background:#e5e7eb;margin:0 0 20px;"></div>
                    <p style="margin:0;font-size:12px;line-height:1.7;color:#9ca3af;text-align:center;">
                      If you did not create a Zaat account, you can safely ignore this email.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  }),

  reset: (url: string, name = 'there') => ({
    subject: 'Reset your Zaat password',
    html: `
      <div style="margin:0;padding:0;background-color:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f5f7fb;padding:40px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
                
                <tr>
                  <td style="background:linear-gradient(135deg,#5B5FEF,#7B61FF);padding:32px 24px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:0.3px;">
                      Zaat
                    </h1>
                    <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">
                      Secure access to your digital card
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px 28px 24px;">
                    <p style="margin:0 0 16px;font-size:16px;color:#111827;">
                      Hi ${name},
                    </p>

                    <h2 style="margin:0 0 14px;font-size:24px;line-height:1.3;color:#111827;">
                      Reset your password
                    </h2>

                    <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4b5563;">
                      We received a request to reset your password. Click the button below to create a new one.
                    </p>

                    <div style="text-align:center;margin:30px 0;">
                      <a href="${url}"
                        style="display:inline-block;background:linear-gradient(135deg,#5B5FEF,#7B61FF);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 28px;border-radius:14px;">
                        Reset Password
                      </a>
                    </div>

                    <p style="margin:0 0 10px;font-size:14px;line-height:1.7;color:#6b7280;">
                      This link will expire in <strong>7 days</strong>.
                    </p>

                    <p style="margin:0 0 18px;font-size:14px;line-height:1.7;color:#6b7280;">
                      If the button does not work, copy and paste this link into your browser:
                    </p>

                    <p style="margin:0;padding:12px 14px;background:#f3f4f6;border-radius:12px;word-break:break-word;font-size:13px;line-height:1.6;color:#374151;">
                      ${url}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 28px 28px;">
                    <div style="height:1px;background:#e5e7eb;margin:0 0 20px;"></div>
                    <p style="margin:0;font-size:12px;line-height:1.7;color:#9ca3af;text-align:center;">
                      If you did not request a password reset, you can safely ignore this email.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  }),
};