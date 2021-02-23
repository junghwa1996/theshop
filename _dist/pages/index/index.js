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

//const apiEndPoint = "https://apis.zigbang.net/v2/campaign/pre_consulting"; //dev
const apiEndPoint = "https://apis.zigbang.com/v2/campaign/pre_consulting"; //real
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
	  adId: adId,
      screen_name: "분양카달로그",
      ad_name: "래미안엘리니티",
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
                            <li><a href="javascript:;">Home</a></li>
                            <li><a href="javascript:;">Emblem</a></li>
                            <li><a href="javascript:;">Price</a></li>
                            <li><a href="javascript:;">Interview</a></li>
                            <li><a href="javascript:;">Unit - 59㎡A</a></li>
                            <li><a href="javascript:;">Unit - 74㎡B</a></li>
                            <li><a href="javascript:;">Unit - 84㎡C</a></li>
                            <li><a href="javascript:;">Unit - Other UNIT</a></li>
                            <li><a href="javascript:;">VR Home Tour</a></li>
                            <li><a href="javascript:;">Unit Plan</a></li>
                            <li><a href="javascript:;">Location & Layout</a></li>
                            <li><a href="javascript:;">Gallery</a></li>
                            <li><a href="javascript:;">Location</a></li>
                            <li><a href="javascript:;">Calendar</a></li>
                            <li><a href="javascript:;">Event</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="section kv">
                        <div className="img-box"><img src="../static/img/kv_2nd.jpg" alt="좋은 집안을 만나다"/></div>
                    </div>

                    <div className="section emblem">
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_01.jpg"/>
                            <iframe id="video01" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/416621786?dnt=1&muted=1" data-idx="0"></iframe>
                            <button type="button" className="btn-sound" data-idx="0" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section price">
                        <div className="title-box">
                            <div className="marker txt-en">Price</div>
                            <h2>6월 11일, 입주자모집공고 공개!</h2>
                        </div>
                        <div className="price-box">
                            <div className="table-box">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>전용(㎡)</th>
                                            <th>분양세대</th>
                                            <th>분양가(만원)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>51A</td>
                                            <td>52</td>
                                            <td>59,100</td>
                                        </tr>
                                        <tr>
                                            <td>51B</td>
                                            <td>12</td>
                                            <td>57,800</td>
                                        </tr>
                                        <tr>
                                            <td>59A</td>
                                            <td>63</td>
                                            <td>69,700</td>
                                        </tr>
                                        <tr>
                                            <td>59B</td>
                                            <td>10</td>
                                            <td>69,000</td>
                                        </tr>
                                        <tr>
                                            <td>74A</td>
                                            <td>16</td>
                                            <td>81,400</td>
                                        </tr>
                                        <tr>
                                            <td>74B</td>
                                            <td>70</td>
                                            <td>79,700</td>
                                        </tr>
                                        <tr>
                                            <td>84A</td>
                                            <td>67</td>
                                            <td>91,900</td>
                                        </tr>
                                        <tr>
                                            <td>84B</td>
                                            <td>87</td>
                                            <td>90,900</td>
                                        </tr>
                                        <tr>
                                            <td>84C</td>
                                            <td>55</td>
                                            <td>90,000</td>
                                        </tr>
                                        <tr>
                                            <td>84D</td>
                                            <td>34</td>
                                            <td>90,900</td>
                                        </tr>
                                        <tr>
                                            <td>89</td>
                                            <td>5</td>
                                            <td>96,850</td>
                                        </tr>
                                        <tr>
                                            <td>101A</td>
                                            <td>1</td>
                                            <td>125,000</td>
                                        </tr>
                                        <tr>
                                            <td>101B</td>
                                            <td>1</td>
                                            <td>125,000</td>
                                        </tr>
                                        <tr>
                                            <td>109</td>
                                            <td>1</td>
                                            <td>108,680</td>
                                        </tr>
                                        <tr>
                                            <td>121</td>
                                            <td>1</td>
                                            <td>119,470</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="../static/catalogue.pdf" target="_blank">입주자모집공고 보러가기</a>
                            <p>
                                &#8251; 상기 분양가격은 타입 별 최저 분양가이며<br/>
                                발코니 확장과 추가 선택품목이 포함되지 않은 가격입니다.<br/>
                                세부내용은 입주자 모집공고를 확인해 주세요.
                            </p>
                        </div>
                    </div>

                    <div className="section interview">
                        <div className="title-box">
                            <div className="marker txt-en">Interview</div>
                            <span className="icon-new"><img src="../static/img/icon_new.png" alt="New"/></span>

                            <h2>왜, 래미안 엘리니티일까</h2>
                            <p>
                                <span><i>#</i> 청약에서계약까지</span>
                                <span><i>#</i> 이유있는선택</span>
                                <span><i>#</i> 기대감</span>
                            </p>
                        </div>
                            
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_07_v1.jpg" alt=""/>
                            <iframe id="video02" src="" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/430294886?dnt=1&muted=1" data-idx="1"></iframe>
                            <button type="button" className="btn-sound" data-idx="1" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section unit">
                        <div className="title-box">
                            <div className="marker txt-en">Unit</div>
                            <h2>59㎡A</h2>
                            <p>
                                <span><i>#</i> 3BAY_판상형</span>
                                <span><i>#</i> 맞통풍</span>
                                <span><i>#</i> 침실3개, 욕실2개</span>
                            </p>
                        </div>
                            
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_02_v1.jpg" alt=""/>
                            <iframe id="video03" src="" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/426099305?dnt=1&muted=1" data-idx="2"></iframe>
                            <button type="button" className="btn-sound" data-idx="2" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section unit">
                        <div className="title-box">
                            <div className="marker txt-en">Unit</div>
                            <h2>74㎡B</h2>
                            <p>
                                <span><i>#</i> 이면개방형</span>
                                <span><i>#</i> 스마트사이징</span>
                                <span><i>#</i> 침실3개, 욕실2개</span>
                            </p>
                        </div>
                            
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_03_v1.jpg" alt=""/>
                            <iframe id="video04" src="" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/426099226?dnt=1&muted=1" data-idx="3"></iframe>
                            <button type="button" className="btn-sound" data-idx="3" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section unit">
                        <div className="title-box">
                            <div className="marker txt-en">Unit</div>
                            <h2>84㎡C</h2>
                            <p>
                                <span><i>#</i> 이면개방형</span>
                                <span><i>#</i> 코너부 전용면적 확장</span>
                                <span><i>#</i> 침실3개, 욕실2개</span>
                            </p>
                        </div>
                            
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_04_v1.jpg" alt=""/>
                            <iframe id="video05" src="" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/425864541?dnt=1&muted=1" data-idx="4"></iframe>
                            <button type="button" className="btn-sound" data-idx="4" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section unit">
                        <div className="title-box">
                            <div className="marker txt-en">Unit</div>
                            <h2>Other UNIT</h2>
                            <p>
                                <span><i>#</i> 미건립유닛</span>
                                <span><i>#</i> 12개 타입</span>
                            </p>
                        </div>
                            
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_05_v1.jpg" alt=""/>
                            <iframe id="video06" src="" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/427538662?dnt=1&muted=1" data-idx="5"></iframe>
                            <button type="button" className="btn-sound" data-idx="5" data-muted="true"></button>
                        </div>
                    </div>

                    <div className="section vr">
                        <div className="title-box">
                            <div className="marker txt-en">VR Home Tour</div>
                            <h2>VR로 확인하는 세대 내부</h2>
                            <p>
                                <span><i>#</i> 실속있는공간</span>
                                <span><i>#</i> 숨은정보찾기</span>
                            </p>
                        </div>
                            
                        <div className="vr-wrap">
                            <div className="slider slider01">
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/slider01_01_2nd.png" alt=""/>
                                        <a href="javascript:;" className="btn-show-vr" data-src="https://m.zigbang.com/app/html/vr.html?id=d9jxzaYm&amp;noBtns=1&amp;onlyVR=1"></a>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/slider01_02_2nd.png" alt=""/>
                                        <a href="javascript:;" className="btn-show-vr" data-src="https://m.zigbang.com/app/html/vr.html?id=NKTLgsTO&amp;noBtns=1&amp;onlyVR=1"></a>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box">
                                        <img src="../static/img/slider01_03_2nd.png" alt=""/>
                                        <a href="javascript:;" className="btn-show-vr" data-src="https://m.zigbang.com/app/html/vr.html?id=nLlH62hy&amp;noBtns=1&amp;onlyVR=1"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section plan">
                        <div className="title-box">
                            <div className="marker txt-en">Unit Plan</div>
                            <h2>선택의 폭이 넓어진 공간</h2>
                        </div>
                            
                        <div className="slider-wrap">
                            <a href="javascript:;" className="btn-popup btn-expand btn-plan"></a>

                            <div className="slider slider02">
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_01_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_02_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_03_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_04_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_05_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_06_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_07_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_08_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_09_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_10_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_11_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_12_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_13_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_14_2nd.jpg" alt=""/></div>
                                </div>
                                <div className="slide-content">
                                    <div className="img-box"><img src="../static/img/slider02_15_2nd.jpg" alt=""/></div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-wrap">
                            <a href="#" className="on">51A</a>
                            <a href="#">51B</a>
                            <a href="#">59A</a>
                            <a href="#">59B</a>
                            <a href="#">74A</a>
                            <a href="#">74B</a>
                            <a href="#">84A</a>
                            <a href="#">84B</a>
                            <a href="#">84C</a>
                            <a href="#">84D</a>
                            <a href="#">89</a>
                            <a href="#">109</a>
                            <a href="#">121</a>
                            <a href="#">101A</a>
                            <a href="#">101B</a>
                        </div>
                    </div>

                    <div className="section layout">
                        <div className="title-box">
                            <div className="marker txt-en">Location & Layout</div>
                            <h2>한눈에 확인하는 입지와 단지 배치</h2>
                            <p>
                                <span><i>#</i> 래미안라이프</span>
                                <span><i>#</i> 클럽래미안</span>
                                <span><i>#</i> 포레스토리</span>
                            </p>
                        </div>
                            
                        <div className="iframe-box">
                            <img src="../static/img/video_thumb_06_v1.jpg" alt=""/>
                            <iframe id="video07" src="" frameBorder="0" allow="fullscreen; autoplay" allowFullScreen data-src="https://apis.zigbang.com/v2/vimeo/427552562?dnt=1&muted=1" data-idx="6"></iframe><button type="button" className="btn-sound" data-idx="6" data-muted="true"></button>
                        </div>
                    </div>
                    
                    <div className="section gallery">
                        <div className="title-box">
                            <div className="marker txt-en">Gallery</div>
                            <h2>먼저 확인해보는 시간</h2>
                            <p>
                                <span><i>#</i> Community</span>
                            </p>
                        </div>
                            
                        <div className="img-box">
                            <a href="javascript:;" className="btn-popup btn-expand btn-gallery"></a>
                            <img src="../static/img/gallery.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="section location">
                        <div className="title-box">
                            <div className="marker txt-en">Location</div>
                            <h2>당신은 어디에 살고 싶은가요</h2>
                            <p>
                                <span><i>#</i> Traffic</span>
                            </p>
                        </div>
                            
                        <div className="slider slider03">
                            <div className="slide-content">
                                <div className="img-box"><img src="../static/img/slider03_01_2nd.jpg" alt=""/></div>
                        
                                <div className="content-box">
                                    <p>지하철역과 내부순환로 1km이내,</p>
                                    <p>추가 개발로 가까워지는 교통</p>
                                </div>
                            </div>

                            <div className="slide-content">
                                <div className="img-box"><img src="../static/img/slider03_02_2nd.jpg" alt=""/></div>
                        
                                <div className="content-box">
                                    <p>종암초, 대광초·중·고, 고려대</p>
                                    <p>신설동 학원가 등 가까운 교육</p>
                                </div>
                            </div>

                            <div className="slide-content">
                                <div className="img-box"><img src="../static/img/slider03_03_2nd.jpg" alt=""/></div>
                        
                                <div className="content-box">
                                    <p>롯데백화점, 이마트, 경동시장,</p>
                                    <p>고대병원 등 곁으로 온 생활</p>
                                </div>
                            </div>

                            <div className="slide-content">
                                <div className="img-box"><img src="../static/img/slider03_04_2nd.jpg" alt=""/></div>
                        
                                <div className="content-box">
                                    <p>성북천, 청계천, 숭인근린공원,</p>
                                    <p>선농단역사공원 등 인접한 자연</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section calendar">
                        <div className="title-box">
                            <div className="marker txt-en">Calendar</div>
                            <h2>6월 23일은 1순위 청약</h2>
                            <p>
                                <span><i>#</i> Notice</span>
                            </p>
                        </div>
                            
                        <div className="img-box">
                            <img src="../static/img/calendar_v1.jpg" alt=""/>
                        </div>
                    </div>
                    
                    <div className="section event">
                        <div className="title-box event01 m-only">
                            <div className="marker txt-en">Event</div>
                            <h2 className="txt-en"></h2>
                        </div>

                        <div className="event01-box m-only">
                            <img src="../static/img/event01_end_pc.jpg" alt="" className="pc-only"/>
                            <img src="../static/img/event01_end_m.jpg" alt="" className="m-only"/>
                        </div>

                        <div className="title-box event02">
                            <div className="marker txt-en">Plus Event</div>
                            <h2 className="txt-en">인터뷰 동영상을 보시고 문제를 맞춰주세요!</h2>
                            <p>래미안 엘리니티는 <br/>예전에 어떻게 불려졌을까요?</p>
                        </div>

                        <div className="form-box">
                            <form onSubmit={this.apiSubmit.bind(this)}>
                                <div className="answer-box">
                                    <span>용두</span>
                                    <input type="tel" id="answer" className="txt-answer" maxLength="1"/>
                                    <span>구역</span>
                                </div>

                                <p className="input-check">응모 핸드폰 번호</p>
                                <input type="tel" id="phone" className="phone-input" placeholder="휴대폰 번호 입력 (- 제외)" maxLength="11"/>

                                <div className="giftcard-box">
                                    <dl>
                                        <dt>응모 기간</dt>
                                        <dd>2020.06.24(수) ~ 06.30(화)</dd>
                                        <dt>이벤트 경품</dt>
                                        <dd>해피기프트카드 3만원권 5명 추첨</dd>
                                    </dl>

                                    <div className="img-box"><img src="../static/img/giftcard.png" alt=""/></div>
                                </div>
                                
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
                                        <input type="checkbox" id="agree04" onClick={event => this.toggleCheckbox(event, "agreement3")}/>
                                        <label htmlFor="agree04">부동산 정보 및 이벤트 혜택 수신(선택)</label>
                                        <a href="javascript:;" className="btn-popup btn-terms terms03">약관보기</a>
                                    </li>
                                </ul>

                                <div className="btn-wrap">
                                    <button type="submit" className="btn-submit">INVITATION</button>
                                    <a href="javascript:;" className="btn-popup btn-notice">이벤트 자세히 보기</a>
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
                            <span>래미안 엘리니티</span>
                        </li>
                        <li>
                            <strong>위치</strong>
                            <span>서울시 동대문구 용두동 753-9 번지 일원</span>
                        </li>
                        <li>
                            <strong>규모</strong>
                            <span>지하 2층 ~ 지상 21층 / 아파트 16개동 <br/>및 부대 복리시설</span>
                        </li>
                        <li>
                            <strong>세대수</strong>
                            <span>총 1,048세대 중 일반분양 475세대</span>
                        </li>
                        <li>
                            <strong>시행</strong>
                            <span>용두6구역 주택재개발정비사업조합</span>
                        </li>
                        <li>
                            <strong>시공</strong>
                            <span>삼성물산</span>
                        </li>
                        <li>
                            <strong>문의</strong>
                            <span><a href="tel:02-959-0477">02-959-0477</a></span>
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
                    <iframe src="" id="vr-iframe" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
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
	  adId: adId,
      screen_name: "분양카달로그",
      button_name: "모두동의",
      ad_name: "래미안엘리니티",
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
	  //alert("연락처를 입력해주세요.");
	  this.customAlert("연락처를 입력해주세요.");
      return false;
    }else{
		if(!regExp.test(phone)) {

		//alert("연락처가 잘못 입력되었습니다.\n다시 한 번 확인해주세요.");
		this.customAlert("연락처가 잘못 입력되었습니다. 다시 한 번 확인해 주세요.");
		return false;
		}else{
			if (!agreement1 || !agreement2) {
				//alert("약관에 모두 동의해주세요.");
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
    
    const answer = $('#answer').val();
    if (answer !== '6') {
		$this.customAlert("정답이 아니네요. 다시 입력해주세요.<br>힌트 : 3 + 3 = ?");
        return;
    }

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

	$('body').append('<div class="overlay"></div>');
	$("#loading").show();

    console.log("apiSubmit(os) : "+osName); //Windows
    console.log("apiSubmit(browser) : "+browserName); //firefox
	console.log("apiSubmit(phone) : "+phone); //01012345678
	console.log("apiSubmit(device) : "+mkt_device); //windows-firefox
	console.log("apiSubmit(mkt_source) : "+marketing_source);
	console.log("apiSubmit(media) : "+marketing_media);//직방
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
        campaign_id : 34, 
        area_danji_id: 51813,
        // campaign_id : 23, //(전달받은 분양광고 ID)
        // area_danji_id: 36389, //(전달받은 단지 ID , 없을경우  0)
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

        if(json.code===undefined){
		 /*json 결과 {} 즉, 이 조건을 타면 신청 된 것임*/

        // 신청 완료시 핀포인트 호출 
        sendEvent(ZB_EVENT_TYPE.APART_PURCHASE, {
            adId: adId,
            screen_name: "분양카달로그",
            button_name: "응모하기",
            ad_name: "래미안엘리니티",
            platform: userPlatform,
            business: business,
            mkt: marketing_source
        });
          //alert("이벤트 참여가 완료되었습니다.");

		  $("#loading").hide();
		  if(screen.width >= 769) {
			$(".layer-popup").css("top", $(document).scrollTop() + 55);
		  } else {
			$(".layer-popup").css("top", $(document).scrollTop());
		  }
		  $(".layer-popup.finish").show();
        }else{
    		//console.log(json.code);
			//alert(json.message);
			
			$this.customAlert(json.message);

			$("#loading").hide();
			$('.overlay').remove();
		}
    });
  }

}


export default withRouter(Register);
