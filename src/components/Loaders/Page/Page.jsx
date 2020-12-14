import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class Page extends Component {
    render() {
        return(
            <div className={'loading'}>
                <div className={'d-none d-lg-block'}>
                    <ContentLoader viewBox="0 0 1110 686" backgroundColor={'#EAF2E0'} foregroundColor={'#F7FAF4'}>
                        <path d="M0 186H1100C1105.52 186 1110 190.477 1110 196V686H9.99999C4.47715 686 0 681.523 0 676V186Z" fill="white"/>
                        <rect x="1003" y="122" width="12" height="12" rx="2" fill="white"/>
                        <rect x="981" y="122" width="7" height="12" rx="2" fill="white"/>
                        <rect x="949" y="122" width="17" height="12" rx="2" fill="white"/>
                        <rect x="920" y="122" width="14" height="12" rx="2" fill="white"/>
                        <rect x="890" y="122" width="15" height="12" rx="2" fill="white"/>
                        <rect x="869" y="122" width="6" height="12" rx="2" fill="white"/>
                        <rect x="832" y="122" width="22" height="12" rx="2" fill="white"/>
                        <rect x="95" width="879" height="36" rx="3" fill="white"/>
                        <rect x="95" y="54" width="728" height="36" rx="3" fill="white"/>
                        <rect x="95" y="120" width="356" height="16" rx="3" fill="white"/>
                    </ContentLoader>
                </div>
                <div className={'d-block d-lg-none'}>
                    <ContentLoader viewBox="0 0 510 1397" backgroundColor={'#EAF2E0'} foregroundColor={'#F7FAF4'}>
                        <rect y="598" width="430" height="20" rx="10" fill="white"/>
                        <rect y="631" width="430" height="20" rx="10" fill="white"/>
                        <rect y="694" width="85" height="20" rx="10" fill="white"/>
                        <rect y="694" width="85" height="20" rx="10" fill="white"/>
                        <rect y="941" width="140" height="20" rx="10" fill="white"/>
                        <rect y="1203" width="86" height="20" rx="10" fill="white"/>
                        <rect y="1377" width="200" height="20" rx="10" fill="white"/>
                        <rect y="1005" width="227" height="20" rx="10" fill="white"/>
                        <rect y="1064" width="186" height="20" rx="10" fill="white"/>
                        <rect y="754" width="450" height="18" rx="9" fill="white"/>
                        <rect y="1258" width="493" height="18" rx="9" fill="white"/>
                        <rect y="1118" width="482" height="18" rx="9" fill="white"/>
                        <rect y="785" width="510" height="18" rx="9" fill="white"/>
                        <rect y="1289" width="443" height="18" rx="9" fill="white"/>
                        <rect y="1149" width="449" height="18" rx="9" fill="white"/>
                        <rect y="816" width="501" height="18" rx="9" fill="white"/>
                        <rect y="1320" width="82" height="18" rx="9" fill="white"/>
                        <rect y="847" width="450" height="18" rx="9" fill="white"/>
                        <rect y="878" width="304" height="18" rx="9" fill="white"/>
                        <rect x="171" y="92" width="12" height="12" rx="2" fill="white"/>
                        <rect x="149" y="92" width="7" height="12" rx="2" fill="white"/>
                        <rect x="117" y="92" width="17" height="12" rx="2" fill="white"/>
                        <rect x="88" y="92" width="14" height="12" rx="2" fill="white"/>
                        <rect x="58" y="92" width="15" height="12" rx="2" fill="white"/>
                        <rect x="37" y="92" width="6" height="12" rx="2" fill="white"/>
                        <rect y="92" width="22" height="12" rx="2" fill="white"/>
                        <rect width="418" height="32" rx="5" fill="white"/>
                        <rect y="52" width="331" height="16" rx="5" fill="white"/>
                        <rect y="154" width="510" height="394" rx="5" fill="white"/>
                    </ContentLoader>
                </div>
            </div>
        )
    }
}

export default Page