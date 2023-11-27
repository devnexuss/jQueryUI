
$(document).ready(function() {
    // Draggable
    $('#draggable').draggable({
        containment: '#draggable-container',
        scroll: false
    });

    // Droppable
    $('#draggable2').draggable({
        containment: '#droppable-container',
        scroll: false
    });
    $('#droppable').droppable({
        drop: function(event, ui) {
            $(this)
            .addClass("ui-state-highlight")
            .find("p")
             .html("Dropped!");
        }
    });

    // Resizable
    $('#resizable').resizable({
        containment: '#resizable-container'
    });

    // Selectable
    $('#selectable').selectable({
        containment: '#selectable-container'
    });

    // Accordion
    $('#accordion').accordion({
        containment: '#accordion-container',
        heightStyle: "content",
        collapsible: true,
        active: false
    });

    // Autocomplete
    var availableTags = [
        "Apple",
        "Banana",
        "Cherry",
        "Grape",
        "Kiwi",
        "Lemon",
        "Mango",
        "Orange",
        "Peach",
        "Pear",
        "Strawberry",
        "Watermelon"
    ];
    $('#tags').autocomplete({
        containment: '#autocomplete-container',
        source: availableTags
    });

    // Datepicker
    $('#datepicker').datepicker({
    });

    // Slider
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    
    // Show & Hide with Effects
    $.fn.showWithEffect = function() {
        $(this).show(1000, "swing");
    };

    $.fn.hideWithEffect = function() {
        $(this).hide(1000, "swing"); 
    };

    $('#showButton').on('click', function() {
        $('#myElement').showWithEffect();
    });

    $('#hideButton').on('click', function() {
        $('#myElement').hideWithEffect();
    });

    // Explode Effect
    function explodeElement() {
        $("#explode").effect("explode", {
            pieces: 16,  
            easing: "easeOutQuad",  
            duration: 1000  
        }, 1000);  
    }
    $("#explodeButton").on("click", function() {
        explodeElement();
    });

    // Fade In & Fade Out Effects
    $("#fadeInButton").on("click", function() {
        $("#fadeElement").fadeIn(1000); 
    });

    $("#fadeOutButton").on("click", function() {
        $("#fadeElement").fadeOut(1000); 
    });

    // Color Animation Effect
    $("#animateColorButton").on("click", function() {
        $("#colorElement").animate({
            backgroundColor: "#756464" 
        }, 1000);
    });
});

