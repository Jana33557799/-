
function generateCertificate() {
    const teacherName = document.getElementById('teacherName').value;
    const messageChoice = document.getElementById('thankYouMessage').value;
    const studentName = document.getElementById('studentName').value;

    let messageText = "";
    if (messageChoice === "1") {
        messageText = `إلى من زرع فينا بذور الطموح، وسقاها علمًا واهتمامًا حتى أينعت إنجازًا وتخرجًا…
كنتم لنا أكثر من معلّم، كنتم الدافع حين تراجعنا، والسند حين ترددنا، والنور حين غابت الرؤية.
لم تكن كلماتكم تمر مرورًا عابرًا، بل كانت ترسخ في الذاكرة وتبني فينا الإنسان قبل أن تُشكّل فينا الطالب.
وفي يوم التخرّج، لا يسعنا إلا أن نلتفت بامتنان لمن كان له الفضل بعد الله في وصولنا.
شكرًا لكم… فقد كنتم أثرًا لا يُمحى، وعلامة فارقة في دربنا العلمي والإنساني.`;
    } else {
        messageText = `في لحظة تخرجي، لا يسعني إلا أن أقف وقفة تقدير وإجلال،
لمن كان النور في طريق العتمة، والدافع في لحظة التراجع، والقدوة حين ضاعت المعايير.
لقد تركتم فينا أثرًا لا تمحوه الأيام، وزرعتم في قلوبنا امتنانًا لا يزول.
شكرًا لكم، لأنكم كنتم أكثر من معلّم… كنتم مصدرًا للثقة، ومثالًا للرسالة النبيلة.`;
    }

    const certificateContent = `
        <html dir="rtl" lang="ar">
        <head><meta charset="UTF-8"><title>بطاقة الشكر</title></head>
        <body style="text-align:center; font-family:Tahoma; background-color:#f7f7f7; padding:40px;">
            <h2>سعادة الدكتور/ة ${teacherName}</h2>
            <p style="margin:30px auto; max-width:700px; white-space:pre-line;">${messageText}</p>
            <h3>${studentName}</h3>
            <p style="margin-top:50px;">على الطالب إرسال بطاقة الشكر للدكتور/ة عن طريق البريد الإلكتروني</p>
        </body>
        </html>
    `;

    const blob = new Blob([certificateContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}
