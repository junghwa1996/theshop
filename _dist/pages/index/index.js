import React from "react";
import ScreenModel from "./ScreenModel";
import { withRouter } from "next/router";
import { sendEvent, ZB_EVENT_TYPE } from "../../src/utils/PinPoint";

import {  isAndroid, isIOS, osName,  browserName } from "react-device-detect";


let bizPlatform = "www";
if (isAndroid) {
   bizPlatform = "and";
}
if (isIOS) {
   bizPlatform = "ios";
}
let business = "";
let mkt = "";
let adId = "";
let user_no = "";

let windowNavigator = global.navigator;
let userPlatform = "www";

try {
	let filter = "win16|win32|win64|mac|macintel";
	let navPlatform = windowNavigator.platform.toLowerCase();
	let navUserAgent = windowNavigator.userAgent.toLowerCase();

	if(filter.indexOf(navPlatform) < 0) {
		if (navUserAgent.match('android') != null) {
			userPlatform = "Android";
		} else if (navUserAgent.match('iphone') != null || navUserAgent.match('ipad') != null || navUserAgent.match('ipod') != null) {
			userPlatform = "iOS";
		} else {
			userPlatform = "m";
		}
	}
} catch(e) {}

const apiEndPoint = "https://apis.zigbang.com/v2/campaign/pre_consulting"; //dev
//const apiEndPoint = "https://apis.zigbang.com/v2/campaign/pre_consulting"; //real
// const apiEndPoint = "https://apis-preview.zigbang.net/v2/campaign/pre_consulting"; //preview

class Register extends React.Component {
  state = {
    loaded: false,
    phone: "",

    isAgreementExtended: false,
    agreement1: false,
    agreement2: false,
    agreement3: false,
    file: null,
    previewImg: null,
	isProcessing: false,
	popTimer: null
  };

  modalRef1 = React.createRef();
  modalRef2 = React.createRef();
  modalRef3 = React.createRef();
  toastRef = React.createRef();

  model = null;
  params = {};

  componentDidMount() {
    this.model = new ScreenModel();
    this.setState({ loaded: true });
    this.getParam();

    setTimeout(() => {
        window && window.parent.postMessage(`onLoadEnd`, "*")
    }, 1000);

    const params = this.model.genQueryParams(this.props.router.asPath);

    var path = this.props.router.asPath;
    if(path.indexOf("?")!=-1){
      path = path.substring(0,path.indexOf("?"));
    }
    var arSplitUrl   = path.split("/");
    var nArLength     = arSplitUrl.length;
	var domain		= this.props.router.query.domain;
	this.state.domain = domain;
    var domain_platform = "";
    var mkt_source = "";

    if(domain){
      if(domain==="zigbang")domain_platform="zb";
      if(domain==="daum")domain_platform="da";
      if(domain==="hogangnono")domain_platform="hg";
    }

    if(params.mkt_source){
       mkt_source=params.mkt_source;
	}
	
    if(params.adId || params.adid) {
		adId=params.adId || params.adid;
    }

    if(params.user_no){
        user_no=params.user_no;
     }

    business=domain_platform+"_"+bizPlatform;
    mkt=mkt_source;
	
    var time = new Date().getTime();
	var headTag = document.getElementsByTagName("body")[0];
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.onload = function() {  };
	newScript.src = '../static/js/common.min.js?ts=' + time;
	headTag.appendChild(newScript);

	// 페이지 진입 시 핀포인트 호출
    sendEvent(ZB_EVENT_TYPE.ZB_SCREEN_VIEW, {
        user_no: user_no,
        adId: adId,
        screen_name: "분양카달로그",
        ad_name: "더샵거제디클리브",
        platform: userPlatform,
        business: business,
        mkt:mkt
	});

	if(adId) {
		var changeUrl = this.updateURLParameter(location.href, 'adid', '');
        history.pushState("","", changeUrl);
	}
  }

