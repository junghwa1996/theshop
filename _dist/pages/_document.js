import Document, { Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
  renderContent = () => {
            const time = new Date().getTime();
			return (
				<html lang="ko" itemScope="" itemType="https://schema.org/WebPage">
				<Head>
					<title>더샵디클리브</title>
					<meta charSet="utf-8"/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
					<meta httpEquiv="content-type" content="text/html; charset=UTF-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, viewport-fit=cover"/>
					<meta name="title" content="더샵디클리브"/>
					<meta name="keywords" content="더샵디클리브"/>
					<meta name="description" content="더샵디클리브"/>
					<meta name="author" content={"zigbang"} />
					<link rel="shortcut icon" href=""/>
					<link rel="apple-touch-icon" href=""/>
					<link rel="preload" crossorigin="crossorigin" href="../static/fonts/NotoSansKR-Light.woff" as="font"/>
					<link rel="preload" crossorigin="crossorigin" href="../static/fonts/NotoSansKR-Regular.woff" as="font"/>
					<link rel="preload" crossorigin="crossorigin" href="../static/fonts/Lato-Regular.woff" as="font"/>
					<link rel="stylesheet" type="text/css" href={"../static/css/common.min.css?ts=" + time }/>
				</Head>
				<body>
					<Main />
					<script src={"../static/js/polyfill.min.js?ts=" + time }></script>
					<script src={"../static/js/fetch.umd.min.js?ts=" + time }></script>
					<script src={"../static/js/jquery-3.4.1.min.js?ts=" + time }></script>
					<script src={"../static/js/slick.min.js?ts=" + time }></script>
					<script src={"../static/js/player.min.js?ts=" + time }></script>
					<script async src={'https://www.googletagmanager.com/gtag/js?id=UA-173917921-15'}></script>
					<script async src={'https://www.googletagmanager.com/gtag/js?id=AW-822803807'}></script>
					<NextScript />
				</body>
			  </html>
			)

  }

  render(){
  return this.renderContent();
  }

}
