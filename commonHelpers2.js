import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const r=document.querySelector("form");let t;r.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector('input[name="state"]:checked').value;t=document.querySelector('input[name="delay"]'),new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(t.value):l(t.value)},+t.value)}).then(e=>{o.success({message:`Fulfilled promise in ${e}ms`,position:"topRight",close:!1,progressBar:!1,timeout:2e3}),console.log(e)}).catch(e=>{o.error({message:`Rejected promise in ${e}ms`,position:"topRight",close:!1,progressBar:!1,timeout:2e3}),console.log(e)})});
//# sourceMappingURL=commonHelpers2.js.map