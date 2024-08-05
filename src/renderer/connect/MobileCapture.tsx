import { Card } from '@douyinfe/semi-ui';
import React, { useState } from 'react';
import './Capture.css'

export default function MobileCapture({ tabKey }) {
  const [shadingWidth, setShadingWidth] = useState(0)
  const [shadingHeight, setShadingHeight] = useState(0)
  const [shadingLeft, setShadingLeft] = useState(0)
  const [shadingTop, setShadingTop] = useState(0)
  const canvasId = 'mobile-capture-canvas'
  const captureRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const [cardWidth, setCardWidth] = useState(0);
  let canvas = null;
  let ctx = null;
  let scale = 1;
  console.log('tabKey:', tabKey);
  console.log('captureRef.current:', captureRef.current);

  React.useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    canvas.onmousemove = handleMousemove
    loadImage()
  })

  React.useLayoutEffect(() => {
    console.log('captureRef.current.offsetWidth:', captureRef.current.offsetWidth);
    setCardWidth(captureRef.current.offsetWidth)
  }, [tabKey]);


  function handleMousemove(event) {
    if ('getBoundingClientRect' in canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = parseInt(String((event.clientX - rect.left) / rect.width * canvas.width))
      const y = parseInt(String((event.clientY - rect.top) / rect.height * canvas.height))
      console.log('点击手机屏幕:' + x + ',' + y)

      // 获取node节点

      // 绘制边框
      drawShadingBorder(x, y, 50, 20)
    }
  }

  function drawShadingBorder(x, y, width, height) {
    console.log('>>> drawShadingBorder now:', new Date().toTimeString());
    setShadingLeft(x)
    setShadingTop(y)
    setShadingWidth(width)
    setShadingHeight(height)
  }

  function loadImage() {
    console.log('loadImage...');
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous') // 解决浏览器阻止跨域操作canvas
    image.src = 'file:///Users/qzl/code/lizhi/ui_inspector/assets/android.png'
    image.onload = () => {

      console.log('cardWidth = ', cardWidth, 'imageWidth = ', image.width);
      scale = cardWidth / image.width

      canvas.width = parseInt(String(image.width * scale))
      canvas.height = parseInt(String(image.height * scale))

      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height)
    }
  }

  return(
    <Card bordered={false}>
      <div ref={captureRef} width="100%" height="100%">
        <div className="capture-shading" style={{ width: shadingWidth + 'px', height:shadingHeight + 'px', left:shadingLeft + 'px', top:shadingTop + 'px' }}/>
        <canvas id={ canvasId } ref={canvasRef} width="100%" height="100%" />
      </div>
    </Card>
  )
}
