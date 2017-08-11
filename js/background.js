window.onload = function () {

    function changeImage() {
        var BackgroundImg = [
            "./img/gallery/intro/1.jpg",
            "./img/gallery/intro/2.jpg",
            "./img/gallery/intro/3.jpg",
            "./img/gallery/intro/4.jpg",
            "./img/gallery/intro/5.jpg",
            "./img/gallery/intro/6.jpg",
            "./img/gallery/intro/7.jpg",
            "./img/gallery/intro/8.jpg",
            "./img/gallery/intro/9.jpg",
            "./img/gallery/intro/10.jpg",
            "./img/gallery/intro/11.jpg",
            "./img/gallery/intro/12.jpg",
            "./img/gallery/intro/13.jpg",
            "./img/gallery/intro/14.jpg",
            "./img/gallery/intro/15.jpg",
            "./img/gallery/intro/16.jpg",
            "./img/gallery/intro/17.jpg",
            "./img/gallery/intro/18.jpg",
            "./img/gallery/intro/19.jpg",
            "./img/gallery/intro/20.jpg"
        ];
        var i = Math.floor(Math.random() * 20);

        var img = $("#intro").css('background-image');
        var str = img.indexOf("img");
        var str1 = img.substr(str);
        var curr = str1.indexOf('"');
        var currImg = str1.slice(0, curr);
        var introHeight = $("#intro").css('height');
       
        $('.myIntro').css('height', introHeight);

        $('.myIntro').css({'background-image': 'url(./' + currImg + ')'})

        $("#intro").animate({opacity: 0}, 2000, function () {

            $(this).css({'background-image': 'url(' + BackgroundImg[i] + ')'})
                    .animate({opacity: 1}, {duration: 3000});
        });

    }
    window.setInterval(changeImage, 5000);
}


