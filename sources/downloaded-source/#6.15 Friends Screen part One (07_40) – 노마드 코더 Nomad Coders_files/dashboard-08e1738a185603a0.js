(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8026,811],{5058:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(39085)}])},51609:function(e,n,s){"use strict";var t=s(85893);n.Z=function(e){var n=e.badges,s=e.size,r=void 0===s?"base":s,l=e.gridCols,i=void 0===l?"grid-cols-5":l;return(0,t.jsx)("div",{className:"grid ".concat(i," gap-2 "),children:n.map((function(e,n){return(0,t.jsxs)("div",{className:"flex flex-col items-center relative",children:[(0,t.jsx)("img",{src:e.image||"",className:"".concat("base"===r?"w-16 h-16":""," ").concat("lg"===r?"w-20 h-20":""," border-4 border-white rounded-full shadow-md ").concat(e.isUnlocked?"opacity-100":"opacity-50")}),!e.isUnlocked&&(0,t.jsx)("div",{className:"bg-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4",children:(0,t.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-3 h-3 text-white",children:(0,t.jsx)("path",{d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd",fillRule:"evenodd"})})}),(0,t.jsx)("span",{className:" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md",children:e.name})]},n)}))})}},22989:function(e,n,s){"use strict";var t=s(85893),r=s(25675),l=s(41664),i=s(11163),a=s(87379),o=s(22184);function d(){var e,n,s=(e=["\n  ",";\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return d=function(){return s},s}var c=a.ZP.div.withConfig({componentId:"sc-b7b5cd5b-0"})(d(),(function(e){return e.clickeable?"\n    cursor:pointer;\n    &:hover {\n    .bg {\n      transform: translateY(-5px);\n    }\n    .info {\n      transform: translateY(-10px);\n    }\n    .xx img {\n      transform: scale(1.1);\n    }\n    \n  }\n  .xx img {\n     transition: transform 0.2s ease-in-out;\n    }\n  ":""}));n.Z=function(e){var n=e.course,s=e.clickeable,a=void 0===s||s;return(0,t.jsxs)(c,{onClick:function(){if(a&&!(null===n||void 0===n?void 0:n.isComingSoon)){(null===n||void 0===n?void 0:n.isEnrolled)?i.default.push("/[course]/lobby","/".concat(null===n||void 0===n?void 0:n.slug,"/lobby")):i.default.push("/".concat(null===n||void 0===n?void 0:n.slug));window.scrollTo(0,0)}},className:"flex flex-col relative rounded-lg items-center",clickeable:a&&!(null===n||void 0===n?void 0:n.isComingSoon),children:[(null===n||void 0===n?void 0:n.level)&&(0,t.jsx)("span",{style:{position:"absolute",top:10,left:10},className:"inline-flex  items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5 ".concat("\uace0\uae09"===n.level.name?"bg-purple-100 text-purple-500":""," ").concat("\uc911\uae09"===n.level.name?"bg-green-100 text-green-500":"","\n            ").concat("\ucd08\uae09"===n.level.name?"bg-yellow-100 text-yellow-600":""," shadow"),children:null===n||void 0===n?void 0:n.level.name}),n?(0,t.jsx)("div",{style:{transition:"transform 0.2s ease-in-out"},className:"overflow-hidden xx relative aspect-w-16 aspect-h-9 h-auto rounded-lg w-full shadow-lg",children:(0,t.jsx)(r.default,{src:null===n||void 0===n?void 0:n.thumbnail,layout:"fill",className:"rounded-lg"})}):null,(0,t.jsx)("div",{className:"text-center info shadow-xl flex flex-col w-11/12 justify-center relative bg-white -top-14 rounded-lg z-0 py-5 px-2",style:{transition:"transform 0.2s ease-in-out",textOverflow:"ellipsis",maxHeight:106},children:(null===n||void 0===n?void 0:n.isComingSoon)?(0,t.jsxs)("div",{className:"px-4",children:[(0,t.jsx)("h3",{className:"text-xl overflow-hidden",children:n?n.name:"Loading..."}),(0,t.jsx)("h4",{className:"mt-2 mb-1",children:"Coming Soon"})]}):(null===n||void 0===n?void 0:n.isEnrolled)?a?(0,t.jsx)(l.default,{href:"/[course]/lobby",as:"/".concat(null===n||void 0===n?void 0:n.slug,"/lobby"),children:(0,t.jsxs)("a",{className:"px-4",children:[(0,t.jsx)("h3",{className:"text-xl overflow-hidden mb-5 w-full",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:null===n||void 0===n?void 0:n.name}),(0,t.jsx)(o.Z,{progress:(null===n||void 0===n?void 0:n.progress)||0,progressLectures:(null===n||void 0===n?void 0:n.progressLectures)||0})]})}):(0,t.jsxs)("div",{className:"px-4",children:[(0,t.jsx)("h3",{className:"text-xl overflow-hidden mb-5",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:null===n||void 0===n?void 0:n.name}),(0,t.jsx)(o.Z,{progress:(null===n||void 0===n?void 0:n.progress)||0,progressLectures:(null===n||void 0===n?void 0:n.progressLectures)||0})]}):a?(0,t.jsx)(l.default,{href:"/".concat(null===n||void 0===n?void 0:n.slug),children:(0,t.jsxs)("a",{children:[(0,t.jsx)("h3",{className:"text-xl overflow-hidden",children:n?n.name:"Loading..."}),(null===n||void 0===n?void 0:n.subtitleOne)&&(0,t.jsx)("h4",{className:"mt-2 mb-1 whitespace-nowrap",children:null===n||void 0===n?void 0:n.subtitleOne}),(null===n||void 0===n?void 0:n.subtitleTwo)&&(0,t.jsx)("h4",{className:"text-sm",children:null===n||void 0===n?void 0:n.subtitleTwo})]})}):(0,t.jsxs)("span",{children:[(0,t.jsx)("h3",{className:"text-xl overflow-hidden",children:n?n.name:"Loading..."}),(null===n||void 0===n?void 0:n.subtitleOne)&&(0,t.jsx)("h4",{className:"mt-2 mb-1",children:null===n||void 0===n?void 0:n.subtitleOne}),(null===n||void 0===n?void 0:n.subtitleTwo)&&(0,t.jsx)("h4",{className:"text-sm",children:null===n||void 0===n?void 0:n.subtitleTwo})]})})]})}},80811:function(e,n,s){"use strict";s.r(n);var t=s(85893),r=s(22989);n.default=function(e){var n=e.courses;return(0,t.jsx)("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 pb-10",children:null===n||void 0===n?void 0:n.map((function(e){return(0,t.jsx)(r.Z,{course:e},null===e||void 0===e?void 0:e.slug)}))})}},91307:function(e,n,s){"use strict";s.d(n,{A:function(){return a}});var t=s(85893),r=s(52165),l=s(68810),i=s(41664),a=function(e){var n=e.hasPythonDate,s=void 0!==n&&n,l=e.hit,a=l.title,o=l.status,d=l.created,c=l.modified,u=l.lecture_course,m=l.lecture_id,x=l.objectID;return(0,t.jsxs)("div",{className:"bg-white shadow-sm mb-3 flex items-start w-full rounded-md py-3 px-5",children:[(0,t.jsxs)("div",{className:"mr-3",children:["open"===o&&(0,t.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-6 h-6 text-green-400",children:(0,t.jsx)("path",{d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"})}),"solved"===o&&(0,t.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-6 h-6 text-indigo-600",children:(0,t.jsx)("path",{d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd",fillRule:"evenodd"})})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)(i.default,{href:"/[course]/lectures/[id]/issues/[issueId]",as:"/".concat(u,"/lectures/").concat(m,"/issues/").concat(x),children:(0,t.jsx)("a",{className:"font-medium hover:text-blue-700 cursor-pointer",children:a})}),(0,t.jsxs)("span",{className:"text-sm text-gray-500",children:["#",x," ",o,"open"===o&&"ed"," ","open"===o?r.WU(s?d:1e3*d):r.WU(s?d:1e3*c)," "]})]})]})};n.Z=(0,l.Z)(a)},91982:function(e,n,s){"use strict";var t=s(85893),r=s(51417),l=s(92814);n.Z=function(e){var n=e.username;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.G,{icon:r.zhw}),(0,t.jsx)("a",{className:"ml-1 hover:underline",target:"_blank",href:"https://github.com/".concat(n),children:n})]})}},22184:function(e,n,s){"use strict";var t=s(85893);n.Z=function(e){var n=e.progress,s=e.progressLectures,r=function(){if(0!==n&&0!==s){var e=Math.floor(n/s*100);return e>100?100:e}return 0};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"h-3 w-full bg-blue-200 rounded-full relative",children:(0,t.jsx)("div",{className:"h-3 bg-blue-700 rounded-full",style:{width:"".concat(r(),"%")}})}),(0,t.jsxs)("span",{className:"mt-3 text-md font-medium block",children:[r(),"% complete"]})]})}},96586:function(e,n,s){"use strict";var t=s(34051),r=s.n(t),l=s(85893),i=s(67294),a=s(11163),o=s(79442),d=s(62286),c=s(49384);function u(e,n,s,t,r,l,i){try{var a=e[l](i),o=a.value}catch(d){return void s(d)}a.done?n(o):Promise.resolve(o).then(t,r)}n.Z=function(e){var n=e.children,s=function(){var e,n=(e=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,d.parseCookies)(null)[c.YN]){e.next=4;break}throw Error();case 4:return e.next=6,(0,o.jl)();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}throw Error();case 9:e.next=15;break;case 11:e.prev=11,e.t1=e.catch(0),(0,d.destroyCookie)(null,c.YN),a.default.push("/login");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var n=this,s=arguments;return new Promise((function(t,r){var l=e.apply(n,s);function i(e){u(l,t,r,i,a,"next",e)}function a(e){u(l,t,r,i,a,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,i.useEffect)((function(){s()}),[]),(0,l.jsx)(l.Fragment,{children:n})}},33306:function(e,n,s){"use strict";s.d(n,{xe:function(){return g},ZS:function(){return b},hq:function(){return j},Gs:function(){return y},yG:function(){return w},_R:function(){return N},Qs:function(){return C},AY:function(){return k},NL:function(){return P},sN:function(){return O},q8:function(){return z}});var t=s(19989);function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=r(["\n  fragment CourseCard on CourseType {\n    name\n    progress\n    progressLectures\n    isEnrolled\n    isFree\n    isReward\n    isComingSoon\n    slug\n    thumbnail\n    subtitleOne\n    subtitleTwo\n    promptChallenge\n    challengeInfo\n    level {\n      name\n      color\n    }\n    badges {\n      id\n    }\n  }\n"]);return l=function(){return e},e}function i(){var e=r(["\n  fragment CommentReplyParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    content\n    isOwner\n    created\n  }\n"]);return i=function(){return e},e}function a(){var e=r(["\n  fragment CommentParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    parent {\n      id\n    }\n    isUpvoted\n    upvotes\n    content\n    isOwner\n    created\n    isTestimonial\n    replies {\n      ...CommentReplyParts\n    }\n  }\n  ","\n"]);return a=function(){return e},e}function o(){var e=r(["\n  fragment IssueCommentParts on IssueCommentType {\n    id\n    comment\n    isSolution\n    isOwner\n    created\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n  }\n"]);return o=function(){return e},e}function d(){var e=r(["\n  fragment ChallengeCard on ChallengeType {\n    name\n    slug\n    batch\n    duration\n    inProgress\n    comingSoon\n    finished\n    canEnroll\n    startDate\n    isEnrolled\n    isWaiting\n    isCompleted\n    isOnReview\n    challengersNumber\n    waitingNumber\n    assignmentsNumber\n    currentDay\n    inBufferZone\n    nextStartDate\n    course {\n      name\n      subtitleOne\n      slug\n      thumbnail\n      progressLectures\n      isEnrolled\n      promptChallenge\n    }\n    unlocks {\n      image\n    }\n  }\n"]);return d=function(){return e},e}function c(){var e=r(["\n  fragment ReportParts on ReportType {\n    assignments {\n      number\n    }\n    progressList {\n      user {\n        username\n      }\n      submissions {\n        url\n        quizResponse {\n          totalScore\n        }\n      }\n    }\n  }\n"]);return c=function(){return e},e}function u(){var e=r(["\n  fragment CouponParts on CouponType {\n    created\n    discountAmount\n    used\n    id\n    isExpired\n    expirationDate\n  }\n"]);return u=function(){return e},e}function m(){var e=r(["\n  fragment NoteParts on NoteType {\n    id\n    content\n    minutes\n    seconds\n    created\n  }\n"]);return m=function(){return e},e}function x(){var e=r(["\n  fragment CategoryParts on CategoryType {\n    name\n    id\n    slug\n    isPublic\n    tagline\n    totalThreads\n  }\n"]);return x=function(){return e},e}function h(){var e=r(["\n  fragment ThreadParts on ThreadType {\n    id\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n    category {\n      name\n    }\n    title\n    isPinned\n    totalVotes\n    totalReplies\n    isOwner\n    isUpvoted\n    created\n    showing\n    preview\n  }\n"]);return h=function(){return e},e}function f(){var e=r(["\n  fragment ReplyParts on ReplyType {\n    id\n    user {\n      username\n      avatar\n      tier\n    }\n    payload\n    isPinned\n    totalVotes\n    isOwner\n    isUpvoted\n    created\n    totalReplies\n    replies {\n      user {\n        username\n        avatar\n      }\n      id\n      created\n      isOwner\n      payload\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=r(["\n  fragment ThreadPreview on ThreadType {\n    id\n    title\n    totalVotes\n    totalReplies\n    interviewImage\n  }\n"]);return v=function(){return e},e}var g=(0,t.Ps)(l()),p=(0,t.Ps)(i()),b=(0,t.Ps)(a(),p),j=(0,t.Ps)(o()),y=(0,t.Ps)(d()),w=(0,t.Ps)(c()),N=(0,t.Ps)(u()),C=(0,t.Ps)(m()),k=(0,t.Ps)(x()),P=(0,t.Ps)(h()),O=(0,t.Ps)(f()),z=(0,t.Ps)(v())},17288:function(e,n){"use strict";n.Z=function(){return!1}},28879:function(e,n,s){"use strict";var t=s(67294),r=s(49384),l=s(62286);n.Z=function(){var e=(0,t.useState)(r.YN in(0,l.parseCookies)()),n=e[0];e[1];return n}},39085:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return J}});var t=s(85893),r=s(28879),l=s(33306),i=s(19989),a=s(71641),o=s(67294),d=s(95717),c=s(96586),u=s(3761),m=s(80811),x=s(41664),h=function(e){var n=e.text,s=e.link,r=e.url;return(0,t.jsx)("div",{className:"bg-gray-100 sm:rounded-lg shadow-inner ",children:(0,t.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[(0,t.jsx)("div",{className:"max-w-xl leading-5 text-gray-800",children:(0,t.jsxs)("p",{children:[n,"."]})}),s&&r&&(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)("span",{className:"inline-flex rounded-md shadow-sm",children:(0,t.jsx)(x.default,{href:r,children:(0,t.jsxs)("a",{className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-400 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",children:[s," \u2192"]})})})})]})})},f=function(e){var n=e.courses;return n&&n.length>0?(0,t.jsx)(m.default,{courses:n}):(0,t.jsx)(h,{text:"\uc218\uac15 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",link:"Find one now",url:"/courses"})},v=s(91307);function g(){var e,n,s=(e=["\n  query myIssues {\n    me {\n      issues {\n        id\n        title\n        created\n        modified\n        status\n        course {\n          slug\n        }\n        lecture {\n          id\n        }\n      }\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return g=function(){return s},s}var p=(0,i.Ps)(g()),b=function(){var e,n=(0,a.a)(p).data;return(null===n||void 0===n||null===(e=n.me)||void 0===e?void 0:e.issues)?(0,t.jsxs)(t.Fragment,{children:[0===n.me.issues.length&&(0,t.jsx)(h,{text:"\uc0dd\uc131\ub41c \uc774\uc288\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),n.me.issues.map((function(e){return(0,t.jsx)(v.A,{hasPythonDate:!0,hit:{title:e.title,status:e.status.toLowerCase(),created:e.created,modified:e.modified,lecture_course:e.course.slug,lecture_id:parseInt(e.lecture.id),objectID:e.id}},e.id)}))]}):(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"bg-white shadow-sm px-10 mb-3"}),(0,t.jsx)("div",{className:"bg-white shadow-sm px-10"})]})},j=s(8385),y=s(91982),w=s(51609),N=s(1993),C=s(30693);function k(){var e,n,s=(e=["\n  query myChallenges {\n    me {\n      enrolledChallenges {\n        ...ChallengeCard\n        isBookChallenge\n      }\n      waitlistChallenges {\n        ...ChallengeCard\n        isBookChallenge\n      }\n      completedChallenges {\n        ...ChallengeCard\n        isBookChallenge\n      }\n    }\n  }\n  ","\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return k=function(){return s},s}var P=(0,i.Ps)(k(),l.Gs),O=function(){var e,n,s=(0,a.a)(P).data;return(0,t.jsx)("div",{children:(null===s||void 0===s||null===(e=s.me)||void 0===e?void 0:e.enrolledChallenges)&&s.me.waitlistChallenges?0===(null===s||void 0===s||null===(n=s.me)||void 0===n?void 0:n.enrolledChallenges.length)&&0===s.me.waitlistChallenges.length?(0,t.jsx)(h,{text:"\uc544\uc9c1 \ucc38\uc5ec\ud558\uace0 \uacc4\uc2e0 \ucc4c\ub9b0\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",link:"Find a challenge",url:"/challenges"}):(0,t.jsxs)("div",{children:[(0!==s.me.enrolledChallenges.length||0!==s.me.waitlistChallenges.length)&&(0,t.jsxs)("div",{className:"mb-10 pb-10 flex flex-col items-center",children:[(0,t.jsxs)("div",{className:"flex items-center w-full",children:[(0,t.jsx)("div",{className:"flex-1 border-t border-gray-200"}),(0,t.jsx)("h4",{className:"text-gray-800 bg-white shadow-sm mx-5 py-2 px-5 rounded-md font-medium",children:"Enrolled"}),(0,t.jsx)("div",{className:"flex-1 border-t border-gray-200"})]}),(0,t.jsxs)("div",{className:"max-w-7xl w-full mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-10 pb-10 items-start",children:[s.me.enrolledChallenges.map((function(e,n){return e&&(e.isBookChallenge?(0,t.jsx)(C.Z,{challenge:e,tiny:!0},n):(0,t.jsx)(N.default,{showFull:!1,challenge:e},e.slug))})),s.me.waitlistChallenges.map((function(e,n){return e&&(e.isBookChallenge?(0,t.jsx)(C.Z,{challenge:e,tiny:!0},n):(0,t.jsx)(N.default,{showFull:!1,challenge:e},e.slug))}))]})]}),0!==s.me.completedChallenges.length&&(0,t.jsxs)("div",{className:"mb-10 pb-10 flex flex-col items-center",children:[(0,t.jsxs)("div",{className:"flex items-center w-full",children:[(0,t.jsx)("div",{className:"flex-1 border-t border-gray-200"}),(0,t.jsx)("h4",{className:"text-gray-800 bg-white shadow-sm mx-5 py-2 px-5 rounded-md font-medium",children:"Completed"}),(0,t.jsx)("div",{className:"flex-1 border-t border-gray-200"})]}),(0,t.jsx)("div",{className:"max-w-7xl w-full mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-10 pb-10 items-start",children:s.me.completedChallenges.map((function(e,n){return e&&(e.isBookChallenge?(0,t.jsx)(C.Z,{challenge:e,tiny:!0},n):(0,t.jsx)(N.default,{showFull:!1,challenge:e},e.slug))}))})]})]}):null})};function z(){var e,n,s=(e=["\n  query paymentHistory {\n    paymentHistory {\n      created\n      provider\n      amount\n      status\n      course {\n        slug\n        name\n      }\n      receiptUrl\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return z=function(){return s},s}var T=(0,i.Ps)(z()),Z=function(){var e,n,s=(0,a.a)(T,{fetchPolicy:"cache-and-network"}).data;return(null===s||void 0===s?void 0:s.paymentHistory)?(null===s||void 0===s||null===(e=s.paymentHistory)||void 0===e?void 0:e.length)>0?(0,t.jsx)("div",{className:"flex flex-col",children:(0,t.jsx)("div",{className:"-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8",children:(0,t.jsx)("div",{className:"align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200",children:(0,t.jsxs)("table",{className:"min-w-full",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Course"}),(0,t.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),(0,t.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),(0,t.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),(0,t.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Provider"}),(0,t.jsx)("th",{className:"px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Receipt"})]})}),(0,t.jsx)("tbody",{children:null===s||void 0===s||null===(n=s.paymentHistory)||void 0===n?void 0:n.map((function(e,n){var s;return(0,t.jsxs)("tr",{className:n%2!==0?"bg-white":"bg-gray-50",children:[(0,t.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium text-gray-900",children:null===e||void 0===e||null===(s=e.course)||void 0===s?void 0:s.name}),(0,t.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-800",children:["\u20a9",null===e||void 0===e?void 0:e.amount]}),(0,t.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-800",children:new Date(null===e||void 0===e?void 0:e.created).toLocaleString("ko-kr",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric"})}),(0,t.jsx)("td",{className:"px-6 capitalize py-4 whitespace-nowrap text-sm leading-5 text-gray-800",children:null===e||void 0===e?void 0:e.status.toLowerCase()}),(0,t.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-800",children:["NICE"===(null===e||void 0===e?void 0:e.provider)&&"Nice Pay","STRIPE"===(null===e||void 0===e?void 0:e.provider)&&"Stripe","KAKAO"===(null===e||void 0===e?void 0:e.provider)&&"\uce74\uce74\uc624\ud398\uc774"]}),(0,t.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium",children:(null===e||void 0===e?void 0:e.receiptUrl)?(0,t.jsx)("a",{href:null===e||void 0===e?void 0:e.receiptUrl,target:"_blank",className:"text-blue-600 hover:text-blue-900",children:"Link"}):"None"})]},n)}))})]})})})}):(0,t.jsx)(h,{text:"\uacb0\uc81c\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"}):null},E=s(92814),R=s(51436),S=function(e){var n=e.discount,s=e.isUsed,r=e.expirationDate,l=e.isExpired;return(0,t.jsxs)("div",{className:"bg-white shadow-md px-5 pt-6 pb-2  text-gray-700 rounded-lg mb-5 flex flex-col justify-between w-full ".concat(s||l?" opacity-75 ring-1 ring-black ring-opacity-5":""),children:[(0,t.jsxs)("div",{className:"flex justify-center items-start mb-5",children:[(0,t.jsx)(E.G,{icon:R.mG2,size:"2x",className:"transform rotate-90 text-gray-400"}),(0,t.jsxs)("div",{className:"flex ml-2 flex-col -mt-3",children:[(0,t.jsxs)("span",{className:"text-3xl font-semibold ",children:[n,"%"]}),(0,t.jsx)("span",{className:"text-sm -mt-1 font-medium",children:"Discount"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)("span",{className:" ".concat(s||l?"bg-gray-200":"bg-green-500"," relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring  focus:ring-blue-400"),children:(0,t.jsxs)("span",{className:"".concat(s||l?"translate-x-0":"translate-x-5"," relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"),children:[(0,t.jsx)("span",{className:"".concat(s||l?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100"," absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),children:(0,t.jsx)("svg",{className:"h-3 w-3 text-gray-400",fill:"none",viewBox:"0 0 12 12",children:(0,t.jsx)("path",{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,t.jsx)("span",{className:"".concat(s||l?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200"," absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),children:(0,t.jsx)("svg",{className:"h-3 w-3 text-green-500",fill:"currentColor",viewBox:"0 0 12 12",children:(0,t.jsx)("path",{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"})})})]})}),(s||l)&&(0,t.jsx)("span",{className:"text-gray-600 text-xs mt-2 uppercase font-semibold",children:s?"Used":l?(0,t.jsxs)("div",{className:"mt-2 flex flex-col items-center text-gray-600 text-xs",children:[(0,t.jsx)("span",{className:"uppercase font-semibold",children:"Expired"}),(0,t.jsxs)("span",{className:"font-medium",children:["\uc720\ud6a8\uae30\uac04: ",r]})]}):null}),!s&&!l&&(0,t.jsxs)("div",{className:"mt-2 flex flex-col items-center text-gray-600 text-xs",children:[(0,t.jsx)("span",{className:"uppercase font-semibold",children:"Not used yet"}),(0,t.jsxs)("span",{className:"font-medium text-center",children:["\uc720\ud6a8\uae30\uac04: ",r,(0,t.jsx)("br",{}),"\uc624\ud6c4 11\uc2dc 59\ubd84"]})]})]})]})};function L(){var e,n,s=(e=["\n  query getMyCoupons {\n    myCoupons {\n      ...CouponParts\n    }\n  }\n  ","\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return L=function(){return s},s}var _=(0,i.Ps)(L(),l._R),D=function(){return(0,a.a)(_,{fetchPolicy:"cache-and-network"})},U=function(){var e=D().data;return(null===e||void 0===e?void 0:e.myCoupons)?e.myCoupons.length>0?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-6 gap-5 ",children:e.myCoupons.map((function(e,n){return e&&(0,t.jsx)(S,{created:e.created,isUsed:e.used,isExpired:Boolean(e.isExpired),expirationDate:e.expirationDate,discount:e.discountAmount},n)}))})}):(0,t.jsx)(h,{text:"\ucfe0\ud3f0\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ubb34\ub8cc \ucc4c\ub9b0\uc9c0\uc5d0 \ucc38\uc5ec\ud558\uc154\uc11c \ucfe0\ud3f0\uc744 \uc5bb\uc5b4\ubcf4\uc138\uc694!",link:"Go to challenges",url:"/challenges"}):null},B=s(39425);function I(){var e,n,s=(e=["\n  query myNotes {\n    myNotes {\n      ...NoteParts\n      lecture {\n        id\n        publicName\n        course {\n          slug\n          name\n        }\n      }\n    }\n  }\n  ","\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return I=function(){return s},s}var M=(0,i.Ps)(I(),l.Qs),F=function(){var e,n,s=(0,a.a)(M).data;return 0===(null===s||void 0===s||null===(e=s.myNotes)||void 0===e?void 0:e.length)?(0,t.jsx)(h,{text:"You have no notes yet"}):(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-5",children:null===s||void 0===s||null===(n=s.myNotes)||void 0===n?void 0:n.map((function(e){return e&&(0,t.jsx)("div",{className:" overflow-hidden rounded-md bg-white shadow-md flex flex-col",children:(0,t.jsxs)("div",{className:" flex flex-col",children:[(0,t.jsx)("span",{className:" p-3",children:e.content}),(0,t.jsx)("div",{className:"p-3 border-t border-gray-100 pt-2 flex items-center",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-xs font-medium mb-1 text-gray-600",children:e.lecture.course.name}),(0,t.jsx)(x.default,{href:"/[course]/lectures/[id]",as:"/".concat(e.lecture.course.slug,"/lectures/").concat(e.lecture.id),children:(0,t.jsxs)("a",{className:"text-xs text-blue-500 font-medium cursor-pointer underline",children:[e.lecture.publicName," \u2192"]})})]})})]})},e.id)}))})},q=function(e){var n,s,r,l,i,a,o,m,h,v,g,p,N=e.currentTab,C=e.onSelectChange,k=e.tabs,P=e.changeTab,z=e.dashboardData,T=e.isEng;return(0,t.jsx)("div",{className:"bg-gray-50",children:(0,t.jsx)(d.default,{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(B.Z,{index:!1,pageTitle:"Dashboard \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",description:"Dashboard",path:"/dashboard"}),(0,t.jsx)(u.default,{children:(0,t.jsxs)("div",{className:"pt-20 pb-56",children:[(0,t.jsx)("h2",{className:"text-2xl font-medium mb-8",children:"Dashboard"}),(0,t.jsxs)("div",{className:"flex flex-col items-center xl:flex-row justify-between xl:items-start",children:[(0,t.jsxs)("div",{className:" w-full md:w-1/2 ",children:[(0,t.jsxs)("div",{className:"bg-white shadow-md rounded-md p-5 max-w-screen-sm w-full",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center md:items-start md:flex-row",children:[(0,t.jsx)(j.Z,{url:null===z||void 0===z||null===(n=z.me)||void 0===n?void 0:n.avatar,className:"w-40",hasLink:!1,xl:!0}),(0,t.jsxs)("div",{className:"md:ml-10 w-full",children:[(null===z||void 0===z?void 0:z.me)&&(0,t.jsxs)("div",{className:"mb-2 md:mb-4",children:[(0,t.jsx)("span",{className:"text-xs text-gray-500 -mb-1 block",children:"Name"}),(0,t.jsx)("h3",{className:"font-medium text-3xl leading-8",children:null===z||void 0===z||null===(s=z.me)||void 0===s?void 0:s.name})]}),(null===z||void 0===z?void 0:z.me)&&(0,t.jsxs)("div",{className:" items-center grid grid-cols-2 mt-1",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-xs text-gray-500 block",children:"Username"}),(0,t.jsx)("h4",{children:null===z||void 0===z||null===(r=z.me)||void 0===r?void 0:r.username})]}),(null===z||void 0===z||null===(l=z.me)||void 0===l?void 0:l.githubUsername)&&(0,t.jsxs)("div",{className:"ml-8",children:[(0,t.jsx)("span",{className:"text-xs text-gray-500 block",children:"Github"}),(0,t.jsx)(y.Z,{username:z.me.githubUsername})]})]})]})]}),(null===z||void 0===z?void 0:z.me)&&(0,t.jsxs)("div",{className:"mt-10 flex justify-center w-full md:w-1/2 ",children:[(0,t.jsx)(x.default,{href:"/my/profile",children:(0,t.jsx)("a",{className:"inline-flex w-full items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-400 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",children:"Edit profile"})}),(0,t.jsx)(x.default,{href:"/users/[username]",as:"/users/".concat(null===z||void 0===z||null===(i=z.me)||void 0===i?void 0:i.username),children:(0,t.jsx)("a",{className:"ml-3 inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150",children:"See Profile"})})]})]}),(null===z||void 0===z?void 0:z.me)&&(0,t.jsxs)("div",{className:" bg-white shadow-md rounded-md p-5 max-w-screen-sm mt-5 flex items-center col-span-2",children:[(0,t.jsx)("div",{className:"mr-5",children:(0,t.jsx)("img",{src:"/badges/shield_".concat(null===z||void 0===z||null===(a=z.me)||void 0===a?void 0:a.tier,".svg"),className:"w-16"})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("span",{className:"mb-2 text-gray-800 text-lg font-medium leading-4",children:["You are level ",null===z||void 0===z||null===(o=z.me)||void 0===o?void 0:o.tier]}),(null===z||void 0===z||null===(m=z.me)||void 0===m?void 0:m.tier)&&(null===z||void 0===z||null===(h=z.me)||void 0===h?void 0:h.tier)>2&&(0,t.jsxs)("span",{className:" text-sm text-\xdfgray-800 font-normal leading-4",children:["Better than ",null===z||void 0===z||null===(v=z.me)||void 0===v?void 0:v.rankingPosition,"% of students!"]}),(null===z||void 0===z||null===(g=z.me)||void 0===g?void 0:g.tier)&&(null===z||void 0===z||null===(p=z.me)||void 0===p?void 0:p.tier)<=2&&(0,t.jsx)("span",{className:" text-sm text-gray-800 font-normal leading-4",children:"Join more courses and complete challenges to unlock the next level!"})]})]})]}),!T&&(0,t.jsxs)("div",{className:"mt-10 xl:mt-0",children:[(null===z||void 0===z?void 0:z.me)&&(null===z||void 0===z?void 0:z.dashboardBadges)&&(0,t.jsx)(w.Z,{badges:z.dashboardBadges.filter((function(e){return e||null}))}),(null===z||void 0===z?void 0:z.me)&&(0,t.jsxs)("div",{className:"mt-10 shadow-inner bg-gray-100 p-3 text-center rounded text-gray-500 text-sm",children:["Join more"," ",(0,t.jsx)(x.default,{href:"/challenges",children:(0,t.jsx)("a",{className:"hover:underline font-medium",children:"challenges"})})," ","to unlock all badges!"]})]})]}),(0,t.jsxs)("div",{className:"mt-28",children:[(0,t.jsx)("div",{className:"sm:hidden",children:(0,t.jsx)("select",{value:N,onChange:C,className:"mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150",children:k.map((function(e,n){return(0,t.jsx)("option",{value:n,children:e},n)}))})}),(0,t.jsx)("div",{className:"hidden sm:block",children:(0,t.jsx)("nav",{className:"flex justify-center",children:k.map((function(e,n){return(0,t.jsx)("span",{onClick:function(){return P(n)},className:" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 ".concat(N===n?"bg-gray-200":""),children:e},n)}))})})]}),(0,t.jsxs)("div",{className:"mt-20",children:[(null===z||void 0===z?void 0:z.me)&&0===N&&(0,t.jsx)(f,{courses:z.me.enrollments.map((function(e){return e.course}))}),T?(0,t.jsxs)(t.Fragment,{children:[1===N&&(0,t.jsx)(b,{}),2===N&&(0,t.jsx)(F,{}),3===N&&(0,t.jsx)(Z,{})]}):(0,t.jsxs)(t.Fragment,{children:[1===N&&(0,t.jsx)(O,{}),2===N&&(0,t.jsx)(b,{}),3===N&&(0,t.jsx)(F,{}),4===N&&(0,t.jsx)(U,{}),5===N&&(0,t.jsx)(Z,{})]})]})]})})]})})})},A=s(17288);function H(){var e,n,s=(e=["\n  query dashboard {\n    me {\n      username\n      avatar\n      name\n      githubUsername\n      rankingPosition\n      tier\n      enrollments {\n        id\n        course {\n          ...CourseCard\n          isComingSoon\n        }\n      }\n    }\n    dashboardBadges {\n      id\n      name\n      image\n      isUnlocked\n    }\n  }\n  ","\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return H=function(){return s},s}var G=(0,i.Ps)(H(),l.xe),V=["My Courses","My Challenges","My Issues","My Notes","My Coupons","My Payment History"],Y=V.filter((function(e){return"My Challenges"!==e&&"My Coupons"!==e})),W=function(){var e=(0,r.Z)(),n=(0,a.a)(G,{skip:!e}).data,s=(0,o.useState)(0),l=s[0],i=s[1],d=function(e){return i(e)},c=(0,A.Z)();return(0,t.jsx)(q,{currentTab:l,onSelectChange:function(e){var n=e.target.value;d(parseInt(n,10))},tabs:c?Y:V,changeTab:d,dashboardData:n,isEng:c})};function J(){return(0,t.jsx)(W,{})}},68810:function(e,n,s){"use strict";var t=s(71773),r=s(95009),l=s(60647);n.Z=(0,t.Z)({displayName:"AlgoliaHits",getProvidedProps:function(e,n,s){var t=(0,r.O7)(s,{ais:e.contextValue,multiIndexContext:e.indexContextValue});if(!t)return{hits:[]};var i=(0,l.RC)(t.hits,t.hitsPerPage,t.page);return{hits:(0,l.Io)(i,t.queryID)}},getSearchParameters:function(e){return e}})}},function(e){e.O(0,[7112,8523,9019,2814,7379,5675,4864,454,6146,859,9774,2888,179],(function(){return n=5058,e(e.s=n);var n}));var n=e.O();_N_E=n}]);