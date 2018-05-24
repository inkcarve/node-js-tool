const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
 
imagemin(['./image/not-min/*.jpg'], './image/min/', {use: [imageminMozjpeg({
    quality:'90',
    progressive: true
})]}).then(() => {
    console.log('Images optimized');
});

// imagemin(['./data/mobile/image/not-min/*.jpg'],'./data/mobile/image/', {use: [imageminMozjpeg({
//     quality:'90',
//     progressive: true
// })]}).then(() => {
//     console.log('Images optimized');
// });

