import type { Postcard } from "./postcardSchema";

const colors = {
  page: "#eeeae2",
  sheet: "#fbf8f1",
  pencil: "#42433b",
  muted: "#727367",
  plum: "#866271",
  stitch: "#c9bdae",
} as const;

const fontStack = "Georgia, 'Times New Roman', serif";

export function renderPostcardEmail({ stamp, email, message }: Postcard) {
  const safeStamp = escapeHtml(stamp);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:32px 16px;background:${colors.page};font-family:${fontStack};color:${colors.pencil};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${colors.sheet};border:1px dashed ${colors.stitch};">
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px;font-size:22px;color:${colors.plum};">A &ldquo;${safeStamp}&rdquo; postcard ♡</p>
                <p style="margin:0 0 24px;font-size:14px;color:${colors.muted};">
                  from <a href="mailto:${safeEmail}" style="color:${colors.plum};">${safeEmail}</a>
                </p>
                <p style="margin:0;padding-top:16px;border-top:1px dashed ${colors.stitch};font-size:16px;line-height:1.7;">${safeMessage}</p>
                <p style="margin:24px 0 0;font-size:12px;color:${colors.muted};">Hit reply to write back.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderPostcardText({ stamp, email, message }: Postcard) {
  return `A "${stamp}" postcard from ${email}\n\n${message}\n\nHit reply to write back.`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
