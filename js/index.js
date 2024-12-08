$(document).ready(function () {
    var log = 0


    // mouseover
    $(document).on('mousemove', function (e) {
        let mov1 = e.clientX - $(window).innerWidth() / 2
        let mov2 = e.clientY - $(window).innerHeight() / 2
        $('.move_img2').css('transform', "translate(" + mov1 * -0.011 + "%," + mov2 * -0.011 + "%)")
        $('.move_img1').css('transform', "translate(" + mov1 * 0.01 + "%," + mov2 * 0.01 + "%)")
    })

    // scroll
    $(document).on('scroll', function () {
        // progression
        let val1 = $(document).height() - $(window).innerHeight()
        let val2 = $(window).scrollTop()
        // console.log("val", (val2 / val1) * 100)

        $('.progression').css('width', (val2 / val1) * 100 + "%")

        if (window.innerWidth > 992) {

            // navbar
            if (scrollY > 0) {
                $('.navbar').addClass('fillbg')
                $('.navbar-brand').addClass('color_g')
                $('.nav-link').addClass('color_g')
            }
            else {
                $('.navbar').removeClass('fillbg')
                $('.navbar-brand').removeClass('color_g')
                $('.nav-link').removeClass('color_g')
            }

            // horizontal
            var height = $('#sec2').innerHeight() - $(window).innerHeight()
            var xx = $(window).scrollTop() - $("#sec2").offset().top
            var value = xx / height
            if (value > 0 && value < 1) {

                if ($(window).innerWidth() > 992) {
                    $('#sec2').addClass('fx')
                    $('#sec2').removeClass('b0')
                }
            }
            if (value > 1) {
                if ($(window).innerWidth() > 992) {
                    $('#sec2').removeClass('fx')
                    $('#sec2').addClass('b0')
                }
            }



            // 如果沒有設以下 會變成視差
            //
            if (value < 0) {
                $('#sec2').removeClass('fx')
            }
            //

            // console.log(value)
            if ($(window).innerWidth() > 992) {
                setTransformX(value)
            }
        }

        // $('.count').each(function (e) {
        //     $(this).prop('Counter', 100)
        //         .animate({ Counter: $(this).text() }, {
        //             duration: 3000,
        //             easing: 'swing',
        //             step: function (now) {
        //                 $(this).text(Math.ceil(now))
        //             }
        //         })
        //     console.log($(this).text())
        // })
    })

    // count
    const countHeight = $('#sec3').offset().top - $(window).innerHeight() * 0.75;

    const countHandler = function () {
        if ($(window).scrollTop() >= countHeight) {
            $(window).unbind('scroll', countHandler); // 取消事件，確保只會跑一次
            count();
        }
    }
    $(window).bind('scroll', countHandler); // 註冊事件

    function setTransformX(val) {
        if (val < 0) {
            val = 0
        }
        if (val > 1) {
            val = 1
        }
        var height2 = $('#sec2').innerHeight() - $(window).innerWidth()
        // console.log("height2",height2)
        $('.horizontal_absolute').css('transform', "translateX(" + val * height2 * -1 + "px)")
        $('.horizontal_bg').css('transform', "translateX(" + val * height2 * -1 + "px)")
    }


    AOS.init({
        duration: 1000,
    })
    var name = ["allen", "bllen"]
    var password = ["0000", '1111']
})
