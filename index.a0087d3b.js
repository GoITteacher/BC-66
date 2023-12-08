const e=e=>new Promise((o,l)=>{setTimeout(o,e)});setTimeout(()=>console.log("1"),1e3),e(1e3).then(e=>console.log("2")),setTimeout(()=>console.log("3"),100),e(2e3).then(e=>console.log("4")),setTimeout(()=>console.log("5"),2e3),e(1e3).then(e=>console.log("6")),setTimeout(()=>console.log("7"),1e3),e(5e3).then(e=>console.log("8"));
//# sourceMappingURL=index.a0087d3b.js.map
