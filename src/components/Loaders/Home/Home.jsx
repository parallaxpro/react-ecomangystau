import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class Home extends Component {
    render() {
        return(
            <ContentLoader viewBox="0 0 1110 1008" backgroundColor={'#EAF2E0'} foregroundColor={'#F7FAF4'}>
                <path d="M0 20H530C535.523 20 540 24.4772 540 30V114H9.99999C4.47715 114 0 109.523 0 104V20Z" fill="white"/>
                <path d="M570 20H1100C1105.52 20 1110 24.4772 1110 30V114H580C574.477 114 570 109.523 570 104V20Z" fill="white"/>
                <path d="M760 198H1100C1105.52 198 1110 202.477 1110 208V298H760V198Z" fill="white"/>
                <rect x="760" y="154" width="350" height="24" rx="12" fill="white"/>
                <path d="M760 313H1100C1105.52 313 1110 317.477 1110 323V413H760V313Z" fill="white"/>
                <path d="M760 428H1100C1105.52 428 1110 432.477 1110 438V528H760V428Z" fill="white"/>
                <path d="M0 154H720C725.523 154 730 158.477 730 164V528H10C4.47716 528 0 523.523 0 518V154Z" fill="white"/>
                <rect y="993" width="15" height="15" rx="7.5" fill="white"/>
                <rect x="30" y="993" width="15" height="15" rx="7.5" fill="white"/>
                <rect x="60" y="993" width="15" height="15" rx="7.5" fill="white"/>
                <rect y="608" width="182" height="26" rx="5" fill="white"/>
                <rect y="706" width="200" height="30" rx="5" fill="white"/>
                <rect y="752" width="570" height="30" rx="5" fill="white"/>
                <rect y="798" width="630" height="30" rx="5" fill="white"/>
                <rect y="858" width="630" height="15" rx="5" fill="white"/>
                <rect y="886" width="300" height="15" rx="5" fill="white"/>
                <path d="M768 608H1100C1105.52 608 1110 612.477 1110 618V1008H778C772.477 1008 768 1003.52 768 998V608Z" fill="white"/>
            </ContentLoader>
        )
    }
}

export default Home