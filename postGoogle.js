// APP SCRIPT GỬI EMAIL
function getEmails(e) {
  let name = e.values[1];
  let mail = e.values[2];
  let phone = e.values[3];
  let content = e.values[4];
  let subject = `${name} vừa đăng ký thông tin liên hệ`;
  let body = `
    <div>
    <p>Họ và tên: <span>${name}</span>  </p>
    <p>Email: <span>${mail}</span>   </p>
    <p>Số điện thoại: <span>${phone}</span>   </p>
    <p>Nôi dung tư vấn: <span>${content}</span>   </p>
    </div>
    `;
  MailApp.sendEmail({
    to: "youremailc@gmail.com",
    subject: subject,
    htmlBody: body,
  });
}
// HÀM POST TO GOOGLE FORM
async function postGoogle(data) {
  const formURL =
    "https://docs.google.com/forms/d/e/____LINK CỦA BẠN____/formResponse";
  const postName = "entry.586251xxx";
  const postEmail = "entry.1739230xxx";
  const postPhone = "entry.1598152xxx";
  const postContent = "entry.613939xxx";
  const formData = new FormData();
  formData.append(postName, data.nameData);
  formData.append(postEmail, data.mailData);
  formData.append(postPhone, data.phoneData);
  formData.append(postContent, data.contentData);
  try {
    await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  } catch {
    console.error("Lỗi");
  }
}
