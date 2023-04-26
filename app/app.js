$(document).ready(() => {
    function disableButtons(){
        $(":button").attr("disabled", "disabled")
    }
    function enableButtons(){
        $(":button").removeAttr("disabled")
    }
    //code for main carousel
    $("#rightArrow").on('click',() =>{
        disableButtons();
        $(".carouselMainActive").animate({
        right: "+=940"
        }, 700, () => {
        $(".carouselMainActive").removeClass("carouselMainActive").addClass("carouselMainWaiting").css("right", "0px")
        $(".carouselMainPassive").removeClass("carouselMainPassive").prependTo(".mainCarouselWrapper").hide().show(700).addClass("carouselMainActive")
        $(".carouselMainWaiting").removeClass("carouselMainWaiting").addClass("carouselMainPassive")
        setTimeout(()=>{
            enableButtons();
        },600)
    })
    })
    $("#leftArrow").on('click',() =>{
        disableButtons();
        $(".carouselMainActive").animate({
        left: "+=940"
        }, 700, () => {
        $(".carouselMainActive").removeClass("carouselMainActive").addClass("carouselMainWaiting").css("left", "0px")
        $(".carouselMainPassive").removeClass("carouselMainPassive").prependTo(".mainCarouselWrapper").hide().show(700).addClass("carouselMainActive")
        $(".carouselMainWaiting").removeClass("carouselMainWaiting").addClass("carouselMainPassive")
        setTimeout(()=>{
            enableButtons();
        },600)
    })
    })

    //code for medium carousel
    $("#newsCarouselButtonLeft").on("click", () => {
        disableButtons();
        $(".currentElementsPassive").toggle()
        $(".currentElementsActive").animate({
            left: "+=620px"
        },500, () => {
            $(".currentElementsActive").removeClass("currentElementsActive").addClass("currentElementsWaiting").toggle().toggle(1000).css("left","0px")
            $(".currentElementsPassive").toggle(300).addClass("currentElementsActive").removeClass("currentElementsPassive")
            $(".currentElementsWaiting").removeClass("currentElementsWaiting").addClass("currentElementsPassive").prependTo("carouselElementsM")
            setTimeout(()=>{
                enableButtons();
        },600)
        })
    })
    $("#newsCarouselButtonRight").on("click", () => {
        disableButtons();
        $(".currentElementsPassive").toggle()
        $(".currentElementsActive").animate({
            left: "-=620px"
        },500, () => {
            $(".currentElementsActive").removeClass("currentElementsActive").addClass("currentElementsWaiting").toggle().toggle(1000).css("left","0px")
            $(".currentElementsPassive").toggle(300).addClass("currentElementsActive").removeClass("currentElementsPassive")
            $(".currentElementsWaiting").removeClass("currentElementsWaiting").addClass("currentElementsPassive").prependTo("carouselElementsM")
            setTimeout(()=>{
                enableButtons();
        },600)
        })
    })

    //code for small carousel editorials
    $("#editorialsButtonLeft").on("click", () => {
        disableButtons();
        $(".passiveElementEditorials").toggle()
        $(".activeElementEditorials").animate({
            left: "+=700px"
        },300, () => {
            $(".activeElementEditorials").removeClass("activeElementEditorials").addClass("waitingElementEditorials").toggle().toggle(1000).css("left","0px")
            $(".passiveElementEditorials").toggle(300).addClass("activeElementEditorials").removeClass("passiveElementEditorials")
            $(".waitingElementEditorials").removeClass("waitingElementEditorials").addClass("passiveElementEditorials").prependTo("carouselElementsS")
            setTimeout(()=>{
                enableButtons();
        },600)
        })
    })
    $("#editorialsButtonRight").on("click", () => {
        disableButtons();
        $(".passiveElementEditorials").toggle()
        $(".activeElementEditorials").animate({
            left: "-=700px"
        },300, () => {
            $(".activeElementEditorials").removeClass("activeElementEditorials").addClass("waitingElementEditorials").toggle().toggle(1000).css("left","0px")
            $(".passiveElementEditorials").toggle(300).addClass("activeElementEditorials").removeClass("passiveElementEditorials")
            $(".waitingElementEditorials").removeClass("waitingElementEditorials").addClass("passiveElementEditorials").prependTo("carouselElementsS")
            setTimeout(()=>{
                enableButtons();
        },600)
        })
    })
    //code for small carousel local news
    $("#localNewsButtonLeft").on("click", () => {
        disableButtons();
        $(".passiveElementLocalNews").toggle()
        $(".activeElementLocalNews").animate({
            left: "+=700px"
        },300, () => {
            $(".activeElementLocalNews").removeClass("activeElementLocalNews").addClass("waitingElementLocalNews").toggle().toggle(1000).css("left","0px")
            $(".passiveElementLocalNews").toggle(300).addClass("activeElementLocalNews").removeClass("passiveElementLocalNews")
            $(".waitingElementLocalNews").removeClass("waitingElementLocalNews").addClass("passiveElementLocalNews").prependTo("localNews")
            setTimeout(()=>{
                enableButtons();
        },600)
        })
    })
    $("#localNewsButtonRight").on("click", () => {
        disableButtons();
        $(".passiveElementLocalNews").toggle()
        $(".activeElementLocalNews").animate({
            left: "-=700px"
        },300, () => {
            $(".activeElementLocalNews").removeClass("activeElementLocalNews").addClass("waitingElementLocalNews").toggle().toggle(1000).css("left","0px")
            $(".passiveElementLocalNews").toggle(300).addClass("activeElementLocalNews").removeClass("passiveElementLocalNews")
            $(".waitingElementLocalNews").removeClass("waitingElementLocalNews").addClass("passiveElementLocalNews").prependTo("localNews")
            setTimeout(()=>{
                enableButtons();
        },600)
        })
    })
    //code for large carousel
    $("#x-button").on("click", () => {

        $(".imageActivated").toggle()
        $(".imageInFocus").appendTo(".imageCarousel")
        $("#x-button").hide()
    })
    $("#carouselShow").on("click", () => {
        $(".imageInFocus").appendTo(".imageActivated")
        $(".imageActivated").fadeIn()
        $("#x-button").show()
    })

    $("#imageCarouselButtonLeft").on("click", () => {
        disableButtons();
        $(".galleryElement").first().appendTo("#imagesGallery");
        $(".imageInFocus").replaceWith($(".galleryElement").first().clone().removeClass("galleryElement").addClass("imageInFocus"))
            setTimeout(() => {
            enableButtons()
        },300)
    })
    $("#imageCarouselButtonRight").on("click", () => {
        disableButtons();
        $(".imageInFocus").replaceWith($(".galleryElement").last().clone().removeClass("galleryElement").addClass("imageInFocus"))
        $(".galleryElement").last().prependTo("#imagesGallery")
            setTimeout(() => {
            enableButtons()
        },300)
    })
    $(".galleryElement").on("click", function () {
        $(this).addClass("slidedTo")
        $(".slidedTo ~ div").prependTo("#imagesGallery")
        $(this).prependTo("#imagesGallery")
        $(".imageInFocus").replaceWith($(".galleryElement").first().clone().removeClass("galleryElement").addClass("imageInFocus"))
    })
  });