"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8395],{78395:(e,t,i)=>{i.r(t),i.d(t,{SNACKBAR_ID:()=>j,default:()=>A});var a=i(14942),r=i(59496),n=i(14388),o=i(38076),c=i(96370),s=i(22056),l=(i(47408),i(3761),i(97274),i(719),i(76229)),u=i(57571),f=i(33892),d=i(42382);const g="x0qml9Fxu0ogxkqECp1Y",m="J_o8JrT6aPYntoP0sIz9",v="yESP0pTrCYjQ5okB6Kw0";var h=i(4637),b="dialog-robot";var p=function(){var e,t,i=(0,r.useState)(!0),n=(0,a.Z)(i,2),o=n[0],c=n[1];return o?(0,h.jsx)(u.l,{"data-testid":b,id:b,"aria-label":"Dialog robot",dialogTitle:s.ag.get("user-fraud-verification.dialog-alert.title"),colorSet:"invertedLight",className:g,body:(0,h.jsx)(f.D,{as:"p",children:(e=s.ag.get("user-fraud-verification.dialog-alert.describe"),t=function(e){return(0,h.jsx)(l.rU,{to:"/playlist/37i9dQZF1DWUcRrhkfhG22",className:m,children:e},e)},e.split(/(\{0\}.*)\{1\}/).map((function(e){return e.startsWith("{0}")?t(e.split("{0}")[1]):e})))}),footer:(0,h.jsx)(d.D,{className:v,onClick:function(){return c(!1)},children:s.ag.get("user-fraud-verification.dialog-alert.ok")})}):null},x=i(59689),_=i(44488),I=i(39359),k=i(54131),C=i(53401),N=i(99644),T=i(21599),j="snackbar-user-fraud-verification";const A=function(e){var t=e.verificationId,i=(0,r.useState)(!1),l=(0,a.Z)(i,2),u=l[0],f=l[1],d=(0,r.useState)(!1),g=(0,a.Z)(d,2),m=g[0],v=g[1],b=(0,N.s4)(),A=function(){var e=(0,N.s4)();return(0,x.useMutation)({mutationFn:function(e){var t=I.b.getInstance();return(0,k.h)(t,e)},onError:function(t,i){e.send((0,_.b)({id:i,method:"IN_APP_VERIFICATION_V0",error_message:t instanceof C.m?t.message:null,http_method:"put",http_path:"/verification/".concat(i)}))}}).mutate}(),P=function(e){b.send((0,c.h)({id:t,method:"IN_APP_VERIFICATION_V0",action:e})),t&&A(t)};return m?(0,h.jsx)(p,{}):u?(0,h.jsx)(n.A9,{"data-testid":j,className:(0,o.Mg)("announcement"),children:s.ag.get("user-fraud-verification.snackbar.message")}):(0,h.jsx)(T.Q,{"aria-label":s.ag.get("user-fraud-verification.confirm-dialog.title"),titleText:s.ag.get("user-fraud-verification.confirm-dialog.title"),descriptionText:s.ag.get("user-fraud-verification.confirm-dialog.description"),onConfirm:function(){P("human"),f(!0)},onClose:function(){P("robot"),v(!0)},confirmText:s.ag.get("user-fraud-verification.confirm-dialog.confirm"),confirmLabel:s.ag.get("user-fraud-verification.confirm-dialog.label"),cancelText:s.ag.get("user-fraud-verification.confirm-dialog.cancel")})}}}]);
//# sourceMappingURL=8395.js.map