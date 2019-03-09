var canvasSize = 50,
    strokeWidth = 3,
    strokeColor = '#001f88',
    centre = canvasSize / 2,
    radius = Math.floor((canvasSize - strokeWidth) / 2), 
    svgElm = '#svg',
    s = Snap(svgElm),
    path = "",
    arc = s.path(path),    
    startY = centre-radius,
    runBtn = $('.run'),
    percDiv = $('.percent'),
    input = $('input');

function change()
{
  $(svgElm).attr('class', '');
  arc.remove();
  setTimeout(function()
  {
    run(input.val()/100);
  }, 500);
}
input.keyup(function()
{
  change();
});
runBtn.click(function()
{
  change();
});

function run(percent)
{
   
    setTimeout(function()
    {
      $(svgElm).attr('class', 'show-circle');
    }, 100);
    
    setTimeout(function()
    {
      runSvgAnimation(percent);
    }, 500);
}
function runSvgAnimation(percent)
{
  var endpoint = percent*360;
  Snap.animate(0, endpoint, function (val){
    arc.remove(); 

    var d = val,
        dr = d-90;
        radians = Math.PI*(dr)/180,
        endx = centre + radius*Math.cos(radians),
        endy = centre + radius * Math.sin(radians),
        largeArc = d>180 ? 1 : 0;  
        path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

    arc = s.path(path);
    arc.attr({
      stroke: strokeColor,
      fill: 'none',
      strokeWidth: strokeWidth
    });
    percDiv.text(Math.round(val/360*100) +'%');

  }, 2000, mina.easeinout);  
}

run(input.val()/100);
