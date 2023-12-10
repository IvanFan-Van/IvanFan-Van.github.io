var lu=Object.defineProperty,cu=(e,t,i)=>t in e?lu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Xr=(e,t,i)=>(cu(e,"symbol"!=typeof t?t+"":t,i),i);const hu=function(){var e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(e=>{for(const t of e)if("childList"===t.type)for(const i of t.addedNodes)"LINK"===i.tagName&&"modulepreload"===i.rel&&r(i)}).observe(document,{childList:!0,subtree:!0})}function r(e){var t,i;e.ep||(e.ep=!0,i={},(t=e).integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?i.credentials="include":"anonymous"===t.crossorigin?i.credentials="omit":i.credentials="same-origin",fetch(e.href,i))}},to=(hu(),"141"),mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uu=0,Io=1,du=2,Cc=1,Lc=2,_s=3,ki=0,qt=1,cn=2,fu=1,Un=0,zi=1,Sr=2,Fo=3,No=4,pu=5,Di=100,mu=101,gu=102,zo=103,Oo=104,vu=200,_u=201,xu=202,yu=203,Rc=204,Pc=205,Mu=206,wu=207,bu=208,Su=209,Tu=210,Eu=0,Au=1,Cu=2,Fa=3,Lu=4,Ru=5,Pu=6,Du=7,zr=0,Iu=1,Fu=2,$t=0,Dc=1,Ic=2,Fc=3,Nc=4,Nu=5,zc=300,Ui=301,Bi=302,Tr=303,Na=304,Or=306,hn=1e3,gt=1001,Er=1002,ft=1003,za=1004,Oa=1005,$e=1006,Oc=1007,li=1008,oi=1009,zu=1010,Ou=1011,kc=1012,ku=1013,ii=1014,Ft=1015,Mn=1016,Uu=1017,Bu=1018,Oi=1020,Vu=1021,Gu=1022,Nt=1023,Hu=1024,Wu=1025,ri=1026,Vi=1027,Uc=1028,ju=1029,Xu=1030,qu=1031,$u=1033,qr=33776,$r=33777,Yr=33778,Kr=33779,ko=35840,Uo=35841,Bo=35842,Vo=35843,Yu=36196,Go=37492,Ho=37496,Wo=37808,jo=37809,Xo=37810,qo=37811,$o=37812,Yo=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,Es=2300,Gi=2301,Zr=2302,rl=2400,al=2401,ol=2402,Ku=2500,Zu=2501,Ju=1,Bc=2,Vn=3e3,Pe=3001,Qu=3200,ed=3201,ci=0,td=1,yn="srgb",si="srgb-linear",Jr=7680,nd=519,ka=35044,Tn="300 es",Ua=1035;class hi{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});var i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){var i;return void 0!==this._listeners&&void 0!==(i=this._listeners)[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){var i;void 0!==this._listeners&&void 0!==(e=this._listeners[e])&&-1!==(i=e.indexOf(t))&&e.splice(i,1)}dispatchEvent(i){if(void 0!==this._listeners){var e=this._listeners[i.type];if(void 0!==e){i.target=this;var r=e.slice(0);for(let e=0,t=r.length;e<t;e++)r[e].call(this,i);i.target=null}}}}const dt=[];for(let e=0;e<256;e++)dt[e]=(e<16?"0":"")+e.toString(16);let ll=1234567;const ys=Math.PI/180,As=180/Math.PI;function Yt(){var e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(dt[255&e]+dt[e>>8&255]+dt[e>>16&255]+dt[e>>24&255]+"-"+dt[255&t]+dt[t>>8&255]+"-"+dt[t>>16&15|64]+dt[t>>24&255]+"-"+dt[63&i|128]+dt[i>>8&255]+"-"+dt[i>>16&255]+dt[i>>24&255]+dt[255&r]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]).toLowerCase()}function at(e,t,i){return Math.max(t,Math.min(i,e))}function no(e,t){return(e%t+t)%t}function id(e,t,i,r,n){return r+(e-t)*(n-r)/(i-t)}function sd(e,t,i){return e!==t?(i-e)/(t-e):0}function Ms(e,t,i){return(1-i)*e+i*t}function rd(e,t,i,r){return Ms(e,t,1-Math.exp(-i*r))}function ad(e,t=1){return t-Math.abs(no(e,2*t)-t)}function od(e,t,i){return e<=t?0:i<=e?1:(e=(e-t)/(i-t))*e*(3-2*e)}function ld(e,t,i){return e<=t?0:i<=e?1:(e=(e-t)/(i-t))*e*e*(e*(6*e-15)+10)}function cd(e,t){return e+Math.floor(Math.random()*(t-e+1))}function hd(e,t){return e+Math.random()*(t-e)}function ud(e){return e*(.5-Math.random())}function dd(e){void 0!==e&&(ll=e);e=ll+=1831565813,e=Math.imul(e^e>>>15,1|e);return(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296}function fd(e){return e*ys}function pd(e){return e*As}function Ba(e){return 0==(e&e-1)&&0!==e}function Vc(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Ar(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function md(e,t,i,r,n){var a=Math.cos,s=Math.sin,o=a(i/2),l=s(i/2),h=a((t+r)/2),c=s((t+r)/2),u=a((t-r)/2),d=s((t-r)/2),p=a((r-t)/2),m=s((r-t)/2);switch(n){case"XYX":e.set(o*c,l*u,l*d,o*h);break;case"YZY":e.set(l*d,o*c,l*u,o*h);break;case"ZXZ":e.set(l*u,l*d,o*c,o*h);break;case"XZX":e.set(o*c,l*m,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*m,o*h);break;case"ZYZ":e.set(l*m,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gd(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function vd(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw new Error("Invalid component type.")}}var jt=Object.freeze({__proto__:null,DEG2RAD:ys,RAD2DEG:As,generateUUID:Yt,clamp:at,euclideanModulo:no,mapLinear:id,inverseLerp:sd,lerp:Ms,damp:rd,pingpong:ad,smoothstep:od,smootherstep:ld,randInt:cd,randFloat:hd,randFloatSpread:ud,seededRandom:dd,degToRad:fd,radToDeg:pd,isPowerOfTwo:Ba,ceilPowerOfTwo:Vc,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:md,normalize:vd,denormalize:gd});class ve{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return void 0!==t?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return void 0!==t?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){var t=this.x,i=this.y,e=e.elements;return this.x=e[0]*t+e[3]*i+e[6],this.y=e[1]*t+e[4]*i+e[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){var i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){var t=this.x-e.x,e=this.y-e.y;return t*t+e*e}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return void 0!==i&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){var i=Math.cos(t),t=Math.sin(t),r=this.x-e.x,n=this.y-e.y;return this.x=r*i-n*t+e.x,this.y=r*t+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,a,s,o,l){var h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=n,h[5]=o,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){var t=this.elements,e=e.elements;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){e=e.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){var e=e.elements,t=t.elements,i=this.elements,r=e[0],n=e[3],a=e[6],s=e[1],o=e[4],l=e[7],h=e[2],c=e[5],e=e[8],u=t[0],d=t[3],p=t[6],m=t[1],f=t[4],g=t[7],v=t[2],x=t[5],t=t[8];return i[0]=r*u+n*m+a*v,i[3]=r*d+n*f+a*x,i[6]=r*p+n*g+a*t,i[1]=s*u+o*m+l*v,i[4]=s*d+o*f+l*x,i[7]=s*p+o*g+l*t,i[2]=h*u+c*m+e*v,i[5]=h*d+c*f+e*x,i[8]=h*p+c*g+e*t,this}multiplyScalar(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){var e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],e=e[8];return t*a*e-t*s*l-i*n*e+i*s*o+r*n*l-r*a*o}invert(){var e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],h=e[8],c=h*a-s*l,u=s*o-h*n,d=l*n-a*o,p=t*c+i*u+r*d;return 0==p?this.set(0,0,0,0,0,0,0,0,0):(e[0]=c*(c=1/p),e[1]=(r*l-h*i)*c,e[2]=(s*i-r*a)*c,e[3]=u*c,e[4]=(h*t-r*o)*c,e[5]=(r*n-s*t)*c,e[6]=d*c,e[7]=(i*o-l*t)*c,e[8]=(a*t-i*n)*c,this)}transpose(){var e=this.elements,t=e[1];return e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,a,s){var o=Math.cos(n),n=Math.sin(n);return this.set(i*o,i*n,-i*(o*a+n*s)+a+e,-r*n,r*o,-r*(-n*a+o*s)+s+t,0,0,1),this}scale(e,t){var i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){var t=Math.cos(e),e=Math.sin(e),i=this.elements,r=i[0],n=i[3],a=i[6],s=i[1],o=i[4],l=i[7];return i[0]=t*r+e*s,i[3]=t*n+e*o,i[6]=t*a+e*l,i[1]=-e*r+t*s,i[4]=-e*n+t*o,i[7]=-e*a+t*l,this}translate(e,t){var i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){var t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}fromArray(t,i=0){for(let e=0;e<9;e++)this.elements[e]=t[e+i];return this}toArray(e=[],t=0){var i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return(new this.constructor).fromArray(this.elements)}}function Gc(t){for(let e=t.length-1;0<=e;--e)if(65535<t[e])return!0;return!1}function Cs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ai(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function vr(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}const Qr={[yn]:{[si]:ai},[si]:{[yn]:vr}},Ut={legacyMode:!0,get workingColorSpace(){return si},set workingColorSpace(e){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,i){if(this.legacyMode||t===i||!t||!i)return e;if(Qr[t]&&void 0!==Qr[t][i])return t=Qr[t][i],e.r=t(e.r),e.g=t(e.g),e.b=t(e.b),e;throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Bt={h:0,s:0,l:0},js={h:0,s:0,l:0};function ea(e,t,i){return i<0&&(i+=1),1<i&&--i,i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+6*(t-e)*(2/3-i):e}function Xs(e,t){return t.r=e.r,t.g=e.g,t.b=e.b,t}class de{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===t&&void 0===i?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=si){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=si){return e=no(e,1),t=at(t,0,1),i=at(i,0,1),0===t?this.r=this.g=this.b=i:(this.r=ea(t=2*i-(i=i<=.5?i*(1+t):i+t-i*t),i,e+1/3),this.g=ea(t,i,e),this.b=ea(t,i,e-1/3)),Ut.toWorkingColorSpace(this,r),this}setStyle(t,i=yn){function r(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}if(h=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let e;var n,a,s,o=h[1],l=h[2];switch(o){case"rgb":case"rgba":if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,Ut.toWorkingColorSpace(this,i),r(e[4]),this;if(e=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,Ut.toWorkingColorSpace(this,i),r(e[4]),this;break;case"hsl":case"hsla":if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n=parseFloat(e[1])/360,a=parseInt(e[2],10)/100,s=parseInt(e[3],10)/100,r(e[4]),this.setHSL(n,a,s,i)}}else if(h=/^\#([A-Fa-f\d]+)$/.exec(t)){var o=h[1],h=o.length;if(3===h)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Ut.toWorkingColorSpace(this,i),this;if(6===h)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Ut.toWorkingColorSpace(this,i),this}return t&&0<t.length?this.setColorName(t,i):this}setColorName(e,t=yn){var i=Hc[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ut.fromWorkingColorSpace(Xs(this,rt),e),at(255*rt.r,0,255)<<16^at(255*rt.g,0,255)<<8^at(255*rt.b,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=si){Ut.fromWorkingColorSpace(Xs(this,rt),t);var i=rt.r,r=rt.g,n=rt.b,t=Math.max(i,r,n),a=Math.min(i,r,n);let s,o;var l=(a+t)/2;if(a===t)s=0,o=0;else{var h=t-a;switch(o=l<=.5?h/(t+a):h/(2-t-a),t){case i:s=(r-n)/h+(r<n?6:0);break;case r:s=(n-i)/h+2;break;case n:s=(i-r)/h+4}s/=6}return e.h=s,e.s=o,e.l=l,e}getRGB(e,t=si){return Ut.fromWorkingColorSpace(Xs(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=yn){return Ut.fromWorkingColorSpace(Xs(this,rt),e),e!==yn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${255*rt.r|0},${255*rt.g|0},${255*rt.b|0})`}offsetHSL(e,t,i){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=i,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(js);var e=Ms(Bt.h,js.h,t),i=Ms(Bt.s,js.s,t),t=Ms(Bt.l,js.l,t);return this.setHSL(e,i,t),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),!0===e.normalized&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}de.NAMES=Hc;let vi;class Wc{static getDataURL(e){if(/^data:/i.test(e.src)||"undefined"==typeof HTMLCanvasElement)return e.src;let t;var i;return 2048<(t=e instanceof HTMLCanvasElement?e:((vi=void 0===vi?Cs("canvas"):vi).width=e.width,vi.height=e.height,i=vi.getContext("2d"),e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),vi)).width||2048<t.height?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){var t=Cs("canvas"),i=(t.width=e.width,t.height=e.height,t.getContext("2d")),r=(i.drawImage(e,0,0,e.width,e.height),i.getImageData(0,0,e.width,e.height)),n=r.data;for(let e=0;e<n.length;e++)n[e]=255*ai(n[e]/255);return i.putImageData(r,0,0),t}if(e.data){var a=e.data.slice(0);for(let e=0;e<a.length;e++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[e]=Math.floor(255*ai(a[e]/255)):a[e]=ai(a[e]);return{data:a,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jc{constructor(e=null){this.isSource=!0,this.uuid=Yt(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){var t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];var r={uuid:this.uuid,url:""},n=this.data;if(null!==n){let i;if(Array.isArray(n)){i=[];for(let e=0,t=n.length;e<t;e++)n[e].isDataTexture?i.push(ta(n[e].image)):i.push(ta(n[e]))}else i=ta(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function ta(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?Wc.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class nt extends hi{constructor(e=nt.DEFAULT_IMAGE,t=nt.DEFAULT_MAPPING,i=gt,r=gt,n=$e,a=li,s=Nt,o=oi,l=1,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Yt(),this.name="",this.source=new jc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=o,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){var t,i=void 0===e||"string"==typeof e;return i||void 0===e.textures[this.uuid]?(t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment},"{}"!==JSON.stringify(this.userData)&&(t.userData=this.userData),i||(e.textures[this.uuid]=t),t):e.textures[this.uuid]}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping===zc){if(e.applyMatrix3(this.matrix),e.x<0||1<e.x)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case gt:e.x=e.x<0?0:1;break;case Er:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||1<e.y)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case gt:e.y=e.y<0?0:1;break;case Er:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}this.flipY&&(e.y=1-e.y)}return e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}}nt.DEFAULT_IMAGE=null,nt.DEFAULT_MAPPING=zc;class Ue{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e,t){return void 0!==t?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return void 0!==t?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){var t=this.x,i=this.y,r=this.z,n=this.w,e=e.elements;return this.x=e[0]*t+e[4]*i+e[8]*r+e[12]*n,this.y=e[1]*t+e[5]*i+e[9]*r+e[13]*n,this.z=e[2]*t+e[6]*i+e[10]*r+e[14]*n,this.w=e[3]*t+e[7]*i+e[11]*r+e[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(t){let e,i,r,n;var a,s,o,l,h,c,t=t.elements,u=t[0],d=t[4],p=t[8],m=t[1],f=t[5],g=t[9],v=t[2],x=t[6],t=t[10];if(Math.abs(d-m)<.01&&Math.abs(p-v)<.01&&Math.abs(g-x)<.01)Math.abs(d+m)<.1&&Math.abs(p+v)<.1&&Math.abs(g+x)<.1&&Math.abs(u+f+t-3)<.1?this.set(1,0,0,0):(e=Math.PI,o=(t+1)/2,l=(d+m)/4,h=(p+v)/4,c=(g+x)/4,(s=(f+1)/2)<(a=(u+1)/2)&&o<a?n=a<.01?(i=0,r=.707106781):(i=Math.sqrt(a),r=l/i,h/i):o<s?n=s<.01?(i=.707106781,r=0,.707106781):(r=Math.sqrt(s),i=l/r,c/r):o<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(o),i=h/n,r=c/n),this.set(i,r,n,e));else{let e=Math.sqrt((x-g)*(x-g)+(p-v)*(p-v)+(m-d)*(m-d));Math.abs(e)<.001&&(e=1),this.x=(x-g)/e,this.y=(p-v)/e,this.z=(m-d)/e,this.w=Math.acos((u+f+t-1)/2)}return this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){var i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return void 0!==i&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kt extends hi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);e={width:e,height:t,depth:1};this.texture=new nt(e,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:$e,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;var t=Object.assign({},e.texture.image);return this.texture.source=new jc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xc extends nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xd extends nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,n,a,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3];var i=n[a+0],r=n[a+1],u=n[a+2],n=n[a+3];if(0===s)e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;else if(1===s)e[t+0]=i,e[t+1]=r,e[t+2]=u,e[t+3]=n;else{if(c!==n||o!==i||l!==r||h!==u){let e=1-s;var a=o*i+l*r+h*u+c*n,d=0<=a?1:-1,p=1-a*a,a=(p>Number.EPSILON&&(p=Math.sqrt(p),a=Math.atan2(p,a*d),e=Math.sin(e*a)/p,s=Math.sin(s*a)/p),s*d);o=o*e+i*a,l=l*e+r*a,h=h*e+u*a,c=c*e+n*a,e===1-s&&(p=1/Math.sqrt(o*o+l*l+h*h+c*c),o*=p,l*=p,h*=p,c*=p)}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}}static multiplyQuaternionsFlat(e,t,i,r,n,a){var s=i[r],o=i[r+1],l=i[r+2],i=i[r+3],r=n[a],h=n[a+1],c=n[a+2],n=n[a+3];return e[t]=s*n+i*r+o*c-l*h,e[t+1]=o*n+i*h+l*r-s*c,e[t+2]=l*n+i*c+s*h-o*r,e[t+3]=i*n-s*r-o*h-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var i=e._x,r=e._y,n=e._z,a=e._order,e=Math.cos,s=Math.sin,o=e(i/2),l=e(r/2),h=e(n/2),c=s(i/2),u=s(r/2),d=s(n/2);switch(a){case"XYZ":this._x=c*l*h+o*u*d,this._y=o*u*h-c*l*d,this._z=o*l*d+c*u*h,this._w=o*l*h-c*u*d;break;case"YXZ":this._x=c*l*h+o*u*d,this._y=o*u*h-c*l*d,this._z=o*l*d-c*u*h,this._w=o*l*h+c*u*d;break;case"ZXY":this._x=c*l*h-o*u*d,this._y=o*u*h+c*l*d,this._z=o*l*d+c*u*h,this._w=o*l*h-c*u*d;break;case"ZYX":this._x=c*l*h-o*u*d,this._y=o*u*h+c*l*d,this._z=o*l*d-c*u*h,this._w=o*l*h+c*u*d;break;case"YZX":this._x=c*l*h+o*u*d,this._y=o*u*h+c*l*d,this._z=o*l*d-c*u*h,this._w=o*l*h-c*u*d;break;case"XZY":this._x=c*l*h-o*u*d,this._y=o*u*h-c*l*d,this._z=o*l*d+c*u*h,this._w=o*l*h+c*u*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){var t=t/2,i=Math.sin(t);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(e){var e=e.elements,t=e[0],i=e[4],r=e[8],n=e[1],a=e[5],s=e[9],o=e[2],l=e[6],e=e[10],h=t+a+e;return 0<h?(h=.5/Math.sqrt(h+1),this._w=.25/h,this._x=(l-s)*h,this._y=(r-o)*h,this._z=(n-i)*h):a<t&&e<t?(h=2*Math.sqrt(1+t-a-e),this._w=(l-s)/h,this._x=.25*h,this._y=(i+n)/h,this._z=(r+o)/h):e<a?(h=2*Math.sqrt(1+a-t-e),this._w=(r-o)/h,this._x=(i+n)/h,this._y=.25*h,this._z=(s+l)/h):(h=2*Math.sqrt(1+e-t-a),this._w=(n-i)/h,this._x=(r+o)/h,this._y=(s+l)/h,this._z=.25*h),this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){var i=this.angleTo(e);return 0!==i&&(t=Math.min(1,t/i),this.slerp(e,t)),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){var e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(this._x=this._x*(e=1/e),this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return void 0!==t?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){var i=e._x,r=e._y,n=e._z,e=e._w,a=t._x,s=t._y,o=t._z,t=t._w;return this._x=i*t+e*a+r*o-n*s,this._y=r*t+e*s+n*a-i*o,this._z=n*t+e*o+i*s-r*a,this._w=e*t-i*a-r*s-n*o,this._onChangeCallback(),this}slerp(t,i){if(0!==i){if(1===i)return this.copy(t);var r,n,a=this._x,s=this._y,o=this._z,l=this._w;let e=l*t._w+a*t._x+s*t._y+o*t._z;e<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,e=-e):this.copy(t),1<=e?(this._w=l,this._x=a,this._y=s,this._z=o):((t=1-e*e)<=Number.EPSILON?(this._w=(r=1-i)*l+i*this._w,this._x=r*a+i*this._x,this._y=r*s+i*this._y,this._z=r*o+i*this._z,this.normalize()):(r=Math.sqrt(t),t=Math.atan2(r,e),n=Math.sin((1-i)*t)/r,i=Math.sin(i*t)/r,this._w=l*n+this._w*i,this._x=a*n+this._x*i,this._y=s*n+this._y*i,this._z=o*n+this._z*i),this._onChangeCallback())}return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){var e=Math.random(),t=Math.sqrt(1-e),e=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),e*Math.sin(r),e*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return void 0!==t?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return void 0!==t?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return void 0!==t?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){var t=this.x,i=this.y,r=this.z,e=e.elements;return this.x=e[0]*t+e[3]*i+e[6]*r,this.y=e[1]*t+e[4]*i+e[7]*r,this.z=e[2]*t+e[5]*i+e[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){var t=this.x,i=this.y,r=this.z,e=e.elements,n=1/(e[3]*t+e[7]*i+e[11]*r+e[15]);return this.x=(e[0]*t+e[4]*i+e[8]*r+e[12])*n,this.y=(e[1]*t+e[5]*i+e[9]*r+e[13])*n,this.z=(e[2]*t+e[6]*i+e[10]*r+e[14])*n,this}applyQuaternion(e){var t=this.x,i=this.y,r=this.z,n=e.x,a=e.y,s=e.z,e=e.w,o=e*t+a*r-s*i,l=e*i+s*t-n*r,h=e*r+n*i-a*t,t=-n*t-a*i-s*r;return this.x=o*e+t*-n+l*-s-h*-a,this.y=l*e+t*-a+h*-n-o*-s,this.z=h*e+t*-s+o*-a-l*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){var t=this.x,i=this.y,r=this.z,e=e.elements;return this.x=e[0]*t+e[4]*i+e[8]*r,this.y=e[1]*t+e[5]*i+e[9]*r,this.z=e[2]*t+e[6]*i+e[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){var i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return void 0!==t?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){var i=e.x,r=e.y,e=e.z,n=t.x,a=t.y,t=t.z;return this.x=r*t-e*a,this.y=e*n-i*t,this.z=i*a-r*n,this}projectOnVector(e){var t=e.lengthSq();return 0===t?this.set(0,0,0):(t=e.dot(this)/t,this.copy(e).multiplyScalar(t))}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){var t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:(e=this.dot(e)/t,Math.acos(at(e,-1,1)))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){var t=this.x-e.x,i=this.y-e.y,e=this.z-e.z;return t*t+i*i+e*e}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){var r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){e=e.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(e){var t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),e=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=e,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return void 0!==i&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){var e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new P,cl=new Mt;class Ki{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(i){let r=1/0,n=1/0,a=1/0,s=-1/0,o=-1/0,l=-1/0;for(let e=0,t=i.length;e<t;e+=3){var h=i[e],c=i[e+1],u=i[e+2];h<r&&(r=h),c<n&&(n=c),u<a&&(a=u),h>s&&(s=h),c>o&&(o=c),u>l&&(l=u)}return this.min.set(r,n,a),this.max.set(s,o,l),this}setFromBufferAttribute(i){let r=1/0,n=1/0,a=1/0,s=-1/0,o=-1/0,l=-1/0;for(let e=0,t=i.count;e<t;e++){var h=i.getX(e),c=i.getY(e),u=i.getZ(e);h<r&&(r=h),c<n&&(n=c),u<a&&(a=u),h>s&&(s=h),c>o&&(o=c),u>l&&(l=u)}return this.min.set(r,n,a),this.max.set(s,o,l),this}setFromPoints(i){this.makeEmpty();for(let e=0,t=i.length;e<t;e++)this.expandByPoint(i[e]);return this}setFromCenterAndSize(e,t){t=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(t),this.max.copy(e).add(t),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(i,r=!1){i.updateWorldMatrix(!1,!1);var e=i.geometry;if(void 0!==e)if(r&&null!=e.attributes&&void 0!==e.attributes.position){var n=e.attributes.position;for(let e=0,t=n.count;e<t;e++)Kn.fromBufferAttribute(n,e).applyMatrix4(i.matrixWorld),this.expandByPoint(Kn)}else null===e.boundingBox&&e.computeBoundingBox(),ia.copy(e.boundingBox),ia.applyMatrix4(i.matrixWorld),this.union(ia);var a=i.children;for(let e=0,t=a.length;e<t;e++)this.expandByObject(a[e],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return i=0<e.normal.x?(t=e.normal.x*this.min.x,e.normal.x*this.max.x):(t=e.normal.x*this.max.x,e.normal.x*this.min.x),0<e.normal.y?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),0<e.normal.z?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),qs.subVectors(this.max,ds),_i.subVectors(e.a,ds),xi.subVectors(e.b,ds),yi.subVectors(e.c,ds),Rn.subVectors(xi,_i),Pn.subVectors(yi,xi),Zn.subVectors(_i,yi);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!(!sa(t,_i,xi,yi,qs)||!sa(t=[1,0,0,0,1,0,0,0,1],_i,xi,yi,qs))&&($s.crossVectors(Rn,Pn),sa(t=[$s.x,$s.y,$s.z],_i,xi,yi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Kn).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new P,new P,new P,new P,new P,new P,new P,new P],Kn=new P,ia=new Ki,_i=new P,xi=new P,yi=new P,Rn=new P,Pn=new P,Zn=new P,ds=new P,qs=new P,$s=new P,Jn=new P;function sa(i,r,n,a,s){for(let e=0,t=i.length-3;e<=t;e+=3){Jn.fromArray(i,e);var o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=r.dot(Jn),h=n.dot(Jn),c=a.dot(Jn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const yd=new Ki,hl=new P,Ys=new P,ra=new P;class Zi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(i,e){var r=this.center;void 0!==e?r.copy(e):yd.setFromPoints(i).getCenter(r);let n=0;for(let e=0,t=i.length;e<t;e++)n=Math.max(n,r.distanceToSquared(i[e]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){var i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ra.subVectors(e,this.center);var t,e=ra.lengthSq();return e>this.radius*this.radius&&(t=.5*((e=Math.sqrt(e))-this.radius),this.center.add(ra.multiplyScalar(t/e)),this.radius+=t),this}union(e){return(!0===this.center.equals(e.center)?Ys.set(0,0,1):Ys.subVectors(e.center,this.center).normalize()).multiplyScalar(e.radius),this.expandByPoint(hl.copy(e.center).add(Ys)),this.expandByPoint(hl.copy(e.center).sub(Ys)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const pn=new P,aa=new P,Ks=new P,Dn=new P,oa=new P,Zs=new P,la=new P;class io{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);e=t.dot(this.direction);return e<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(e).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){var t=pn.subVectors(e,this.origin).dot(this.direction);return(t<0?this.origin:(pn.copy(this.direction).multiplyScalar(t).add(this.origin),pn)).distanceToSquared(e)}distanceSqToSegment(e,t,i,r){aa.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(aa);var e=.5*e.distanceTo(t),t=-this.direction.dot(Ks),n=Dn.dot(this.direction),a=-Dn.dot(Ks),s=Dn.lengthSq(),o=Math.abs(1-t*t);let l,h,c,u;return c=0<o?(l=t*a-n,h=t*n-a,u=e*o,0<=l?h>=-u?h<=u?(o=1/o,l*=o,h*=o,l*(l+t*h+2*n)+h*(t*l+h+2*a)+s):(h=e,-(l=Math.max(0,-(t*h+n)))*l+h*(h+2*a)+s):(h=-e,-(l=Math.max(0,-(t*h+n)))*l+h*(h+2*a)+s):h<=-u?(l=Math.max(0,-(-t*e+n)),h=0<l?-e:Math.min(Math.max(-e,-a),e),-l*l+h*(h+2*a)+s):h<=u?(l=0,(h=Math.min(Math.max(-e,-a),e))*(h+2*a)+s):(l=Math.max(0,-(t*e+n)),h=0<l?e:Math.min(Math.max(-e,-a),e),-l*l+h*(h+2*a)+s)):(h=0<t?-e:e,-(l=Math.max(0,-(t*h+n)))*l+h*(h+2*a)+s),i&&i.copy(this.direction).multiplyScalar(l).add(this.origin),r&&r.copy(Ks).multiplyScalar(h).add(aa),c}intersectSphere(e,t){pn.subVectors(e.center,this.origin);var i=pn.dot(this.direction),r=pn.dot(pn)-i*i,e=e.radius*e.radius;return e<r||(r=i+(e=Math.sqrt(e-r)),(i=i-e)<0&&r<0)?null:i<0?this.at(r,t):this.at(i,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){var t=e.normal.dot(this.direction);return 0===t?0===e.distanceToPoint(this.origin)?0:null:0<=(e=-(this.origin.dot(e.normal)+e.constant)/t)?e:null}intersectPlane(e,t){e=this.distanceToPlane(e);return null===e?null:this.at(e,t)}intersectsPlane(e){var t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,a,s,o;var l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return r=0<=l?(i=(e.min.x-u.x)*l,(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,(e.min.x-u.x)*l),a=0<=h?(n=(e.min.y-u.y)*h,(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,(e.min.y-u.y)*h),i>a||n>r||((n>i||i!=i)&&(i=n),(a<r||r!=r)&&(r=a),o=0<=c?(s=(e.min.z-u.z)*c,(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,(e.min.z-u.z)*c),i>o)||s>r||((s>i||i!=i)&&(i=s),(r=o<r||r!=r?o:r)<0)?null:this.at(0<=i?i:r,t)}intersectsBox(e){return null!==this.intersectBox(e,pn)}intersectTriangle(e,t,i,r,n){oa.subVectors(t,e),Zs.subVectors(i,e),la.crossVectors(oa,Zs);let a=this.direction.dot(la),s;if(0<a){if(r)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}Dn.subVectors(this.origin,e);t=s*this.direction.dot(Zs.crossVectors(Dn,Zs));return t<0||(i=s*this.direction.dot(oa.cross(Dn)))<0||t+i>a||(r=-s*Dn.dot(la))<0?null:this.at(r/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class pe{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,a,s,o,l,h,c,u,d,p,m,f){var g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=a,g[9]=s,g[13]=o,g[2]=l,g[6]=h,g[10]=c,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new pe).fromArray(this.elements)}copy(e){var t=this.elements,e=e.elements;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],this}copyPosition(e){var t=this.elements,e=e.elements;return t[12]=e[12],t[13]=e[13],t[14]=e[14],this}setFromMatrix3(e){e=e.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){var t=this.elements,i=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),n=1/Mi.setFromMatrixColumn(e,1).length(),e=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*e,t[9]=i[9]*e,t[10]=i[10]*e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var t,i,r,n,a=this.elements,s=e.x,o=e.y,l=e.z,h=Math.cos(s),s=Math.sin(s),c=Math.cos(o),o=Math.sin(o),u=Math.cos(l),l=Math.sin(l);return"XYZ"===e.order?(i=h*u,r=h*l,n=s*u,t=s*l,a[0]=c*u,a[4]=-c*l,a[8]=o,a[1]=r+n*o,a[5]=i-t*o,a[9]=-s*c,a[2]=t-i*o,a[6]=n+r*o,a[10]=h*c):"YXZ"===e.order?(t=c*l,i=o*u,a[0]=(n=c*u)+(r=o*l)*s,a[4]=i*s-t,a[8]=h*o,a[1]=h*l,a[5]=h*u,a[9]=-s,a[2]=t*s-i,a[6]=r+n*s,a[10]=h*c):"ZXY"===e.order?(t=c*l,i=o*u,a[0]=(r=c*u)-(n=o*l)*s,a[4]=-h*l,a[8]=i+t*s,a[1]=t+i*s,a[5]=h*u,a[9]=n-r*s,a[2]=-h*o,a[6]=s,a[10]=h*c):"ZYX"===e.order?(t=h*u,i=h*l,n=s*u,r=s*l,a[0]=c*u,a[4]=n*o-i,a[8]=t*o+r,a[1]=c*l,a[5]=r*o+t,a[9]=i*o-n,a[2]=-o,a[6]=s*c,a[10]=h*c):"YZX"===e.order?(r=h*c,t=h*o,i=s*c,n=s*o,a[0]=c*u,a[4]=n-r*l,a[8]=i*l+t,a[1]=l,a[5]=h*u,a[9]=-s*u,a[2]=-o*u,a[6]=t*l+i,a[10]=r-n*l):"XZY"===e.order&&(t=h*c,i=h*o,r=s*c,n=s*o,a[0]=c*u,a[4]=-l,a[8]=o*u,a[1]=t*l+n,a[5]=h*u,a[9]=i*l-r,a[2]=r*l-i,a[6]=s*u,a[10]=n*l+t),a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,wd)}lookAt(e,t,i){var r=this.elements;return Ct.subVectors(e,t),0===Ct.lengthSq()&&(Ct.z=1),Ct.normalize(),In.crossVectors(i,Ct),0===In.lengthSq()&&(1===Math.abs(i.z)?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),In.crossVectors(i,Ct)),In.normalize(),Js.crossVectors(Ct,In),r[0]=In.x,r[4]=Js.x,r[8]=Ct.x,r[1]=In.y,r[5]=Js.y,r[9]=Ct.y,r[2]=In.z,r[6]=Js.z,r[10]=Ct.z,this}multiply(e,t){return void 0!==t?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){var e=e.elements,t=t.elements,i=this.elements,r=e[0],n=e[4],a=e[8],s=e[12],o=e[1],l=e[5],h=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],f=e[3],g=e[7],v=e[11],e=e[15],x=t[0],_=t[4],y=t[8],b=t[12],w=t[1],M=t[5],S=t[9],T=t[13],E=t[2],A=t[6],L=t[10],C=t[14],P=t[3],R=t[7],I=t[11],t=t[15];return i[0]=r*x+n*w+a*E+s*P,i[4]=r*_+n*M+a*A+s*R,i[8]=r*y+n*S+a*L+s*I,i[12]=r*b+n*T+a*C+s*t,i[1]=o*x+l*w+h*E+c*P,i[5]=o*_+l*M+h*A+c*R,i[9]=o*y+l*S+h*L+c*I,i[13]=o*b+l*T+h*C+c*t,i[2]=u*x+d*w+p*E+m*P,i[6]=u*_+d*M+p*A+m*R,i[10]=u*y+d*S+p*L+m*I,i[14]=u*b+d*T+p*C+m*t,i[3]=f*x+g*w+v*E+e*P,i[7]=f*_+g*M+v*A+e*R,i[11]=f*y+g*S+v*L+e*I,i[15]=f*b+g*T+v*C+e*t,this}multiplyScalar(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){var e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],a=e[1],s=e[5],o=e[9],l=e[13],h=e[2],c=e[6],u=e[10],d=e[14];return e[3]*(+n*o*c-r*l*c-n*s*u+i*l*u+r*s*d-i*o*d)+e[7]*(+t*o*d-t*l*u+n*a*u-r*a*d+r*l*h-n*o*h)+e[11]*(+t*l*c-t*s*d-n*a*c+i*a*d+n*s*h-i*l*h)+e[15]*(-r*s*h-t*o*c+t*s*u+r*a*c-i*a*u+i*o*h)}transpose(){var e=this.elements,t=e[1];return e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){var r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){var e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],h=e[8],c=e[9],u=e[10],d=e[11],p=e[12],m=e[13],f=e[14],g=e[15],v=c*f*l-m*u*l+m*o*d-s*f*d-c*o*g+s*u*g,x=p*u*l-h*f*l-p*o*d+a*f*d+h*o*g-a*u*g,_=h*m*l-p*c*l+p*s*d-a*m*d-h*s*g+a*c*g,y=p*c*o-h*m*o-p*s*u+a*m*u+h*s*f-a*c*f,b=t*v+i*x+r*_+n*y;return 0==b?this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0):(e[0]=v*(v=1/b),e[1]=(m*u*n-c*f*n-m*r*d+i*f*d+c*r*g-i*u*g)*v,e[2]=(s*f*n-m*o*n+m*r*l-i*f*l-s*r*g+i*o*g)*v,e[3]=(c*o*n-s*u*n-c*r*l+i*u*l+s*r*d-i*o*d)*v,e[4]=x*v,e[5]=(h*f*n-p*u*n+p*r*d-t*f*d-h*r*g+t*u*g)*v,e[6]=(p*o*n-a*f*n-p*r*l+t*f*l+a*r*g-t*o*g)*v,e[7]=(a*u*n-h*o*n+h*r*l-t*u*l-a*r*d+t*o*d)*v,e[8]=_*v,e[9]=(p*c*n-h*m*n-p*i*d+t*m*d+h*i*g-t*c*g)*v,e[10]=(a*m*n-p*s*n+p*i*l-t*m*l-a*i*g+t*s*g)*v,e[11]=(h*s*n-a*c*n-h*i*l+t*c*l+a*i*d-t*s*d)*v,e[12]=y*v,e[13]=(h*m*r-p*c*r+p*i*u-t*m*u-h*i*f+t*c*f)*v,e[14]=(p*s*r-a*m*r-p*i*o+t*m*o+a*i*f-t*s*f)*v,e[15]=(a*c*r-h*s*r+h*i*o-t*c*o-a*i*u+t*s*u)*v,this)}scale(e){var t=this.elements,i=e.x,r=e.y,e=e.z;return t[0]*=i,t[4]*=r,t[8]*=e,t[1]*=i,t[5]*=r,t[9]*=e,t[2]*=i,t[6]*=r,t[10]*=e,t[3]*=i,t[7]*=r,t[11]*=e,this}getMaxScaleOnAxis(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,e))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){var t=Math.cos(e),e=Math.sin(e);return this.set(1,0,0,0,0,t,-e,0,0,e,t,0,0,0,0,1),this}makeRotationY(e){var t=Math.cos(e),e=Math.sin(e);return this.set(t,0,e,0,0,1,0,0,-e,0,t,0,0,0,0,1),this}makeRotationZ(e){var t=Math.cos(e),e=Math.sin(e);return this.set(t,-e,0,0,e,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){var i=Math.cos(t),t=Math.sin(t),r=1-i,n=e.x,a=e.y,e=e.z,s=r*n,o=r*a;return this.set(s*n+i,s*a-t*e,s*e+t*a,0,s*a+t*e,o*a+i,o*e-t*n,0,s*e-t*a,o*e+t*n,r*e*e+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,a){return this.set(1,i,n,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){var r=this.elements,n=t._x,a=t._y,s=t._z,t=t._w,o=n+n,l=a+a,h=s+s,c=n*o,u=n*l,n=n*h,d=a*l,a=a*h,s=s*h,o=t*o,l=t*l,t=t*h,h=i.x,p=i.y,i=i.z;return r[0]=(1-(d+s))*h,r[1]=(u+t)*h,r[2]=(n-l)*h,r[3]=0,r[4]=(u-t)*p,r[5]=(1-(c+s))*p,r[6]=(a+o)*p,r[7]=0,r[8]=(n+l)*i,r[9]=(a-o)*i,r[10]=(1-(c+d))*i,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){var r=this.elements;let n=Mi.set(r[0],r[1],r[2]).length();var a=Mi.set(r[4],r[5],r[6]).length(),s=Mi.set(r[8],r[9],r[10]).length(),e=(this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this),1/n),r=1/a,o=1/s;return Vt.elements[0]*=e,Vt.elements[1]*=e,Vt.elements[2]*=e,Vt.elements[4]*=r,Vt.elements[5]*=r,Vt.elements[6]*=r,Vt.elements[8]*=o,Vt.elements[9]*=o,Vt.elements[10]*=o,t.setFromRotationMatrix(Vt),i.x=n,i.y=a,i.z=s,this}makePerspective(e,t,i,r,n,a){void 0===a&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var s=this.elements,o=2*n/(i-r),l=(t+e)/(t-e),i=(i+r)/(i-r),r=-(a+n)/(a-n),a=-2*a*n/(a-n);return s[0]=2*n/(t-e),s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=o,s[9]=i,s[13]=0,s[2]=0,s[6]=0,s[10]=r,s[14]=a,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,n,a){var s=this.elements,o=1/(t-e),l=1/(i-r),h=1/(a-n),t=(t+e)*o,e=(i+r)*l,i=(a+n)*h;return s[0]=2*o,s[4]=0,s[8]=0,s[12]=-t,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-e,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-i,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){var t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}fromArray(t,i=0){for(let e=0;e<16;e++)this.elements[e]=t[e+i];return this}toArray(e=[],t=0){var i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mi=new P,Vt=new pe,Md=new P(0,0,0),wd=new P(1,1,1),In=new P,Js=new P,Ct=new P,ul=new pe,dl=new Mt;class an{constructor(e=0,t=0,i=0,r=an.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){var e=e.elements,r=e[0],n=e[4],a=e[8],s=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-n,r)):(this._x=Math.atan2(c,o),this._z=0);break;case"YXZ":this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(s,o)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-n,o)):(this._y=0,this._z=Math.atan2(s,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(s,r)):(this._x=0,this._z=Math.atan2(-n,o));break;case"YZX":this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,o),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-at(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(c,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}an.DefaultOrder="XYZ",an.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return 0!=(this.mask&e.mask)}isEnabled(e){return 0!=(this.mask&(1<<e|0))}}let bd=0;const fl=new P,wi=new Mt,mn=new pe,Qs=new P,fs=new P,Sd=new P,Td=new Mt,pl=new P(1,0,0),ml=new P(0,1,0),gl=new P(0,0,1),Ed={type:"added"},vl={type:"removed"};class Ye extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const e=new P,t=new an,i=new Mt,r=new P(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qs.copy(e):Qs.set(e,t,i);e=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(fs,Qs,this.up):mn.lookAt(Qs,fs,this.up),this.quaternion.setFromRotationMatrix(mn),e&&(mn.extractRotation(e.matrixWorld),wi.setFromRotationMatrix(mn),this.quaternion.premultiply(wi.invert()))}add(e){if(1<arguments.length)for(let e=0;e<arguments.length;e++)this.add(arguments[e]);else e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),(e.parent=this).children.push(e),e.dispatchEvent(Ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(1<arguments.length)for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);else{var t=this.children.indexOf(e);-1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vl))}return this}removeFromParent(){var e=this.parent;return null!==e&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){var t=this.children[e];t.parent=null,t.dispatchEvent(vl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(i,r){if(this[i]===r)return this;for(let e=0,t=this.children.length;e<t;e++){var n=this.children[e].getObjectByProperty(i,r);if(void 0!==n)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);var t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(i){i(this);var r=this.children;for(let e=0,t=r.length;e<t;e++)r[e].traverse(i)}traverseVisible(i){if(!1!==this.visible){i(this);var r=this.children;for(let e=0,t=r.length;e<t;e++)r[e].traverseVisible(i)}}traverseAncestors(e){var t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(i){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i=!(this.matrixWorldNeedsUpdate=!1));var r=this.children;for(let e=0,t=r.length;e<t;e++)r[e].updateMatrixWorld(i)}updateWorldMatrix(e,t){var i=this.parent;if(!0===e&&null!==i&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){var r=this.children;for(let e=0,t=r.length;e<t;e++)r[e].updateWorldMatrix(!1,!0)}}toJSON(i){var e,t,r,n,a,s,o=void 0===i||"string"==typeof i,l={},h=(o&&(i={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},l.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"}),{});function c(e,t){return void 0===e[t.uuid]&&(e[t.uuid]=t.toJSON(i)),t.uuid}if(h.uuid=this.uuid,h.type=this.type,""!==this.name&&(h.name=this.name),!0===this.castShadow&&(h.castShadow=!0),!0===this.receiveShadow&&(h.receiveShadow=!0),!1===this.visible&&(h.visible=!1),!1===this.frustumCulled&&(h.frustumCulled=!1),0!==this.renderOrder&&(h.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(h.userData=this.userData),h.layers=this.layers.mask,h.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(h.matrixAutoUpdate=!1),this.isInstancedMesh&&(h.type="InstancedMesh",h.count=this.count,h.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor)&&(h.instanceColor=this.instanceColor.toJSON()),this.isScene)this.background&&(this.background.isColor?h.background=this.background.toJSON():this.background.isTexture&&(h.background=this.background.toJSON(i).uuid)),this.environment&&this.environment.isTexture&&(h.environment=this.environment.toJSON(i).uuid);else if(this.isMesh||this.isLine||this.isPoints){h.geometry=c(i.geometries,this.geometry);var u=this.geometry.parameters;if(void 0!==u&&void 0!==u.shapes){var d=u.shapes;if(Array.isArray(d))for(let e=0,t=d.length;e<t;e++){var p=d[e];c(i.shapes,p)}else c(i.shapes,d)}}if(this.isSkinnedMesh&&(h.bindMode=this.bindMode,h.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton)&&(c(i.skeletons,this.skeleton),h.skeleton=this.skeleton.uuid),void 0!==this.material)if(Array.isArray(this.material)){var m=[];for(let e=0,t=this.material.length;e<t;e++)m.push(c(i.materials,this.material[e]));h.material=m}else h.material=c(i.materials,this.material);if(0<this.children.length){h.children=[];for(let e=0;e<this.children.length;e++)h.children.push(this.children[e].toJSON(i).object)}if(0<this.animations.length){h.animations=[];for(let e=0;e<this.animations.length;e++){var f=this.animations[e];h.animations.push(c(i.animations,f))}}return o&&(u=g(i.geometries),o=g(i.materials),e=g(i.textures),t=g(i.images),r=g(i.shapes),n=g(i.skeletons),a=g(i.animations),s=g(i.nodes),0<u.length&&(l.geometries=u),0<o.length&&(l.materials=o),0<e.length&&(l.textures=e),0<t.length&&(l.images=t),0<r.length&&(l.shapes=r),0<n.length&&(l.skeletons=n),0<a.length&&(l.animations=a),0<s.length)&&(l.nodes=s),l.object=h,l;function g(e){var t=[];for(const r in e){var i=e[r];delete i.metadata,t.push(i)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){var i=t.children[e];this.add(i.clone())}return this}}Ye.DefaultUp=new P(0,1,0),Ye.DefaultMatrixAutoUpdate=!0;const Gt=new P,gn=new P,ca=new P,vn=new P,bi=new P,Si=new P,_l=new P,ha=new P,ua=new P,da=new P;class rn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);i=r.lengthSq();return 0<i?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Gt.subVectors(r,t),gn.subVectors(i,t),ca.subVectors(e,t);var r=Gt.dot(Gt),i=Gt.dot(gn),e=Gt.dot(ca),t=gn.dot(gn),a=gn.dot(ca),s=r*t-i*i;return 0==s?n.set(-2,-1,-1):n.set(1-(t=(t*e-i*a)*(n=1/s))-(s=(r*a-i*e)*n),s,t)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn),0<=vn.x&&0<=vn.y&&vn.x+vn.y<=1}static getUV(e,t,i,r,n,a,s,o){return this.getBarycoord(e,t,i,r,vn),o.set(0,0),o.addScaledVector(n,vn.x),o.addScaledVector(a,vn.y),o.addScaledVector(s,vn.z),o}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),gn.subVectors(e,t),Gt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),.5*Gt.cross(gn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return rn.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){var i=this.a,r=this.b,n=this.c;let a,s;bi.subVectors(r,i),Si.subVectors(n,i),ha.subVectors(e,i);var o=bi.dot(ha),l=Si.dot(ha);if(o<=0&&l<=0)return t.copy(i);ua.subVectors(e,r);var h=bi.dot(ua),c=Si.dot(ua);if(0<=h&&c<=h)return t.copy(r);var u=o*c-h*l;if(u<=0&&0<=o&&h<=0)return a=o/(o-h),t.copy(i).addScaledVector(bi,a);da.subVectors(e,n);var e=bi.dot(da),d=Si.dot(da);return 0<=d&&e<=d?t.copy(n):(o=e*l-o*d)<=0&&0<=l&&d<=0?(s=l/(l-d),t.copy(i).addScaledVector(Si,s)):(l=h*d-e*c)<=0&&0<=c-h&&0<=e-d?(_l.subVectors(n,r),s=(c-h)/(c-h+(e-d)),t.copy(r).addScaledVector(_l,s)):(n=1/(l+o+u),a=o*n,s=u*n,t.copy(i).addScaledVector(bi,a).addScaledVector(Si,s))}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ad=0;class it extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=zi,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){0<this._alphaTest!=0<e&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(const r in e){var t,i=e[r];void 0===i?console.warn("THREE.Material: '"+r+"' parameter is undefined."):"shading"===r?(console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===fu):void 0===(t=this[r])?console.warn("THREE."+this.type+": '"+r+"' is not a property of this material."):t&&t.isColor?t.set(i):t&&t.isVector3&&i&&i.isVector3?t.copy(i):this[r]=i}}toJSON(e){var t=void 0===e||"string"==typeof e,i=(t&&(e={textures:{},images:{}}),{metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}});function r(e){var t=[];for(const r in e){var i=e[r];delete i.metadata,t.push(i)}return t}return i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine)&&(i.combine=this.combine),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),0<this.alphaTest&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(i.wireframe=this.wireframe),1<this.wireframeLinewidth&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),t&&(t=r(e.textures),e=r(e.images),0<t.length&&(i.textures=t),0<e.length)&&(i.images=e),i}clone(){return(new this.constructor).copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;var t=e.clippingPlanes;let i=null;if(null!==t){var r=t.length;i=new Array(r);for(let e=0;e!==r;++e)i[e]=t[e].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}it.fromType=function(){return null};class wn extends it{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new P,er=new ve;class wt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=!0===i,this.usage=ka,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(i,r,n){i*=this.itemSize,n*=r.itemSize;for(let e=0,t=this.itemSize;e<t;e++)this.array[i+e]=r.array[n+e];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(i){var r=this.array;let n=0;for(let t=0,e=i.length;t<e;t++){let e=i[t];void 0===e&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",t),e=new de),r[n++]=e.r,r[n++]=e.g,r[n++]=e.b}return this}copyVector2sArray(i){var r=this.array;let n=0;for(let t=0,e=i.length;t<e;t++){let e=i[t];void 0===e&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",t),e=new ve),r[n++]=e.x,r[n++]=e.y}return this}copyVector3sArray(i){var r=this.array;let n=0;for(let t=0,e=i.length;t<e;t++){let e=i[t];void 0===e&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",t),e=new P),r[n++]=e.x,r[n++]=e.y,r[n++]=e.z}return this}copyVector4sArray(i){var r=this.array;let n=0;for(let t=0,e=i.length;t<e;t++){let e=i[t];void 0===e&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",t),e=new Ue),r[n++]=e.x,r[n++]=e.y,r[n++]=e.z,r[n++]=e.w}return this}applyMatrix3(i){if(2===this.itemSize)for(let e=0,t=this.count;e<t;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(i),this.setXY(e,er.x,er.y);else if(3===this.itemSize)for(let e=0,t=this.count;e<t;e++)tt.fromBufferAttribute(this,e),tt.applyMatrix3(i),this.setXYZ(e,tt.x,tt.y,tt.z);return this}applyMatrix4(i){for(let e=0,t=this.count;e<t;e++)tt.fromBufferAttribute(this,e),tt.applyMatrix4(i),this.setXYZ(e,tt.x,tt.y,tt.z);return this}applyNormalMatrix(i){for(let e=0,t=this.count;e<t;e++)tt.fromBufferAttribute(this,e),tt.applyNormalMatrix(i),this.setXYZ(e,tt.x,tt.y,tt.z);return this}transformDirection(i){for(let e=0,t=this.count;e<t;e++)tt.fromBufferAttribute(this,e),tt.transformDirection(i),this.setXYZ(e,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){var e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),0===this.updateRange.offset&&-1===this.updateRange.count||(e.updateRange=this.updateRange),e}}class so extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $c extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xe extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cd=0;const Dt=new pe,fa=new Ye,Ti=new P,Lt=new Ki,ps=new Ki,lt=new P;class ct extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)?$c:so)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){var t=this.attributes.position,t=(void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0),this.attributes.normal),i=(void 0!==t&&(i=(new Xt).getNormalMatrix(e),t.applyNormalMatrix(i),t.needsUpdate=!0),this.attributes.tangent);return void 0!==i&&(i.transformDirection(e),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(i){var r=[];for(let e=0,t=i.length;e<t;e++){var n=i[e];r.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Xe(r,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Ki);var e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));else{if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),i)for(let e=0,t=i.length;e<t;e++){var r=i[e];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new Zi);var r=this.attributes.position,n=this.morphAttributes.position;if(r&&r.isGLBufferAttribute)console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);else if(r){var a=this.boundingSphere.center;if(Lt.setFromBufferAttribute(r),n)for(let e=0,t=n.length;e<t;e++){var s=n[e];ps.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(Lt.min,ps.min),Lt.expandByPoint(lt),lt.addVectors(Lt.max,ps.max),Lt.expandByPoint(lt)):(Lt.expandByPoint(ps.min),Lt.expandByPoint(ps.max))}Lt.getCenter(a);let i=0;for(let e=0,t=r.count;e<t;e++)lt.fromBufferAttribute(r,e),i=Math.max(i,a.distanceToSquared(lt));if(n)for(let e=0,t=n.length;e<t;e++){var o=n[e],l=this.morphTargetsRelative;for(let e=0,t=o.count;e<t;e++)lt.fromBufferAttribute(o,e),l&&(Ti.fromBufferAttribute(r,e),lt.add(Ti)),i=Math.max(i,a.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){var r,n,a,s,e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv)console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");else{const d=e.array,p=t.position.array,m=t.normal.array,f=t.uv.array,g=p.length/3,v=(!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new wt(new Float32Array(4*g),4)),this.getAttribute("tangent").array),x=[],_=[];for(let e=0;e<g;e++)x[e]=new P,_[e]=new P;const y=new P,b=new P,w=new P,M=new ve,S=new ve,T=new ve,E=new P,A=new P;let i=this.groups;for(let e=0,t=(i=0===i.length?[{start:0,count:d.length}]:i).length;e<t;++e){var o=i[e],l=o.start;for(let e=l,t=l+o.count;e<t;e+=3)r=d[e+0],n=d[e+1],a=d[e+2],s=void 0,y.fromArray(p,3*r),b.fromArray(p,3*n),w.fromArray(p,3*a),M.fromArray(f,2*r),S.fromArray(f,2*n),T.fromArray(f,2*a),b.sub(y),w.sub(y),S.sub(M),T.sub(M),s=1/(S.x*T.y-T.x*S.y),isFinite(s)&&(E.copy(b).multiplyScalar(T.y).addScaledVector(w,-S.y).multiplyScalar(s),A.copy(w).multiplyScalar(S.x).addScaledVector(b,-T.x).multiplyScalar(s),x[r].add(E),x[n].add(E),x[a].add(E),_[r].add(A),_[n].add(A),_[a].add(A))}const L=new P,C=new P,R=new P,I=new P;for(let e=0,t=i.length;e<t;++e){var h=i[e],c=h.start;for(let e=c,t=c+h.count;e<t;e+=3)u(d[e+0]),u(d[e+1]),u(d[e+2])}function u(e){R.fromArray(m,3*e),I.copy(R);var t=x[e],t=(L.copy(t),L.sub(R.multiplyScalar(R.dot(t))).normalize(),C.crossVectors(I,t),C.dot(_[e])<0?-1:1);v[4*e]=L.x,v[4*e+1]=L.y,v[4*e+2]=L.z,v[4*e+3]=t}}}computeVertexNormals(){var r=this.index,n=this.getAttribute("position");if(void 0!==n){let i=this.getAttribute("normal");if(void 0===i)i=new wt(new Float32Array(3*n.count),3),this.setAttribute("normal",i);else for(let e=0,t=i.count;e<t;e++)i.setXYZ(e,0,0,0);var a=new P,s=new P,o=new P,l=new P,h=new P,c=new P,u=new P,d=new P;if(r)for(let e=0,t=r.count;e<t;e+=3){var p=r.getX(e+0),m=r.getX(e+1),f=r.getX(e+2);a.fromBufferAttribute(n,p),s.fromBufferAttribute(n,m),o.fromBufferAttribute(n,f),u.subVectors(o,s),d.subVectors(a,s),u.cross(d),l.fromBufferAttribute(i,p),h.fromBufferAttribute(i,m),c.fromBufferAttribute(i,f),l.add(u),h.add(u),c.add(u),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let e=0,t=n.count;e<t;e+=3)a.fromBufferAttribute(n,e+0),s.fromBufferAttribute(n,e+1),o.fromBufferAttribute(n,e+2),u.subVectors(o,s),d.subVectors(a,s),u.cross(d),i.setXYZ(e+0,u.x,u.y,u.z),i.setXYZ(e+1,u.x,u.y,u.z),i.setXYZ(e+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(e&&e.isBufferGeometry){void 0===t&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var i=this.attributes;for(const o in i)if(void 0!==e.attributes[o]){var r=i[o].array,n=e.attributes[o],a=n.array,n=n.itemSize*t,s=Math.min(a.length,r.length-n);for(let e=0,t=n;e<s;e++,t++)r[t]=a[e]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e)}normalizeNormals(){var i=this.attributes.normal;for(let e=0,t=i.count;e<t;e++)lt.fromBufferAttribute(i,e),lt.normalize(),i.setXYZ(e,lt.x,lt.y,lt.z)}toNonIndexed(){function i(i,r){var n=i.array,a=i.itemSize,e=i.normalized,s=new n.constructor(r.length*a);let o=0,l=0;for(let e=0,t=r.length;e<t;e++){o=i.isInterleavedBufferAttribute?r[e]*i.data.stride+i.offset:r[e]*a;for(let e=0;e<a;e++)s[l++]=n[o++]}return new wt(s,a,e)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;var r=new ct,n=this.index.array,e=this.attributes;for(const u in e){var t=i(e[u],n);r.setAttribute(u,t)}var a=this.morphAttributes;for(const d in a){var s=[],o=a[d];for(let e=0,t=o.length;e<t;e++){var l=i(o[e],n);s.push(l)}r.morphAttributes[d]=s}r.morphTargetsRelative=this.morphTargetsRelative;var h=this.groups;for(let e=0,t=h.length;e<t;e++){var c=h[e];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){var i={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),0<Object.keys(this.userData).length&&(i.userData=this.userData),void 0!==this.parameters){var e=this.parameters;for(const h in e)void 0!==e[h]&&(i[h]=e[h])}else{i.data={attributes:{}};var t=this.index,r=(null!==t&&(i.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)}),this.attributes);for(const c in r){var n=r[c];i.data.attributes[c]=n.toJSON(i.data)}var a={};let e=!1;for(const u in this.morphAttributes){var s=this.morphAttributes[u],o=[];for(let e=0,t=s.length;e<t;e++){var l=s[e];o.push(l.toJSON(i.data))}0<o.length&&(a[u]=o,e=!0)}e&&(i.data.morphAttributes=a,i.data.morphTargetsRelative=this.morphTargetsRelative);t=this.groups,t=(0<t.length&&(i.data.groups=JSON.parse(JSON.stringify(t))),this.boundingSphere);null!==t&&(i.data.boundingSphere={center:t.center.toArray(),radius:t.radius})}return i}clone(){return(new this.constructor).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;var i={},t=(this.name=e.name,e.index),r=(null!==t&&this.setIndex(t.clone(i)),e.attributes);for(const c in r){var n=r[c];this.setAttribute(c,n.clone(i))}var a=e.morphAttributes;for(const u in a){var s=[],o=a[u];for(let e=0,t=o.length;e<t;e++)s.push(o[e].clone(i));this.morphAttributes[u]=s}this.morphTargetsRelative=e.morphTargetsRelative;var l=e.groups;for(let e=0,t=l.length;e<t;e++){var h=l[e];this.addGroup(h.start,h.count,h.materialIndex)}t=e.boundingBox,null!==t&&(this.boundingBox=t.clone()),t=e.boundingSphere;return null!==t&&(this.boundingSphere=t.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,void 0!==e.parameters&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new pe,Ei=new io,pa=new Zi,Fn=new P,Nn=new P,zn=new P,ma=new P,ga=new P,va=new P,tr=new P,nr=new P,ir=new P,sr=new ve,rr=new ve,ar=new ve,_a=new P,or=new P;class Qe extends Ye{constructor(e=new ct,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){var e=this.geometry.morphAttributes,t=Object.keys(e);if(0<t.length){var i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){var r=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=e}}}}raycast(r,n){var e=this.geometry,a=this.material,t=this.matrixWorld;if(void 0!==a&&(null===e.boundingSphere&&e.computeBoundingSphere(),pa.copy(e.boundingSphere),pa.applyMatrix4(t),!1!==r.ray.intersectsSphere(pa))&&(xl.copy(t).invert(),Ei.copy(r.ray).applyMatrix4(xl),null===e.boundingBox||!1!==Ei.intersectsBox(e.boundingBox))){let i;var s=e.index,o=e.attributes.position,l=e.morphAttributes.position,h=e.morphTargetsRelative,c=e.attributes.uv,u=e.attributes.uv2,d=e.groups,p=e.drawRange;if(null!==s)if(Array.isArray(a))for(let e=0,t=d.length;e<t;e++){var m=d[e],f=a[m.materialIndex];for(let e=Math.max(m.start,p.start),t=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));e<t;e+=3){var g=s.getX(e),v=s.getX(e+1),x=s.getX(e+2);(i=lr(this,f,r,Ei,o,l,h,c,u,g,v,x))&&(i.faceIndex=Math.floor(e/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else for(let e=Math.max(0,p.start),t=Math.min(s.count,p.start+p.count);e<t;e+=3){var _=s.getX(e),y=s.getX(e+1),b=s.getX(e+2);(i=lr(this,a,r,Ei,o,l,h,c,u,_,y,b))&&(i.faceIndex=Math.floor(e/3),n.push(i))}else if(void 0!==o)if(Array.isArray(a))for(let e=0,t=d.length;e<t;e++){var w=d[e],M=a[w.materialIndex];for(let e=Math.max(w.start,p.start),t=Math.min(o.count,Math.min(w.start+w.count,p.start+p.count));e<t;e+=3){var S=e,T=e+1,E=e+2;(i=lr(this,M,r,Ei,o,l,h,c,u,S,T,E))&&(i.faceIndex=Math.floor(e/3),i.face.materialIndex=w.materialIndex,n.push(i))}}else for(let e=Math.max(0,p.start),t=Math.min(o.count,p.start+p.count);e<t;e+=3){var A=e,L=e+1,C=e+2;(i=lr(this,a,r,Ei,o,l,h,c,u,A,L,C))&&(i.faceIndex=Math.floor(e/3),n.push(i))}}}}function Ld(e,t,i,r,n,a,s,o){let l;if(null===(l=t.side===qt?r.intersectTriangle(s,a,n,!0,o):r.intersectTriangle(n,a,s,t.side!==cn,o)))return null;or.copy(o),or.applyMatrix4(e.matrixWorld);r=i.ray.origin.distanceTo(or);return r<i.near||r>i.far?null:{distance:r,point:or.clone(),object:e}}function lr(e,t,i,r,n,a,s,o,l,h,c,u){Fn.fromBufferAttribute(n,h),Nn.fromBufferAttribute(n,c),zn.fromBufferAttribute(n,u);var d=e.morphTargetInfluences;if(a&&d){tr.set(0,0,0),nr.set(0,0,0),ir.set(0,0,0);for(let e=0,t=a.length;e<t;e++){var p=d[e],m=a[e];0!==p&&(ma.fromBufferAttribute(m,h),ga.fromBufferAttribute(m,c),va.fromBufferAttribute(m,u),s?(tr.addScaledVector(ma,p),nr.addScaledVector(ga,p),ir.addScaledVector(va,p)):(tr.addScaledVector(ma.sub(Fn),p),nr.addScaledVector(ga.sub(Nn),p),ir.addScaledVector(va.sub(zn),p)))}Fn.add(tr),Nn.add(nr),zn.add(ir)}e.isSkinnedMesh&&(e.boneTransform(h,Fn),e.boneTransform(c,Nn),e.boneTransform(u,zn));n=Ld(e,t,i,r,Fn,Nn,zn,_a);return n&&(o&&(sr.fromBufferAttribute(o,h),rr.fromBufferAttribute(o,c),ar.fromBufferAttribute(o,u),n.uv=rn.getUV(_a,Fn,Nn,zn,sr,rr,ar,new ve)),l&&(sr.fromBufferAttribute(l,h),rr.fromBufferAttribute(l,c),ar.fromBufferAttribute(l,u),n.uv2=rn.getUV(_a,Fn,Nn,zn,sr,rr,ar,new ve)),e={a:h,b:c,c:u,normal:new P,materialIndex:0},rn.getNormal(Fn,Nn,zn,e.normal),n.face=e),n}class Ns extends ct{constructor(e=1,t=1,i=1,r=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:a};const A=this,L=(r=Math.floor(r),n=Math.floor(n),a=Math.floor(a),[]),C=[],R=[],I=[];let D=0,N=0;function s(i,r,n,a,s,e,t,o,l,h,c){var u=e/l,d=t/h,p=e/2,m=t/2,f=o/2,g=l+1,v=h+1;let x=0,_=0;var y=new P;for(let t=0;t<v;t++){var b=t*d-m;for(let e=0;e<g;e++){var w=e*u-p;y[i]=w*a,y[r]=b*s,y[n]=f,C.push(y.x,y.y,y.z),y[i]=0,y[r]=0,y[n]=0<o?1:-1,R.push(y.x,y.y,y.z),I.push(e/l),I.push(1-t/h),x+=1}}for(let t=0;t<h;t++)for(let e=0;e<l;e++){var M=D+e+g*t,S=D+e+g*(t+1),T=D+(e+1)+g*(t+1),E=D+(e+1)+g*t;L.push(M,S,E),L.push(S,T,E),_+=6}A.addGroup(N,_,c),N+=_,D+=x}s("z","y","x",-1,-1,i,t,e,a,n,0),s("z","y","x",1,-1,i,t,-e,a,n,1),s("x","z","y",1,1,e,i,t,r,a,2),s("x","z","y",1,-1,e,i,-t,r,a,3),s("x","y","z",1,-1,e,t,i,r,n,4),s("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(L),this.setAttribute("position",new Xe(C,3)),this.setAttribute("normal",new Xe(R,3)),this.setAttribute("uv",new Xe(I,2))}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(e){var t={};for(const r in e){t[r]={};for(const n in e[r]){var i=e[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[r][n]=i.clone():Array.isArray(i)?t[r][n]=i.slice():t[r][n]=i}}return t}function pt(t){var i={};for(let e=0;e<t.length;e++){var r=Hi(t[e]);for(const n in r)i[n]=r[n]}return i}const Rd={clone:Hi,merge:pt};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends it{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Pd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&(void 0!==e.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){var t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){var i=this.uniforms[n].value;i&&i.isTexture?t.uniforms[n]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[n]={type:"m4",value:i.toArray()}:t.uniforms[n]={value:i}}0<Object.keys(this.defines).length&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;var r={};for(const a in this.extensions)!0===this.extensions[a]&&(r[a]=!0);return 0<Object.keys(r).length&&(t.extensions=r),t}}class Yc extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);var t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}class mt extends Yc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){e=.5*this.getFilmHeight()/e;this.fov=2*As*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){var e=Math.tan(.5*ys*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*As*Math.atan(Math.tan(.5*ys*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,a){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){var e=this.near;let t=e*Math.tan(.5*ys*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;var a,s=this.view,o=(null!==this.view&&this.view.enabled&&(o=s.fullWidth,a=s.fullHeight,n+=s.offsetX*r/o,t-=s.offsetY*i/a,r*=s.width/o,i*=s.height/a),this.filmOffset);0!==o&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){e=super.toJSON(e);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=90,Ci=1;class Id extends Ye{constructor(e,t,i){super(),this.type="CubeCamera",!0!==i.isWebGLCubeRenderTarget?console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."):(this.renderTarget=i,(i=new mt(Ai,Ci,e,t)).layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i),(i=new mt(Ai,Ci,e,t)).layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(-1,0,0)),this.add(i),(i=new mt(Ai,Ci,e,t)).layers=this.layers,i.up.set(0,0,1),i.lookAt(new P(0,1,0)),this.add(i),(i=new mt(Ai,Ci,e,t)).layers=this.layers,i.up.set(0,0,-1),i.lookAt(new P(0,-1,0)),this.add(i),(i=new mt(Ai,Ci,e,t)).layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(0,0,1)),this.add(i),(i=new mt(Ai,Ci,e,t)).layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(0,0,-1)),this.add(i))}update(e,t){null===this.parent&&this.updateMatrixWorld();var i=this.renderTarget,[r,n,a,s,o,l]=this.children,h=e.getRenderTarget(),c=e.toneMapping,u=e.xr.enabled,d=(e.toneMapping=$t,e.xr.enabled=!1,i.texture.generateMipmaps);i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,o),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=c,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class Kc extends nt{constructor(e,t,i,r,n,a,s,o,l,h){super(e=void 0!==e?e:[],t=void 0!==t?t:Ui,i,r,n,a,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fd extends Kt{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;e={width:e,height:e,depth:1},e=[e,e,e,e,e,e];this.texture=new Kc(e,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:$e}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;var i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ns(5,5,5),i=new En({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Un}),r=(i.uniforms.tEquirect.value=t,new Qe(r,i)),i=t.minFilter;return t.minFilter===li&&(t.minFilter=$e),new Id(1,10,this).update(e,r),t.minFilter=i,r.geometry.dispose(),r.material.dispose(),this}clear(t,i,r,n){var e=t.getRenderTarget();for(let e=0;e<6;e++)t.setRenderTarget(this,e),t.clear(i,r,n);t.setRenderTarget(e)}}const xa=new P,Nd=new P,zd=new Xt;class Qn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){i=xa.subVectors(i,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){var i=e.delta(xa),r=this.normal.dot(i);return 0===r?0===this.distanceToPoint(e.start)?t.copy(e.start):null:(r=-(e.start.dot(this.normal)+this.constant)/r)<0||1<r?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){var t=this.distanceToPoint(e.start),e=this.distanceToPoint(e.end);return t<0&&0<e||e<0&&0<t}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){t=t||zd.getNormalMatrix(e),e=this.coplanarPoint(xa).applyMatrix4(e),t=this.normal.applyMatrix3(t).normalize();return this.constant=-e.dot(t),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const Li=new Zi,cr=new P;class ro{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,n=new Qn,a=new Qn){this.planes=[e,t,i,r,n,a]}set(e,t,i,r,n,a){var s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(a),this}copy(t){var i=this.planes;for(let e=0;e<6;e++)i[e].copy(t.planes[e]);return this}setFromProjectionMatrix(e){var t=this.planes,e=e.elements,i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],m=e[12],f=e[13],g=e[14],e=e[15];return t[0].setComponents(a-i,h-s,p-c,e-m).normalize(),t[1].setComponents(a+i,h+s,p+c,e+m).normalize(),t[2].setComponents(a+r,h+o,p+u,e+f).normalize(),t[3].setComponents(a-r,h-o,p-u,e-f).normalize(),t[4].setComponents(a-n,h-l,p-d,e-g).normalize(),t[5].setComponents(a+n,h+l,p+d,e+g).normalize(),this}intersectsObject(e){var t=e.geometry;return null===t.boundingSphere&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){var t=this.planes,i=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){var i=this.planes;for(let e=0;e<6;e++){var r=i[e];if(cr.x=(0<r.normal.x?t.max:t.min).x,cr.y=(0<r.normal.y?t.max:t.min).y,cr.z=(0<r.normal.z?t.max:t.min).z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){var i=this.planes;for(let e=0;e<6;e++)if(i[e].distanceToPoint(t)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}function Zc(){let i=null,e=!1,r=null,n=null;function a(e,t){r(e,t),n=i.requestAnimationFrame(a)}return{start:function(){!0!==e&&null!==r&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(e){r=e},setContext:function(e){i=e}}}function Od(s,e){const o=e.isWebGL2,l=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),l.get(e)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);var t=l.get(e);t&&(s.deleteBuffer(t.buffer),l.delete(e))},update:function(e,t){var i,r,n,a;e.isGLBufferAttribute?(!(i=l.get(e))||i.version<e.version)&&l.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}):(e.isInterleavedBufferAttribute&&(e=e.data),void 0===(i=l.get(e))?l.set(e,function(e,t){var i=e.array,r=e.usage,n=s.createBuffer();s.bindBuffer(t,n),s.bufferData(t,i,r),e.onUploadCallback();let a;if(i instanceof Float32Array)a=5126;else if(i instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!o)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");a=5131}else a=5123;else if(i instanceof Int16Array)a=5122;else if(i instanceof Uint32Array)a=5125;else if(i instanceof Int32Array)a=5124;else if(i instanceof Int8Array)a=5120;else{if(!(i instanceof Uint8Array||i instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+i);a=5121}return{buffer:n,type:a,bytesPerElement:i.BYTES_PER_ELEMENT,version:e.version}}(e,t)):i.version<e.version&&(r=i.buffer,t=t,a=(n=e).array,n=n.updateRange,s.bindBuffer(t,r),-1===n.count?s.bufferSubData(t,0,a):(o?s.bufferSubData(t,n.offset*a.BYTES_PER_ELEMENT,a,n.offset,n.count):s.bufferSubData(t,n.offset*a.BYTES_PER_ELEMENT,a.subarray(n.offset,n.offset+n.count)),n.count=-1),i.version=e.version))}}}class Gn extends ct{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};var n=e/2,a=t/2,s=Math.floor(i),o=Math.floor(r),l=s+1,h=o+1,c=e/s,u=t/o,d=[],p=[],m=[],f=[];for(let t=0;t<h;t++){var g=t*u-a;for(let e=0;e<l;e++){var v=e*c-n;p.push(v,-g,0),m.push(0,0,1),f.push(e/s),f.push(1-t/o)}}for(let t=0;t<o;t++)for(let e=0;e<s;e++){var x=e+l*t,_=e+l*(t+1),y=e+1+l*(t+1),b=e+1+l*t;d.push(x,_,b),d.push(_,y,b)}this.setIndex(d),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(f,2))}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd="vec3 transformed = vec3( position );",jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qd=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Af=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,If=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Pp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ip=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:kd,alphamap_pars_fragment:Ud,alphatest_fragment:Bd,alphatest_pars_fragment:Vd,aomap_fragment:Gd,aomap_pars_fragment:Hd,begin_vertex:Wd,beginnormal_vertex:jd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,encodings_fragment:uf,encodings_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:vf,fog_vertex:_f,fog_pars_vertex:xf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:wf,lightmap_fragment:bf,lightmap_pars_fragment:Sf,lights_lambert_vertex:Tf,lights_pars_begin:Ef,lights_toon_fragment:Cf,lights_toon_pars_fragment:Lf,lights_phong_fragment:Rf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Df,lights_physical_pars_fragment:If,lights_fragment_begin:Ff,lights_fragment_maps:Nf,lights_fragment_end:zf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Bf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Hf,map_particle_pars_fragment:Wf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:Xf,morphcolor_vertex:qf,morphnormal_vertex:$f,morphtarget_pars_vertex:Yf,morphtarget_vertex:Kf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:ap,output_fragment:op,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:vp,shadowmask_pars_fragment:_p,skinbase_vertex:xp,skinning_pars_vertex:yp,skinning_vertex:Mp,skinnormal_vertex:wp,specularmap_fragment:bp,specularmap_pars_fragment:Sp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ep,transmission_fragment:Ap,transmission_pars_fragment:Cp,uv_pars_fragment:Lp,uv_pars_vertex:Rp,uv_vertex:Pp,uv2_pars_fragment:Dp,uv2_pars_vertex:Ip,uv2_vertex:Fp,worldpos_vertex:Np,background_vert:zp,background_frag:Op,cube_vert:kp,cube_frag:Up,depth_vert:Bp,depth_frag:Vp,distanceRGBA_vert:Gp,distanceRGBA_frag:Hp,equirect_vert:Wp,equirect_frag:jp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:$p,meshbasic_frag:Yp,meshlambert_vert:Kp,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:am,meshtoon_frag:om,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},oe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xt},uv2Transform:{value:new Xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}}},sn={basic:{uniforms:pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new de(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:pt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:pt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new de(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:pt([oe.points,oe.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:pt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:pt([oe.common,oe.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:pt([oe.sprite,oe.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:pt([oe.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:pt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:pt([oe.lights,oe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};function pm(n,a,i,s,e,r){const o=new de(0);let l=!0===e?0:1,h,c,u=null,d=0,p=null;function m(e,t){i.buffers.color.setClear(e.r,e.g,e.b,t,r)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),l=t,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(e){l=e,m(o,l)},render:function(e,t){let i=!1,r=!0===t.isScene?t.background:null;r&&r.isTexture&&(r=a.get(r)),t=(t=n.xr).getSession&&t.getSession(),null===(r=t&&"additive"===t.environmentBlendMode?null:r)?m(o,l):r&&r.isColor&&(m(r,1),i=!0),(n.autoClear||i)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),r&&(r.isCubeTexture||r.mapping===Or)?(void 0===c&&((c=new Qe(new Ns(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Hi(sn.cube.uniforms),vertexShader:sn.cube.vertexShader,fragmentShader:sn.cube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=r,c.material.uniforms.flipEnvMap.value=r.isCubeTexture&&!1===r.isRenderTargetTexture?-1:1,u===r&&d===r.version&&p===n.toneMapping||(c.material.needsUpdate=!0,u=r,d=r.version,p=n.toneMapping),c.layers.enableAll(),e.unshift(c,c.geometry,c.material,0,0,null)):r&&r.isTexture&&(void 0===h&&((h=new Qe(new Gn(2,2),new En({name:"BackgroundMaterial",uniforms:Hi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),!0===(h.material.uniforms.t2D.value=r).matrixAutoUpdate&&r.updateMatrix(),h.material.uniforms.uvTransform.value.copy(r.matrix),u===r&&d===r.version&&p===n.toneMapping||(h.material.needsUpdate=!0,u=r,d=r.version,p=n.toneMapping),h.layers.enableAll(),e.unshift(h,h.geometry,h.material,0,0,null))}}}function mm(_,y,b,w){const n=_.getParameter(34921),f=w.isWebGL2?null:y.get("OES_vertex_array_object"),g=w.isWebGL2||null!==f,v={},e=T(null);let x=e,M=!1;function S(e){w.isWebGL2?_.bindVertexArray(e):f.bindVertexArrayOES(e)}function a(e){w.isWebGL2?_.deleteVertexArray(e):f.deleteVertexArrayOES(e)}function T(e){var t=[],i=[],r=[];for(let e=0;e<n;e++)t[e]=0,i[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:r,object:e,attributes:{},index:null}}function E(){var i=x.newAttributes;for(let e=0,t=i.length;e<t;e++)i[e]=0}function A(e){L(e,0)}function L(e,t){var i=x.newAttributes,r=x.enabledAttributes,n=x.attributeDivisors;i[e]=1,0===r[e]&&(_.enableVertexAttribArray(e),r[e]=1),n[e]!==t&&((w.isWebGL2?_:y.get("ANGLE_instanced_arrays"))[w.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](e,t),n[e]=t)}function C(){var i=x.newAttributes,r=x.enabledAttributes;for(let e=0,t=r.length;e<t;e++)r[e]!==i[e]&&(_.disableVertexAttribArray(e),r[e]=0)}function P(e,t,i,r,n,a){!0!==w.isWebGL2||5124!==i&&5125!==i?_.vertexAttribPointer(e,t,i,r,n,a):_.vertexAttribIPointer(e,t,i,n,a)}function s(){t(),M=!0,x!==e&&S((x=e).object)}function t(){e.geometry=null,e.program=null,e.wireframe=!1}return{setup:function(e,t,i,r,n){let a=!1;if(g){var s=function(e,t,i){i=!0===i.wireframe;let r=v[e.id],n=(void 0===r&&(r={},v[e.id]=r),r[t.id]),a=(void 0===n&&(n={},r[t.id]=n),n[i]);return void 0===a&&(a=T(w.isWebGL2?_.createVertexArray():f.createVertexArrayOES()),n[i]=a),a}(r,i,t);if(x!==s&&S((x=s).object),a=function(t,e,i,r){var n=x.attributes,a=e.attributes;let s=0;var o=i.getAttributes();for(const h in o)if(0<=o[h].location){var l=n[h];let e=a[h];if(void 0===e&&("instanceMatrix"===h&&t.instanceMatrix&&(e=t.instanceMatrix),"instanceColor"===h)&&t.instanceColor&&(e=t.instanceColor),void 0===l||l.attribute!==e||e&&l.data!==e.data)return!0;s++}return x.attributesNum!==s||x.index!==r}(e,r,i,n)){var o=e;s=r;var l=i;var h=n;var c={},u=s.attributes;let t=0;var d=l.getAttributes();for(const m in d)if(0<=d[m].location){let e=u[m];void 0===e&&("instanceMatrix"===m&&o.instanceMatrix&&(e=o.instanceMatrix),"instanceColor"===m)&&o.instanceColor&&(e=o.instanceColor);var p={};(p.attribute=e)&&e.data&&(p.data=e.data),c[m]=p,t++}x.attributes=c,x.attributesNum=t,x.index=h}}else{s=!0===t.wireframe;x.geometry===r.id&&x.program===i.id&&x.wireframe===s||(x.geometry=r.id,x.program=i.id,x.wireframe=s,a=!0)}null!==n&&b.update(n,34963),(a||M)&&(M=!1,function(e,t,i,r){if(!1!==w.isWebGL2||!e.isInstancedMesh&&!r.isInstancedBufferGeometry||null!==y.get("ANGLE_instanced_arrays")){E();var n=r.attributes,a=i.getAttributes(),s=t.defaultAttributeValues;for(const x in a){var o=a[x];if(0<=o.location){let t=n[x];if(void 0!==(t=void 0===t&&("instanceMatrix"===x&&e.instanceMatrix&&(t=e.instanceMatrix),"instanceColor"===x)&&e.instanceColor?e.instanceColor:t)){var l=t.normalized,h=t.itemSize,c=b.get(t);if(void 0!==c){var u=c.buffer,d=c.type,p=c.bytesPerElement;if(t.isInterleavedBufferAttribute){var m=t.data,f=m.stride,g=t.offset;if(m.isInstancedInterleavedBuffer){for(let e=0;e<o.locationSize;e++)L(o.location+e,m.meshPerAttribute);!0!==e.isInstancedMesh&&void 0===r._maxInstanceCount&&(r._maxInstanceCount=m.meshPerAttribute*m.count)}else for(let e=0;e<o.locationSize;e++)A(o.location+e);_.bindBuffer(34962,u);for(let e=0;e<o.locationSize;e++)P(o.location+e,h/o.locationSize,d,l,f*p,(g+h/o.locationSize*e)*p)}else{if(t.isInstancedBufferAttribute){for(let e=0;e<o.locationSize;e++)L(o.location+e,t.meshPerAttribute);!0!==e.isInstancedMesh&&void 0===r._maxInstanceCount&&(r._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<o.locationSize;e++)A(o.location+e);_.bindBuffer(34962,u);for(let e=0;e<o.locationSize;e++)P(o.location+e,h/o.locationSize,d,l,h*p,h/o.locationSize*e*p)}}}else if(void 0!==s){var v=s[x];if(void 0!==v)switch(v.length){case 2:_.vertexAttrib2fv(o.location,v);break;case 3:_.vertexAttrib3fv(o.location,v);break;case 4:_.vertexAttrib4fv(o.location,v);break;default:_.vertexAttrib1fv(o.location,v)}}}}C()}}(e,t,i,r),null!==n)&&_.bindBuffer(34963,b.get(n).buffer)},reset:s,resetDefaultState:t,dispose:function(){s();for(const i in v){var e=v[i];for(const r in e){var t=e[r];for(const n in t)a(t[n].object),delete t[n];delete e[r]}delete v[i]}},releaseStatesOfGeometry:function(e){if(void 0!==v[e.id]){var t=v[e.id];for(const r in t){var i=t[r];for(const n in i)a(i[n].object),delete i[n];delete t[r]}delete v[e.id]}},releaseStatesOfProgram:function(e){for(const r in v){var t=v[r];if(void 0!==t[e.id]){var i=t[e.id];for(const n in i)a(i[n].object),delete i[n];delete t[e.id]}}},initAttributes:E,enableAttribute:A,disableUnusedAttributes:C}}function gm(a,s,o,e){const l=e.isWebGL2;let h;this.setMode=function(e){h=e},this.render=function(e,t){a.drawArrays(h,e,t),o.update(t,h,1)},this.renderInstances=function(i,r,n){if(0!==n){let e,t;if(l)e=a,t="drawArraysInstanced";else if(e=s.get("ANGLE_instanced_arrays"),t="drawArraysInstancedANGLE",null===e)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");e[t](h,i,r,n),o.update(r,h,n)}}}function vm(t,i,e){let r;function n(e){if("highp"===e){if(0<t.getShaderPrecisionFormat(35633,36338).precision&&0<t.getShaderPrecisionFormat(35632,36338).precision)return"highp";e="mediump"}return"mediump"===e&&0<t.getShaderPrecisionFormat(35633,36337).precision&&0<t.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp"}var a="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&t instanceof WebGL2ComputeRenderingContext;let s=void 0!==e.precision?e.precision:"highp";var o=n(s),o=(o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o),a||i.has("WEBGL_draw_buffers")),e=!0===e.logarithmicDepthBuffer,l=t.getParameter(34930),h=t.getParameter(35660),c=t.getParameter(3379),u=t.getParameter(34076),d=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),f=t.getParameter(36349),g=0<h,v=a||i.has("OES_texture_float"),x=g&&v,_=a?t.getParameter(36183):0;return{isWebGL2:a,drawBuffers:o,getMaxAnisotropy:function(){var e;return r=void 0===r?!0===i.has("EXT_texture_filter_anisotropic")?(e=i.get("EXT_texture_filter_anisotropic"),t.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT)):0:r},getMaxPrecision:n,precision:s,logarithmicDepthBuffer:e,maxTextures:l,maxVertexTextures:h,maxTextureSize:c,maxCubemapSize:u,maxAttributes:d,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:f,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:_}}function _m(l){const o=this;let h=null,c=0,u=!1,d=!1;const p=new Qn,m=new Xt,f={value:null,needsUpdate:!1};function g(){f.value!==h&&(f.value=h,f.needsUpdate=0<c),o.numPlanes=c,o.numIntersection=0}function v(i,e,r,t){var n=null!==i?i.length:0;let a=null;if(0!==n){if(a=f.value,!0!==t||null===a){var t=r+4*n,s=e.matrixWorldInverse;m.getNormalMatrix(s),(null===a||a.length<t)&&(a=new Float32Array(t));for(let e=0,t=r;e!==n;++e,t+=4)p.copy(i[e]).applyMatrix4(s,m),p.normal.toArray(a,t),a[t+3]=p.constant}f.value=a,f.needsUpdate=!0}return o.numPlanes=n,o.numIntersection=0,a}this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,i){var r=0!==e.length||t||0!==c||u;return u=t,h=v(e,i,0),c=e.length,r},this.beginShadows=function(){d=!0,v(null)},this.endShadows=function(){d=!1,g()},this.setState=function(e,t,i){var r=e.clippingPlanes,n=e.clipIntersection,a=e.clipShadows,e=l.get(e);if(!u||null===r||0===r.length||d&&!a)d?v(null):g();else{var a=d?0:c,s=4*a,o=e.clippingState||null;f.value=o,o=v(r,t,s,i);for(let e=0;e!==s;++e)o[e]=h[e];e.clippingState=o,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=a}}}function xm(i){let r=new WeakMap;function n(e,t){return t===Tr?e.mapping=Ui:t===Na&&(e.mapping=Bi),e}function a(e){var e=e.target,t=(e.removeEventListener("dispose",a),r.get(e));void 0!==t&&(r.delete(e),t.dispose())}return{get:function(e){if(e&&e.isTexture&&!1===e.isRenderTargetTexture){var t=e.mapping;if(t===Tr||t===Na)return r.has(e)?n(r.get(e).texture,e.mapping):(t=e.image)&&0<t.height?((t=new Fd(t.height/2)).fromEquirectangularTexture(i,e),r.set(e,t),e.addEventListener("dispose",a),n(t.texture,e.mapping)):null}return e},dispose:function(){r=new WeakMap}}}sn.physical={uniforms:pt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};class zs extends Yc{constructor(e=-1,t=1,i=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,a){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,a=i+e,s=r+t,o=r-t;null!==this.view&&this.view.enabled&&(i=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom,n+=i*this.view.offsetX,a=n+i*this.view.width,s-=e*this.view.offsetY,o=s-e*this.view.height),this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){e=super.toJSON(e);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}const Ni=4,yl=[.125,.215,.35,.446,.526,.582],ni=20,ya=new zs,Ml=new de;let Ma=null;const ei=(1+Math.sqrt(5))/2,Ri=1/ei,wl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ei,Ri),new P(0,ei,-Ri),new P(Ri,0,ei),new P(-Ri,0,ei),new P(ei,Ri,0),new P(-ei,Ri,0)];class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ma=this._renderer.getRenderTarget(),this._setSize(256);var n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),0<t&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Bi?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget();t=t||this._allocateTargets();return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){var e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Mn,format:Nt,encoding:Vn,depthBuffer:!1},r=Sl(e,t,i);return null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.width===e||(null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,i),i=this["_lodMax"],{sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(i),this._blurMaterial=Mm(i,e,t)),r}_compileMaterial(e){e=new Qe(this._lodPlanes[0],e);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,r){var n=new mt(90,1,e,i),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,i=o.toneMapping,l=(o.getClearColor(Ml),o.toneMapping=$t,o.autoClear=!1,new wn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})),h=new Qe(new Ns,l);let c=!1;var u=t.background;u?u.isColor&&(l.color.copy(u),t.background=null,c=!0):(l.color.copy(Ml),c=!0);for(let e=0;e<6;e++){var d=e%3,p=(0==d?(n.up.set(0,a[e],0),n.lookAt(s[e],0,0)):1==d?(n.up.set(0,0,a[e]),n.lookAt(0,s[e],0)):(n.up.set(0,a[e],0),n.lookAt(0,0,s[e])),this._cubeSize);hr(r,d*p,2<e?p:0,p,p),o.setRenderTarget(r),c&&o.render(h,n),o.render(t,n)}h.geometry.dispose(),h.material.dispose(),o.toneMapping=i,o.autoClear=e,t.background=u}_textureToCubeUV(e,t){var i=this._renderer,r=e.mapping===Ui||e.mapping===Bi,r=(r?(null===this._cubemapMaterial&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Tl()),r?this._cubemapMaterial:this._equirectMaterial),n=new Qe(this._lodPlanes[0],r),r=(r.uniforms.envMap.value=e,this._cubeSize);hr(t,0,0,3*r,2*r),i.setRenderTarget(t),i.render(n,ya)}_applyPMREM(t){var e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){var r=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),n=wl[(e-1)%wl.length];this._blur(t,e-1,e,r,n)}e.autoClear=i}_blur(e,t,i,r,n){var a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",n),this._halfBlur(a,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,a,s){var o=this._renderer,l=this._blurMaterial,h=("latitudinal"!==a&&"longitudinal"!==a&&console.error("blur direction must be either latitudinal or longitudinal!"),new Qe(this._lodPlanes[r],l)),l=l.uniforms,c=this._sizeLods[i]-1,c=isFinite(n)?Math.PI/(2*c):2*Math.PI/(2*ni-1),u=n/c,d=isFinite(n)?1+Math.floor(3*u):ni,p=(d>ni&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to `+ni),[]);let m=0;for(let e=0;e<ni;++e){var f=e/u,f=Math.exp(-f*f/2);p.push(f),0===e?m+=f:e<d&&(m+=2*f)}for(let e=0;e<p.length;e++)p[e]=p[e]/m;l.envMap.value=e.texture,l.samples.value=d,l.weights.value=p,l.latitudinal.value="latitudinal"===a,s&&(l.poleAxis.value=s);n=this._lodMax,l.dTheta.value=c,l.mipInt.value=n-i,e=this._sizeLods[r];hr(t,3*e*(r>n-Ni?r-n+Ni:0),4*(this._cubeSize-e),3*e,2*e),o.setRenderTarget(t),o.render(h,ya)}}function ym(i){var r=[],n=[],a=[];let s=i;var e=i-Ni+1+yl.length;for(let t=0;t<e;t++){var o=Math.pow(2,s);n.push(o);let e=1/o;t>i-Ni?e=yl[t-i+Ni-1]:0===t&&(e=0),a.push(e);var o=1/(o-2),l=-o,o=1+o,h=[l,l,o,l,o,o,l,l,o,o,l,o],c=new Float32Array(108),u=new Float32Array(72),d=new Float32Array(36);for(let e=0;e<6;e++){var p=e%3*2/3-1,m=2<e?0:-1,p=(c.set([p,m,0,p+2/3,m,0,p+2/3,1+m,0,p,m,0,p+2/3,1+m,0,p,1+m,0],18*e),u.set(h,12*e),[e,e,e,e,e,e]);d.set(p,6*e)}l=new ct;l.setAttribute("position",new wt(c,3)),l.setAttribute("uv",new wt(u,2)),l.setAttribute("faceIndex",new wt(d,1)),r.push(l),s>Ni&&s--}return{lodPlanes:r,sizeLods:n,sigmas:a}}function Sl(e,t,i){e=new Kt(e,t,i);return e.texture.mapping=Or,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function hr(e,t,i,r,n){e.viewport.set(t,i,r,n),e.scissor.set(t,i,r,n)}function Mm(e,t,i){var r=new Float32Array(ni),n=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:e+".0"},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Tl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function El(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wm(n){let a=new WeakMap,s=null;function o(e){var e=e.target,t=(e.removeEventListener("dispose",o),a.get(e));void 0!==t&&(a.delete(e),t.dispose())}return{get:function(e){if(e&&e.isTexture){var t,i=e.mapping,r=i===Tr||i===Na,i=i===Ui||i===Bi;if(r||i)return e.isRenderTargetTexture&&!0===e.needsPMREMUpdate?(e.needsPMREMUpdate=!1,t=a.get(e),null===s&&(s=new bl(n)),t=r?s.fromEquirectangular(e,t):s.fromCubemap(e,t),a.set(e,t),t.texture):a.has(e)?a.get(e).texture:(t=e.image,r&&t&&0<t.height||i&&t&&function(t){let i=0;for(let e=0;e<6;e++)void 0!==t[e]&&i++;return 6===i}(t)?(null===s&&(s=new bl(n)),i=r?s.fromEquirectangular(e):s.fromCubemap(e),a.set(e,i),e.addEventListener("dispose",o),i.texture):null)}return e},dispose:function(){a=new WeakMap,null!==s&&(s.dispose(),s=null)}}}function bm(i){const r={};function n(e){if(void 0!==r[e])return r[e];let t;switch(e){case"WEBGL_depth_texture":t=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":t=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":t=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":t=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:t=i.getExtension(e)}return r[e]=t}return{has:function(e){return null!==n(e)},init:function(e){e.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(e){var t=n(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function Sm(e,d,r,n){const a={},p=new WeakMap;function s(e){var t=e.target;null!==t.index&&d.remove(t.index);for(const i in t.attributes)d.remove(t.attributes[i]);t.removeEventListener("dispose",s),delete a[t.id];e=p.get(t);e&&(d.remove(e),p.delete(t)),n.releaseStatesOfGeometry(t),!0===t.isInstancedBufferGeometry&&delete t._maxInstanceCount,r.memory.geometries--}function o(e){var i=[],r=e.index,t=e.attributes.position;let n=0;if(null!==r){var a=r.array;n=r.version;for(let e=0,t=a.length;e<t;e+=3){var s=a[e+0],o=a[e+1],l=a[e+2];i.push(s,o,o,l,l,s)}}else{r=t.array;n=t.version;for(let e=0,t=r.length/3-1;e<t;e+=3){var h=e+0,c=e+1,u=e+2;i.push(h,c,c,u,u,h)}}t=new(Gc(i)?$c:so)(i,1),t.version=n,r=p.get(e);r&&d.remove(r),p.set(e,t)}return{get:function(e,t){return!0!==a[t.id]&&(t.addEventListener("dispose",s),a[t.id]=!0,r.memory.geometries++),t},update:function(e){var t=e.attributes;for(const n in t)d.update(t[n],34962);var i=e.morphAttributes;for(const a in i){var r=i[a];for(let e=0,t=r.length;e<t;e++)d.update(r[e],34962)}},getWireframeAttribute:function(e){var t,i=p.get(e);return(!i||null!==(t=e.index)&&i.version<t.version)&&o(e),p.get(e)}}}function Tm(a,s,o,e){const l=e.isWebGL2;let h;let c,u;this.setMode=function(e){h=e},this.setIndex=function(e){c=e.type,u=e.bytesPerElement},this.render=function(e,t){a.drawElements(h,t,c,e*u),o.update(t,h,1)},this.renderInstances=function(i,r,n){if(0!==n){let e,t;if(l)e=a,t="drawElementsInstanced";else if(e=s.get("ANGLE_instanced_arrays"),t="drawElementsInstancedANGLE",null===e)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");e[t](h,r,c,i*u,n),o.update(r,h,n)}}}function Em(e){const r={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:r,programs:null,autoReset:!0,reset:function(){r.frame++,r.calls=0,r.triangles=0,r.points=0,r.lines=0},update:function(e,t,i){switch(r.calls++,t){case 4:r.triangles+=i*(e/3);break;case 1:r.lines+=i*(e/2);break;case 3:r.lines+=i*(e-1);break;case 2:r.lines+=i*e;break;case 0:r.points+=i*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t)}}}}function Am(e,t){return e[0]-t[0]}function Cm(e,t){return Math.abs(t[1])-Math.abs(e[1])}function wa(e,t){let i=1;t=(t.isInterleavedBufferAttribute?t.data:t).array;t instanceof Int8Array?i=127:t instanceof Int16Array?i=32767:t instanceof Int32Array?i=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",t),e.divideScalar(i)}function Lm(A,L,i){const C={},P=new Float32Array(8),R=new WeakMap,I=new Ue,D=[];for(let e=0;e<8;e++)D[e]=[e,0];return{update:function(e,a,t,r){var s=e.morphTargetInfluences;if(!0===L.isWebGL2){var e=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,o=void 0!==e?e.length:0;let n=R.get(a);if(void 0===n||n.count!==o){let e=function(){E.dispose(),R.delete(a),a.removeEventListener("dispose",e)};e;void 0!==n&&n.texture.dispose();var l=void 0!==a.morphAttributes.position,h=void 0!==a.morphAttributes.normal,c=void 0!==a.morphAttributes.color,u=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let t=!0==c?3:!0==h?2:!0==l?1:0,i=a.attributes.position.count*t,r=1;i>L.maxTextureSize&&(r=Math.ceil(i/L.maxTextureSize),i=L.maxTextureSize);const T=new Float32Array(i*r*4*o),E=new Xc(T,i,r,o);E.type=Ft,E.needsUpdate=!0;var m=4*t;for(let e=0;e<o;e++){var f=u[e],g=d[e],v=p[e],x=i*r*4*e;for(let e=0;e<f.count;e++){var _=e*m;!0==l&&(I.fromBufferAttribute(f,e),!0===f.normalized&&wa(I,f),T[x+_]=I.x,T[x+_+1]=I.y,T[x+_+2]=I.z,T[x+_+3]=0),!0==h&&(I.fromBufferAttribute(g,e),!0===g.normalized&&wa(I,g),T[x+_+4]=I.x,T[x+_+5]=I.y,T[x+_+6]=I.z,T[x+_+7]=0),!0==c&&(I.fromBufferAttribute(v,e),!0===v.normalized&&wa(I,v),T[x+_+8]=I.x,T[x+_+9]=I.y,T[x+_+10]=I.z,T[x+_+11]=4===v.itemSize?I.w:1)}}n={count:o,texture:E,size:new ve(i,r)},R.set(a,n),a.addEventListener("dispose",e)}let t=0;for(let e=0;e<s.length;e++)t+=s[e];e=a.morphTargetsRelative?1:1-t;r.getUniforms().setValue(A,"morphTargetBaseInfluence",e),r.getUniforms().setValue(A,"morphTargetInfluences",s),r.getUniforms().setValue(A,"morphTargetsTexture",n.texture,i),r.getUniforms().setValue(A,"morphTargetsTextureSize",n.size)}else{var n=void 0===s?0:s.length;let t=C[a.id];if(void 0===t||t.length!==n){t=[];for(let e=0;e<n;e++)t[e]=[e,0];C[a.id]=t}for(let e=0;e<n;e++){var y=t[e];y[0]=e,y[1]=s[e]}t.sort(Cm);for(let e=0;e<8;e++)e<n&&t[e][1]?(D[e][0]=t[e][0],D[e][1]=t[e][1]):(D[e][0]=Number.MAX_SAFE_INTEGER,D[e][1]=0);D.sort(Am);var b=a.morphAttributes.position,w=a.morphAttributes.normal;let i=0;for(let e=0;e<8;e++){var M=D[e],S=M[0],M=M[1];S!==Number.MAX_SAFE_INTEGER&&M?(b&&a.getAttribute("morphTarget"+e)!==b[S]&&a.setAttribute("morphTarget"+e,b[S]),w&&a.getAttribute("morphNormal"+e)!==w[S]&&a.setAttribute("morphNormal"+e,w[S]),P[e]=M,i+=M):(b&&!0===a.hasAttribute("morphTarget"+e)&&a.deleteAttribute("morphTarget"+e),w&&!0===a.hasAttribute("morphNormal"+e)&&a.deleteAttribute("morphNormal"+e),P[e]=0)}e=a.morphTargetsRelative?1:1-i;r.getUniforms().setValue(A,"morphTargetBaseInfluence",e),r.getUniforms().setValue(A,"morphTargetInfluences",P)}}}}function Rm(e,r,n,a){let s=new WeakMap;function o(e){e=e.target;e.removeEventListener("dispose",o),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor)}return{update:function(e){var t=a.render.frame,i=e.geometry,i=r.get(e,i);return s.get(i)!==t&&(r.update(i),s.set(i,t)),e.isInstancedMesh&&(!1===e.hasEventListener("dispose",o)&&e.addEventListener("dispose",o),n.update(e.instanceMatrix,34962),null!==e.instanceColor)&&n.update(e.instanceColor,34962),i},dispose:function(){s=new WeakMap}}}const Jc=new nt,Qc=new Xc,eh=new xd,th=new Kc,Al=[],Cl=[],Ll=new Float32Array(16),Rl=new Float32Array(9),Pl=new Float32Array(4);function Ji(i,r,n){var e=i[0];if(e<=0||0<e)return i;var t=r*n;let a=Al[t];if(void 0===a&&(a=new Float32Array(t),Al[t]=a),0!==r){e.toArray(a,0);for(let e=1,t=0;e!==r;++e)t+=n,i[e].toArray(a,t)}return a}function bt(i,r){if(i.length!==r.length)return!1;for(let e=0,t=i.length;e<t;e++)if(i[e]!==r[e])return!1;return!0}function St(i,r){for(let e=0,t=r.length;e<t;e++)i[e]=r[e]}function kr(t,i){let r=Cl[i];void 0===r&&(r=new Int32Array(i),Cl[i]=r);for(let e=0;e!==i;++e)r[e]=t.allocateTextureUnit();return r}function Pm(e,t){var i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Dm(e,t){var i=this.cache;void 0!==t.x?i[0]===t.x&&i[1]===t.y||(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y):bt(i,t)||(e.uniform2fv(this.addr,t),St(i,t))}function Im(e,t){var i=this.cache;void 0!==t.x?i[0]===t.x&&i[1]===t.y&&i[2]===t.z||(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z):void 0!==t.r?i[0]===t.r&&i[1]===t.g&&i[2]===t.b||(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b):bt(i,t)||(e.uniform3fv(this.addr,t),St(i,t))}function Fm(e,t){var i=this.cache;void 0!==t.x?i[0]===t.x&&i[1]===t.y&&i[2]===t.z&&i[3]===t.w||(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w):bt(i,t)||(e.uniform4fv(this.addr,t),St(i,t))}function Nm(e,t){var i=this.cache,r=t.elements;void 0===r?bt(i,t)||(e.uniformMatrix2fv(this.addr,!1,t),St(i,t)):bt(i,r)||(Pl.set(r),e.uniformMatrix2fv(this.addr,!1,Pl),St(i,r))}function zm(e,t){var i=this.cache,r=t.elements;void 0===r?bt(i,t)||(e.uniformMatrix3fv(this.addr,!1,t),St(i,t)):bt(i,r)||(Rl.set(r),e.uniformMatrix3fv(this.addr,!1,Rl),St(i,r))}function Om(e,t){var i=this.cache,r=t.elements;void 0===r?bt(i,t)||(e.uniformMatrix4fv(this.addr,!1,t),St(i,t)):bt(i,r)||(Ll.set(r),e.uniformMatrix4fv(this.addr,!1,Ll),St(i,r))}function km(e,t){var i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Um(e,t){var i=this.cache;bt(i,t)||(e.uniform2iv(this.addr,t),St(i,t))}function Bm(e,t){var i=this.cache;bt(i,t)||(e.uniform3iv(this.addr,t),St(i,t))}function Vm(e,t){var i=this.cache;bt(i,t)||(e.uniform4iv(this.addr,t),St(i,t))}function Gm(e,t){var i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Hm(e,t){var i=this.cache;bt(i,t)||(e.uniform2uiv(this.addr,t),St(i,t))}function Wm(e,t){var i=this.cache;bt(i,t)||(e.uniform3uiv(this.addr,t),St(i,t))}function jm(e,t){var i=this.cache;bt(i,t)||(e.uniform4uiv(this.addr,t),St(i,t))}function Xm(e,t,i){var r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture2D(t||Jc,n)}function qm(e,t,i){var r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(t||eh,n)}function $m(e,t,i){var r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(t||th,n)}function Ym(e,t,i){var r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(t||Qc,n)}function Km(e){switch(e){case 5126:return Pm;case 35664:return Dm;case 35665:return Im;case 35666:return Fm;case 35674:return Nm;case 35675:return zm;case 35676:return Om;case 5124:case 35670:return km;case 35667:case 35671:return Um;case 35668:case 35672:return Bm;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return Hm;case 36295:return Wm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Ym}}function Zm(e,t){e.uniform1fv(this.addr,t)}function Jm(e,t){t=Ji(t,this.size,2);e.uniform2fv(this.addr,t)}function Qm(e,t){t=Ji(t,this.size,3);e.uniform3fv(this.addr,t)}function eg(e,t){t=Ji(t,this.size,4);e.uniform4fv(this.addr,t)}function tg(e,t){t=Ji(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function ng(e,t){t=Ji(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function ig(e,t){t=Ji(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function sg(e,t){e.uniform1iv(this.addr,t)}function rg(e,t){e.uniform2iv(this.addr,t)}function ag(e,t){e.uniform3iv(this.addr,t)}function og(e,t){e.uniform4iv(this.addr,t)}function lg(e,t){e.uniform1uiv(this.addr,t)}function cg(e,t){e.uniform2uiv(this.addr,t)}function hg(e,t){e.uniform3uiv(this.addr,t)}function ug(e,t){e.uniform4uiv(this.addr,t)}function dg(e,t,i){var r=t.length,n=kr(i,r);e.uniform1iv(this.addr,n);for(let e=0;e!==r;++e)i.setTexture2D(t[e]||Jc,n[e])}function fg(e,t,i){var r=t.length,n=kr(i,r);e.uniform1iv(this.addr,n);for(let e=0;e!==r;++e)i.setTexture3D(t[e]||eh,n[e])}function pg(e,t,i){var r=t.length,n=kr(i,r);e.uniform1iv(this.addr,n);for(let e=0;e!==r;++e)i.setTextureCube(t[e]||th,n[e])}function mg(e,t,i){var r=t.length,n=kr(i,r);e.uniform1iv(this.addr,n);for(let e=0;e!==r;++e)i.setTexture2DArray(t[e]||Qc,n[e])}function gg(e){switch(e){case 5126:return Zm;case 35664:return Jm;case 35665:return Qm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class vg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Km(t.type)}}class _g{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=gg(t.type)}}class xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(i,r,n){var a=this.seq;for(let e=0,t=a.length;e!==t;++e){var s=a[e];s.setValue(i,r[s.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function Dl(e,t){e.seq.push(t),e.map[t.id]=t}function yg(e,i,r){var n=e.name,a=n.length;for(ba.lastIndex=0;;){var s=ba.exec(n),o=ba.lastIndex;let t=s[1];var l="]"===s[2],s=s[3];if(l&&(t|=0),void 0===s||"["===s&&o+2===a){Dl(r,new(void 0===s?vg:_g)(t,e,i));break}{let e=r.map[t];void 0===e&&Dl(r,e=new xg(t)),r=e}}}class _r{constructor(t,i){this.seq=[],this.map={};var r=t.getProgramParameter(i,35718);for(let e=0;e<r;++e){var n=t.getActiveUniform(i,e);yg(n,t.getUniformLocation(i,n.name),this)}}setValue(e,t,i,r){t=this.map[t];void 0!==t&&t.setValue(e,i,r)}setOptional(e,t,i){t=t[i];void 0!==t&&this.setValue(e,i,t)}static upload(i,r,n,a){for(let e=0,t=r.length;e!==t;++e){var s=r[e],o=n[s.id];!1!==o.needsUpdate&&s.setValue(i,o.value,a)}}static seqWithValue(i,r){var n=[];for(let e=0,t=i.length;e!==t;++e){var a=i[e];a.id in r&&n.push(a)}return n}}function Il(e,t,i){t=e.createShader(t);return e.shaderSource(t,i),e.compileShader(t),t}let Mg=0;function wg(t,i){var r=t.split(`
`),n=[],t=Math.max(i-6,0),a=Math.min(i+6,r.length);for(let e=t;e<a;e++){var s=e+1;n.push(`${s===i?">":" "} ${s}: `+r[e])}return n.join(`
`)}function bg(e){switch(e){case Vn:return["Linear","( value )"];case Pe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Fl(e,t,i){var r=e.getShaderParameter(t,35713),n=e.getShaderInfoLog(t).trim();return r&&""===n?"":(r=/ERROR: 0:(\d+)/.exec(n))?(r=parseInt(r[1]),i.toUpperCase()+`

`+n+`

`+wg(e.getShaderSource(t),r)):n}function Sg(e,t){t=bg(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tg(e,t){let i;switch(t){case Dc:i="Linear";break;case Ic:i="Reinhard";break;case Fc:i="OptimizedCineon";break;case Nc:i="ACESFilmic";break;case Nu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Eg(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||"physical"===e.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function Ag(e){var t=[];for(const r in e){var i=e[r];!1!==i&&t.push("#define "+r+" "+i)}return t.join(`
`)}function Cg(i,r){var n={},e=i.getProgramParameter(r,35721);for(let t=0;t<e;t++){var a=i.getActiveAttrib(r,t),s=a.name;let e=1;35674===a.type&&(e=2),35675===a.type&&(e=3),35676===a.type&&(e=4),n[s]={type:a.type,location:i.getAttribLocation(r,s),locationSize:e}}return n}function xs(e){return""!==e}function Nl(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(e){return e.replace(Lg,Rg)}function Rg(e,t){var i=Ae[t];if(void 0===i)throw new Error("Can not resolve #include <"+t+">");return Va(i)}const Pg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(e){return e.replace(Dg,nh).replace(Pg,Ig)}function Ig(e,t,i,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),nh(e,t,i,r)}function nh(e,t,i,r){let n="";for(let e=parseInt(t);e<parseInt(i);e++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return n}function kl(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function Fg(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===_s&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ui:case Bi:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV"}return t}function zg(e){let t="ENVMAP_MODE_REFLECTION";return t=e.envMap&&e.envMapMode===Bi?"ENVMAP_MODE_REFRACTION":t}function Og(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case zr:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD"}return t}function kg(e){var t,e=e.envMapCubeUVHeight;return null===e?null:(t=Math.log2(e)-2,e=1/e,{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:e,maxMip:t})}function Ug(i,e,t,r){const n=i.getContext(),a=t.defines;var s=t.vertexShader,o=t.fragmentShader;const l=Fg(t),h=Ng(t),c=zg(t),u=Og(t),d=kg(t),p=t.isWebGL2?"":Eg(t),m=Ag(a),f=n.createProgram();let g,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(0<(g=[m].filter(xs).join(`
`)).length&&(g+=`
`),0<(v=[p,m].filter(xs).join(`
`)).length&&(v+=`
`)):(g=[kl(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&!1===t.flatShading?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",0<t.morphTargetsCount&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",0<t.morphTargetsCount&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",0<t.morphTargetsCount&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),v=[p,kl(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?Ae.tonemapping_pars_fragment:"",t.toneMapping!==$t?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Sg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),s=zl(Nl(Va(s),t),t),o=zl(Nl(Va(o),t),t),s=Ol(s),o=Ol(o),t.isWebGL2&&!0!==t.isRawShaderMaterial&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===Tn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);s=x+g+s,o=x+v+o,s=Il(n,35633,s),o=Il(n,35632,o);if(n.attachShader(f,s),n.attachShader(f,o),void 0!==t.index0AttributeName?n.bindAttribLocation(f,0,t.index0AttributeName):!0===t.morphTargets&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),i.debug.checkShaderErrors){var _,y,i=n.getProgramInfoLog(f).trim(),b=n.getShaderInfoLog(s).trim(),w=n.getShaderInfoLog(o).trim();let e=!0,t=!0;!1===n.getProgramParameter(f,35714)?(e=!1,_=Fl(n,s,"vertex"),y=Fl(n,o,"fragment"),console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,35715)+`

Program Info Log: `+i+`
`+_+`
`+y)):""!==i?console.warn("THREE.WebGLProgram: Program Info Log:",i):""!==b&&""!==w||(t=!1),t&&(this.diagnostics={runnable:e,programLog:i,vertexShader:{log:b,prefix:g},fragmentShader:{log:w,prefix:v}})}n.deleteShader(s),n.deleteShader(o);let M;this.getUniforms=function(){return M=void 0===M?new _r(n,f):M};let S;return this.getAttributes=function(){return S=void 0===S?Cg(n,f):S},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=s,this.fragmentShader=o,this}let Bg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){var t=e.vertexShader,i=e.fragmentShader,t=this._getShaderStage(t),i=this._getShaderStage(i),e=this._getShaderCacheForMaterial(e);return!1===e.has(t)&&(e.add(t),t.usedTimes++),!1===e.has(i)&&(e.add(i),i.usedTimes++),this}remove(e){for(const t of this.materialCache.get(e))t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){var t=this.materialCache;return!1===t.has(e)&&t.set(e,new Set),t.get(e)}_getShaderStage(e){var t,i=this.shaderCache;return!1===i.has(e)&&(t=new Gg(e),i.set(e,t)),i.get(e)}}class Gg{constructor(e){this.id=Bg++,this.code=e,this.usedTimes=0}}function Hg(_,y,b,w,M,t,S){const a=new qc,T=new Vg,s=[],E=M.isWebGL2,A=M.logarithmicDepthBuffer,L=M.vertexTextures;let C=M.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(e,t,i,r,n){var a=r.fog,s=n.geometry,r=e.isMeshStandardMaterial?r.environment:null,o=(r=(e.isMeshStandardMaterial?b:y).get(e.envMap||r))&&r.mapping===Or?r.image.height:null,l=P[e.type];null!==e.precision&&(C=M.getMaxPrecision(e.precision))!==e.precision&&console.warn("THREE.WebGLProgram.getParameters:",e.precision,"not supported, using",C,"instead.");var h=void 0!==(h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color)?h.length:0;let c=0;void 0!==s.morphAttributes.position&&(c=1),void 0!==s.morphAttributes.normal&&(c=2),void 0!==s.morphAttributes.color&&(c=3);let u,d,p,m;l?(f=sn[l],u=f.vertexShader,d=f.fragmentShader):(u=e.vertexShader,d=e.fragmentShader,T.update(e),p=T.getVertexShaderID(e),m=T.getFragmentShaderID(e));var f=_.getRenderTarget(),g=0<e.alphaTest,v=0<e.clearcoat,x=0<e.iridescence;return{isWebGL2:E,shaderID:l,shaderName:e.type,vertexShader:u,fragmentShader:d,defines:e.defines,customVertexShaderID:p,customFragmentShaderID:m,isRawShaderMaterial:!0===e.isRawShaderMaterial,glslVersion:e.glslVersion,precision:C,instancing:!0===n.isInstancedMesh,instancingColor:!0===n.isInstancedMesh&&null!==n.instanceColor,supportsVertexTextures:L,outputEncoding:null===f?_.outputEncoding:!0===f.isXRRenderTarget?f.texture.encoding:Vn,map:!!e.map,matcap:!!e.matcap,envMap:!!r,envMapMode:r&&r.mapping,envMapCubeUVHeight:o,lightMap:!!e.lightMap,aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,objectSpaceNormalMap:e.normalMapType===td,tangentSpaceNormalMap:e.normalMapType===ci,decodeVideoTexture:!!e.map&&!0===e.map.isVideoTexture&&e.map.encoding===Pe,clearcoat:v,clearcoatMap:v&&!!e.clearcoatMap,clearcoatRoughnessMap:v&&!!e.clearcoatRoughnessMap,clearcoatNormalMap:v&&!!e.clearcoatNormalMap,iridescence:x,iridescenceMap:x&&!!e.iridescenceMap,iridescenceThicknessMap:x&&!!e.iridescenceThicknessMap,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,specularIntensityMap:!!e.specularIntensityMap,specularColorMap:!!e.specularColorMap,opaque:!1===e.transparent&&e.blending===zi,alphaMap:!!e.alphaMap,alphaTest:g,gradientMap:!!e.gradientMap,sheen:0<e.sheen,sheenColorMap:!!e.sheenColorMap,sheenRoughnessMap:!!e.sheenRoughnessMap,transmission:0<e.transmission,transmissionMap:!!e.transmissionMap,thicknessMap:!!e.thicknessMap,combine:e.combine,vertexTangents:!!e.normalMap&&!!s.attributes.tangent,vertexColors:e.vertexColors,vertexAlphas:!0===e.vertexColors&&!!s.attributes.color&&4===s.attributes.color.itemSize,vertexUvs:!!(e.map||e.bumpMap||e.normalMap||e.specularMap||e.alphaMap||e.emissiveMap||e.roughnessMap||e.metalnessMap||e.clearcoatMap||e.clearcoatRoughnessMap||e.clearcoatNormalMap||e.iridescenceMap||e.iridescenceThicknessMap||e.displacementMap||e.transmissionMap||e.thicknessMap||e.specularIntensityMap||e.specularColorMap||e.sheenColorMap||e.sheenRoughnessMap),uvsVertexOnly:!(e.map||e.bumpMap||e.normalMap||e.specularMap||e.alphaMap||e.emissiveMap||e.roughnessMap||e.metalnessMap||e.clearcoatNormalMap||e.iridescenceMap||e.iridescenceThicknessMap||0<e.transmission||e.transmissionMap||e.thicknessMap||e.specularIntensityMap||e.specularColorMap||0<e.sheen||e.sheenColorMap||e.sheenRoughnessMap||!e.displacementMap),fog:!!a,useFog:!0===e.fog,fogExp2:a&&a.isFogExp2,flatShading:!!e.flatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:A,skinning:!0===n.isSkinnedMesh,morphTargets:void 0!==s.morphAttributes.position,morphNormals:void 0!==s.morphAttributes.normal,morphColors:void 0!==s.morphAttributes.color,morphTargetsCount:h,morphTextureStride:c,numDirLights:t.directional.length,numPointLights:t.point.length,numSpotLights:t.spot.length,numRectAreaLights:t.rectArea.length,numHemiLights:t.hemi.length,numDirLightShadows:t.directionalShadowMap.length,numPointLightShadows:t.pointShadowMap.length,numSpotLightShadows:t.spotShadowMap.length,numClippingPlanes:S.numPlanes,numClipIntersection:S.numIntersection,dithering:e.dithering,shadowMapEnabled:_.shadowMap.enabled&&0<i.length,shadowMapType:_.shadowMap.type,toneMapping:e.toneMapped?_.toneMapping:$t,physicallyCorrectLights:_.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,doubleSided:e.side===cn,flipSided:e.side===qt,useDepthPacking:!!e.depthPacking,depthPacking:e.depthPacking||0,index0AttributeName:e.index0AttributeName,extensionDerivatives:e.extensions&&e.extensions.derivatives,extensionFragDepth:e.extensions&&e.extensions.fragDepth,extensionDrawBuffers:e.extensions&&e.extensions.drawBuffers,extensionShaderTextureLOD:e.extensions&&e.extensions.shaderTextureLOD,rendererExtensionFragDepth:E||w.has("EXT_frag_depth"),rendererExtensionDrawBuffers:E||w.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:E||w.has("EXT_shader_texture_lod"),customProgramCacheKey:e.customProgramCacheKey()}},getProgramCacheKey:function(e){var t,i,r=[];if(e.shaderID?r.push(e.shaderID):(r.push(e.customVertexShaderID),r.push(e.customFragmentShaderID)),void 0!==e.defines)for(const n in e.defines)r.push(n),r.push(e.defines[n]);return!1===e.isRawShaderMaterial&&((t=r).push((i=e).precision),t.push(i.outputEncoding),t.push(i.envMapMode),t.push(i.envMapCubeUVHeight),t.push(i.combine),t.push(i.vertexUvs),t.push(i.fogExp2),t.push(i.sizeAttenuation),t.push(i.morphTargetsCount),t.push(i.morphAttributeCount),t.push(i.numDirLights),t.push(i.numPointLights),t.push(i.numSpotLights),t.push(i.numHemiLights),t.push(i.numRectAreaLights),t.push(i.numDirLightShadows),t.push(i.numPointLightShadows),t.push(i.numSpotLightShadows),t.push(i.shadowMapType),t.push(i.toneMapping),t.push(i.numClippingPlanes),t.push(i.numClipIntersection),t.push(i.depthPacking),t=r,i=e,a.disableAll(),i.isWebGL2&&a.enable(0),i.supportsVertexTextures&&a.enable(1),i.instancing&&a.enable(2),i.instancingColor&&a.enable(3),i.map&&a.enable(4),i.matcap&&a.enable(5),i.envMap&&a.enable(6),i.lightMap&&a.enable(7),i.aoMap&&a.enable(8),i.emissiveMap&&a.enable(9),i.bumpMap&&a.enable(10),i.normalMap&&a.enable(11),i.objectSpaceNormalMap&&a.enable(12),i.tangentSpaceNormalMap&&a.enable(13),i.clearcoat&&a.enable(14),i.clearcoatMap&&a.enable(15),i.clearcoatRoughnessMap&&a.enable(16),i.clearcoatNormalMap&&a.enable(17),i.iridescence&&a.enable(18),i.iridescenceMap&&a.enable(19),i.iridescenceThicknessMap&&a.enable(20),i.displacementMap&&a.enable(21),i.specularMap&&a.enable(22),i.roughnessMap&&a.enable(23),i.metalnessMap&&a.enable(24),i.gradientMap&&a.enable(25),i.alphaMap&&a.enable(26),i.alphaTest&&a.enable(27),i.vertexColors&&a.enable(28),i.vertexAlphas&&a.enable(29),i.vertexUvs&&a.enable(30),i.vertexTangents&&a.enable(31),i.uvsVertexOnly&&a.enable(32),i.fog&&a.enable(33),t.push(a.mask),a.disableAll(),i.useFog&&a.enable(0),i.flatShading&&a.enable(1),i.logarithmicDepthBuffer&&a.enable(2),i.skinning&&a.enable(3),i.morphTargets&&a.enable(4),i.morphNormals&&a.enable(5),i.morphColors&&a.enable(6),i.premultipliedAlpha&&a.enable(7),i.shadowMapEnabled&&a.enable(8),i.physicallyCorrectLights&&a.enable(9),i.doubleSided&&a.enable(10),i.flipSided&&a.enable(11),i.useDepthPacking&&a.enable(12),i.dithering&&a.enable(13),i.specularIntensityMap&&a.enable(14),i.specularColorMap&&a.enable(15),i.transmission&&a.enable(16),i.transmissionMap&&a.enable(17),i.thicknessMap&&a.enable(18),i.sheen&&a.enable(19),i.sheenColorMap&&a.enable(20),i.sheenRoughnessMap&&a.enable(21),i.decodeVideoTexture&&a.enable(22),i.opaque&&a.enable(23),t.push(a.mask),r.push(_.outputEncoding)),r.push(e.customProgramCacheKey),r.join()},getUniforms:function(e){var t=P[e.type];let i;return i=t?(t=sn[t],Rd.clone(t.uniforms)):e.uniforms},acquireProgram:function(e,i){let r;for(let e=0,t=s.length;e<t;e++){var n=s[e];if(n.cacheKey===i){++(r=n).usedTimes;break}}return void 0===r&&(r=new Ug(_,i,e,t),s.push(r)),r},releaseProgram:function(e){var t;0==--e.usedTimes&&(t=s.indexOf(e),s[t]=s[s.length-1],s.pop(),e.destroy())},releaseShaderCache:function(e){T.remove(e)},programs:s,dispose:function(){T.dispose()}}}function Wg(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return void 0===t&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function jg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ul(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Bl(){const o=[];let l=0;const s=[],h=[],c=[];function u(e,t,i,r,n,a){let s=o[l];return void 0===s?(s={id:e.id,object:e,geometry:t,material:i,groupOrder:r,renderOrder:e.renderOrder,z:n,group:a},o[l]=s):(s.id=e.id,s.object=e,s.geometry=t,s.material=i,s.groupOrder=r,s.renderOrder=e.renderOrder,s.z=n,s.group=a),l++,s}return{opaque:s,transmissive:h,transparent:c,init:function(){l=0,s.length=0,h.length=0,c.length=0},push:function(e,t,i,r,n,a){e=u(e,t,i,r,n,a),(0<i.transmission?h:!0===i.transparent?c:s).push(e)},unshift:function(e,t,i,r,n,a){e=u(e,t,i,r,n,a),(0<i.transmission?h:!0===i.transparent?c:s).unshift(e)},finish:function(){for(let e=l,t=o.length;e<t;e++){var i=o[e];if(null===i.id)break;i.id=null,i.object=null,i.geometry=null,i.material=null,i.group=null}},sort:function(e,t){1<s.length&&s.sort(e||jg),1<h.length&&h.sort(t||Ul),1<c.length&&c.sort(t||Ul)}}}function Xg(){let r=new WeakMap;return{get:function(e,t){let i;return!1===r.has(e)?(i=new Bl,r.set(e,[i])):t>=r.get(e).length?(i=new Bl,r.get(e).push(i)):i=r.get(e)[t],i},dispose:function(){r=new WeakMap}}}function qg(){const i={};return{get:function(e){if(void 0!==i[e.id])return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new de};break;case"SpotLight":t={position:new P,direction:new P,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new P,halfWidth:new P,halfHeight:new P}}return i[e.id]=t}}}function $g(){const i={};return{get:function(e){if(void 0!==i[e.id])return i[e.id];let t;switch(e.type){case"DirectionalLight":case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3}}return i[e.id]=t}}}let Yg=0;function Kg(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function Zg(t,S){const T=new qg,E=$g(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let e=0;e<9;e++)A.probe.push(new P);const p=new P,m=new pe,f=new pe;return{setup:function(i,e){let r=0,n=0,a=0;for(let e=0;e<9;e++)A.probe[e].set(0,0,0);let s=0,o=0,l=0,h=0,c=0,u=0,d=0,p=0;i.sort(Kg);var m=!0!==e?Math.PI:1;for(let e=0,t=i.length;e<t;e++){var f,g,v,x,_=i[e],y=_.color,b=_.intensity,w=_.distance,M=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)r+=y.r*b*m,n+=y.g*b*m,a+=y.b*b*m;else if(_.isLightProbe)for(let e=0;e<9;e++)A.probe[e].addScaledVector(_.sh.coefficients[e],b);else _.isDirectionalLight?((v=T.get(_)).color.copy(_.color).multiplyScalar(_.intensity*m),_.castShadow&&(f=_.shadow,(g=E.get(_)).shadowBias=f.bias,g.shadowNormalBias=f.normalBias,g.shadowRadius=f.radius,g.shadowMapSize=f.mapSize,A.directionalShadow[s]=g,A.directionalShadowMap[s]=M,A.directionalShadowMatrix[s]=_.shadow.matrix,u++),A.directional[s]=v,s++):_.isSpotLight?((f=T.get(_)).position.setFromMatrixPosition(_.matrixWorld),f.color.copy(y).multiplyScalar(b*m),f.distance=w,f.coneCos=Math.cos(_.angle),f.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),f.decay=_.decay,_.castShadow&&(g=_.shadow,(v=E.get(_)).shadowBias=g.bias,v.shadowNormalBias=g.normalBias,v.shadowRadius=g.radius,v.shadowMapSize=g.mapSize,A.spotShadow[l]=v,A.spotShadowMap[l]=M,A.spotShadowMatrix[l]=_.shadow.matrix,p++),A.spot[l]=f,l++):_.isRectAreaLight?((w=T.get(_)).color.copy(y).multiplyScalar(b),w.halfWidth.set(.5*_.width,0,0),w.halfHeight.set(0,.5*_.height,0),A.rectArea[h]=w,h++):_.isPointLight?((y=T.get(_)).color.copy(_.color).multiplyScalar(_.intensity*m),y.distance=_.distance,y.decay=_.decay,_.castShadow&&(w=_.shadow,(x=E.get(_)).shadowBias=w.bias,x.shadowNormalBias=w.normalBias,x.shadowRadius=w.radius,x.shadowMapSize=w.mapSize,x.shadowCameraNear=w.camera.near,x.shadowCameraFar=w.camera.far,A.pointShadow[o]=x,A.pointShadowMap[o]=M,A.pointShadowMatrix[o]=_.shadow.matrix,d++),A.point[o]=y,o++):_.isHemisphereLight&&((w=T.get(_)).skyColor.copy(_.color).multiplyScalar(b*m),w.groundColor.copy(_.groundColor).multiplyScalar(b*m),A.hemi[c]=w,c++)}0<h&&(S.isWebGL2||!0===t.has("OES_texture_float_linear")?(A.rectAreaLTC1=oe.LTC_FLOAT_1,A.rectAreaLTC2=oe.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(A.rectAreaLTC1=oe.LTC_HALF_1,A.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),A.ambient[0]=r,A.ambient[1]=n,A.ambient[2]=a,(e=A.hash).directionalLength===s&&e.pointLength===o&&e.spotLength===l&&e.rectAreaLength===h&&e.hemiLength===c&&e.numDirectionalShadows===u&&e.numPointShadows===d&&e.numSpotShadows===p||(A.directional.length=s,A.spot.length=l,A.rectArea.length=h,A.point.length=o,A.hemi.length=c,A.directionalShadow.length=u,A.directionalShadowMap.length=u,A.pointShadow.length=d,A.pointShadowMap.length=d,A.spotShadow.length=p,A.spotShadowMap.length=p,A.directionalShadowMatrix.length=u,A.pointShadowMatrix.length=d,A.spotShadowMatrix.length=p,e.directionalLength=s,e.pointLength=o,e.spotLength=l,e.rectAreaLength=h,e.hemiLength=c,e.numDirectionalShadows=u,e.numPointShadows=d,e.numSpotShadows=p,A.version=Yg++)},setupView:function(i,e){let r=0,n=0,a=0,s=0,o=0;var l=e.matrixWorldInverse;for(let e=0,t=i.length;e<t;e++){var h,c,u,d=i[e];d.isDirectionalLight?((h=A.directional[r]).direction.setFromMatrixPosition(d.matrixWorld),p.setFromMatrixPosition(d.target.matrixWorld),h.direction.sub(p),h.direction.transformDirection(l),r++):d.isSpotLight?((h=A.spot[a]).position.setFromMatrixPosition(d.matrixWorld),h.position.applyMatrix4(l),h.direction.setFromMatrixPosition(d.matrixWorld),p.setFromMatrixPosition(d.target.matrixWorld),h.direction.sub(p),h.direction.transformDirection(l),a++):d.isRectAreaLight?((c=A.rectArea[s]).position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(l),f.identity(),m.copy(d.matrixWorld),m.premultiply(l),f.extractRotation(m),c.halfWidth.set(.5*d.width,0,0),c.halfHeight.set(0,.5*d.height,0),c.halfWidth.applyMatrix4(f),c.halfHeight.applyMatrix4(f),s++):d.isPointLight?((c=A.point[n]).position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(l),n++):d.isHemisphereLight&&((u=A.hemi[o]).direction.setFromMatrixPosition(d.matrixWorld),u.direction.transformDirection(l),o++)}},state:A}}function Vl(e,t){const i=new Zg(e,t),r=[],n=[];return{init:function(){r.length=0,n.length=0},state:{lightsArray:r,shadowsArray:n,lights:i},setupLights:function(e){i.setup(r,e)},setupLightsView:function(e){i.setupView(r,e)},pushLight:function(e){r.push(e)},pushShadow:function(e){n.push(e)}}}function Jg(r,n){let a=new WeakMap;return{get:function(e,t=0){let i;return!1===a.has(e)?(i=new Vl(r,n),a.set(e,[i])):t>=a.get(e).length?(i=new Vl(r,n),a.get(e).push(i)):i=a.get(e)[t],i},dispose:function(){a=new WeakMap}}}class ih extends it{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sh extends it{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t0(f,g,e){let v=new ro;const m=new ve,x=new ve,_=new Ue,l=new ih({depthPacking:ed}),h=new sh,c={},y=e.maxTextureSize,u={0:qt,1:ki,2:cn},b=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Qg,fragmentShader:e0}),w=b.clone();w.defines.HORIZONTAL_PASS=1;e=new ct;e.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qe(e,b),S=this;function T(i,r,e,t,n,a){let s=null;i=!0===e.isPointLight?i.customDistanceMaterial:i.customDepthMaterial;if(s=void 0!==i?i:!0===e.isPointLight?h:l,f.localClippingEnabled&&!0===r.clipShadows&&0!==r.clippingPlanes.length||r.displacementMap&&0!==r.displacementScale||r.alphaMap&&0<r.alphaTest){var i=s.uuid,o=r.uuid;let e=c[i],t=(void 0===e&&(e={},c[i]=e),e[o]);void 0===t&&(t=s.clone(),e[o]=t),s=t}return s.visible=r.visible,s.wireframe=r.wireframe,a===_s?s.side=null!==r.shadowSide?r.shadowSide:r.side:s.side=null!==r.shadowSide?r.shadowSide:u[r.side],s.alphaMap=r.alphaMap,s.alphaTest=r.alphaTest,s.clipShadows=r.clipShadows,s.clippingPlanes=r.clippingPlanes,s.clipIntersection=r.clipIntersection,s.displacementMap=r.displacementMap,s.displacementScale=r.displacementScale,s.displacementBias=r.displacementBias,s.wireframeLinewidth=r.wireframeLinewidth,s.linewidth=r.linewidth,!0===e.isPointLight&&!0===s.isMeshDistanceMaterial&&(s.referencePosition.setFromMatrixPosition(e.matrixWorld),s.nearDistance=t,s.farDistance=n),s}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc,this.render=function(i,r,n){if(!1!==S.enabled&&(!1!==S.autoUpdate||!1!==S.needsUpdate)&&0!==i.length){var a,s,e=f.getRenderTarget(),t=f.getActiveCubeFace(),o=f.getActiveMipmapLevel(),l=f.state;l.setBlending(Un),l.buffers.color.setClear(1,1,1,1),l.buffers.depth.setTest(!0),l.setScissorTest(!1);for(let e=0,t=i.length;e<t;e++){var h=i[e],c=h.shadow;if(void 0===c)console.warn("THREE.WebGLShadowMap:",h,"has no shadow.");else if(!1!==c.autoUpdate||!1!==c.needsUpdate){m.copy(c.mapSize);var u=c.getFrameExtents(),d=(m.multiply(u),x.copy(c.mapSize),(m.x>y||m.y>y)&&(m.x>y&&(x.x=Math.floor(y/u.x),m.x=x.x*u.x,c.mapSize.x=x.x),m.y>y)&&(x.y=Math.floor(y/u.y),m.y=x.y*u.y,c.mapSize.y=x.y),null!==c.map||c.isPointLightShadow||this.type!==_s||(c.map=new Kt(m.x,m.y),c.map.texture.name=h.name+".shadowMap",c.mapPass=new Kt(m.x,m.y),c.camera.updateProjectionMatrix()),null===c.map&&(u={minFilter:ft,magFilter:ft,format:Nt},c.map=new Kt(m.x,m.y,u),c.map.texture.name=h.name+".shadowMap",c.camera.updateProjectionMatrix()),f.setRenderTarget(c.map),f.clear(),c.getViewportCount());for(let e=0;e<d;e++){var p=c.getViewport(e);_.set(x.x*p.x,x.y*p.y,x.x*p.z,x.y*p.w),l.viewport(_),c.updateMatrices(h,e),v=c.getFrustum(),function i(r,n,a,s,o){if(!1===r.visible)return;if(r.layers.test(n.layers)&&(r.isMesh||r.isLine||r.isPoints)&&(r.castShadow||r.receiveShadow&&o===_s)&&(!r.frustumCulled||v.intersectsObject(r))){r.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,r.matrixWorld);const h=g.update(r),c=r.material;if(Array.isArray(c)){const u=h.groups;for(let e=0,t=u.length;e<t;e++){const d=u[e],p=c[d.materialIndex];if(p&&p.visible){const m=T(r,p,s,a.near,a.far,o);f.renderBufferDirect(a,null,h,m,r,d)}}}else if(c.visible){const e=T(r,c,s,a.near,a.far,o);f.renderBufferDirect(a,null,h,e,r,null)}}const l=r.children;for(let e=0,t=l.length;e<t;e++)i(l[e],n,a,s,o)}(r,n,c.camera,h,this.type)}c.isPointLightShadow||this.type!==_s||(u=c,a=n,s=void 0,s=g.update(M),b.defines.VSM_SAMPLES!==u.blurSamples&&(b.defines.VSM_SAMPLES=u.blurSamples,w.defines.VSM_SAMPLES=u.blurSamples,b.needsUpdate=!0,w.needsUpdate=!0),b.uniforms.shadow_pass.value=u.map.texture,b.uniforms.resolution.value=u.mapSize,b.uniforms.radius.value=u.radius,f.setRenderTarget(u.mapPass),f.clear(),f.renderBufferDirect(a,null,s,b,M,null),w.uniforms.shadow_pass.value=u.mapPass.texture,w.uniforms.resolution.value=u.mapSize,w.uniforms.radius.value=u.radius,f.setRenderTarget(u.map),f.clear(),f.renderBufferDirect(a,null,s,w,M,null)),c.needsUpdate=!1}}S.needsUpdate=!1,f.setRenderTarget(e,t,o)}}}function n0(c,z,k){const i=k.isWebGL2;const r=new function(){let t=!1;const a=new Ue;let i=null;const s=new Ue(0,0,0,0);return{setMask:function(e){i===e||t||(c.colorMask(e,e,e,e),i=e)},setLocked:function(e){t=e},setClear:function(e,t,i,r,n){!0===n&&(e*=r,t*=r,i*=r),a.set(e,t,i,r),!1===s.equals(a)&&(c.clearColor(e,t,i,r),s.copy(a))},reset:function(){t=!1,i=null,s.set(-1,0,0,0)}}},n=new function(){let t=!1,i=null,r=null,n=null;return{setTest:function(e){(e?R:I)(2929)},setMask:function(e){i===e||t||(c.depthMask(e),i=e)},setFunc:function(e){if(r!==e){if(e)switch(e){case Eu:c.depthFunc(512);break;case Au:c.depthFunc(519);break;case Cu:c.depthFunc(513);break;case Fa:c.depthFunc(515);break;case Lu:c.depthFunc(514);break;case Ru:c.depthFunc(518);break;case Pu:c.depthFunc(516);break;case Du:c.depthFunc(517);break;default:c.depthFunc(515)}else c.depthFunc(515);r=e}},setLocked:function(e){t=e},setClear:function(e){n!==e&&(c.clearDepth(e),n=e)},reset:function(){t=!1,i=null,r=null,n=null}}},a=new function(){let t=!1,i=null,r=null,n=null,a=null,s=null,o=null,l=null,h=null;return{setTest:function(e){t||(e?R:I)(2960)},setMask:function(e){i===e||t||(c.stencilMask(e),i=e)},setFunc:function(e,t,i){r===e&&n===t&&a===i||(c.stencilFunc(e,t,i),r=e,n=t,a=i)},setOp:function(e,t,i){s===e&&o===t&&l===i||(c.stencilOp(e,t,i),s=e,o=t,l=i)},setLocked:function(e){t=e},setClear:function(e){h!==e&&(c.clearStencil(e),h=e)},reset:function(){t=!1,i=null,r=null,n=null,a=null,s=null,o=null,l=null,h=null}}};let t={},s={},o=new WeakMap,F=[],l=null,h=!1,u=null,d=null,p=null,m=null,f=null,g=null,v=null,x=!1,_=null,y=null,b=null,w=null,M=null;const U=c.getParameter(35661);let S=!1,e=0;var T=c.getParameter(7938);-1!==T.indexOf("WebGL")?(e=parseFloat(/^WebGL (\d)/.exec(T)[1]),S=1<=e):-1!==T.indexOf("OpenGL ES")&&(e=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),S=2<=e);let E=null,A={};const B=c.getParameter(3088),H=c.getParameter(2978),L=(new Ue).fromArray(B),C=(new Ue).fromArray(H);function V(e,t,i){var r=new Uint8Array(4),n=c.createTexture();c.bindTexture(e,n),c.texParameteri(e,10241,9728),c.texParameteri(e,10240,9728);for(let e=0;e<i;e++)c.texImage2D(t+e,0,6408,1,1,0,6408,5121,r);return n}const P={};function R(e){!0!==t[e]&&(c.enable(e),t[e]=!0)}function I(e){!1!==t[e]&&(c.disable(e),t[e]=!1)}P[3553]=V(3553,3553,1),P[34067]=V(34067,34069,6),r.setClear(0,0,0,1),n.setClear(1),a.setClear(0),R(2929),n.setFunc(Fa),G(!1),W(Io),R(2884),O(Un);const D={[Di]:32774,[mu]:32778,[gu]:32779},N=(i?(D[zo]=32775,D[Oo]=32776):null!==(T=z.get("EXT_blend_minmax"))&&(D[zo]=T.MIN_EXT,D[Oo]=T.MAX_EXT),{[vu]:0,[_u]:1,[xu]:768,[Rc]:770,[Tu]:776,[bu]:774,[Mu]:772,[yu]:769,[Pc]:771,[Su]:775,[wu]:773});function O(e,t,i,r,n,a,s,o){if(e===Un)!0===h&&(I(3042),h=!1);else if(!1===h&&(R(3042),h=!0),e!==pu){if(e!==u||o!==x){if(d===Di&&f===Di||(c.blendEquation(32774),d=Di,f=Di),o)switch(e){case zi:c.blendFuncSeparate(1,771,1,771);break;case Sr:c.blendFunc(1,1);break;case Fo:c.blendFuncSeparate(0,769,0,1);break;case No:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}else switch(e){case zi:c.blendFuncSeparate(770,771,1,771);break;case Sr:c.blendFunc(770,1);break;case Fo:c.blendFuncSeparate(0,769,0,1);break;case No:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}p=null,m=null,g=null,v=null,u=e,x=o}}else n=n||t,a=a||i,s=s||r,t===d&&n===f||(c.blendEquationSeparate(D[t],D[n]),d=t,f=n),i===p&&r===m&&a===g&&s===v||(c.blendFuncSeparate(N[i],N[r],N[a],N[s]),p=i,m=r,g=a,v=s),u=e,x=null}function G(e){_!==e&&(e?c.frontFace(2304):c.frontFace(2305),_=e)}function W(e){e!==uu?(R(2884),e!==y&&(e===Io?c.cullFace(1029):e===du?c.cullFace(1028):c.cullFace(1032))):I(2884),y=e}function j(e,t,i){e?(R(32823),w===t&&M===i||(c.polygonOffset(t,i),w=t,M=i)):I(32823)}function X(e){void 0===e&&(e=33984+U-1),E!==e&&(c.activeTexture(e),E=e)}return{buffers:{color:r,depth:n,stencil:a},enable:R,disable:I,bindFramebuffer:function(e,t){return s[e]!==t&&(c.bindFramebuffer(e,t),s[e]=t,i&&(36009===e&&(s[36160]=t),36160===e)&&(s[36009]=t),!0)},drawBuffers:function(e,i){let r=F,t=!1;if(e)if(void 0===(r=o.get(i))&&(r=[],o.set(i,r)),e.isWebGLMultipleRenderTargets){i=e.texture;if(r.length!==i.length||36064!==r[0]){for(let e=0,t=i.length;e<t;e++)r[e]=36064+e;r.length=i.length,t=!0}}else 36064!==r[0]&&(r[0]=36064,t=!0);else 1029!==r[0]&&(r[0]=1029,t=!0);t&&(k.isWebGL2?c.drawBuffers(r):z.get("WEBGL_draw_buffers").drawBuffersWEBGL(r))},useProgram:function(e){return l!==e&&(c.useProgram(e),l=e,!0)},setBlending:O,setMaterial:function(e,t){(e.side===cn?I:R)(2884);let i=e.side===qt;G(i=t?!i:i),e.blending===zi&&!1===e.transparent?O(Un):O(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),n.setFunc(e.depthFunc),n.setTest(e.depthTest),n.setMask(e.depthWrite),r.setMask(e.colorWrite),t=e.stencilWrite,a.setTest(t),t&&(a.setMask(e.stencilWriteMask),a.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),a.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),j(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),(!0===e.alphaToCoverage?R:I)(32926)},setFlipSided:G,setCullFace:W,setLineWidth:function(e){e!==b&&(S&&c.lineWidth(e),b=e)},setPolygonOffset:j,setScissorTest:function(e){(e?R:I)(3089)},activeTexture:X,bindTexture:function(e,t){null===E&&X();let i=A[E];void 0===i&&(i={type:void 0,texture:void 0},A[E]=i),i.type===e&&i.texture===t||(c.bindTexture(e,t||P[e]),i.type=e,i.texture=t)},unbindTexture:function(){var e=A[E];void 0!==e&&void 0!==e.type&&(c.bindTexture(e.type,null),e.type=void 0,e.texture=void 0)},compressedTexImage2D:function(){try{c.compressedTexImage2D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{c.texImage2D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{c.texImage3D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage2D:function(){try{c.texStorage2D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{c.texStorage3D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{c.texSubImage2D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{c.texSubImage3D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor:function(e){!1===L.equals(e)&&(c.scissor(e.x,e.y,e.z,e.w),L.copy(e))},viewport:function(e){!1===C.equals(e)&&(c.viewport(e.x,e.y,e.z,e.w),C.copy(e))},reset:function(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),!0===i&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),t={},E=null,A={},s={},o=new WeakMap,F=[],l=null,h=!1,u=null,d=null,p=null,m=null,f=null,g=null,v=null,x=!1,_=null,y=null,b=null,w=null,M=null,L.set(0,0,c.canvas.width,c.canvas.height),C.set(0,0,c.canvas.width,c.canvas.height),r.reset(),n.reset(),a.reset()}}}function i0(x,s,_,y,g,b,v){const w=g.isWebGL2,t=g.maxTextures,k=g.maxCubemapSize,F=g.maxTextureSize,U=g.maxSamples,h=s.has("WEBGL_multisampled_render_to_texture")?s.get("WEBGL_multisampled_render_to_texture"):null,B=/OculusBrowser/g.test(navigator.userAgent),a=new WeakMap;let o;const l=new WeakMap;let i=!1;try{i="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch{}function c(e,t){return i?new OffscreenCanvas(e,t):Cs("canvas")}function M(e,t,i,r){let n=1;return(n=e.width>r||e.height>r?r/Math.max(e.width,e.height):n)<1||!0===t?"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?(t=(r=t?Ar:Math.floor)(n*e.width),r=r(n*e.height),void 0===o&&(o=c(t,r)),(i=i?c(t,r):o).width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,t,r),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+t+"x"+r+")."),i):("data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e):e}function S(e){return Ba(e.width)&&Ba(e.height)}function T(e,t){return e.generateMipmaps&&t&&e.minFilter!==ft&&e.minFilter!==$e}function E(e){x.generateMipmap(e)}function A(e,t,i,r,n=!1){if(!1===w)return t;if(null!==e){if(void 0!==x[e])return x[e];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+e+"'")}let a=t;return 6403===t&&(5126===i&&(a=33326),5131===i&&(a=33325),5121===i)&&(a=33321),33319===t&&(5126===i&&(a=33328),5131===i&&(a=33327),5121===i)&&(a=33323),33325!==(a=6408===t&&(5126===i&&(a=34836),5131===i&&(a=34842),5121===i&&(a=r===Pe&&!1===n?35907:32856),32819===i&&(a=32854),32820===i)?32855:a)&&33326!==a&&33327!==a&&33328!==a&&34842!==a&&34836!==a||s.get("EXT_color_buffer_float"),a}function L(e,t,i){return!0===T(e,i)||e.isFramebufferTexture&&e.minFilter!==ft&&e.minFilter!==$e?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&0<e.mipmaps.length?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function r(e){return e===ft||e===za||e===Oa?9728:9729}function u(e){var t,i,r,n,e=e.target;e.removeEventListener("dispose",u),t=e,void 0!==(i=y.get(t)).__webglInit&&(r=t.source,(n=l.get(r))&&((i=n[i.__cacheKey]).usedTimes--,0===i.usedTimes&&d(t),0===Object.keys(n).length)&&l.delete(r),y.remove(t)),e.isVideoTexture&&a.delete(e)}function C(e){var e=e.target,i=(e.removeEventListener("dispose",C),e.texture),t=y.get(e),r=y.get(i);if(void 0!==r.__webglTexture&&(x.deleteTexture(r.__webglTexture),v.memory.textures--),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++)x.deleteFramebuffer(t.__webglFramebuffer[e]),t.__webglDepthbuffer&&x.deleteRenderbuffer(t.__webglDepthbuffer[e]);else{if(x.deleteFramebuffer(t.__webglFramebuffer),t.__webglDepthbuffer&&x.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&x.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&x.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&x.deleteRenderbuffer(t.__webglDepthRenderbuffer)}if(e.isWebGLMultipleRenderTargets)for(let e=0,t=i.length;e<t;e++){var n=y.get(i[e]);n.__webglTexture&&(x.deleteTexture(n.__webglTexture),v.memory.textures--),y.remove(i[e])}y.remove(i),y.remove(e)}function d(e){var t=y.get(e),e=(x.deleteTexture(t.__webglTexture),e.source);delete l.get(e)[t.__cacheKey],v.memory.textures--}let n=0;function p(e,t){var i,r=y.get(e);if(e.isVideoTexture&&(i=e,n=v.render.frame,a.get(i)!==n&&(a.set(i,n),i.update())),!1===e.isRenderTargetTexture&&0<e.version&&r.__version!==e.version){var n=e.image;if(null===n)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==n.complete)return void R(r,e,t);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}_.activeTexture(33984+t),_.bindTexture(3553,r.__webglTexture)}const m={[hn]:10497,[gt]:33071,[Er]:33648},f={[ft]:9728,[za]:9984,[Oa]:9986,[$e]:9729,[Oc]:9985,[li]:9987};function P(e,t,i){i?(x.texParameteri(e,10242,m[t.wrapS]),x.texParameteri(e,10243,m[t.wrapT]),32879!==e&&35866!==e||x.texParameteri(e,32882,m[t.wrapR]),x.texParameteri(e,10240,f[t.magFilter]),x.texParameteri(e,10241,f[t.minFilter])):(x.texParameteri(e,10242,33071),x.texParameteri(e,10243,33071),32879!==e&&35866!==e||x.texParameteri(e,32882,33071),t.wrapS===gt&&t.wrapT===gt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),x.texParameteri(e,10240,r(t.magFilter)),x.texParameteri(e,10241,r(t.minFilter)),t.minFilter!==ft&&t.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===s.has("EXT_texture_filter_anisotropic")&&(i=s.get("EXT_texture_filter_anisotropic"),t.type===Ft&&!1===s.has("OES_texture_float_linear")||!1===w&&t.type===Mn&&!1===s.has("OES_texture_half_float_linear")||(1<t.anisotropy||y.get(t).__currentAnisotropy)&&(x.texParameterf(e,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,g.getMaxAnisotropy())),y.get(t).__currentAnisotropy=t.anisotropy))}function H(e,t){let i=!1;void 0===e.__webglInit&&(e.__webglInit=!0,t.addEventListener("dispose",u));var r=t.source;let n=l.get(r);void 0===n&&(n={},l.set(r,n));(r=[]).push((a=t).wrapS),r.push(a.wrapT),r.push(a.magFilter),r.push(a.minFilter),r.push(a.anisotropy),r.push(a.internalFormat),r.push(a.format),r.push(a.type),r.push(a.generateMipmaps),r.push(a.premultiplyAlpha),r.push(a.flipY),r.push(a.unpackAlignment),r.push(a.encoding);var a=r.join();return a!==e.__cacheKey&&(void 0===n[a]&&(n[a]={texture:x.createTexture(),usedTimes:0},v.memory.textures++,i=!0),n[a].usedTimes++,void 0!==(r=n[e.__cacheKey])&&(n[e.__cacheKey].usedTimes--,0===r.usedTimes)&&d(t),e.__cacheKey=a,e.__webglTexture=n[a].texture),i}function R(e,a,s){let t=3553;a.isDataArrayTexture&&(t=35866),a.isData3DTexture&&(t=32879);var o=H(e,a),l=a.source;if(_.activeTexture(33984+s),_.bindTexture(t,e.__webglTexture),l.version!==l.__currentVersion||!0===o){x.pixelStorei(37440,a.flipY),x.pixelStorei(37441,a.premultiplyAlpha),x.pixelStorei(3317,a.unpackAlignment),x.pixelStorei(37443,0);s=a;var s=!w&&(s.wrapS!==gt||s.wrapT!==gt||s.minFilter!==ft&&s.minFilter!==$e)&&!1===S(a.image),h=S(s=V(a,M(a.image,s,!1,F)))||w,c=b.convert(a.format,a.encoding);let r=b.convert(a.type),n=A(a.internalFormat,c,r,a.encoding,a.isVideoTexture);P(t,a,h);let i;var u=a.mipmaps,d=w&&!0!==a.isVideoTexture,o=void 0===l.__currentVersion||!0===o,p=L(a,s,h);if(a.isDepthTexture)n=6402,w?n=a.type===Ft?36012:a.type===ii?33190:a.type===Oi?35056:33189:a.type===Ft&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),a.format===ri&&6402===n&&a.type!==kc&&a.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),a.type=ii,r=b.convert(a.type)),a.format===Vi&&6402===n&&(n=34041,a.type!==Oi)&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),a.type=Oi,r=b.convert(a.type)),o&&(d?_.texStorage2D(3553,1,n,s.width,s.height):_.texImage2D(3553,0,n,s.width,s.height,0,c,r,null));else if(a.isDataTexture)if(0<u.length&&h){d&&o&&_.texStorage2D(3553,p,n,u[0].width,u[0].height);for(let e=0,t=u.length;e<t;e++)i=u[e],d?_.texSubImage2D(3553,e,0,0,i.width,i.height,c,r,i.data):_.texImage2D(3553,e,n,i.width,i.height,0,c,r,i.data);a.generateMipmaps=!1}else d?(o&&_.texStorage2D(3553,p,n,s.width,s.height),_.texSubImage2D(3553,0,0,0,s.width,s.height,c,r,s.data)):_.texImage2D(3553,0,n,s.width,s.height,0,c,r,s.data);else if(a.isCompressedTexture){d&&o&&_.texStorage2D(3553,p,n,u[0].width,u[0].height);for(let e=0,t=u.length;e<t;e++)i=u[e],a.format!==Nt?null!==c?d?_.compressedTexSubImage2D(3553,e,0,0,i.width,i.height,c,i.data):_.compressedTexImage2D(3553,e,n,i.width,i.height,0,i.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):d?_.texSubImage2D(3553,e,0,0,i.width,i.height,c,r,i.data):_.texImage2D(3553,e,n,i.width,i.height,0,c,r,i.data)}else if(a.isDataArrayTexture)d?(o&&_.texStorage3D(35866,p,n,s.width,s.height,s.depth),_.texSubImage3D(35866,0,0,0,0,s.width,s.height,s.depth,c,r,s.data)):_.texImage3D(35866,0,n,s.width,s.height,s.depth,0,c,r,s.data);else if(a.isData3DTexture)d?(o&&_.texStorage3D(32879,p,n,s.width,s.height,s.depth),_.texSubImage3D(32879,0,0,0,0,s.width,s.height,s.depth,c,r,s.data)):_.texImage3D(32879,0,n,s.width,s.height,s.depth,0,c,r,s.data);else if(a.isFramebufferTexture){if(o)if(d)_.texStorage2D(3553,p,n,s.width,s.height);else{let t=s.width,i=s.height;for(let e=0;e<p;e++)_.texImage2D(3553,e,n,t,i,0,c,r,null),t>>=1,i>>=1}}else if(0<u.length&&h){d&&o&&_.texStorage2D(3553,p,n,u[0].width,u[0].height);for(let e=0,t=u.length;e<t;e++)i=u[e],d?_.texSubImage2D(3553,e,0,0,c,r,i):_.texImage2D(3553,e,n,c,r,i);a.generateMipmaps=!1}else d?(o&&_.texStorage2D(3553,p,n,s.width,s.height),_.texSubImage2D(3553,0,0,0,c,r,s)):_.texImage2D(3553,0,n,c,r,s);T(a,h)&&E(t),l.__currentVersion=l.version,a.onUpdate&&a.onUpdate(a)}e.__version=a.version}function I(e,t,i,r,n){var a=b.convert(i.format,i.encoding),s=b.convert(i.type),o=A(i.internalFormat,a,s,i.encoding);y.get(t).__hasExternalTextures||(32879===n||35866===n?_.texImage3D(n,0,o,t.width,t.height,t.depth,0,a,s,null):_.texImage2D(n,0,o,t.width,t.height,0,a,s,null)),_.bindFramebuffer(36160,e),z(t)?h.framebufferTexture2DMultisampleEXT(36160,r,n,y.get(i).__webglTexture,0,O(t)):x.framebufferTexture2D(36160,r,n,y.get(i).__webglTexture,0),_.bindFramebuffer(36160,null)}function D(t,i,r){if(x.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){let e=33189;r||z(i)?((n=i.depthTexture)&&n.isDepthTexture&&(n.type===Ft?e=36012:n.type===ii&&(e=33190)),n=O(i),z(i)?h.renderbufferStorageMultisampleEXT(36161,n,e,i.width,i.height):x.renderbufferStorageMultisample(36161,n,e,i.width,i.height)):x.renderbufferStorage(36161,e,i.width,i.height),x.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){var n=O(i);r&&!1===z(i)?x.renderbufferStorageMultisample(36161,n,35056,i.width,i.height):z(i)?h.renderbufferStorageMultisampleEXT(36161,n,35056,i.width,i.height):x.renderbufferStorage(36161,34041,i.width,i.height),x.framebufferRenderbuffer(36160,33306,36161,t)}else{var a=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let e=0;e<a.length;e++){var s=a[e],o=b.convert(s.format,s.encoding),l=b.convert(s.type),o=A(s.internalFormat,o,l,s.encoding),l=O(i);r&&!1===z(i)?x.renderbufferStorageMultisample(36161,l,o,i.width,i.height):z(i)?h.renderbufferStorageMultisampleEXT(36161,l,o,i.width,i.height):x.renderbufferStorage(36161,o,i.width,i.height)}}x.bindRenderbuffer(36161,null)}function N(t){var i=y.get(t),e=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(e)throw new Error("target.depthTexture not supported in Cube render targets");var r=i.__webglFramebuffer,n=t;if(n&&n.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(_.bindFramebuffer(36160,r),!n.depthTexture||!n.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");y.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),p(n.depthTexture,0);var r=y.get(n.depthTexture).__webglTexture,a=O(n);if(n.depthTexture.format===ri)z(n)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,r,0,a):x.framebufferTexture2D(36160,36096,3553,r,0);else{if(n.depthTexture.format!==Vi)throw new Error("Unknown depthTexture format");z(n)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,r,0,a):x.framebufferTexture2D(36160,33306,3553,r,0)}}else if(e){i.__webglDepthbuffer=[];for(let e=0;e<6;e++)_.bindFramebuffer(36160,i.__webglFramebuffer[e]),i.__webglDepthbuffer[e]=x.createRenderbuffer(),D(i.__webglDepthbuffer[e],t,!1)}else _.bindFramebuffer(36160,i.__webglFramebuffer),i.__webglDepthbuffer=x.createRenderbuffer(),D(i.__webglDepthbuffer,t,!1);_.bindFramebuffer(36160,null)}function O(e){return Math.min(U,e.samples)}function z(e){var t=y.get(e);return w&&0<e.samples&&!0===s.has("WEBGL_multisampled_render_to_texture")&&!1!==t.__useRenderToTexture}function V(e,t){var i=e.encoding,r=e.format,n=e.type;return!0!==e.isCompressedTexture&&!0!==e.isVideoTexture&&e.format!==Ua&&i!==Vn&&(i===Pe?!1===w?!0===s.has("EXT_sRGB")&&r===Nt?(e.format=Ua,e.minFilter=$e,e.generateMipmaps=!1):t=Wc.sRGBToLinear(t):r===Nt&&n===oi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",i)),t}this.allocateTextureUnit=function(){var e=n;return e>=t&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+t),n+=1,e},this.resetTextureUnits=function(){n=0},this.setTexture2D=p,this.setTexture2DArray=function(e,t){var i=y.get(e);0<e.version&&i.__version!==e.version?R(i,e,t):(_.activeTexture(33984+t),_.bindTexture(35866,i.__webglTexture))},this.setTexture3D=function(e,t){var i=y.get(e);0<e.version&&i.__version!==e.version?R(i,e,t):(_.activeTexture(33984+t),_.bindTexture(32879,i.__webglTexture))},this.setTextureCube=function(t,e){var i=y.get(t);if(0<t.version&&i.__version!==t.version){var r=i,n=t,t=e;if(6===n.image.length){var a=H(r,n),s=n.source;if(_.activeTexture(33984+t),_.bindTexture(34067,r.__webglTexture),s.version!==s.__currentVersion||!0===a){x.pixelStorei(37440,n.flipY),x.pixelStorei(37441,n.premultiplyAlpha),x.pixelStorei(3317,n.unpackAlignment),x.pixelStorei(37443,0);var o=n.isCompressedTexture||n.image[0].isCompressedTexture,l=n.image[0]&&n.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)h[e]=o||l?l?n.image[e].image:n.image[e]:M(n.image[e],!1,!0,k),h[e]=V(n,h[e]);var t=h[0],c=S(t)||w,u=b.convert(n.format,n.encoding),d=b.convert(n.type),p=A(n.internalFormat,u,d,n.encoding),m=w&&!0!==n.isVideoTexture,a=void 0===s.__currentVersion||!0===a;let e=L(n,t,c);P(34067,n,c);let i;if(o){m&&a&&_.texStorage2D(34067,e,p,t.width,t.height);for(let t=0;t<6;t++){i=h[t].mipmaps;for(let e=0;e<i.length;e++){var f=i[e];n.format!==Nt?null!==u?m?_.compressedTexSubImage2D(34069+t,e,0,0,f.width,f.height,u,f.data):_.compressedTexImage2D(34069+t,e,p,f.width,f.height,0,f.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):m?_.texSubImage2D(34069+t,e,0,0,f.width,f.height,u,d,f.data):_.texImage2D(34069+t,e,p,f.width,f.height,0,u,d,f.data)}}}else{i=n.mipmaps,m&&a&&(0<i.length&&e++,_.texStorage2D(34067,e,p,h[0].width,h[0].height));for(let t=0;t<6;t++)if(l){m?_.texSubImage2D(34069+t,0,0,0,h[t].width,h[t].height,u,d,h[t].data):_.texImage2D(34069+t,0,p,h[t].width,h[t].height,0,u,d,h[t].data);for(let e=0;e<i.length;e++){var g=i[e].image[t].image;m?_.texSubImage2D(34069+t,e+1,0,0,g.width,g.height,u,d,g.data):_.texImage2D(34069+t,e+1,p,g.width,g.height,0,u,d,g.data)}}else{m?_.texSubImage2D(34069+t,0,0,0,u,d,h[t]):_.texImage2D(34069+t,0,p,u,d,h[t]);for(let e=0;e<i.length;e++){var v=i[e];m?_.texSubImage2D(34069+t,e+1,0,0,u,d,v.image[t]):_.texImage2D(34069+t,e+1,p,u,d,v.image[t])}}}T(n,c)&&E(34067),s.__currentVersion=s.version,n.onUpdate&&n.onUpdate(n)}r.__version=n.version}}else _.activeTexture(33984+e),_.bindTexture(34067,i.__webglTexture)},this.rebindTextures=function(e,t,i){var r=y.get(e);void 0!==t&&I(r.__webglFramebuffer,e,e.texture,36064,3553),void 0!==i&&N(e)},this.setupRenderTarget=function(i){var t=i.texture,r=y.get(i),n=y.get(t),e=(i.addEventListener("dispose",C),!0!==i.isWebGLMultipleRenderTargets&&(void 0===n.__webglTexture&&(n.__webglTexture=x.createTexture()),n.__version=t.version,v.memory.textures++),!0===i.isWebGLCubeRenderTarget),a=!0===i.isWebGLMultipleRenderTargets,s=S(i)||w;if(e){r.__webglFramebuffer=[];for(let e=0;e<6;e++)r.__webglFramebuffer[e]=x.createFramebuffer()}else{if(r.__webglFramebuffer=x.createFramebuffer(),a)if(g.drawBuffers){var o=i.texture;for(let e=0,t=o.length;e<t;e++){var l=y.get(o[e]);void 0===l.__webglTexture&&(l.__webglTexture=x.createTexture(),v.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(w&&0<i.samples&&!1===z(i)){var h=a?t:[t];r.__webglMultisampledFramebuffer=x.createFramebuffer(),r.__webglColorRenderbuffer=[],_.bindFramebuffer(36160,r.__webglMultisampledFramebuffer);for(let e=0;e<h.length;e++){var c=h[e],u=(r.__webglColorRenderbuffer[e]=x.createRenderbuffer(),x.bindRenderbuffer(36161,r.__webglColorRenderbuffer[e]),b.convert(c.format,c.encoding)),d=b.convert(c.type),u=A(c.internalFormat,u,d,c.encoding),d=O(i);x.renderbufferStorageMultisample(36161,d,u,i.width,i.height),x.framebufferRenderbuffer(36160,36064+e,36161,r.__webglColorRenderbuffer[e])}x.bindRenderbuffer(36161,null),i.depthBuffer&&(r.__webglDepthRenderbuffer=x.createRenderbuffer(),D(r.__webglDepthRenderbuffer,i,!0)),_.bindFramebuffer(36160,null)}}if(e){_.bindTexture(34067,n.__webglTexture),P(34067,t,s);for(let e=0;e<6;e++)I(r.__webglFramebuffer[e],i,t,36064,34069+e);T(t,s)&&E(34067)}else if(a){var p=i.texture;for(let e=0,t=p.length;e<t;e++){var m=p[e],f=y.get(m);_.bindTexture(3553,f.__webglTexture),P(3553,m,s),I(r.__webglFramebuffer,i,m,36064+e,3553),T(m,s)&&E(3553)}}else{let e=3553;(i.isWebGL3DRenderTarget||i.isWebGLArrayRenderTarget)&&(w?e=i.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),_.bindTexture(e,n.__webglTexture),P(e,t,s),I(r.__webglFramebuffer,i,t,36064,e),T(t,s)&&E(e)}_.unbindTexture(),i.depthBuffer&&N(i)},this.updateRenderTargetMipmap=function(i){var r=S(i)||w,n=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let e=0,t=n.length;e<t;e++){var a,s=n[e];T(s,r)&&(a=i.isWebGLCubeRenderTarget?34067:3553,s=y.get(s).__webglTexture,_.bindTexture(a,s),E(a),_.unbindTexture())}},this.updateMultisampleRenderTarget=function(i){if(w&&0<i.samples&&!1===z(i)){var r=i.isWebGLMultipleRenderTargets?i.texture:[i.texture],n=i.width,a=i.height;let t=16384;var s=[],o=i.stencilBuffer?33306:36096,l=y.get(i),h=!0===i.isWebGLMultipleRenderTargets;if(h)for(let e=0;e<r.length;e++)_.bindFramebuffer(36160,l.__webglMultisampledFramebuffer),x.framebufferRenderbuffer(36160,36064+e,36161,null),_.bindFramebuffer(36160,l.__webglFramebuffer),x.framebufferTexture2D(36009,36064+e,3553,null,0);_.bindFramebuffer(36008,l.__webglMultisampledFramebuffer),_.bindFramebuffer(36009,l.__webglFramebuffer);for(let e=0;e<r.length;e++){s.push(36064+e),i.depthBuffer&&s.push(o);var c=void 0!==l.__ignoreDepthValues&&l.__ignoreDepthValues;!1===c&&(i.depthBuffer&&(t|=256),i.stencilBuffer)&&(t|=1024),h&&x.framebufferRenderbuffer(36008,36064,36161,l.__webglColorRenderbuffer[e]),!0===c&&(x.invalidateFramebuffer(36008,[o]),x.invalidateFramebuffer(36009,[o])),h&&(c=y.get(r[e]).__webglTexture,x.framebufferTexture2D(36009,36064,3553,c,0)),x.blitFramebuffer(0,0,n,a,0,0,n,a,t,9728),B&&x.invalidateFramebuffer(36008,s)}if(_.bindFramebuffer(36008,null),_.bindFramebuffer(36009,null),h)for(let e=0;e<r.length;e++){_.bindFramebuffer(36160,l.__webglMultisampledFramebuffer),x.framebufferRenderbuffer(36160,36064+e,36161,l.__webglColorRenderbuffer[e]);var u=y.get(r[e]).__webglTexture;_.bindFramebuffer(36160,l.__webglFramebuffer),x.framebufferTexture2D(36009,36064+e,3553,u,0)}_.bindFramebuffer(36009,l.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=I,this.useMultisampledRTT=z}function s0(r,n,e){const a=e.isWebGL2;return{convert:function(e,t=null){let i;if(e===oi)return 5121;if(e===Uu)return 32819;if(e===Bu)return 32820;if(e===zu)return 5120;if(e===Ou)return 5122;if(e===kc)return 5123;if(e===ku)return 5124;if(e===ii)return 5125;if(e===Ft)return 5126;if(e===Mn)return a?5131:null!==(i=n.get("OES_texture_half_float"))?i.HALF_FLOAT_OES:null;if(e===Vu)return 6406;if(e===Nt)return 6408;if(e===Hu)return 6409;if(e===Wu)return 6410;if(e===ri)return 6402;if(e===Vi)return 34041;if(e===Uc)return 6403;if(e===Gu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(e===Ua)return null!==(i=n.get("EXT_sRGB"))?i.SRGB_ALPHA_EXT:null;if(e===ju)return 36244;if(e===Xu)return 33319;if(e===qu)return 33320;if(e===$u)return 36249;if(e===qr||e===$r||e===Yr||e===Kr)if(t===Pe){if(null===(i=n.get("WEBGL_compressed_texture_s3tc_srgb")))return null;if(e===qr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===$r)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Yr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===Kr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(i=n.get("WEBGL_compressed_texture_s3tc")))return null;if(e===qr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===$r)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Yr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===Kr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(e===ko||e===Uo||e===Bo||e===Vo){if(null===(i=n.get("WEBGL_compressed_texture_pvrtc")))return null;if(e===ko)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Uo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===Bo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Vo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(e===Yu)return null!==(i=n.get("WEBGL_compressed_texture_etc1"))?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(e===Go||e===Ho){if(null===(i=n.get("WEBGL_compressed_texture_etc")))return null;if(e===Go)return t===Pe?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(e===Ho)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(e===Wo||e===jo||e===Xo||e===qo||e===$o||e===Yo||e===Ko||e===Zo||e===Jo||e===Qo||e===el||e===tl||e===nl||e===il){if(null===(i=n.get("WEBGL_compressed_texture_astc")))return null;if(e===Wo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===jo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Xo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===qo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===$o)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===Yo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===Ko)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===Zo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===Jo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===Qo)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===el)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===tl)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===nl)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===il)return t===Pe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(e===sl){if(null===(i=n.get("EXT_texture_compression_bptc")))return null;if(e===sl)return t===Pe?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}return e===Oi?a?34042:null!==(i=n.get("WEBGL_depth_texture"))?i.UNSIGNED_INT_24_8_WEBGL:null:void 0!==r[e]?r[e]:null}}}class r0 extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a0={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,a=null;var s=this._targetRay,o=this._grip,l=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState)if(null!==s&&null!==(r=t.getPose(e.targetRaySpace,i))&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(a0)),l&&e.hand){a=!0;for(const p of e.hand.values()){var h=t.getJointPose(p,i),c=(void 0===l.joints[p.jointName]&&((c=new bn).matrixAutoUpdate=!1,c.visible=!1,l.joints[p.jointName]=c,l.add(c)),l.joints[p.jointName]);null!==h&&(c.matrix.fromArray(h.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=h.radius),c.visible=null!==h}var u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=u.position.distanceTo(d.position);l.inputState.pinching&&.025<u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&null!==(n=t.getPose(e.gripSpace,i))&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1);return null!==s&&(s.visible=null!==r),null!==o&&(o.visible=null!==n),null!==l&&(l.visible=null!==a),this}}class o0 extends nt{constructor(e,t,i,r,n,a,s,o,l,h){if((h=void 0!==h?h:ri)!==ri&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,n,a,s,o,h,i=void 0===(i=void 0===i&&h===ri?ii:i)&&h===Vi?Oi:i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==s?s:ft,this.minFilter=void 0!==o?o:ft,this.flipY=!1,this.generateMipmaps=!1}}class l0 extends hi{constructor(l,n){super();const t=this;let m=null,a=1,h=null,i="local-floor",c=null,u=null,d=null,p=null,f=null,g=null;const s=n.getContextAttributes();let e=null,v=null;const x=[],_=new Map,y=new mt,b=(y.layers.enable(1),y.viewport=new Ue,new mt),w=(b.layers.enable(2),b.viewport=new Ue,[y,b]),M=new r0;M.layers.enable(1),M.layers.enable(2);let S=null,T=null;function o(e){var t=_.get(e.inputSource);void 0!==t&&t.dispatchEvent({type:e.type,data:e.inputSource})}function E(){m.removeEventListener("select",o),m.removeEventListener("selectstart",o),m.removeEventListener("selectend",o),m.removeEventListener("squeeze",o),m.removeEventListener("squeezestart",o),m.removeEventListener("squeezeend",o),m.removeEventListener("end",E),m.removeEventListener("inputsourceschange",A),_.forEach(function(e,t){void 0!==e&&e.disconnect(t)}),_.clear(),S=null,T=null,l.setRenderTarget(e),f=null,p=null,d=null,m=null,v=null,D.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}function A(t){var i=m.inputSources;for(let e=0;e<i.length;e++){var r="right"===i[e].handedness?1:0;_.set(i[e],x[r])}for(let e=0;e<t.removed.length;e++){var n=t.removed[e],a=_.get(n);a&&(a.dispatchEvent({type:"disconnected",data:n}),_.delete(n))}for(let e=0;e<t.added.length;e++){var s=t.added[e],o=_.get(s);o&&o.dispatchEvent({type:"connected",data:s})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return void 0===t&&(t=new Sa,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return void 0===t&&(t=new Sa,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return void 0===t&&(t=new Sa,x[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){a=e,!0===t.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){i=e,!0===t.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||h},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return null!==p?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return m},this.setSession=async function(r){if(null!==(m=r)){if(e=l.getRenderTarget(),m.addEventListener("select",o),m.addEventListener("selectstart",o),m.addEventListener("selectend",o),m.addEventListener("squeeze",o),m.addEventListener("squeezestart",o),m.addEventListener("squeezeend",o),m.addEventListener("end",E),m.addEventListener("inputsourceschange",A),!0!==s.xrCompatible&&await n.makeXRCompatible(),void 0===m.renderState.layers||!1===l.capabilities.isWebGL2){r={antialias:void 0!==m.renderState.layers||s.antialias,alpha:s.alpha,depth:s.depth,stencil:s.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(m,n,r),m.updateRenderState({baseLayer:f}),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:oi,encoding:l.outputEncoding})}else{let e=null,t=null,i=null;s.depth&&(i=s.stencil?35056:33190,e=s.stencil?Vi:ri,t=s.stencil?Oi:ii);r={colorFormat:l.outputEncoding===Pe?35907:32856,depthFormat:i,scaleFactor:a};d=new XRWebGLBinding(m,n),p=d.createProjectionLayer(r),m.updateRenderState({layers:[p]}),v=new Kt(p.textureWidth,p.textureHeight,{format:Nt,type:oi,depthTexture:new o0(p.textureWidth,p.textureHeight,t,void 0,void 0,void 0,void 0,void 0,void 0,e),stencilBuffer:s.stencil,encoding:l.outputEncoding,samples:s.antialias?4:0}),l.properties.get(v).__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),c=null,h=await m.requestReferenceSpace(i),D.setContext(m),D.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};const L=new P,C=new P;function R(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null!==m){M.near=b.near=y.near=e.near,M.far=b.far=y.far=e.far,S===M.near&&T===M.far||(m.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,T=M.far);var t=e.parent,i=M.cameras;R(M,t);for(let e=0;e<i.length;e++)R(i[e],t);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),e.position.copy(M.position),e.quaternion.copy(M.quaternion),e.scale.copy(M.scale),e.matrix.copy(M.matrix),e.matrixWorld.copy(M.matrixWorld);var r,n,a,s,o,l,h,c,u,d,p=e.children;for(let e=0,t=p.length;e<t;e++)p[e].updateMatrixWorld(!0);2===i.length?(e=M,r=y,n=b,L.setFromMatrixPosition(r.matrixWorld),C.setFromMatrixPosition(n.matrixWorld),a=L.distanceTo(C),s=r.projectionMatrix.elements,n=n.projectionMatrix.elements,o=s[14]/(s[10]-1),l=s[14]/(s[10]+1),h=(s[9]+1)/s[5],c=(s[9]-1)/s[5],s=(s[8]-1)/s[0],n=(n[8]+1)/n[0],u=o*s,d=o*n,s=(n=a/(n-s))*-s,r.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(s),e.translateZ(n),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),r=o+n,o=l+n,e.projectionMatrix.makePerspective(u-s,a-s+d,h*l/o*r,c*l/o*r,r,o)):M.projectionMatrix.copy(y.projectionMatrix)}},this.getCamera=function(){return M},this.getFoveation=function(){return null!==p?p.fixedFoveation:null!==f?f.fixedFoveation:void 0},this.setFoveation=function(e){null!==p&&(p.fixedFoveation=e),null!==f&&void 0!==f.fixedFoveation&&(f.fixedFoveation=e)};let I=null;const D=new Zc;D.setAnimationLoop(function(e,t){if(u=t.getViewerPose(c||h),g=t,null!==u){var n=u.views;null!==f&&(l.setRenderTargetFramebuffer(v,f.framebuffer),l.setRenderTarget(v));let r=!1;n.length!==M.cameras.length&&(M.cameras.length=0,r=!0);for(let i=0;i<n.length;i++){var a,s=n[i];let e=null,t=(null!==f?e=f.getViewport(s):(a=d.getViewSubImage(p,s),e=a.viewport,0===i&&(l.setRenderTargetTextures(v,a.colorTexture,p.ignoreDepthValues?void 0:a.depthStencilTexture),l.setRenderTarget(v))),w[i]);void 0===t&&((t=new mt).layers.enable(i),t.viewport=new Ue,w[i]=t),t.matrix.fromArray(s.transform.matrix),t.projectionMatrix.fromArray(s.projectionMatrix),t.viewport.set(e.x,e.y,e.width,e.height),0===i&&M.matrix.copy(t.matrix),!0===r&&M.cameras.push(t)}}var i=m.inputSources;for(let e=0;e<x.length;e++){var r=i[e],o=_.get(r);void 0!==o&&o.update(r,t,c||h)}I&&I(e,t),g=null}),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}}function c0(a,c){function u(e,t){e.opacity.value=t.opacity,t.color&&e.diffuse.value.copy(t.color),t.emissive&&e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===qt)&&(e.bumpScale.value*=-1),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===qt)&&e.normalScale.value.negate(),t.specularMap&&(e.specularMap.value=t.specularMap),0<t.alphaTest&&(e.alphaTest.value=t.alphaTest);var i=c.get(t).envMap;i&&(e.envMap.value=i,e.flipEnvMap.value=i.isCubeTexture&&!1===i.isRenderTargetTexture?-1:1,e.reflectivity.value=t.reflectivity,e.ior.value=t.ior,e.refractionRatio.value=t.refractionRatio),t.lightMap&&(e.lightMap.value=t.lightMap,i=!0!==a.physicallyCorrectLights?Math.PI:1,e.lightMapIntensity.value=t.lightMapIntensity*i),t.aoMap&&(e.aoMap.value=t.aoMap,e.aoMapIntensity.value=t.aoMapIntensity);let r;t.map?r=t.map:t.specularMap?r=t.specularMap:t.displacementMap?r=t.displacementMap:t.normalMap?r=t.normalMap:t.bumpMap?r=t.bumpMap:t.roughnessMap?r=t.roughnessMap:t.metalnessMap?r=t.metalnessMap:t.alphaMap?r=t.alphaMap:t.emissiveMap?r=t.emissiveMap:t.clearcoatMap?r=t.clearcoatMap:t.clearcoatNormalMap?r=t.clearcoatNormalMap:t.clearcoatRoughnessMap?r=t.clearcoatRoughnessMap:t.iridescenceMap?r=t.iridescenceMap:t.iridescenceThicknessMap?r=t.iridescenceThicknessMap:t.specularIntensityMap?r=t.specularIntensityMap:t.specularColorMap?r=t.specularColorMap:t.transmissionMap?r=t.transmissionMap:t.thicknessMap?r=t.thicknessMap:t.sheenColorMap?r=t.sheenColorMap:t.sheenRoughnessMap&&(r=t.sheenRoughnessMap),void 0!==r&&(!0===(r=r.isWebGLRenderTarget?r.texture:r).matrixAutoUpdate&&r.updateMatrix(),e.uvTransform.value.copy(r.matrix));let n;t.aoMap?n=t.aoMap:t.lightMap&&(n=t.lightMap),void 0!==n&&(!0===(n=n.isWebGLRenderTarget?n.texture:n).matrixAutoUpdate&&n.updateMatrix(),e.uv2Transform.value.copy(n.matrix))}return{refreshFogUniforms:function(e,t){e.fogColor.value.copy(t.color),t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)},refreshMaterialUniforms:function(t,i,r,n,a){if(i.isMeshBasicMaterial||i.isMeshLambertMaterial)u(t,i);else if(i.isMeshToonMaterial)u(t,i),l=t,(h=i).gradientMap&&(l.gradientMap.value=h.gradientMap);else if(i.isMeshPhongMaterial)u(t,i),l=i,(h=t).specular.value.copy(l.specular),h.shininess.value=Math.max(l.shininess,1e-4);else if(i.isMeshStandardMaterial)u(t,i),o=i,(e=t).roughness.value=o.roughness,e.metalness.value=o.metalness,o.roughnessMap&&(e.roughnessMap.value=o.roughnessMap),o.metalnessMap&&(e.metalnessMap.value=o.metalnessMap),c.get(o).envMap&&(e.envMapIntensity.value=o.envMapIntensity),i.isMeshPhysicalMaterial&&(e=i,o=a,(a=t).ior.value=e.ior,0<e.sheen&&(a.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),a.sheenRoughness.value=e.sheenRoughness,e.sheenColorMap&&(a.sheenColorMap.value=e.sheenColorMap),e.sheenRoughnessMap)&&(a.sheenRoughnessMap.value=e.sheenRoughnessMap),0<e.clearcoat&&(a.clearcoat.value=e.clearcoat,a.clearcoatRoughness.value=e.clearcoatRoughness,e.clearcoatMap&&(a.clearcoatMap.value=e.clearcoatMap),e.clearcoatRoughnessMap&&(a.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap),e.clearcoatNormalMap)&&(a.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),a.clearcoatNormalMap.value=e.clearcoatNormalMap,e.side===qt)&&a.clearcoatNormalScale.value.negate(),0<e.iridescence&&(a.iridescence.value=e.iridescence,a.iridescenceIOR.value=e.iridescenceIOR,a.iridescenceThicknessMinimum.value=e.iridescenceThicknessRange[0],a.iridescenceThicknessMaximum.value=e.iridescenceThicknessRange[1],e.iridescenceMap&&(a.iridescenceMap.value=e.iridescenceMap),e.iridescenceThicknessMap)&&(a.iridescenceThicknessMap.value=e.iridescenceThicknessMap),0<e.transmission&&(a.transmission.value=e.transmission,a.transmissionSamplerMap.value=o.texture,a.transmissionSamplerSize.value.set(o.width,o.height),e.transmissionMap&&(a.transmissionMap.value=e.transmissionMap),a.thickness.value=e.thickness,e.thicknessMap&&(a.thicknessMap.value=e.thicknessMap),a.attenuationDistance.value=e.attenuationDistance,a.attenuationColor.value.copy(e.attenuationColor)),a.specularIntensity.value=e.specularIntensity,a.specularColor.value.copy(e.specularColor),e.specularIntensityMap&&(a.specularIntensityMap.value=e.specularIntensityMap),e.specularColorMap)&&(a.specularColorMap.value=e.specularColorMap);else if(i.isMeshMatcapMaterial)u(t,i),o=t,(a=i).matcap&&(o.matcap.value=a.matcap);else if(i.isMeshDepthMaterial)u(t,i);else if(i.isMeshDistanceMaterial)u(t,i),e=i,(a=t).referencePosition.value.copy(e.referencePosition),a.nearDistance.value=e.nearDistance,a.farDistance.value=e.farDistance;else if(i.isMeshNormalMaterial)u(t,i);else if(i.isLineBasicMaterial)a=i,(s=t).diffuse.value.copy(a.color),s.opacity.value=a.opacity,i.isLineDashedMaterial&&(s=i,(a=t).dashSize.value=s.dashSize,a.totalSize.value=s.dashSize+s.gapSize,a.scale.value=s.scale);else if(i.isPointsMaterial){s=i,(a=t).diffuse.value.copy(s.color),a.opacity.value=s.opacity,a.size.value=s.size*r,a.scale.value=.5*n,s.map&&(a.map.value=s.map),s.alphaMap&&(a.alphaMap.value=s.alphaMap),0<s.alphaTest&&(a.alphaTest.value=s.alphaTest);let e;s.map?e=s.map:s.alphaMap&&(e=s.alphaMap),void 0!==e&&(!0===e.matrixAutoUpdate&&e.updateMatrix(),a.uvTransform.value.copy(e.matrix))}else if(i.isSpriteMaterial){n=i,(r=t).diffuse.value.copy(n.color),r.opacity.value=n.opacity,r.rotation.value=n.rotation,n.map&&(r.map.value=n.map),n.alphaMap&&(r.alphaMap.value=n.alphaMap),0<n.alphaTest&&(r.alphaTest.value=n.alphaTest);let e;n.map?e=n.map:n.alphaMap&&(e=n.alphaMap),void 0!==e&&(!0===e.matrixAutoUpdate&&e.updateMatrix(),r.uvTransform.value.copy(e.matrix))}else i.isShadowMaterial?(t.color.value.copy(i.color),t.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1);var s,e,o,l,h}}}function h0(){var e=Cs("canvas");return e.style.display="block",e}function rh(e={}){this.isWebGLRenderer=!0;const n=void 0!==e.canvas?e.canvas:h0(),i=void 0!==e.context?e.context:null,b=void 0===e.depth||e.depth,w=void 0===e.stencil||e.stencil,B=void 0!==e.antialias&&e.antialias,H=void 0===e.premultipliedAlpha||e.premultipliedAlpha,V=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer,G=void 0!==e.powerPreference?e.powerPreference:"default",W=void 0!==e.failIfMajorPerformanceCaveat&&e.failIfMajorPerformanceCaveat;let j,p=(j=null!==i?i.getContextAttributes().alpha:void 0!==e.alpha&&e.alpha,null),M=null;const a=[],s=[],S=(this.domElement=n,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vn,this.physicallyCorrectLights=!1,this.toneMapping=$t,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}}),this);let X=!1,q=0,Y=0,T=null,E=-1,A=null;const u=new Ue,$=new Ue;let Z=null,r=n.width,L=n.height,C=1,K=null,J=null;const l=new Ue(0,0,r,L),h=new Ue(0,0,r,L);let Q=!1;const ee=new ro;let te=!1,ie=!1,R=null;const re=new pe,d=new ve,I=new P,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return null===T?C:1}let D=i;function se(t,i){for(let e=0;e<t.length;e++){var r=t[e],r=n.getContext(r,i);if(null!==r)return r}return null}try{var oe={alpha:!0,depth:b,stencil:w,antialias:B,premultipliedAlpha:H,preserveDrawingBuffer:V,powerPreference:G,failIfMajorPerformanceCaveat:W};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r"+to),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Me,!1),null===D){var le=["webgl2","webgl","experimental-webgl"];if(!0===S.isWebGL1Renderer&&le.shift(),null===(D=se(le,oe)))throw se(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}void 0===D.getShaderPrecisionFormat&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}let m,N,O,f,z,k,F,he,ce,ue,g,c,de,me,fe,U,o,v,ge,xe,_e,x,_;function ye(){m=new bm(D),N=new vm(D,m,e),m.init(N),x=new s0(D,m,N),O=new n0(D,m,N),f=new Em,z=new Wg,k=new i0(D,m,O,z,N,x,f),F=new xm(S),he=new wm(S),ce=new Od(D,N),_=new mm(D,m,ce,N),ue=new Sm(D,ce,f,_),g=new Rm(D,ue,ce,f),ge=new Lm(D,N,k),U=new _m(z),c=new Hg(S,F,he,m,N,_,U),de=new c0(S,z),me=new Xg,fe=new Jg(m,N),v=new pm(S,F,O,g,j,H),o=new t0(S,g,N),xe=new gm(D,m,f,N),_e=new Tm(D,m,f,N),f.programs=c.programs,S.capabilities=N,S.extensions=m,S.properties=z,S.renderLists=me,S.shadowMap=o,S.state=O,S.info=f}ye();const y=new l0(S,D);function be(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;var e=f.autoReset,t=o.enabled,i=o.autoUpdate,r=o.needsUpdate,n=o.type;ye(),f.autoReset=e,o.enabled=t,o.autoUpdate=i,o.needsUpdate=r,o.type=n}function Me(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function Se(e){var e=e.target,t=(e.removeEventListener("dispose",Se),e=e),i=z.get(t).programs;void 0!==i&&(i.forEach(function(e){c.releaseProgram(e)}),t.isShaderMaterial)&&c.releaseShaderCache(t),z.remove(e)}this.xr=y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){var e=m.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){var e=m.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(e){void 0!==e&&(C=e,this.setSize(r,L,!1))},this.getSize=function(e){return e.set(r,L)},this.setSize=function(e,t,i){y.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(r=e,L=t,n.width=Math.floor(e*C),n.height=Math.floor(t*C),!1!==i&&(n.style.width=e+"px",n.style.height=t+"px"),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(r*C,L*C).floor()},this.setDrawingBufferSize=function(e,t,i){r=e,L=t,C=i,n.width=Math.floor(e*i),n.height=Math.floor(t*i),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(u)},this.getViewport=function(e){return e.copy(l)},this.setViewport=function(e,t,i,r){e.isVector4?l.set(e.x,e.y,e.z,e.w):l.set(e,t,i,r),O.viewport(u.copy(l).multiplyScalar(C).floor())},this.getScissor=function(e){return e.copy(h)},this.setScissor=function(e,t,i,r){e.isVector4?h.set(e.x,e.y,e.z,e.w):h.set(e,t,i,r),O.scissor($.copy(h).multiplyScalar(C).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(e){O.setScissorTest(Q=e)},this.setOpaqueSort=function(e){K=e},this.setTransparentSort=function(e){J=e},this.getClearColor=function(e){return e.copy(v.getClearColor())},this.setClearColor=function(){v.setClearColor.apply(v,arguments)},this.getClearAlpha=function(){return v.getClearAlpha()},this.setClearAlpha=function(){v.setClearAlpha.apply(v,arguments)},this.clear=function(e=!0,t=!0,i=!0){let r=0;e&&(r|=16384),t&&(r|=256),i&&(r|=1024),D.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),fe.dispose(),z.dispose(),F.dispose(),he.dispose(),g.dispose(),_.dispose(),c.dispose(),y.dispose(),y.removeEventListener("sessionstart",Ee),y.removeEventListener("sessionend",Ae),R&&(R.dispose(),R=null),t.stop()},this.renderBufferDirect=function(e,t,i,r,n,a){null===t&&(t=ne);var s=n.isMesh&&n.matrixWorld.determinant()<0,e=function(e,t,i,r,n){!0!==t.isScene&&(t=ne),k.resetTextureUnits();var a=t.fog,s=r.isMeshStandardMaterial?t.environment:null,o=null===T?S.outputEncoding:!0===T.isXRRenderTarget?T.texture.encoding:Vn,s=(r.isMeshStandardMaterial?he:F).get(r.envMap||s),l=!0===r.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,h=!!r.normalMap&&!!i.attributes.tangent,c=!!i.morphAttributes.position,u=!!i.morphAttributes.normal,d=!!i.morphAttributes.color,p=r.toneMapped?S.toneMapping:$t,m=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,m=void 0!==m?m.length:0,f=z.get(r),g=M.state.lights;!0!==te||!0!==ie&&e===A||(w=e===A&&r.id===E,U.setState(r,e,w));let v=!1,x=(r.version===f.__version?(f.needsLights&&f.lightsStateVersion!==g.state.version||f.outputEncoding!==o||n.isInstancedMesh&&!1===f.instancing||!n.isInstancedMesh&&!0===f.instancing||n.isSkinnedMesh&&!1===f.skinning||!n.isSkinnedMesh&&!0===f.skinning||f.envMap!==s||!0===r.fog&&f.fog!==a||void 0!==f.numClippingPlanes&&(f.numClippingPlanes!==U.numPlanes||f.numIntersection!==U.numIntersection)||f.vertexAlphas!==l||f.vertexTangents!==h||f.morphTargets!==c||f.morphNormals!==u||f.morphColors!==d||f.toneMapping!==p||!0===N.isWebGL2&&f.morphTargetsCount!==m)&&(v=!0):(v=!0,f.__version=r.version),f.currentProgram),_=(!0===v&&(x=Pe(r,t,n)),!1),y=!1,b=!1;var w=x.getUniforms(),g=f.uniforms;O.useProgram(x.program)&&(_=!0,y=!0,b=!0),r.id!==E&&(E=r.id,y=!0),(_||A!==e)&&(w.setValue(D,"projectionMatrix",e.projectionMatrix),N.logarithmicDepthBuffer&&w.setValue(D,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),A!==e&&(A=e,y=!0,b=!0),(r.isShaderMaterial||r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshStandardMaterial||r.envMap)&&void 0!==(o=w.map.cameraPosition)&&o.setValue(D,I.setFromMatrixPosition(e.matrixWorld)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&w.setValue(D,"isOrthographic",!0===e.isOrthographicCamera),r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial||r.isShadowMaterial||n.isSkinnedMesh)&&w.setValue(D,"viewMatrix",e.matrixWorldInverse);n.isSkinnedMesh&&(w.setOptional(D,n,"bindMatrix"),w.setOptional(D,n,"bindMatrixInverse"),s=n.skeleton)&&(N.floatVertexTextures?(null===s.boneTexture&&s.computeBoneTexture(),w.setValue(D,"boneTexture",s.boneTexture,k),w.setValue(D,"boneTextureSize",s.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));l=i.morphAttributes;return(void 0!==l.position||void 0!==l.normal||void 0!==l.color&&!0===N.isWebGL2)&&ge.update(n,i,r,x),!y&&f.receiveShadow===n.receiveShadow||(f.receiveShadow=n.receiveShadow,w.setValue(D,"receiveShadow",n.receiveShadow)),y&&(w.setValue(D,"toneMappingExposure",S.toneMappingExposure),f.needsLights&&function(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}(g,b),a&&!0===r.fog&&de.refreshFogUniforms(g,a),de.refreshMaterialUniforms(g,r,C,L,R),_r.upload(D,f.uniformsList,g,k)),r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(_r.upload(D,f.uniformsList,g,k),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&w.setValue(D,"center",n.center),w.setValue(D,"modelViewMatrix",n.modelViewMatrix),w.setValue(D,"normalMatrix",n.normalMatrix),w.setValue(D,"modelMatrix",n.matrixWorld),x}(e,t,i,r,n);O.setMaterial(r,s);let o=i.index;t=i.attributes.position;if(null===o){if(void 0===t||0===t.count)return}else if(0===o.count)return;let l=1;!0===r.wireframe&&(o=ue.getWireframeAttribute(i),l=2),_.setup(n,r,e,i,o);let h,c=xe;null!==o&&(h=ce.get(o),(c=_e).setIndex(h));var s=(null!==o?o:t).count,e=i.drawRange.start*l,t=i.drawRange.count*l,u=null!==a?a.start*l:0,a=null!==a?a.count*l:1/0,d=Math.max(e,u),s=Math.min(s,e+t,u+a)-1,e=Math.max(0,s-d+1);if(0!==e){if(n.isMesh)!0===r.wireframe?(O.setLineWidth(r.wireframeLinewidth*ae()),c.setMode(1)):c.setMode(4);else if(n.isLine){let e=r.linewidth;void 0===e&&(e=1),O.setLineWidth(e*ae()),n.isLineSegments?c.setMode(1):n.isLineLoop?c.setMode(2):c.setMode(3)}else n.isPoints?c.setMode(0):n.isSprite&&c.setMode(4);n.isInstancedMesh?c.renderInstances(d,e,n.count):i.isInstancedBufferGeometry?(t=Math.min(i.instanceCount,i._maxInstanceCount),c.renderInstances(d,e,t)):c.render(d,e)}},this.compile=function(r,t){(M=fe.get(r)).init(),s.push(M),r.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow)&&M.pushShadow(e)}),M.setupLights(S.physicallyCorrectLights),r.traverse(function(t){var i=t.material;if(i)if(Array.isArray(i))for(let e=0;e<i.length;e++)Pe(i[e],r,t);else Pe(i,r,t)}),s.pop(),M=null};let Te=null;function Ee(){t.stop()}function Ae(){t.start()}const t=new Zc;function Le(e,t,i,r){var n,a,s,o,l,h=e.opaque,c=e.transmissive,e=e.transparent;M.setupLightsView(i),0<c.length&&(n=h,a=t,s=i,o=N.isWebGL2,null===R&&(R=new Kt(1,1,{generateMipmaps:!0,type:m.has("EXT_color_buffer_half_float")?Mn:oi,minFilter:li,samples:o&&!0===B?4:0})),S.getDrawingBufferSize(d),o?R.setSize(d.x,d.y):R.setSize(Ar(d.x),Ar(d.y)),o=S.getRenderTarget(),S.setRenderTarget(R),S.clear(),l=S.toneMapping,S.toneMapping=$t,Ce(n,a,s),S.toneMapping=l,k.updateMultisampleRenderTarget(R),k.updateRenderTargetMipmap(R),S.setRenderTarget(o)),r&&O.viewport(u.copy(r)),0<h.length&&Ce(h,t,i),0<c.length&&Ce(c,t,i),0<e.length&&Ce(e,t,i),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ce(i,r,n){var a,s,o=!0===r.isScene?r.overrideMaterial:null;for(let e=0,t=i.length;e<t;e++){var l=i[e],h=l.object,c=l.geometry,u=null===o?l.material:o,l=l.group;h.layers.test(n.layers)&&(a=r,s=n,c=c,u=u,l=l,(h=h).onBeforeRender(S,a,s,c,u,l),h.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),u.onBeforeRender(S,a,s,c,h,l),!0===u.transparent&&u.side===cn?(u.side=qt,u.needsUpdate=!0,S.renderBufferDirect(s,a,c,u,h,l),u.side=ki,u.needsUpdate=!0,S.renderBufferDirect(s,a,c,u,h,l),u.side=cn):S.renderBufferDirect(s,a,c,u,h,l),h.onAfterRender(S,a,s,c,u,l))}}function Pe(e,t,i){!0!==t.isScene&&(t=ne);var r=z.get(e),n=M.state.lights,a=M.state.shadowsArray,s=n.state.version,a=c.getParameters(e,n.state,a,t,i),o=c.getProgramCacheKey(a);let l=r.programs,h=(r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?he:F).get(e.envMap||r.environment),void 0===l&&(e.addEventListener("dispose",Se),l=new Map,r.programs=l),l.get(o));if(void 0!==h){if(r.currentProgram===h&&r.lightsStateVersion===s)return Re(e,a),h}else a.uniforms=c.getUniforms(e),e.onBuild(i,a,S),e.onBeforeCompile(a,S),h=c.acquireProgram(a,o),l.set(o,h),r.uniforms=a.uniforms;t=r.uniforms,(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(t.clippingPlanes=U.uniform),Re(e,a),r.needsLights=(i=e).isMeshLambertMaterial||i.isMeshToonMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isShadowMaterial||i.isShaderMaterial&&!0===i.lights,r.lightsStateVersion=s,r.needsLights&&(t.ambientLightColor.value=n.state.ambient,t.lightProbe.value=n.state.probe,t.directionalLights.value=n.state.directional,t.directionalLightShadows.value=n.state.directionalShadow,t.spotLights.value=n.state.spot,t.spotLightShadows.value=n.state.spotShadow,t.rectAreaLights.value=n.state.rectArea,t.ltc_1.value=n.state.rectAreaLTC1,t.ltc_2.value=n.state.rectAreaLTC2,t.pointLights.value=n.state.point,t.pointLightShadows.value=n.state.pointShadow,t.hemisphereLights.value=n.state.hemi,t.directionalShadowMap.value=n.state.directionalShadowMap,t.directionalShadowMatrix.value=n.state.directionalShadowMatrix,t.spotShadowMap.value=n.state.spotShadowMap,t.spotShadowMatrix.value=n.state.spotShadowMatrix,t.pointShadowMap.value=n.state.pointShadowMap,t.pointShadowMatrix.value=n.state.pointShadowMatrix),o=h.getUniforms(),a=_r.seqWithValue(o.seq,t);return r.currentProgram=h,r.uniformsList=a,h}function Re(e,t){e=z.get(e);e.outputEncoding=t.outputEncoding,e.instancing=t.instancing,e.skinning=t.skinning,e.morphTargets=t.morphTargets,e.morphNormals=t.morphNormals,e.morphColors=t.morphColors,e.morphTargetsCount=t.morphTargetsCount,e.numClippingPlanes=t.numClippingPlanes,e.numIntersection=t.numClipIntersection,e.vertexAlphas=t.vertexAlphas,e.vertexTangents=t.vertexTangents,e.toneMapping=t.toneMapping}t.setAnimationLoop(function(e){Te&&Te(e)}),"undefined"!=typeof self&&t.setContext(self),this.setAnimationLoop=function(e){Te=e,y.setAnimationLoop(e),null===e?t.stop():t.start()},y.addEventListener("sessionstart",Ee),y.addEventListener("sessionend",Ae),this.render=function(i,e){if(void 0!==e&&!0!==e.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else if(!0!==X){!0===i.autoUpdate&&i.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),!0===y.enabled&&!0===y.isPresenting&&(!0===y.cameraAutoUpdate&&y.updateCamera(e),e=y.getCamera()),!0===i.isScene&&i.onBeforeRender(S,i,e,T),(M=fe.get(i,s.length)).init(),s.push(M),re.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),ee.setFromProjectionMatrix(re),ie=this.localClippingEnabled,te=U.init(this.clippingPlanes,ie,e),(p=me.get(i,a.length)).init(),a.push(p),function i(r,n,a,s){if(!1===r.visible)return;if(r.layers.test(n.layers))if(r.isGroup)a=r.renderOrder;else if(r.isLOD)!0===r.autoUpdate&&r.update(n);else if(r.isLight)M.pushLight(r),r.castShadow&&M.pushShadow(r);else if(r.isSprite){if(!r.frustumCulled||ee.intersectsSprite(r)){s&&I.setFromMatrixPosition(r.matrixWorld).applyMatrix4(re);const e=g.update(r),t=r.material;t.visible&&p.push(r,e,t,a,I.z,null)}}else if((r.isMesh||r.isLine||r.isPoints)&&(r.isSkinnedMesh&&r.skeleton.frame!==f.render.frame&&(r.skeleton.update(),r.skeleton.frame=f.render.frame),!r.frustumCulled||ee.intersectsObject(r))){s&&I.setFromMatrixPosition(r.matrixWorld).applyMatrix4(re);const l=g.update(r),h=r.material;if(Array.isArray(h)){const c=l.groups;for(let e=0,t=c.length;e<t;e++){const u=c[e],d=h[u.materialIndex];d&&d.visible&&p.push(r,l,d,a,I.z,u)}}else h.visible&&p.push(r,l,h,a,I.z,null)}const o=r.children;for(let e=0,t=o.length;e<t;e++)i(o[e],n,a,s)}(i,e,0,S.sortObjects),p.finish(),!0===S.sortObjects&&p.sort(K,J),!0===te&&U.beginShadows();var t=M.state.shadowsArray;if(o.render(t,i,e),!0===te&&U.endShadows(),!0===this.info.autoReset&&this.info.reset(),v.render(p,i),M.setupLights(S.physicallyCorrectLights),e.isArrayCamera){var r=e.cameras;for(let e=0,t=r.length;e<t;e++){var n=r[e];Le(p,i,n,n.viewport)}}else Le(p,i,e);null!==T&&(k.updateMultisampleRenderTarget(T),k.updateRenderTargetMipmap(T)),!0===i.isScene&&i.onAfterRender(S,i,e),_.resetDefaultState(),E=-1,A=null,s.pop(),M=0<s.length?s[s.length-1]:null,a.pop(),p=0<a.length?a[a.length-1]:null}},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,i){z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=i;t=z.get(e);t.__hasExternalTextures=!0,t.__hasExternalTextures&&(t.__autoAllocateDepthBuffer=void 0===i,t.__autoAllocateDepthBuffer||!0===m.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),t.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){e=z.get(e);e.__webglFramebuffer=t,e.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){T=e,q=t,Y=i;let r=!0;var n;e&&(void 0!==(n=z.get(e)).__useDefaultFramebuffer?(O.bindFramebuffer(36160,null),r=!1):void 0===n.__webglFramebuffer?k.setupRenderTarget(e):n.__hasExternalTextures&&k.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture));let a=null,s=!1,o=!1;Z=e?(((n=e.texture).isData3DTexture||n.isDataArrayTexture)&&(o=!0),n=z.get(e).__webglFramebuffer,e.isWebGLCubeRenderTarget?(a=n[t],s=!0):a=N.isWebGL2&&0<e.samples&&!1===k.useMultisampledRTT(e)?z.get(e).__webglMultisampledFramebuffer:n,u.copy(e.viewport),$.copy(e.scissor),e.scissorTest):(u.copy(l).multiplyScalar(C).floor(),$.copy(h).multiplyScalar(C).floor(),Q),O.bindFramebuffer(36160,a)&&N.drawBuffers&&r&&O.drawBuffers(e,a),O.viewport(u),O.scissor($),O.setScissorTest(Z),s?(n=z.get(e.texture),D.framebufferTexture2D(36160,36064,34069+t,n.__webglTexture,i)):o&&(n=z.get(e.texture),e=t||0,D.framebufferTextureLayer(36160,36064,n.__webglTexture,i||0,e)),E=-1},this.readRenderTargetPixels=function(t,i,r,n,a,s,o){if(t&&t.isWebGLRenderTarget){let e=z.get(t).__webglFramebuffer;if(e=t.isWebGLCubeRenderTarget&&void 0!==o?e[o]:e){O.bindFramebuffer(36160,e);try{var l,h=t.texture,c=h.format,u=h.type;c!==Nt&&x.convert(c)!==D.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):(l=u===Mn&&(m.has("EXT_color_buffer_half_float")||N.isWebGL2&&m.has("EXT_color_buffer_float")),u===oi||x.convert(u)===D.getParameter(35738)||u===Ft&&(N.isWebGL2||m.has("OES_texture_float")||m.has("WEBGL_color_buffer_float"))||l?0<=i&&i<=t.width-n&&0<=r&&r<=t.height-a&&D.readPixels(i,r,n,a,x.convert(c),x.convert(u),s):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."))}finally{o=null!==T?z.get(T).__webglFramebuffer:null;O.bindFramebuffer(36160,o)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.copyFramebufferToTexture=function(e,t,i=0){var r=Math.pow(2,-i),n=Math.floor(t.image.width*r),r=Math.floor(t.image.height*r);k.setTexture2D(t,0),D.copyTexSubImage2D(3553,i,0,0,e.x,e.y,n,r),O.unbindTexture()},this.copyTextureToTexture=function(e,t,i,r=0){var n=t.image.width,a=t.image.height,s=x.convert(i.format),o=x.convert(i.type);k.setTexture2D(i,0),D.pixelStorei(37440,i.flipY),D.pixelStorei(37441,i.premultiplyAlpha),D.pixelStorei(3317,i.unpackAlignment),t.isDataTexture?D.texSubImage2D(3553,r,e.x,e.y,n,a,s,o,t.image.data):t.isCompressedTexture?D.compressedTexSubImage2D(3553,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,s,t.mipmaps[0].data):D.texSubImage2D(3553,r,e.x,e.y,s,o,t.image),0===r&&i.generateMipmaps&&D.generateMipmap(3553),O.unbindTexture()},this.copyTextureToTexture3D=function(t,i,r,n,a=0){if(S.isWebGL1Renderer)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");else{var s=t.max.x-t.min.x+1,o=t.max.y-t.min.y+1,l=t.max.z-t.min.z+1,h=x.convert(n.format),c=x.convert(n.type);let e;if(n.isData3DTexture)k.setTexture3D(n,0),e=32879;else{if(!n.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");k.setTexture2DArray(n,0),e=35866}D.pixelStorei(37440,n.flipY),D.pixelStorei(37441,n.premultiplyAlpha),D.pixelStorei(3317,n.unpackAlignment);var u=D.getParameter(3314),d=D.getParameter(32878),p=D.getParameter(3316),m=D.getParameter(3315),f=D.getParameter(32877),g=r.isCompressedTexture?r.mipmaps[0]:r.image;D.pixelStorei(3314,g.width),D.pixelStorei(32878,g.height),D.pixelStorei(3316,t.min.x),D.pixelStorei(3315,t.min.y),D.pixelStorei(32877,t.min.z),r.isDataTexture||r.isData3DTexture?D.texSubImage3D(e,a,i.x,i.y,i.z,s,o,l,h,c,g.data):r.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(e,a,i.x,i.y,i.z,s,o,l,h,g.data)):D.texSubImage3D(e,a,i.x,i.y,i.z,s,o,l,h,c,g),D.pixelStorei(3314,u),D.pixelStorei(32878,d),D.pixelStorei(3316,p),D.pixelStorei(3315,m),D.pixelStorei(32877,f),0===a&&n.generateMipmaps&&D.generateMipmap(e),O.unbindTexture()}},this.initTexture=function(e){k.setTexture2D(e,0),O.unbindTexture()},this.resetState=function(){q=0,Y=0,T=null,O.reset(),_.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class u0 extends rh{}u0.prototype.isWebGL1Renderer=!0;class ws extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){e=super.toJSON(e);return null!==this.fog&&(e.object.fog=this.fog.toJSON()),e}}class d0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.usage=ka,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(i,r,n){i*=this.stride,n*=r.stride;for(let e=0,t=this.stride;e<t;e++)this.array[i+e]=r.array[n+e];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Yt()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);e=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),e=new this.constructor(e,this.stride);return e.setUsage(this.usage),e}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Yt()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new P;class oo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=!0===r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(i){for(let e=0,t=this.data.count;e<t;e++)xt.fromBufferAttribute(this,e),xt.applyMatrix4(i),this.setXYZ(e,xt.x,xt.y,xt.z);return this}applyNormalMatrix(i){for(let e=0,t=this.count;e<t;e++)xt.fromBufferAttribute(this,e),xt.applyNormalMatrix(i),this.setXYZ(e,xt.x,xt.y,xt.z);return this}transformDirection(i){for(let e=0,t=this.count;e<t;e++)xt.fromBufferAttribute(this,e),xt.transformDirection(i),this.setXYZ(e,xt.x,xt.y,xt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized);console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");var t=[];for(let e=0;e<this.count;e++){var i=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[i+e])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}toJSON(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized};console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");var t=[];for(let e=0;e<this.count;e++){var i=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[i+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}}class f0 extends it{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gl=new P,Hl=new Ue,Wl=new Ue,p0=new P,jl=new pe;class ah extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){var i=new Ue,r=this.geometry.attributes.skinWeight;for(let e=0,t=r.count;e<t;e++){i.fromBufferAttribute(r,e);var n=1/i.manhattanLength();n!=1/0?i.multiplyScalar(n):i.set(1,0,0,0),r.setXYZW(e,i.x,i.y,i.z,i.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){var i=this.skeleton,r=this.geometry;Hl.fromBufferAttribute(r.attributes.skinIndex,e),Wl.fromBufferAttribute(r.attributes.skinWeight,e),Gl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){var n,a=Wl.getComponent(e);0!==a&&(n=Hl.getComponent(e),jl.multiplyMatrices(i.bones[n].matrixWorld,i.boneInverses[n]),t.addScaledVector(p0.copy(Gl).applyMatrix4(jl),a))}return t.applyMatrix4(this.bindMatrixInverse)}}class Cr extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oh extends nt{constructor(e=null,t=1,i=1,r,n,a,s,o,l=ft,h=ft,c,u){super(null,a,s,o,l,h,r,n,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new pe,m0=new pe;class Ur{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){var e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),0===t.length)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new pe)}}calculateInverses(){for(let e=this.boneInverses.length=0,t=this.bones.length;e<t;e++){var i=new pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){var i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){var r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){var i=this.bones,r=this.boneInverses,n=this.boneMatrices,e=this.boneTexture;for(let e=0,t=i.length;e<t;e++){var a=i[e]?i[e].matrixWorld:m0;Xl.multiplyMatrices(a,r[e]),Xl.toArray(n,16*e)}null!==e&&(e.needsUpdate=!0)}clone(){return new Ur(this.bones,this.boneInverses)}computeBoneTexture(){var e=Vc(Math.sqrt(4*this.bones.length)),t=(e=Math.max(e,4),new Float32Array(e*e*4)),i=(t.set(this.boneMatrices),new oh(t,e,e,Nt,Ft));return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(i){for(let e=0,t=this.bones.length;e<t;e++){var r=this.bones[e];if(r.name===i)return r}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(i,r){this.uuid=i.uuid;for(let t=0,e=i.bones.length;t<e;t++){var n=i.bones[t];let e=r[n];void 0===e&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),e=new Cr),this.bones.push(e),this.boneInverses.push((new pe).fromArray(i.boneInverses[t]))}return this.init(),this}toJSON(){var i={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]},r=(i.uuid=this.uuid,this.bones),n=this.boneInverses;for(let e=0,t=r.length;e<t;e++){var a=r[e],a=(i.bones.push(a.uuid),n[e]);i.boneInverses.push(a.toArray())}return i}}class Os extends it{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new P,$l=new P,Yl=new pe,Ta=new io,ur=new Zi;class Br extends Ye{constructor(e=new ct,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){var e=this.geometry;if(null===e.index){var i=e.attributes.position,r=[0];for(let e=1,t=i.count;e<t;e++)ql.fromBufferAttribute(i,e-1),$l.fromBufferAttribute(i,e),r[e]=r[e-1],r[e]+=ql.distanceTo($l);e.setAttribute("lineDistance",new Xe(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(i,r){var e=this.geometry,t=this.matrixWorld,n=i.params.Line.threshold,a=e.drawRange;if(null===e.boundingSphere&&e.computeBoundingSphere(),ur.copy(e.boundingSphere),ur.applyMatrix4(t),ur.radius+=n,!1!==i.ray.intersectsSphere(ur)){Yl.copy(t).invert(),Ta.copy(i.ray).applyMatrix4(Yl);var s,t=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=t*t,l=new P,h=new P,c=new P,u=new P,d=this.isLineSegments?2:1,p=e.index,m=e.attributes.position;if(null!==p)for(let e=Math.max(0,a.start),t=Math.min(p.count,a.start+a.count)-1;e<t;e+=d){var f=p.getX(e),g=p.getX(e+1);l.fromBufferAttribute(m,f),h.fromBufferAttribute(m,g),Ta.distanceSqToSegment(l,h,u,c)>o||(u.applyMatrix4(this.matrixWorld),(f=i.ray.origin.distanceTo(u))<i.near||f>i.far||r.push({distance:f,point:c.clone().applyMatrix4(this.matrixWorld),index:e,face:null,faceIndex:null,object:this}))}else for(let e=Math.max(0,a.start),t=Math.min(m.count,a.start+a.count)-1;e<t;e+=d)l.fromBufferAttribute(m,e),h.fromBufferAttribute(m,e+1),Ta.distanceSqToSegment(l,h,u,c)>o||(u.applyMatrix4(this.matrixWorld),(s=i.ray.origin.distanceTo(u))<i.near||s>i.far||r.push({distance:s,point:c.clone().applyMatrix4(this.matrixWorld),index:e,face:null,faceIndex:null,object:this}))}}updateMorphTargets(){var e=this.geometry.morphAttributes,t=Object.keys(e);if(0<t.length){var i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){var r=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=e}}}}}const Kl=new P,Zl=new P;class g0 extends Br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){var e=this.geometry;if(null===e.index){var i=e.attributes.position,r=[];for(let e=0,t=i.count;e<t;e+=2)Kl.fromBufferAttribute(i,e),Zl.fromBufferAttribute(i,e+1),r[e]=0===e?0:r[e-1],r[e+1]=r[e]+Kl.distanceTo(Zl);e.setAttribute("lineDistance",new Xe(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v0 extends Br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lo extends it{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jl=new pe,Ga=new io,dr=new Zi,fr=new P;class co extends Ye{constructor(e=new ct,t=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(i,r){var e=this.geometry,n=this.matrixWorld,t=i.params.Points.threshold,a=e.drawRange;if(null===e.boundingSphere&&e.computeBoundingSphere(),dr.copy(e.boundingSphere),dr.applyMatrix4(n),dr.radius+=t,!1!==i.ray.intersectsSphere(dr)){Jl.copy(n).invert(),Ga.copy(i.ray).applyMatrix4(Jl);var t=t/((this.scale.x+this.scale.y+this.scale.z)/3),s=t*t,o=e.index,l=e.attributes.position;if(null!==o)for(let e=Math.max(0,a.start),t=Math.min(o.count,a.start+a.count);e<t;e++){var h=o.getX(e);fr.fromBufferAttribute(l,h),Ql(fr,h,s,n,i,r,this)}else for(let e=Math.max(0,a.start),t=Math.min(l.count,a.start+a.count);e<t;e++)fr.fromBufferAttribute(l,e),Ql(fr,e,s,n,i,r,this)}}updateMorphTargets(){var e=this.geometry.morphAttributes,t=Object.keys(e);if(0<t.length){var i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){var r=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=e}}}}}function Ql(e,t,i,r,n,a,s){var o=Ga.distanceSqToPoint(e);o<i&&(i=new P,Ga.closestPointToPoint(e,i),i.applyMatrix4(r),(e=n.ray.origin.distanceTo(i))<n.near||e>n.far||a.push({distance:e,distanceToRay:Math.sqrt(o),point:i,index:t,face:null,object:s}))}class _0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){e=this.getUtoTmapping(e);return this.getPoint(e,t)}getPoints(t=5){var i=[];for(let e=0;e<=t;e++)i.push(this.getPoint(e/t));return i}getSpacedPoints(t=5){var i=[];for(let e=0;e<=t;e++)i.push(this.getPointAt(e/t));return i}getLength(){var e=this.getLengths();return e[e.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var i=[];let r,n=this.getPoint(0),a=0;i.push(0);for(let e=1;e<=t;e++)r=this.getPoint(e/t),a+=r.distanceTo(n),i.push(a),n=r;return this.cacheArcLengths=i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){var i=this.getLengths();let r=0;var n=i.length;let a,s=(a=t||e*i[n-1],0),o=n-1,l;for(;s<=o;)if((l=i[r=Math.floor(s+(o-s)/2)]-a)<0)s=r+1;else{if(!(0<l)){o=r;break}o=r-1}return i[r=o]===a?r/(n-1):(t=i[r],e=i[r+1]-t,t=(a-t)/e,(r+t)/(n-1))}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),1<r&&(r=1);var e=this.getPoint(i),n=this.getPoint(r),t=t||new(e.isVector2?ve:P);return t.copy(n).sub(e).normalize(),t}getTangentAt(e,t){e=this.getUtoTmapping(e);return this.getTangent(e,t)}computeFrenetFrames(i,e){var t=new P,r=[],n=[],a=[],s=new P,o=new pe;for(let e=0;e<=i;e++){var l=e/i;r[e]=this.getTangentAt(l,new P)}n[0]=new P,a[0]=new P;let h=Number.MAX_VALUE;var c,u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=h&&(h=u,t.set(1,0,0)),d<=h&&(h=d,t.set(0,1,0)),p<=h&&t.set(0,0,1),s.crossVectors(r[0],t).normalize(),n[0].crossVectors(r[0],s),a[0].crossVectors(r[0],n[0]);for(let e=1;e<=i;e++)n[e]=n[e-1].clone(),a[e]=a[e-1].clone(),s.crossVectors(r[e-1],r[e]),s.length()>Number.EPSILON&&(s.normalize(),c=Math.acos(at(r[e-1].dot(r[e]),-1,1)),n[e].applyMatrix4(o.makeRotationAxis(s,c))),a[e].crossVectors(r[e],n[e]);if(!0===e){let t=Math.acos(at(n[0].dot(n[i]),-1,1));t/=i,0<r[0].dot(s.crossVectors(n[0],n[i]))&&(t=-t);for(let e=1;e<=i;e++)n[e].applyMatrix4(o.makeRotationAxis(r[e],t*e)),a[e].crossVectors(r[e],n[e])}return{tangents:r,normals:n,binormals:a}}clone(){return(new this.constructor).copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){var e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}new P;class ho extends ct{constructor(p=1,m=1,t=1,f=8,r=1,e=!1,g=0,v=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:p,radiusBottom:m,height:t,radialSegments:f,heightSegments:r,openEnded:e,thetaStart:g,thetaLength:v};const x=this,_=(f=Math.floor(f),r=Math.floor(r),[]),y=[],b=[],w=[];let M=0;const n=[],S=t/2;let T=0;{var a=new P,s=new P;let i=0;var o=(m-p)/t;for(let e=0;e<=r;e++){var l=[],h=e/r,c=h*(m-p)+p;for(let e=0;e<=f;e++){var u=e/f,d=u*v+g,E=Math.sin(d),d=Math.cos(d);s.x=c*E,s.y=-h*t+S,s.z=c*d,y.push(s.x,s.y,s.z),a.set(E,o,d).normalize(),b.push(a.x,a.y,a.z),w.push(u,1-h),l.push(M++)}n.push(l)}for(let t=0;t<f;t++)for(let e=0;e<r;e++){var A=n[e][t],L=n[e+1][t],C=n[e+1][t+1],R=n[e][t+1];_.push(A,L,R),_.push(L,C,R),i+=6}x.addGroup(T,i,0),T+=i}function i(t){var i=M,r=new ve,n=new P;let a=0;var s=!0===t?p:m,o=!0===t?1:-1;for(let e=1;e<=f;e++)y.push(0,S*o,0),b.push(0,o,0),w.push(.5,.5),M++;var l=M;for(let e=0;e<=f;e++){var h=e/f*v+g,c=Math.cos(h),h=Math.sin(h);n.x=s*h,n.y=S*o,n.z=s*c,y.push(n.x,n.y,n.z),b.push(0,o,0),r.x=.5*c+.5,r.y=.5*h*o+.5,w.push(r.x,r.y),M++}for(let e=0;e<f;e++){var u=i+e,d=l+e;!0===t?_.push(d,d+1,u):_.push(d+1,d,u),a+=3}x.addGroup(T,a,!0===t?1:2),T+=a}!1===e&&(0<p&&i(!0),0<m)&&i(!1),this.setIndex(_),this.setAttribute("position",new Xe(y,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(w,2))}static fromJSON(e){return new ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}new P,new P,new P,new rn;class x0 extends it{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class jn extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ks extends it{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends ks{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){0<this._sheen!=0<e&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){0<this._clearcoat!=0<e&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){0<this._iridescence!=0<e&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){0<this._transmission!=0<e&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xr extends it{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends it{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class M0 extends it{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class lh extends it{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class w0 extends it{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b0 extends Os{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const S0={ShadowMaterial:x0,SpriteMaterial:f0,RawShaderMaterial:jn,ShaderMaterial:En,PointsMaterial:lo,MeshPhysicalMaterial:Xn,MeshStandardMaterial:ks,MeshPhongMaterial:xr,MeshToonMaterial:y0,MeshNormalMaterial:M0,MeshLambertMaterial:lh,MeshDepthMaterial:ih,MeshDistanceMaterial:sh,MeshBasicMaterial:wn,MeshMatcapMaterial:w0,LineDashedMaterial:b0,LineBasicMaterial:Os,Material:it},je=(it.fromType=function(e){return new S0[e]},{arraySlice:function(e,t,i){return je.isTypedArray(e)?new e.constructor(e.subarray(t,void 0!==i?i:e.length)):e.slice(t,i)},convertArray:function(e,t,i){return!e||!i&&e.constructor===t?e:"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(i){var t=i.length,r=new Array(t);for(let e=0;e!==t;++e)r[e]=e;return r.sort(function(e,t){return i[e]-i[t]}),r},sortedArray:function(i,r,n){var a=i.length,s=new i.constructor(a);for(let e=0,t=0;t!==a;++e){var o=n[e]*r;for(let e=0;e!==r;++e)s[t++]=i[o+e]}return s},flattenJSON:function(t,i,r,n){let a=1,s=t[0];for(;void 0!==s&&void 0===s[n];)s=t[a++];if(void 0!==s){let e=s[n];if(void 0!==e)if(Array.isArray(e))for(;void 0!==(e=s[n])&&(i.push(s.time),r.push.apply(r,e)),void 0!==(s=t[a++]););else if(void 0!==e.toArray)for(;void 0!==(e=s[n])&&(i.push(s.time),e.toArray(r,r.length)),void 0!==(s=t[a++]););else for(;void 0!==(e=s[n])&&(i.push(s.time),r.push(e)),void 0!==(s=t[a++]););}},subclip:function(e,t,i,r,n=30){var a=e.clone(),s=(a.name=t,[]);for(let e=0;e<a.tracks.length;++e){var o=a.tracks[e],l=o.getValueSize(),h=[],c=[];for(let t=0;t<o.times.length;++t){var u=o.times[t]*n;if(!(u<i||r<=u)){h.push(o.times[t]);for(let e=0;e<l;++e)c.push(o.values[t*l+e])}}0!==h.length&&(o.times=je.convertArray(h,o.times.constructor),o.values=je.convertArray(c,o.values.constructor),s.push(o))}a.tracks=s;let d=1/0;for(let e=0;e<a.tracks.length;++e)d>a.tracks[e].times[0]&&(d=a.tracks[e].times[0]);for(let e=0;e<a.tracks.length;++e)a.tracks[e].shift(-1*d);return a.resetDuration(),a},makeClipAdditive:function(t,e=0,i=t,r=30){var n=i.tracks.length,a=e/(r=r<=0?30:r);for(let e=0;e<n;++e){const g=i.tracks[e],v=g.ValueTypeName;if("bool"!==v&&"string"!==v){var s=t.tracks.find(function(e){return e.name===g.name&&e.ValueTypeName===v});if(void 0!==s){let e=0;var o=g.getValueSize();g.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(e=o/3);let t=0;var l,h,c,u=s.getValueSize(),d=(s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(t=u/3),g.times.length-1);let i;i=a<=g.times[0]?(h=o-(l=e),je.arraySlice(g.values,l,h)):a>=g.times[d]?(h=(l=d*o+e)+o-e,je.arraySlice(g.values,l,h)):(d=g.createInterpolant(),c=o-(o=e),d.evaluate(a),je.arraySlice(d.resultBuffer,o,c)),"quaternion"===v&&(new Mt).fromArray(i).normalize().conjugate().toArray(i);var p=s.times.length;for(let e=0;e<p;++e){var m=e*u+t;if("quaternion"===v)Mt.multiplyQuaternionsFlat(s.values,m,i,0,s.values,m);else{var f=u-2*t;for(let e=0;e<f;++e)s.values[m+e]-=i[e]}}}}}return t.blendMode=Zu,t}});class Us{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==r?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){var i=this.parameterPositions;let r=this._cachedIndex,n=i[r],a=i[r-1];e:{t:{let e;i:{r:if(!(t<n)){for(var s=r+2;;){if(void 0===n){if(t<a)break r;return r=i.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=n,t<(n=i[++r]))break t}e=i.length;break i}if(t>=a)break e;var o=i[1];t<o&&(r=2,a=o);for(var l=r-2;;){if(void 0===a)return this._cachedIndex=0,this.copySampleValue_(0);if(r===l)break;if(n=a,t>=(a=i[--r-1]))break t}e=r,r=0}for(;r<e;){var h=r+e>>>1;t<i[h]?e=h:r=1+h}if(n=i[r],void 0===(a=i[r-1]))return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===n)return r=i.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,n)}return this.interpolate_(r,a,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){var t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let e=0;e!==r;++e)t[e]=i[n+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class T0 extends Us{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,t,i){var r=this.parameterPositions;let n=e-2,a=e+1,s=r[n],o=r[a];if(void 0===s)switch(this.getSettings_().endingStart){case al:n=e,s=2*t-i;break;case ol:n=r.length-2,s=t+r[n]-r[n+1];break;default:n=e,s=i}if(void 0===o)switch(this.getSettings_().endingEnd){case al:a=e,o=2*i-t;break;case ol:a=1,o=i+r[1]-r[0];break;default:a=e-1,o=t}var l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=n*h,this._offsetNext=a*h}interpolate_(e,t,i,r){var n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,e=this._weightPrev,u=this._weightNext,i=(i-t)/(r-t),r=i*i,t=r*i,d=-e*t+2*e*r-e*i,p=(1+e)*t+(-1.5-2*e)*r+(-.5+e)*i+1,m=(-1-u)*t+(1.5+u)*r+.5*i,f=u*t-u*r;for(let e=0;e!==s;++e)n[e]=d*a[h+e]+p*a[l+e]+m*a[o+e]+f*a[c+e];return n}}class E0 extends Us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){var n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let e=0;e!==s;++e)n[e]=a[l+e]*c+a[o+e]*h;return n}}class A0 extends Us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,i,r){if(void 0===e)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=je.convertArray(t,this.TimeBufferType),this.values=je.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){var t=e.constructor;let i;return t.toJSON!==this.toJSON?i=t.toJSON(e):(i={name:e.name,times:je.convertArray(e.times,Array),values:je.convertArray(e.values,Array)},(t=e.getInterpolation())!==e.DefaultInterpolation&&(i.interpolation=t)),i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Gi:t=this.InterpolantFactoryMethodLinear;break;case Zr:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){var i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}console.warn("THREE.KeyframeTrack:",i)}else this.createInterpolant=t;return this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return Zr}}getValueSize(){return this.values.length/this.times.length}shift(i){if(0!==i){var r=this.times;for(let e=0,t=r.length;e!==t;++e)r[e]+=i}return this}scale(i){if(1!==i){var r=this.times;for(let e=0,t=r.length;e!==t;++e)r[e]*=i}return this}trim(e,t){var i,r=this.times,n=r.length;let a=0,s=n-1;for(;a!==n&&r[a]<e;)++a;for(;-1!==s&&r[s]>t;)--s;return++s,0===a&&s===n||(a>=s&&(s=Math.max(s,1),a=s-1),i=this.getValueSize(),this.times=je.arraySlice(r,a,s),this.values=je.arraySlice(this.values,a*i,s*i)),this}validate(){let i=!0;var e=this.getValueSize(),t=(e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),i=!1),this.times),r=this.values,n=t.length;0===n&&(console.error("THREE.KeyframeTrack: Track is empty.",this),i=!1);let a=null;for(let e=0;e!==n;e++){var s=t[e];if("number"==typeof s&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,e,s),i=!1;break}if(null!==a&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,e,s,a),i=!1;break}a=s}if(void 0!==r&&je.isTypedArray(r))for(let e=0,t=r.length;e!==t;++e){var o=r[e];if(isNaN(o)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,e,o),i=!1;break}}return i}optimize(){var i=je.arraySlice(this.times),r=je.arraySlice(this.values),n=this.getValueSize(),a=this.getInterpolation()===Zr,s=i.length-1;let o=1;for(let e=1;e<s;++e){let t=!1;var l=i[e];if(l!==i[e+1]&&(1!==e||l!==i[0]))if(a)t=!0;else{var h=e*n,c=h-n,u=h+n;for(let e=0;e!==n;++e){var d=r[h+e];if(d!==r[c+e]||d!==r[u+e]){t=!0;break}}}if(t){if(e!==o){i[o]=i[e];var p=e*n,m=o*n;for(let e=0;e!==n;++e)r[m+e]=r[p+e]}++o}}if(0<s){i[o]=i[s];for(let e=s*n,t=o*n,i=0;i!==n;++i)r[t+i]=r[e+i];++o}return o!==i.length?(this.times=je.arraySlice(i,0,o),this.values=je.arraySlice(r,0,o*n)):(this.times=i,this.values=r),this}clone(){var e=je.arraySlice(this.times,0),t=je.arraySlice(this.values,0),e=new this.constructor(this.name,e,t);return e.createInterpolant=this.createInterpolant,e}}dn.prototype.TimeBufferType=Float32Array,dn.prototype.ValueBufferType=Float32Array,dn.prototype.DefaultInterpolation=Gi;class Qi extends dn{}Qi.prototype.ValueTypeName="bool",Qi.prototype.ValueBufferType=Array,Qi.prototype.DefaultInterpolation=Es,Qi.prototype.InterpolantFactoryMethodLinear=void 0,Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class ch extends dn{}ch.prototype.ValueTypeName="color";class Wi extends dn{}Wi.prototype.ValueTypeName="number";class C0 extends Us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){var n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t);let l=e*s;for(var h=l+s;l!==h;l+=4)Mt.slerpFlat(n,0,a,l-s,a,l,o);return n}}class Hn extends dn{InterpolantFactoryMethodLinear(e){return new C0(this.times,this.values,this.getValueSize(),e)}}Hn.prototype.ValueTypeName="quaternion",Hn.prototype.DefaultInterpolation=Gi,Hn.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends dn{}es.prototype.ValueTypeName="string",es.prototype.ValueBufferType=Array,es.prototype.DefaultInterpolation=Es,es.prototype.InterpolantFactoryMethodLinear=void 0,es.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends dn{}ji.prototype.ValueTypeName="vector";class hh{constructor(e,t=-1,i,r=Ku){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){var i=[],r=e.tracks,n=1/(e.fps||1);for(let e=0,t=r.length;e!==t;++e)i.push(R0(r[e]).scale(n));var t=new this(e.name,e.duration,i,e.blendMode);return t.uuid=e.uuid,t}static toJSON(e){var i=[],r=e.tracks,e={name:e.name,duration:e.duration,tracks:i,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,t=r.length;e!==t;++e)i.push(dn.toJSON(r[e]));return e}static CreateFromMorphTargetSequence(e,r,n,a){var s=r.length,o=[];for(let i=0;i<s;i++){let e=[],t=[];e.push((i+s-1)%s,i,(i+1)%s),t.push(0,1,0);var l=je.getKeyframeOrder(e);e=je.sortedArray(e,1,l),t=je.sortedArray(t,1,l),a||0!==e[0]||(e.push(s),t.push(t[0])),o.push(new Wi(".morphTargetInfluences["+r[i].name+"]",e,t).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let i=e;Array.isArray(e)||(i=e.geometry&&e.geometry.animations||e.animations);for(let e=0;e<i.length;e++)if(i[e].name===t)return i[e];return null}static CreateClipsFromMorphTargetSequences(i,e,t){var r={},n=/^([\w-]*?)([\d]+)$/;for(let e=0,t=i.length;e<t;e++){var a=i[e],s=a.name.match(n);if(s&&1<s.length){s=s[1];let e=r[s];e||(r[s]=e=[]),e.push(a)}}var o=[];for(const l in r)o.push(this.CreateFromMorphTargetSequence(l,r[l],e,t));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;function i(e,t,i,r,n){var a,s;0!==i.length&&(a=[],s=[],je.flattenJSON(i,a,s,r),0!==a.length)&&n.push(new e(t,a,s))}var r=[],n=e.name||"default",a=e.fps||30,s=e.blendMode;let o=e.length||-1;var l=e.hierarchy||[];for(let e=0;e<l.length;e++){var h=l[e].keys;if(h&&0!==h.length)if(h[0].morphTargets){var c={};let t;for(t=0;t<h.length;t++)if(h[t].morphTargets)for(let e=0;e<h[t].morphTargets.length;e++)c[h[t].morphTargets[e]]=-1;for(const f in c){var u=[],d=[];for(let e=0;e!==h[t].morphTargets.length;++e){var p=h[t];u.push(p.time),d.push(p.morphTarget===f?1:0)}r.push(new Wi(".morphTargetInfluence["+f+"]",u,d))}o=c.length*a}else{var m=".bones["+t[e].name+"]";i(ji,m+".position",h,"pos",r),i(Hn,m+".quaternion",h,"rot",r),i(ji,m+".scale",h,"scl",r)}}return 0===r.length?null:new this(n,o,r,s)}resetDuration(){let i=0;for(let e=0,t=this.tracks.length;e!==t;++e){var r=this.tracks[e];i=Math.max(i,r.times[r.times.length-1])}return this.duration=i,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){var t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function L0(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return ch;case"quaternion":return Hn;case"bool":case"boolean":return Qi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function R0(e){if(void 0===e.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var t,i,r=L0(e.type);return void 0===e.times&&(t=[],i=[],je.flattenJSON(e.keys,t,i,"value"),e.times=t,e.values=i),void 0!==r.parse?r.parse(e):new r(e.name,e.times,e.values,e.interpolation)}const Xi={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class P0{constructor(e,t,i){const r=this;let n=!1,a=0,s=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(e){s++,!1===n&&void 0!==r.onStart&&r.onStart(e,a,s),n=!0},this.itemEnd=function(e){a++,void 0!==r.onProgress&&r.onProgress(e,a,s),a===s&&(n=!1,void 0!==r.onLoad)&&r.onLoad()},this.itemError=function(e){void 0!==r.onError&&r.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){e=l.indexOf(e);return-1!==e&&l.splice(e,2),this},this.getHandler=function(i){for(let e=0,t=l.length;e<t;e+=2){var r=l[e],n=l[e+1];if(r.global&&(r.lastIndex=0),r.test(i))return n}return null}}}const D0=new P0;class qn{constructor(e){this.manager=void 0!==e?e:D0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(i,r){const n=this;return new Promise(function(e,t){n.load(i,e,r,t)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const _n={};class qi extends qn{constructor(e){super(e)}load(a,e,t,i){void 0===a&&(a=""),void 0!==this.path&&(a=this.path+a),a=this.manager.resolveURL(a);const r=Xi.get(a);if(void 0!==r)return this.manager.itemStart(a),setTimeout(()=>{e&&e(r),this.manager.itemEnd(a)},0),r;if(void 0!==_n[a])_n[a].push({onLoad:e,onProgress:t,onError:i});else{_n[a]=[],_n[a].push({onLoad:e,onProgress:t,onError:i});const n=new Request(a,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,o=this.responseType;fetch(n).then(e=>{if(200!==e.status&&0!==e.status)throw Error(`fetch for "${e.url}" responded with ${e.status}: `+e.statusText);{if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e;const o=_n[a],t=e.body.getReader(),i=e.headers.get("Content-Length"),l=i?parseInt(i):0,h=0!==l;let s=0;e=new ReadableStream({start(a){!function n(){t.read().then(({done:e,value:t})=>{if(e)a.close();else{s+=t.byteLength;const i=new ProgressEvent("progress",{lengthComputable:h,loaded:s,total:l});for(let e=0,t=o.length;e<t;e++){const r=o[e];r.onProgress&&r.onProgress(i)}a.enqueue(t),n()}})}()}});return new Response(e)}}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>(new DOMParser).parseFromString(e,s));case"json":return e.json();default:if(void 0===s)return e.text();{const t=/charset="?([^;"\s]*)"?/i.exec(s),i=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(i);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(i=>{Xi.add(a,i);var r=_n[a];delete _n[a];for(let e=0,t=r.length;e<t;e++){var n=r[e];n.onLoad&&n.onLoad(i)}}).catch(i=>{var r=_n[a];if(void 0===r)throw this.manager.itemError(a),i;delete _n[a];for(let e=0,t=r.length;e<t;e++){var n=r[e];n.onError&&n.onError(i)}this.manager.itemError(a)}).finally(()=>{this.manager.itemEnd(a)}),this.manager.itemStart(a)}}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I0 extends qn{constructor(e){super(e)}load(t,e,i,r){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const n=this,a=Xi.get(t);if(void 0!==a)return n.manager.itemStart(t),setTimeout(function(){e&&e(a),n.manager.itemEnd(t)},0),a;const s=Cs("img");function o(){h(),Xi.add(t,this),e&&e(this),n.manager.itemEnd(t)}function l(e){h(),r&&r(e),n.manager.itemError(t),n.manager.itemEnd(t)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(t),s.src=t,s}}class F0 extends qn{constructor(e){super(e)}load(e,t,i,r){const n=this,a=new oh,s=new qi(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(n.withCredentials),s.load(e,function(e){e=n.parse(e);e&&(void 0!==e.image?a.image=e.image:void 0!==e.data&&(a.image.width=e.width,a.image.height=e.height,a.image.data=e.data),a.wrapS=void 0!==e.wrapS?e.wrapS:gt,a.wrapT=void 0!==e.wrapT?e.wrapT:gt,a.magFilter=void 0!==e.magFilter?e.magFilter:$e,a.minFilter=void 0!==e.minFilter?e.minFilter:$e,a.anisotropy=void 0!==e.anisotropy?e.anisotropy:1,void 0!==e.encoding&&(a.encoding=e.encoding),void 0!==e.flipY&&(a.flipY=e.flipY),void 0!==e.format&&(a.format=e.format),void 0!==e.type&&(a.type=e.type),void 0!==e.mipmaps&&(a.mipmaps=e.mipmaps,a.minFilter=li),1===e.mipmapCount&&(a.minFilter=$e),void 0!==e.generateMipmaps&&(a.generateMipmaps=e.generateMipmaps),a.needsUpdate=!0,t)&&t(a,e)},i,r),a}}class uh extends qn{constructor(e){super(e)}load(e,t,i,r){const n=new nt,a=new I0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){n.image=e,n.needsUpdate=!0,void 0!==t&&t(n)},i,r),n}}class Vr extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){e=super.toJSON(e);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}const ec=new pe,tc=new P,nc=new P;class uo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){var t=this.camera,i=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){var e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N0 extends uo{constructor(){super(new mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){var t=this.camera,i=2*As*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;i===t.fov&&r===t.aspect&&n===t.far||(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dh extends Vr{constructor(e,t,i=0,r=Math.PI/3,n=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=r,this.penumbra=n,this.decay=a,this.shadow=new N0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ic=new pe,ms=new P,Ea=new P;class z0 extends uo{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){var i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),i.position.copy(ms),Ea.copy(i.position),Ea.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ea),i.updateMatrixWorld(),r.makeTranslation(-ms.x,-ms.y,-ms.z),ic.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic)}}class Ha extends Vr{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new z0}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O0 extends uo{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new O0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class k0 extends Vr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class on{static decodeText(i){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(i);let r="";for(let e=0,t=i.length;e<t;e++)r+=String.fromCharCode(i[e]);try{return decodeURIComponent(escape(r))}catch{return r}}static extractUrlBase(e){var t=e.lastIndexOf("/");return-1===t?"./":e.slice(0,t+1)}static resolveURL(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class U0 extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(t,i,e,r){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const n=this,a=Xi.get(t);if(void 0!==a)return n.manager.itemStart(t),setTimeout(function(){i&&i(a),n.manager.itemEnd(t)},0),a;var s={};s.credentials="anonymous"===this.crossOrigin?"same-origin":"include",s.headers=this.requestHeader,fetch(t,s).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(e){Xi.add(t,e),i&&i(e),n.manager.itemEnd(t)}).catch(function(e){r&&r(e),n.manager.itemError(t),n.manager.itemEnd(t)}),n.manager.itemStart(t)}}const fo="\\[\\]\\.:\\/",B0=new RegExp("["+fo+"]","g"),po="[^"+fo+"]",V0="[^"+fo.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",po),H0=/(WCOD+)?/.source.replace("WCOD",V0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",po),j0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",po),X0=new RegExp("^"+G0+H0+W0+j0+"$"),q0=["material","materials","bones"];class $0{constructor(e,t,i){i=i||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();var i=this._targetGroup.nCachedObjects_,i=this._bindings[i];void 0!==i&&i.getValue(e,t)}setValue(i,r){var n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].setValue(i,r)}bind(){var i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){var i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}}class Ne{constructor(e,t,i){this.path=t,this.parsedPath=i||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return new(e&&e.isAnimationObjectGroup?Ne.Composite:Ne)(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B0,"")}static parseTrackName(e){var t=X0.exec(e);if(null===t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);var i,t={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=t.nodeName&&t.nodeName.lastIndexOf(".");if(void 0!==r&&-1!==r&&(i=t.nodeName.substring(r+1),-1!==q0.indexOf(i))&&(t.nodeName=t.nodeName.substring(0,r),t.objectName=i),null===t.propertyName||0===t.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,r){if(void 0===r||""===r||"."===r||-1===r||r===e.name||r===e.uuid)return e;if(e.skeleton){var t=e.skeleton.getBoneByName(r);if(void 0!==t)return t}if(e.children){const n=function(t){for(let e=0;e<t.length;e++){var i=t[e];if(i.name===r||i.uuid===r)return i;i=n(i.children);if(i)return i}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(i,r){var n=this.resolvedProperty;for(let e=0,t=n.length;e!==t;++e)i[r++]=n[e]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(i,r){var n=this.resolvedProperty;for(let e=0,t=n.length;e!==t;++e)n[e]=i[r++]}_setValue_array_setNeedsUpdate(i,r){var n=this.resolvedProperty;for(let e=0,t=n.length;e!==t;++e)n[e]=i[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(i,r){var n=this.resolvedProperty;for(let e=0,t=n.length;e!==t;++e)n[e]=i[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let i=this.node;var e=this.parsedPath,r=e.objectName,n=e.propertyName;let a=e.propertyIndex;if(i||(i=Ne.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=i),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,i){if(r){let t=e.objectIndex;switch(r){case"materials":if(!i.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!i.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);i=i.material.materials;break;case"bones":if(!i.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);i=i.skeleton.bones;for(let e=0;e<i.length;e++)if(i[e].name===t){t=e;break}break;default:if(void 0===i[r])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);i=i[r]}if(void 0!==t){if(void 0===i[t])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,i);i=i[t]}}var s=i[n];if(void 0===s)e=e.nodeName,console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+n+" but it wasn't found.",i);else{let e=this.Versioning.None,t=(void 0!==(this.targetObject=i).needsUpdate?e=this.Versioning.NeedsUpdate:void 0!==i.matrixWorldNeedsUpdate&&(e=this.Versioning.MatrixWorldNeedsUpdate),this.BindingType.Direct);if(void 0!==a){if("morphTargetInfluences"===n){if(!i.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!i.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==i.morphTargetDictionary[a]&&(a=i.morphTargetDictionary[a])}t=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else void 0!==s.fromArray&&void 0!==s.toArray?(t=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(t=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[t],this.setValue=this.SetterByBindingTypeAndVersioning[t][e]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=$0,Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray],Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return(new this.constructor).copy(this)}}class pr{static toHalfFloat(e){65504<Math.abs(e)&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=at(e,-65504,65504),rc[0]=e;var e=ac[0],t=e>>23&511;return Ht[t]+((8388607&e)>>Wt[t])}static fromHalfFloat(e){var t=e>>10;return ac[0]=mo[mh[t]+(1023&e)]+ts[t],rc[0]}}const ph=new ArrayBuffer(4),rc=new Float32Array(ph),ac=new Uint32Array(ph),Ht=new Uint32Array(512),Wt=new Uint32Array(512);for(let e=0;e<256;++e){const oRa=e-127;oRa<-27?(Ht[e]=0,Ht[256|e]=32768,Wt[e]=24,Wt[256|e]=24):oRa<-14?(Ht[e]=1024>>-oRa-14,Ht[256|e]=1024>>-oRa-14|32768,Wt[e]=-oRa-1,Wt[256|e]=-oRa-1):oRa<=15?(Ht[e]=oRa+15<<10,Ht[256|e]=oRa+15<<10|32768,Wt[e]=13,Wt[256|e]=13):oRa<128?(Ht[e]=31744,Ht[256|e]=64512,Wt[e]=24,Wt[256|e]=24):(Ht[e]=31744,Ht[256|e]=64512,Wt[e]=13,Wt[256|e]=13)}const mo=new Uint32Array(2048),ts=new Uint32Array(64),mh=new Uint32Array(64);for(let i=1;i<1024;++i){let e=i<<13,t=0;for(;0==(8388608&e);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,mo[i]=e|t}for(let e=1024;e<2048;++e)mo[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)ts[e]=e<<23;ts[31]=1199570944,ts[32]=2147483648;for(let e=33;e<63;++e)ts[e]=2147483648+(e-32<<23);ts[63]=3347054592;for(let e=1;e<64;++e)32!==e&&(mh[e]=1024);"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);class Gr{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){const i=this;return void 0===e||""===e?(console.warn("wrong names"),!1):void 0===t?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(function(e){e=i.resolveName(e);i.callbacks[e.namespace]instanceof Object||(i.callbacks[e.namespace]={}),i.callbacks[e.namespace][e.value]instanceof Array||(i.callbacks[e.namespace][e.value]=[]),i.callbacks[e.namespace][e.value].push(t)}),this)}off(e){const r=this;return void 0===e||""===e?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(function(e){var t=r.resolveName(e);if("base"!==t.namespace&&""===t.value)delete r.callbacks[t.namespace];else if("base"===t.namespace)for(const i in r.callbacks)r.callbacks[i]instanceof Object&&r.callbacks[i][t.value]instanceof Array&&(delete r.callbacks[i][t.value],0===Object.keys(r.callbacks[i]).length)&&delete r.callbacks[i];else r.callbacks[t.namespace]instanceof Object&&r.callbacks[t.namespace][t.value]instanceof Array&&(delete r.callbacks[t.namespace][t.value],0===Object.keys(r.callbacks[t.namespace]).length)&&delete r.callbacks[t.namespace]}),this)}trigger(e,t){if(void 0===e||""===e)return console.warn("wrong name"),!1;const i=this;const r=t instanceof Array?t:[];var n=this.resolveNames(e);if("base"===(n=this.resolveName(n[0])).namespace)for(const a in i.callbacks)i.callbacks[a]instanceof Object&&i.callbacks[a][n.value]instanceof Array&&i.callbacks[a][n.value].forEach(function(e){e.apply(i,r)});else if(this.callbacks[n.namespace]instanceof Object){if(""===n.value)return console.warn("wrong name"),this;i.callbacks[n.namespace][n.value].forEach(function(e){e.apply(i,r)})}return null}resolveNames(e){let t=e;return t=(t=(t=t.replace(/[^a-zA-Z0-9 ,/.]/g,"")).replace(/[,/]+/g," ")).split(" ")}resolveName(e){var t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",1<i.length&&""!==i[1]&&(t.namespace=i[1]),t}}class Y0 extends Gr{constructor(){super(),this.start=Date.now()/1e3,this.current=this.start,this.elapsed=0,this.delta=16,this.playing=!0,this.tick=this.tick.bind(this),this.tick()}play(){this.playing=!0}pause(){this.playing=!1}tick(){this.ticker=window.requestAnimationFrame(this.tick);var e=Date.now()/1e3;this.delta=e-this.current,this.elapsed+=this.playing?this.delta:0,this.current=e,60<this.delta&&(this.delta=60),this.playing&&this.trigger("tick")}stop(){window.cancelAnimationFrame(this.ticker)}}class K0 extends Gr{constructor(){super(),this.viewport={},this.$sizeViewport=document.createElement("div"),this.$sizeViewport.style.width="100%",this.$sizeViewport.style.height="100%",this.$sizeViewport.style.position="absolute",this.$sizeViewport.style.top=0,this.$sizeViewport.style.left=0,this.$sizeViewport.style.pointerEvents="none",this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),this.resize()}resize(){document.body.appendChild(this.$sizeViewport),this.viewport.width=this.$sizeViewport.offsetWidth,this.viewport.height=this.$sizeViewport.offsetHeight,document.body.removeChild(this.$sizeViewport),this.width=window.innerWidth,this.height=window.innerHeight,this.trigger("resize")}}class ln{constructor(e,t,i,r,n="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),ln.nextNameID=ln.nextNameID||0,this.$name.id="lil-gui-name-"+ ++ln.nextNameID,this.$widget=document.createElement(n),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange)&&this._onFinishChange.call(this,this.getValue()),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){e=this.parent.add(this.object,this.property,e);return e.name(this._name),this.destroy(),e}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);var e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Z0 extends ln{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Wa(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!i&&"#"+i}const J0={isPrimitive:!0,match:e=>"string"==typeof e,fromHexString:Wa,toHexString:Wa},Ls={isPrimitive:!0,match:e=>"number"==typeof e,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},Q0={isPrimitive:!1,match:Array.isArray,fromHexString(e,t,i=1){e=Ls.fromHexString(e);t[0]=(e>>16&255)/255*i,t[1]=(e>>8&255)/255*i,t[2]=(255&e)/255*i},toHexString([e,t,i],r=1){e=e*(r=255/r)<<16^t*r<<8^i*r<<0;return Ls.toHexString(e)}},ev={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){e=Ls.fromHexString(e);t.r=(e>>16&255)/255*i,t.g=(e>>8&255)/255*i,t.b=(255&e)/255*i},toHexString({r:e,g:t,b:i},r=1){e=e*(r=255/r)<<16^t*r<<8^i*r<<0;return Ls.toHexString(e)}},tv=[J0,Ls,Q0,ev];function nv(t){return tv.find(e=>e.match(t))}class iv extends ln{constructor(e,t,i,r){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=nv(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{var e=Wa(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){var t;this._format.isPrimitive?(t=this._format.fromHexString(e),this.setValue(t)):(this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay())}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Aa extends ln{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",e=>{e.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class sv extends ln{constructor(e,t,i,r,n,a){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(n);e=void 0!==a;this.step(e?a:this._getImplicitStep(),e),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){var e,t=this.getValue();return this._hasSlider&&(e=(t-this._min)/(this._max-this._min),e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"),this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=e=>{var t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())};let r=!1,n,a,s,o,l;const h=5,i=e=>{var t,i;r&&(t=e.clientX-n,i=e.clientY-a,Math.abs(i)>h?(e.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(t)>h&&c()),r||(l-=(e.clientY-s)*this._step*this._arrowKeyMultiplier(e),o+l>this._max?l=this._max-o:o+l<this._min&&(l=this._min-o),this._snapClampSetValue(o+l)),s=e.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{var e=parseFloat(this.$input.value);isNaN(e)||this.setValue(this._clamp(e))}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur(),"ArrowUp"===e.code&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),"ArrowDown"===e.code&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},{passive:!1}),this.$input.addEventListener("mousedown",e=>{n=e.clientX,a=s=e.clientY,r=!0,o=this.getValue(),l=0,window.addEventListener("mousemove",i),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const i=(e,t,i,r,n)=>(e-t)/(i-t)*(n-r)+r,r=e=>{var t=this.$slider.getBoundingClientRect(),e=i(e,t.left,t.right,this._min,this._max);this._snapClampSetValue(e)},t=e=>{r(e.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let a=!1,s,o;const l=e=>{e.preventDefault(),this._setDraggingStyle(!0),r(e.touches[0].clientX),a=!1},h=e=>{var t,i;a?(t=e.touches[0].clientX-s,i=e.touches[0].clientY-o,Math.abs(t)>Math.abs(i)?l(e):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",c))):(e.preventDefault(),r(e.touches[0].clientX))},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this),d=400;let p;this.$slider.addEventListener("mousedown",e=>{this._setDraggingStyle(!0),r(e.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",e=>{1<e.touches.length||(this._hasScrollBar?(s=e.touches[0].clientX,o=e.touches[0].clientY,a=!0):l(e),window.addEventListener("touchmove",h),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",e=>{Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar||(e.preventDefault(),e=this._normalizeMouseWheel(e)*this._step,this._snapClampSetValue(this.getValue()+e),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(u,d))},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){e=Math.round(e/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(e){return e=(e=e<this._min?this._min:e)>this._max?this._max:e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){var e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class rv extends ln{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(e=>{var t=document.createElement("option");t.innerHTML=e,this.$select.appendChild(t)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){var e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=-1===t?e:this._names[t],this}}class av extends ln{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const ov=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function lv(e){var t=document.createElement("style"),e=(t.innerHTML=e,document.querySelector("head link[rel=stylesheet], head style"));e?document.head.insertBefore(t,e):document.head.appendChild(t)}let oc=!1;class go{constructor({parent:e,autoPlace:t=void 0===e,container:i,width:r,title:n="Controls",injectStyles:a=!0,touchStyles:s=!0}={}){this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",e=>{"Enter"!==e.code&&"Space"!==e.code||(e.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),s&&this.domElement.classList.add("allow-touch-styles"),this.parent?(this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement)):(this.domElement.classList.add("root"),!oc&&a&&(lv(ov),oc=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",e=>e.stopPropagation()),this.domElement.addEventListener("keyup",e=>e.stopPropagation()))}add(e,t,i,r,n){if(Object(i)===i)return new rv(this,e,t,i);var a=e[t];switch(typeof a){case"number":return new sv(this,e,t,i,r,n);case"boolean":return new Z0(this,e,t);case"string":return new av(this,e,t);case"function":return new Aa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new iv(this,e,t,i)}addFolder(e){return new go({parent:this,title:e})}load(t,e=!0){return t.controllers&&this.controllers.forEach(e=>{e instanceof Aa||e._name in t.controllers&&e.load(t.controllers[e._name])}),e&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof Aa)){if(e._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(r=!0){return this._closed=!r,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{var e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const t=e=>{e.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))},i=(this.$children.addEventListener("transitionend",t),r?this.$children.scrollHeight:0);this.domElement.classList.toggle("closed",!r),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),void 0!==this._onChange&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class cv{constructor(){this.instance=new go({width:320,title:"debug"});var e=window.document.styleSheets[0];e.insertRule(`
            .lil-gui .lil-gui > .children
            {
                border: none;
                margin-left: var(--folder-indent);
                border-left: 2px solid var(--widget-color);
            }
        `,e.cssRules.length),e.insertRule(`
            .lil-gui.root > .children > .lil-gui > .title
            {
                border-width: 1px 0 0 0;
            }
        `,e.cssRules.length),this.tree={},this.tree.folder=this.instance,this.tree.children={}}getFolder(e){e=e.split("/");let t=this.tree;for(const i of e){let e=t.children[i];e||((e={}).folder=t.folder.addFolder(i),e.folder.close(),e.children={}),t.children[i]=e,t=e}return t.folder}}var hv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gh={exports:{}},lc=(!function(){var c;gh.exports=((c=function(){function e(e){return n.appendChild(e.dom),e}function t(e){for(var t=0;t<n.children.length;t++)n.children[t].style.display=t===e?"block":"none";r=e}var i,r=0,n=document.createElement("div"),a=(n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(e){e.preventDefault(),t(++r%n.children.length)},!1),(performance||Date).now()),s=a,o=0,l=e(new c.Panel("FPS","#0ff","#002")),h=e(new c.Panel("MS","#0f0","#020"));return self.performance&&self.performance.memory&&(i=e(new c.Panel("MB","#f08","#201"))),t(0),{REVISION:16,dom:n,addPanel:e,showPanel:t,begin:function(){a=(performance||Date).now()},end:function(){o++;var e,t=(performance||Date).now();return h.update(t-a,200),s+1e3<t&&(l.update(1e3*o/(t-s),100),s=t,o=0,i)&&(e=performance.memory,i.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)),t},update:function(){a=this.end()},domElement:n,setMode:t}}).Panel=function(i,r,n){var a=1/0,s=0,o=Math.round,l=o(window.devicePixelRatio||1),h=80*l,e=48*l,c=3*l,u=2*l,d=3*l,p=15*l,m=74*l,f=30*l,g=document.createElement("canvas"),v=(g.width=h,g.height=e,g.style.cssText="width:80px;height:48px",g.getContext("2d"));return v.font="bold "+9*l+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,h,e),v.fillStyle=r,v.fillText(i,c,u),v.fillRect(d,p,m,f),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(d,p,m,f),{dom:g,update:function(e,t){a=Math.min(a,e),s=Math.max(s,e),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,h,p),v.fillStyle=r,v.fillText(o(e)+" "+i+" ("+o(a)+"-"+o(s)+")",c,u),v.drawImage(g,d+l,p,m-l,f,d,p,m-l,f),v.fillRect(d+m-l,p,l,f),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(d+m-l,p,l,o((1-e/t)*f))}}},c)}(),gh.exports);class uv{constructor(){this.instance=new lc,this.instance.showPanel(3),this.active=!1,this.max=120,this.ignoreMaxed=!0,this.activate()}activate(){this.active=!0,document.body.appendChild(this.instance.dom)}deactivate(){this.active=!1,document.body.removeChild(this.instance.dom)}setRenderPanel(e){this.render={},this.render.context=e,this.render.extension=this.render.context.getExtension("EXT_disjoint_timer_query_webgl2"),this.render.panel=this.instance.addPanel(new lc.Panel("Render (ms)","#f8f","#212")),"undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext&&this.render.extension||this.deactivate()}beforeRender(){if(this.active){let e=this.queryCreated=!1;var t;this.render.query&&(e=this.render.context.getQueryParameter(this.render.query,this.render.context.QUERY_RESULT_AVAILABLE),t=this.render.context.getParameter(this.render.extension.GPU_DISJOINT_EXT),e)&&!t&&(t=this.render.context.getQueryParameter(this.render.query,this.render.context.QUERY_RESULT),(t=Math.min(t/1e3/1e3,this.max))===this.max&&this.ignoreMaxed||this.render.panel.update(t,this.max)),!e&&this.render.query||(this.queryCreated=!0,this.render.query=this.render.context.createQuery(),this.render.context.beginQuery(this.render.extension.TIME_ELAPSED_EXT,this.render.query))}}afterRender(){this.active&&this.queryCreated&&this.render.context.endQuery(this.render.extension.TIME_ELAPSED_EXT)}update(){this.active&&this.instance.update()}destroy(){this.deactivate()}}class dv{constructor(){this.active="#debug"===window.location.hash,this.active&&(this.ui=new cv,this.stats=new uv)}update(){this.active&&this.stats.update()}}class fv extends qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _v(e)}),this.register(function(e){return new Tv(e)}),this.register(function(e){return new Ev(e)}),this.register(function(e){return new yv(e)}),this.register(function(e){return new Mv(e)}),this.register(function(e){return new wv(e)}),this.register(function(e){return new bv(e)}),this.register(function(e){return new vv(e)}),this.register(function(e){return new Sv(e)}),this.register(function(e){return new xv(e)}),this.register(function(e){return new mv(e)}),this.register(function(e){return new Av(e)})}load(t,i,e,r){const n=this;let a;a=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:on.extractUrlBase(t),this.manager.itemStart(t);function s(e){r?r(e):console.error(e),n.manager.itemError(t),n.manager.itemEnd(t)}const o=new qi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(e){try{n.parse(e,a,function(e){i(e),n.manager.itemEnd(t)},s)}catch(e){s(e)}},e,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return-1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return-1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;var a={},s={};if("string"==typeof e)n=e;else if(on.decodeText(new Uint8Array(e,0,4))===vh){try{a[Le.KHR_BINARY_GLTF]=new Cv(e)}catch(e){return void(r&&r(e))}n=a[Le.KHR_BINARY_GLTF].content}else n=on.decodeText(new Uint8Array(e));var o=JSON.parse(n);if(void 0===o.asset||o.asset.version[0]<2)r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else{var l=new Vv(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){var h=this.pluginCallbacks[e](l);a[(s[h.name]=h).name]=!0}if(o.extensionsUsed)for(let e=0;e<o.extensionsUsed.length;++e){var c=o.extensionsUsed[e],u=o.extensionsRequired||[];switch(c){case Le.KHR_MATERIALS_UNLIT:a[c]=new gv;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[c]=new Pv;break;case Le.KHR_DRACO_MESH_COMPRESSION:a[c]=new Lv(o,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:a[c]=new Rv;break;case Le.KHR_MESH_QUANTIZATION:a[c]=new Dv;break;default:0<=u.indexOf(c)&&void 0===s[c]&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(a),l.setPlugins(s),l.parse(i,r)}}parseAsync(i,r){const n=this;return new Promise(function(e,t){n.parse(i,r,e,t)})}}function pv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class mv{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){var i=this.parser,r=this.parser.json.nodes||[];for(let e=0,t=r.length;e<t;e++){var n=r[e];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&i._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(t){var i=this.parser,r="light:"+t,n=i.cache.get(r);if(!n){var a=i.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t];let e;var o=new de(16777215),l=(void 0!==s.color&&o.fromArray(s.color),void 0!==s.range?s.range:0);switch(s.type){case"directional":(e=new fh(o)).target.position.set(0,0,-1),e.add(e.target);break;case"point":(e=new Ha(o)).distance=l;break;case"spot":(e=new dh(o)).distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=void 0!==s.spot.innerConeAngle?s.spot.innerConeAngle:0,s.spot.outerConeAngle=void 0!==s.spot.outerConeAngle?s.spot.outerConeAngle:Math.PI/4,e.angle=s.spot.outerConeAngle,e.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,e.target.position.set(0,0,-1),e.add(e.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}e.position.set(0,0,0),e.decay=2,void 0!==s.intensity&&(e.intensity=s.intensity),e.name=i.createUniqueName(s.name||"light_"+t),n=Promise.resolve(e),i.cache.add(r,n)}return n}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return void 0===n?null:this._loadLight(n).then(function(e){return i._getNodeRef(t.cache,n,e)})}}class gv{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,i){var r,n=[],t=(e.color=new de(1,1,1),e.opacity=1,t.pbrMetallicRoughness);return t&&(Array.isArray(t.baseColorFactor)&&(r=t.baseColorFactor,e.color.fromArray(r),e.opacity=r[3]),void 0!==t.baseColorTexture)&&n.push(i.assignTexture(e,"map",t.baseColorTexture,Pe)),Promise.all(n)}}class vv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){var e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]&&void 0!==(e=e.extensions[this.name].emissiveStrength)&&(t.emissiveIntensity=e),Promise.resolve()}}class _v{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var i,r=this.parser,e=r.json.materials[e];return e.extensions&&e.extensions[this.name]?(i=[],void 0!==(e=e.extensions[this.name]).clearcoatFactor&&(t.clearcoat=e.clearcoatFactor),void 0!==e.clearcoatTexture&&i.push(r.assignTexture(t,"clearcoatMap",e.clearcoatTexture)),void 0!==e.clearcoatRoughnessFactor&&(t.clearcoatRoughness=e.clearcoatRoughnessFactor),void 0!==e.clearcoatRoughnessTexture&&i.push(r.assignTexture(t,"clearcoatRoughnessMap",e.clearcoatRoughnessTexture)),void 0!==e.clearcoatNormalTexture&&(i.push(r.assignTexture(t,"clearcoatNormalMap",e.clearcoatNormalTexture)),void 0!==e.clearcoatNormalTexture.scale)&&(r=e.clearcoatNormalTexture.scale,t.clearcoatNormalScale=new ve(r,r)),Promise.all(i)):Promise.resolve()}}class xv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var i,r=this.parser,e=r.json.materials[e];return e.extensions&&e.extensions[this.name]?(i=[],void 0!==(e=e.extensions[this.name]).iridescenceFactor&&(t.iridescence=e.iridescenceFactor),void 0!==e.iridescenceTexture&&i.push(r.assignTexture(t,"iridescenceMap",e.iridescenceTexture)),void 0!==e.iridescenceIor&&(t.iridescenceIOR=e.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==e.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=e.iridescenceThicknessMinimum),void 0!==e.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=e.iridescenceThicknessMaximum),void 0!==e.iridescenceThicknessTexture&&i.push(r.assignTexture(t,"iridescenceThicknessMap",e.iridescenceThicknessTexture)),Promise.all(i)):Promise.resolve()}}class yv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var i,r=this.parser,e=r.json.materials[e];return e.extensions&&e.extensions[this.name]?(i=[],t.sheenColor=new de(0,0,0),t.sheenRoughness=0,t.sheen=1,void 0!==(e=e.extensions[this.name]).sheenColorFactor&&t.sheenColor.fromArray(e.sheenColorFactor),void 0!==e.sheenRoughnessFactor&&(t.sheenRoughness=e.sheenRoughnessFactor),void 0!==e.sheenColorTexture&&i.push(r.assignTexture(t,"sheenColorMap",e.sheenColorTexture,Pe)),void 0!==e.sheenRoughnessTexture&&i.push(r.assignTexture(t,"sheenRoughnessMap",e.sheenRoughnessTexture)),Promise.all(i)):Promise.resolve()}}class Mv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var i,r=this.parser,e=r.json.materials[e];return e.extensions&&e.extensions[this.name]?(i=[],void 0!==(e=e.extensions[this.name]).transmissionFactor&&(t.transmission=e.transmissionFactor),void 0!==e.transmissionTexture&&i.push(r.assignTexture(t,"transmissionMap",e.transmissionTexture)),Promise.all(i)):Promise.resolve()}}class wv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var i,r=this.parser,e=r.json.materials[e];return e.extensions&&e.extensions[this.name]?(i=[],e=e.extensions[this.name],t.thickness=void 0!==e.thicknessFactor?e.thicknessFactor:0,void 0!==e.thicknessTexture&&i.push(r.assignTexture(t,"thicknessMap",e.thicknessTexture)),t.attenuationDistance=e.attenuationDistance||0,r=e.attenuationColor||[1,1,1],t.attenuationColor=new de(r[0],r[1],r[2]),Promise.all(i)):Promise.resolve()}}class bv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]&&(e=e.extensions[this.name],t.ior=void 0!==e.ior?e.ior:1.5),Promise.resolve()}}class Sv{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){e=this.parser.json.materials[e];return e.extensions&&e.extensions[this.name]?Xn:null}extendMaterialParams(e,t){var i,r,n=this.parser,e=n.json.materials[e];return e.extensions&&e.extensions[this.name]?(i=[],e=e.extensions[this.name],t.specularIntensity=void 0!==e.specularFactor?e.specularFactor:1,void 0!==e.specularTexture&&i.push(n.assignTexture(t,"specularIntensityMap",e.specularTexture)),r=e.specularColorFactor||[1,1,1],t.specularColor=new de(r[0],r[1],r[2]),void 0!==e.specularColorTexture&&i.push(n.assignTexture(t,"specularColorMap",e.specularColorTexture,Pe)),Promise.all(i)):Promise.resolve()}}class Tv{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){var t=this.parser,i=t.json,r=i.textures[e];if(r.extensions&&r.extensions[this.name]){var r=r.extensions[this.name],n=t.options.ktx2Loader;if(n)return t.loadTextureImage(e,r.source,n);if(i.extensionsRequired&&0<=i.extensionsRequired.indexOf(this.name))throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")}return null}}class Ev{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const i=this.name,r=this.parser,n=r.json,e=n.textures[t];if(!e.extensions||!e.extensions[i])return null;const a=e.extensions[i],s=n.images[a.source];let o=r.textureLoader;var l;return s.uri&&null!==(l=r.options.manager.getHandler(s.uri))&&(o=l),this.detectSupport().then(function(e){if(e)return r.loadTextureImage(t,a.source,o);if(n.extensionsRequired&&0<=n.extensionsRequired.indexOf(i))throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}class Av{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){var t=this.parser.json,e=t.bufferViews[e];if(e.extensions&&e.extensions[this.name]){const s=e.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(o&&o.supported)return Promise.all([i,o.ready]).then(function(e){var t=s.byteOffset||0,i=s.byteLength||0,r=s.count,n=s.byteStride,a=new ArrayBuffer(r*n),e=new Uint8Array(e[0],t,i);return o.decodeGltfBuffer(new Uint8Array(a),r,n,e,s.mode,s.filter),a});if(t.extensionsRequired&&0<=t.extensionsRequired.indexOf(this.name))throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")}return null}}const vh="glTF",gs=12,cc={JSON:1313821514,BIN:5130562};class Cv{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,gs);if(this.header={magic:on.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");var i=this.header.length-gs,r=new DataView(e,gs);let n=0;for(;n<i;){var a,s=r.getUint32(n,!0),o=(n+=4,r.getUint32(n,!0));n+=4,o===cc.JSON?(a=new Uint8Array(e,gs+n,s),this.content=on.decodeText(a)):o===cc.BIN&&(a=gs+n,this.body=e.slice(a,a+s)),n+=s}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Lv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},o={},l={};for(const p in a){var h=Xa[p]||p.toLowerCase();s[h]=a[p]}for(const m in e.attributes){var c,u,d=Xa[m]||m.toLowerCase();void 0!==a[m]&&(c=i.accessors[e.attributes[m]],u=Rs[c.componentType],l[d]=u,o[d]=!0===c.normalized)}return t.getDependency("bufferView",n).then(function(e){return new Promise(function(n){r.decodeDracoFile(e,function(e){for(const r in e.attributes){var t=e.attributes[r],i=o[r];void 0!==i&&(t.normalized=i)}n(e)},s,l)})})}}class Rv{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ja extends ks{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const i=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join(`
`),r=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join(`
`),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join(`
`),a=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:(new de).setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(e){for(const t in o)e.uniforms[t]=o[t];e.fragmentShader=e.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",i).replace("#include <metalnessmap_pars_fragment>",r).replace("#include <roughnessmap_fragment>",n).replace("#include <metalnessmap_fragment>",a).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(e){o.specular.value=e}},specularMap:{get:function(){return o.specularMap.value},set:function(e){(o.specularMap.value=e)?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(e){o.glossiness.value=e}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(e){(o.glossinessMap.value=e)?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Pv{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return ja}extendParams(e,t,i){var r,t=t.extensions[this.name],n=(e.color=new de(1,1,1),e.opacity=1,[]);return Array.isArray(t.diffuseFactor)&&(r=t.diffuseFactor,e.color.fromArray(r),e.opacity=r[3]),void 0!==t.diffuseTexture&&n.push(i.assignTexture(e,"map",t.diffuseTexture,Pe)),e.emissive=new de(0,0,0),e.glossiness=void 0!==t.glossinessFactor?t.glossinessFactor:1,e.specular=new de(1,1,1),Array.isArray(t.specularFactor)&&e.specular.fromArray(t.specularFactor),void 0!==t.specularGlossinessTexture&&(r=t.specularGlossinessTexture,n.push(i.assignTexture(e,"glossinessMap",r)),n.push(i.assignTexture(e,"specularMap",r,Pe))),Promise.all(n)}createMaterial(e){var t=new ja(e);return t.fog=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=void 0===e.emissiveIntensity?1:e.emissiveIntensity,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,t.normalMapType=ci,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t}}class Dv{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}}class vo extends Us{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){var t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let e=0;e!==r;e++)t[e]=i[n+e];return t}}vo.prototype.interpolate_=function(e,t,i,r){var n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=2*s,l=3*s,h=r-t,r=(i-t)/h,i=r*r,t=i*r,c=e*l,u=c-l,d=-2*t+3*i,p=t-i,m=1-d,f=p-i+r;for(let e=0;e!==s;e++){var g=a[u+e+s],v=a[u+e+o]*h,x=a[c+e+s],_=a[c+e]*h;n[e]=m*g+f*v+d*x+p*_}return n};const Iv=new Mt;class Fv extends vo{interpolate_(e,t,i,r){e=super.interpolate_(e,t,i,r);return Iv.fromArray(e).normalize().toArray(e),e}}const xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hc={9728:ft,9729:$e,9984:za,9985:Oc,9986:Oa,9987:li},uc={33071:gt,33648:Er,10497:hn},dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},On={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nv={CUBICSPLINE:void 0,LINEAR:Gi,STEP:Es},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zv(e){return void 0===e.DefaultMaterial&&(e.DefaultMaterial=new ks({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),e.DefaultMaterial}function vs(e,t,i){for(const r in i.extensions)void 0===e[r]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function ti(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ov(r,i,n){let a=!1,s=!1,o=!1;for(let e=0,t=i.length;e<t;e++){var l=i[e];if(void 0!==l.POSITION&&(a=!0),void 0!==l.NORMAL&&(s=!0),void 0!==l.COLOR_0&&(o=!0),a&&s&&o)break}if(!a&&!s&&!o)return Promise.resolve(r);var h=[],c=[],u=[];for(let e=0,t=i.length;e<t;e++){var d,p=i[e];a&&(d=void 0!==p.POSITION?n.getDependency("accessor",p.POSITION):r.attributes.position,h.push(d)),s&&(d=void 0!==p.NORMAL?n.getDependency("accessor",p.NORMAL):r.attributes.normal,c.push(d)),o&&(p=void 0!==p.COLOR_0?n.getDependency("accessor",p.COLOR_0):r.attributes.color,u.push(p))}return Promise.all([Promise.all(h),Promise.all(c),Promise.all(u)]).then(function(e){var t=e[0],i=e[1],e=e[2];return a&&(r.morphAttributes.position=t),s&&(r.morphAttributes.normal=i),o&&(r.morphAttributes.color=e),r.morphTargetsRelative=!0,r})}function kv(i,r){if(i.updateMorphTargets(),void 0!==r.weights)for(let e=0,t=r.weights.length;e<t;e++)i.morphTargetInfluences[e]=r.weights[e];if(r.extras&&Array.isArray(r.extras.targetNames)){var n=r.extras.targetNames;if(i.morphTargetInfluences.length===n.length){i.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++)i.morphTargetDictionary[n[e]]=e}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uv(e){var t=e.extensions&&e.extensions[Le.KHR_DRACO_MESH_COMPRESSION];let i;return i=t?"draco:"+t.bufferView+":"+t.indices+":"+fc(t.attributes):e.indices+":"+fc(e.attributes)+":"+e.mode}function fc(i){let r="";var n=Object.keys(i).sort();for(let e=0,t=n.length;e<t;e++)r+=n[e]+":"+i[n[e]]+";";return r}function qa(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bv(e){return 0<e.search(/\.jpe?g($|\?)/i)||0===e.search(/^data\:image\/jpeg/)?"image/jpeg":0<e.search(/\.webp($|\?)/i)||0===e.search(/^data\:image\/webp/)?"image/webp":"image/png"}class Vv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pv,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};var e=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),t=-1<navigator.userAgent.indexOf("Firefox"),i=t?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;"undefined"==typeof createImageBitmap||e||t&&i<98?this.textureLoader=new uh(this.options.manager):this.textureLoader=new U0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(i,e){const r=this,n=this.json,a=this.extensions;this.cache.removeAll(),this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(e){const t={scene:e[0][n.scene||0],scenes:e[0],animations:e[1],cameras:e[2],asset:n.asset,parser:r,userData:{}};vs(a,t,n),ti(t,n),Promise.all(r._invokeAll(function(e){return e.afterRoot&&e.afterRoot(t)})).then(function(){i(t)})}).catch(e)}_markDefs(){var i=this.json.nodes||[],r=this.json.skins||[],n=this.json.meshes||[];for(let e=0,t=r.length;e<t;e++){var a=r[e].joints;for(let e=0,t=a.length;e<t;e++)i[a[e]].isBone=!0}for(let e=0,t=i.length;e<t;e++){var s=i[e];void 0!==s.mesh&&(this._addNodeRef(this.meshCache,s.mesh),void 0!==s.skin)&&(n[s.mesh].isSkinnedMesh=!0),void 0!==s.camera&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),a=(e,t)=>{var i,r,n=this.associations.get(e);null!=n&&this.associations.set(t,n);for([i,r]of e.children.entries())a(r,t.children[i])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(t){var i=Object.values(this.plugins);i.push(this);for(let e=0;e<i.length;e++){var r=t(i[e]);if(r)return r}return null}_invokeAll(t){var i=Object.values(this.plugins),r=(i.unshift(this),[]);for(let e=0;e<i.length;e++){var n=t(i[e]);n&&r.push(n)}return r}getDependency(e,t){var i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(i){let e=this.cache.get(i);if(!e){const r=this,t=this.json[i+("mesh"===i?"es":"s")]||[];e=Promise.all(t.map(function(e,t){return r.getDependency(i,t)})),this.cache.add(i,e)}return e}loadBuffer(e){const i=this.json.buffers[e],r=this.fileLoader;if(i.type&&"arraybuffer"!==i.type)throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(void 0===i.uri&&0===e)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(e,t){r.load(on.resolveURL(i.uri,n.path),e,void 0,function(){t(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(e){const r=this.json.bufferViews[e];return this.getDependency("buffer",r.buffer).then(function(e){var t=r.byteLength||0,i=r.byteOffset||0;return e.slice(i,i+t)})}loadAccessor(e){const f=this,g=this.json,v=this.json.accessors[e];return void 0===v.bufferView&&void 0===v.sparse?Promise.resolve(null):(e=[],void 0!==v.bufferView?e.push(this.getDependency("bufferView",v.bufferView)):e.push(null),void 0!==v.sparse&&(e.push(this.getDependency("bufferView",v.sparse.indices.bufferView)),e.push(this.getDependency("bufferView",v.sparse.values.bufferView))),Promise.all(e).then(function(e){var t=e[0],i=dc[v.type],r=Rs[v.componentType],n=r.BYTES_PER_ELEMENT,a=n*i,s=v.byteOffset||0,o=void 0!==v.bufferView?g.bufferViews[v.bufferView].byteStride:void 0,l=!0===v.normalized;let h,c;if(o&&o!==a){var a=Math.floor(s/o),u="InterleavedBuffer:"+v.bufferView+":"+v.componentType+":"+a+":"+v.count;let e=f.cache.get(u);e||(h=new r(t,a*o,v.count*o/n),e=new d0(h,o/n),f.cache.add(u,e)),c=new oo(e,i,s%o/n,l)}else h=null===t?new r(v.count*i):new r(t,s,v.count*i),c=new wt(h,i,l);if(void 0!==v.sparse){var a=dc.SCALAR,u=Rs[v.sparse.indices.componentType],o=v.sparse.indices.byteOffset||0,n=v.sparse.values.byteOffset||0,d=new u(e[1],o,v.sparse.count*a),p=new r(e[2],n,v.sparse.count*i);null!==t&&(c=new wt(c.array.slice(),c.itemSize,c.normalized));for(let e=0,t=d.length;e<t;e++){var m=d[e];if(c.setX(m,p[e*i]),2<=i&&c.setY(m,p[e*i+1]),3<=i&&c.setZ(m,p[e*i+2]),4<=i&&c.setW(m,p[e*i+3]),5<=i)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return c}))}loadTexture(e){var t=this.json,i=this.options,r=t.textures[e].source,t=t.images[r];let n=this.textureLoader;return t.uri&&null!==(i=i.manager.getHandler(t.uri))&&(n=i),this.loadTextureImage(e,r,n)}loadTextureImage(i,e,t){const r=this,n=this.json,a=n.textures[i],s=n.images[e],o=(s.uri||s.bufferView)+":"+a.sampler;return this.textureCache[o]||(e=this.loadImageSource(e,t).then(function(e){e.flipY=!1,a.name&&(e.name=a.name);var t=(n.samplers||{})[a.sampler]||{};return e.magFilter=hc[t.magFilter]||$e,e.minFilter=hc[t.minFilter]||li,e.wrapS=uc[t.wrapS]||hn,e.wrapT=uc[t.wrapT]||hn,r.associations.set(e,{textures:i}),e}).catch(function(){return null}),this.textureCache[o]=e)}loadImageSource(e,n){const t=this.json,a=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());const i=t.images[e],r=self.URL||self.webkitURL;let s=i.uri||"",o=!1;if(void 0!==i.bufferView)s=this.getDependency("bufferView",i.bufferView).then(function(e){o=!0;e=new Blob([e],{type:i.mimeType});return s=r.createObjectURL(e)});else if(void 0===i.uri)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");var l=Promise.resolve(s).then(function(r){return new Promise(function(t,e){let i=t;!0===n.isImageBitmapLoader&&(i=function(e){e=new nt(e);e.needsUpdate=!0,t(e)}),n.load(on.resolveURL(r,a.path),i,void 0,e)})}).then(function(e){return!0===o&&r.revokeObjectURL(s),e.userData.mimeType=i.mimeType||Bv(i.uri),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),e});return this.sourceCache[e]=l}assignTexture(r,n,a,s){const o=this;return this.getDependency("texture",a.index).then(function(e){var t,i;return void 0===a.texCoord||0==a.texCoord||"aoMap"===n&&1==a.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+a.texCoord+" for texture "+n+" not yet supported."),o.extensions[Le.KHR_TEXTURE_TRANSFORM]&&(t=void 0!==a.extensions?a.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0)&&(i=o.associations.get(e),e=o.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(e,t),o.associations.set(e,i)),void 0!==s&&(e.encoding=s),r[n]=e})}assignFinalMaterial(e){var t=e.geometry;let i=e.material;var r=void 0===t.attributes.tangent,n=void 0!==t.attributes.color,a=void 0===t.attributes.normal;if(e.isPoints){var s="PointsMaterial:"+i.uuid;let e=this.cache.get(s);e||(e=new lo,it.prototype.copy.call(e,i),e.color.copy(i.color),e.map=i.map,e.sizeAttenuation=!1,this.cache.add(s,e)),i=e}else if(e.isLine){s="LineBasicMaterial:"+i.uuid;let e=this.cache.get(s);e||(e=new Os,it.prototype.copy.call(e,i),e.color.copy(i.color),this.cache.add(s,e)),i=e}if(r||n||a){let e="ClonedMaterial:"+i.uuid+":",t=(i.isGLTFSpecularGlossinessMaterial&&(e+="specular-glossiness:"),r&&(e+="derivative-tangents:"),n&&(e+="vertex-colors:"),a&&(e+="flat-shading:"),this.cache.get(e));t||(t=i.clone(),n&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale)&&(t.clearcoatNormalScale.y*=-1),this.cache.add(e,t),this.associations.set(t,this.associations.get(i))),i=t}i.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return ks}loadMaterial(t){const i=this,e=this.json,r=this.extensions,n=e.materials[t];let a;const s={},o=n.extensions||{},l=[];o[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]?(h=r[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS],a=h.getMaterialType(),l.push(h.extendParams(s,n,i))):o[Le.KHR_MATERIALS_UNLIT]?(h=r[Le.KHR_MATERIALS_UNLIT],a=h.getMaterialType(),l.push(h.extendParams(s,n,i))):(h=n.pbrMetallicRoughness||{},s.color=new de(1,1,1),s.opacity=1,Array.isArray(h.baseColorFactor)&&(c=h.baseColorFactor,s.color.fromArray(c),s.opacity=c[3]),void 0!==h.baseColorTexture&&l.push(i.assignTexture(s,"map",h.baseColorTexture,Pe)),s.metalness=void 0!==h.metallicFactor?h.metallicFactor:1,s.roughness=void 0!==h.roughnessFactor?h.roughnessFactor:1,void 0!==h.metallicRoughnessTexture&&(l.push(i.assignTexture(s,"metalnessMap",h.metallicRoughnessTexture)),l.push(i.assignTexture(s,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(e){return e.getMaterialType&&e.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(e){return e.extendMaterialParams&&e.extendMaterialParams(t,s)})))),!0===n.doubleSided&&(s.side=cn);var h,c=n.alphaMode||Ca.OPAQUE;return c===Ca.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,c===Ca.MASK&&(s.alphaTest=void 0!==n.alphaCutoff?n.alphaCutoff:.5)),void 0!==n.normalTexture&&a!==wn&&(l.push(i.assignTexture(s,"normalMap",n.normalTexture)),s.normalScale=new ve(1,1),void 0!==n.normalTexture.scale)&&(h=n.normalTexture.scale,s.normalScale.set(h,h)),void 0!==n.occlusionTexture&&a!==wn&&(l.push(i.assignTexture(s,"aoMap",n.occlusionTexture)),void 0!==n.occlusionTexture.strength)&&(s.aoMapIntensity=n.occlusionTexture.strength),void 0!==n.emissiveFactor&&a!==wn&&(s.emissive=(new de).fromArray(n.emissiveFactor)),void 0!==n.emissiveTexture&&a!==wn&&l.push(i.assignTexture(s,"emissiveMap",n.emissiveTexture,Pe)),Promise.all(l).then(function(){let e;return e=a===ja?r[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(s):new a(s),n.name&&(e.name=n.name),ti(e,n),i.associations.set(e,{materials:t}),n.extensions&&vs(r,e,n),e})}createUniqueName(e){var t=Ne.sanitizeNodeName(e||"");let i=t;for(let e=1;this.nodeNamesUsed[i];++e)i=t+"_"+e;return this.nodeNamesUsed[i]=!0,i}loadGeometries(i){const r=this,n=this.extensions,a=this.primitiveCache;var s=[];for(let e=0,t=i.length;e<t;e++){var o=i[e],l=Uv(o),h=a[l];if(h)s.push(h.promise);else{let e;e=o.extensions&&o.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?function(t){return n[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t,r).then(function(e){return pc(e,t,r)})}(o):pc(new ct,o,r),a[l]={primitive:o,promise:e},s.push(e)}}return Promise.all(s)}loadMesh(h){const c=this,e=this.json,u=this.extensions,d=e.meshes[h],p=d.primitives,i=[];for(let e=0,t=p.length;e<t;e++){var r=void 0===p[e].material?zv(this.cache):this.getDependency("material",p[e].material);i.push(r)}return i.push(c.loadGeometries(p)),Promise.all(i).then(function(e){var i=e.slice(0,e.length-1),r=e[e.length-1],n=[];for(let t=0,e=r.length;t<e;t++){var a=r[t],s=p[t];let e;var o=i[t];if(s.mode===xn.TRIANGLES||s.mode===xn.TRIANGLE_STRIP||s.mode===xn.TRIANGLE_FAN||void 0===s.mode)!0!==(e=new(!0===d.isSkinnedMesh?ah:Qe)(a,o)).isSkinnedMesh||e.geometry.attributes.skinWeight.normalized||e.normalizeSkinWeights(),s.mode===xn.TRIANGLE_STRIP?e.geometry=mc(e.geometry,Ju):s.mode===xn.TRIANGLE_FAN&&(e.geometry=mc(e.geometry,Bc));else if(s.mode===xn.LINES)e=new g0(a,o);else if(s.mode===xn.LINE_STRIP)e=new Br(a,o);else if(s.mode===xn.LINE_LOOP)e=new v0(a,o);else{if(s.mode!==xn.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+s.mode);e=new co(a,o)}0<Object.keys(e.geometry.morphAttributes).length&&kv(e,d),e.name=c.createUniqueName(d.name||"mesh_"+h),ti(e,d),s.extensions&&vs(u,e,s),c.assignFinalMaterial(e),n.push(e)}for(let e=0,t=n.length;e<t;e++)c.associations.set(n[e],{meshes:h,primitives:e});if(1===n.length)return n[0];var l=new bn;c.associations.set(l,{meshes:h});for(let e=0,t=n.length;e<t;e++)l.add(n[e]);return l})}loadCamera(e){let t;var e=this.json.cameras[e],i=e[e.type];if(i)return"perspective"===e.type?t=new mt(jt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):"orthographic"===e.type&&(t=new zs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),e.name&&(t.name=this.createUniqueName(e.name)),ti(t,e),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(e){return i.inverseBindMatrices=e,i})}loadAnimation(t){const _=this.json.animations[t],i=[],r=[],n=[],a=[],s=[];for(let e=0,t=_.channels.length;e<t;e++){var o=_.channels[e],l=_.samplers[o.sampler],o=o.target,h=void 0!==o.node?o.node:o.id,c=void 0!==_.parameters?_.parameters[l.input]:l.input,u=void 0!==_.parameters?_.parameters[l.output]:l.output;i.push(this.getDependency("node",h)),r.push(this.getDependency("accessor",c)),n.push(this.getDependency("accessor",u)),a.push(l),s.push(o)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(a),Promise.all(s)]).then(function(e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=[];for(let e=0,t=i.length;e<t;e++){var l=i[e],h=r[e],c=n[e],u=a[e],d=s[e];if(void 0!==l){l.updateMatrix(),l.matrixAutoUpdate=!0;let i;switch(On[d.path]){case On.weights:i=Wi;break;case On.rotation:i=Hn;break;case On.position:case On.scale:default:i=ji}const g=l.name||l.uuid,v=void 0!==u.interpolation?Nv[u.interpolation]:Gi,x=[];On[d.path]===On.weights?l.traverse(function(e){e.morphTargetInfluences&&x.push(e.name||e.uuid)}):x.push(g);let r=c.array;if(c.normalized){var p=qa(r.constructor),m=new Float32Array(r.length);for(let e=0,t=r.length;e<t;e++)m[e]=r[e]*p;r=m}for(let e=0,t=x.length;e<t;e++){var f=new i(x[e]+"."+On[d.path],h.array,r,v);"CUBICSPLINE"===u.interpolation&&(f.createInterpolant=function(e){return new(this instanceof Hn?Fv:vo)(this.times,this.values,this.getValueSize()/3,e)},f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),o.push(f)}}}e=_.name||"animation_"+t;return new hh(e,void 0,o)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return void 0===r.mesh?null:i.getDependency("mesh",r.mesh).then(function(e){e=i._getNodeRef(i.meshCache,r.mesh,e);return void 0!==r.weights&&e.traverse(function(i){if(i.isMesh)for(let e=0,t=r.weights.length;e<t;e++)i.morphTargetInfluences[e]=r.weights[e]}),e})}loadNode(n){const e=this.json,t=this.extensions,a=this,s=e.nodes[n],o=s.name?a.createUniqueName(s.name):"";return function(){const t=[],e=a._invokeOne(function(e){return e.createNodeMesh&&e.createNodeMesh(n)});return e&&t.push(e),void 0!==s.camera&&t.push(a.getDependency("camera",s.camera).then(function(e){return a._getNodeRef(a.cameraCache,s.camera,e)})),a._invokeAll(function(e){return e.createNodeAttachment&&e.createNodeAttachment(n)}).forEach(function(e){t.push(e)}),Promise.all(t)}().then(function(i){let r;if((r=!0===s.isBone?new Cr:1<i.length?new bn:1===i.length?i[0]:new Ye)!==i[0])for(let e=0,t=i.length;e<t;e++)r.add(i[e]);var e;return s.name&&(r.userData.name=s.name,r.name=o),ti(r,s),s.extensions&&vs(t,r,s),void 0!==s.matrix?((e=new pe).fromArray(s.matrix),r.applyMatrix4(e)):(void 0!==s.translation&&r.position.fromArray(s.translation),void 0!==s.rotation&&r.quaternion.fromArray(s.rotation),void 0!==s.scale&&r.scale.fromArray(s.scale)),a.associations.has(r)||a.associations.set(r,{}),a.associations.get(r).nodes=n,r})}loadScene(e){const i=this.json,t=this.extensions,r=this.json.scenes[e],n=this,a=new bn;r.name&&(a.name=n.createUniqueName(r.name)),ti(a,r),r.extensions&&vs(t,a,r);var s=r.nodes||[],o=[];for(let e=0,t=s.length;e<t;e++)o.push(_h(s[e],a,i,n));return Promise.all(o).then(function(){return n.associations=(e=>{const i=new Map;for(var[t,r]of n.associations)(t instanceof it||t instanceof nt)&&i.set(t,r);return e.traverse(e=>{var t=n.associations.get(e);null!=t&&i.set(e,t)}),i})(a),a})}}function _h(e,t,s,o){const l=s.nodes[e];return o.getDependency("node",e).then(function(e){if(void 0===l.skin)return e;let s;return o.getDependency("skin",l.skin).then(function(i){var r=[];for(let e=0,t=(s=i).joints.length;e<t;e++)r.push(o.getDependency("node",s.joints[e]));return Promise.all(r)}).then(function(a){return e.traverse(function(e){if(e.isMesh){var i=[],r=[];for(let e=0,t=a.length;e<t;e++){var n=a[e];n?(i.push(n),n=new pe,void 0!==s.inverseBindMatrices&&n.fromArray(s.inverseBindMatrices.array,16*e),r.push(n)):console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[e])}e.bind(new Ur(i,r),e.matrixWorld)}}),e})}).then(function(i){t.add(i);var r=[];if(l.children){var n=l.children;for(let e=0,t=n.length;e<t;e++){var a=n[e];r.push(_h(a,i,s,o))}}return Promise.all(r)})}function Gv(e,t,i){var r=t.attributes,n=new Ki;if(void 0!==r.POSITION){var r=i.json.accessors[r.POSITION],a=r.min,s=r.max;if(void 0===a||void 0===s)console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");else{n.set(new P(a[0],a[1],a[2]),new P(s[0],s[1],s[2])),r.normalized&&(a=qa(Rs[r.componentType]),n.min.multiplyScalar(a),n.max.multiplyScalar(a));var o=t.targets;if(void 0!==o){var l=new P,h=new P;for(let e=0,t=o.length;e<t;e++){var c,u,d=o[e];void 0!==d.POSITION&&(u=(d=i.json.accessors[d.POSITION]).min,c=d.max,void 0!==u&&void 0!==c?(h.setX(Math.max(Math.abs(u[0]),Math.abs(c[0]))),h.setY(Math.max(Math.abs(u[1]),Math.abs(c[1]))),h.setZ(Math.max(Math.abs(u[2]),Math.abs(c[2]))),d.normalized&&(u=qa(Rs[d.componentType]),h.multiplyScalar(u)),l.max(h)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."))}n.expandByVector(l)}e.boundingBox=n;s=new Zi;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,e.boundingSphere=s}}}function pc(i,e,r){var t,n=e.attributes,a=[];for(const o in n){var s=Xa[o]||o.toLowerCase();s in i.attributes||a.push(function(e,t){return r.getDependency("accessor",e).then(function(e){i.setAttribute(t,e)})}(n[o],s))}return void 0===e.indices||i.index||(t=r.getDependency("accessor",e.indices).then(function(e){i.setIndex(e)}),a.push(t)),ti(i,e),Gv(i,e,r),Promise.all(a).then(function(){return void 0!==e.targets?Ov(i,e.targets,r):i})}function mc(e,t){let i=e.getIndex();if(null===i){var r=[],n=e.getAttribute("position");if(void 0===n)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<n.count;e++)r.push(e);e.setIndex(r),i=e.getIndex()}var a=i.count-2,s=[];if(t===Bc)for(let e=1;e<=a;e++)s.push(i.getX(0)),s.push(i.getX(e)),s.push(i.getX(e+1));else for(let e=0;e<a;e++)e%2==0?(s.push(i.getX(e)),s.push(i.getX(e+1)),s.push(i.getX(e+2))):(s.push(i.getX(e+2)),s.push(i.getX(e+1)),s.push(i.getX(e)));s.length/3!=a&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");t=e.clone();return t.setIndex(s),t}var gc={},$a=function(e){return URL.createObjectURL(new Blob([e],{type:"text/javascript"}))},xh=function(e){return new Worker(e)};try{URL.revokeObjectURL($a(""))}catch{$a=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},xh=function(e){return new Worker(e,{type:"module"})}}for(var Hv=function(e,t,i,r,n){t=xh(gc[t]||(gc[t]=$a(e)));return t.onerror=function(e){return n(e.error,null)},t.onmessage=function(e){return n(null,e.data)},t.postMessage(i,r),t},Re=Uint8Array,ht=Uint16Array,An=Uint32Array,ns=new Re([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),is=new Re([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ps=new Re([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yh=function(e,t){for(var i=new ht(31),r=0;r<31;++r)i[r]=t+=1<<e[r-1];for(var n=new An(i[30]),r=1;r<30;++r)for(var a=i[r];a<i[r+1];++a)n[a]=a-i[r]<<5|r;return[i,n]},Mh=yh(ns,2),_o=Mh[0],Lr=Mh[1],wh=(_o[28]=258,Lr[258]=28,yh(is,0)),bh=wh[0],Ya=wh[1],Ds=new ht(32768),We=0;We<32768;++We){var kn=(52428&(kn=(43690&We)>>>1|(21845&We)<<1))>>>2|(13107&kn)<<2;Ds[We]=((65280&(kn=(61680&kn)>>>4|(3855&kn)<<4))>>>8|(255&kn)<<8)>>>1}for(var zt=function(e,t,i){for(var r=e.length,n=0,a=new ht(t);n<r;++n)++a[e[n]-1];var s=new ht(t);for(n=0;n<t;++n)s[n]=s[n-1]+a[n-1]<<1;if(i){for(var o=new ht(1<<t),l=15-t,n=0;n<r;++n)if(e[n])for(var h=n<<4|e[n],c=t-e[n],u=s[e[n]-1]++<<c,d=u|(1<<c)-1;u<=d;++u)o[Ds[u]>>>l]=h}else for(o=new ht(r),n=0;n<r;++n)e[n]&&(o[n]=Ds[s[e[n]-1]++]>>>15-e[n]);return o},Cn=new Re(288),We=0;We<144;++We)Cn[We]=8;for(We=144;We<256;++We)Cn[We]=9;for(We=256;We<280;++We)Cn[We]=7;for(We=280;We<288;++We)Cn[We]=8;for(var $i=new Re(32),We=0;We<32;++We)$i[We]=5;var Sh=zt(Cn,9,0),Th=zt(Cn,9,1),Eh=zt($i,5,0),Ah=zt($i,5,1),yr=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},It=function(e,t,i){var r=t/8|0;return(e[r]|e[1+r]<<8)>>(7&t)&i},Mr=function(e,t){var i=t/8|0;return(e[i]|e[1+i]<<8|e[2+i]<<16)>>(7&t)},Bs=function(e){return(e/8|0)+(7&e&&1)},Ot=function(e,t,i){(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length);var r=new(e instanceof ht?ht:e instanceof An?An:Re)(i-t);return r.set(e.subarray(t,i)),r},Vs=function(e,i,t){var r=e.length;if(!r||t&&!t.l&&r<5)return i||new Re(0);function n(e){var t=i.length;t<e&&((t=new Re(Math.max(2*t,e))).set(i),i=t)}var a=!i||t,s=!t||t.i,o=(t=t||{},i=i||new Re(3*r),t.f||0),l=t.p||0,h=t.b||0,c=t.l,u=t.d,d=t.m,p=t.n,m=8*r;do{if(!c){t.f=o=It(e,l,1);var f=It(e,l+1,3);if(l+=3,!f){var g=e[(T=Bs(l)+4)-4]|e[T-3]<<8,v=T+g;if(r<v){if(s)throw"unexpected EOF";break}a&&n(h+g),i.set(e.subarray(T,v),h),t.b=h+=g,t.p=l=8*v;continue}if(1==f)c=Th,u=Ah,d=9,p=5;else{if(2!=f)throw"invalid block type";var g=It(e,l,31)+257,x=It(e,l+10,15)+4,_=g+It(e,l+5,31)+1;l+=14;for(var y=new Re(_),b=new Re(19),w=0;w<x;++w)b[Ps[w]]=It(e,l+3*w,7);l+=3*x;for(var v=yr(b),M=(1<<v)-1,S=zt(b,v,1),w=0;w<_;){var T,E=S[It(e,l,M)];if(l+=15&E,(T=E>>>4)<16)y[w++]=T;else{var A=0,L=0;for(16==T?(L=3+It(e,l,3),l+=2,A=y[w-1]):17==T?(L=3+It(e,l,7),l+=3):18==T&&(L=11+It(e,l,127),l+=7);L--;)y[w++]=A}}var f=y.subarray(0,g),C=y.subarray(g),d=yr(f),p=yr(C),c=zt(f,d,1),u=zt(C,p,1)}if(m<l){if(s)throw"unexpected EOF";break}}a&&n(h+131072);for(var z=(1<<d)-1,k=(1<<p)-1,P=l;;P=l){var R=(A=c[Mr(e,l)&z])>>>4;if(m<(l+=15&A)){if(s)throw"unexpected EOF";break}if(!A)throw"invalid length/literal";if(R<256)i[h++]=R;else{if(256==R){P=l,c=null;break}var I=R-254,R=(264<R&&(N=ns[w=R-257],I=It(e,l,(1<<N)-1)+_o[w],l+=N),u[Mr(e,l)&k]),D=R>>>4;if(!R)throw"invalid distance";l+=15&R;var N,C=bh[D];if(3<D&&(N=is[D],C+=Mr(e,l)&(1<<N)-1,l+=N),m<l){if(s)throw"unexpected EOF";break}a&&n(h+131072);for(var O=h+I;h<O;h+=4)i[h]=i[h-C],i[h+1]=i[h+1-C],i[h+2]=i[h+2-C],i[h+3]=i[h+3-C];h=O}}t.l=c,t.p=P,t.b=h,c&&(o=1,t.m=d,t.d=u,t.n=p)}while(!o);return h==i.length?i:Ot(i,0,h)},nn=function(e,t,i){var r=t/8|0;e[r]|=i<<=7&t,e[1+r]|=i>>>8},Ii=function(e,t,i){var r=t/8|0;e[r]|=i<<=7&t,e[1+r]|=i>>>8,e[2+r]|=i>>>16},wr=function(e,t){for(var i=[],r=0;r<e.length;++r)e[r]&&i.push({s:r,f:e[r]});var n=i.length,a=i.slice();if(!n)return[Sn,0];if(1==n)return(f=new Re(i[0].s+1))[i[0].s]=1,[f,1];i.sort(function(e,t){return e.f-t.f}),i.push({s:-1,f:25001});var s=i[0],o=i[1],l=0,h=1,c=2;for(i[0]={s:-1,f:s.f+o.f,l:s,r:o};h!=n-1;)s=i[i[l].f<i[c].f?l++:c++],o=i[l!=h&&i[l].f<i[c].f?l++:c++],i[h++]={s:-1,f:s.f+o.f,l:s,r:o};for(var u=a[0].s,r=1;r<n;++r)a[r].s>u&&(u=a[r].s);var d=new ht(u+1),p=Rr(i[h-1],d,0);if(t<p){var r=0,m=0,f=p-t,g=1<<f;for(a.sort(function(e,t){return d[t.s]-d[e.s]||e.f-t.f});r<n;++r){var v=a[r].s;if(!(d[v]>t))break;m+=g-(1<<p-d[v]),d[v]=t}for(m>>>=f;0<m;){var x=a[r].s;d[x]<t?m-=1<<t-d[x]++-1:++r}for(;0<=r&&m;--r){var _=a[r].s;d[_]==t&&(--d[_],++m)}p=t}return[new Re(d),p]},Rr=function(e,t,i){return-1==e.s?Math.max(Rr(e.l,t,i+1),Rr(e.r,t,i+1)):t[e.s]=i},Ka=function(e){for(var t=e.length;t&&!e[--t];);function i(e){r[n++]=e}for(var r=new ht(++t),n=0,a=e[0],s=1,o=1;o<=t;++o)if(e[o]==a&&o!=t)++s;else{if(!a&&2<s){for(;138<s;s-=138)i(32754);2<s&&(i(10<s?s-11<<5|28690:s-3<<5|12305),s=0)}else if(3<s){for(i(a),--s;6<s;s-=6)i(8304);2<s&&(i(s-3<<5|8208),s=0)}for(;s--;)i(a);s=1,a=e[o]}return[r.subarray(0,n),t]},Fi=function(e,t){for(var i=0,r=0;r<t.length;++r)i+=e[r]*t[r];return i},bs=function(e,t,i){var r=i.length,n=Bs(t+2);e[n]=255&r,e[n+1]=r>>>8,e[n+2]=255^e[n],e[n+3]=255^e[n+1];for(var a=0;a<r;++a)e[n+a+4]=i[a];return 8*(n+4+r)},Za=function(e,t,i,r,n,a,s,o,l,h,c){nn(t,c++,i),++n[256];for(var i=wr(n,15),u=i[0],i=i[1],d=wr(a,15),p=d[0],d=d[1],m=Ka(u),f=m[0],m=m[1],g=Ka(p),v=g[0],g=g[1],x=new ht(19),_=0;_<f.length;++_)x[31&f[_]]++;for(_=0;_<v.length;++_)x[31&v[_]]++;for(var y=wr(x,7),b=y[0],y=y[1],w=19;4<w&&!b[Ps[w-1]];--w);var M=h+5<<3,S=Fi(n,Cn)+Fi(a,$i)+s,n=Fi(n,u)+Fi(a,p)+s+14+3*w+Fi(x,b)+(2*x[16]+3*x[17]+7*x[18]);if(M<=S&&M<=n)return bs(t,c,e.subarray(l,l+h));if(nn(t,c,1+(n<S)),c+=2,n<S){var T=zt(u,i,0),E=u,A=zt(p,d,0),L=p,C=zt(b,y,0);nn(t,c,m-257),nn(t,c+5,g-1),nn(t,c+10,w-4),c+=14;for(_=0;_<w;++_)nn(t,c+3*_,b[Ps[_]]);c+=3*w;for(var P=[f,v],R=0;R<2;++R)for(var I=P[R],_=0;_<I.length;++_){var D=31&I[_];nn(t,c,C[D]),c+=b[D],15<D&&(nn(t,c,I[_]>>>5&127),c+=I[_]>>>12)}}else T=Sh,E=Cn,A=Eh,L=$i;for(var N,_=0;_<o;++_)255<r[_]?(D=r[_]>>>18&31,Ii(t,c,T[D+257]),c+=E[D+257],7<D&&(nn(t,c,r[_]>>>23&31),c+=ns[D]),N=31&r[_],Ii(t,c,A[N]),c+=L[N],3<N&&(Ii(t,c,r[_]>>>5&8191),c+=is[N])):(Ii(t,c,T[r[_]]),c+=E[r[_]]);return Ii(t,c,T[256]),c+E[256]},Ch=new An([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Sn=new Re(0),Lh=function(t,e,i,r,n,a){var s=t.length,o=new Re(r+s+5*(1+Math.ceil(s/7e3))+n),l=o.subarray(r,o.length-n),h=0;if(!e||s<8)for(var c=0;c<=s;c+=65535)var u=c+65535,h=u<s?bs(l,h,t.subarray(c,u)):(l[c]=a,bs(l,h,t.subarray(c,s)));else{function d(e){return(t[e]^t[e+1]<<g^t[e+2]<<F)&p}for(var e=Ch[e-1],z=e>>>13,k=8191&e,p=(1<<i)-1,m=new ht(32768),f=new ht(1+p),g=Math.ceil(i/3),F=2*g,v=new An(25e3),x=new ht(288),_=new ht(32),y=0,b=0,c=0,w=0,M=0,S=0;c<s;++c){var T=d(c),E=32767&c,A=f[T];if(m[E]=A,f[T]=E,M<=c){var L=s-c;if((7e3<y||24576<w)&&423<L){h=Za(t,l,0,v,x,_,b,w,S,c-S,h);for(var w=y=b=0,S=c,C=0;C<286;++C)x[C]=0;for(C=0;C<30;++C)_[C]=0}var P=2,R=0,U=k,I=E-A&32767;if(2<L&&T==d(c-I))for(var B=Math.min(z,L)-1,H=Math.min(32767,c),V=Math.min(258,L);I<=H&&--U&&E!=A;){if(t[c+P]==t[c+P-I]){for(var D=0;D<V&&t[c+D]==t[c+D-I];++D);if(P<D){if(R=I,B<(P=D))break;for(var G=Math.min(I,D-2),N=0,C=0;C<G;++C){var O=c-I+C+32768&32767,W=O-m[O]+32768&32767;N<W&&(N=W,A=O)}}}I+=(E=A)-(A=m[E])+32768&32767}R?(v[w++]=268435456|Lr[P]<<18|Ya[R],T=31&Lr[P],L=31&Ya[R],b+=ns[T]+is[L],++x[257+T],++_[L],M=c+P,++y):(v[w++]=t[c],++x[t[c]])}}h=Za(t,l,a,v,x,_,b,w,S,c-S,h),!a&&7&h&&(h=bs(l,h+1,Sn))}return Ot(o,0,r+Bs(h)+n)},Rh=function(){for(var e=new An(256),t=0;t<256;++t){for(var i=t,r=9;--r;)i=(1&i&&3988292384)^i>>>1;e[t]=i}return e}(),ss=function(){var r=-1;return{p:function(e){for(var t=r,i=0;i<e.length;++i)t=Rh[255&t^e[i]]^t>>>8;r=t},d:function(){return~r}}},xo=function(){var s=1,o=0;return{p:function(e){for(var t=s,i=o,r=e.length,n=0;n!=r;){for(var a=Math.min(n+2655,r);n<a;++n)i+=t+=e[n];t=(65535&t)+15*(t>>16),i=(65535&i)+15*(i>>16)}s=t,o=i},d:function(){return(255&(s%=65521))<<24|s>>>8<<16|(255&(o%=65521))<<8|o>>>8}}},ui=function(e,t,i,r,n){return Lh(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,i,r,!n)},Gs=function(e,t){var i,r={};for(i in e)r[i]=e[i];for(i in t)r[i]=t[i];return r},vc=function(e,t,i){for(var r=e(),e=e.toString(),n=e.slice(e.indexOf("[")+1,e.lastIndexOf("]")).replace(/ /g,"").split(","),a=0;a<r.length;++a){var s=r[a],o=n[a];if("function"==typeof s){t+=";"+o+"=";var l=s.toString();if(s.prototype)if(-1!=l.indexOf("[native code]")){var h=l.indexOf(" ",8)+1;t+=l.slice(h,l.indexOf("(",h))}else for(var c in t+=l,s.prototype)t+=";"+o+".prototype."+c+"="+s.prototype[c].toString();else t+=l}else i[o]=s}return[t,i]},mr=[],Wv=function(e){var t,i=[];for(t in e)(e[t]instanceof Re||e[t]instanceof ht||e[t]instanceof An)&&i.push((e[t]=new e[t].constructor(e[t])).buffer);return i},Ph=function(e,t,i,r){var n;if(!mr[i]){for(var a="",s={},o=e.length-1,l=0;l<o;++l)a=(n=vc(e[l],a,s))[0],s=n[1];mr[i]=vc(e[o],a,s)}var h=Gs({},mr[i][1]);return Hv(mr[i][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",i,h,Wv(h),r)},rs=function(){return[Re,ht,An,ns,is,Ps,_o,bh,Th,Ah,Ds,zt,yr,It,Mr,Bs,Ot,Vs,cs,$n,yo]},as=function(){return[Re,ht,An,ns,is,Ps,Lr,Ya,Sh,Cn,Eh,$i,Ds,Ch,Sn,zt,nn,Ii,wr,Rr,Ka,Fi,bs,Za,Bs,Ot,Lh,ui,Hs,$n]},Dh=function(){return[Mo,bo,ke,ss,Rh]},Ih=function(){return[wo,zh]},Fh=function(){return[So,ke,xo]},Nh=function(){return[Oh]},$n=function(e){return postMessage(e,[e.buffer])},yo=function(e){return e&&e.size&&new Re(e.size)},os=function(e,t,i,r,n,a){var s=Ph(i,r,n,function(e,t){s.terminate(),a(e,t)});return s.postMessage([e,t],t.consume?[e.buffer]:[]),function(){s.terminate()}},kt=function(t){return t.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return t.push(e.data[0],e.data[1])}},ls=function(e,i,t,r,n){var a,s=Ph(e,r,n,function(e,t){e?(s.terminate(),i.ondata.call(i,e)):(t[1]&&s.terminate(),i.ondata.call(i,e,t[0],t[1]))});s.postMessage(t),i.push=function(e,t){if(a)throw"stream finished";if(!i.ondata)throw"no stream handler";s.postMessage([e,a=t],[e.buffer])},i.terminate=function(){s.terminate()}},yt=function(e,t){return e[t]|e[t+1]<<8},Je=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},La=function(e,t){return Je(e,t)+4294967296*Je(e,t+4)},ke=function(e,t,i){for(;i;++t)e[t]=i,i>>>=8},Mo=function(e,t){var i=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&ke(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),i){e[3]=8;for(var r=0;r<=i.length;++r)e[r+10]=i.charCodeAt(r)}},wo=function(e){if(31!=e[0]||139!=e[1]||8!=e[2])throw"invalid gzip data";var t=e[3],i=10;4&t&&(i+=e[10]|2+(e[11]<<8));for(var r=(t>>3&1)+(t>>4&1);0<r;r-=!e[i++]);return i+(2&t)},zh=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},bo=function(e){return 10+(e.filename&&e.filename.length+1||0)},So=function(e,t){t=t.level,t=0==t?0:t<6?1:9==t?3:2;e[0]=120,e[1]=t<<6|(t?32-2*t:1)},Oh=function(e){if(8!=(15&e[0])||7<e[0]>>>4||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(32&e[1])throw"invalid zlib data: preset dictionaries not supported"};function To(e,t){return t||"function"!=typeof e||(t=e,e={}),this.ondata=t,e}var un=function(){function e(e,t){t||"function"!=typeof e||(t=e,e={}),this.ondata=t,this.o=e||{}}return e.prototype.p=function(e,t){this.ondata(ui(e,this.o,0,0,!t),t)},e.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},e}(),kh=function(e,t){ls([as,function(){return[kt,un]}],this,To.call(this,e,t),function(e){e=new un(e.data);onmessage=kt(e)},6)};function Uh(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return os(e,t,[as],function(e){return $n(Hs(e.data[0],e.data[1]))},0,i)}function Hs(e,t){return ui(e,t||{},0,0)}var Et=function(){function e(e){this.s={},this.p=new Re(0),this.ondata=e}return e.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,i=new Re(t+e.length);i.set(this.p),i.set(e,t),this.p=i},e.prototype.c=function(e){this.d=this.s.i=e||!1;var e=this.s.b,t=Vs(this.p,this.o,this.s);this.ondata(Ot(t,e,this.s.b),this.d),this.o=Ot(t,this.s.b-32768),this.s.b=this.o.length,this.p=Ot(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}(),Eo=function(e){this.ondata=e,ls([rs,function(){return[kt,Et]}],this,0,function(){var e=new Et;onmessage=kt(e)},7)};function Ao(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return os(e,t,[rs],function(e){return $n(cs(e.data[0],yo(e.data[1])))},1,i)}function cs(e,t){return Vs(e,t)}var Pr=function(){function e(e,t){this.c=ss(),this.l=0,this.v=1,un.call(this,e,t)}return e.prototype.push=function(e,t){un.prototype.push.call(this,e,t)},e.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;e=ui(e,this.o,this.v&&bo(this.o),t&&8,!t);this.v&&(Mo(e,this.o),this.v=0),t&&(ke(e,e.length-8,this.c.d()),ke(e,e.length-4,this.l)),this.ondata(e,t)},e}(),_c=function(e,t){ls([as,Dh,function(){return[kt,un,Pr]}],this,To.call(this,e,t),function(e){e=new Pr(e.data);onmessage=kt(e)},8)};function xc(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return os(e,t,[as,Dh,function(){return[Dr]}],function(e){return $n(Dr(e.data[0],e.data[1]))},2,i)}function Dr(e,t){t=t||{};var i=ss(),r=e.length,e=(i.p(e),ui(e,t,bo(t),8)),n=e.length;return Mo(e,t),ke(e,n-8,i.d()),ke(e,n-4,r),e}var Ir=function(){function e(e){this.v=1,Et.call(this,e)}return e.prototype.push=function(e,t){if(Et.prototype.e.call(this,e),this.v){e=3<this.p.length?wo(this.p):4;if(e>=this.p.length&&!t)return;this.p=this.p.subarray(e),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}Et.prototype.c.call(this,t)},e}(),Bh=function(e){this.ondata=e,ls([rs,Ih,function(){return[kt,Et,Ir]}],this,0,function(){var e=new Ir;onmessage=kt(e)},9)};function Vh(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return os(e,t,[rs,Ih,function(){return[Fr]}],function(e){return $n(Fr(e.data[0]))},3,i)}function Fr(e,t){return Vs(e.subarray(wo(e),-8),t||new Re(zh(e)))}var Ja=function(){function e(e,t){this.c=xo(),this.v=1,un.call(this,e,t)}return e.prototype.push=function(e,t){un.prototype.push.call(this,e,t)},e.prototype.p=function(e,t){this.c.p(e);e=ui(e,this.o,this.v&&2,t&&4,!t);this.v&&(So(e,this.o),this.v=0),t&&ke(e,e.length-4,this.c.d()),this.ondata(e,t)},e}(),jv=function(e,t){ls([as,Fh,function(){return[kt,un,Ja]}],this,To.call(this,e,t),function(e){e=new Ja(e.data);onmessage=kt(e)},10)};function Xv(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return os(e,t,[as,Fh,function(){return[Qa]}],function(e){return $n(Qa(e.data[0],e.data[1]))},4,i)}function Qa(e,t){t=t||{};var i=xo(),e=(i.p(e),ui(e,t,2,4));return So(e,t),ke(e,e.length-4,i.d()),e}var Nr=function(){function e(e){this.v=1,Et.call(this,e)}return e.prototype.push=function(e,t){if(Et.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}Et.prototype.c.call(this,t)},e}(),Gh=function(e){this.ondata=e,ls([rs,Nh,function(){return[kt,Et,Nr]}],this,0,function(){var e=new Nr;onmessage=kt(e)},11)};function Hh(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return os(e,t,[rs,Nh,function(){return[Is]}],function(e){return $n(Is(e.data[0],yo(e.data[1])))},5,i)}function Is(e,t){return Vs((Oh(e),e.subarray(2,-4)),t)}var Wh=function(){function e(e){this.G=Ir,this.I=Et,this.Z=Nr,this.ondata=e}return e.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";var i,r;this.s?this.s.push(e,t):(this.p&&this.p.length?((i=new Re(this.p.length+e.length)).set(this.p),i.set(e,this.p.length)):this.p=e,2<this.p.length&&((r=this).s=new(31==this.p[0]&&139==this.p[1]&&8==this.p[2]?this.G:8!=(15&this.p[0])||7<this.p[0]>>4||(this.p[0]<<8|this.p[1])%31?this.I:this.Z)(function(){r.ondata.apply(r,arguments)}),this.s.push(this.p,t),this.p=null))},e}(),qv=function(){function e(e){this.G=Bh,this.I=Eo,this.Z=Gh,this.ondata=e}return e.prototype.push=function(e,t){Wh.prototype.push.call(this,e,t)},e}();function $v(e,t,i){if(i||(i=t,t={}),"function"!=typeof i)throw"no callback";return(31==e[0]&&139==e[1]&&8==e[2]?Vh:8!=(15&e[0])||7<e[0]>>4||(e[0]<<8|e[1])%31?Ao:Hh)(e,t,i)}function Yv(e,t){return(31==e[0]&&139==e[1]&&8==e[2]?Fr:8!=(15&e[0])||7<e[0]>>4||(e[0]<<8|e[1])%31?cs:Is)(e,t)}var Co=function(e,t,i,r){for(var n in e){var a=e[n],n=t+n;a instanceof Re?i[n]=[a,r]:Array.isArray(a)?i[n]=[a[0],Gs(r,a[1])]:Co(a,n+"/",i,r)}},yc="undefined"!=typeof TextEncoder&&new TextEncoder,eo="undefined"!=typeof TextDecoder&&new TextDecoder,jh=0;try{eo.decode(Sn,{stream:!0}),jh=1}catch{}var Xh=function(e){for(var t="",i=0;;){var r=e[i++],n=(127<r)+(223<r)+(239<r);if(i+n>e.length)return[t,Ot(e,i-1)];n?3==n?(r=((15&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536,t+=String.fromCharCode(55296|r>>10,56320|1023&r)):t+=1&n?String.fromCharCode((31&r)<<6|63&e[i++]):String.fromCharCode((15&r)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(r)}},Kv=function(){function e(e){this.ondata=e,jh?this.t=new TextDecoder:this.p=Sn}return e.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}}else{if(!this.p)throw"stream finished";var i=new Re(this.p.length+e.length),e=(i.set(this.p),i.set(e,this.p.length),Xh(i)),i=e[0],e=e[1];if(t){if(e.length)throw"invalid utf-8 data";this.p=null}else this.p=e;this.ondata(i,t)}},e}(),Zv=function(){function e(e){this.ondata=e}return e.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Wn(e),this.d=t||!1)},e}();function Wn(e,t){if(t){for(var i=new Re(e.length),r=0;r<e.length;++r)i[r]=e.charCodeAt(r);return i}if(yc)return yc.encode(e);function n(e){s[o++]=e}for(var a=e.length,s=new Re(e.length+(e.length>>1)),o=0,r=0;r<a;++r){o+5>s.length&&((l=new Re(o+8+(a-r<<1))).set(s),s=l);var l=e.charCodeAt(r);l<128||t?n(l):(l<2048?n(192|l>>6):(55295<l&&l<57344?(n(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++r))>>18),n(128|l>>12&63)):n(224|l>>12),n(128|l>>6&63)),n(128|63&l))}return Ot(s,0,o)}function Lo(e,t){if(t){for(var i="",r=0;r<e.length;r+=16384)i+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return i}if(eo)return eo.decode(e);var t=Xh(e),n=t[0];if(t[1].length)throw"invalid utf-8 data";return n}var qh=function(e){return 1==e?3:e<6?2:9==e?1:0},$h=function(e,t){return t+30+yt(e,t+26)+yt(e,t+28)},Yh=function(e,t,i){var r=yt(e,t+28),n=Lo(e.subarray(t+46,t+46+r),!(2048&yt(e,t+8))),r=t+46+r,a=Je(e,t+20),i=i&&4294967295==a?Kh(e,r):[a,Je(e,t+24),Je(e,t+42)],a=i[0],s=i[1],i=i[2];return[yt(e,t+10),a,s,n,r+yt(e,t+30)+yt(e,t+32),i]},Kh=function(e,t){for(;1!=yt(e,t);t+=4+yt(e,t+2));return[La(e,t+12),La(e,t+4),La(e,t+20)]},Bn=function(e){var t=0;if(e)for(var i in e){i=e[i].length;if(65535<i)throw"extra field too long";t+=i+4}return t},Yi=function(e,t,i,r,n,a,s,o){var l=r.length,h=i.extra,c=o&&o.length,u=Bn(h),n=(ke(e,t,null!=s?33639248:67324752),t+=4,null!=s&&(e[t++]=20,e[t++]=i.os),e[t]=20,t+=2,e[t++]=i.flag<<1|(null==a&&8),e[t++]=n&&8,e[t++]=255&i.compression,e[t++]=i.compression>>8,new Date(null==i.mtime?Date.now():i.mtime)),d=n.getFullYear()-1980;if(d<0||119<d)throw"date not in range 1980-2099";if(ke(e,t,d<<25|n.getMonth()+1<<21|n.getDate()<<16|n.getHours()<<11|n.getMinutes()<<5|n.getSeconds()>>>1),t+=4,null!=a&&(ke(e,t,i.crc),ke(e,t+4,a),ke(e,t+8,i.size)),ke(e,t+12,l),ke(e,t+14,u),t+=16,null!=s&&(ke(e,t,c),ke(e,t+6,i.attrs),ke(e,t+10,s),t+=14),e.set(r,t),t+=l,u)for(var p in h){var m=h[p],f=m.length;ke(e,t,+p),ke(e,t+2,f),e.set(m,t+4),t+=4+f}return c&&(e.set(o,t),t+=c),t},Ro=function(e,t,i,r,n){ke(e,t,101010256),ke(e,t+8,i),ke(e,t+10,i),ke(e,t+12,r),ke(e,t+16,n)},Fs=function(){function e(e){this.filename=e,this.c=ss(),this.size=0,this.compression=0}return e.prototype.process=function(e,t){this.ondata(null,e,t)},e.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},e}(),Jv=function(){function e(e,t){var i=this;t=t||{},Fs.call(this,e),this.d=new un(t,function(e,t){i.ondata(null,e,t)}),this.compression=8,this.flag=qh(t.level)}return e.prototype.process=function(e,t){try{this.d.push(e,t)}catch(e){this.ondata(e,null,t)}},e.prototype.push=function(e,t){Fs.prototype.push.call(this,e,t)},e}(),Qv=function(){function e(e,t){var r=this;t=t||{},Fs.call(this,e),this.d=new kh(t,function(e,t,i){r.ondata(e,t,i)}),this.compression=8,this.flag=qh(t.level),this.terminate=this.d.terminate}return e.prototype.process=function(e,t){this.d.push(e,t)},e.prototype.push=function(e,t){Fs.prototype.push.call(this,e,t)},e}(),e_=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(r){var n=this;if(2&this.d)throw"stream finished";var e=Wn(r.filename),t=e.length,i=r.comment,a=i&&Wn(i),i=t!=r.filename.length||a&&i.length!=a.length,s=t+Bn(r.extra)+30;if(65535<t)throw"filename too long";function o(){for(var e=0,t=l;e<t.length;e++){var i=t[e];n.ondata(null,i,!1)}l=[]}var t=new Re(s),l=(Yi(t,0,r,e,i),[t]),h=this.d,c=(this.d=0,this.u.length),u=Gs(r,{f:e,u:i,o:a,t:function(){r.terminate&&r.terminate()},r:function(){var e;o(),h&&((e=n.u[c+1])?e.r():n.d=1),h=1}}),d=0;r.ondata=function(e,t,i){e?(n.ondata(e,t,i),n.terminate()):(d+=t.length,l.push(t),i?(e=new Re(16),ke(e,0,134695760),ke(e,4,r.crc),ke(e,8,d),ke(e,12,r.size),l.push(e),u.c=d,u.b=s+d+16,u.crc=r.crc,u.size=r.size,h&&u.r(),h=1):h&&o())},this.u.push(u)},e.prototype.end=function(){var e=this;if(2&this.d)throw 1&this.d?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){1&e.d&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var e=0,t=0,i=0,r=0,n=this.u;r<n.length;r++)i+=46+(l=n[r]).f.length+Bn(l.extra)+(l.o?l.o.length:0);for(var a=new Re(i+22),s=0,o=this.u;s<o.length;s++){var l=o[s];Yi(a,e,l,l.f,l.u,l.c,t,l.o),e+=46+l.f.length+Bn(l.extra)+(l.o?l.o.length:0),t+=l.b}Ro(a,e,this.u.length,i,t),this.ondata(null,a,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++)t[e].t();this.d=2},e}();function t_(e,t,f){if(f||(f=t,t={}),"function"!=typeof f)throw"no callback";function g(){for(var e=0;e<S.length;++e)S[e]()}function v(){for(var e=new Re(w+22),t=b,i=w-b,r=w=0;r<l;++r){var n=M[r];try{var a=n.c.length,s=(Yi(e,w,n,n.f,n.u,a),30+n.f.length+Bn(n.extra)),o=w+s;e.set(n.c,o),Yi(e,b,n,n.f,n.u,a,w,n.m),b+=16+s+(n.m?n.m.length:0),w=o+a}catch(e){return f(e,null)}}Ro(e,b,M.length,i,t),f(null,e)}var x={},_=(Co(e,"",x,t),Object.keys(x)),y=_.length,b=0,w=0,l=y,M=new Array(y),S=[];y||v();for(var i=0;i<l;++i)!function(i){function t(e,t){e?(g(),f(e,null)):(e=t.length,M[i]=Gs(a,{size:o,crc:s.d(),c:t,f:l,m:u,u:h!=r.length||u&&c.length!=d,compression:m}),b+=30+h+p+e,w+=76+2*(h+p)+(d||0)+e,--y||v())}var r=_[i],e=x[r],n=e[0],a=e[1],s=ss(),o=n.length,l=(s.p(n),Wn(r)),h=l.length,c=a.comment,u=c&&Wn(c),d=u&&u.length,p=Bn(a.extra),m=0==a.level?0:8;if(65535<h&&t("filename too long",null),m)if(o<16e4)try{t(null,Hs(n,a))}catch(e){t(e,null)}else S.push(Uh(n,a,t));else t(null,n)}(i);return g}function n_(e,t){var i,r={},n=[],a=(Co(e,"",r,t=t||{}),0),s=0;for(i in r){var o=r[i],l=o[0],o=o[1],h=0==o.level?0:8,c=(y=Wn(i)).length,u=o.comment,d=u&&Wn(u),p=d&&d.length,m=Bn(o.extra);if(65535<c)throw"filename too long";var f=h?Hs(l,o):l,g=f.length,v=ss();v.p(l),n.push(Gs(o,{size:l.length,crc:v.d(),c:f,f:y,m:d,u:c!=i.length||d&&u.length!=p,o:a,compression:h})),a+=30+c+m+g,s+=76+2*(c+m)+(p||0)+g}for(var x=new Re(s+22),e=a,t=s-a,_=0;_<n.length;++_){Yi(x,(y=n[_]).o,y,y.f,y.u,y.c.length);var y,b=30+y.f.length+Bn(y.extra);x.set(y.c,y.o+b),Yi(x,a,y,y.f,y.u,y.c.length,y.o,y.m),a+=16+b+(y.m?y.m.length:0)}return Ro(x,a,n.length,t,e),x}var Zh=function(){function e(){}return e.prototype.push=function(e,t){this.ondata(null,e,t)},e.compression=0,e}(),i_=function(){function e(){var i=this;this.i=new Et(function(e,t){i.ondata(null,e,t)})}return e.prototype.push=function(t,i){try{this.i.push(t,i)}catch(e){this.ondata(e,t,i)}},e.compression=8,e}(),s_=function(){function e(e,t){var r=this;t<32e4?this.i=new Et(function(e,t){r.ondata(null,e,t)}):(this.i=new Eo(function(e,t,i){r.ondata(e,t,i)}),this.terminate=this.i.terminate)}return e.prototype.push=function(e,t){this.i.terminate&&(e=Ot(e,0)),this.i.push(e,t)},e.compression=8,e}(),r_=function(){function e(e){this.onfile=e,this.k=[],this.o={0:Zh},this.p=Sn}return e.prototype.push=function(e,t){var d=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(0<this.c){var i=Math.min(this.c,e.length),r=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(r,!this.c):this.k[0].push(r),(e=e.subarray(i)).length)return this.push(e,t)}else{var p=0,m=0,f=void 0,g=void 0;this.p.length?e.length?((g=new Re(this.p.length+e.length)).set(this.p),g.set(e,this.p.length)):g=this.p:g=e;for(var v=g.length,x=this.c,r=x&&this.d,_=this;m<v-4;++m)if("break"===function(){var r,e,t,i,n,a,s,o,l,h,c,u=Je(g,m);return 67324752==u?(p=1,f=m,_.d=null,_.c=0,t=yt(g,m+6),r=yt(g,m+8),e=2048&t,t=8&t,i=yt(g,m+26),n=yt(g,m+28),m+30+i+n<v&&(_.k.unshift(a=[]),p=2,s=Je(g,m+18),o=Je(g,m+22),l=Lo(g.subarray(m+30,m+=30+i),!e),4294967295==s?(i=t?[-2]:Kh(g,m),s=i[0],o=i[1]):t&&(s=-1),m+=n,_.c=s,c={name:l,compression:r,start:function(){if(!c.ondata)throw"no callback";if(s){var e=d.o[r];if(!e)throw"unknown compression type "+r;(h=s<0?new e(l):new e(l,s,o)).ondata=function(e,t,i){c.ondata(e,t,i)};for(var t=0,i=a;t<i.length;t++)h.push(i[t],!1);d.k[0]==a&&d.c?d.d=h:h.push(Sn,!0)}else c.ondata(null,Sn,!0)},terminate:function(){h&&h.terminate&&h.terminate()}},0<=s&&(c.size=s,c.originalSize=o),_.onfile(c)),"break"):x?134695760==u?(f=m+=12+(-2==x&&8),p=3,_.c=0,"break"):33639248==u?(f=m-=4,p=3,_.c=0,"break"):void 0:void 0}())break;if(this.p=Sn,x<0&&(i=p?g.subarray(0,f-12-(-2==x&&8)-(134695760==Je(g,f-16)&&4)):g.subarray(0,m),r?r.push(i,!!p):this.k[+(2==p)].push(i)),2&p)return this.push(g.subarray(m),t);this.p=g.subarray(m)}if(t){if(this.c)throw"invalid zip file";this.p=null}},e.prototype.register=function(e){this.o[e.compression]=e},e}();function a_(o,l){if("function"!=typeof l)throw"no callback";function h(){for(var e=0;e<c.length;++e)c[e]()}for(var c=[],u={},e=o.length-22;101010256!=Je(o,e);--e)if(!e||65558<o.length-e)return void l("invalid zip file",null);var d=yt(o,e+8),t=(d||l(null,{}),d),p=Je(o,e+16),m=4294967295==p;if(m){if(e=Je(o,e-12),101075792!=Je(o,e))return void l("invalid zip file",null);t=d=Je(o,e+32),p=Je(o,e+48)}for(var i=0;i<t;++i)!function(){function t(e,t){e?(h(),l(e,null)):(u[a]=t,--d||l(null,u))}var e=Yh(o,p,m),i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],e=e[5],e=$h(o,e);p=s;if(i)if(8==i){s=o.subarray(e,e+r);if(r<32e4)try{t(null,cs(s,new Re(n)))}catch(e){t(e,null)}else c.push(Ao(s,{size:n},t))}else t("unknown compression type "+i,null);else t(null,Ot(o,e,e+r))}();return h}function o_(e){for(var t={},i=e.length-22;101010256!=Je(e,i);--i)if(!i||65558<e.length-i)throw"invalid zip file";var r=yt(e,i+8);if(!r)return{};var n=4294967295==(d=Je(e,i+16));if(n){if(i=Je(e,i-12),101075792!=Je(e,i))throw"invalid zip file";r=Je(e,i+32),d=Je(e,i+48)}for(var a=0;a<r;++a){var s=Yh(e,d,n),o=s[0],l=s[1],h=s[2],c=s[3],u=s[4],s=s[5],s=$h(e,s),d=u;if(o){if(8!=o)throw"unknown compression type "+o;t[c]=cs(e.subarray(s,s+l),new Re(h))}else t[c]=Ot(e,s,s+l)}return t}var l_=Object.freeze(Object.defineProperty({__proto__:null,Deflate:un,AsyncDeflate:kh,deflate:Uh,deflateSync:Hs,Inflate:Et,AsyncInflate:Eo,inflate:Ao,inflateSync:cs,Gzip:Pr,AsyncGzip:_c,gzip:xc,gzipSync:Dr,Gunzip:Ir,AsyncGunzip:Bh,gunzip:Vh,gunzipSync:Fr,Zlib:Ja,AsyncZlib:jv,zlib:Xv,zlibSync:Qa,Unzlib:Nr,AsyncUnzlib:Gh,unzlib:Hh,unzlibSync:Is,compress:xc,AsyncCompress:_c,compressSync:Dr,Compress:Pr,Decompress:Wh,AsyncDecompress:qv,decompress:$v,decompressSync:Yv,DecodeUTF8:Kv,EncodeUTF8:Zv,strToU8:Wn,strFromU8:Lo,ZipPassThrough:Fs,ZipDeflate:Jv,AsyncZipDeflate:Qv,Zip:e_,zip:t_,zipSync:n_,UnzipPassThrough:Zh,UnzipInflate:i_,AsyncUnzipInflate:s_,Unzip:r_,unzip:a_,unzipSync:o_},Symbol.toStringTag,{value:"Module"}));function Jh(e,t,i){var r=i.length-e-1;if(t>=i[r])return r-1;if(t<=i[e])return e;let n=e,a=r,s=Math.floor((n+a)/2);for(;t<i[s]||t>=i[s+1];)t<i[s]?a=s:n=s,s=Math.floor((n+a)/2);return s}function c_(e,r,t,n){var a=[],s=[],o=[];for(let i=a[0]=1;i<=t;++i){s[i]=r-n[e+1-i],o[i]=n[e+i]-r;let t=0;for(let e=0;e<i;++e){var l=o[e+1],h=s[i-e],c=a[e]/(l+h);a[e]=t+l*c,t=h*c}a[i]=t}return a}function h_(t,e,i,r){var n=Jh(t,r,e),a=c_(n,r,t,e),s=new Ue(0,0,0,0);for(let e=0;e<=t;++e){var o=i[n-t+e],l=a[e],h=o.w*l;s.x+=o.x*h,s.y+=o.y*h,s.z+=o.z*h,s.w+=o.w*l}return s}function u_(e,r,a,s,n){var t=[];for(let e=0;e<=a;++e)t[e]=0;var o=[];for(let e=0;e<=s;++e)o[e]=t.slice(0);var l=[];for(let e=0;e<=a;++e)l[e]=t.slice(0);l[0][0]=1;var h=t.slice(0),c=t.slice(0);for(let i=1;i<=a;++i){h[i]=r-n[e+1-i],c[i]=n[e+i]-r;let t=0;for(let e=0;e<i;++e){var u=c[e+1],d=h[i-e],p=(l[i][e]=u+d,l[e][i-1]/l[i][e]);l[e][i]=t+u*p,t=d*p}l[i][i]=t}for(let e=0;e<=a;++e)o[0][e]=l[e][a];for(let n=0;n<=a;++n){let i=0,r=1;var m=[];for(let e=0;e<=a;++e)m[e]=t.slice(0);for(let e=m[0][0]=1;e<=s;++e){let t=0;var f=n-e,g=a-e,v=(n>=e&&(m[r][0]=m[i][0]/l[1+g][f],t=m[r][0]*l[f][g]),-1<=f?1:-f),x=n-1<=g?e-1:a-n;for(let e=v;e<=x;++e)m[r][e]=(m[i][e]-m[i][e-1])/l[1+g][f+e],t+=m[r][e]*l[f+e][g];n<=g&&(m[r][e]=-m[i][e-1]/l[1+g][n],t+=m[r][e]*l[n][g]),o[e][n]=t;v=i;i=r,r=v}}let i=a;for(let t=1;t<=s;++t){for(let e=0;e<=a;++e)o[t][e]*=i;i*=a-t}return o}function d_(i,e,t,r,n){var a=n<i?n:i,s=[],o=Jh(i,r,e),l=u_(o,r,i,a,e),h=[];for(let e=0;e<t.length;++e){var c=t[e].clone(),u=c.w;c.x*=u,c.y*=u,c.z*=u,h[e]=c}for(let t=0;t<=a;++t){var d=h[o-i].clone().multiplyScalar(l[t][0]);for(let e=1;e<=i;++e)d.add(h[o-i+e].clone().multiplyScalar(l[t][e]));s[t]=d}for(let e=a+1;e<=n+1;++e)s[e]=new Ue(0,0,0);return s}function f_(t,i){let r=1;for(let e=2;e<=t;++e)r*=e;let n=1;for(let e=2;e<=i;++e)n*=e;for(let e=2;e<=t-i;++e)n*=e;return r/n}function p_(t){var i=t.length,r=[],n=[];for(let e=0;e<i;++e){var a=t[e];r[e]=new P(a.x,a.y,a.z),n[e]=a.w}var s=[];for(let t=0;t<i;++t){var o=r[t].clone();for(let e=1;e<=t;++e)o.sub(s[t-e].clone().multiplyScalar(f_(t,e)*n[e]));s[t]=o.divideScalar(n[0])}return s}function m_(e,t,i,r,n){return p_(d_(e,t,i,r,n))}class Mc extends _0{constructor(e,t,i,r,n){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=n||this.knots.length-1;for(let e=0;e<i.length;++e){var a=i[e];this.controlPoints[e]=new Ue(a.x,a.y,a.z,a.w)}}getPoint(e,t=new P){e=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),e=h_(this.degree,this.knots,this.controlPoints,e);return 1!==e.w&&e.divideScalar(e.w),t.set(e.x,e.y,e.z)}getTangent(e,t=new P){e=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),e=m_(this.degree,this.knots,this.controlPoints,e,1);return t.copy(e[1]).normalize(),t}}let Ce,Ze,Tt;class g_ extends qn{constructor(e){super(e)}load(t,i,e,r){const n=this,a=""===n.path?on.extractUrlBase(t):n.path,s=new qi(this.manager);s.setPath(n.path),s.setResponseType("arraybuffer"),s.setRequestHeader(n.requestHeader),s.setWithCredentials(n.withCredentials),s.load(t,function(e){try{i(n.parse(e,a))}catch(e){r?r(e):console.error(e),n.manager.itemError(t)}},e,r)}parse(e,t){if(w_(e))Ce=(new M_).parse(e);else{e=nu(e);if(!b_(e))throw new Error("THREE.FBXLoader: Unknown format.");if(bc(e)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+bc(e));Ce=(new y_).parse(e)}e=new uh(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new v_(e,this.manager).parse(Ce)}}class v_{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ze=this.parseConnections();var e=this.parseImages(),e=this.parseTextures(e),e=this.parseMaterials(e),t=this.parseDeformers(),i=(new __).parse(t);return this.parseScene(t,i,e),Tt}parseConnections(){const n=new Map;return"Connections"in Ce&&Ce.Connections.connections.forEach(function(e){var t=e[0],i=e[1],e=e[2],r=(n.has(t)||n.set(t,{parents:[],children:[]}),{ID:i,relationship:e}),r=(n.get(t).parents.push(r),n.has(i)||n.set(i,{parents:[],children:[]}),{ID:t,relationship:e});n.get(i).children.push(r)}),n}parseImages(){var e={},t={};if("Video"in Ce.Objects){var i=Ce.Objects.Video;for(const o in i){var r,n,a=i[o];e[parseInt(o)]=a.RelativeFilename||a.Filename,"Content"in a&&(n=a.Content instanceof ArrayBuffer&&0<a.Content.byteLength,r="string"==typeof a.Content&&""!==a.Content,n||r)&&(n=this.parseImage(i[o]),t[a.RelativeFilename||a.Filename]=n)}}for(const l in e){var s=e[l];e[l]=void 0!==t[s]?t[s]:e[l].split("\\").pop()}return e}parseImage(e){var t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let n;switch(r){case"bmp":n="image/bmp";break;case"jpg":case"jpeg":n="image/jpeg";break;case"png":n="image/png";break;case"tif":n="image/tiff";break;case"tga":null===this.manager.getHandler(".tga")&&console.warn("FBXLoader: TGA loader not found, skipping ",i),n="image/tga";break;default:return void console.warn('FBXLoader: Image type "'+r+'" is not supported.')}return"string"==typeof t?"data:"+n+";base64,"+t:(e=new Uint8Array(t),window.URL.createObjectURL(new Blob([e],{type:n})))}parseTextures(e){var t=new Map;if("Texture"in Ce.Objects){var i=Ce.Objects.Texture;for(const n in i){var r=this.parseTexture(i[n],e);t.set(parseInt(n),r)}}return t}parseTexture(e,t){var t=this.loadTexture(e,t),i=(t.ID=e.id,t.name=e.attrName,e.WrapModeU),r=e.WrapModeV,i=void 0!==i?i.value:0,r=void 0!==r?r.value:0;return t.wrapS=0===i?hn:gt,t.wrapT=0===r?hn:gt,"Scaling"in e&&(i=e.Scaling.value,t.repeat.x=i[0],t.repeat.y=i[1]),"Translation"in e&&(r=e.Translation.value,t.offset.x=r[0],t.offset.y=r[1]),t}loadTexture(e,t){let i;var r=this.textureLoader.path,n=Ze.get(e.id).children;void 0!==n&&0<n.length&&void 0!==t[n[0].ID]&&(0===(i=t[n[0].ID]).indexOf("blob:")||0===i.indexOf("data:"))&&this.textureLoader.setPath(void 0);let a;t=e.FileName.slice(-3).toLowerCase();return a="tga"===t?null===(n=this.manager.getHandler(".tga"))?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),new nt):(n.setPath(this.textureLoader.path),n.load(i)):"psd"===t?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),new nt):this.textureLoader.load(i),this.textureLoader.setPath(r),a}parseMaterials(e){var t=new Map;if("Material"in Ce.Objects){var i=Ce.Objects.Material;for(const n in i){var r=this.parseMaterial(i[n],e);null!==r&&t.set(parseInt(n),r)}}return t}parseMaterial(e,t){var i=e.id,r=e.attrName;let n=e.ShadingModel;if("object"==typeof n&&(n=n.value),!Ze.has(i))return null;e=this.parseParameters(e,t,i);let a;switch(n.toLowerCase()){case"phong":a=new xr;break;case"lambert":a=new lh;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',n),a=new xr}return a.setValues(e),a.name=r,a}parseParameters(e,i,t){const r={},n=(e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=(new de).fromArray(e.Diffuse.value):!e.DiffuseColor||"Color"!==e.DiffuseColor.type&&"ColorRGB"!==e.DiffuseColor.type||(r.color=(new de).fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=(new de).fromArray(e.Emissive.value):!e.EmissiveColor||"Color"!==e.EmissiveColor.type&&"ColorRGB"!==e.EmissiveColor.type||(r.emissive=(new de).fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=(new de).fromArray(e.Specular.value):e.SpecularColor&&"Color"===e.SpecularColor.type&&(r.specular=(new de).fromArray(e.SpecularColor.value)),this);return Ze.get(t).children.forEach(function(e){var t=e.relationship;switch(t){case"Bump":r.bumpMap=n.getTexture(i,e.ID);break;case"Maya|TEX_ao_map":r.aoMap=n.getTexture(i,e.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=n.getTexture(i,e.ID),void 0!==r.map&&(r.map.encoding=Pe);break;case"DisplacementColor":r.displacementMap=n.getTexture(i,e.ID);break;case"EmissiveColor":r.emissiveMap=n.getTexture(i,e.ID),void 0!==r.emissiveMap&&(r.emissiveMap.encoding=Pe);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=n.getTexture(i,e.ID);break;case"ReflectionColor":r.envMap=n.getTexture(i,e.ID),void 0!==r.envMap&&(r.envMap.mapping=Tr,r.envMap.encoding=Pe);break;case"SpecularColor":r.specularMap=n.getTexture(i,e.ID),void 0!==r.specularMap&&(r.specularMap.encoding=Pe);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=n.getTexture(i,e.ID),r.transparent=!0;break;default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",t)}}),r}getTexture(e,t){return"LayeredTexture"in Ce.Objects&&t in Ce.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ze.get(t).children[0].ID),e.get(t)}parseDeformers(){var e={},t={};if("Deformer"in Ce.Objects){var i=Ce.Objects.Deformer;for(const s in i){var r,n=i[s],a=Ze.get(parseInt(s));"Skin"===n.attrType?((r=this.parseSkeleton(a,i)).ID=s,1<a.parents.length&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),r.geometryID=a.parents[0].ID,e[s]=r):"BlendShape"===n.attrType&&((r={id:s}).rawTargets=this.parseMorphTargets(a,i),r.id=s,1<a.parents.length&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=r)}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,i){const r=[];return e.children.forEach(function(e){var t=i[e.ID];"Cluster"===t.attrType&&(e={ID:e.ID,indices:[],weights:[],transformLink:(new pe).fromArray(t.TransformLink.a)},"Indexes"in t&&(e.indices=t.Indexes.a,e.weights=t.Weights.a),r.push(e))}),{rawBones:r,bones:[]}}parseMorphTargets(t,i){var r=[];for(let e=0;e<t.children.length;e++){var n=t.children[e],a=i[n.ID],s={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if("BlendShapeChannel"!==a.attrType)return;s.geoID=Ze.get(parseInt(n.ID)).children.filter(function(e){return void 0===e.relationship})[0].ID,r.push(s)}return r}parseScene(e,t,i){Tt=new bn;const r=this.parseModels(e.skeletons,t,i),n=Ce.Objects.Model,a=this;r.forEach(function(t){var e=n[t.ID];a.setLookAtProperties(t,e),Ze.get(t.ID).parents.forEach(function(e){e=r.get(e.ID);void 0!==e&&e.add(t)}),null===t.parent&&Tt.add(t)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),Tt.traverse(function(e){var t;e.userData.transformData&&(e.parent&&(e.userData.transformData.parentMatrix=e.parent.matrix,e.userData.transformData.parentMatrixWorld=e.parent.matrixWorld),t=eu(e.userData.transformData),e.applyMatrix4(t),e.updateWorldMatrix())});i=(new x_).parse();1===Tt.children.length&&Tt.children[0].isGroup&&(Tt.children[0].animations=i,Tt=Tt.children[0]),Tt.animations=i}parseModels(t,i,r){var n=new Map,a=Ce.Objects.Model;for(const h in a){var s=parseInt(h),o=a[h],l=Ze.get(s);let e=this.buildSkeleton(l,t,s,o.attrName);if(!e){switch(o.attrType){case"Camera":e=this.createCamera(l);break;case"Light":e=this.createLight(l);break;case"Mesh":e=this.createMesh(l,i,r);break;case"NurbsCurve":e=this.createCurve(l,i);break;case"LimbNode":case"Root":e=new Cr;break;default:e=new bn}e.name=o.attrName?Ne.sanitizeNodeName(o.attrName):"",e.ID=s}this.getTransformData(e,o),n.set(s,e)}return n}buildSkeleton(e,t,a,s){let o=null;return e.parents.forEach(function(r){for(const e in t){const n=t[e];n.rawBones.forEach(function(e,t){var i;e.ID===r.ID&&(i=o,(o=new Cr).matrixWorld.copy(e.transformLink),o.name=s?Ne.sanitizeNodeName(s):"",o.ID=a,n.bones[t]=o,null!==i)&&o.add(i)})}}),o}createCamera(e){let s,o;if(e.children.forEach(function(e){e=Ce.Objects.NodeAttribute[e.ID];void 0!==e&&(o=e)}),void 0===o)s=new Ye;else{let e=0,t=(void 0!==o.CameraProjectionType&&1===o.CameraProjectionType.value&&(e=1),1),i=(void 0!==o.NearPlane&&(t=o.NearPlane.value/1e3),1e3),r=(void 0!==o.FarPlane&&(i=o.FarPlane.value/1e3),window.innerWidth),n=window.innerHeight;void 0!==o.AspectWidth&&void 0!==o.AspectHeight&&(r=o.AspectWidth.value,n=o.AspectHeight.value);var l=r/n;let a=45;void 0!==o.FieldOfView&&(a=o.FieldOfView.value);var h=o.FocalLength?o.FocalLength.value:null;switch(e){case 0:s=new mt(a,l,t,i),null!==h&&s.setFocalLength(h);break;case 1:s=new zs(-r/2,r/2,n/2,-n/2,t,i);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+e+"."),s=new Ye}}return s}createLight(e){let s,o;if(e.children.forEach(function(e){e=Ce.Objects.NodeAttribute[e.ID];void 0!==e&&(o=e)}),void 0===o)s=new Ye;else{let i,r=(i=void 0===o.LightType?0:o.LightType.value,16777215),n=(void 0!==o.Color&&(r=(new de).fromArray(o.Color.value)),void 0===o.Intensity?1:o.Intensity.value/100),a=(void 0!==o.CastLightOnObject&&0===o.CastLightOnObject.value&&(n=0),0);void 0!==o.FarAttenuationEnd&&(a=void 0!==o.EnableFarAttenuation&&0===o.EnableFarAttenuation.value?0:o.FarAttenuationEnd.value);switch(i){case 0:s=new Ha(r,n,a,1);break;case 1:s=new fh(r,n);break;case 2:let e=Math.PI/3,t=(void 0!==o.InnerAngle&&(e=jt.degToRad(o.InnerAngle.value)),0);void 0!==o.OuterAngle&&(t=jt.degToRad(o.OuterAngle.value),t=Math.max(t,1)),s=new dh(r,n,a,e,t,1);break;default:console.warn("THREE.FBXLoader: Unknown light type "+o.LightType.value+", defaulting to a PointLight."),s=new Ha(r,n)}void 0!==o.CastShadows&&1===o.CastShadows.value&&(s.castShadow=!0)}return s}createMesh(e,t,i){let r,n=null,a=null;const s=[];return e.children.forEach(function(e){t.has(e.ID)&&(n=t.get(e.ID)),i.has(e.ID)&&s.push(i.get(e.ID))}),1<s.length?a=s:0<s.length?a=s[0]:(a=new xr({color:13421772}),s.push(a)),"color"in n.attributes&&s.forEach(function(e){e.vertexColors=!0}),n.FBX_Deformer?(r=new ah(n,a)).normalizeSkinWeights():r=new Qe(n,a),r}createCurve(e,i){var e=e.children.reduce(function(e,t){return e=i.has(t.ID)?i.get(t.ID):e},null),t=new Os({color:3342591,linewidth:1});return new Br(e,t)}getTransformData(e,t){var i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=tu(t.RotationOrder.value):i.eulerOrder="ZYX","Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(t,e){"LookAtProperty"in e&&Ze.get(t.ID).children.forEach(function(e){"LookAtProperty"===e.relationship&&"Lcl_Translation"in(e=Ce.Objects.Model[e.ID])&&(e=e.Lcl_Translation.value,void 0!==t.target?(t.target.position.fromArray(e),Tt.add(t.target)):t.lookAt((new P).fromArray(e)))})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const n in e){const a=e[n];Ze.get(parseInt(a.ID)).parents.forEach(function(e){t.has(e.ID)&&(e=e.ID,Ze.get(e).parents.forEach(function(e){i.has(e.ID)&&i.get(e.ID).bind(new Ur(a.bones),r[e.ID])}))})}}parsePoseNodes(){const t={};if("Pose"in Ce.Objects){var e,i=Ce.Objects.Pose;for(const r in i)"BindPose"===i[r].attrType&&0<i[r].NbPoseNodes&&(e=i[r].PoseNode,Array.isArray(e)?e.forEach(function(e){t[e.Node]=(new pe).fromArray(e.Matrix.a)}):t[e.Node]=(new pe).fromArray(e.Matrix.a))}return t}createAmbientLight(){var e,t,i;"GlobalSettings"in Ce&&"AmbientColor"in Ce.GlobalSettings&&(i=(t=Ce.GlobalSettings.AmbientColor.value)[0],e=t[1],t=t[2],0===i&&0===e&&0===t||(i=new de(i,e,t),Tt.add(new k0(i,1))))}}class __{parse(e){var t=new Map;if("Geometry"in Ce.Objects){var i=Ce.Objects.Geometry;for(const n in i){var r=Ze.get(parseInt(n)),r=this.parseGeometry(r,i[n],e);t.set(parseInt(n),r)}}return t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,n=[],a=e.parents.map(function(e){return Ce.Objects.Model[e.ID]});var s,o;if(0!==a.length)return s=e.children.reduce(function(e,t){return e=void 0!==r[t.ID]?r[t.ID]:e},null),e.children.forEach(function(e){void 0!==i.morphTargets[e.ID]&&n.push(i.morphTargets[e.ID])}),e={},"RotationOrder"in(o=a[0])&&(e.eulerOrder=tu(o.RotationOrder.value)),"InheritType"in o&&(e.inheritType=parseInt(o.InheritType.value)),"GeometricTranslation"in o&&(e.translation=o.GeometricTranslation.value),"GeometricRotation"in o&&(e.rotation=o.GeometricRotation.value),"GeometricScaling"in o&&(e.scale=o.GeometricScaling.value),o=eu(e),this.genGeometry(t,s,n,o)}genGeometry(e,t,i,r){const n=new ct,a=(e.attrName&&(n.name=e.attrName),this.parseGeoNode(e,t)),s=this.genBuffers(a),o=new Xe(s.vertex,3);var l;if(o.applyMatrix4(r),n.setAttribute("position",o),0<s.colors.length&&n.setAttribute("color",new Xe(s.colors,3)),t&&(n.setAttribute("skinIndex",new so(s.weightsIndices,4)),n.setAttribute("skinWeight",new Xe(s.vertexWeights,4)),n.FBX_Deformer=t),0<s.normal.length&&(t=(new Xt).getNormalMatrix(r),(l=new Xe(s.normal,3)).applyNormalMatrix(t),n.setAttribute("normal",l)),s.uvs.forEach(function(e,t){let i="uv"+(t+1).toString();0===t&&(i="uv"),n.setAttribute(i,new Xe(s.uvs[t],2))}),a.material&&"AllSame"!==a.material.mappingType){let i=s.materialIndex[0],r=0;s.materialIndex.forEach(function(e,t){e!==i&&(n.addGroup(r,t-r,i),i=e,r=t)}),0<n.groups.length&&(l=(t=n.groups[n.groups.length-1]).start+t.count)!==s.materialIndex.length&&n.addGroup(l,s.materialIndex.length-l,i),0===n.groups.length&&n.addGroup(0,s.materialIndex.length,s.materialIndex[0])}return this.addMorphTargets(n,e,i,r),n}parseGeoNode(t,e){const n={};if(n.vertexPositions=void 0!==t.Vertices?t.Vertices.a:[],n.vertexIndices=void 0!==t.PolygonVertexIndex?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let e=0;for(;t.LayerElementUV[e];)t.LayerElementUV[e].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[e])),e++}return n.weightTable={},null!==e&&(n.skeleton=e).rawBones.forEach(function(i,r){i.indices.forEach(function(e,t){void 0===n.weightTable[e]&&(n.weightTable[e]=[]),n.weightTable[e].push({id:r,weight:i.weights[t]})})}),n}genBuffers(h){const c={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let u=0,d=0,p=!1,m=[],f=[],g=[],v=[],x=[],_=[];const y=this;return h.vertexIndices.forEach(function(i,r){let e,t=!1,a=(i<0&&(i^=-1,t=!0),[]),n=[];var s;if(m.push(3*i,3*i+1,3*i+2),h.color&&(s=gr(r,u,i,h.color),g.push(s[0],s[1],s[2])),h.skeleton){if(void 0!==h.weightTable[i]&&h.weightTable[i].forEach(function(e){n.push(e.weight),a.push(e.id)}),4<n.length){p||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),p=!0);const o=[0,0,0,0],l=[0,0,0,0];n.forEach(function(e,t){let r=e,n=a[t];l.forEach(function(e,t,i){r>e&&(i[t]=r,r=e,i=o[t],o[t]=n,n=i)})}),a=o,n=l}for(;n.length<4;)n.push(0),a.push(0);for(let e=0;e<4;++e)x.push(n[e]),_.push(a[e])}h.normal&&(s=gr(r,u,i,h.normal),f.push(s[0],s[1],s[2])),h.material&&"AllSame"!==h.material.mappingType&&(e=gr(r,u,i,h.material)[0]),h.uv&&h.uv.forEach(function(e,t){e=gr(r,u,i,e);void 0===v[t]&&(v[t]=[]),v[t].push(e[0]),v[t].push(e[1])}),d++,t&&(y.genFace(c,h,m,e,f,g,v,x,_,d),u++,d=0,m=[],f=[],g=[],v=[],x=[],_=[])}),c}genFace(r,e,t,n,a,s,o,l,h,c){for(let i=2;i<c;i++)r.vertex.push(e.vertexPositions[t[0]]),r.vertex.push(e.vertexPositions[t[1]]),r.vertex.push(e.vertexPositions[t[2]]),r.vertex.push(e.vertexPositions[t[3*(i-1)]]),r.vertex.push(e.vertexPositions[t[3*(i-1)+1]]),r.vertex.push(e.vertexPositions[t[3*(i-1)+2]]),r.vertex.push(e.vertexPositions[t[3*i]]),r.vertex.push(e.vertexPositions[t[3*i+1]]),r.vertex.push(e.vertexPositions[t[3*i+2]]),e.skeleton&&(r.vertexWeights.push(l[0]),r.vertexWeights.push(l[1]),r.vertexWeights.push(l[2]),r.vertexWeights.push(l[3]),r.vertexWeights.push(l[4*(i-1)]),r.vertexWeights.push(l[4*(i-1)+1]),r.vertexWeights.push(l[4*(i-1)+2]),r.vertexWeights.push(l[4*(i-1)+3]),r.vertexWeights.push(l[4*i]),r.vertexWeights.push(l[4*i+1]),r.vertexWeights.push(l[4*i+2]),r.vertexWeights.push(l[4*i+3]),r.weightsIndices.push(h[0]),r.weightsIndices.push(h[1]),r.weightsIndices.push(h[2]),r.weightsIndices.push(h[3]),r.weightsIndices.push(h[4*(i-1)]),r.weightsIndices.push(h[4*(i-1)+1]),r.weightsIndices.push(h[4*(i-1)+2]),r.weightsIndices.push(h[4*(i-1)+3]),r.weightsIndices.push(h[4*i]),r.weightsIndices.push(h[4*i+1]),r.weightsIndices.push(h[4*i+2]),r.weightsIndices.push(h[4*i+3])),e.color&&(r.colors.push(s[0]),r.colors.push(s[1]),r.colors.push(s[2]),r.colors.push(s[3*(i-1)]),r.colors.push(s[3*(i-1)+1]),r.colors.push(s[3*(i-1)+2]),r.colors.push(s[3*i]),r.colors.push(s[3*i+1]),r.colors.push(s[3*i+2])),e.material&&"AllSame"!==e.material.mappingType&&(r.materialIndex.push(n),r.materialIndex.push(n),r.materialIndex.push(n)),e.normal&&(r.normal.push(a[0]),r.normal.push(a[1]),r.normal.push(a[2]),r.normal.push(a[3*(i-1)]),r.normal.push(a[3*(i-1)+1]),r.normal.push(a[3*(i-1)+2]),r.normal.push(a[3*i]),r.normal.push(a[3*i+1]),r.normal.push(a[3*i+2])),e.uv&&e.uv.forEach(function(e,t){void 0===r.uvs[t]&&(r.uvs[t]=[]),r.uvs[t].push(o[t][0]),r.uvs[t].push(o[t][1]),r.uvs[t].push(o[t][2*(i-1)]),r.uvs[t].push(o[t][2*(i-1)+1]),r.uvs[t].push(o[t][2*i]),r.uvs[t].push(o[t][2*i+1])})}addMorphTargets(i,r,e,n){if(0!==e.length){i.morphTargetsRelative=!0,i.morphAttributes.position=[];const a=this;e.forEach(function(e){e.rawTargets.forEach(function(e){var t=Ce.Objects.Geometry[e.geoID];void 0!==t&&a.genMorphGeometry(i,r,t,n,e.name)})})}}genMorphGeometry(e,t,i,r,n){var t=void 0!==t.PolygonVertexIndex?t.PolygonVertexIndex.a:[],a=void 0!==i.Vertices?i.Vertices.a:[],s=void 0!==i.Indexes?i.Indexes.a:[],o=3*e.attributes.position.count,l=new Float32Array(o);for(let e=0;e<s.length;e++){var h=3*s[e];l[h]=a[3*e],l[1+h]=a[3*e+1],l[2+h]=a[3*e+2]}o=this.genBuffers({vertexIndices:t,vertexPositions:l}),t=new Xe(o.vertex,3);t.name=n||i.attrName,t.applyMatrix4(r),e.morphAttributes.position.push(t)}parseNormals(e){var t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let n=[];return"IndexToDirect"===i&&("NormalIndex"in e?n=e.NormalIndex.a:"NormalsIndex"in e&&(n=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:n,mappingType:t,referenceType:i}}parseUVs(e){var t=e.MappingInformationType,i=e.ReferenceInformationType;let r=[];return{dataSize:2,buffer:e.UV.a,indices:r="IndexToDirect"===i?e.UVIndex.a:r,mappingType:t,referenceType:i}}parseVertexColors(e){var t=e.MappingInformationType,i=e.ReferenceInformationType;let r=[];return{dataSize:4,buffer:e.Colors.a,indices:r="IndexToDirect"===i?e.ColorIndex.a:r,mappingType:t,referenceType:i}}parseMaterialIndices(e){var t=e.MappingInformationType,i=e.ReferenceInformationType;if("NoMappingInformation"===t)return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};var r=e.Materials.a,n=[];for(let e=0;e<r.length;++e)n.push(e);return{dataSize:1,buffer:r,indices:n,mappingType:t,referenceType:i}}parseNurbsGeometry(e){if(void 0===Mc)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new ct;var t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new ct;var i=t-1,t=e.KnotVector.a,r=[],n=e.Points.a;for(let e=0,t=n.length;e<t;e+=4)r.push((new Ue).fromArray(n,e));let a,s;if("Closed"===e.Form)r.push(r[0]);else if("Periodic"===e.Form){a=i,s=t.length-1-a;for(let e=0;e<i;++e)r.push(r[e])}e=new Mc(i,t,r,a,s).getPoints(12*r.length);return(new ct).setFromPoints(e)}}class x_{parse(){var e=[],t=this.parseClips();if(void 0!==t)for(const r in t){var i=t[r],i=this.addClip(i);e.push(i)}return e}parseClips(){var e;if(void 0!==Ce.Objects.AnimationCurve)return e=this.parseAnimationCurveNodes(),this.parseAnimationCurves(e),e=this.parseAnimationLayers(e),this.parseAnimStacks(e)}parseAnimationCurveNodes(){var e=Ce.Objects.AnimationCurveNode,t=new Map;for(const r in e){var i=e[r];null!==i.attrName.match(/S|R|T|DeformPercent/)&&(i={id:i.id,attr:i.attrName,curves:{}},t.set(i.id,i))}return t}parseAnimationCurves(e){var t=Ce.Objects.AnimationCurve;for(const a in t){var i,r={id:t[a].id,times:t[a].KeyTime.a.map(S_),values:t[a].KeyValueFloat.a},n=Ze.get(r.id);void 0!==n&&(i=n.parents[0].ID,(n=n.parents[0].relationship).match(/X/)?e.get(i).curves.x=r:n.match(/Y/)?e.get(i).curves.y=r:n.match(/Z/)?e.get(i).curves.z=r:n.match(/d|DeformPercent/)&&e.has(i)&&(e.get(i).curves.morph=r))}}parseAnimationLayers(s){var e=Ce.Objects.AnimationLayer,t=new Map;for(const i in e){const o=[],r=Ze.get(parseInt(i));void 0!==r&&(r.children.forEach(function(e,t){if(s.has(e.ID)){var i=s.get(e.ID);if(void 0!==i.curves.x||void 0!==i.curves.y||void 0!==i.curves.z){if(void 0===o[t]){var r=Ze.get(e.ID).parents.filter(function(e){return void 0!==e.relationship})[0].ID;if(void 0!==r){const n=Ce.Objects.Model[r.toString()];if(void 0===n)return void console.warn("THREE.FBXLoader: Encountered a unused curve.",e);const a={modelName:n.attrName?Ne.sanitizeNodeName(n.attrName):"",ID:n.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Tt.traverse(function(e){e.ID===n.id&&(a.transform=e.matrix,e.userData.transformData)&&(a.eulerOrder=e.userData.transformData.eulerOrder)}),a.transform||(a.transform=new pe),"PreRotation"in n&&(a.preRotation=n.PreRotation.value),"PostRotation"in n&&(a.postRotation=n.PostRotation.value),o[t]=a}}o[t]&&(o[t][i.attr]=i)}else void 0!==i.curves.morph&&(void 0===o[t]&&(r=Ze.get(e.ID).parents.filter(function(e){return void 0!==e.relationship})[0].ID,e=Ze.get(r).parents[0].ID,e=Ze.get(e).parents[0].ID,e=Ze.get(e).parents[0].ID,e={modelName:(e=Ce.Objects.Model[e]).attrName?Ne.sanitizeNodeName(e.attrName):"",morphName:Ce.Objects.Deformer[r].attrName},o[t]=e),o[t][i.attr]=i)}}),t.set(parseInt(i),o))}return t}parseAnimStacks(e){var t=Ce.Objects.AnimationStack,i={};for(const n in t){var r=Ze.get(parseInt(n)).children,r=(1<r.length&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers."),e.get(r[0].ID));i[n]={name:t[n].attrName,layer:r}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(e){t=t.concat(i.generateTracks(e))}),new hh(e.name,-1,t)}generateTracks(e){var t,i=[];let r=new P,n=new Mt,a=new P;return e.transform&&e.transform.decompose(r,n,a),r=r.toArray(),n=(new an).setFromQuaternion(n,e.eulerOrder).toArray(),a=a.toArray(),void 0!==e.T&&0<Object.keys(e.T.curves).length&&void 0!==(t=this.generateVectorTrack(e.modelName,e.T.curves,r,"position"))&&i.push(t),void 0!==e.R&&0<Object.keys(e.R.curves).length&&void 0!==(t=this.generateRotationTrack(e.modelName,e.R.curves,n,e.preRotation,e.postRotation,e.eulerOrder))&&i.push(t),void 0!==e.S&&0<Object.keys(e.S.curves).length&&void 0!==(t=this.generateVectorTrack(e.modelName,e.S.curves,a,"scale"))&&i.push(t),void 0!==e.DeformPercent&&void 0!==(t=this.generateMorphTrack(e))&&i.push(t),i}generateVectorTrack(e,t,i,r){var n=this.getTimesForAllAxes(t),t=this.getKeyframeTrackValues(n,t,i);return new ji(e+"."+r,n,t)}generateRotationTrack(e,t,i,r,n,a){void 0!==t.x&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(jt.degToRad)),void 0!==t.y&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(jt.degToRad)),void 0!==t.z&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(jt.degToRad));var s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i),l=(void 0!==r&&((r=r.map(jt.degToRad)).push(a),r=(new an).fromArray(r),r=(new Mt).setFromEuler(r)),void 0!==n&&((n=n.map(jt.degToRad)).push(a),n=(new an).fromArray(n),n=(new Mt).setFromEuler(n).invert()),new Mt),h=new an,c=[];for(let e=0;e<o.length;e+=3)h.set(o[e],o[e+1],o[e+2],a),l.setFromEuler(h),void 0!==r&&l.premultiply(r),void 0!==n&&l.multiply(n),l.toArray(c,e/3*4);return new Hn(e+".quaternion",s,c)}generateMorphTrack(e){var t=e.DeformPercent.curves.morph,i=t.values.map(function(e){return e/100}),r=Tt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Wi(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let r=[];if(void 0!==e.x&&(r=r.concat(e.x.times)),void 0!==e.y&&(r=r.concat(e.y.times)),1<(r=(r=void 0!==e.z?r.concat(e.z.times):r).sort(function(e,t){return e-t})).length){let t=1,i=r[0];for(let e=1;e<r.length;e++){var n=r[e];n!==i&&(r[t]=n,i=n,t++)}r=r.slice(0,t)}return r}getKeyframeTrackValues(e,t,i){const r=i,n=[];let a=-1,s=-1,o=-1;return e.forEach(function(e){t.x&&(a=t.x.times.indexOf(e)),t.y&&(s=t.y.times.indexOf(e)),t.z&&(o=t.z.times.indexOf(e)),-1!==a?(e=t.x.values[a],n.push(e),r[0]=e):n.push(r[0]),-1!==s?(e=t.y.values[s],n.push(e),r[1]=e):n.push(r[1]),-1!==o?(e=t.z.values[o],n.push(e),r[2]=e):n.push(r[2])}),n}interpolateRotations(r){for(let i=1;i<r.values.length;i++){var n=r.values[i-1],a=r.values[i]-n,s=Math.abs(a);if(180<=s){var s=s/180,o=a/s;let e=n+o;var a=r.times[i-1],l=(r.times[i]-a)/s;let t=a+l;for(var h=[],c=[];t<r.times[i];)h.push(t),t+=l,c.push(e),e+=o;r.times=Sc(r.times,i,h),r.values=Sc(r.values,i,c)}}}}class y_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),--this.currentIndent}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Qh,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const a=this,s=e.split(/[\r\n]+/);return s.forEach(function(e,t){var i,r=e.match(/^[\s\t]*;/),n=e.match(/^[\s\t]*$/);r||n||(r=e.match("^\\t{"+a.currentIndent+"}(\\w+):(.*){",""),n=e.match("^\\t{"+a.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),i=e.match("^\\t{"+(a.currentIndent-1)+"}}"),r?a.parseNodeBegin(e,r):n?a.parseNodeProperty(e,n,s[++t]):i?a.popStack():e.match(/^[^\s\t}]/)&&a.parseNodePropertyContinued(e))}),this.allNodes}parseNodeBegin(e,t){var i=t[1].trim().replace(/^"/,"").replace(/"$/,""),t=t[2].split(",").map(function(e){return e.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:i},t=this.parseNodeAttr(t),n=this.getCurrentNode();0===this.currentIndent?this.allNodes.add(i,r):i in n?("PoseNode"===i?n.PoseNode.push(r):void 0!==n[i].id&&(n[i]={},n[i][n[i].id]=n[i]),""!==t.id&&(n[i][t.id]=r)):"number"==typeof t.id?(n[i]={},n[i][t.id]=r):"Properties70"!==i&&(n[i]="PoseNode"===i?[r]:r),"number"==typeof t.id&&(r.id=t.id),""!==t.name&&(r.attrName=t.name),""!==t.type&&(r.attrType=t.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0],i=(""!==e[0]&&(t=parseInt(e[0]),isNaN(t))&&(t=e[0]),""),r="";return 1<e.length&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(t,i,r){let n=i[1].replace(/^"/,"").replace(/"$/,"").trim(),a=i[2].replace(/^"/,"").replace(/"$/,"").trim();"Content"===n&&","===a&&(a=r.replace(/"/g,"").replace(/,$/,"").trim());i=this.getCurrentNode();if("Properties70"===i.name)this.parseNodeSpecialProperty(t,n,a);else{if("C"===n){r=a.split(",").slice(1),t=parseInt(r[0]),r=parseInt(r[1]);let e=a.split(",").slice(3);e=e.map(function(e){return e.trim().replace(/^"/,"")}),n="connections",E_(a=[t,r],e),void 0===i[n]&&(i[n]=[])}"Node"===n&&(i.id=a),n in i&&Array.isArray(i[n])?i[n].push(a):"a"!==n?i[n]=a:i.a=a,this.setCurrentProp(i,n),"a"===n&&","!==a.slice(-1)&&(i.a=Pa(a))}}parseNodePropertyContinued(e){var t=this.getCurrentNode();t.a+=e,","!==e.slice(-1)&&(t.a=Pa(t.a))}parseNodeSpecialProperty(e,t,i){var i=i.split('",').map(function(e){return e.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],n=i[1],a=i[2],s=i[3];let o=i[4];switch(n){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":o=parseFloat(o);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":o=Pa(o)}this.getPrevNode()[r]={type:n,type2:a,flag:s,value:o},this.setCurrentProp(this.getPrevNode(),r)}}class M_{parse(e){var t=new wc(e),i=(t.skip(23),t.getUint32());if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);for(var r=new Qh;!this.endOfContent(t);){var n=this.parseNode(t,i);null!==n&&r.add(n.name,n)}return r}endOfContent(e){return e.size()%16==0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(t,e){var i={},r=7500<=e?t.getUint64():t.getUint32(),n=7500<=e?t.getUint64():t.getUint32(),a=(7500<=e?t.getUint64():t.getUint32(),t.getUint8()),s=t.getString(a);if(0===r)return null;var o=[];for(let e=0;e<n;e++)o.push(this.parseProperty(t));var a=0<o.length?o[0]:"",l=1<o.length?o[1]:"",h=2<o.length?o[2]:"";for(i.singleProperty=1===n&&t.getOffset()===r;r>t.getOffset();){var c=this.parseNode(t,e);null!==c&&this.parseSubNode(s,i,c)}return i.propertyList=o,"number"==typeof a&&(i.id=a),""!==l&&(i.attrName=l),""!==h&&(i.attrType=h),""!==s&&(i.name=s),i}parseSubNode(r,n,a){if(!0===a.singleProperty){var s=a.propertyList[0];Array.isArray(s)?(n[a.name]=a).a=s:n[a.name]=s}else if("Connections"===r&&"C"===a.name){const i=[];a.propertyList.forEach(function(e,t){0!==t&&i.push(e)}),void 0===n.connections&&(n.connections=[]),n.connections.push(i)}else if("Properties70"===a.name)Object.keys(a).forEach(function(e){n[e]=a[e]});else if("Properties70"===r&&"P"===a.name){let e=a.propertyList[0],t=a.propertyList[1];s=a.propertyList[2],r=a.propertyList[3];let i;0===e.indexOf("Lcl ")&&(e=e.replace("Lcl ","Lcl_")),0===t.indexOf("Lcl ")&&(t=t.replace("Lcl ","Lcl_")),i="Color"===t||"ColorRGB"===t||"Vector"===t||"Vector3D"===t||0===t.indexOf("Lcl_")?[a.propertyList[4],a.propertyList[5],a.propertyList[6]]:a.propertyList[4],n[e]={type:t,type2:s,flag:r,value:i}}else void 0===n[a.name]?"number"==typeof a.id?(n[a.name]={},n[a.name][a.id]=a):n[a.name]=a:"PoseNode"===a.name?(Array.isArray(n[a.name])||(n[a.name]=[n[a.name]]),n[a.name].push(a)):void 0===n[a.name][a.id]&&(n[a.name][a.id]=a)}parseProperty(e){var t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var r=e.getUint32(),n=e.getUint32(),a=e.getUint32();if(0===n)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}void 0===l_&&console.error("THREE.FBXLoader: External library fflate.min.js required.");var n=Is(new Uint8Array(e.getArrayBuffer(a))),s=new wc(n.buffer);switch(t){case"b":case"c":return s.getBooleanArray(r);case"d":return s.getFloat64Array(r);case"f":return s.getFloat32Array(r);case"i":return s.getInt32Array(r);case"l":return s.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class wc{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=void 0===t||t}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return 1==(1&this.getUint8())}getBooleanArray(t){var i=[];for(let e=0;e<t;e++)i.push(this.getBoolean());return i}getUint8(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){var e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){var e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(t){var i=[];for(let e=0;e<t;e++)i.push(this.getInt32());return i}getUint32(){var e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),2147483648&t?(t=4294967295&~t,4294967295===(e=4294967295&~e)&&(t=t+1&4294967295),e=e+1&4294967295,-(4294967296*t+e)):4294967296*t+e}getInt64Array(t){var i=[];for(let e=0;e<t;e++)i.push(this.getInt64());return i}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),4294967296*t+e}getFloat32(){var e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(t){var i=[];for(let e=0;e<t;e++)i.push(this.getFloat32());return i}getFloat64(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(t){var i=[];for(let e=0;e<t;e++)i.push(this.getFloat64());return i}getArrayBuffer(e){var t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(t){let i=[];for(let e=0;e<t;e++)i[e]=this.getUint8();var e=i.indexOf(0);return 0<=e&&(i=i.slice(0,e)),on.decodeText(new Uint8Array(i))}}class Qh{add(e,t){this[e]=t}}function w_(e){var t="Kaydara FBX Binary  \0";return e.byteLength>=t.length&&t===nu(e,0,t.length)}function b_(t){var i,r,n=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let a=0;for(let e=0;e<n.length;++e)if(r=void 0,r=t[(i=1)-1],t=t.slice(a+i),a++,r===n[e])return!1;return!0}function bc(e){e=e.match(/FBXVersion: (\d+)/);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function S_(e){return e/46186158e3}const T_=[];function gr(e,t,i,r){let n;switch(r.mappingType){case"ByPolygonVertex":n=e;break;case"ByPolygon":n=t;break;case"ByVertice":n=i;break;case"AllSame":n=r.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+r.mappingType)}var a=(n="IndexToDirect"===r.referenceType?r.indices[n]:n)*r.dataSize,s=a+r.dataSize;return A_(T_,r.buffer,a,s)}const Ra=new an,Pi=new P;function eu(e){var t=new pe,i=new pe,r=new pe,n=new pe,a=new pe,s=new pe,o=new pe,l=new pe,h=new pe,c=new pe,u=new pe,d=new pe,p=e.inheritType||0,m=(e.translation&&t.setPosition(Pi.fromArray(e.translation)),e.preRotation&&((m=e.preRotation.map(jt.degToRad)).push(e.eulerOrder),i.makeRotationFromEuler(Ra.fromArray(m))),e.rotation&&((m=e.rotation.map(jt.degToRad)).push(e.eulerOrder),r.makeRotationFromEuler(Ra.fromArray(m))),e.postRotation&&((m=e.postRotation.map(jt.degToRad)).push(e.eulerOrder),n.makeRotationFromEuler(Ra.fromArray(m)),n.invert()),e.scale&&a.scale(Pi.fromArray(e.scale)),e.scalingOffset&&o.setPosition(Pi.fromArray(e.scalingOffset)),e.scalingPivot&&s.setPosition(Pi.fromArray(e.scalingPivot)),e.rotationOffset&&l.setPosition(Pi.fromArray(e.rotationOffset)),e.rotationPivot&&h.setPosition(Pi.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(u.copy(e.parentMatrix),c.copy(e.parentMatrixWorld)),i.clone().multiply(r).multiply(n)),e=new pe,f=(e.extractRotation(c),new pe),f=(f.copyPosition(c),f.clone().invert().multiply(c)),f=e.clone().invert().multiply(f),g=a,v=new pe,f=((0===p?v.copy(e).multiply(m).multiply(f):1===p?v.copy(e).multiply(f).multiply(m):(p=(new pe).scale((new P).setFromMatrixScale(u)).clone().invert(),u=f.clone().multiply(p),v.copy(e).multiply(m).multiply(u))).multiply(g),h.clone().invert()),p=s.clone().invert(),e=t.clone().multiply(l).multiply(h).multiply(i).multiply(r).multiply(n).multiply(f).multiply(o).multiply(s).multiply(a).multiply(p),m=(new pe).copyPosition(e),u=c.clone().multiply(m);return d.copyPosition(u),(e=d.clone().multiply(v)).premultiply(c.invert()),e}function tu(e){var t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return 6===(e=e||0)?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[e]}function Pa(e){return e.split(",").map(function(e){return parseFloat(e)})}function nu(e,t,i){return void 0===t&&(t=0),void 0===i&&(i=e.byteLength),on.decodeText(new Uint8Array(e,t,i))}function E_(r,n){for(let e=0,t=r.length,i=n.length;e<i;e++,t++)r[t]=n[e]}function A_(i,r,n,a){for(let e=n,t=0;e<a;e++,t++)i[t]=r[e];return i}function Sc(e,t,i){return e.slice(0,t).concat(i).concat(e.slice(t))}const Da=new WeakMap;class Tc extends qn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,i,t,r){var n=new qi(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,e=>{var t={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(e,t).then(i).catch(r)},t,r)}decodeDracoFile(e,t,i,r){r={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i};this.decodeGeometry(e,r).then(t)}decodeGeometry(i,r){for(const h in r.attributeTypes){var e=r.attributeTypes[h];void 0!==e.BYTES_PER_ELEMENT&&(r.attributeTypes[h]=e.name)}var t=JSON.stringify(r);if(Da.has(i)){var n=Da.get(i);if(n.key===t)return n.promise;if(0===i.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let a;const s=this.workerNextTaskID++,o=i.byteLength,l=this._getWorker(s,o).then(e=>(a=e,new Promise((e,t)=>{a._callbacks[s]={resolve:e,reject:t},a.postMessage({type:"decode",id:s,taskConfig:r,buffer:i},[i])}))).then(e=>this._createGeometry(e.geometry));return l.catch(()=>!0).then(()=>{a&&s&&this._releaseTask(a,s)}),Da.set(i,{key:t,promise:l}),l}_createGeometry(t){var i=new ct;t.index&&i.setIndex(new wt(t.index.array,1));for(let e=0;e<t.attributes.length;e++){var r=t.attributes[e],n=r.name,a=r.array,r=r.itemSize;i.setAttribute(n,new wt(a,r))}return i}_loadLibrary(i,e){const r=new qi(this.manager);return r.setPath(this.decoderPath),r.setResponseType(e),r.setWithCredentials(this.withCredentials),new Promise((e,t)=>{r.load(i,e,void 0,t)})}preload(){return this._initDecoder(),this}_initDecoder(){if(!this.decoderPending){const i="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,e=[];i?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(e=>{var t=e[0],e=(i||(this.decoderConfig.wasmBinary=e[1]),C_.toString()),t=["/* draco decoder */",t,"","/* worker */",e.substring(e.indexOf("{")+1,e.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([t]))})}return this.decoderPending}_getWorker(t,r){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(e){var t=e.data;switch(t.type){case"decode":i._callbacks[t.id].resolve(t);break;case"error":i._callbacks[t.id].reject(t);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+t.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(e,t){return e._taskLoad>t._taskLoad?-1:1});var e=this.workerPool[this.workerPool.length-1];return e._taskCosts[t]=r,e._taskLoad+=r,e})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function C_(){let i,t;onmessage=function(e){const a=e.data;switch(a.type){case"init":i=a.decoderConfig,t=new Promise(function(t){i.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(i)});break;case"decode":const s=a.buffer,o=a.taskConfig;t.then(e=>{var e=e.draco,t=new e.Decoder,i=new e.DecoderBuffer;i.Init(new Int8Array(s),s.byteLength);try{var r=function(i,r,e,n){var a=n.attributeIDs,s=n.attributeTypes;let o,t;var l=r.GetEncodedGeometryType(e);if(l===i.TRIANGULAR_MESH)o=new i.Mesh,t=r.DecodeBufferToMesh(e,o);else{if(l!==i.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");o=new i.PointCloud,t=r.DecodeBufferToPointCloud(e,o)}if(!t.ok()||0===o.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+t.error_msg());var h={index:null,attributes:[]};for(const u in a){var c=self[s[u]];let e,t;if(n.useUniqueIDs)t=a[u],e=r.GetAttributeByUniqueId(o,t);else{if(-1===(t=r.GetAttributeId(o,i[a[u]])))continue;e=r.GetAttribute(o,t)}h.attributes.push(function(e,t,i,r,n,a){var s=a.num_components(),o=i.num_points()*s,l=o*n.BYTES_PER_ELEMENT,h=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,n),c=e._malloc(l),t=(t.GetAttributeDataArrayForAllPoints(i,a,h,l,c),new n(e.HEAPF32.buffer,c,o).slice());return e._free(c),{name:r,array:t,itemSize:s}}(i,r,o,u,c,e))}return l===i.TRIANGULAR_MESH&&(h.index=function(e,t,i){var r=3*i.num_faces(),n=4*r,a=e._malloc(n),t=(t.GetTrianglesUInt32Array(i,n,a),new Uint32Array(e.HEAPF32.buffer,a,r).slice());return e._free(a),{array:t,itemSize:1}}(i,r,o)),i.destroy(o),h}(e,t,i,o),n=r.attributes.map(e=>e.array.buffer);r.index&&n.push(r.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:r},n)}catch(e){console.error(e),self.postMessage({type:"error",id:a.id,error:e.message})}finally{e.destroy(i),e.destroy(t)}})}}}class L_ extends F0{constructor(e){super(e),this.type=Mn}parse(r){const f=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:console.error("THREE.RGBELoader: Error: "+(t||""))}return-1},l=`
`,h=function(e,t,i){t=t||1024;let r=e.pos,n=-1,a=0,s="",o=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;(n=o.indexOf(l))<0&&a<t&&r<e.byteLength;)s+=o,a+=o.length,r+=128,o+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<n&&(!1!==i&&(e.pos+=a+n+1),s+o.slice(0,n))},e=new Uint8Array(r);e.pos=0;var n,a,s,o,c,u,d,p,m,g,r=function(e){var t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,r=/^\s*FORMAT=(\S+)\s*$/,n=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,a={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let s,o;if(e.pos>=e.byteLength||!(s=h(e)))return f(1,"no header found");if(!(o=s.match(/^#\?(\S+)/)))return f(3,"bad initial token");for(a.valid|=1,a.programtype=o[1],a.string+=s+`
`;!1!==(s=h(e));)if(a.string+=s+`
`,"#"===s.charAt(0))a.comments+=s+`
`;else if((o=s.match(t))&&(a.gamma=parseFloat(o[1])),(o=s.match(i))&&(a.exposure=parseFloat(o[1])),(o=s.match(r))&&(a.valid|=2,a.format=o[1]),(o=s.match(n))&&(a.valid|=4,a.height=parseInt(o[1],10),a.width=parseInt(o[2],10)),2&a.valid&&4&a.valid)break;return 2&a.valid?4&a.valid?a:f(3,"missing image size specifier"):f(3,"missing format specifier")}(e);if(-1!==r){var v=r.width,x=r.height,_=function(e,t,i){var r=t;if(r<8||32767<r||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(r!==(e[2]<<8|e[3]))return f(3,"wrong scanline width");var n=new Uint8Array(4*t*i);if(!n.length)return f(4,"unable to allocate buffer space");let a=0,s=0;var o=4*r,l=new Uint8Array(4),h=new Uint8Array(o);let c=i;for(;0<c&&s<e.byteLength;){if(s+4>e.byteLength)return f(1);if(l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=r)return f(3,"bad rgbe scanline format");let t=0,i;for(;t<o&&s<e.byteLength;){var u=128<(i=e[s++]);if(u&&(i-=128),0===i||t+i>o)return f(3,"bad scanline data");if(u){var d=e[s++];for(let e=0;e<i;e++)h[t++]=d}else h.set(e.subarray(s,s+i),t),t+=i,s+=i}var p=r;for(let e=0;e<p;e++){var m=0;n[a]=h[e+0],m+=r,n[a+1]=h[e+m],m+=r,n[a+2]=h[e+m],m+=r,n[a+3]=h[e+m],a+=4}c--}return n}(e.subarray(e.pos),v,x);if(-1!==_){let e,t,i;switch(this.type){case Ft:i=_.length/4;var y=new Float32Array(4*i);for(let e=0;e<i;e++)u=_,d=4*e,p=y,m=4*e,g=void 0,g=u[d+3],g=Math.pow(2,g-128)/255,p[m+0]=u[d+0]*g,p[m+1]=u[d+1]*g,p[m+2]=u[d+2]*g,p[m+3]=1;e=y,t=Ft;break;case Mn:i=_.length/4;var b=new Uint16Array(4*i);for(let e=0;e<i;e++)n=_,a=4*e,s=b,o=4*e,c=void 0,c=n[a+3],c=Math.pow(2,c-128)/255,s[o+0]=pr.toHalfFloat(Math.min(n[a+0]*c,65504)),s[o+1]=pr.toHalfFloat(Math.min(n[a+1]*c,65504)),s[o+2]=pr.toHalfFloat(Math.min(n[a+2]*c,65504)),s[o+3]=pr.toHalfFloat(1);e=b,t=Mn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:v,height:x,data:e,header:r.string,gamma:r.gamma,exposure:r.exposure,type:t}}}return null}setDataType(e){return this.type=e,this}load(e,i,t,r){return super.load(e,function(e,t){switch(e.type){case Ft:case Mn:e.encoding=Vn,e.minFilter=$e,e.magFilter=$e,e.generateMipmaps=!1,e.flipY=!0}i&&i(e,t)},t,r)}}class R_ extends Gr{constructor(){super(),this.experience=new Zt,this.renderer=this.experience.renderer.instance,this.setLoaders(),this.toLoad=0,this.loaded=0,this.items={}}setLoaders(){this.loaders=[],this.loaders.push({extensions:["jpg","png"],action:e=>{const t=new Image;t.addEventListener("load",()=>{this.fileLoadEnd(e,t)}),t.addEventListener("error",()=>{this.fileLoadEnd(e,t)}),t.src=e.source}});const e=new Tc,i=(e.setDecoderPath("draco/"),e.setDecoderConfig({type:"js"}),this.loaders.push({extensions:["drc"],action:t=>{e.load(t.source,e=>{this.fileLoadEnd(t,e),Tc.releaseDecoderModule()})}}),new fv),r=(i.setDRACOLoader(e),this.loaders.push({extensions:["glb","gltf"],action:t=>{i.load(t.source,e=>{this.fileLoadEnd(t,e)})}}),new g_),n=(this.loaders.push({extensions:["fbx"],action:t=>{r.load(t.source,e=>{this.fileLoadEnd(t,e)})}}),new L_);this.loaders.push({extensions:["hdr"],action:t=>{n.load(t.source,e=>{this.fileLoadEnd(t,e)})}})}load(e=[]){for(const i of e){this.toLoad++;var t=i.source.match(/\.([a-z]+)$/);if(void 0!==t[1]){const r=t[1],n=this.loaders.find(e=>e.extensions.find(e=>e===r));n?n.action(i):console.warn("Cannot found loader for "+i)}else console.warn("Cannot found extension of "+i)}}fileLoadEnd(e,t){this.loaded++,this.items[e.name]=t,this.trigger("fileEnd",[e,t]),this.loaded===this.toLoad&&this.trigger("end")}}class P_ extends Gr{constructor(e){super(),this.items={},this.loader=new R_({renderer:this.renderer}),this.groups={},this.groups.assets=[...e],this.groups.loaded=[],this.groups.current=null,this.loadNextGroup(),this.loader.on("fileEnd",(e,t)=>{let i=t;"texture"===e.type&&((i=i instanceof nt?i:new nt(t)).needsUpdate=!0),this.items[e.name]=i,this.groups.current.loaded++,this.trigger("progress",[this.groups.current,e,i])}),this.loader.on("end",()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),0<this.groups.assets.length?this.loadNextGroup():this.trigger("end")})}loadNextGroup(){this.groups.current=this.groups.assets.shift(),this.groups.current.toLoad=this.groups.current.items.length,this.groups.current.loaded=0,this.loader.load(this.groups.current.items)}createInstancedMeshes(e,t){var i=[];for(const n of t)i.push({name:n.name,regex:n.regex,meshesGroups:[],instancedMeshes:[]});var r={};for(const a of i)r[a.name]=a.instancedMeshes;return r}destroy(){for(const t in this.items){var e=this.items[t];e instanceof nt&&e.dispose()}}}var D_=`in vec3 position;
in vec2 uv;

out vec2 vUv;

void main()
{
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`,I_=`#define PI 3.1415926538

precision highp float;
precision highp int;

in vec2 vUv;

uniform sampler2D uSpaceTexture;
uniform sampler2D uDistortionTexture;
uniform vec2 uBlackHolePosition;
uniform float uRGBShiftRadius;

layout(location = 0) out vec4 pc_FragColor;

vec3 getRGBShiftedColor(sampler2D _texture, vec2 _uv, float _radius)
{
    vec3 angle = vec3(
        PI * 2.0 / 3.0,
        PI * 4.0 / 3.0,
        0
    );
    vec3 color = vec3(0.0);
    color.r = texture(_texture, _uv + vec2(sin(angle.r) * _radius, cos(angle.r) * _radius)).r;
    color.g = texture(_texture, _uv + vec2(sin(angle.g) * _radius, cos(angle.g) * _radius)).g;
    color.b = texture(_texture, _uv + vec2(sin(angle.b) * _radius, cos(angle.b) * _radius)).b;

    return color;
}

void main()
{
    vec4 distortionColor = texture(uDistortionTexture, vUv);
    float distortionIntensity = distortionColor.r;
    
    vec2 towardCenter = vUv - uBlackHolePosition;
    towardCenter *= - distortionIntensity * 2.0;
    

    vec2 distoredUv = vUv + towardCenter;
    vec3 outColor = getRGBShiftedColor(uSpaceTexture, distoredUv, uRGBShiftRadius);

    
    

    pc_FragColor = vec4(outColor, 1.0);
    
}`;function F_(){var e={};return e.uSpaceTexture={value:null},e.uDistortionTexture={value:null},e.uBlackHolePosition={value:new ve},e.uRGBShiftRadius={value:1e-5},new jn({glslVersion:Tn,depthWrite:!1,depthTest:!1,uniforms:e,defines:{},vertexShader:D_,fragmentShader:I_})}class N_{constructor(e=0){this.experience=new Zt,this.config=this.experience.config,this.debug=this.experience.debug,this.time=this.experience.time,this.sizes=this.experience.sizes,this.scenes=this.experience.scenes,this.camera=this.experience.camera,this.setInstance(),this.setComposition()}setInstance(){var e;this.clearColor="#000000",this.instance=new rh({alpha:!1,antialias:!0}),this.instance.domElement.style.position="absolute",this.instance.domElement.style.top=0,this.instance.domElement.style.left=0,this.instance.domElement.style.width="100%",this.instance.domElement.style.height="100%",this.instance.setClearColor(this.clearColor,1),this.instance.setSize(this.config.width,this.config.height),this.instance.setPixelRatio(this.config.pixelRatio),this.instance.physicallyCorrectLights=!0,this.instance.outputEncoding=Pe,this.instance.shadowMap.type=Lc,this.instance.shadowMap.enabled=!0,this.instance.toneMapping=$t,this.instance.toneMappingExposure=1,this.context=this.instance.getContext(),this.debug.stats&&this.debug.stats.setRenderPanel(this.context),this.debug.active&&((e=this.debug.ui.getFolder("renderer")).addColor(this,"clearColor").onChange(()=>{this.instance.setClearColor(this.clearColor)}),e.add(this.instance,"toneMapping",{NoToneMapping:$t,LinearToneMapping:Dc,ReinhardToneMapping:Ic,CineonToneMapping:Fc,ACESFilmicToneMapping:Nc}).onChange(()=>{this.scenes.traverse(e=>{e instanceof Qe&&(e.material.needsUpdate=!0)})}),e.add(this.instance,"toneMappingExposure").min(0).max(10))}setComposition(){this.composition={},this.composition.space=new Kt(2*this.sizes.width,2*this.sizes.height,{magFilter:$e,minFilter:$e}),this.composition.distortion=new Kt(.5*this.sizes.width,.5*this.sizes.height,{magFilter:$e,minFilter:$e,format:Uc,type:Ft}),this.composition.final={},this.composition.final.material=new F_,this.composition.final.material.uniforms.uSpaceTexture.value=this.composition.space.texture,this.composition.final.material.uniforms.uDistortionTexture.value=this.composition.distortion.texture,this.composition.final.plane=new Qe(new Gn(2,2),this.composition.final.material),this.composition.final.plane.frustumCulled=!1,this.composition.final.scene=new ws,this.composition.final.scene.add(this.composition.final.plane)}resize(){this.instance.setSize(this.config.width,this.config.height),this.instance.setPixelRatio(this.config.pixelRatio),this.postProcess.composer.setSize(this.config.width,this.config.height),this.postProcess.composer.setPixelRatio(this.config.pixelRatio)}update(){this.debug.stats&&this.debug.stats.beforeRender(),this.instance.autoClearColor=!0,this.instance.setRenderTarget(this.composition.space),this.instance.render(this.scenes.space,this.camera.instance),this.instance.setRenderTarget(this.composition.distortion),this.instance.render(this.scenes.distortion,this.camera.instance),this.instance.setRenderTarget(null),this.instance.render(this.composition.final.scene,this.camera.instance),this.instance.autoClearColor=!1,this.instance.setRenderTarget(null),this.instance.render(this.scenes.overlay,this.camera.instance),this.debug.stats&&this.debug.stats.afterRender()}destroy(){this.instance.renderLists.dispose(),this.instance.dispose(),this.renderTarget.dispose(),this.postProcess.composer.renderTarget1.dispose(),this.postProcess.composer.renderTarget2.dispose()}}const Ec={type:"change"},Ia={type:"start"},Ac={type:"end"};class z_ extends hi{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",j),this._domElementKeyEvents=e},this.saveState=function(){h.target0.copy(h.target),h.position0.copy(h.object.position),h.zoom0=h.object.zoom},this.reset=function(){h.target.copy(h.target0),h.object.position.copy(h.position0),h.object.zoom=h.zoom0,h.object.updateProjectionMatrix(),h.dispatchEvent(Ec),h.update(),u=c.NONE},this.update=function(){const r=new P,n=(new Mt).setFromUnitVectors(e.up,new P(0,1,0)),a=n.clone().invert(),s=new P,o=new Mt,l=2*Math.PI;return function(){var e=h.object.position;r.copy(e).sub(h.target),r.applyQuaternion(n),p.setFromVector3(r),h.autoRotate&&u===c.NONE&&M(2*Math.PI/60/60*h.autoRotateSpeed),h.enableDamping?(p.theta+=m.theta*h.dampingFactor,p.phi+=m.phi*h.dampingFactor):(p.theta+=m.theta,p.phi+=m.phi);let t=h.minAzimuthAngle,i=h.maxAzimuthAngle;return isFinite(t)&&isFinite(i)&&(t<-Math.PI?t+=l:t>Math.PI&&(t-=l),i<-Math.PI?i+=l:i>Math.PI&&(i-=l),t<=i?p.theta=Math.max(t,Math.min(i,p.theta)):p.theta=p.theta>(t+i)/2?Math.max(t,p.theta):Math.min(i,p.theta)),p.phi=Math.max(h.minPolarAngle,Math.min(h.maxPolarAngle,p.phi)),p.makeSafe(),p.radius*=f,p.radius=Math.max(h.minDistance,Math.min(h.maxDistance,p.radius)),!0===h.enableDamping?h.target.addScaledVector(g,h.dampingFactor):h.target.add(g),r.setFromSpherical(p),r.applyQuaternion(a),e.copy(h.target).add(r),h.object.lookAt(h.target),!0===h.enableDamping?(m.theta*=1-h.dampingFactor,m.phi*=1-h.dampingFactor,g.multiplyScalar(1-h.dampingFactor)):(m.set(0,0,0),g.set(0,0,0)),f=1,!!(v||s.distanceToSquared(h.object.position)>d||8*(1-o.dot(h.object.quaternion))>d)&&(h.dispatchEvent(Ec),s.copy(h.object.position),o.copy(h.object.quaternion),!(v=!1))}}(),this.dispose=function(){h.domElement.removeEventListener("contextmenu",X),h.domElement.removeEventListener("pointerdown",V),h.domElement.removeEventListener("pointercancel",G),h.domElement.removeEventListener("wheel",W),h.domElement.removeEventListener("pointermove",N),h.domElement.removeEventListener("pointerup",O),null!==h._domElementKeyEvents&&h._domElementKeyEvents.removeEventListener("keydown",j)};const h=this,c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const d=1e-6,p=new sc,m=new sc;let f=1;const g=new P;let v=!1;const r=new ve,n=new ve,a=new ve,s=new ve,o=new ve,l=new ve,x=new ve,_=new ve,y=new ve,b=[],i={};function w(){return Math.pow(.95,h.zoomSpeed)}function M(e){m.theta-=e}function S(e){m.phi-=e}const T=function(){const i=new P;return function(e,t){i.setFromMatrixColumn(t,0),i.multiplyScalar(-e),g.add(i)}}(),E=function(){const i=new P;return function(e,t){!0===h.screenSpacePanning?i.setFromMatrixColumn(t,1):(i.setFromMatrixColumn(t,0),i.crossVectors(h.object.up,i)),i.multiplyScalar(e),g.add(i)}}(),A=function(){const n=new P;return function(e,t){var i,r=h.domElement;h.object.isPerspectiveCamera?(i=h.object.position,n.copy(i).sub(h.target),i=n.length(),i*=Math.tan(h.object.fov/2*Math.PI/180),T(2*e*i/r.clientHeight,h.object.matrix),E(2*t*i/r.clientHeight,h.object.matrix)):h.object.isOrthographicCamera?(T(e*(h.object.right-h.object.left)/h.object.zoom/r.clientWidth,h.object.matrix),E(t*(h.object.top-h.object.bottom)/h.object.zoom/r.clientHeight,h.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),h.enablePan=!1)}}();function L(e){h.object.isPerspectiveCamera?f/=e:h.object.isOrthographicCamera?(h.object.zoom=Math.max(h.minZoom,Math.min(h.maxZoom,h.object.zoom*e)),h.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),h.enableZoom=!1)}function C(e){h.object.isPerspectiveCamera?f*=e:h.object.isOrthographicCamera?(h.object.zoom=Math.max(h.minZoom,Math.min(h.maxZoom,h.object.zoom/e)),h.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),h.enableZoom=!1)}function R(e){r.set(e.clientX,e.clientY)}function I(e){s.set(e.clientX,e.clientY)}function D(){var e,t;1===b.length?r.set(b[0].pageX,b[0].pageY):(e=.5*(b[0].pageX+b[1].pageX),t=.5*(b[0].pageY+b[1].pageY),r.set(e,t))}function k(){var e,t;1===b.length?s.set(b[0].pageX,b[0].pageY):(e=.5*(b[0].pageX+b[1].pageX),t=.5*(b[0].pageY+b[1].pageY),s.set(e,t))}function F(){var e=b[0].pageX-b[1].pageX,t=b[0].pageY-b[1].pageY,e=Math.sqrt(e*e+t*t);x.set(0,e)}function U(e){1==b.length?n.set(e.pageX,e.pageY):(i=z(e),t=.5*(e.pageX+i.x),e=.5*(e.pageY+i.y),n.set(t,e)),a.subVectors(n,r).multiplyScalar(h.rotateSpeed);var t,i=h.domElement;M(2*Math.PI*a.x/i.clientHeight),S(2*Math.PI*a.y/i.clientHeight),r.copy(n)}function B(e){var t,i;1===b.length?o.set(e.pageX,e.pageY):(t=z(e),i=.5*(e.pageX+t.x),e=.5*(e.pageY+t.y),o.set(i,e)),l.subVectors(o,s).multiplyScalar(h.panSpeed),A(l.x,l.y),s.copy(o)}function H(e){var t=z(e),i=e.pageX-t.x,e=e.pageY-t.y,t=Math.sqrt(i*i+e*e);_.set(0,t),y.set(0,Math.pow(_.y/x.y,h.zoomSpeed)),L(y.y),x.copy(_)}function V(e){var t;!1!==h.enabled&&(0===b.length&&(h.domElement.setPointerCapture(e.pointerId),h.domElement.addEventListener("pointermove",N),h.domElement.addEventListener("pointerup",O)),t=e,b.push(t),("touch"===e.pointerType?function(e){switch(Y(e),b.length){case 1:switch(h.touches.ONE){case gi.ROTATE:if(!1===h.enableRotate)return;D(),u=c.TOUCH_ROTATE;break;case gi.PAN:if(!1===h.enablePan)return;k(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(h.touches.TWO){case gi.DOLLY_PAN:if(!1===h.enableZoom&&!1===h.enablePan)return;h.enableZoom&&F(),h.enablePan&&k(),u=c.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(!1===h.enableZoom&&!1===h.enableRotate)return;h.enableZoom&&F(),h.enableRotate&&D(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&h.dispatchEvent(Ia)}:function(e){let t;switch(e.button){case 0:t=h.mouseButtons.LEFT;break;case 1:t=h.mouseButtons.MIDDLE;break;case 2:t=h.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(!1===h.enableZoom)return;(function(e){x.set(e.clientX,e.clientY)})(e),u=c.DOLLY;break;case mi.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===h.enablePan)return;I(e),u=c.PAN}else{if(!1===h.enableRotate)return;R(e),u=c.ROTATE}break;case mi.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===h.enableRotate)return;R(e),u=c.ROTATE}else{if(!1===h.enablePan)return;I(e),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&h.dispatchEvent(Ia)})(e))}function N(e){!1!==h.enabled&&("touch"===e.pointerType?function(e){switch(Y(e),u){case c.TOUCH_ROTATE:!1!==h.enableRotate&&(U(e),h.update());break;case c.TOUCH_PAN:!1!==h.enablePan&&(B(e),h.update());break;case c.TOUCH_DOLLY_PAN:!1===h.enableZoom&&!1===h.enablePan||(function(e){h.enableZoom&&H(e),h.enablePan&&B(e)}(e),h.update());break;case c.TOUCH_DOLLY_ROTATE:!1===h.enableZoom&&!1===h.enableRotate||(function(e){h.enableZoom&&H(e),h.enableRotate&&U(e)}(e),h.update());break;default:u=c.NONE}}:function(e){if(!1!==h.enabled)switch(u){case c.ROTATE:!1!==h.enableRotate&&!function(e){n.set(e.clientX,e.clientY),a.subVectors(n,r).multiplyScalar(h.rotateSpeed),e=h.domElement,M(2*Math.PI*a.x/e.clientHeight),S(2*Math.PI*a.y/e.clientHeight),r.copy(n),h.update()}(e);break;case c.DOLLY:!1!==h.enableZoom&&!function(e){_.set(e.clientX,e.clientY),y.subVectors(_,x),0<y.y?L(w()):y.y<0&&C(w()),x.copy(_),h.update()}(e);break;case c.PAN:!1!==h.enablePan&&!function(e){o.set(e.clientX,e.clientY),l.subVectors(o,s).multiplyScalar(h.panSpeed),A(l.x,l.y),s.copy(o),h.update()}(e)}})(e)}function O(e){q(e),0===b.length&&(h.domElement.releasePointerCapture(e.pointerId),h.domElement.removeEventListener("pointermove",N),h.domElement.removeEventListener("pointerup",O)),h.dispatchEvent(Ac),u=c.NONE}function G(e){q(e)}function W(e){!1!==h.enabled&&!1!==h.enableZoom&&u===c.NONE&&(e.preventDefault(),h.dispatchEvent(Ia),(e=e).deltaY<0?C(w()):0<e.deltaY&&L(w()),h.update(),h.dispatchEvent(Ac))}function j(t){if(!1!==h.enabled&&!1!==h.enablePan){let e=!1;switch(t.code){case h.keys.UP:A(0,h.keyPanSpeed),e=!0;break;case h.keys.BOTTOM:A(0,-h.keyPanSpeed),e=!0;break;case h.keys.LEFT:A(h.keyPanSpeed,0),e=!0;break;case h.keys.RIGHT:A(-h.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),h.update())}}function X(e){!1!==h.enabled&&e.preventDefault()}function q(t){delete i[t.pointerId];for(let e=0;e<b.length;e++)if(b[e].pointerId==t.pointerId)return void b.splice(e,1)}function Y(e){let t=i[e.pointerId];void 0===t&&(t=new ve,i[e.pointerId]=t),t.set(e.pageX,e.pageY)}function z(e){e=e.pointerId===b[0].pointerId?b[1]:b[0];return i[e.pointerId]}h.domElement.addEventListener("contextmenu",X),h.domElement.addEventListener("pointerdown",V),h.domElement.addEventListener("pointercancel",G),h.domElement.addEventListener("wheel",W,{passive:!1}),this.update()}}class O_{constructor(e){this.experience=new Zt,this.config=this.experience.config,this.debug=this.experience.debug,this.time=this.experience.time,this.sizes=this.experience.sizes,this.targetElement=this.experience.targetElement,this.scenes=this.experience.scenes,this.mode="debug",this.setInstance(),this.setModes(),this.debug.active&&this.debug.ui.getFolder("camera").add(this,"mode",{debug:"debug",default:"default"})}setInstance(){this.instance=new mt(45,this.config.width/this.config.height,.1,1e3),this.instance.rotation.reorder("YXZ"),this.scenes.space.add(this.instance)}setModes(){this.modes={},this.modes.default={},this.modes.default.instance=this.instance.clone(),this.modes.default.instance.rotation.reorder("YXZ"),this.modes.debug={},this.modes.debug.instance=this.instance.clone(),this.modes.debug.instance.rotation.reorder("YXZ"),this.modes.debug.instance.position.set(5,2,5),this.modes.debug.orbitControls=new z_(this.modes.debug.instance,this.targetElement),this.modes.debug.orbitControls.enabled=this.modes.debug.active,this.modes.debug.orbitControls.screenSpacePanning=!0,this.modes.debug.orbitControls.enableKeys=!1,this.modes.debug.orbitControls.zoomSpeed=.25,this.modes.debug.orbitControls.enableDamping=!0,this.modes.debug.orbitControls.update()}resize(){this.instance.aspect=this.config.width/this.config.height,this.instance.updateProjectionMatrix(),this.modes.default.instance.aspect=this.config.width/this.config.height,this.modes.default.instance.updateProjectionMatrix(),this.modes.debug.instance.aspect=this.config.width/this.config.height,this.modes.debug.instance.updateProjectionMatrix()}update(){this.modes.debug.orbitControls.update();var e=this.modes[this.mode].instance;e.updateWorldMatrix(!0,!1),this.instance.position.set(0,0,0),this.instance.quaternion.set(0,0,0,0),this.instance.scale.set(1,1,1),this.instance.applyMatrix4(e.matrixWorld),this.instance.scale.set(1,1,1)}destroy(){this.modes.debug.orbitControls.destroy()}}var k_=`in vec3 position;
in vec2 uv;

out vec2 vUv;

void main()
{
    gl_Position = vec4(position, 1.0);

    vUv = uv;
}`,U_=`precision highp float;
precision highp int;

in vec2 vUv;

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float perlin3dPeriodic(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); 
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

layout(location = 0) out vec4 pc_FragColor;

void main()
{
    float uFrequency = 8.0;

    float noiseR = perlin3dPeriodic(vec3(vUv * uFrequency, 123.456), vec3(uFrequency)) * 0.5 + 0.5;
    float noiseG = perlin3dPeriodic(vec3(vUv * uFrequency, 456.789), vec3(uFrequency)) * 0.5 + 0.5;
    float noiseB = perlin3dPeriodic(vec3(vUv * uFrequency, 789.123), vec3(uFrequency)) * 0.5 + 0.5;

    pc_FragColor = vec4(noiseR, noiseG, noiseB, 1.0);
}`;function B_(){return new jn({glslVersion:Tn,uniforms:{},vertexShader:k_,fragmentShader:U_})}const Ss=class{constructor(){if(Ss.instance)return Ss.instance;(Ss.instance=this).experience=new Zt,this.renderer=this.experience.renderer,this.scenes=this.experience.scenes,this.setCustomRender(),this.setMaterial(),this.setPlane()}setCustomRender(){this.customRender={},this.customRender.scene=new ws,this.customRender.camera=new zs(-1,1,1,-1,.1,10)}setMaterial(){this.material=new B_}setPlane(){this.plane=new Qe(new Gn(2,2),this.material),this.plane.frustumCulled=!1,this.customRender.scene.add(this.plane)}setDebugPlane(){this.debugPlane={},this.debugPlane.geometry=new Gn(1,1),this.debugPlane.material=new wn;const e=new Qe(this.debugPlane.geometry,this.debugPlane.material);e.position.y=6,e.position.x=-1,e.scale.set(2,2,2);var t=new Qe(this.debugPlane.geometry,this.debugPlane.material),t=(t.position.y=6,t.position.x=1,t.scale.set(2,2,2),new Qe(this.debugPlane.geometry,this.debugPlane.material)),t=(t.position.y=4,t.position.x=-1,t.scale.set(2,2,2),new Qe(this.debugPlane.geometry,this.debugPlane.material));t.position.y=4,t.position.x=1,t.scale.set(2,2,2),window.requestAnimationFrame(()=>{this.scenes.space.add(e)})}create(e,t){e=new Kt(e,t,{generateMipmaps:!1,wrapS:hn,wrapT:hn}),this.renderer.instance.setRenderTarget(e),this.renderer.instance.render(this.customRender.scene,this.customRender.camera),this.renderer.instance.setRenderTarget(null),t=e.texture;return this.debugPlane&&(this.debugPlane.material.map=t),t}};let br=Ss;Xr(br,"instance");var V_=`uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

in vec3 position;
in vec2 uv;

out vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`,G_=`precision highp float;
precision highp int;

uniform float uTime;
uniform sampler2D uNoiseTexture;
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;

in vec2 vUv;

layout(location = 0) out vec4 pc_FragColor;

float inverseLerp(float v, float minValue, float maxValue)
{
    return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax)
{
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}

float blendAdd(float base, float blend)
{
	return min(base+blend,1.0);
}

vec3 blendAdd(vec3 base, vec3 blend)
{
	return min(base+blend,vec3(1.0));
}

vec3 blendAdd(vec3 base, vec3 blend, float opacity)
{
	return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}

void main()
{

    vec4 color = vec4(0.0);
    color.a = 1.0;

    float iterations = 3.0;

    for(float i = 0.0; i < iterations; i++)
    {
        float progress = i / (iterations - 1.0);

        float intensity = 1.0 - ((vUv.y - progress) * iterations) * 0.5;
        intensity = smoothstep(0.0, 1.0, intensity);

        vec2 uv = vUv;
        uv.y *= 2.0;
        uv.x += uTime / ((i * 10.0) + 1.0);

        
        

        vec3 ringColor = mix(uInnerColor, uOuterColor, progress);

        float noiseIntensity = texture(uNoiseTexture, uv).r;

        ringColor = mix(vec3(0.0), ringColor.rgb, noiseIntensity * intensity);

        color.rgb = blendAdd(color.rgb, ringColor);
    }

    float edgesAttenuation = min(inverseLerp(vUv.y, 0.0, 0.02), inverseLerp(vUv.y, 1.0, 0.5));
    

    color.rgb = mix(vec3(0.0), color.rgb, edgesAttenuation);

    
    pc_FragColor = color;
}`;function H_(){return new jn({glslVersion:Tn,side:cn,blending:Sr,depthWrite:!1,depthTest:!1,transparent:!0,uniforms:{uTime:{value:0},uNoiseTexture:{value:null},uInnerColor:{value:new de("#ff8080")},uOuterColor:{value:new de("#3633ff")}},vertexShader:V_,fragmentShader:G_})}var W_=`#define PI 3.1415926538

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;
uniform float uViewHeight;
uniform float uSize;

in float position;
in float aSize;
in float aRandom;

out vec3 vColor;

void main()
{
    
    float concentration = 0.05;
    float outerProgress = smoothstep(0.0, 1.0, position);
    outerProgress = mix(concentration, outerProgress, pow(aRandom, 1.7));
    float radius = 1.0 + outerProgress * 5.0;
    
    float angle = outerProgress - uTime * (1.0 - outerProgress) * 3.0;
    vec3 newPosition = vec3(
        sin(angle) * radius,
        0.0,
        cos(angle) * radius
    );
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;

    gl_PointSize = aSize * uSize * uViewHeight;
    gl_PointSize *= (1.0 / - modelViewPosition.z);

    vColor = mix(uInnerColor, uOuterColor, outerProgress);
}`,j_=`precision highp float;
precision highp int;

layout(location = 0) out vec4 pc_FragColor;

in vec3 vColor;

void main()
{
    
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if(distanceToCenter > 0.5)
        discard;

    pc_FragColor = vec4(vColor, 0.5);
    
}`;function X_(){return new jn({glslVersion:Tn,blending:Sr,depthWrite:!1,depthTest:!1,transparent:!0,uniforms:{uTime:{value:0},uInnerColor:{value:new de("#ff8080")},uOuterColor:{value:new de("#3633ff")},uViewHeight:{value:1024},uSize:{value:.015}},vertexShader:W_,fragmentShader:j_})}var q_=`uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

in vec3 position;
in vec2 uv;

out vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`,$_=`precision highp float;
precision highp int;

in vec2 vUv;

layout(location = 0) out vec4 pc_FragColor;

float inverseLerp(float v, float minValue, float maxValue)
{
    return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax)
{
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}

void main()
{
    float distanceToCenter = length(vUv - 0.5);
    float radialStrength = remap(distanceToCenter, 0.0, 0.15, 1.0, 0.0);
    radialStrength = smoothstep(0.0, 1.0, radialStrength);

    
    

    float strength = radialStrength;
    
    pc_FragColor = vec4(strength, 1.0, 1.0, 1.0);
}`;function Y_(){return new jn({glslVersion:Tn,side:cn,transparent:!0,uniforms:{},vertexShader:q_,fragmentShader:$_})}var K_=`uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

in vec3 position;
in vec2 uv;

out vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`,Z_=`precision highp float;
precision highp int;

in vec2 vUv;

layout(location = 0) out vec4 pc_FragColor;

float inverseLerp(float v, float minValue, float maxValue)
{
    return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax)
{
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}

void main()
{
    float distanceToCenter = length(vUv - 0.5);
    float radialStrength = remap(distanceToCenter, 0.0, 0.15, 1.0, 0.0);
    radialStrength = smoothstep(0.0, 1.0, radialStrength);

    float alpha = smoothstep(0.0, 1.0, remap(distanceToCenter, 0.4, 0.5, 1.0, 0.0));

    pc_FragColor = vec4(radialStrength, 0.0, 0.0, alpha);
}`;function J_(){return new jn({glslVersion:Tn,side:cn,transparent:!0,uniforms:{},vertexShader:K_,fragmentShader:Z_})}class Q_{constructor(){this.experience=new Zt,this.config=this.experience.config,this.scenes=this.experience.scenes,this.time=this.experience.time,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.renderer=this.experience.renderer,this.noises=new br,this.setCommonUniforms(),this.setParticles(),this.setDisc(),this.setDistortion()}setCommonUniforms(){var e;this.commonUniforms={},this.commonUniforms.uInnerColor={value:new de("#ff8080")},this.commonUniforms.uOuterColor={value:new de("#3633ff")},this.debug.active&&((e=this.debug.ui.getFolder("blackhole")).addColor(this.commonUniforms.uInnerColor,"value"),e.addColor(this.commonUniforms.uOuterColor,"value"))}setDisc(){this.disc={},this.disc.geometry=new ho(5,1,0,64,10,!0),this.disc.noiseTexture=this.noises.create(128,128),this.disc.material=new H_,this.disc.material.uniforms.uNoiseTexture.value=this.disc.noiseTexture,this.disc.material.uniforms.uInnerColor=this.commonUniforms.uInnerColor,this.disc.material.uniforms.uOuterColor=this.commonUniforms.uOuterColor,this.disc.mesh=new Qe(this.disc.geometry,this.disc.material),this.scenes.space.add(this.disc.mesh)}setParticles(){this.particles={},this.particles.count=5e4;var t=new Float32Array(this.particles.count),i=new Float32Array(this.particles.count),r=new Float32Array(this.particles.count);for(let e=0;e<this.particles.count;e++)t[e]=Math.random(),i[e]=Math.random(),r[e]=Math.random();this.particles.geometry=new ct,this.particles.geometry.setAttribute("position",new Xe(t,1)),this.particles.geometry.setAttribute("aSize",new Xe(i,1)),this.particles.geometry.setAttribute("aRandom",new Xe(r,1)),this.particles.material=new X_,this.particles.material.uniforms.uViewHeight.value=this.renderer.composition.space.height,this.particles.material.uniforms.uInnerColor=this.commonUniforms.uInnerColor,this.particles.material.uniforms.uOuterColor=this.commonUniforms.uOuterColor,this.particles.points=new co(this.particles.geometry,this.particles.material),this.particles.points.frustumCulled=!1,this.scenes.space.add(this.particles.points)}setDistortion(){this.distortion={},this.distortion.active={},this.distortion.active.geometry=new Gn(1,1),this.distortion.active.material=new Y_,this.distortion.active.mesh=new Qe(this.distortion.active.geometry,this.distortion.active.material),this.distortion.active.mesh.scale.set(10,10,10),this.scenes.distortion.add(this.distortion.active.mesh),this.distortion.mask={},this.distortion.mask.geometry=new Gn(1,1),this.distortion.mask.material=new J_,this.distortion.mask.mesh=new Qe(this.distortion.mask.geometry,this.distortion.mask.material),this.distortion.mask.mesh.scale.set(10,10,10),this.distortion.mask.mesh.rotation.x=.5*Math.PI,this.scenes.distortion.add(this.distortion.mask.mesh)}resize(){this.particles.material.uniforms.uViewHeight.value=this.sizes.height}update(){var e=new P(0,0,0);e.project(this.camera.instance),e.x=.5*e.x+.5,e.y=.5*e.y+.5,this.disc.material.uniforms.uTime.value=this.time.elapsed,this.particles.material.uniforms.uTime.value=this.time.elapsed+9999,this.distortion.active.mesh.lookAt(this.camera.instance.position),this.renderer.composition.final.material.uniforms.uBlackHolePosition.value.set(e.x,e.y)}}var ex=`#define PI 3.1415926538

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;
uniform float uViewHeight;
uniform float uSize;

in vec3 position;
in float aSize;
in vec3 aColor;

out vec3 vColor;

void main()
{
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;

    gl_PointSize = aSize * uSize * uViewHeight;
    

    vColor = aColor;
}`,tx=`precision highp float;
precision highp int;

layout(location = 0) out vec4 pc_FragColor;

in vec3 vColor;

void main()
{
    
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if(distanceToCenter > 0.5)
        discard;

    pc_FragColor = vec4(vColor, 1.0);
    
}`;function nx(){return new jn({glslVersion:Tn,depthWrite:!1,depthTest:!1,uniforms:{uViewHeight:{value:1024},uSize:{value:.001}},vertexShader:ex,fragmentShader:tx})}class ix{constructor(){this.experience=new Zt,this.config=this.experience.config,this.scenes=this.experience.scenes,this.time=this.experience.time,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.renderer=this.experience.renderer,this.setParticles()}setParticles(){this.particles={},this.particles.count=5e4;var t=new Float32Array(3*this.particles.count),i=new Float32Array(this.particles.count),r=new Float32Array(3*this.particles.count);for(let e=0;e<this.particles.count;e++){var n=3*e,a=2*Math.PI*Math.random(),s=Math.acos(2*Math.random()-1),o=Math.cos(a)*Math.sin(s)*400,a=Math.sin(a)*Math.sin(s)*400,s=400*Math.cos(s),o=(t[0+n]=o,t[1+n]=a,t[2+n]=s,i[e]=Math.random(),new de(`hsl(${Math.round(360*Math.random())}, 100%, 80%)`));r[0+n]=o.r,r[1+n]=o.g,r[2+n]=o.b}this.particles.geometry=new ct,this.particles.geometry.setAttribute("position",new Xe(t,3)),this.particles.geometry.setAttribute("aSize",new Xe(i,1)),this.particles.geometry.setAttribute("aColor",new Xe(r,3)),this.particles.material=new nx,this.particles.material.uniforms.uViewHeight.value=this.renderer.composition.space.height,this.particles.points=new co(this.particles.geometry,this.particles.material),this.particles.points.frustumCulled=!1,this.scenes.space.add(this.particles.points)}resize(){this.particles.material.uniforms.uViewHeight.value=this.sizes.height}update(){}}class sx{constructor(e){this.experience=new Zt,this.config=this.experience.config,this.scenes=this.experience.scenes,this.resources=this.experience.resources,this.blackHole=new Q_,this.stars=new ix}resize(){this.blackHole&&this.blackHole.resize()}update(){this.blackHole&&this.blackHole.update()}destroy(){}}var rx=[{name:"base",data:{},items:[]}];const Ts=class{constructor(e={}){if(Ts.instance)return Ts.instance;(Ts.instance=this).targetElement=e.targetElement,this.targetElement?(this.time=new Y0,this.sizes=new K0,this.setConfig(),this.setDebug(),this.setScenes(),this.setCamera(),this.setRenderer(),this.setResources(),this.setWorld(),this.sizes.on("resize",()=>{this.resize()}),this.update()):console.warn("Missing 'targetElement' property")}setConfig(){this.config={},this.config.pixelRatio=Math.min(Math.max(window.devicePixelRatio,1),2);var e=this.targetElement.getBoundingClientRect();this.config.width=e.width,this.config.height=e.height||window.innerHeight}setDebug(){this.debug=new dv}setScenes(){this.scenes={},this.scenes.space=new ws,this.scenes.distortion=new ws,this.scenes.overlay=new ws}setCamera(){this.camera=new O_}setRenderer(){this.renderer=new N_({rendererInstance:this.rendererInstance}),this.targetElement.appendChild(this.renderer.instance.domElement)}setResources(){this.resources=new P_(rx)}setWorld(){this.world=new sx}update(){this.stats&&this.stats.update(),this.world&&this.world.update(),this.camera.update(),this.renderer&&this.renderer.update(),window.requestAnimationFrame(()=>{this.update()})}resize(){var e=this.targetElement.getBoundingClientRect();this.config.width=e.width,this.config.height=e.height,this.config.pixelRatio=Math.min(Math.max(window.devicePixelRatio,1),2),this.camera&&this.camera.resize(),this.renderer&&this.renderer.resize(),this.world&&this.world.resize()}destroy(){}};let Zt=Ts;Xr(Zt,"instance"),new Zt({targetElement:document.querySelector(".experience")});