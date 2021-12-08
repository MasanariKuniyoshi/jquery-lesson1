$(function() {
    $('dl').click(function(){
        // aタグの取得
        var $a = $(this).find('a');
        // showクラスの取得
        var $show = $(this).parent().find('.show');

        if ($a.hasClass('show')){
            // 表示されているddタグを隠す
            $a.parent().next().hide();
            // showクラスの取り外しと背景色を元の色に
            $('.show').css('background-color','transparent');
            $a.removeClass('show');
        }else{
            // 表示されているddタグを隠す
            $show.parent().next().hide();
            // showクラスの取り外しと背景色を元の色に
            $('.show').css('background-color','transparent');
            $show.removeClass('show');
            // 関連するddタグの表示
            $a.parent().next().slideDown();
            // aタグにshowクラスの付与と表示背景色を白に
            $a.addClass('show');
            $('.show').css('background-color', 'white');
        }
    })
});