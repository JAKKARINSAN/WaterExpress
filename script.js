const locations = [
  {id:1,group:'D05',code:'D05101',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเน€เธกเธทเธญเธเธชเธเธฅเธเธเธฃ',short:'เธเธเธช.เธชเธ. (L)',address:'376 เธ–เธเธเน€เธฅเธตเนเธขเธเน€เธกเธทเธญเธ เธก.13 เธ•.เธเธฒเธ•เธธเน€เธเธดเธเธเธธเธก เธญ.เน€เธกเธทเธญเธเธชเธเธฅเธเธเธฃ เธ.เธชเธเธฅเธเธเธฃ 47000',phone:'0-4297-2192',lat:17.14525,lng:104.1099,confidence:'เธชเธนเธ'},
  {id:2,group:'D05',code:'D05102',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเธธเธชเธธเธกเธฒเธฅเธขเน',short:'เธเธเธช.เธเธชเธก. (XS)',address:'545 เธก.1 เธ•.เธเธธเธชเธธเธกเธฒเธฅเธขเน เธญ.เธเธธเธชเธธเธกเธฒเธฅเธขเน เธ.เธชเธเธฅเธเธเธฃ 47210',phone:'0-4276-9049',lat:17.33453,lng:104.32742,confidence:'เธ•เนเธณ'},
  {id:3,group:'D05',code:'D05103',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเนเธเธเธจเธฃเธตเธชเธธเธเธฃเธฃเธ“',short:'เธเธเธช.เธเธจเธช. (XS)',address:'242 เธก.2 เธ•.เธ•เธญเธเนเธเธ เธญ.เนเธเธเธจเธฃเธตเธชเธธเธเธฃเธฃเธ“ เธ.เธชเธเธฅเธเธเธฃ 47280',phone:'0-4276-6306',lat:17.046,lng:104.2765,confidence:'เธเธฅเธฒเธ'},
  {id:4,group:'D05',code:'D05106',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธ เธนเธเธฒเธ',short:'เธเธเธช.เธ เธ. (XS)',address:'166 เธ–เธเธเธ–เธตเธเธฒเธเธเธ—เน เธก.6 เธ•.เนเธเธเธ เธน เธญ.เธ เธนเธเธฒเธ เธ.เธชเธเธฅเธเธเธฃ 47180',phone:'0-4270-8169',lat:16.9922,lng:103.9611,confidence:'เธเธฅเธฒเธ'},
  {id:5,group:'D05',code:'D05109',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเน€เธ•เนเธฒเธเธญเธข',short:'เธเธเธช.เธ•เธเธข. (XS)',address:'39/1 เธก.6 เธ•.เน€เธ•เนเธฒเธเธญเธข เธญ.เน€เธ•เนเธฒเธเธญเธข เธ.เธชเธเธฅเธเธเธฃ 47260',phone:'0-4276-1038',lat:16.9942,lng:104.1753,confidence:'เธเธฅเธฒเธ'},
  {id:6,group:'D05',code:'D05111',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเนเธเธเธเธฒเนเธเนเธง',short:'เธเธเธช.เธเธเธ. (XS)',address:'59/1 เธก.9 เธ•.เธเธฒเธ•เธเธงเธฑเธ’เธเธฒ เธญ.เนเธเธเธเธฒเนเธเนเธง เธ.เธชเธเธฅเธเธเธฃ 47230',phone:'0-4270-7094',lat:17.2307125,lng:104.281859375,confidence:'เธเธฅเธฒเธ'},
  {id:7,group:'D05',code:'D05201',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธญเธฒเธเธฒเธจเธญเธณเธเธงเธข',short:'เธเธเธช.เธญเธญ. (S)',address:'261 เธก.17 เธ•.เธญเธฒเธเธฒเธจ เธญ.เธญเธฒเธเธฒเธจเธญเธณเธเธงเธข เธ.เธชเธเธฅเธเธเธฃ 47170',phone:'0-4279-9239',lat:17.58386,lng:103.97775,confidence:'เธชเธนเธ'},
  {id:8,group:'D05',code:'D05301',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเธฃเธฃเธ“เธฒเธเธดเธเธก',short:'เธเธเธช.เธเธ“. (S)',address:'201 เธก.8 เธ•.เธเธฃเธฃเธ“เธฒ เธญ.เธเธฃเธฃเธ“เธฒเธเธดเธเธก เธ.เธชเธเธฅเธเธเธฃ 47130',phone:'0-4277-9147',lat:17.36631236,lng:103.8258764,confidence:'เธชเธนเธ'},
  {id:9,group:'D05',code:'D05302',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเธธเธ”เธเธฒเธ',short:'เธเธเธช.เธเธเธ. (XS)',address:'52 เธก.1 เธ•.เธเธธเธ”เธเธฒเธ เธญ.เธเธธเธ”เธเธฒเธ เธ.เธชเธเธฅเธเธเธฃ 47180',phone:'0-4278-4029',lat:17.08303466,lng:103.81731706,confidence:'เธ•เนเธณ'},
  {id:10,group:'D10',code:'D10101',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเธฑเธเนเธเธ',short:'เธเธเธช.เธเธเธ. (M)',address:'620 เธ–เธเธเธเธฑเธเนเธเธ-เธงเธฒเธฃเธดเธเธ เธนเธกเธด เธก.1 เธ•.เธเธฑเธเนเธเธ เธญ.เธเธฑเธเนเธเธ เธ.เธชเธเธฅเธเธเธฃ 47160',phone:'0-4277-1001',lat:17.38885,lng:103.72139,confidence:'เธเธฅเธฒเธ'},
  {id:11,group:'D10',code:'D10102',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธงเธฒเธฃเธดเธเธ เธนเธกเธด',short:'เธเธเธช.เธงเธ . (XS)',address:'เธ–เธเธเธเธ”เธธเธเธงเธฒเธฃเธตเธขเน เธก.1 เธ•.เธงเธฒเธฃเธดเธเธ เธนเธกเธด เธญ.เธงเธฒเธฃเธดเธเธ เธนเธกเธด เธ.เธชเธเธฅเธเธเธฃ 47150',phone:'0-4278-1553',lat:17.293,lng:103.6383,confidence:'เธเธฅเธฒเธ'},
  {id:12,group:'D10',code:'D10105',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเธดเธเธกเธเนเธณเธญเธนเธ',short:'เธเธเธช.เธเธเธ. (XS)',address:'5 เธ–เธเธเธงเธฒเธฃเธดเธ-เธเธธเธ”เธเธฒเธ เธก.7 เธ•.เธซเธเธญเธเธเธฅเธดเธ เธญ.เธเธดเธเธกเธเนเธณเธญเธนเธ เธ.เธชเธเธฅเธเธเธฃ 47270',phone:'0-4278-9085',lat:17.1836,lng:103.7513,confidence:'เธ•เนเธณ'},
  {id:13,group:'D10',code:'D10301',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธงเธฒเธเธฃเธเธดเธงเธฒเธช',short:'เธเธเธช.เธงเธง. (S)',address:'319 เธ–เธเธเธเธดเธฃเธฒเธจเธ—เธธเธเธเน เธก.4 เธ•.เธงเธฒเธเธฃเธเธดเธงเธฒเธช เธญ.เธงเธฒเธเธฃเธเธดเธงเธฒเธช เธ.เธชเธเธฅเธเธเธฃ 47120',phone:'0-4279-1173',lat:17.63242,lng:103.75167,confidence:'เธ•เนเธณ'},
  {id:14,group:'D10',code:'D10302',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเนเธฒเธเธกเนเธงเธ',short:'เธเธเธช.เธเธกเธ. (XS)',address:'168/1 เธก.2 เธ•.เธเนเธฒเธเธกเนเธงเธ เธญ.เธเนเธฒเธเธกเนเธงเธ เธ.เธชเธเธฅเธเธเธฃ 47160',phone:'0-4279-4182',lat:17.8529875,lng:103.571703125,confidence:'เธชเธนเธ'},
  {id:15,group:'D10',code:'D10303',name:'เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒเธเธณเธ•เธฒเธเธฅเนเธฒ',short:'เธเธเธช.เธเธ•เธ. (XS)',address:'เธก.11 เธ•.เธเธณเธ•เธฒเธเธฅเนเธฒ เธญ.เธเธณเธ•เธฒเธเธฅเนเธฒ เธ.เธชเธเธฅเธเธเธฃ 47250',phone:'0-4279-6126',lat:17.85231,lng:103.75689,confidence:'เธ•เนเธณ'}
];

const state={selected:new Set(),group:'ALL',query:'',route:null};
const CACHE_VERSION='pea-route-v1';
let routeCache={};try{routeCache=JSON.parse(localStorage.getItem(CACHE_VERSION)||'{}')}catch{localStorage.removeItem(CACHE_VERSION)}
function saveCache(){try{localStorage.setItem(CACHE_VERSION,JSON.stringify(routeCache))}catch(e){console.warn('Route cache is full',e)}}
const $=s=>document.querySelector(s);
const list=$('#location-list'), startSelect=$('#start-point'), calcBtn=$('#calculate');
let map, markers=[], routeLayer;

function initMap(){
  if(typeof L==='undefined'){ document.querySelector('.map-note span').textContent='เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธซเธฅเธ”เนเธเธเธ—เธตเนเนเธ”เน ยท เธขเธฑเธเนเธเนเธฃเธฒเธขเธเธฒเธฃเนเธฅเธฐเธเธณเธเธงเธ“เธชเธณเธฃเธญเธเนเธ”เน'; return; }
  map=L.map('map',{zoomControl:false}).setView([17.36,103.95],9);
  L.control.zoom({position:'bottomright'}).addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'ยฉ OpenStreetMap contributors'}).addTo(map);
  drawMarkers();
}
function icon(loc,routeNo){const cls=routeNo?'route':(state.selected.has(loc.id)?'':'dim');return L.divIcon({className:'',html:`<div class="marker-pin ${cls}"><span>${routeNo||loc.id}</span></div>`,iconSize:[26,26],iconAnchor:[13,26]});}
function drawMarkers(route=[]){if(!map)return;markers.forEach(m=>m.remove());markers=[];locations.forEach(loc=>{const no=route.findIndex(x=>x.id===loc.id);const m=L.marker([loc.lat,loc.lng],{icon:icon(loc,no>=0?no+1:null)}).addTo(map).bindPopup(`<b>${loc.name}</b><br>${loc.code} ยท ${loc.group}<br><small>${loc.address}</small>`);m.on('click',()=>{if(!route.length)toggle(loc.id)});markers.push(m)});}
function visible(){const q=state.query.toLowerCase();return locations.filter(x=>(state.group==='ALL'||x.group===state.group)&&(`${x.name} ${x.short} ${x.code} ${x.address}`.toLowerCase().includes(q)));}
function render(){
  list.innerHTML=visible().map(x=>`<label class="location ${state.selected.has(x.id)?'selected':''}"><input type="checkbox" data-id="${x.id}" ${state.selected.has(x.id)?'checked':''}><div><h3>${x.name.replace('เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒ','')}</h3><p><span class="confidence ${x.confidence}"></span>${x.code} ยท ${x.short} ยท เธเธงเธฒเธกเธกเธฑเนเธเนเธ${x.confidence}</p></div><span class="group-tag ${x.group}">${x.group}</span></label>`).join('')||'<div class="empty-state"><p>เนเธกเนเธเธเธชเธณเธเธฑเธเธเธฒเธเธ—เธตเนเธเนเธเธซเธฒ</p></div>';
  const selected=locations.filter(x=>state.selected.has(x.id));const old=startSelect.value;
  startSelect.innerHTML=selected.length?selected.map(x=>`<option value="${x.id}">${x.name.replace('เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒ','')}</option>`).join(''):'<option>เน€เธฅเธทเธญเธเธเธธเธ”เธชเนเธเธเนเธญเธ</option>';
  if(selected.some(x=>String(x.id)===old))startSelect.value=old;
  calcBtn.disabled=selected.length<2;drawMarkers(state.route?.order||[]);
}
function toggle(id){state.selected.has(id)?state.selected.delete(id):state.selected.add(id);clearRoute();render()}
list.addEventListener('change',e=>{if(e.target.dataset.id)toggle(Number(e.target.dataset.id))});
$('#search').addEventListener('input',e=>{state.query=e.target.value;render()});
document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.chip.active').classList.remove('active');b.classList.add('active');state.group=b.dataset.group;render()}));
$('#select-visible').onclick=()=>{visible().forEach(x=>state.selected.add(x.id));clearRoute();render()};
$('#select-all').onclick=()=>{locations.forEach(x=>state.selected.add(x.id));clearRoute();render()};
$('#clear-all').onclick=()=>{state.selected.clear();clearRoute();render()};

const haversine=(a,b)=>{const R=6371,toRad=x=>x*Math.PI/180,dLat=toRad(b.lat-a.lat),dLon=toRad(b.lng-a.lng);const h=Math.sin(dLat/2)**2+Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(h))};
function exactTsp(points,roundTrip){
  const n=points.length, size=1<<n, dp=Array.from({length:size},()=>new Float64Array(n).fill(Infinity)),parent=Array.from({length:size},()=>new Int16Array(n).fill(-1));dp[1][0]=0;
  for(let mask=1;mask<size;mask++){if(!(mask&1))continue;for(let j=0;j<n;j++){if(!(mask&(1<<j))||!isFinite(dp[mask][j]))continue;for(let k=1;k<n;k++){if(mask&(1<<k))continue;const nm=mask|(1<<k),v=dp[mask][j]+haversine(points[j],points[k]);if(v<dp[nm][k]){dp[nm][k]=v;parent[nm][k]=j}}}}
  const full=size-1;let end=1,best=Infinity;for(let j=1;j<n;j++){const v=dp[full][j]+(roundTrip?haversine(points[j],points[0]):0);if(v<best){best=v;end=j}}
  let order=[],mask=full,cur=end;while(cur>=0){order.push(cur);const p=parent[mask][cur];mask^=1<<cur;cur=p}order.reverse();if(roundTrip)order.push(0);return{order:order.map(i=>points[i]),distance:best,legs:order.slice(1).map((i,k)=>haversine(points[order[k]],points[i]))};
}
function matrixTsp(points,matrix,roundTrip){
  const n=points.length,size=1<<n,dp=Array.from({length:size},()=>new Float64Array(n).fill(Infinity)),parent=Array.from({length:size},()=>new Int16Array(n).fill(-1));dp[1][0]=0;
  for(let mask=1;mask<size;mask++){if(!(mask&1))continue;for(let j=0;j<n;j++){if(!(mask&(1<<j))||!isFinite(dp[mask][j]))continue;for(let k=1;k<n;k++){if(mask&(1<<k))continue;const nm=mask|(1<<k),v=dp[mask][j]+matrix[j][k];if(v<dp[nm][k]){dp[nm][k]=v;parent[nm][k]=j}}}}
  const full=size-1;let end=1,best=Infinity;for(let j=1;j<n;j++){const v=dp[full][j]+(roundTrip?matrix[j][0]:0);if(v<best){best=v;end=j}}
  let indices=[],mask=full,cur=end;while(cur>=0){indices.push(cur);const p=parent[mask][cur];mask^=1<<cur;cur=p}indices.reverse();if(roundTrip)indices.push(0);
  return{indices,order:indices.map(i=>points[i]),distance:best/1000,legs:indices.slice(1).map((i,k)=>matrix[indices[k]][i]/1000)};
}
async function fetchLeg(a,b){
  const key=`${a.id}>${b.id}`,cached=routeCache[key];if(cached)return cached;
  const url=`https://router.project-osrm.org/route/v1/driving/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson&steps=false`;
  const res=await fetch(url);if(!res.ok)throw Error('route service');const data=await res.json(),route=data.routes?.[0];if(!route)throw Error('route not found');
  const leg={distance:route.distance,geometry:route.geometry.coordinates.map(([lng,lat])=>[lat,lng]),savedAt:Date.now()};routeCache[key]=leg;saveCache();return leg;
}
async function roadTrip(points,roundTrip){
  const matrixKey=`matrix:${points.map(x=>x.id).join(',')}`,coords=points.map(x=>`${x.lng},${x.lat}`).join(';');let cached=routeCache[matrixKey],matrix=cached?.distances;
  if(!matrix){const res=await fetch(`https://router.project-osrm.org/table/v1/driving/${coords}?annotations=distance`);if(!res.ok)throw Error('table service');const data=await res.json();if(data.code!=='Ok'||!data.distances?.every(row=>row.every(Number.isFinite)))throw Error('distance matrix not found');matrix=data.distances;routeCache[matrixKey]={distances:matrix,savedAt:Date.now()};saveCache()}
  const result=matrixTsp(points,matrix,roundTrip),geometry=[];
  for(let i=1;i<result.order.length;i++){const leg=await fetchLeg(result.order[i-1],result.order[i]);if(i===1)geometry.push(...leg.geometry);else geometry.push(...leg.geometry.slice(1));result.legs[i-1]=leg.distance/1000}
  result.distance=result.legs.reduce((sum,x)=>sum+x,0);result.geometry=geometry;result.mode=`เธฃเธฐเธขเธฐเธ—เธฒเธเธ–เธเธเธ—เธธเธเธเธนเน ยท Exact TSP ยท เธเธฑเธเธ—เธถเธเธ•เธฒเธฃเธฒเธ ${points.length*(points.length-1)} เธเธนเนเธ—เธดเธจเธ—เธฒเธเนเธฅเธฐเธเนเธงเธเธ—เธตเนเนเธเนเธเธฒเธเนเธฅเนเธง`;
  return result;
}
calcBtn.onclick=async()=>{
  const startId=Number(startSelect.value), chosen=locations.filter(x=>state.selected.has(x.id)), start=chosen.find(x=>x.id===startId)||chosen[0], points=[start,...chosen.filter(x=>x.id!==start.id)],round=$('#round-trip').checked;$('#loading').hidden=false;calcBtn.disabled=true;
  let result;try{result=await roadTrip(points,round)}catch{result=exactTsp(points,round);result.mode='เธฃเธฐเธขเธฐเน€เธชเนเธเธ•เธฃเธเนเธ”เธขเธเธฃเธฐเธกเธฒเธ“ ยท เนเธซเธกเธ”เธชเธณเธฃเธญเธ (เธเธฃเธดเธเธฒเธฃเน€เธชเนเธเธ—เธฒเธเธ–เธเธเนเธกเนเธเธฃเนเธญเธกเนเธเนเธเธฒเธ)'}
  state.route=result;showResult();$('#loading').hidden=true;calcBtn.disabled=false;
};
function showResult(){const r=state.route;$('#empty-state').hidden=true;$('#route-result').hidden=false;$('#total-distance').textContent=`${r.distance.toLocaleString('th-TH',{maximumFractionDigits:1})} เธเธก.`;$('#total-stops').textContent=`${state.selected.size} เธเธธเธ”`;$('#route-mode').textContent=r.mode;
  $('#route-list').innerHTML=r.order.map((x,i)=>`<li class="route-stop"><span class="stop-no">${i===r.order.length-1&&x.id===r.order[0].id?'โฉ':i+1}</span><div class="stop-info"><h3>${x.name.replace('เธเธฒเธฃเนเธเธเนเธฒเธชเนเธงเธเธ เธนเธกเธดเธ เธฒเธเธชเธฒเธเธฒ','')}</h3><p>${x.code} ยท ${x.phone}</p>${i?`<p class="leg-distance">เธเธฒเธเธเธธเธ”เธเนเธญเธเธซเธเนเธฒ ${r.legs[i-1].toFixed(1)} เธเธก.</p>`:'<p class="leg-distance">เธเธธเธ”เน€เธฃเธดเนเธกเธ•เนเธ</p>'}</div></li>`).join('');
  if(map){if(routeLayer)routeLayer.remove();const coords=r.geometry||r.order.map(x=>[x.lat,x.lng]);routeLayer=L.polyline(coords,{color:'#1f6b4f',weight:5,opacity:.85}).addTo(map);map.fitBounds(routeLayer.getBounds(),{padding:[45,45]});drawMarkers(r.order)}
}
function clearRoute(){state.route=null;$('#empty-state').hidden=false;$('#route-result').hidden=true;if(routeLayer){routeLayer.remove();routeLayer=null}}
$('#reset-route').onclick=()=>{clearRoute();drawMarkers()};
$('#print-route').onclick=()=>window.print();
$('#open-google').onclick=()=>{if(!state.route)return;const order=state.route.order,origin=order[0],dest=order.at(-1),waypoints=order.slice(1,-1).map(x=>`${x.lat},${x.lng}`).join('|');const url=`https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${dest.lat},${dest.lng}&travelmode=driving${waypoints?`&waypoints=${encodeURIComponent(waypoints)}`:''}`;window.open(url,'_blank','noopener')};

initMap();render();

