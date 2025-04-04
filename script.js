const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let size=sizes.value;

generateBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    isEmptyInput();
});

downloadBtn.addEventListener('click' ,()=>{
    let img = document.querySelector('.qr-body img')
    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href' , imgAttr )
    }else{
        downloadBtn.setAttribute('href' , `${document.querySelector('canvas').toDataURL()}` );

    }
});
sizes.addEventListener('change' , (e)=>{
    size=e.target.value;
    isEmptyInput();
});
isEmptyInput =()=>{
qrText.value.length > 0 ? generateQrCode() : alert("Enter the text or URL to generate your QR Code");
};

function generateQrCode(){
    qrContainer.innerHTML ="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
};