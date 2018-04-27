function getStyle(obj,name)
{
  if(obj.currentStyle)
  {
    return obj.currentStyle[name];
  }
  else
  {
    return getComputedStyle(obj,false)[name];
  }
}

function startMove(obj,attr,iTarget)
{
    //  obj.timer = null;
      clearInterval(obj.timer);
      obj.timer = setInterval(function(){
      var cur = parseInt(getStyle(obj,attr));

      var speed = (iTarget - cur)/5;

      speed = speed>0?Math.ceil(speed):Math.floor(speed);
      if(iTarget == cur)
      {
        clearInterval(obj.timer);
      }
      else
      {
        obj.style[attr] = cur + speed + 'px';
      }
    },10)
}
