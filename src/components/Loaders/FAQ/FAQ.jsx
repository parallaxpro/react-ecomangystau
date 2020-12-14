import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class FAQ extends Component {
    render() {
        return(
            <div className={'loading'}>

                <div className={'d-none d-lg-block'}>
                    <ContentLoader viewBox="0 0 920 1129" backgroundColor={'#EAF2E0'} foregroundColor={'#F7FAF4'}>
                        <path d="M0 100H910C915.523 100 920 104.477 920 110V189H10C4.47715 189 0 184.523 0 179V100Z" fill="white"/>
                        <path d="M0 205H910C915.523 205 920 209.477 920 215V352H10C4.47715 352 0 347.523 0 342V205Z" fill="white"/>
                        <path d="M0 677H910C915.523 677 920 681.477 920 687V824H10C4.47715 824 0 819.523 0 814V677Z" fill="white"/>
                        <path d="M0 372H910C915.523 372 920 376.477 920 382V490H10C4.47715 490 0 485.523 0 480V372Z" fill="white"/>
                        <path d="M0 844H910C915.523 844 920 848.477 920 854V962H10C4.47715 962 0 957.523 0 952V844Z" fill="white"/>
                        <path d="M0 510H910C915.523 510 920 514.477 920 520V657H10C4.47715 657 0 652.523 0 647V510Z" fill="white"/>
                        <path d="M0 982H910C915.523 982 920 986.477 920 992V1129H10C4.47715 1129 0 1124.52 0 1119V982Z" fill="white"/>
                        <rect x="908" y="19" width="12" height="12" rx="2" fill="white"/>
                        <rect x="886" y="19" width="7" height="12" rx="2" fill="white"/>
                        <rect x="854" y="19" width="17" height="12" rx="2" fill="white"/>
                        <rect x="825" y="19" width="14" height="12" rx="2" fill="white"/>
                        <rect x="795" y="19" width="15" height="12" rx="2" fill="white"/>
                        <rect x="774" y="19" width="6" height="12" rx="2" fill="white"/>
                        <rect x="737" y="19" width="22" height="12" rx="2" fill="white"/>
                        <rect width="288" height="45" rx="2" fill="white"/>
                    </ContentLoader>
                </div>

                <div className={'d-block d-lg-none'}>
                    <ContentLoader viewBox="0 0 570 772" backgroundColor={'#EAF2E0'} foregroundColor={'#F7FAF4'}>
                        <rect x="171" y="60" width="12" height="12" rx="2" fill="white"/>
                        <rect x="149" y="60" width="7" height="12" rx="2" fill="white"/>
                        <rect x="117" y="60" width="17" height="12" rx="2" fill="white"/>
                        <rect x="88" y="60" width="14" height="12" rx="2" fill="white"/>
                        <rect x="58" y="60" width="15" height="12" rx="2" fill="white"/>
                        <rect x="37" y="60" width="6" height="12" rx="2" fill="white"/>
                        <rect y="60" width="22" height="12" rx="2" fill="white"/>
                        <rect width="360" height="36" rx="5" fill="white"/>
                        <rect y="122" width="570" height="100" rx="5" fill="white"/>
                        <rect y="242" width="570" height="80" rx="5" fill="white"/>
                        <rect y="342" width="570" height="120" rx="5" fill="white"/>
                        <rect y="482" width="570" height="70" rx="5" fill="white"/>
                        <rect y="572" width="570" height="200" rx="5" fill="white"/>
                    </ContentLoader>
                </div>

            </div>
        )
    }
}

export default FAQ