  updateURLParameter(url, param, paramVal) {
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor) { 
            additionalURL = TheParams;
        }

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++) {
            if(tempArray[i].split('=')[0] != param) {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    } else {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams) {
            baseURL = TheParams;
        }
    }

    if(TheAnchor) {
        paramVal += "#" + TheAnchor;
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

  /*페이지 렌더*/
  render() {
	const { loaded } = this.state;
	if (!loaded) return <div />;

	return (
        <>
            <div className="momo-wrap">
                <div className="momo-gnb">
                    <button className="btn-gnb-open"><i></i></button>
                    <div className="gnb-open-bg"></div>
                    <div className="gnb-open">
                        <button className="btn-gnb-close"><i></i></button>
                        <ul>
                            <li><a href="javascript:;">HOME</a></li>
                            <li><a href="javascript:;">RENEWAL 3.0</a></li>
                            <li><a href="javascript:;">THE SHARP LIFE</a></li>
                            <li><a href="javascript:;">LOCATION</a></li>
                            <li><a href="javascript:;">GALLERY</a></li>
                            <li><a href="javascript:;">INTERVIEW</a></li>
                            <li><a href="javascript:;">TALK TALK</a></li>
                            <li><a href="javascript:;">MODEL HOUSE</a></li>
                            <li><a href="javascript:;">EVENT</a></li>
                            <li><a href="javascript:;">SUMMARY</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="section kv">
                        <div className="iframe-box">
                            <img src="../static/img/kv_2nd.jpg"/>
                            <iframe id="video01" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/514157521?dnt=1&muted=1" data-idx="0"></iframe>
                            <button type="button" className="btn-sound" data-idx="0" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section emblem">
                        <div className="title-box bg-type1">
                            <div className="marker txt-en type1">RENEWAL 3.0</div>
                            <h2 className="scroll-animate">
                                경남에서 첫 만남<br/>
                                <span>리뉴얼된 더샵</span>
                            </h2>
                            <div className="logo scroll-animate">
                                <img src="../static/img/logo.png" alt=""/>
                            </div>
                            <p className="scroll-animate">더샵이 2021년 새로운 모습으로 거제에<br/>
                                찾아옵니다. 더샵의 차별화된 익스테리어,<br/>
                                단지의 상징이자 자랑이 될<br/>
                                랜드마크 게이트, 세계적인 디자인 거장<br/>
                                알레산드로 멘디니와 개발한 패턴까지<br/>
                                <br/>
                                주거의 本이 될 더샵의<br/>
                                리뉴얼 3.0을 거제에서 만나보세요.
                            </p>
                        </div>
                        <div className="iframe-box scroll-animate">
                            <img src="../static/img/video_thumb_01.jpg"/>
                            <iframe id="video02" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/514160123?dnt=1&muted=1" data-idx="1"></iframe>
                            <button type="button" className="btn-sound" data-idx="0" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section life">
                        <div className="title-box bg-type2">
                            <div className="marker txt-en type2">THE SHARP LIFE</div>
                            <h2 className="scroll-animate">
                                거제에서 만나는<br/>
                                <span>'더샵다움'</span>
                            </h2>
                            <p className="scroll-animate">
                                집이 가져야할 본질적 가치, 그리고 그 안에<br/>
                                담길 라이프스타일을 함께 고민하는<br/>
                                포스코건설 더샵 아파트.<br/>
                                <br/>
                                ‘더샵다움’이란 이런 것입니다.<br/>
                            </p>
                        </div>
                        <div className="img-slider scroll-animate">
                            <div className="slider slider06">
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img3.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-text">
                                <h3>The 고급스러운 외관</h3>
                                <p>알레산드로 멘디니의 독창적인 패턴 디자인</p>
                            </div>
                        </div>
                        <div className="img-slider right scroll-animate">
                            <div className="slider slider06">
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img4.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-text">
                                <h3>The 똑똑한 시스템</h3>
                                <p>아파트 내외부 시스템을 제어할 수 있는 스마트 월</p>
                            </div>
                        </div>
                        <div className="img-slider scroll-animate">
                            <div className="slider slider06">
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img6.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/life-img7.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-text">
                                <h3>The 쾌적한 단지 내부</h3>
                                <p>사계절 내내 맑은공기 가득한 자연친화적 단지</p>
                            </div>
                        </div>
                    </div>

                    <div className="section location">
                        <div className="title-box bg-type1">
                            <div className="marker txt-en type1">LOCATION</div>
                            <h2 className="scroll-animate">
                                새로운 주거타운<br/>
                                <span>랜선 거제 탐방기</span>
                            </h2>
                            <p className="scroll-animate">
                                거제의 중심에 위치한 더샵 거제디클리브.<br/>
                                주변에 편의 시설과 자연 및 교육 환경을 고루<br/>
                                갖추고 새로운 주거 중심지로 발돋움합니다.<br/>
                                거제 상동지구 내 최선호도 지역이자<br/>
                                교통까지 편리한 거제의 중심으로 GO GO!
                            </p>
                        </div>
                        <div className="iframe-box scroll-animate">
                            <img src="../static/img/video_thumb_02.jpg"/>
                            <iframe id="video03" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/514162764?dnt=1&muted=1" data-idx="2"></iframe>
                            <button type="button" className="btn-sound" data-idx="0" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section gallery">
                        <div className="title-box bg-type2">
                            <div className="marker txt-en type2">GALLERY</div>
                        </div>
                        <div className="img-slider scroll-animate">
                            <div className="slider slider01">
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/gallery01.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/gallery02.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/gallery03.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/gallery04.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section interview">
                        <div className="title-box bg-type1">
                            <div className="marker txt-en type1">INTERVIEW</div>
                            <h2 className="scroll-animate">
                                전문가가 말하는 3.0 더샵<br/>
                                <span>비하인드 스토리</span>
                            </h2>
                            <p className="scroll-animate">
                                본격 리뉴얼을 통해 업그레이드된<br/>
                                시스템과 디자인, 더샵 거제디클리브에<br/>
                                적용된 스마트한 기술과 교통 및 개발 호재<br/>
                                등 전문가가 말하는 리뉴얼된 더샵의 진짜<br/>
                                비하인드 스토리를 들어보세요.
                            </p>
                        </div>
                        <div className="iframe-box scroll-animate">
                            <img src="../static/img/video_thumb_03.jpg"/>
                            <iframe id="video04" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/514166486?dnt=1&muted=1" data-idx="3"></iframe>
                            <button type="button" className="btn-sound" data-idx="0" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section qna">
                        <div className="title-box bg-type3">
                            <div className="marker txt-en type3">TALK TALK</div>
                        </div>
                        <ul>
                            <li className="scroll-animate">
                                <p>Q.</p>
                                <p>3.0 더샵에서 리뉴얼된 부분은 무엇인가요?</p>
                            </li>
                            <li className="scroll-animate">
                                <p>A.</p>
                                <p>안전한 주거 환경(Reliable Safety),<br/>
                                    안락한 환경(Comfort), 한층 향상된<br/>
                                    편의 (Enhanced Convenience),<br/>
                                    세련된 디자인 (Refine Design)<br/>
                                    이렇게 4가지를 꼽을 수 있습니다.</p>
                            </li>
                            <li className="scroll-animate">
                                <p>Q.</p>
                                <p> 더샵 거제디클리브에 접목한 AiQ에 대해<br/>
                                    소개해주세요.</p>
                            </li>
                            <li className="scroll-animate">
                                <p>A.</p>
                                <p>앱으로 조명, 난방, 환기 제어 및 주차<br/>
                                    위치, 택배도착, 에너지 사용량 등<br/>
                                    정보를 확인할 수 있습니다. 안면인식<br/>
                                    로비폰, 엘리베이터 살균조명, 공기측정<br/>
                                    LED신호등은 기술을활용해 안전과<br/>
                                    건강 까지 생각한 시스템이죠. </p>
                            </li>
                            <li className="scroll-animate">
                                <p>Q.</p>
                                <p>더샵 거제 디클리브는 어떤 아파트인가요?</p>
                            </li>
                            <li className="scroll-animate">
                                <p>A.</p>
                                <p>거제시 상동동에 들어서는 대단지<br/>
                                    아파트입니다. 단지 인근이 KTX 역사<br/>
                                    후보지에 선정되면서 점점 뜨거운<br/>
                                    감자가 되는 중입니다. </p>
                            </li>
                        </ul>
                    </div>

                    <div className="section contact">
                        <div className="title-box ">
                            <div className="marker txt-en type2">CONTACT</div>
                            <h2 className="scroll-animate">
                                리뉴얼된 3.0 더샵을<br/>
                                <span>만나는 가장 빠른 방법</span>
                            </h2>
                        </div>
                        <div className="content">
                            <div className="contact-img">
                                <img src="../static/img/contact-img.jpg" alt=""/>
                            </div>
                            <ul>
                                <li className="scroll-animate">
                                    <p>사전홍보관</p>
                                    <p>거제시 상동동 448-1, 상가1층</p>
                                </li>
                                <li className="scroll-animate">
                                    <p>현장</p>
                                    <p>경상남도 거제시 상동동 756번지</p>
                                </li>
                                <li className="inquiry scroll-animate">
                                    <p>문의</p>
                                    <p>1661-3007</p>
                                    <p>74㎡ /84㎡ /98㎡</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="section event">
                        <div className="title-box ">
                            <div className="marker txt-en type4">EVENT</div>
                        </div>
                        <div className="img-box">
                            <img src="../static/img/event-bg.jpg" alt=""/>
                        </div>
                        <div className="form-box">
                            <form onSubmit={this.apiSubmit.bind(this)}>
                                <input type="tel" id="phone" className="phone-input" placeholder="휴대폰 번호 입력 (- 제외)" maxLength="11"/>
                                <p className="input-check">※ 본인의 연락처로 작성해 주세요.</p>
                                <ul className="agree-box">
                                    <li>
                                        <input type="checkbox" id="agree01" onClick={event => this.toggleCheckboxAll(event)}/>
                                        <label htmlFor="agree01">모두 동의합니다.</label>
                                        <a href="javascript:;" className="btn-detail-agree"></a>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="agree02" onClick={event => this.toggleCheckbox(event, "agreement1")}/>
                                        <label htmlFor="agree02">개인정보 수집 및 이용 동의(필수)</label>
                                        <a href="javascript:;" className="btn-popup btn-terms terms01">약관보기</a>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="agree03" onClick={event => this.toggleCheckbox(event, "agreement2")}/>
                                        <label htmlFor="agree03">개인정보의 제3자 제공 동의(필수)</label>
                                        <a href="javascript:;" className="btn-popup btn-terms terms02">약관보기</a>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="agree04"onClick={event => this.toggleCheckbox(event, "agreement3")}/>
                                        <label htmlFor="agree04">부동산 정보 및 이벤트 혜택 수신(선택)</label>
                                        <a href="javascript:;" className="btn-popup btn-terms terms03">약관보기</a>
                                    </li>
                                </ul>
                                <div className="btn-wrap">
                                    <button type="submit" className="btn-submit">분양 안내받기</button>
                                    <a href="javascript:;" className="btn-popup btn-notice">이벤트 유의사항 보기</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <footer>
                    <a href="javascript:;" className="btn-go-top">
                        <span>맨위로 올리기</span>
                    </a>
                    
                    <p>컨텐츠에서 사용된 영상과 이미지는 소비자의 이해를 <br/>돕기 위한 것으로 사업과정 및 실제 시공에 따라 변경될 <br/>수 있습니다. 세부적인 내용은 입주자 모집공고와 <br/>모델하우스에서 확인 부탁드립니다.</p>
                    
                    <h4>사업개요</h4>
                    <ul className="desc-list">
                        <li>
                            <strong>사업명</strong>
                            <span>더샵 거제디클리브</span>
                        </li>
                        <li>
                            <strong>위치</strong>
                            <span>경상남도 거제시 상동동 765번지 외 114필지</span>
                        </li>
                        <li>
                            <strong>규모</strong>
                            <span>지하 3층, 지상 1 ~ 25층 / 13개동</span>
                        </li>
                        <li>
                            <strong>세대수</strong>
                            <span>총 1288세대</span>
                        </li>
                        <li>
                            <strong>시공</strong>
                            <span>(주)포스코건설</span>
                        </li>
                        <li>
                            <strong>문의</strong>
                            <span><a href="tel:1661-3007">1661-3007</a></span>
                        </li>
                    </ul>

                    <ul className="desc-list zigbang-info">
                        <li>상호 : (주)직방 | 대표 : 안성우 | 사업자등록번호 : 120-87-61559</li>
                        <li>주소 : 서울특별시 서초구 서초대로 411, 5층(서초동, GT타워)</li>
                        <li>통신판매업 신고번호 : 제2020-서울서초-0852호</li>
                        <li>서비스 이용문의 : 1661-8734 | 이메일 : <a href="mailto:cs@zigbang.com">cs@zigbang.com</a></li>
                        <li>서비스 제휴문의 : <a href="mailto:partnership@zigbang.com">partnership@zigbang.com</a></li>
                        <li>팩스 : 02-568-4908</li>
                    </ul>

                    <span className="copyright">Copyright &copy;2020 ZIGBANG All rights reserved.</span>
                    <div className="logo">
                        <img src="../static/img/logo.png" alt=""/>
                    </div>
                </footer>

                <div className="term-check">필수 약관에 동의해 주세요.</div>

                <div className="layer-popup event">
                    <a href="javascript:;" className="btn-close"><span>레이어 팝업닫기</span></a>

                    <div>
                        <strong>이벤트 참여 유의사항</strong>
                        <ul>
                            <li>본 경품은 퀴즈 이벤트를 신청하신 고객 가운데 추첨을 통해 제공해 드리고 있습니다.</li>
                            <li>경품은 1인당 한 번만 제공되며, 중복으로 증정되지 않습니다.</li>
                            <li>비정상적인 방법으로 참여 시 경품 지급 대상에서 제외됩니다.</li>
                            <li>경품 이미지는 실물과 차이가 있을 수 있으며, 이벤트 주관사인 직방과 호갱노노의 사정에 따라 대체될 수 있습니다.</li>
                            <li>본 이벤트는 고객의 편의를 위해 제세공과금 신고 및 납부를 대행해 드리고 있으며, 세무당국에 신고를 위해 불가피하게 신분증 촬영본의 제출이 필요합니다.</li>
                            <li>신분증 촬영본은 이벤트 당첨 여부 확인과 세무당국 신고 목적 외에는 활용되지 않으며, 목적 달성 즉시 일괄 폐기 처리됩니다.</li>
                            <li>이벤트 문의는 <a href="tel:1833-5023">1833-5023</a>로 전화 주시기 바랍니다. <br/>(전화 가능 시간 평일 10:00~18:00)</li>
                        </ul>
                    </div>
                </div>

                <div className="layer-popup terms terms01">
                    <a href="javascript:;" className="btn-close"><span>레이어 팝업닫기</span></a>

                    <div>
                        <strong>개인정보 수집 및 이용 동의(필수)</strong>

                        <p>(주)직방은 서비스 제공을 위하여 아래와 같이 <br className="m-only"/>개인정보를 수집 및 이용합니다.</p>
                        <p>정보주체는 본 개인정보의 수집 및 이용에 관한 <br className="m-only"/>동의를 거부하실 권리가 있으나, 서비스 제공에 <br className="pc-only"/>필요한 <br className="m-only"/>최소한의 개인정보이므로 동의를 해 주셔야 서비스를 <br className="m-only"/>이용하실 수 있습니다.</p>
                        <p>보다 자세한 내용은 회사의 개인정보처리방침을 <br className="m-only"/>참조하여 주시기 바랍니다.</p>
                        <p>제공해주시는 개인정보는 ‘상담 안내를 요청하기 위한 <br className="m-only"/>용도’의 서비스 제공 목적으로 수집하며 <br className="pc-only"/>이외 <br className="m-only"/>목적으로는 사용되지 않습니다.</p>

                        <dl>
                            <dt>개인정보의 수집 <br className="pc-only"/>이용 목적</dt>
                            <dd>서비스 제공 및 상담, 부정이용 확인 및 방지, <br className="m-only"/>만족도 <br className="pc-only"/>및 설문조사, 본인&middot;연령확인, <br className="m-only"/>신규서비스 개발, 프로모션 안내<br/>문의사항 또는 불만&middot;분쟁처리, 맞춤형 서비스 제공, 서비스 <br className="pc-only"/>개선에 활용, 계정도용 및 부정거래 방지</dd>
                        
                            <dt>수집하는 <br className="pc-only"/>개인정보의 항목</dt>
                            <dd>연락처 (휴대폰 번호 또는 전화번호)</dd>
                        
                            <dt>개인정보의 이용 <br className="pc-only"/>및 보유기간</dt>
                            <dd>서비스 제공 목적 달성 시까지 또는 회원탈퇴 <br className="m-only"/>시 즉시 삭제. <br className="pc-only"/>단, 전자상거래 등에서의 소비자 <br className="m-only"/>보호에 관한 법률 및 관계 <br className="pc-only"/>법령에 따른 보관 <br className="m-only"/>의무가 있을 경우 해당 기간 동안 보관함.</dd>
                        </dl>
                        
                        <p>본 서비스 이용을 위해서 필수적인 동의이므로, <br className="m-only"/>동의를 하지 않으면 해당 서비스를 이용하실 수 <br/>없습니다. 동의를 거부하는 경우에도 다른 직방 <br className="m-only"/>서비스의 이용에는 영향이 없습니다.</p>
                    </div>
                </div>
            
                <div className="layer-popup terms terms02">
                    <a href="javascript:;" className="btn-close"><span>레이어 팝업닫기</span></a>
                        
                    <div>
                        <strong>개인정보의 제3자 제공 동의(필수)</strong>
                        <p>(주)직방은 서비스 제공을 위하여 아래와 같이 <br className="m-only"/>개인정보를 수집 및 이용합니다.</p>
                        <p>정보주체는 본 개인정보의 수집 및 이용에 관한 <br className="m-only"/>동의를 거부하실 권리가 있으나, 서비스 제공에 <br className="pc-only"/>필요한 <br className="m-only"/>최소한의 개인정보이므로 동의를 해주셔야 서비스를 <br className="m-only"/>이용하실 수 있습니다.</p>
                        <p>보다 자세한 내용은 회사의 개인정보처리방침을 <br className="m-only"/>참조하여 주시기 바랍니다.</p>
                        
                        <dl>
                            <dt>개인정보 제공받는 자</dt>
                            <dd>삼성물산㈜, ㈜엠비앤홀딩스</dd>
                            <dt>제공 정보</dt>
                            <dd>휴대폰 번호</dd>
                            <dt>목적</dt>
                            <dd>이용자가 문의한 서비스 제공</dd>
                            <dt>보유 및 이용기간</dt>
                            <dd>서비스 목적 달성 시까지. 단, 전자상거래 <br className="m-only"/>등에서의 <br className="pc-only"/>소비자 보호에 관한 법률 및 관계 <br className="m-only"/>법령에 따른 보관 <br className="pc-only"/>의무가 있을 경우 해당 기간 <br className="m-only"/>동안 보관함.</dd>
                        </dl>
                        
                        <p>본 서비스 이용을 위해서 필수적인 동의이므로, <br className="m-only"/>동의를 하지 않으면 해당 서비스를 이용하실 수 <br/>없습니다. 동의를 거부하는 경우에도 다른 직방 <br className="m-only"/>서비스의 이용에는 영향이 없습니다.</p>
                    </div>
                </div>
            
                <div className="layer-popup terms terms03">
                    <a href="javascript:;" className="btn-close"><span>레이어 팝업닫기</span></a>
                    
                    <div>
                        <strong>부동산 정보 및 이벤트 혜택 수신(선택)</strong>
                        
                        <p>(주)직방은 더 나은 서비스를 제공하고자 광고&middot;마케팅 <br className="m-only"/>목적의 개인정보 수집 및 이용에 대한 <br className="pc-only"/>동의를 받고자 <br className="m-only"/>합니다.</p>
                        <p>수집된 개인 정보는 SMS, PUSH알림 등 영리목적의 <br className="m-only"/>광고성 정보 전달에 활용되거나 영업 및 <br className="pc-only"/>마케팅 <br className="m-only"/>목적으로 활용될 수 있습니다.</p>
                        
                        <dl>
                            <dt>개인정보의 수집 <br className="pc-only"/>이용 목적</dt>
                            <dd>직방 및 제휴사의 상품&middot;서비스에 대한 광고&middot;<br className="m-only"/>홍보&middot;프로모션 <br className="pc-only"/>제공</dd>
                            <dt>수집하는 <br className="pc-only"/>개인정보의 항목</dt>
                            <dd>연락처 (휴대폰 번호 또는 전화번호)</dd>
                        </dl>

                        <p>동의를 거부하시는 경우에도 서비스는 이용이 <br className="m-only"/>가능합니다. 또한, 광고&middot;마케팅 동의는 직방 <br/>고객센터(<a href="tel:1661-8734">1661-8734</a>)를 통해서 언제든지 철회할 수 <br className="m-only"/>있습니다.</p>
                    </div>
                </div>

                <div className="layer-popup finish">
                    <span>이벤트 참여가<br/>완료되었습니다</span>
                    <a href="javascript:;" className="btn-close">닫기</a>
                </div>

                <div className="floating-banner">
                    <a href="javascript:;">INVITATION</a>
                </div>

                <div className="vr-iframe-box rotate">
                    <iframe src="" id="vr-iframe" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                    <a href="javascript:;" className="btn-popup-close m-only"><span>레이어 팝업닫기</span></a>
                </div>
                
                <div className="layer-popup plan-expand">
                    
                    <div className="slider slider04">
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup01.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup02.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup03.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup04.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup05.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup06.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup07.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup08.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup09.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup10.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup11.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup12.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup13.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup14.jpg" alt=""/></div>
                        </div>
                        <div className="slide-content"> 
                            <div className="img-box"><img src="../static/img/popup15.jpg" alt=""/></div>
                        </div>
                    </div>
                    
                    <a href="javascript:;" className="btn-popup-close"><span>레이어 팝업닫기</span></a>
                </div>
                
                <div className="layer-popup gallery-expand">
                    <a href="javascript:;" className="btn-popup-close"><span>레이어 팝업닫기</span></a>
            
                    <div className="slider slider05">
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery01.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery02.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery03.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery04.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery05.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery06.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery07.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery08.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery09.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery10.jpg" alt=""/></div>
                        </div>
            
                        <div className="slide-content">
                            <div className="img-box"><img src="../static/img/pop_gallery11.jpg" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
  }

  
  customAlert(message) {
	$(".term-check").html(message);
	$(".term-check").show();
	clearTimeout(this.state.popTimer);
	this.state.ppopTimer = setTimeout(function() {
		$(".term-check").hide();
	}, 3000);
  }

  /*pinpoint 모두 동의*/
  toggleCheckboxAll(event) {
    //event.preventDefault();
    const { isAgreementExtended, agreement1, agreement2, agreement3 } = this.state;

    // 모두 동의 클릭시 핀포인트 호출
    sendEvent(ZB_EVENT_TYPE.ZB_SCREEN_CLICK, {
        user_no: user_no,
        adId: adId,
        screen_name: "분양카달로그",
        button_name: "모두동의",
        ad_name: "더샵거제디클리브",
        platform: userPlatform,
        business: business,
        mkt:mkt
    });

	if(isAgreementExtended){
		$('#agree01').prop('checked', false);
		$('#agree02').prop('checked', false);
		$('#agree03').prop('checked', false);
		$('#agree04').prop('checked', false);

		this.state.agreement1 = false;
		this.state.agreement2 = false;
		this.state.agreement3 = false;
		this.state.isAgreementExtended = false;
	}else{
		$('#agree01').prop('checked', true);
		$('#agree02').prop('checked', true);
		$('#agree03').prop('checked', true);
		$('#agree04').prop('checked', true);

		this.state.agreement1 = true;
		this.state.agreement2 = true;
		this.state.agreement3 = true;
		this.state.isAgreementExtended = true;
	}

  }


  toggleCheckbox(event, target) {
    // event.preventDefault();
      const {isAgreementExtended, agreement1, agreement2, agreement3 } = this.state;
     if(target == 'agreement1'){
         this.state.agreement1 = event.target.checked;
     }
     if(target == 'agreement2'){
         this.state.agreement2 = event.target.checked;
     }    
     if(target == 'agreement3'){
         this.state.agreement3 = event.target.checked;
     }
 
 
     if(this.state.agreement1 && this.state.agreement2 && this.state.agreement3){
         this.state.isAgreementExtended = true;
     } else {
         this.state.isAgreementExtended = false;
     }
     $('#agree01').prop('checked', this.state.isAgreementExtended);
   }
 
   getParam() {
     const params = this.model.genQueryParams(this.props.router.asPath);
 
     var domain_platform = "";
     var mkt_source = "";
 
     var path = this.props.router.asPath;
     if(path.indexOf("?")!=-1){
       path = path.substring(0,path.indexOf("?"));
     }
     var arSplitUrl   = path.split("/");
     var nArLength     = arSplitUrl.length;
     var domain = this.props.router.query.domain;
     this.state.domain = domain;
 
     if(domain){
       if(domain==="zigbang")domain_platform="zb";
       if(domain==="daum")domain_platform="da";
       if(domain==="hogangnono")domain_platform="hg";
     }
 
     if(params.mkt_source){
       mkt_source=params.mkt_source;
     }
 
     business=domain+"_"+bizPlatform;
     mkt=mkt_source;
     this.setState({ business, mkt }, () => {
       this.params = params;
     });
 
   }
 
   submitValidation(phone, agreement1, agreement2) {
 
     const regExp = /^01([0|1|6|7|8|9]{1})([0-9]{3,4})([0-9]{4})$/;
     
     if (!phone) {
       this.customAlert("연락처를 입력해주세요.");
       return false;
     }else{
         if(!regExp.test(phone)) {
 
         this.customAlert("연락처가 잘못 입력되었습니다. 다시 한 번 확인해 주세요.");
         return false;
         }else{
             if (!agreement1 || !agreement2) {
                 this.customAlert("필수 약관에 동의해 주세요.");
                 return false;
             }else{
                 return true;
             }
         }
     }
   }
 
   async apiSubmit(event) {
     event.preventDefault();
     const { domain, agreement1, agreement2, agreement3 } = this.state;
     const $this = this;
 
     var mkt_device = osName+"-"+browserName;
     var marketing_media = "기타";
     var marketing_source = "";
 
     const params = this.model.genQueryParams(this.props.router.asPath);
     if (params.mkt_source) {
         marketing_source = params.mkt_source;
     }
 
     if(domain){
       if(domain==="zigbang")marketing_media="직방";
       if(domain==="daum")marketing_media="다음";
       if(domain==="hogangnono")marketing_media="호갱노노";
     }
     
     const phone = $('#phone').val();
     const validation = this.submitValidation(phone, agreement1, agreement2);
     const marketing_approvement = this.state.agreement3;
     
     if (!validation) return null;
 
     $('body').append('<div className="overlay"></div>');
     $("#loading").show();
 
     console.log("apiSubmit(os) : "+osName); //Windows
     console.log("apiSubmit(browser) : "+browserName); //firefox
     console.log("apiSubmit(phone) : "+phone); //01012345678
     console.log("apiSubmit(device) : "+mkt_device); //windows-firefox
     console.log("apiSubmit(mkt_source) : "+marketing_source);
     console.log("apiSubmit(media) : "+marketing_media);//직방
     console.log("apiSubmit(user_no) : "+user_no); //user_no    
     console.log("apiSubmit(adid) : "+adId); //adId
     console.log("apiSubmit(mkt_approvement) : "+marketing_approvement); //marketing_approvement
     console.log("apiSubmit(domain) : "+domain); //marketing_approvement
 
     $('input').val('');
     $('input[type="checkbox"]').prop('checked', false);
     this.state.agreement1 = false;
     this.state.agreement2 = false;
     this.state.agreement3 = false;
 
     fetch(apiEndPoint, {
       method: "POST",
       body: JSON.stringify({
         campaign_id : 23  , //(전달받은 분양광고 ID)
         area_danji_id: 36389, //(전달받은 단지 ID , 없을경우  0)
         domain: domain, //(path 로 전달받은 domain , ex : ) zigbang, hogangnono, daum )
         user_phone: phone, //(신청자 전화번호)
         marketing_source: marketing_source || null, // (마케팅관련파라미터)
         device_type: mkt_device, //(디바이스 타입)
         marketing_approvement: marketing_approvement //(마케팅 수집 동의 여부)
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
 
     }).then(function(response) {
       response.status     //=> number 100–599
       response.statusText //=> String
       response.headers    //=> Headers
       response.url        //=> String
       return response.json().then(function(json) {
         return json;
       });
     }).then(function(json) {
         console.log(json.code);
         console.log(json.name);
         console.log(json.message);
         console.log(json.campaignOfferId);
 
         if(json.code===undefined){
          /*json 결과 {} 즉, 이 조건을 타면 신청 된 것임*/
          var campaign_offer_id = json.campaignOfferId;// 신청완료 핀포인트 호출
 
         // 신청 완료시 핀포인트 호출 
         sendEvent(ZB_EVENT_TYPE.APART_PURCHASE, {
             user_no: user_no,
             adId: adId,
             screen_name: "분양카달로그",
             button_name: "응모하기",
             ad_name: "더샵거제디클리브",
             platform: userPlatform,
             business: business,
             mkt: marketing_source,
             campaign_offer_id: campaign_offer_id
         });
 
           $("#loading").hide();
           if(screen.width >= 769) {
             $(".layer-popup").css("top", $(document).scrollTop() + 55);
           } else {
             $(".layer-popup").css("top", $(document).scrollTop());
           }
           $(".layer-popup.finish").show();
         }else{			
             $this.customAlert(json.message);
 
             $("#loading").hide();
             $('.overlay').remove();
         }
     });
   }
 
 }
 
 
 export default withRouter(Register);
