import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbSUbo7J.js";const l=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]");r.disabled=!0;let o;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(h.error({title:"Error",message:"Please choose a date in the future."}),r.disabled=!0,o=null):(o=e,r.disabled=!1,console.log("User selected date:",o))}};r.addEventListener("click",()=>{o&&(S(o),r.disabled=!0,l.disabled=!0)});function S(t){const e=setInterval(()=>{const n=t-new Date;if(n<=0){clearInterval(e),i(0,0,0,0);return}const{days:u,hours:s,minutes:d,seconds:c}=p(n);i(u,s,d,c)},1e3)}f(l,y);function p(t){const s=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:c,seconds:m}}const g=document.querySelector("[data-days]"),w=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");function i(t,e,a,n){g.textContent=String(t).padStart(2,"0"),w.textContent=String(e).padStart(2,"0"),b.textContent=String(a).padStart(2,"0"),q.textContent=String(n).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map