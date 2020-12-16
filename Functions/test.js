/**
 * åŸºäºŽjqueryçš„æ‚¬æµ®æç¤ºæ’ä»¶
 *
 * @author AfterWin
 * @mail CJ_Zheng1023@hotmail.com
 *
 *  example:jQuery(selector).jqTip({
 *      title:"",            æ ‡é¢˜
 *      content:"",          å†…å®¹
 *      width:"",            å†…å®¹åŒºåŸŸå®½åº¦
 *      height:""            å†…å®¹åŒºåŸŸé«˜åº¦
 *  })
 *
 *
 *  update log
 *
 *
 *  v1.0.0         åŸºæœ¬åŠŸèƒ½å®Œæˆ
 *
 *
 *
 */



(function(jQuery){

    var settings={
        title:"title",               //æ ‡é¢˜
        content:"content",          //å†…å®¹
        width:200,                    //å†…å®¹åŒºåŸŸå®½åº¦
        height:100                   //å†…å®¹åŒºåŸŸé«˜åº¦
    }


    /**
     *æ‰©å±•jqueryåŽŸåž‹
     *
     * @param options    é…ç½®å‚æ•°
     * @author AfterWin
     * @mail CJ_Zheng1023@hotmail.com
     */
    jQuery.fn.jqTip=function(options){
        var target=jQuery(this);
        options= jQuery.extend(true,settings,options||settings);
        var tipDialog=jQuery("<div></div>").addClass("jq-tip-dialog");
        var title=jQuery("<h1>"+options.title+"</h1>");
        var content=jQuery("<div></div>").html(options.content).addClass("jq-tip-content");
        var contentArea=jQuery("<div></div>").width(options.width).height(options.height).append(content);
        var wrapper=jQuery("<div></div>").addClass("wrapper").append(contentArea);
        tipDialog.append(title).append(wrapper);
        jQuery("body").append(tipDialog);
        target.bind({
            mousemove:function(e){
                tipDialog.css({
                    left: e.pageX+15,
                    top: e.pageY+15,
                    display:"block"
                })
            },
            mouseleave:function(){
                tipDialog.css("display","none");
            }
        })



    }






})(jQuery);
