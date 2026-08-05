/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useRef, useState } from "react"
import referenceHtml from "../ui.html?raw"
import chatLogo from "../assets/chat.png"
import "./HomePage.css"

void React

export default function HomePage({ onReferenceStart }) {
  const frameRef = useRef(null)
  const [frameHeight, setFrameHeight] = useState(1200)
  const source = useMemo(() => {
    const bridge = `<script>(function(){
      function h(){parent.postMessage({source:'perfectchat-reference-ui',type:'height',height:Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)},'*')}
      function updateLiveNumbers(){
        var fiveMinuteSlot=Math.floor(Date.now()/300000);
        var seed=Math.abs(Math.sin(fiveMinuteSlot*12.9898)*43758.5453)%1;
        var online=1800+Math.floor(seed*2700);
        var now=new Date();
        var slotOfDay=Math.floor((now.getHours()*60+now.getMinutes())/5);
        var matches=1200+(slotOfDay*85)+Math.floor(seed*60);
        document.querySelectorAll('[data-online-count]').forEach(function(el){el.textContent=online.toLocaleString('en-US')});
        var counters=document.querySelectorAll('[data-counter]');
        if(counters[0]) counters[0].textContent=matches.toLocaleString('en-US');
        if(counters[1]) counters[1].textContent='95+';
        if(counters[2]) counters[2].textContent=(2+Math.floor(seed*3))+' sec';
        if(counters[3]) counters[3].textContent='99.9%';
      }
      document.addEventListener('click',function(event){
        var link=event.target.closest('a[href^="#"]');
        if(!link) return;
        var targetId=link.getAttribute('href').slice(1);
        if(!targetId) return;
        var target=document.getElementById(targetId);
        if(!target) return;
        event.preventDefault();
        parent.postMessage({source:'perfectchat-reference-ui',type:'scroll-to',top:target.getBoundingClientRect().top},'*');
      });
      addEventListener('load',function(){
        h();updateLiveNumbers();
        document.addEventListener('click',function(event){
          var link=event.target.closest('a[href^="#"]');
          if(!link)return;
          var target=document.querySelector(link.getAttribute('href'));
          if(!target)return;
          event.preventDefault();
          parent.postMessage({source:'perfectchat-reference-ui',type:'scroll-to',top:target.offsetTop},'*');
        });
      });
      addEventListener('resize',h);
      new ResizeObserver(h).observe(document.documentElement);
      setInterval(updateLiveNumbers,300000);
      setTimeout(function(){h();updateLiveNumbers()},100);
      setTimeout(h,1000);
    })();</script>`
    return referenceHtml
      .replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>', "")
      .replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>', "")
      .replace(/<span class="w-9 h-9 rounded-xl grad[\s\S]*?<\/span>/, `<img src="${chatLogo}" alt="PerfectChat logo" style="width:42px;height:42px;object-fit:contain">`)
      .replace(/<span class="w-8 h-8 rounded-lg grad[\s\S]*?<\/span>/, `<img src="${chatLogo}" alt="PerfectChat logo" style="width:36px;height:36px;object-fit:contain">`)
      .replace("startMatching(name, currentMode);", "parent.postMessage({source:'perfectchat-reference-ui',type:'start-chat',name:name,mode:currentMode},'*');")
      .replace("</body>", bridge + "</body>")
  }, [])

  useEffect(() => {
    const receive = (event) => {
      if (event.source !== frameRef.current?.contentWindow || event.data?.source !== "perfectchat-reference-ui") return
      if (event.data.type === "height" && Number.isFinite(event.data.height)) setFrameHeight(Math.max(800, event.data.height))
      if (event.data.type === "scroll-to" && Number.isFinite(event.data.top)) {
        window.scrollTo({ top: Math.max(0, frameRef.current.offsetTop + event.data.top - 72), behavior: "smooth" })
      }
      if (event.data.type === "start-chat") onReferenceStart(event.data.name, event.data.mode)
      if (event.data.type === "scroll-to" && Number.isFinite(event.data.top)) {
        const frameTop = frameRef.current.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: Math.max(0, frameTop + event.data.top - 72), behavior: "smooth" })
      }
    }
    window.addEventListener("message", receive)
    return () => window.removeEventListener("message", receive)
  }, [onReferenceStart])

  return <iframe ref={frameRef} className="reference-ui-frame" title="PerfectChat" srcDoc={source} style={{ height: `${frameHeight}px` }} />
}
