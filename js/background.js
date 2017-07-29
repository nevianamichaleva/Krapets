window.onload = function () {

    function changeImage() {
        var BackgroundImg = [
            "./img/krapets-beach-13.jpg",
            "./img/makove.jpg",
            "./img/gallery/courtyard/img_15.jpg",
            "./img/lg54.jpg",
            "./img/gallery/beach/lg77.jpg",
            "./img/gallery/house4/lg79.jpg",
            "./img/gallery/house6/img_12.jpg",
            "./img/gallery/kitchen/img_20.jpg",
            "./img/gallery/kitchen/img_41.jpg",
            "./img/gallery/beach/lg67.jpg",
            "./img/gallery/courtyard/img_16.jpg",
            "./img/gallery/courtyard/lg14.jpg",
        ];
        var i = Math.floor((Math.random() * 12));

        $('#intro')
                .animate({opacity: 0}, 'slow', function () {
                    $(this)
                            .css({'background-image': 'url(' + BackgroundImg[i] + ')'})
                            .animate({opacity: 1}, 'fast')
                });

    }
    window.setInterval(changeImage, 5000);
}


