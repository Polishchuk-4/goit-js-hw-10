import{f as m}from"./assets/vendor-2b44ac2e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let u;const c=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),i={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){if(u=o[0].getTime(),u-Date.now()<0){alert("Please choose a date in the future");return}c.disabled=!1,c.classList.add("button-active")}};m("#datetime-picker",y);c.addEventListener("click",o=>{c.classList.remove("button-active"),h()});function h(){d.disabled=!0,c.disabled=!0;const o=setInterval(()=>{const{days:r,hours:a,minutes:n,seconds:e}=p(u-Date.now());i.days.textContent=r,i.hours.textContent=a,i.minutes.textContent=n,i.seconds.textContent=e,u<Date.now()&&(d.disabled=!1,clearInterval(o))},1e3)}function p(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),l=Math.floor(o%864e5%36e5/6e4),f=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:l,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map
