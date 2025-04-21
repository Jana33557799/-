
function generateCertificate() {
  const canvas = document.getElementById('certificate');
  const ctx = canvas.getContext('2d');
  const studentName = document.getElementById('studentName').value;
  const teacherName = document.getElementById('teacherName').value;
  const message = document.getElementById('message').value;

  const background = new Image();
  background.src = 'certificate.jpg';
  background.onload = () => {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 36px Cairo';
    ctx.fillStyle = '#000';
    ctx.fillText(studentName, 500, 350);
    ctx.fillText(teacherName, 500, 410);
    ctx.font = '28px Cairo';
    ctx.fillText(message, 500, 470);
    ctx.textAlign = 'center';
  }
}

function downloadImage() {
  const canvas = document.getElementById('certificate');
  const link = document.createElement('a');
  link.download = 'certificate.png';
  link.href = canvas.toDataURL();
  link.click();
}

function downloadPDF() {
  const canvas = document.getElementById('certificate');
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('l', 'pt', [canvas.width, canvas.height]);
  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save('certificate.pdf');
}
