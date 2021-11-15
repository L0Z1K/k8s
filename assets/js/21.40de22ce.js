(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{435:function(t,a,s){t.exports=s.p+"assets/img/empty-dir.260a5393.png"},436:function(t,a,s){t.exports=s.p+"assets/img/hostpath.5403d230.png"},512:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"volume-local"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume-local"}},[t._v("#")]),t._v(" Volume (local)")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("⚡️ 목표")]),t._v(" "),e("p",[t._v("Pod 안의 컨테이너 간 디렉토리를 공유하는 방법과 컨테이너의 특정 디렉토리를 호스트 디렉토리와 연결하는 방법을 알아봅니다.")])]),t._v(" "),e("p",[t._v("지금까지 만들었던 컨테이너는 Pod을 제거하면 컨테이너 내부에 저장했던 데이터도 모두 사라집니다. MySQL과 같은 데이터베이스는 데이터가 유실되지 않도록 반드시 별도의 저장소에 데이터를 저장하고 컨테이너를 새로 만들 때 이전 데이터를 가져와야 합니다.")]),t._v(" "),e("p",[t._v("쿠버네티스는 Volume을 이용하여 컨테이너의 디렉토리를 외부 저장소와 연결하고 다양한 플러그인을 지원하여 흔히 사용하는 대부분의 스토리지를 별도 설정없이 사용할 수 있습니다.")]),t._v(" "),e("p",[t._v("실전에서는 awsElasticBlockStore(aws), azureDisk(azure), gcePersistentDisk(google cloud)와 같은 volume을 사용하지만 이를 테스트하기 위해서는 실제 클라우드를 사용해야 하므로 이번엔 간단하게 로컬 저장소를 사용하는 법만 알아봅니다.")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#volume-만들기"}},[t._v("Volume 만들기")]),e("ul",[e("li",[e("a",{attrs:{href:"#empty-dir"}},[t._v("empty-dir")])]),e("li",[e("a",{attrs:{href:"#hostpath"}},[t._v("hostpath")])])])]),e("li",[e("a",{attrs:{href:"#마무리"}},[t._v("마무리")])]),e("li",[e("a",{attrs:{href:"#참고"}},[t._v("참고")])])])]),e("p"),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("PV/PVC")]),t._v(" "),e("p",[t._v("데이터 저장이 필요한 경우에 흔히 Persistent Volume(PV), Persistent Volume Claim(PVC)를 사용합니다. 이 내용은 실제 클라우드 설정 후 테스트할 예정입니다.")])]),t._v(" "),e("h2",{attrs:{id:"volume-만들기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume-만들기"}},[t._v("#")]),t._v(" Volume 만들기")]),t._v(" "),e("h3",{attrs:{id:"empty-dir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#empty-dir"}},[t._v("#")]),t._v(" empty-dir")]),t._v(" "),e("p",[t._v("Pod 안에 속한 컨테이너 간 디렉토리를 공유하는 방법을 알아봅니다.")]),t._v(" "),e("p",[t._v("보통 사이드카"),e("sup",[t._v("sidecar")]),t._v("라는 패턴에서 사용합니다. 예를 들면, 특정 컨테이너에서 생성되는 로그 파일을 별도의 컨테이너(사이드카)가 수집 할 수 있습니다.")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{width:"280px","max-width":"100%"},attrs:{src:s(435),alt:"empty-dir"}})]),t._v(" "),e("p",[e("code",[t._v("app")]),t._v(" 컨테이너는 "),e("code",[t._v("/var/log/example.log")]),t._v("에 로그 파일을 만들고 "),e("code",[t._v("sidecar")]),t._v(" 컨테이너는 해당 로그 파일을 처리하도록 합니다.")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sidecar\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /bin/sh\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n          while true;\n          do\n            echo "$(date)\\n" >> /var/log/example.log;\n            sleep 1;\n          done')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/log\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sidecar\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/bin/sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tail -f /var/log/example.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/log\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("emptyDir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("code-link",{attrs:{link:"guide/local-volume/empty-dir.yml"}}),t._v(" "),e("p",[t._v("배포 후 "),e("code",[t._v("sidecar")]),t._v("의 로그를 확인합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("kubectl apply -f empty-dir.yml\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sidecar 로그 확인")]),t._v("\nkubectl logs -f sidecar -c sidecar\n")])])]),e("p",[e("code",[t._v("app")]),t._v(" 컨테이너에서 생성한 로그파일을 "),e("code",[t._v("sidecar")]),t._v(" 컨테이너에서 처리하는 모습을 볼 수 있습니다.")]),t._v(" "),e("h3",{attrs:{id:"hostpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hostpath"}},[t._v("#")]),t._v(" hostpath")]),t._v(" "),e("p",[t._v("호스트 디렉토리를 컨테이너 디렉토리에 연결하는 방법을 알아봅니다. 여기서는 호스트의 "),e("code",[t._v("/var/log")]),t._v(" 디렉토리를 연결하여 내용을 확인해 보겠습니다.")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{width:"420px","max-width":"100%"},attrs:{src:s(436),alt:"hostpath"}})]),t._v(" "),e("p",[t._v("호스트의 "),e("code",[t._v("/var/log")]),t._v("를 컨테이너의 "),e("code",[t._v("/host/var/log")]),t._v(" 디렉토리로 마운트합니다.")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("log\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/sh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sleep infinity"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /host/var/log\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/log\n")])])]),e("code-link",{attrs:{link:"guide/local-volume/hostpath.yml"}}),t._v(" "),e("p",[t._v("컨테이너에서 마운트 된 디렉토리를 확인합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("kubectl apply -f hostpath.yml\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 컨테이너 접속 후 /host/var/log 디렉토리를 확인")]),t._v("\nkubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it host-log -- "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al /host/var/log\n")])])]),e("h2",{attrs:{id:"마무리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),e("p",[t._v("쿠버네티스는 volume을 연결하는 방법을 추상화하고 다양한 플러그인을 지원합니다. 따라서, 설정하는 법이 조금 복잡해 보일 수 있지만 한번 Spec을 이해하면 다른 volume도 쉽게 연결할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"참고"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#volume-v1-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("Volume v1 core"),e("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=n.exports}}]);