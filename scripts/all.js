var btns=document.querySelectorAll(".item-btn"),cartItemCount=0,totalPriceNum=0,totalPriceEl=document.querySelector(".total-number"),confirmButton=document.querySelector(".confirm-btn"),orderConfirmation=document.querySelector(".order-confirmation"),startNewOrder=document.querySelector(".start-new-order"),TotalPriceConfirm=document.querySelector(".total-price-confirm");function updateTotalPrice(e){totalPriceNum+=e,totalPriceEl.textContent="$".concat(totalPriceNum.toFixed(2)),TotalPriceConfirm.textContent=totalPriceEl.textContent}function emptyCart(){totalPriceNum=cartItemCount=0,totalPriceEl.textContent="$".concat(totalPriceNum.toFixed(2)),document.querySelector(".cart-box .order-confirm").classList.add("hidden"),document.querySelector(".cart-box .cart-img").classList.remove("hidden"),document.querySelector(".cart-box .cart-word").classList.remove("hidden"),document.querySelector(".cart-box .selected-items-box").classList.add("hidden"),document.querySelector(".cart-box .selected-items-box").innerHTML="",btns.forEach(function(e){var t=e.querySelector("#btn-img"),r=e.querySelector("#btn-text"),n=e.querySelector("#counter-decrease"),c=e.querySelector("#counter-increase"),o=e.querySelector("#counter"),i=e.parentElement.querySelector(".item-box-img");t.classList.remove("hidden"),r.classList.remove("hidden"),n.classList.add("hidden"),c.classList.add("hidden"),o.classList.add("hidden"),e.classList.remove("counter-mode"),i.classList.remove("border-img"),e.replaceWith(e.cloneNode(!0))}),(btns=document.querySelectorAll(".item-btn")).forEach(initializeButton)}function initializeButton(x){var S,b=0,C=!1,f=0;x.addEventListener("click",function(){var e,t,r,n,c,o,i,a,d,s,l,m,u,L,h,p,y,v,q;C||(e=function(e){e.stopPropagation(),b++,d.innerHTML=b,S&&(S.querySelector(".item-number").textContent=b,S.querySelector(".price-all").textContent="$".concat(b*f),updateTotalPrice(f))},t=function(e){e.stopPropagation(),1<b?(b--,d.innerHTML=b,S&&(S.querySelector(".item-number").textContent=b,S.querySelector(".price-all").textContent="$".concat(b*f),updateTotalPrice(-f))):(b=0,d.innerHTML=b,updateTotalPrice(-f),r(),S.remove(),cartItemCount--,n())},r=function(){c.classList.remove("hidden"),o.classList.remove("hidden"),i.classList.add("hidden"),a.classList.add("hidden"),d.classList.add("hidden"),x.classList.remove("counter-mode"),s.classList.remove("border-img"),a.removeEventListener("click",e),i.removeEventListener("click",t),C=!1},n=function(){0===cartItemCount&&(L.classList.add("hidden"),m.classList.remove("hidden"),u.classList.remove("hidden"),l.classList.add("hidden"))},c=this.querySelector("#btn-img"),o=this.querySelector("#btn-text"),i=this.querySelector("#counter-decrease"),a=this.querySelector("#counter-increase"),d=this.querySelector("#counter"),s=this.parentElement.querySelector(".item-box-img"),l=document.querySelector(".cart-box .selected-items-box"),m=document.querySelector(".cart-box .cart-img"),u=document.querySelector(".cart-box .cart-word"),L=document.querySelector(".cart-box .order-confirm"),0===cartItemCount&&(m.classList.add("hidden"),u.classList.add("hidden"),l.classList.remove("hidden"),L.classList.remove("hidden")),c.classList.add("hidden"),o.classList.add("hidden"),i.classList.remove("hidden"),a.classList.remove("hidden"),d.classList.remove("hidden"),this.classList.add("counter-mode"),b=1,d.innerHTML=b,s.classList.add("border-img"),updateTotalPrice(f=parseFloat(this.parentElement.querySelector(".price").textContent.replace("$",""))),(S=document.createElement("div")).className="selected-item",(h=document.createElement("div")).className="info",(q=document.createElement("span")).className="name",q.textContent=this.parentElement.querySelector(".name").textContent,(p=document.createElement("span")).className="item-number",p.textContent=b,(y=document.createElement("span")).className="price",y.textContent="@".concat(f),(v=document.createElement("span")).className="price-all",v.textContent="$".concat(b*f),h.append(q,p,y,v),(q=document.createElement("span")).className="x-icon",q.textContent="X",q.addEventListener("click",function(){updateTotalPrice(-b*f),S.remove(),r(),cartItemCount--,n()}),S.appendChild(h),S.appendChild(q),l.append(S),cartItemCount++,a.addEventListener("click",e),i.addEventListener("click",t),C=!0)})}confirmButton.addEventListener("click",function(){orderConfirmation.classList.toggle("hidden")}),startNewOrder.addEventListener("click",function(){orderConfirmation.classList.toggle("hidden"),emptyCart()}),btns.forEach(initializeButton);
//# sourceMappingURL=all.js.map
