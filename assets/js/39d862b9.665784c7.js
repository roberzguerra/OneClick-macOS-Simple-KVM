"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[899],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"How to increase screen resolution",permalink:"/docs/resolution/"},s=void 0,u={unversionedId:"guide-screen-resolution",id:"guide-screen-resolution",title:"How to increase screen resolution",description:"1. In the macOS Finder, look for EFI in the left bar under Volumes. If it isn't visible you will have to mount it:",source:"@site/docs/guide-screen-resolution.md",sourceDirName:".",slug:"/guide-screen-resolution",permalink:"/docs/guide-screen-resolution",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/guide-screen-resolution.md",tags:[],version:"current",frontMatter:{title:"How to increase screen resolution",permalink:"/docs/resolution/"},sidebar:"docs",previous:{title:"Guide to PCIe Passthrough (GPU and Sound)",permalink:"/docs/guide-passthrough"},next:{title:"How to increase disk size",permalink:"/docs/guide-resizing"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the macOS Finder, look for ",(0,i.kt)("strong",{parentName:"li"},"EFI")," in the left bar under ",(0,i.kt)("strong",{parentName:"li"},"Volumes"),". If it isn't visible you will have to mount it:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the macOS Terminal and type ",(0,i.kt)("inlineCode",{parentName:"li"},"diskutil list")," and look for the disk/partition location of the EFI. (There may be more than one.)"),(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo diskutil mount diskYsZ"),", using the disk/partition location name where you see EFI. It should look like this:\n",(0,i.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/95918679/152873359-9f3586e9-32f7-411a-8fd7-25c80a94aeec.png",alt:"image"})),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"EFI")," partition will appear in the left Finder bar under ",(0,i.kt)("strong",{parentName:"li"},"Volumes"),"."),(0,i.kt)("li",{parentName:"ul"},"If you don't see anything in that volume after browsing to it, try the other ones that you found in ",(0,i.kt)("inlineCode",{parentName:"li"},"diskutil"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"EFI")," volume, go into the ",(0,i.kt)("inlineCode",{parentName:"li"},"EFI")," directory and then the ",(0,i.kt)("inlineCode",{parentName:"li"},"OC")," directory and open the ",(0,i.kt)("inlineCode",{parentName:"li"},"config.plist")," file in the macOS text editor."),(0,i.kt)("li",{parentName:"ol"},"There should be a section of the file that looks like this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<key>Resolution</key>\n<string>1920x1080@32</string>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edit that to your preferred screen resolution, but leave the @32 part as it is."),(0,i.kt)("li",{parentName:"ul"},"Some odd/intermediate resolutions like 1366\xd7768 may not work well. Try to stick to more common 16:9, 16:10, and 4:3 form factors.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Shut down the VM, relaunch it using ",(0,i.kt)("inlineCode",{parentName:"li"},"basic.sh")," script and follow the following steps:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Escape")," key as soon as the window comes up."),(0,i.kt)("li",{parentName:"ul"},"If you are using virt-manager, you may need to detach the USB keyboard to get to this screen. One you are done editing, re-add the USB keyboard and reboot"),(0,i.kt)("li",{parentName:"ul"},"In the interface that comes up, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Manager"),"->",(0,i.kt)("inlineCode",{parentName:"li"},"OVMF Platform Configuration"),"->",(0,i.kt)("inlineCode",{parentName:"li"},"Change Preferred")," and select the correct resolution."),(0,i.kt)("li",{parentName:"ul"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"F10")," to save the changes."),(0,i.kt)("li",{parentName:"ul"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Escape")," multiple times to come back to main menu, and then select ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue")," on it.")))}d.isMDXComponent=!0}}]);