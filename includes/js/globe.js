
$( document ).ready( function() {

    var entries = [
        { label: 'HTML', url: 'javascript:void(0);', target: '' },
        {label:'CSS',url:'javascript:void(0);',target: ''},
        {label:'BOOTSTRAP',url:'javascript:void(0);',target: ''},
        {label:'JQUERY',url:'javascript:void(0);',target: ''},
        {label:'SCSS',url:'javascript:void(0);',target: ''},
        {label:'JAVASCRIPT',url:'javascript:void(0);',target: ''},
        {label:'REACT',url:'javascript:void(0);',target: ''},
        {label:'ADOBE XD',url:'javascript:void(0);',target: ''},
        {label:'PHP',url:'javascript:void(0);',target: ''},
        {label:'PHOTOSHOP',url:'javascript:void(0);',target: ''},
        {label:'SQL',url:'javascript:void(0);',target: ''},
        {label:'GitHub',url:'javascript:void(0);',target: ''},
            ];

            var settings = {

                entries: entries,
                width: 480,
                height: 480,
                radius: '65%',
                radiusMin: 25,
                bgDraw: true,
                bgColor: 'rgba(0, 0, 0, 0.25)',
                opacityOver: 1,
                opacityOut: 0.05,
                opacitySpeed: 8,
                fov: 900,
                speed: 1,
                // fontFamily: 'Black Ops One',
                fontSize: '20',
                // fontColor: '#15E587',
                fontColor: 'rgba(238, 238, 238, 0.726)',
                fontWeight: 'normal',//bold
                fontStyle: 'normal',//italic 
                fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: true,
                // tooltipFontFamily: 'Black Ops One',
                tooltipFontSize: '11',
                tooltipFontColor: '#fff',
                tooltipFontWeight: 'normal',//bold
                tooltipFontStyle: 'normal',//italic 
                tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                tooltipFontToUpperCase: false,
                tooltipTextAnchor: 'left',
                tooltipDiffX: 2,
                tooltipDiffY: 15

            };

            //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
            $( '#globe' ).svg3DTagCloud( settings );

		} );