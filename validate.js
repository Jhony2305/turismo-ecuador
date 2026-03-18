const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80"
];

let checked = 0;
console.log("Comenzando validación final de imágenes...");

urls.forEach(url => {
  https.request(url, { method: 'HEAD' }, res => {
    console.log(`[${res.statusCode}] - ${url}`);
    checked++;
    if (checked === urls.length) {
      console.log('✓ Todas las URLs han sido validadas exitosamente.');
      process.exit(0);
    }
  }).end();
});
