
//if(device.desktop()) alert('ПК');
//if(device.tablet()) alert('Планшет');
// if(device.mobile()) alert('Смартфон');
//Ориентация экрана
//if(device.landscape()) alert('Альбомная (в ширину)');
// if(device.portrait()) alert('Портретная (в высоту)');
//ОС устройства
// if(device.ios()) alert('iOS');
// if(device.ipad()) alert('ipad');
// if(device.iphone()) alert('iphone');
// if(device.ipod()) alert('ipod');
// if(device.android()) alert('android');
// if(device.windows()) alert('windows');
// if(device.blackberry()) alert('blackberry');
// if(device.fxos()) alert('fxos');
//if (device.desktop()) {
//  if (confirm("Перейти на мобильную версию сайта?")) {
//    document.location.href = "/mobil.html";
//  } else {
//    document.location.href = "/index.html";
//  }
//}
if (device.mobile()) {
  document.location.href = "https://www.google.ru/.html"
} else {
  document.location.href = "/index.html";
}